/*
*
*   Things to add to r!bot:
* ----------------------------
*  Add more stats in the future.
*
*/

const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
    if(message.content == "r!bot help"){
        return message.channel.send("comming soon")
    }
    if (message.content.toLowerCase() == "r!bot") {
        let bot_icon = client.user.displayAvatarURL;
        let bot_embed = new Discord.RichEmbed()
            .setColor("#EB671D")
            .setTitle("<:roast_circle:474755210485563404> Bot Information:")
            .addBlankField()
            .setThumbnail(bot_icon)
            .addField("Bot Name:", client.user.username)
            .addField("Created On:", client.user.createdAt)
            .addField("Server Count:", client.guilds.size)
            .addField("Total Number of Roasts:", "100", true)
            .addField("Total Number of Memes:", "131", true)
            //.addField("Total Users:", )
            .setFooter("Created By Ole113#2421");
        return message.channel.send(bot_embed);
    }
}