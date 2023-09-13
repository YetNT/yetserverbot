const {
    Client,
    IntentsBitField,
    EmbedBuilder /* ActionRowBuilder, ButtonBuilder, ButtonStyle,*/,
} = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const path = "./commands/";
const prefix = ["y?", "why!", "y!"];
const splits = ["?", "!"];
client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log(`${client.user.tag} is online!?`);
});

client.on("messageCreate", async (m) => {
    if (m.author.bot) return;
    const message = m.content;
    if (prefix.every((w) => !message.includes(w))) return;

    const regexPattern = new RegExp(
        `[${splits
            .map((s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
            .join("")}]`
    );

    let cmd = message.split(regexPattern);

    const command = require(`${path}${cmd[1]}`);
    if (typeof command !== "function") return;

    command(client, m);
});
