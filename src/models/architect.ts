import { Schema, Model, model, models } from "mongoose";

import { Architect, Tier, convertLineTierToTier } from "@/domains/architect";

// Define Schemes
const architectSchema = new Schema<Architect>({
  minecraft_id: {
    type: String,
    required: true,
    unique: true,
  },
  wakzoo_id: { type: String, unique: true },
  tier: { type: [String] },
  curTier: { type: String },
  noobprohackerInfo: {
    win: { type: Number, default: 0 },
    hackerWin: { type: Number, default: 0 },
    proWin: { type: Number, default: 0 },
    participation: { type: Number, default: 0 },
  },
  portfolio: {
    noobprohacker: [
      {
        episode: { type: Number, required: true },
        subject: { type: String, required: true },
        line: { type: String, required: true },
        image_url: { type: String, required: true },
        youtube_url: { type: String, required: true },
        ranking: { type: Number, default: 0 },
        date: { type: Date },
      },
    ],
    placementTest: [
      {
        season: { type: Number },
        image_url: { type: String },
        placement_result: { type: String },
        date: { type: Date },
      },
    ],
    eventNoobProHacker: [
      {
        contentName: { type: String, required: true },
        episode: { type: Number, required: true },
        subject: { type: String, required: true },
        line: { type: String, required: true },
        image_url: { type: String, required: true },
        youtube_url: { type: String, required: true },
        ranking: { type: Number, default: 0 },
        date: { type: Date },
      },
    ],
    architectureContest: [
      {
        contentName: { type: String, required: true },
        episode: { type: Number, required: true },
        subject: { type: String, required: true },
        line: { type: String, required: true },
        image_url: { type: String, required: true },
        youtube_url: { type: String, required: true },
        ranking: { type: Number, default: 0 },
        date: { type: Date },
      },
    ],
  },
});

interface ArchitectModel extends Model<Architect> {
  findAll: () => Promise<Architect[]>;
  findByMinecraftId: (minecraft_id: string) => Promise<Architect>;
  findByTier: (
    tier: "hacker" | "gukbap" | "pro" | "gyeruik" | "noob",
  ) => Promise<Architect[]>;
  updateMinecraftId: (beforeId: string, afterId: string) => Promise<Architect>;
  updateWakzooId: (
    minecraft_id: string,
    wakzoo_id: string,
  ) => Promise<Architect>;
  updateCurTier: (minecraft_id: string, curTier: Tier) => Promise<Architect>;
  pushNoobProHackerToPortfolio: (
    minecraft_id: string,
    payload: Architect["portfolio"]["noobprohacker"][0],
  ) => Promise<Architect>;
  pushPlacementTestToPortfolio: (
    minecraft_id: string,
    payload: Architect["portfolio"]["placementTest"][0],
  ) => Promise<void>;
  updateNoobProHackerYoutubeURL: (
    minecraft_id: string,
    episode: number,
    youtube_url: string,
  ) => Promise<Architect>;
  updateAllToUnranked: () => Promise<void>;
  updateSeasonTier: (
    minecraft_id: string,
    curSeason: number,
    tier: Tier,
  ) => Promise<void>;
}

architectSchema.statics.create = function (
  payload: Exclude<keyof Architect, "portfolio">,
) {
  const architect = new this(payload);
  return architect.save();
};

architectSchema.statics.findAll = function () {
  return this.find({});
};

architectSchema.statics.findByTier = function (
  tier: "hacker" | "gukbap" | "pro" | "gyeruik" | "noob",
) {
  return this.find({ curTier: { $in: convertLineTierToTier(tier) } });
};

architectSchema.statics.findByMinecraftId = function (minecraft_id: string) {
  return this.findOne({ minecraft_id });
};

architectSchema.statics.updateMinecraftId = function (
  beforeId: string,
  afterId: string,
) {
  return this.findOneAndUpdate(
    {
      minecraft_id: beforeId,
    },
    {
      $set: {
        minecraft_id: afterId,
      },
    },
  );
};

architectSchema.statics.updateWakzooId = function (
  minecraft_id: string,
  wakzoo_id: string,
) {
  return this.findOneAndUpdate(
    {
      minecraft_id,
    },
    {
      $set: {
        wakzoo_id: wakzoo_id,
      },
    },
  );
};

architectSchema.statics.updateCurTier = function (
  minecraft_id: string,
  curTier: Tier,
) {
  return this.findOneAndUpdate(
    {
      minecraft_id,
    },
    {
      $set: {
        curTier: curTier,
      },
    },
  );
};

architectSchema.statics.pushNoobProHackerToPortfolio = function (
  minecraft_id: string,
  payload: Architect["portfolio"]["noobprohacker"][0],
) {
  if (payload.ranking == 1 && payload.line === "hacker") {
    return this.findOneAndUpdate(
      { minecraft_id },
      {
        $push: { "portfolio.noobprohacker": payload },
        $inc: {
          "noobprohackerInfo.win": 1,
          "noobprohackerInfo.hackerWin": 1,
          "noobprohackerInfo.participation": 1,
        },
      },
    );
  }

  if (payload.ranking == 1 && payload.line === "pro") {
    return this.findOneAndUpdate(
      { minecraft_id },
      {
        $push: { "portfolio.noobprohacker": payload },
        $inc: {
          "noobprohackerInfo.win": 1,
          "noobprohackerInfo.proWin": 1,
          "noobprohackerInfo.participation": 1,
        },
      },
    );
  }

  return this.findOneAndUpdate(
    { minecraft_id },
    {
      $push: { "portfolio.noobprohacker": payload },
      $inc: { "noobprohackerInfo.participation": 1 },
    },
  );
};

architectSchema.statics.pushPlacementTestToPortfolio = function (
  minecraft_id: string,
  payload: Architect["portfolio"]["placementTest"][0],
) {
  return this.findOneAndUpdate(
    { minecraft_id },
    {
      $push: { "portfolio.placementTest": payload },
      $inc: {
        "noobprohackerInfo.participation": 1,
      },
    },
  );
};

architectSchema.statics.updateNoobProHackerYoutubeURL = function (
  minecraft_id: string,
  episode: number,
  youtube_url: string,
) {
  return this.findOneAndUpdate(
    { minecraft_id },
    {
      $set: { "portfolio.noobprohacker.$[elem].youtube_url": youtube_url },
    },
    {
      arrayFilters: [
        {
          "elem.episode": episode,
        },
      ],
    },
  );
};

architectSchema.statics.updateAllToUnranked = function () {
  return this.updateMany(
    {},
    {
      $push: { tier: "언랭" },
      $set: { curTier: "언랭" },
    },
  );
};

architectSchema.statics.updateSeasonTier = function (
  minecraft_id: string,
  curSeason: number,
  tier: Tier,
) {
  return this.updateOne(
    { minecraft_id },
    {
      $set: { [`tier.${curSeason - 1}`]: tier },
    },
  );
};

const Architect =
  (models["Architect"] as ArchitectModel) ||
  model<Architect, ArchitectModel>("Architect", architectSchema);

export default Architect;
