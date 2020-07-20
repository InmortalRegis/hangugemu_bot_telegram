import { pickAWord } from "./Words";
export const pickedWord = pickAWord();
/**
 *
 * @param {*} ctx
 * Inicia el juego tomando una palabra de forma aleatoria y
 * escribiendo su representación oculta
 */
export const playGame = (ctx) => {

  let hiddenWord = "";
  for (let index = 0; index < pickedWord.length; index++) {
    hiddenWord += " _";
  }
  ctx.reply(hiddenWord);
};
