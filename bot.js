const Discord = require('discord.js');
const client = new Discord.Client();

if(message.content.startsWith(prefix)) return

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message''ready', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message''ready', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message''ready', message => {
    if (message.content === 'how are you') {
    	message.reply('NICE!');
 	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
