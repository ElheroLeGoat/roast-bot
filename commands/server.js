/*
*
*   Things to add to rb!server:
* ----------------------------
*  Add more stats such as how many text channels their are and how many voice.
*
*/

const Discord = require("discord.js");

//const { prefixFile } = require("../database/custom-prefix.js");
const { onOff } = require("../database/on-off.js");

exports.run = async (message) => {
    if (message.author.bot) { return; }

    const key = message.guild.id;
    
    if (!onOff.has(key)) {
        const key = message.guild.id;
        onOff.set(key, {
            guild: message.guild.id, server: onOff.get(key, "server")
        });
    }

    if (message.content.toLowerCase() === "rb!" + "server help") {
        return message.channel.send("**rb!server help:**\n\n`rb!server` tells you information about your server. The information that it provides is: Number of people in server, Server name, the date you joined, and the date the server was created.\n\n*Example:\n\n*USER: rb!server\nRoast-Bot: Server Name....\nDate the server was created....\nDate you joined....\nNumber of people in the server....\n\n`rb!server` will still work even if you put 1 or more space after the \"server\".  It will not work however if you put 1 or more spaces and then a character that isn\'t a space. \n\n\n  If your still having trouble with rb!clear NUMBER please join the support server and ask in #roast-bot-help. \n\n\n\nServer Invite Link: https://discordapp.com/invite/9y8yV42");
    }
    if (message.content.toLowerCase() === "rb!" + "server") {
        let serverIcon = message.guild.iconURL;
        let serverEmbed = new Discord.RichEmbed()
            .setColor("#EB671D")
            .setTitle("Server Information:")
            .addBlankField()
            .setThumbnail(serverIcon)
            .addField("Server Name:", message.guild.name)
            .addField("Created On:", message.guild.createdAt)
            .addField("You Joined:", message.member.joinedAt)
            .addField("Total Members:", message.guild.memberCount);
        console.log(onOff.get(key, "server"));
        console.log(onOff);
        return message.channel.send({ embed: serverEmbed });
    } else if (message.content.toLowerCase() === "rb!" + "server") {
        console.log(onOff.get(key, "server"));
        return message.channel.send("This command has been turned off by an administrator.");
    } else {
        console.log(onOff.get(key, "server"));
        console.log(onOff);
    }
};