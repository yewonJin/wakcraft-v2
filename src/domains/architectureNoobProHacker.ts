export type ArchitectureNoobProHacker = {
  contentInfo: {
    episode: number;
    main_subject: string;
    date: string;
    youtube_url: string;
  };
  lineInfo: {
    subject: string;
    youtube_url: string;
    line_ranking: number;
    line_details: {
      noob: {
        minecraft_id: string;
        image_url: string;
        youtube_url: string;
        ranking: number;
      };
      pro: {
        minecraft_id: string;
        image_url: string;
        youtube_url: string;
        ranking: number;
      };
      hacker: {
        minecraft_id: string;
        image_url: string;
        youtube_url: string;
        ranking: number;
      };
    };
  }[];
};
