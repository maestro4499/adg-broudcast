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

client.login(process.env.BOT_TOKEN);//لا تحط التوكن حقك هنا


client.on('ready',  () => {

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 

  console.log('by ADG-RP');

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  console.log('is online')

client.user.setStatus("dnd");

});




client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['Broudcast ',' |ADG-RP ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j
        client.user.setGame(setGame[i],`https://www.twitch.tv/حب بلا حدود`);
    }, ms);

})

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
