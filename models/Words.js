const words = ["ARCHIVO", "EMPLEADO", "COMPUTADORA"];

export const pickAWord = () => {
  let rand = words[Math.floor(Math.random() * words.length)];
  return rand;
};

export const wordLenght = (word) => {
  return word.length;
};
