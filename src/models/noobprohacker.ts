import { NoobProHacker } from "@/domains/noobprohacker";
import { Schema, Model, model, models } from "mongoose";

interface NoobProHackerModel extends Model<NoobProHacker> {
  findAll: () => Promise<NoobProHacker[]>;
  findByEpisode: (episode: number) => Promise<NoobProHacker>;
  findAllWithSweepLine: () => Promise<NoobProHacker[]>;
  findLastestOne: () => Promise<NoobProHacker>;
  findOneThatHasNotURL: () => Promise<NoobProHacker[]>;
  updateNoobProHacker: (payload: NoobProHacker) => Promise<NoobProHacker>;
  updateArchitectId: (
    episode: number,
    subject: string,
    line: "noob" | "pro" | "hacker",
    minecraft_id: string,
  ) => Promise<void>;
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

noobprohackerSchema.statics.findByEpisode = function (episode: number) {
  return this.findOne({ "contentInfo.episode": episode });
};

noobprohackerSchema.statics.findAllWithSweepLine = function () {
  return this.aggregate([
    {
      $match: {
        lineInfo: {
          $elemMatch: {
            $and: [
              {
                "line_details.pro.ranking": 1,
              },
              {
                "line_details.hacker.ranking": 1,
              },
              {
                line_ranking: 1,
              },
            ],
          },
        },
      },
    },
  ]);
};

noobprohackerSchema.statics.findLastestOne = function () {
  return this.find({}).sort({ "contentInfo.episode": -1 }).limit(1);
};

noobprohackerSchema.statics.findOneThatHasNotURL = function () {
  return this.aggregate([
    {
      $match: {
        "contentInfo.youtube_url": "null",
      },
    },
  ]);
};

noobprohackerSchema.statics.updateNoobProHacker = function (
  payload: NoobProHacker,
) {
  return this.updateOne(
    {
      "contentInfo.episode": payload.contentInfo.episode,
    },
    {
      $set: {
        contentInfo: payload.contentInfo,
        lineInfo: payload.lineInfo,
      },
    },
  );
};

noobprohackerSchema.statics.updateArchitectId = function (
  episode: number,
  subject: string,
  tier: "noob" | "pro" | "hacker",
  minecraft_id: string,
) {
  return this.updateOne(
    {
      "contentInfo.episode": episode,
    },
    {
      $set: {
        [`lineInfo.$[line].line_details.${tier}.minecraft_id`]: minecraft_id,
      },
    },
    {
      arrayFilters: [
        {
          "line.subject": subject,
        },
      ],
    },
  );
};

const NoobProHacker =
  (models["NoobProHacker"] as NoobProHackerModel) ||
  model<NoobProHacker, NoobProHackerModel>(
    "NoobProHacker",
    noobprohackerSchema,
  );

export default NoobProHacker;
