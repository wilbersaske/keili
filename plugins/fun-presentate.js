let handler = async (m, { conn }) => {
let vn = './media/presentate.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/glass', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*ΰΏΰΏΰΏβΈΊπΊππππππππΊβΈΊΰΏΰΏΰΏ                ββ’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’           β’ββββββββββ                                        β’β£ββ­ ππππ:                                                                      β’β                                                                                               β’β£ββ­ ππππππ:                                                                  β’β                                                             β’β£ββ­ ππππ:                                                                        β’β                                                                             β’β£ββ­ ππππ:                                                             β’β                             β’ββββββββββ                              ββ’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’β’                                                                                          βͺ’β«·β«Έβ«·β«Έβ«·β«Έβ«·β«Έβ«·β«Έβ«·*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['presentate']
handler.tags = ['maker']
handler.command = /^(ficha)$/i
export default handler
