require('dotenv/config');
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
    if (msg.chat.id === msg.from.id) {
        bot.sendMessage(
            msg.chat.id, 
            `Thank you for using ${process.env.OLD_BOT}! We have migrated the bot to ${process.env.NEW_BOT} for your continued use.`);
    }
});