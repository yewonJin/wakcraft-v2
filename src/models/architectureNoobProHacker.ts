import { Schema, Model, model, models } from "mongoose";

import { ArchitectureNoobProHacker } from "@/domains/architectureNoobProHacker";
import { NoobProHacker } from "@/domains/noobprohacker";

interface ArchitectureNoobProHackerModel extends Model<NoobProHacker> {
  findAll: () => Promise<NoobProHacker[]>;
  findByEpisode: (episode: number) => Promise<NoobProHacker>;
  findAllWithSweepLine: () => Promise<NoobProHacker[]>;
  findLastestOne: () => Promise<NoobProHacker>;
  findOneThatHasNotURL: () => Promise<NoobProHacker[]>;
  updateArchitectureNoobProHacker: (
    payload: NoobProHacker,
  ) => Promise<NoobProHacker>;
  updateArchitectId: (
    episode: number,
    subject: string,
    line: "noob" | "pro" | "hacker",
    minecraft_id: string,
  ) => Promise<void>;
}

const architectureNoobProHackerSchema = new Schema({
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

architectureNoobProHackerSchema.statics.create = function (payload) {
  const noobProHacker = new this(payload);
  return noobProHacker.save();
};

architectureNoobProHackerSchema.statics.findAll = function () {
  return this.find({});
};

architectureNoobProHackerSchema.statics.findByEpisode = function (
  episode: number,
) {
  return this.findOne({ "contentInfo.episode": episode });
};

architectureNoobProHackerSchema.statics.findAllWithSweepLine = function () {
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

architectureNoobProHackerSchema.statics.findLastestOne = function () {
  return this.find({}).sort({ "contentInfo.episode": -1 }).limit(1);
};

architectureNoobProHackerSchema.statics.findOneThatHasNotURL = function () {
  return this.aggregate([
    {
      $match: {
        "contentInfo.youtube_url": "null",
      },
    },
  ]);
};

architectureNoobProHackerSchema.statics.updateArchitectureNoobProHacker =
  function (payload: NoobProHacker) {
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

architectureNoobProHackerSchema.statics.updateArchitectId = function (
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

const ArchitectureNoobProHacker =
  (models["ArchitectureNoobProHacker"] as ArchitectureNoobProHackerModel) ||
  model<ArchitectureNoobProHacker, ArchitectureNoobProHackerModel>(
    "ArchitectureNoobProHacker",
    architectureNoobProHackerSchema,
  );

export default ArchitectureNoobProHacker;
