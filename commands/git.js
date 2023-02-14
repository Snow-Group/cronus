const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('./ping');

const exampleEmbed = new EmbedBuilder()
	.setColor('#070926')
	.setTitle('Git commands')
    .setDescription('Git commands to help you improve your code skills!')
	.addFields(
		// { name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git init', value: 'Start repository', inline: true },
		{ name: '$ git branch -M', value: 'Create a new branch', inline: true },
        { name: '$ git add', value: 'add files changes', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git commit', value: 'commit file changes', inline: true },
		{ name: '$ git push', value: 'Push commits/PR to repo.', inline: true },
		{ name: '$ git remote add', value: 'Remote connection to repo.', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: '\u200B', value: '\u200B' }
	)
	// .addFields()
	.setTimestamp()
	.setFooter({ text: 'Git commands to help you', iconURL: 'https://cdn.discordapp.com/avatars/1072375704932585512/6ea18bf0d8b4e69fcad9ff439f050620.webp' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('git')
        .setDescription('Good git commands'),
    
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}