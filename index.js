import "dotenv/config";
const { Telegraf } = require("telegraf");
import { playGame } from "./models/Program";
import { addGuessedLetter } from "./models/PlayHangman";
import { keyboardUnguessed } from "./models/Keyboard";

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  playGame(ctx);
  ctx.reply("Pick a letter", keyboardUnguessed().draw());
});
bot.on("text", (ctx) => {
  const letter = ctx.message.text;
  if (addGuessedLetter(letter)) {
    ctx.reply("Pick another letter", keyboardUnguessed().draw());
  }
});

bot.launch();
