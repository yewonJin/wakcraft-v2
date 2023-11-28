import { Schema, Model, model, models } from "mongoose";

import { PlacementTest } from "@/domains/placementTest";

interface PlacementTestModel extends Model<PlacementTest> {
  findAll: () => Promise<PlacementTest[]>;
  findBySeason: (season: number) => Promise<PlacementTest>;
  findLastestOne: () => Promise<PlacementTest[]>;
  updateArchitectId: (
    season: number,
    beforeId: string,
    afterId: string,
  ) => Promise<void>;
}

const placementTestSchema = new Schema({
  season: Number,
  date: Date,
  youtube_url: String,
  participants: [
    {
      minecraft_id: String,
      order: Number,
      image_url: String,
      placement_result: String,
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

placementTestSchema.statics.findLastestOne = function () {
  return this.find({}).sort({ season: -1 }).limit(1);
};

placementTestSchema.statics.findBySeason = function (season: number) {
  return this.findOne({ season: season });
};

placementTestSchema.statics.updateArchitectId = function (
  season: number,
  beforeId: string,
  afterId: string,
) {
  return this.updateOne(
    {
      season: season,
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

const PlacementTest =
  (models["PlacementTest"] as PlacementTestModel) ||
  model<PlacementTest, PlacementTestModel>(
    "PlacementTest",
    placementTestSchema,
  );

export default PlacementTest;
