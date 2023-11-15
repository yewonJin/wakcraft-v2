import { NoobProHacker } from "@/domains/noobprohacker";
import { Schema, Model, model, models } from "mongoose";

interface NoobProHackerModel extends Model<NoobProHacker> {
  findAll: () => Promise<NoobProHacker[]>;
}

const noobprohackerSchema = new Schema({
  contentInfo: {
    episode: { type: Number, required: true, unique: true },
    main_subject: { type: String },
    date: { type: Date, default: Date.now },
    youtube_url: { type: String },
  },
  lineInfo: [
    {
      subject: { type: String, required: true },
      line_ranking: { type: Number, default: 0 },
      line_details: {
        noob: {
          minecraft_id: { type: String, required: true },
          image_url: { type: String, required: true },
          youtube_url: { type: String, required: true },
          ranking: { type: Number, default: 0 },
        },
        pro: {
          minecraft_id: { type: String, required: true },
          image_url: { type: String, required: true },
          youtube_url: { type: String, required: true },
          ranking: { type: Number, required: true },
        },
        hacker: {
          minecraft_id: { type: String, required: true },
          image_url: { type: String, required: true },
          youtube_url: { type: String, required: true },
          ranking: { type: Number, required: true },
        },
      },
    },
  ],
});

noobprohackerSchema.statics.create = function (payload) {
  const noobProHacker = new this(payload);
  return noobProHacker.save();
};

noobprohackerSchema.statics.findAll = function () {
  return this.find({});
};

const NoobProHacker =
  (models["NoobProHacker"] as NoobProHackerModel) ||
  model<NoobProHacker, NoobProHackerModel>(
    "NoobProHacker",
    noobprohackerSchema,
  );

export default NoobProHacker;
