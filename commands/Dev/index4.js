ymodule.exports = [
  {
  name: "evaluate",
  aliases: "eval",
  code: `$eval[$message]
  $onlyIf[$hasRoles[$guildID;$authorID;794146636107481098]==true;you is no mod]`
}, {
  name: "readfile",
  aliases: "rf",
  code: `\`\`\`$readFile[$message]\`\`\`
  $onlyIf[$hasRoles[$guildID;$authorID;794146636107481098]==true;you is no mod]
  `
},{
  name: "update",
  aliases: ["up","upC","updateCommands","update-commands","reboot","rb"],
  code: `$updateCommands
  All commands have been updated. (Any changes to any file have now been added to the bot.)
  $onlyIf[$hasRoles[$guildID;$authorID;794146636107481098]==true;you is no mod]
`
}
]