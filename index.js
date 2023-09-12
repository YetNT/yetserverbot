const express = require('express');
const app = express();
const fs = require('fs')
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 


const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix: ["y?","why!","y? ","why! "], //Discord Bot Prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //Discord Intents
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/')
const vars = require('./variables.js')
bot.variables(vars)

//Events

bot.onMessage()
bot.onInteractionCreate();

//Command Example

bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

//Ready Event

bot.readyCommand({
    channel: "872155819096039424",
    code: `**yet's wqorld is epik**`
})


