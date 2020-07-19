import { pickAWord } from "./Words";

export const playGame = (ctx) => {
  const pickedWord = pickAWord();

  for (let index = 0; index < pickedWord.length; index++) {
    let hiddenWord = hiddenWord + " -";
  }
  ctx.reply(hiddenWord);
};
