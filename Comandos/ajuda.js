const Discord = require ('discord.js'); // Requirindo a bibilioteca Discord JS
const config = require("../config.json");

exports.run = async (client, message, args) => {
    let ajuda = new Discord.MessageEmbed()
    .setTitle("Minha lista de comandos")
    .setDescription(`Confira abaixo a minha lista de comandos.\n\nMeu prefixo no servidor é \`${config.prefix}\``)
    .addField("Diversão \(1\)", `**${config.prefix}ship** - \`Shipa um usuário com o outro.\``)
    .addField("Administração \(3\)", `**${config.prefix}ban** - \`Bana um usuário do servidor.\`\n**${config.prefix}kick** - \`Expulse um usuário do servidor.\`\n**${config.prefix}clear** - \`Limpe uma determinada quantidades de mensagens.\` `)
    .setColor("#00FFFF")
    .setFooter(`Executado por: ${message.author.username}`)
message.channel.send(ajuda)
}
