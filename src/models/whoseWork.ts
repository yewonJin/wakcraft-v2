import { Schema, Model, model, models } from "mongoose";

import { WhoseWork } from "@/domains/whoseWork";
import {
  Difficulty,
  NumberOfArchitecture,
} from "@/hooks/Game/WhoseWork/useSetting";

const whoseWorkSchema = new Schema<WhoseWork>({
  difficulty: String,
  numberOfArchitecture: Number,
  correctAnswerCountDistribution: [Number],
});

interface WhoseWorkModel extends Model<WhoseWork> {
  findByDifficultyAndNumberOfArchitecture: (
    difficulty: Difficulty,
    numberOfArchitecture: NumberOfArchitecture,
  ) => Promise<WhoseWork>;
  increaseCorrectAnswerCount: (
    difficulty: String,
    numberOfArchitecture: Number,
    correctCount: number,
  ) => Promise<WhoseWork>;
}

whoseWorkSchema.statics.findByDifficultyAndNumberOfArchitecture = function (
  difficulty: Difficulty,
  numberOfArchitecture: NumberOfArchitecture,
) {
  return this.find({
    $and: [
      { difficulty: difficulty },
      { numberOfArchitecture: numberOfArchitecture },
    ],
  });
};

whoseWorkSchema.statics.increaseCorrectAnswerCount = function (
  difficulty: String,
  numberOfArchitecture: Number,
  correctCount: number,
) {
  return this.findOneAndUpdate(
    {
      $and: [
        { difficulty: difficulty },
        { numberOfArchitecture: numberOfArchitecture },
      ],
    },
    {
      $inc: { [`correctAnswerCountDistribution.${correctCount}`]: 1 },
    },

    { returnOriginal: false },
  );
};

const WhoseWork =
  (models["WhoseWork"] as WhoseWorkModel) ||
  model<WhoseWork, WhoseWorkModel>("WhoseWork", whoseWorkSchema);

export default WhoseWork;
