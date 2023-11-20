import { atom } from "recoil";

export type Difficulty = null | "LOW" | "MEDIUM" | "HIGH";
export type NumberOfArchitecture = null | 20 | 30 | 50;

export const difficultyState = atom<Difficulty>({
  key: "difficultyState",
  default: null,
});

export const numberOfArchitectureState = atom<NumberOfArchitecture>({
  key: "numberOfArchitectureState",
  default: null,
});

export const correctCountState = atom<number>({
  key: "correctCountState",
  default: 0,
});

export const indexState = atom<number>({
  key: "indexState",
  default: 0,
});
