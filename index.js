import 'dotenv/config';
const { Telegraf } = require("telegraf");
import { playGame } from "./models/Program";

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  playGame(ctx);
});

bot.launch();
