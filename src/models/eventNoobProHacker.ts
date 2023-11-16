import { Schema, Model, model, models } from "mongoose";

import { EventNoobProHacker } from "@/domains/eventNoobProHacker";

interface EventNoobProHackerModel extends Model<EventNoobProHacker> {
  findAll: () => Promise<EventNoobProHacker[]>;
  findByEpisode: (episode: number) => Promise<EventNoobProHacker>;
}

const eventNoobProHackerSchema = new Schema({
  contentInfo: {
    contentName: { type: String, required: true },
    episode: { type: Number },
    date: { type: Date, default: Date.now },
    youtube_url: { type: String },
    isInFiniteTime: { type: Boolean },
  },
  lineInfo: [
    {
      subject: { type: String, required: true },
      youtube_url: { type: String, required: true },
      line_ranking: { type: Number, default: 0 },
      line_details: [
        {
          line: { type: String },
          minecraft_id: { type: [String] },
          image_url: { type: String },
          youtube_url: { type: String },
          ranking: { type: Number },
        },
      ],
    },
  ],
});

eventNoobProHackerSchema.statics.create = function (payload) {
  const noobProHacker = new this(payload);
  return noobProHacker.save();
};

eventNoobProHackerSchema.statics.findAll = function () {
  return this.find({});
};

eventNoobProHackerSchema.statics.findByEpisode = function (episode: number) {
  return this.findOne({ "contentInfo.episode": episode });
};

const EventNoobProHacker =
  (models["EventNoobProHacker"] as EventNoobProHackerModel) ||
  model<EventNoobProHacker, EventNoobProHackerModel>(
    "EventNoobProHacker",
    eventNoobProHackerSchema,
  );

export default EventNoobProHacker;
