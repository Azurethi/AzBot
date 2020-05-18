var djs = require('discord.js');
var auth = require('./token.json');

var bot = new djs.Client();

var guild = null;

function reactHandler(add,react,user){
    if(react.message.id === '712050850402664571'){
        if(guild!=null){
            var roleMgr = guild.members.resolve(user.id).roles;
            if(add){
                roleMgr.add('712045905108533331');
                console.log(`  Gave Notif role to ${user.tag}`);
            } else {
                roleMgr.remove('712045905108533331');
                console.log(`  Took Notif role from ${user.tag}`);
            }
        } else {
            console.log("Guild not found yet!");
        }
    }
}

bot.on('ready', ()=>{
    console.log("Bot ready!");
    guild=bot.guilds.resolve('711815090021597385');
    guild.channels.resolve('712047418753155132').messages.fetch('712050850402664571')
})

bot.on('messageReactionAdd', reactHandler.bind(null,true))

bot.on('messageReactionRemove', reactHandler.bind(null,false))

bot.login(auth.token);