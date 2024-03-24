export type Player = {
  id: string;
  name: string;
  score: number;
};

export type PlayerScore = {
  id: string;
  score: number;
};

export type GameStatus = "in-progress" | "not-started" | "finished";

export type GameProps = {
  name: string;
  gameId: string;
};
