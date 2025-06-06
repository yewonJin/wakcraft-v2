import { MatchYourTier } from "@/domains/matchYourTier";
import { Schema, Model, model, models } from "mongoose";

interface MatchYourTierModel extends Model<MatchYourTier> {
  findAll: () => Promise<MatchYourTier[]>;
  findByEpisode: (episode: number) => Promise<MatchYourTier>;
  updateArchitectId: (
    episode: number,
    beforeId: string,
    afterId: string,
  ) => Promise<void>;
}

const matchYourTierSchema = new Schema({
  contentInfo: {
    contentName: { type: String },
    episode: { type: Number },
    date: { type: Date, default: Date.now },
    youtube_url: { type: String },
  },
  participants: [
    {
      order: { type: Number },
      expectedTier: { type: String },
      currentTier: { type: String },
      minecraft_id: { type: String },
      image_url: { type: String },
      youtube_url: { type: String },
      ranking: { type: Number },
    },
  ],
});

matchYourTierSchema.statics.create = function (payload) {
  const noobProHacker = new this(payload);
  return noobProHacker.save();
};

matchYourTierSchema.statics.findAll = function () {
  return this.find({});
};

matchYourTierSchema.statics.findByEpisode = function (episode: number) {
  return this.findOne({ "contentInfo.episode": episode });
};

matchYourTierSchema.statics.updateArchitectId = function (
  episode: number,
  beforeId: string,
  afterId: string,
) {
  return this.updateOne(
    {
      "contentInfo.episode": episode,
      participants: {
        $elemMatch: {
          minecraft_id: beforeId,
        },
      },
    },
    {
      $set: {
        "participants.$.minecraft_id": afterId,
      },
    },
  );
};

const MatchYourTier =
  (models["MatchYourTier"] as MatchYourTierModel) ||
  model<MatchYourTier, MatchYourTierModel>(
    "MatchYourTier",
    matchYourTierSchema,
  );

export default MatchYourTier;
