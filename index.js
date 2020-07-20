import "dotenv/config";
const { Telegraf } = require("telegraf");
import { playGame } from "./models/Program";
import {
  addGuessedLetter,
  play,
  getGuessedFoundLetters,
  drawHangMan,
} from "./models/PlayHangman";
import { keyboardLetters, keyboardUnguessed } from "./models/Keyboard";

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  playGame(ctx);
  ctx.reply("Pick a letter", keyboardUnguessed().draw());
  ctx.reply("Category: ANIMAL");
});

bot.hears(keyboardLetters(), (ctx) => {
  const letter = ctx.message.text;
  if (addGuessedLetter(letter)) {
    play();
    drawHangMan(ctx);
    ctx.reply(getGuessedFoundLetters().join(""));
    ctx.reply("Pick another letter", keyboardUnguessed().draw());
  }
});

bot.launch();
