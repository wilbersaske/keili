let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*ππ€π‘ππ¨ , ΓΊπ£ππ©π ππ‘π€π¨ ππ§πͺπ₯π€π¨ π€ππππππ‘ππ¨ π₯ππ§π π₯ππ¨ππ§ πͺπ£ π§ππ©π€ πππ§πππππ‘π πͺπ¨ππ£ππ€ ππ‘ ππ€π© , πππ«πΓ©π§π©ππ£π¨π ππ€π£ π‘π πππ’ππ‘ππ ΰ¦ΰ§£Ν‘Νΰ―Νβ₯πΊπππ ππποΈ¦οΈ¦ππππΛ* ΰ¦ΰ§£Ν‘Νΰ―Νβ₯πΊπππ ππποΈ¦οΈ¦ππππΛ*

*β€ Grupos ΰ¦ΰ§£Ν‘Νΰ―Νβ₯πΊπππ ππποΈ¦οΈ¦ππππΛβΛ:*
*1.-* https://chat.whatsapp.com/EbGVm4QD9dmDyvsATVGZcf

*2.-* https://chat.whatsapp.com/Ffwidaih74tGRUAdkxq746

*3.-* https://chat.whatsapp.com/CxyWaxkfOuNFsfwebNHFTV

*4.-* https://chat.whatsapp.com/FX8gUUTKcXSDoMeLhjKj1S

*5.-* https://chat.whatsapp.com/FRD4tn9p1bq3gS4wlWgeAd

*6.-* https://chat.whatsapp.com/K6z5EvV3EXkGdTzYwn8VU6

                *STICKER SETSUNA* 
*1.-* https://chat.whatsapp.com/DGBxvr4fetiJMYqIFxsxdn

*15.-* update
`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
