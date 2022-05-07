import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { CardType, initialState } from "./initialState";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    frameworks: initialState,
    duplicatedFrameworks: <CardType[]>[],
    randomizedFrameworks: <CardType[]>[],
    flippedCounter: <number>0,
    score: <number>0,
    loaded: <boolean>false,
  },
  reducers: {
    duplicateFrameworks: (state) => {
      state.frameworks.forEach((framework) => {
        state.duplicatedFrameworks.push({
          ...framework,
          id: nanoid(),
        });
      });
      state.duplicatedFrameworks = state.duplicatedFrameworks.concat(
        state.frameworks
      );
    },
    randomizeFrameworks: (state) => {
      state.randomizedFrameworks = state.duplicatedFrameworks.sort(
        () => Math.random() - 0.5
      );
      state.loaded = true;
    },
    flipCard: (state, action: PayloadAction<string>) => {
      if (state.flippedCounter < 2) {
        const framework = state.randomizedFrameworks.find(
          (framework) => framework.id === action.payload
        );
        if (framework) {
          state.flippedCounter += 1;
          framework.flipped = true;
        }
      }
    },
    matchCards: (state) => {
      const flippedCards = state.randomizedFrameworks.filter(
        (framework) => framework.flipped
      );
      const [first, second] = flippedCards;
      if (first.title === second.title) {
        first.matched = true;
        second.matched = true;
        state.score += 50;
      } else {
        state.score -= 10;
      }
      first.flipped = false;
      second.flipped = false;
      state.flippedCounter = 0;
    },
    resetGame: (state) => {
      state.frameworks.forEach((framework) => {
        framework.flipped = false;
        framework.matched = false;
        framework.disabled = false;
      });
      state.duplicatedFrameworks = [];
      state.randomizedFrameworks = [];
      state.flippedCounter = 0;
      state.score = 0;
      state.loaded = false;
    },
  },
});

export const {
  duplicateFrameworks,
  randomizeFrameworks,
  flipCard,
  matchCards,
  resetGame,
} = cardSlice.actions;

export default cardSlice.reducer;
