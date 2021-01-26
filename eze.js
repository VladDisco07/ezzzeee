//outdated (editing this in 2021)

const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDMyMjQyNzU1NjI4OTU3Njk4.DaqeWA.F6quCNyzruATzPFVRBmYK9iwmBk';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Bun venit în comunitatea WHART, ${member}!
:white_small_square: Ținând cont că ești o persoană nou-venită pe server-ul nostru, ne dorim să te simti cat mai bine. 
Ne pare rau ca nu avem cel mai bun bot sau cel mai bun staff dar o sa ne dezvoltam pe parcurs. Te rog, uita-te pe index, o sa te ajute destul de mult`);
});

// Log our bot in
client.login(token);
