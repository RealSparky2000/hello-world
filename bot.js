const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message''ready', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

('message', message => {
    if (message.content === 'how are you') {
    	message.reply('NICE!');
 	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
