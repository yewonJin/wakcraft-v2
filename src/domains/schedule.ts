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
  link: {
    announcement: string;
  };
};
