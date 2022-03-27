function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '27734090203', 'Drips Memes', m)
  this.sendContact(m.chat, '27634090203', '𝘿𝙍𝙄𝙋𝙎 𝙈𝙀𝙈𝙀𝙎', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
