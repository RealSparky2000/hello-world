const Discord = require('discord.js');
const client = new Discord.Client();

if(message.content.startsWith(prefix)) return

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = '&'

client.on('message', message => {
    
    //чтобы бот не реагировал если сообщение не начинается с префикса
    if(!message.content.startsWith(prefix)) return

    if (message.content === prefix+'ping') {
        message.channel.send('PONG!');
      }
    if (message.content === prefix+'bing') {
        message.reply('BONG!');
      }
    if (message.content === prefix+'how are you') {
        message.reply('NICE!');
     }
});


client.login(process.env.BOT_TOKEN);
