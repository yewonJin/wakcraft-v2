import { Schema, Model, model, models } from "mongoose";

import { PlacementTest } from "@/domains/placementTest";

interface PlacementTestModel extends Model<PlacementTest> {
  findAll: () => Promise<PlacementTest[]>;
  findBySeason: (season: number) => Promise<PlacementTest>;
}

const placementTestSchema = new Schema({
  season: Number,
  date: Date,
  youtube_url: String,
  participants: [
    {
      minecraft_id: String,
      image_url: String,
      placement_result: String,
      cafe_url: String,
    },
  ],
});

placementTestSchema.statics.create = function (payload) {
  const placementTest = new this(payload);
  return placementTest.save();
};

placementTestSchema.statics.findAll = function () {
  return this.find({});
};

placementTestSchema.statics.findBySeason = function (season: number) {
  return this.findOne({ season: season });
};

const PlacementTest =
  (models["PlacementTest"] as PlacementTestModel) ||
  model<PlacementTest, PlacementTestModel>(
    "PlacementTest",
    placementTestSchema,
  );

export default PlacementTest;
