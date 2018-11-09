const Discord = require('discord.js');
const Canvas = require('canvas');
const superagent = require('snekfetch');
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    const canvas = Canvas.createCanvas(960, 540);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage('images/undpidoras.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const { body: buffer } = await superagent.get(user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 400, 210, 130, 110);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'pidoras.png');
    message.channel.send(attachment);
}
module.exports.help = {
    name: "pidoras",
    desc: "undertale pidoras",
    category: "imgs"
}