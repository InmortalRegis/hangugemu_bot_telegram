const words = ["CERDITO"];

/**
 * Escoge una palabra aleatoria del listado de palabras disponibles.
 * @returns String;
 */
export const pickAWord = () => {
  let rand = words[Math.floor(Math.random() * words.length)];
  return rand;
};

export const wordLenght = (word) => {
  return word.length;
};
