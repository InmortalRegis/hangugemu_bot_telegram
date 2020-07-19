const Keyboard = require("telegraf-keyboard");
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
import { unguessedLetters } from "./PlayHangman";
const options = {
  inline: false, // default
  duplicates: false, // default
  newline: false, // default
};
const keyboard = new Keyboard(options);

export const keyboardUnguessed = () => {
  let letters = alphabet.filter(
    (letter) => !unguessedLetters().includes(letter)
  );

  var i,
    j,
    temparray,
    chunk = 9;
  for (i = 0, j = letters.length; i < j; i += chunk) {
    temparray = letters.slice(i, i + chunk);
    keyboard.add(temparray);
    // do whatever
  }
  return keyboard;
};

export const removeLetterFromKeyboard = (letter) => {
  keyboard.remove(letter);
};
