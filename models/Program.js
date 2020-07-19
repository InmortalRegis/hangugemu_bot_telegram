import { pickAWord } from "./Words";

/**
 *
 * @param {*} ctx
 * Inicia el juego tomando una palabra de forma aleatoria y
 * escribiendo su representación oculta
 */
export const playGame = (ctx) => {
  const pickedWord = pickAWord();
  let hiddenWord = "";
  for (let index = 0; index < pickedWord.length; index++) {
    hiddenWord += " _";
  }
  ctx.reply(hiddenWord);
};
