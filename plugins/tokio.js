let handler = async m => m.reply(`
🇿🇼🍇 :* 𝐋𝐈𝐍𝐊 𝐅𝐎𝐑 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝖹𝖨𝖬 𝐁𝐎𝐓\n\n🔗 📡𝐔𝐑𝐋 :🔭https://github.com/zim-bot/king-bot
`.trim()) // repository
handler.help = ['drips']
handler.tags = ['info']
handler.command = /^drips|git$/i

module.exports = handler
