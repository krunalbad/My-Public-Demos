export interface Story {
  id: string;
  source: number;
  user: string;
  video?: number;
}

export type SnapchatRoutes = {
  Snapchat: undefined;
  Story: { story: Story };
};
