const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['94785274495'] //ඔයගෙ නම්බරෙ✅
global.ownername = "CYBER-DEXTER-ID"//ඔයගෙ නම✅
global.ytname = "YT: Fenix_programmer.inc" //don't change❌❌
global.socialm = "FENIX ID MD" //don't change❌❌
global.location = "srilanka" //don't change❌❌

global.botname = '𝐂𝐘𝐁𝐄𝐑-𝐈𝐃-𝐌𝐃' //බොට්ගෙ නම✅

//sticker details
global.stickername = '𝐂𝐘𝐁𝐄𝐑-𝙄𝘿' //ස්ට්කර් නම✅
global.packname = 'Sticker By'
global.author = '𝐂𝐘𝐁𝐄𝐑 𝐅𝐔𝐂𝐊' //ස්ට්කර් නම✅
//console view/theme
global.themeemoji = '🧩'
global.wm = "Fenix botz inc." //don't change❌❌

//theme link
global.link = 'https://chat.whatsapp.com/LQlxjPZLF3JDdWzA3erL88' //don't change❌❌

//custom prefix
global.prefa = ['!'] //don't change❌❌

//ඔබට අවශ්‍ය දෙවල් true✅ සහ අනවශ්‍ය දෙවල් false❌
//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*FENIX-ID-1999E*', //don't change❌❌
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}
 //don't change❌❌
global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
