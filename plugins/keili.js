import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_π₯΅ keili π₯΅_`, author, url, [['π₯π π π π π π π π ππ₯', `/${command}`]], m)
}
handler.help = ['keili']
handler.tags = ['internet']
handler.command = /^(keili)$/i
export default handler

global.pack = [
  "https://lh4.googleusercontent.com/RF1Vzu7ZjIUGBHTwhxSAeCuX68YmqEb4ozN5c8vUwJoLcoH47-kLXTvNCRpw79rSMKVCXBBHUL5jeQ=w2450-h4825",
  "https://lh4.googleusercontent.com/RF1Vzu7ZjIUGBHTwhxSAeCuX68YmqEb4ozN5c8vUwJoLcoH47-kLXTvNCRpw79rSMKVCXBBHUL5jeQ=w2450-h4825",
  "https://lh4.googleusercontent.com/RF1Vzu7ZjIUGBHTwhxSAeCuX68YmqEb4ozN5c8vUwJoLcoH47-kLXTvNCRpw79rSMKVCXBBHUL5jeQ=w2450-h4825",

]
