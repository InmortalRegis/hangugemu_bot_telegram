import { removeLetterFromKeyboard } from "./Keyboard";
var guessedFoundLetters = [];
var guessedLetters = [];
var missedLetters = [];

export const unguessedLetters = () => {
  return [...guessedFoundLetters, ...guessedLetters, ...missedLetters];
};

export const playHangman = () => {
  guessedFoundLetters = [];
  guessedLetters = [];
  missedLetters = [];
};

export const play = () => {
  guessedFoundLetters = [];
};

/**
 *
 * @param {*} letter
 * @returns boolean
 * Añade letra al array de letras adivinadas si la letra no esta incluida en el array.
 * Después remueve la letra del teclado
 */
export const addGuessedLetter = (letter) => {
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
    removeLetterFromKeyboard(letter);
    return true;
  } else {
    return false;
  }
};
