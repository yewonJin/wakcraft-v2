import { ArchitectureContest } from "@/domains/architectureContest";
import { Schema, Model, model, models } from "mongoose";

interface ArchitectureContestModel extends Model<ArchitectureContest> {
  findAll: () => Promise<ArchitectureContest[]>;
  findByEpisode: (episode: number) => Promise<ArchitectureContest>;
  updateArchitectId: (
    episode: number,
    line: string,
    beforeId: string,
    afterId: string,
  ) => Promise<void>;
}

const architectureContestSchema = new Schema({
  contentInfo: {
    subject: { type: String },
    episode: { type: Number },
    date: { type: Date, default: Date.now },
    youtube_url: { type: String },
  },
  lineInfo: [
    {
      line: { type: String },
      youtube_url: { type: String, required: true },
      line_details: [
        {
          topText: { type: String },
          bottomText: { type: String },
          line: { type: String },
          minecraft_id: { type: String },
          image_url: { type: String },
          youtube_url: { type: String },
          ranking: { type: Number },
        },
      ],
    },
  ],
});

architectureContestSchema.statics.create = function (payload) {
  const noobProHacker = new this(payload);
  return noobProHacker.save();
};

architectureContestSchema.statics.findAll = function () {
  return this.find({});
};

architectureContestSchema.statics.findByEpisode = function (episode: number) {
  return this.findOne({ "contentInfo.episode": episode });
};

architectureContestSchema.statics.updateArchitectId = function (
  episode: number,
  line: string,
  beforeId: string,
  afterId: string,
) {
  return this.updateOne(
    { "contentInfo.episode": episode },

    {
      $set: {
        "lineInfo.$[element].line_details.$[detail].minecraft_id": afterId,
      },
    },
    {
      arrayFilters: [
        {
          "element.line": line,
        },
        { "detail.minecraft_id": beforeId },
      ],
    },
  );
};

const ArchitectureContest =
  (models["ArchitectureContest"] as ArchitectureContestModel) ||
  model<ArchitectureContest, ArchitectureContestModel>(
    "ArchitectureContest",
    architectureContestSchema,
  );

export default ArchitectureContest;
