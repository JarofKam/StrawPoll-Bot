const botPoll = require('strawpoll-bots').default;
const { join } = require('path');
console.log("Iniciando bot :)");


// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.me/19550123', 100, true, join(__dirname, 'socks.txt'));
