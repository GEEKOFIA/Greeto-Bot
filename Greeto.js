var Discord = require('discord.io');

var logger = require('winston');
var auth = require('./auth.json');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';


// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});


bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it needs to execute a command
    // for this script it will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({ to: channelID, message: 'Pong!' });
            break;
			case 'nishant':
			case 'Nishant':
				bot.sendMessage({ to: channelID, message: 'Chutiya Hey !' });
			break;
			case 'pavel':
			case 'Hunter':
			case 'hunter':
				bot.sendMessage({ to: channelID, message: 'Wahi Nishant Chutiya He Hey !' });
			break;
			case 'rajmani':
				bot.sendMessage({ to: channelID, message: 'Bhai Hey !' });
			break;
			case 'Geekofia':
			case 'GEEKOFIA':
			case 'geekofia':
			case 'Chandu':
			case 'chandu':
				bot.sendMessage({ to: channelID, message: 'Mera Baap Hey !' });
			break;
			case 'rishu':
				bot.sendMessage({ to: channelID, message: 'Pandit Hey !' });
			break;
			case 'sidpan':
				bot.sendMessage({ to: channelID, message: 'Ameer Hey !' });
			break;
			case 'kaddu':
			case 'priyanshu':
			case 'Kaddu':
			case 'Priyanshu':
				bot.sendMessage({ to: channelID, message: 'LOL Hey !' });
			break;
            default:
                bot.sendMessage({ to: channelID, message: 'Unknown command.' });
        }
    }
})
