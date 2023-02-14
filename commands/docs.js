const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require('discord.js');

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("Select")
            .setPlaceholder("No language selected")
            .addOptions({
                label: "discord.js",
                description: "discord.js docs",
                value: "discord.js"
            },
            {
                label: "discord.py",
                description: "discord.py docs",
                value: "discord.py"
            }
            )

    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Documentation of tecnologies.'),
    
    async execute(interaction) {
        await interaction.reply({content: "Select a tecnology:", components: [row]});
    }
}