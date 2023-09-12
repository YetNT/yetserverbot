module.exports = [
  {
    name:"partner",
    code:`
    $channelSendMessage[840641269189443595;
    <@&879421862747189398>
    $message]
    $onlyIf[$hasRoles[$guildID;$authorID;878891869868806165]==true;you no partner manager]
    `
  }
]