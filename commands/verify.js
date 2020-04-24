const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var role = message.guild.roles.find(role => role.name === "NV");
   
    if (message.channel.name === "verify")
        if(args[1] >= 15){
        message.author.removeRole(role).catch(console.error);
        message.author.send({
            "embed": {
                "color": 55552,
                "footer": {
                    "text": "Anime Romania Bodyguard || by Steffy"
                },
                "title": "Anime Romania - Verification",
                "description": ":white_check_mark: Te-ai verificat cu succes!!"
            }
        });
        }

    else{
        message.delete(100);
    }



}


module.exports.help = {


    name: "verify"
}