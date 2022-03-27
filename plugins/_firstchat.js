// Zim Bot Inc 2022

let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send2ButtonLoc(m.chat, await(await fetch(thumbfoto)).buffer(), `
*Hi ${name}, ${ucapan()}*
I am Zim-Bot Bot one of the WhatsApp bots.

*Please don't call, ask for a save, or spam in using bots*
Please read the rules and obey the rules for our mutual convenience.
Thank you

If there are problems, please contact the owner.
`.trim(), watermark, 'Menu', '.?', 'Rules', '.rules')
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Africa/Harare').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) { 
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
