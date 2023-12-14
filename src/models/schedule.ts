import { Schema, Model, model, models } from "mongoose";

import { Schedule } from "@/domains/schedule";

const scheduleSchema = new Schema<Schedule>({
  status: String,
  date: String,
  content: String,
  title: String,
  episode: Number,
  participants: [String],
  announcement_link: String,
});

interface ScheduleModel extends Model<Schedule> {
  findAllWithoutAfterContent: () => Promise<Schedule[]>;
}

scheduleSchema.statics.findAllWithoutAfterContent = function () {
  return this.find({
    $or: [{ status: "before_announcement" }, { status: "after_announcement" }],
  });
};

const Schedule =
  (models["Schedule"] as ScheduleModel) ||
  model<Schedule, ScheduleModel>("Schedule", scheduleSchema);

export default Schedule;
