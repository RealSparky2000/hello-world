const config = require('../config.json');
const prefix = config.prefix;
exports.run = async (client, message, args, tools, con) => {
    var hd = `Commands\n
        Info: \`${client.commands.filter(cmd => cmd.help.category === 'info').map(cmd => `${cmd.help.name}`).join(", ")}\`\n
        Fun: \`${client.commands.filter(cmd => cmd.help.category === 'fun').map(cmd => `${cmd.help.name}`).join(", ")}\`\n
        Mods: \`${client.commands.filter(cmd => cmd.help.category === 'mods').map(cmd => `${cmd.help.name}`).join(", ")}\`\n
        Tools: \`${client.commands.filter(cmd => cmd.help.category === 'tools').map(cmd => `${cmd.help.name}`).join(", ")}\`\n
        Images: \`${client.commands.filter(cmd => cmd.help.category === 'imgs').map(cmd => `${cmd.help.name}`).join(", ")}\`\n
        NSFW: \`${client.commands.filter(cmd => cmd.help.category === 'nsfw').map(cmd => `${cmd.help.name}`).join(", ")}\`\n
        Owners: \`${client.commands.filter(cmd => cmd.help.category === 'owners').map(cmd => `${cmd.help.name}`).join(", ")}\``;
    if(args[0] == "-d"){
        message.author.send(hd + `\nIf you want to support me, click => https://bitoryn.xyz/donate`);
    }else{
        message.channel.send(hd + `\nIf you want to support me, go to this page → https://bitoryn.xyz/donate`);
    }
};
module.exports.help = {
    name: "help",
    desc: "shows all commands (write al!help -d for send command list to your DM)",
    category: "info"
}