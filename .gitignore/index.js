const  Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("WtbBot, !help);
    console.log("le bot a bien ete connecte");
});

bot.login("NDg0ODQ0ODQwNTE3ODk0MTQ1.DmrLAA.DbxH9K3-Y00yWcRizEQgVGgGq4c");
