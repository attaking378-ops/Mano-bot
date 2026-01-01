 const fs = require("fs");
module.exports.config = {
	name: "Atta",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("atta") || 
react.includes("Attaullah")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐀𝐭𝐭𝐚𝐮𝐥𝐥𝐚𝐡 𝐊𝐢𝐧𝐠✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ https://youtube.com/attaullah ✦ \n𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 \n 𝐒𝐢𝐧𝐝𝐡𝐢 😋https://www.facebook.com/khuharo`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
