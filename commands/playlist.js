const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nevest')
        .setDescription('Says ping, reply pong!'),
    
    async execute(interaction) {
        await interaction.reply("https://github.com/Nevesto");
    }
}