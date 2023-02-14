const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

// Import dotenv config before variables.
dotenv.config() //don't toutch.
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env;

// creating new discord bot client. 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// import dir 
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

// import commands

client.commands = new Collection();

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`Command in ${filePath} don't has "data or "execute".`)
    }
}

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);

// recive the evenets
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0];
        if (selected == 'discord.js') {
            await interaction.reply("discord.js: https://discordjs.guide/#before-you-begin")
        } else if (selected == 'discord.py') {
            await interaction.reply("discord.py: https://discordpy.readthedocs.io/en/stable/intro.html")
        }
    }
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
    if(!command) console.error('Cannot find this command.');
    try {
        await command.execute(interaction);
    } catch(e) {
        console.error(e);
        await interaction.reply('Got and error.');
    }
    // console.log(interaction)

});
