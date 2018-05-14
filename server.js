const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', (join) => {
  console.log('I am here to help you Just like ARCHER');
  client.user.setActivity(` ArcherBot PREMIUM THANKS FOR BUYING!  | AB/Info`);
  client.user.setStatus('dnd');
});
client.on('message', message => {
  if (message.content === 'AB/Info'){
    message.reply('join my support discord: https://discord.gg/TRbQe9n ,NOW HERE IS THE INFO: \n Owner: <@376501859680256021> \n Prefix: AB/  \n Developer:<@376501859680256021> \n Subscribe to my channel to help my developers out! https://www.youtube.com/channel/UCKAY3Tw-APxo0dvsf1hheCQ ');
  }
  
client.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); 
  let prefix =  'AB/';// This slices off the command in cont, only leaving the arguments.

    // Commands

    // Ping
    if (msg === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('Ping!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.

    }


    // Purge
    if (msg.startsWith(prefix + 'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "bot-commander")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the \`bot-commander\` role to use this command.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }
});

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
client.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});


});
 







client.on('message', message => {
    if (message.content === 'AB/Email') {
        message.channel.send('Email me here:  ArcherBotGB@hotmail.com');
    }
});



client.on('message', message => {
    if (message.content === 'Pizzas') {
        message.channel.send('Odering Pizza Permission authorised from <@376501859680256021>');
    }
});

client.on('message', message => {
    if (message.content === 'Archer') {
        message.channel.send('Archers Info!                                                                                                                         My developer = True                                                                                                                                                  Has a discord = True                                                                                                                                   Is human = true                                                                                                                                                                                Is server mod/admin = True');
    }
});

client.on('message', message => {
    if (message.content === 'SG') {
        message.channel.send('Join my Support Guild https://discord.gg/TRbQe9n  ');
    }
});





client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", (message) => {
    if (message.content.startsWith("AB/kick")) {
  if (!message.member.roles.find("name", "Administrator")) 
                message.channel.send('You need the \`Administrator\` role to use this command.');
  else
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }  //ive coded this before hand
});
client.on("message", (message) => {
    if (message.content.startsWith("AB/ban")) {
  if (!message.member.roles.find("name", "Administrator")) 
                message.channel.send('You need the \`Administrator\` role to use this command.');
  else
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});


client.on('message', message => {
    if (message.content === 'ApplyForDev') {
        message.channel.send('Join My Support Guild here:   https://discord.gg/98XZny4    and go to #apply-for-dev to apply for dev!');
    } 
});








client.on('message', message => {
    if (message.content === 'AB/VoteYes') {
        message.channel.send('Thank You im sure my developer will be happy :wink:');
    }
});

client.on('message', message => {
    if (message.content === 'AB/VoteQuestion') {
        message.channel.send('The vote Question is Should <@376501859680256021> be Main Helper ???');
    }
});


client.on('message', message => {
    if (message.content === 'AB/VoteNo') {
        message.channel.send('Awwwww :( My developers isnt going to be happy at you...');
    }
});

client.on('message', message => {
    if (message.content === 'AB/VoteTime') {
        message.channel.send('You have 3 Minutes to Vote! Votes After the time will NOT count! ');
    }
});
client.on('message', message => {
    if (message.content === 'AB/Developer') {
        message.channel.send('I am developed by <@376501859680256021>');
    }
});
//lets get a kick command! 


//I am developed by <@376501859680256021>
client.on('message', message => {
    if (message.content === 'Food') {
        message.channel.send(':shallow_pan_of_food: ');
    }
});

client.on('message', message => {
    if (message.content === 'food') {
        message.channel.send(':shallow_pan_of_food: ');
    }
});

client.on('message', message => {
    if (message.content === 'Drink') {
        message.channel.send(':tropical_drink: ');
    }
});
client.on('message', message => {
    if (message.content === 'drink') {
        message.channel.send(':tropical_drink: ');
    }
});

client.on('message', message => {
    if (message.content === 'Food And Drink') {
        message.channel.send(':tropical_drink: :shallow_pan_of_food: ');
    }
});





client.on('message', message => {
    if (message.content === 'ChangeLogs') {
        message.channel.send('Changed today!: Prefix is now AB/');
    }
});
    

client.on('message', message => {
    if (message.content === 'Roblox') {
        message.channel.send('Roblox Roblox i play roblox!!!! (From Archergamer30#4201)');
    }
});

client.on('message', message => {
    if (message.content === 'ArcherBot Lang And Money') {
        message.channel.send('Current Language for ArcherBot is: English                                                                                                                          Money Type: Pound Sterling                                                                                                       BUY PREMIUM ONLY £54.99 or $75.90!!!')
    }
});
client.on('message', message => {
    if (message.content === 'AB/Ping') {
        message.channel.send('Pong                                                                                                                               :stopwatch: 76                                                                                                                                                      :heartbeat: 25 ');
    }
});
client.on('message', message => {
    if (message.content === 'AB/Ping') {
        message.channel.send('Pong                                                                                                                               :stopwatch: 76                                                                                                                                                      :heartbeat: 25 ');
    }
});


client.on('message', message => {
    if (message.content === 'AB/dev1') {
        message.channel.send('Made By @archergamer30#4201');
    }
});
























client.login (process.env.TOKEN)
