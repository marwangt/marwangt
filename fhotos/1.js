function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
  const zack = 'https://qu.ax/SRQJs.jpg'
  const mentionId = m.key.participant || m.key.remoteJid;
 
conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `harley`}, body: { text: `أهلا وسهلابك/ي👋🏻 @${mentionId.split('@')[0]}
*₪ ↵ معلوماتك [🔰]*
*◆━ ⊱∘┃﹝🍉﹞┃∘⊰ ━◆*
>  ₪┆⊱∘ 👑 بـريـمـيـوم↞⌊ ${user.premiumTime > 0 ? '👑مميز' : (isPrems ? 'مميز👑' : 'عادي') || ''} ⌉
>  ₪┆⊱∘ 🔝 مـــســـتواك↞⌊ ${level} ⌉
>  ₪┆⊱∘ 👨‍✈️ رتـبـتـك↞⌊ ${role} ⌉
>  ₪┆⊱∘ 🙆‍♀️ الـخـبـرة↞⌊ ${exp} ⌉
>  ₪┆⊱∘ 💎 الـمـاس↞⌊ ${limit} ⌉
*◆━ ⊱∘┃﹝🫐﹞┃∘⊰ ━◆*
*₪ ↵ معلومات البوت [🔰]*
*◆━ ⊱∘┃﹝🫐﹞┃∘⊰ ━◆*
>  ₪┆⊱∘ 🤖 اسـم الـبـوت 『𝑅𝐼𝑇𝐴﹝🍇﹞𝐵𝛩𝑇』
>  ₪┆⊱∘ 👑 الـمـطـور 『𝑴𝑹﹝🫐﹞𝑨𝑶𝑲𝑰𝑱𝑰』
>  ₪┆⊱∘ 🔁 الـتـشـغـيـل ﹝${uptime}﹞
>  ₪┆⊱∘ 👥 المستخدمين ﹝${rtotalreg}﹞
*◆━ ⊱∘┃﹝🍉﹞┃∘⊰ ━◆*
> 𝑉𝐸𝑅𝑺𝐼𝛩𝑁 𝑁𝐴𝑀𝐵𝐸𝑅 4`,subtitle: "Araab Zack",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: zack } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: false,
                    },nativeFlowMessage: { buttons: [


                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام فلاش بـ🤖ـوت',
                                            highlight_label: '𝐍𝐀𝐑𝐔𝐓𝐎 & 𝐙𝐀𝐂𝐊',
                                            rows: [
                                                {
                                                    header: 'الــقـ👑ـســم الـاول',
                                                    title: 'استدعاء_قسم_الاعضاء #الاعضاء',
                                                    description: '',
                                                    id: '.ق1'
                                                },
                                                {
                                                    header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',
                                                    title: 'استدعاء_قسم_المشرفين #المشرفين',
                                                    description: '',
                                                    id: '.ق2'
                                                },
                                                {
                                                    header: 'الــقـ🕋ـســم الــثــالــث',
                                                    title: 'استدعاء_قسم_الدين #الدين',
                                                    description: '',
                                                    id: '.ق3'
                                                },
                                                {
                                                    header: 'الــقـ👑ـســم الــرابــع',
                                                    title: 'استدعاء_قسم_المطور #المطور',
                                                    description: '',
                                                    id: '.ق4'
                                                },
                                                {
                                                    header: 'الــقـ🛡ـســم الــخــامــس',
                                                    title: 'استدعاء_قسم_التنزيلات #التنزيلات',
                                                    description: '',
                                                    id: '.ق6'
                                                },
                                                {
                                                    header: 'الــقـ🕹ـســم الــســادس',
                                                    title: 'استدعاء_قسم_الالعاب #الالعاب',
                                                    description: '',
                                                    id: '.ق5'
                                                },
                                                {
                                                    header: 'الــقـ🌀ـســم الــســابــع',
                                                    title: 'استدعاء_قسم_التحويلات #التحويلات',
                                                    description: '',
                                                    id: '.ق7'
                                                },
                                                {
                                                    header: 'الــقـ🤖ـســم الــتــاســع',
                                                    title: 'استدعاء_قسم_الذكاء #الذكاء',
                                                    description: '',
                                                    id: '.ق8'
                                                },
                                                {
                                                    header: 'الــقـ🚨ـســم الــعــاشــر',
                                                    title: 'استدعاء_قسم_الدعم #الدعم',
                                                    description: '',
                                                    id: '.ق11'
                                                },
                                                {
                                                    header: 'الــقـ♦ـســم �لــحــاديــة عــشــر',
                                                    title:'استدعاء_قسم_اخرى #اخرى',
                                                    description: '',
                                                    id: '.ق10'
                                                },
                                                {
                                                    header: 'الــقـ🌌ـســم �لــحــاديــة عــشــر',
                                                    title: 'استدعاء_قسم_صور-اديت #الصور-اديت',
                                                    description: '',
                                                    id: '.ق9' 
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
{
              name: "quick_reply",
              buttonParamsJson: '{"display_text":"﹝قوانين〘❄️〙 آلَبّـوُتُ﹞","id":".قانون"}'
            },
     {
       name: "quick_reply",
              buttonParamsJson: '{"display_text":"﹝مِــــــــطوُر〘❄️〙 آلَبّـوُتُ﹞","id":".صاحب_البوت"}'
            },
                      {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"﹝مِـــوُقـع〘❄️〙آلَمِــــــــطوُر﹞","url": "https://atom.bio/plokeswedgt","merchant_url":"الي تبي"}'
                     },
     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"﹝قَنٌآة〘❄️〙 آلَمِــــــــطوُر﹞","url":"https://whatsapp.com/channel/0029VamEMSIB4hdaVyNiVQ0C","merchant_url":"رابط قناتك"}'
            }
              ]
            }
          }
        }
      }
    }, {})

} 

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['menu', 'مهام', 'اوامر','الاوامر','قائمة','القائمة']

export default handler;
