export type ArchitectureContest = {
  contentInfo: {
    subject: string;
    episode: number;
    date: string;
    youtube_url: string;
  };
  lineInfo: {
    line: string;
    youtube_url: string;
    line_details: {
      topText: string;
      bottomText: string;
      minecraft_id: string;
      image_url: string;
      youtube_url: string;
      ranking: number;
    }[];
  }[];
};
