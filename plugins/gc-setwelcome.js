let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[â] ð¼ð´ð½ðð°ð¹ð´ ð³ð´ ð±ð¸ð½ðð´ð½ð¸ð³ð° ð²ð¾ð½ðµð¸ð¶ððð°ð³ð¾ ð²ð¾ððð´ð²ðð°ð¼ð´ð½ðð´ ð¿ð°ðð° ð´ððð´ ð¶ððð¿ð¾*')
} else throw `*[â] âââÂ«à³Â°Ûà³Â°à§¹Â»âââ
ð¥à£ªË Wà¼¶Eà¼¶Là¼¶Cà¼¶Oà¼¶Mà¼¶Eð¥âËâ¢
âââÂ«à³Â°Ûà³Â°à§¹Â»âââ
â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·
ââââââââââââ
â *â¨ @51927318556 bienvenid@ a*
â *WOLRD OF HENTAI â¨*
â   
â Â·    Â·    Â·    Â·     Â·     Â·     Â·     Â· 
â *â« Puedes solicitar mi lista de*
â     *comandos con:*
â â¥ *#menu* 
â
â *â« AquÃ­ tienes la descripciÃ³n* 
â *del grupo, lÃ©ela!!*
â
â    .         ã     à¶ ã     . â¢ 
â *ðº  Disfruta de tu* 
â *estadÃ­a en el grupo  ðº*  
â   .    .             .         ã    ã.
ââââââââââââ
â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·â¡¾â¢·, ððð´:*\n*- @user (menciÃ³n)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
