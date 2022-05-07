import { nanoid } from "@reduxjs/toolkit";

export interface CardType {
  id: string;
  title: string;
  flipped: boolean;
  matched: boolean;
  disabled: boolean;
}

export const initialState: CardType[] = [
  {
    id: nanoid(),
    title: 'angular2',
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: 'vue',
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: 'react',
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: 'grunt',
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: 'phantomjs',
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "ember",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: 'babel',
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "ionic",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "gulp",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "meteor",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "yeoman",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "yarn",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "nodejs",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "bower",
    flipped: false,
    matched: false,
    disabled: false,
  },
  {
    id: nanoid(),
    title: "browserify",
    flipped: false,
    matched: false,
    disabled: false,
  }
]