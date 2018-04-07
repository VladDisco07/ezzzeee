/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDMyMjQyNzU1NjI4OTU3Njk4.DaqeWA.F6quCNyzruATzPFVRBmYK9iwmBk';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`:hugging: Bun venit în comunitatea WHART, ${member}!
:white_small_square: Ținând cont că ești o persoană nou-venită pe server-ul nostru, ne dorim să te simti cat mai bine. 
Ne pare rau ca nu avem cel mai bun bot sau cel mai bun staff dar o sa ne dezvoltam pe parcurs. Te rog, uita-te pe index, o sa te ajute destul de mult`);
});

// Log our bot in
client.login(token);
