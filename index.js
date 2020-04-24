
const token = process.env.token;
const Discord = require('discord.js');

const bot = new Discord.Client();
const footer = "Security Bot || by Steffy";

var prefix = 'ar!';

var fs = require("fs");




bot.on('ready', () =>{
    console.log('This Bot is online');
    bot.user.setActivity(`Securing Server`);
})

bot.on('guildMemberAdd', member =>{
    let nonverified = member.guild.roles.cache.find(role => role.name === "NV");
    member.roles.add(nonverified.id);
})


bot.on('message', async message=>{

    if(message.author.bot) {message.delete(100); return;}
   

    if (message.channel.name === "verify"){
        let mess = message.content.split(" ");
    if(mess[0] === "ar!verify"){
        if(mess[1] >= 15){

          ;

            let m = message.member;

            let notvr = message.guild.roles.cache.find(role => role.name === "NV");
           
            m.roles.remove(notvr.id);
    
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
                        }else{
                            let m = message.member;
                            message.author.send({
                                "embed": {
                                    "color": 13372690,
                                    "footer": {
                                        "text": "Anime Romania Bodyguard || by Steffy"
                                    },
                                    "title": "Anime Romania - Verification",
                                    "description": ":x: Nu indeplinesti criteriile!!"
                                }
                                                 });
                                                 m.kick();



                        }

                        

                            }
    }
     
    
        message.delete(500);
})


bot.login(token);