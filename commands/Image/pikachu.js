const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports = {
  name: "pikachu",
  aliases: ["pika"],
  category: "image",
  description: "Génére une image aléatoire de pikachu",
  usage: "e/pikachu",
  statut: "on",
  run: async (client, message, args) => {
    let msg = await message.channel.send("**Chargement...**");

    fetch("https://some-random-api.ml/pikachuimg")
      .then(res => res.json())
      .then(body => {
        if (!body || !body.link)
          return message.reply(
            "Je n'ai pas réussi à trouver une image de pickachu réessayez plus tard !"
          );

        let embed = new Discord.RichEmbed()
          .setColor("e85317")
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setImage(body.link)
          .setTimestamp()
          .setFooter("ÉclaryBOT", message.guild.iconURL)
          .setTitle(":frame_photo: GÉNÉRATION D'IMAGE");

        msg.edit(embed);
      });
  }
};
