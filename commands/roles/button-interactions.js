module.exports = [
  { // role = Dev Help (the role might change so its just role as the variable)
    name:"role",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;808714583434199050]==true]
        $takeRole[$guildID;$authorID;808714583434199050] removed <@&808714583434199050>
      $else
        $giveRole[$guildID;$authorID;808714583434199050] added <@&808714583434199050>
      $endif
    ;;;no;users;yes]`
  },{
    name:"fotd",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;1024278501601333308]==true]
        $takeRole[$guildID;$authorID;1024278501601333308] removed <@&1024278501601333308> :moyai:
      $else
        $giveRole[$guildID;$authorID;1024278501601333308] added <@&1024278501601333308> :moyai:
      $endif
    ;;;no;users;yes]`
  },{
    name:"qotd",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;1023912555284013056]==true]
        $takeRole[$guildID;$authorID;1023912555284013056] removed <@&1023912555284013056> :moyai:
      $else
        $giveRole[$guildID;$authorID;1023912555284013056] added <@&1023912555284013056> :moyai:
      $endif
    ;;;no;users;yes]`
  },{
    name:"pp",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;879421862747189398]==true]
        $takeRole[$guildID;$authorID;879421862747189398] removed <@&879421862747189398> :moyai:
      $else
        $giveRole[$guildID;$authorID;879421862747189398] added <@&879421862747189398> :moyai:
      $endif
    ;;;no;users;yes]`
  },{
    name:"event",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;1005752235541671956]==true]
        $takeRole[$guildID;$authorID;1005752235541671956] removed <@&1005752235541671956> :moyai:
      $else
        $giveRole[$guildID;$authorID;1005752235541671956] added <@&1005752235541671956> :moyai:
      $endif
    ;;;no;users;yes]`
  },{
    name:"gw",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;797486887806697503]==true]
        $takeRole[$guildID;$authorID;797486887806697503] removed <@&797486887806697503> :moyai:
      $else
        $giveRole[$guildID;$authorID;797486887806697503] added <@&797486887806697503> :moyai:
      $endif
    ;;;no;users;yes]`
  },{
    name:"ann",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;796309603520479283]==true]
        $takeRole[$guildID;$authorID;796309603520479283] removed <@&796309603520479283> :moyai:
      $else
        $giveRole[$guildID;$authorID;796309603520479283] added <@&796309603520479283> :moyai:
      $endif
    ;;;no;users;yes]`
  },{
    name:"cr",
    prototype:"button",
    type:"interaction",
    $if:"v4",
    code:`$interactionReply[
      $if[$hasRoles[$guildID;$authorID;840997140942684191]==true]
        $takeRole[$guildID;$authorID;840997140942684191] removed <@&840997140942684191> :moyai:
      $else
        $giveRole[$guildID;$authorID;840997140942684191] added <@&840997140942684191> :moyai:
      $endif
    ;;;no;users;yes]`
  },{
    name:"test-role",
    $if:"v4",
    code:`
    $if[$hasRoles[$guildID;$authorID;$message[1]]==true]
      $takeRole[$guildID;$authorID;$message[1]] removed <@&$message[1]>
    $else
      $giveRole[$guildID;$authorID;$message[1]] added <@&$message[1]>
    $endif
    $onlyIf[$authorID==671549251024584725;Nice try bro.]
    `
  }
]