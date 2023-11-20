import { Schema, Model, model, models } from "mongoose";

import { GuessTime } from "@/domains/guessTime";

interface GuessTimeModel extends Model<GuessTime> {
  findAll: () => Promise<GuessTime[]>;
  findByEpisode: (episode: number) => Promise<GuessTime>;
}

const guessTimeSchema = new Schema({
  contentInfo: {
    contentName: { type: String },
    episode: { type: Number },
    date: { type: Date, default: Date.now },
    youtube_url: { type: String },
  },
  participants: [
    {
      order: { type: Number },
      expectedTime: { type: Number },
      time: { type: Number },
      minecraft_id: { type: String },
      image_url: { type: String },
      youtube_url: { type: String },
    },
  ],
});

guessTimeSchema.statics.create = function (payload) {
  const guessTime = new this(payload);
  return guessTime.save();
};

guessTimeSchema.statics.findAll = function () {
  return this.find({});
};

guessTimeSchema.statics.findByEpisode = function (episode: number) {
  return this.findOne({ "contentInfo.episode": episode });
};

const GuessTime =
  (models["GuessTime"] as GuessTimeModel) ||
  model<GuessTime, GuessTimeModel>("GuessTime", guessTimeSchema);

export default GuessTime;
