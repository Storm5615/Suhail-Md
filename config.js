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
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347061899020";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_01_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidzN2eVJCQTRueTRXUzRMWGdKS2w5N1NtVmx4a2t0SVF6ODdBVWZKYUJPUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDYxODk5MDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRjhGODBCMDZFMkZGNkNFQjRCM0QxNTc2MTVEMTM1RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2NTA4OTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDYxODk5MDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQjIzNTNFMzlCODJFRkREMUU0RUIzNzVBMzEwQjEzQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2NTA4OTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWEtJNDYyS1pRdTYwb3BINjliNnp0UVwiLFxuICBcInBob25lSWRcIjogXCJmMjgyZGZmYi02YmQwLTQ5MDctOTg0ZC05NzAzYWY3YTY1ZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgNDksXG4gICAgICA3NCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNSxcbiAgICAgIDcsXG4gICAgICA5NCxcbiAgICAgIDE1OCxcbiAgICAgIDYsXG4gICAgICAyMDgsXG4gICAgICAxNTYsXG4gICAgICAyMTcsXG4gICAgICA1MCxcbiAgICAgIDYwLFxuICAgICAgMjE5LFxuICAgICAgOCxcbiAgICAgIDM4LFxuICAgICAgMjExLFxuICAgICAgOTksXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA2OCxcbiAgICAgIDQ3LFxuICAgICAgMTgyLFxuICAgICAgNjgsXG4gICAgICAxNTUsXG4gICAgICA5LFxuICAgICAgMjEsXG4gICAgICAxNzUsXG4gICAgICAxMDksXG4gICAgICAyMTIsXG4gICAgICA2OSxcbiAgICAgIDE5OSxcbiAgICAgIDU0LFxuICAgICAgMTgxLFxuICAgICAgMTY2LFxuICAgICAgMTkwLFxuICAgICAgMjksXG4gICAgICAxOTYsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIS01BQkZUTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MTg5OTAyMDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc3MTIwNTkyNTgwNjcyOjI1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIllvdXIgVmlsbGFnZSBQZW9wbGVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNLzFoT1lFRUlXUXdyTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBtYitxTThsOGNZcmd1N2pYTlcycWk1ZjNhOG9ZZFYzMWJ2QW1LUTZhMGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3lILzhnQklQdDlkV29OZHZZL0UvOFdqd1dOZXl5Vmo3TGE5b3EvUHVEZ3VsUE51ZEVRZ2w3M29oNjBrNnNGSnhJTzArYmQ3eVF3YUlQb01DV2hrQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQit1SFUydi9xZ09ralJDQ3g4L3QwZUNNQjhYWmJjZDJ5dksyeEhvT2NHUUVBSGtEblI3SlhaOEMycVZhZHBZanQ3TGZxcmpBSkRwK29oUXMrR3NtQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MTg5OTAyMDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODY1MDg4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx0TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHRMLmpzb24iOiAie1wia2V5RGF0YVwiOlwibTgzMWdnaU1oMDBiZVVSeVJGTnlwbGtKWWR2eW1Ccm1BTE9oOUdVS2FYcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg3NzMxOTE2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzE0ODg0NjY0NFwifSIKfQ=="  // PUT your SESSION_ID 


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
