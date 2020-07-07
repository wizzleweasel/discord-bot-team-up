const Discord = require('discord.js');
const { Client,RichEmbed } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login(process.env.token);
client.on('ready', x => {
  const channel = client.channels.cache.get('729359717616320663')
  console.log(channel)
  console.log(`Logged in as ${client.user.tag}!`);
  channel.send('Halo Semua, Aku anak baru jangan di bully yaaaaaaaaaaa :rofl:')
}); 

client.on('message',(msg) => {
  if (msg.content === 'o'){
    msg.reply('Hi Good Morning $')
  }
})

client.on('message',x => {
  if(x.content === 'hai' || x.content === 'hi' || x.content === 'halo'){
    x.reply('')
  }
})
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message',x => {
  if(x.author.bot){
    if(x.embeds){
      const embedx = x.embeds.find(y => y.title === 'Programming Language');
      if (embedx){
        x.react('729510509677903962')
        .then(z => z.message.react('729510511686713364'))
        .then(z => z.message.react('729510511196110939'))
        .then(z => z.message.react('729510509795344424'))
        .then(z => z.message.react('729510510047002635'))
        .then(z => z.message.react('729510511783444481'))
        .then(z => z.message.react('729510510382546944'))
        .then(z => z.message.react('729510512538288260'))
        .then(z => z.message.react('729510511556821144'))
        .then(z => z.message.react('729510511351169214'))
        .then(z => z.message.react('729549242338902086'))
        .then(z => z.message.react('729510510562771054'))
        .then(z => z.message.react('729381202313871411'))
        .then(z => z.message.react('729549239449026640'))
        .then(z => z.message.react('729510509669384262'))
        .then(z => z.message.react('729381197129711727'))
        .then(z => z.message.react('729510890038362143'))
        .then(z => z.message.react('729510511607152730'))
        .then(z => z.message.delete(2000))
        .then(a => console.log("Deleted Message"))
        .catch(err => console.error)
      }
    }
    return;
  }
  if(x.content.toLowerCase() === 'roles'){
    const emb = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Programming Language")
    .setAuthor('Team UP Bot', 'https://cdn.discordapp.com/icons/724165603740483635/d39e41ea7348250c07785e5f671427be.webp', 'https://discord.com/channels/724165603740483635/729359717616320663')
    .setThumbnail('https://cdn.discordapp.com/icons/724165603740483635/d39e41ea7348250c07785e5f671427be.webp')
    .addFields(
      { name: '<:c1_programming:729510509677903962> ｢C｣', value: '<:c2_programming:729510511686713364> ｢C++｣', inline: true },
      { name: '<:c3_programming:729510511196110939> ｢C#｣', value: '<:net_programming:729510509795344424> ｢.Net｣', inline: true },
      { name: '<:java_programming:729510510047002635> ｢Java｣', value: ' <:kotlin_programming:729510511783444481> ｢Kotlin｣', inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: '<:php_programming:729510510382546944> ｢PHP｣', value: '<:ruby_programming:729510512538288260> ｢Ruby｣', inline: true },
      { name: '<:dart_programming:729510511556821144> ｢Dart｣', value: ' <:go_programming:729510511351169214> ｢Go｣', inline: true },
      { name: '<:sql_programming:729549242338902086> ｢SQL｣', value: ' <:lua_programming:729510510562771054> ｢Lua｣', inline: true },
      { name: '\u200B', value: '\u200B' },
      { name: '<:python_programming:729381202313871411> ｢Python｣', value: '<:rust_programming:729549239449026640> ｢Rust｣', inline: true },
      { name: '<:html_programming:729510509669384262> ｢HTML｣', value: '<:css_programming:729381197129711727> ｢CSS｣', inline: true },
      { name: '<:javascript_programming:729510890038362143> ｢JavaScript｣', value: '<:swift_programming:729510511607152730> ｢Swift｣', inline: true },
    )
    .setDescription(`<:javascript_programming:729381197645480078>
      Set Your Programming Roles by Clicking them :heart: <:javascript_programming:729381197645480078>
    `)
    x.channel.send(emb)
  }
})

client.on('messageReactionAdd',(rct,user)=> {
  if (user.bot) return;
  if (rct.message.channel.id !== "729575194187923458") return;
  if (!rct.message.guild) return;
  if (rct.message.id === '729582282242785370'){
    console.log("success??")
    console.log(rct.emoji)
    var roleN = rct.emoji.name;
    roleN.toLowerCase().split('_')[0] === 'c1' ? roleN = 'C_P' :  roleN.toLowerCase().split('_')[0] === 'c2' ? roleN = 'C++_P' : roleN.toLowerCase().split('_')[0] === 'c3' ? roleN = 'C#_P' :  roleN.toLowerCase().split('_')[0] === 'net' ? roleN = '.Net' : roleN.toLowerCase().split('_')[0] === 'lua' ? roleN = '.Lua' : roleN = roleN
    var role = rct.message.guild.roles.cache.find(o => o.name.toLowerCase() === roleN.toLowerCase().split('_')[0]);
    var mbr = rct.message.guild.members.cache.find(o => o.id === user.id); 
    if (mbr.roles.cache.has(role)){
      mbr.roles.remove(role.id).then(o => {
        console.log(`Yahhh  . . Agan ${mbr.user.username} gak nekunin skill ${role.name} lagi`)
      }).catch(err => console.error)
    }
    
    mbr.roles.add(role.id).then(o => {
      console.log(`test ${o.user.username} rolm`)
    }).catch(err => console.error) 
    /** 
    console.log(roleN)
    console.log(role)
    console.log(mbr)
    console.log(rct)
    console.log(`this is role name ${role} and this`)
    console.log(role)
    console.log(rct.emoji)**/
    console.log(rct.emoji)
  }else {
    console.log(rct)
  }
  
})

