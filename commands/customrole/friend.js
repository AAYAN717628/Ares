const { message, client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");

module.exports = {
  name: "friend",
  aliases: ['frnd', 'fri'],
  category: 'owner',
  run: async (client, message, args) => {



    if(message.member.permissions.has("ADMINISTRATOR")){
} else {
        const embed = new MessageEmbed()
        .setDescription("You are not allowed to use these command !")
        .setColor("DARK_BUT_NOT_BLACK")
        return message.channel.send({embeds: [embed]})
    }
const abc = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!abc){
    return message.channel.send(`Provide The User`)
}
   

    if(abc){
        const friend = await client.db.get(`friend_${message.guild.id}`)  || "no"
        if(friend === "no"){
            const embed = new MessageEmbed()
            .setDescription(`You don't have any Friend Role Yet.`)
            .setColor('DARK_BUT_NOT_BLACK')
            return message.channel.send({embeds:[embed]});
        }
        
        const check = abc.roles.cache.has(friend)
        if(check){
abc.roles.remove(friend);
const embed = new MessageEmbed()
.setDescription(`Successfully Removed Friend Role`)
.setColor('DARK_BUT_NOT_BLACK')
 message.channel.send({embeds:[embed]});
        } else {
            abc.roles.add(friend); 
            const embed = new MessageEmbed()
            .setDescription(`Added Friend Role`)
            .setColor('DARK_BUT_NOT_BLACK')
             message.channel.send({embeds:[embed]});
        }
    }
    
  }}