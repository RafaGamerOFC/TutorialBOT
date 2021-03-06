const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./Comandos/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("ready", () => {
  let activities = [
    `Estou em ${client.guilds.cache.size} servidores.`,
    `Use ${config.prefix}ajuda, para ver a lista de comandos.`
      ],
  i = 0;
  setInterval( () =>
  client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "LISTENING"
      }), 1000 * 60);
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log(`Estou ativo em ${client.guilds.cache.size} servidores gerenciando ${client.users.cache.size} usuários.`)
});

client.login(config.token);