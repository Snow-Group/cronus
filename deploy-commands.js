const dotenv = require('dotenv');
const {REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

dotenv.config(); //don't toutch.
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env;
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({version: "10"}).setToken(TOKEN);

(async () => {
    try {
        console.log(`Reset ${commands.length} commands`);
        const data = await rest.put(    
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log('Registered commands.');
    } catch(e) {
        console.error(e)
    }
})();

// console.log('passei por tudo.');