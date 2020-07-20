import { removeLetterFromKeyboard } from "./Keyboard";
import { pickedWord } from "./Program";
var guessedFoundLetters = [];
var guessedLetters = [];
var missedLetters = [];

export const unguessedLetters = () => {
  return [...guessedFoundLetters, ...guessedLetters, ...missedLetters];
};

export const getGuessedFoundLetters = () => {
  return guessedFoundLetters;
};

export const playHangman = () => {
  guessedFoundLetters = [];
  guessedLetters = [];
  missedLetters = [];
};

export const play = () => {
  for (let index = 0; index < pickedWord.length; index++) {
    guessedFoundLetters[index] = " _ ";
  }

  for (let index = 0; index < pickedWord.length; index++) {
    const letter = pickedWord.charAt(index);
    if (guessedLetters.length > 0) {
      guessedLetters.forEach((guessedLetter) => {
        if (letter == guessedLetter.trim().toUpperCase()) {
          guessedFoundLetters[index] = " " + letter + " ";
        }
      });
    }
  }

  drawHangMan();
};

export const drawHangMan = () => {
  for (let index = 0; index < guessedLetters.length; index++) {
    const letter = guessedLetters[index];
    if (!checkLetter(letter)) {
      missedLetters.push(letter);
    }
  }
};

export const checkLetter = (letter) => {
  for (let index = 0; index < pickedWord.length; index++) {
    let splittedLetter = pickedWord.charAt(index).toUpperCase();
    if (splittedLetter == letter.trim().toUpperCase()) {
      return true;
    }
  }
  return false;
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
