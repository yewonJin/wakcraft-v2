import { Architect } from "@/domains/architect";
import { Schema, Model, model, models } from "mongoose";

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
  noobProHackerInfo: {
    win: { type: Number, default: 0 },
    hackerWin: { type: Number, default: 0 },
    proWin: { type: Number, default: 0 },
    participation: { type: Number, default: 0 },
  },
  portfolio: {
    noobProHacker: [
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

const Architect =
  (models["Architect"] as ArchitectModel) ||
  model<Architect, ArchitectModel>("Architect", architectSchema);

export default Architect;
