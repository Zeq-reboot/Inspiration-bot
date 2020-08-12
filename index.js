const Discord = require('discord.js');
const Bot = new Discord.Client();
Bot.on('message', function (message) {
    //commande de lancer de dé avec la valeur prise en paramètre
    if (message.content.startsWith('/dice')) {
        let args = message.content.split(' ');
        if (args[1] === undefined || isNaN(args[1]) || parseInt(args[1])<0) message.channel.send('vous devez entrer une valeur valide');
        else
        {
            let alea = Math.round(Math.random() * parseInt(args[1]));
            message.channel.send(alea);
        }
        
    }  
})
Bot.login('NzQzMTEzOTQ4NTg4NTM5OTc0.XzP8yw.mvH-iWdvbEYKM2q5AJtKuZkz7ro');