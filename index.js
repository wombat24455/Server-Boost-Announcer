const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.\nWatching <#${process.env.BOOST_CHANNEL}>`);
    client.user.setPresence({
        status: 'online',
        activity: {
            name: `for server boosts`,
            type: `WATCHING`,
        }
    })
});

client.on('message', message => {
    if (message.type === 'USER_PREMIUM_GUILD_SUBSCRIPTION') {
        var user = message.author.username;
        var userID = message.author.id;
        console.log(`${user} (${userID}) has boosted the server!`)
        client.channels.cache.get(process.env.BOOST_CHANNEL).send(`yooooooo <@${userID}> thanks for the boost!!!`);
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;

    if (message.content.includes(client.user.id)) {
        message.channel.send(`That would be me`);
    }
});

client.login(process.env.TOKEN);
