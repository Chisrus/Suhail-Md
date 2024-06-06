const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "51239570";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_42_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9rbzl4Vk05WjlMMjNSU2d3VndEbUxQUlV5NFlndW5oNk5ZSk5qNlQxcWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkE5emhtcGVwUTR1ZXkxLWRjcTVMaEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDg0ZGI3YzAtYWY3Ny00ZTYwLWE0ZTItZmU5NTQzZDAxYWE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDE0LFxuICAgICAgODcsXG4gICAgICAxNzIsXG4gICAgICAyMDMsXG4gICAgICA0MCxcbiAgICAgIDE5MixcbiAgICAgIDU1LFxuICAgICAgMTAxLFxuICAgICAgMzcsXG4gICAgICAyNTMsXG4gICAgICAxODUsXG4gICAgICAyMzYsXG4gICAgICA2OCxcbiAgICAgIDE4MSxcbiAgICAgIDIzOCxcbiAgICAgIDE2NSxcbiAgICAgIDIxMyxcbiAgICAgIDEyMixcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTQwLFxuICAgICAgNCxcbiAgICAgIDIwNSxcbiAgICAgIDczLFxuICAgICAgNDMsXG4gICAgICAyMjMsXG4gICAgICAyMTEsXG4gICAgICAxOTYsXG4gICAgICAxOTYsXG4gICAgICAxNDEsXG4gICAgICAzOCxcbiAgICAgIDIxNSxcbiAgICAgIDc3LFxuICAgICAgMTIyLFxuICAgICAgMTQ4LFxuICAgICAgODYsXG4gICAgICAxMDYsXG4gICAgICAxMDYsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlZXTDU2NlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTUxMjM5NTcwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODg0Njg4NDE5MjQ5Njo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0oybCtjNERFTkdTaWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTXh5dmVUdVhla3pidjJteXFJRDVqN3VCdFBLRm5Ea1NsOGkrendPWUpEST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUaXZsUXlGNkpST0ZpOUQrQlpNb2ZjSkY2ZGFnZTN6dUg4V29tMXc0NlRmWFljcm5wR29zUTh4RVBBR1htQ2VMVWNxQyt2V2EwN2QyemN0amcvYmVBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1bHk4NVJZNVQwTDNZbnNBMnJBRnlmR2hiYTR6Sk5mdmVPNnIrVURrcWJUNlcrSWNua2k0U3NWMEs2dDUyL1hFanl5VU90bTRiWkJsNENDL1U0cVhDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU1MTIzOTU3MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc3MTczMzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
