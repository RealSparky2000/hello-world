 const Discord = require('discord.js');
 const client = new Discord.Client();
 
 
 client.on('ready', () => {
     console.log('I am ready!');
 });
 
var PREFIX = '&'
 
 client.on('message', message => {    
     //чтобы бот не реагировал если сообщение не начинается с префикса
    if(!message.content.startsWith(prefix)) return
   if (!message.content.startsWith(PREFIX) || message.content.startsWith(PREFIX + PREFIX)) return
    var args = message.content.substring(PREFIX.length).split(" ");
   //метод
		switch (args[0].toLowerCase()) {


        case "ping":
        message.channel.send('PONG!');
        break;

        case "bing":
       message.channel.send('BONG!');
       break;

        case "how-are-you"
       message.channel.send('NICE!');
        break;

       case "embed":
        var embed = new Discord.RichEmbed()
        .setAuthor('Заголовок с иконкой', client.user.avatarURL)
        .setTitle('Второй заголовок без иконки')
        .setDescription('Текст **внутри**')
        .setImage(message.author.avatarURL)
        .setColor(`0x${args[1]}`)
        message.channel.send(embed)
        break;
  }})
 
 client.login(process.env.BOT_TOKEN);
