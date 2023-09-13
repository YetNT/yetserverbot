const { Client, Message } = require("discord.js");
const embeds = require("../roleStuff");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = (client, message) => {
    message.reply({ embeds: embeds });
};
