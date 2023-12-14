export type Status =
  | "before_announcement"
  | "after_announcement"
  | "after_content";

export type Schedule = {
  status: Status;
  date: string;
  content: string;
  title: string;
  episode: number;
  participants: string[];
  announcement_link: string;
};

export const scheduleObject: Schedule = {
  status: "before_announcement",
  date: new Date().toISOString().split("T")[0],
  content: "눕프로해커",
  title: "",
  episode: 0,
  participants: [],
  announcement_link: "",
};
