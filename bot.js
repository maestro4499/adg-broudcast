const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ="$"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);

client.on("message", message => {
    if (message.content.startsWith(prefix + "obc")) { ///@» Maestro
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» Maestro
  let args = message.content.split(" ").slice(1); ///@» Maestro
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => { //@» Maestro 
  m.send(`${argresult}\n ${m}`); ///@» Maestro 
  }) /// @» Maestro
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete(); ///@» MMaestro
  }; ///@» Maestro 
  }); //// @» Maestro 
 
 
 
  client.on("message", message => {
  ///@» MHSTR 🇮🇶#1119 
              if (message.content.startsWith(prefix + "bc")) {// Maestro
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» Maestro
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); // @» Maestro
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`); //@» Maestro
  }) ///@» Maestro 
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); //@» Maestro
  };     /// @» Maestro 
  }); ///@» Maestro
