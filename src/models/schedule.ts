import { Schema, Model, model, models } from "mongoose";

import { Schedule, Status } from "@/domains/schedule";

const scheduleSchema = new Schema<Schedule>({
  status: String,
  date: String,
  content: String,
  title: String,
  episode: Number,
  participants: [String],
  link: {
    announcement: String,
  },
});

interface ScheduleModel extends Model<Schedule> {
  updateStatus: (_id: string, status: Status) => Promise<void>;
  updateParticipants: (_id: string, participants: string[]) => Promise<void>;
  updateDate: (_id: string, date: string) => Promise<void>;
  updateAnnouncementLink: (_id: string, announcement: string) => Promise<void>;
}

scheduleSchema.statics.updateStatus = function (_id: string, status: Status) {
  return this.updateOne(
    {
      _id,
    },
    {
      $set: {
        status: status,
      },
    },
  );
};

scheduleSchema.statics.updateParticipants = function (
  _id: string,
  participants: string[],
) {
  return this.updateOne(
    {
      _id,
    },
    {
      $set: {
        participants,
      },
    },
  );
};

scheduleSchema.statics.updateDate = function (_id: string, date: string) {
  return this.updateOne(
    {
      _id,
    },
    {
      $set: {
        date,
      },
    },
  );
};

scheduleSchema.statics.updateAnnouncementLink = function (
  _id: string,
  announcement: string,
) {
  return this.updateOne(
    {
      _id,
    },
    {
      $set: {
        "link.announcement": announcement,
      },
    },
  );
};

const Schedule =
  (models["Schedule"] as ScheduleModel) ||
  model<Schedule, ScheduleModel>("Schedule", scheduleSchema);

export default Schedule;
