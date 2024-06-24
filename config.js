const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ibrahimoluwaseun263@gmail.com"
global.location="Africa/Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Storm:<password>@atlascluster.3vvqdkk.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://mallucampaign.in/images/img_1719197497.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347061899020";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://mallucampaign.in/images/img_1719197497.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_59_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgODksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImc2Zi9UajBsZW00eUNDdjFaakMzUDI2bXcvYzVUTXkvbW1HZHBYNUJWbmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2MTg5OTAyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREVDRUEwMzMzMDI5MEVBQ0RGNDg0MjVGNzBGREEwREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTk3OTYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZMaFRBQ2RxUkl5YmpzUGtVOE9NLUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTU4OWJkMmUtMTcwOS00YTY3LThmMTItNDhlMDAwZmM0NTc3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDgwLFxuICAgICAgMTM3LFxuICAgICAgNDksXG4gICAgICA0OCxcbiAgICAgIDEzOSxcbiAgICAgIDExMixcbiAgICAgIDI1MCxcbiAgICAgIDI4LFxuICAgICAgMTIsXG4gICAgICAxNTUsXG4gICAgICAxNjgsXG4gICAgICAxMjIsXG4gICAgICAxNjksXG4gICAgICA4NyxcbiAgICAgIDEzNSxcbiAgICAgIDgsXG4gICAgICAyNDMsXG4gICAgICA3OCxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzgsXG4gICAgICAyMzcsXG4gICAgICAwLFxuICAgICAgMzMsXG4gICAgICAyNyxcbiAgICAgIDExNCxcbiAgICAgIDE3MixcbiAgICAgIDIxOSxcbiAgICAgIDYxLFxuICAgICAgMzQsXG4gICAgICA1OSxcbiAgICAgIDk0LFxuICAgICAgMjEyLFxuICAgICAgNzYsXG4gICAgICAyMixcbiAgICAgIDU1LFxuICAgICAgNzAsXG4gICAgICA2MCxcbiAgICAgIDIxOCxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzMVk0Wkw1R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MTg5OTAyMDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc3MTIwNTkyNTgwNjcyOjI3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIllvdXIgVmlsbGFnZSBQZW9wbGVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNLzFoT1lFRUlEQzQ3TUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBtYitxTThsOGNZcmd1N2pYTlcycWk1ZjNhOG9ZZFYzMWJ2QW1LUTZhMGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3pKanBwaFBZalNNYlZrU3Z3eGp0T0dTYTVla2IxL0R0TlFkMTE1NXpjWmNoLzVpaXVScDhyOVBiY3Z0VFc3amh0WGlBNFlkTVRqdmZIVnhwRmtORGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidDRlbm5wUkRGNjBvKzc1TkZDUS9PSTRHQWJhdWZHTVFoYWtQNzkrRWpMQ3JrNUhxMHlOL3hpRU1jOHhGSDRrWEk4NTFCS0kxYXNRVVlPS29FbjB5QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MTg5OTAyMDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTE5Nzk1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx0VFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHRULmpzb24iOiAie1wia2V5RGF0YVwiOlwiL1YxVmJYazVvRU5RM09NWEN5ajI1OTlqZWZSa3RFUVNaR2lnVFF0dzAvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg3NzMxOTE5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Storm",
  packname: process.env.PACK_NAME || "Storm",
  botname : process.env.BOT_NAME  || "Your Village People",
  ownername:process.env.OWNER_NAME|| "Your Village people",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
