let handler = async m => m.reply(`
Drips is rich, he doesn't need your money.
`.trim()) // Handikwerete just enjoy the bot
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
