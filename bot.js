const Discord = require('discord.js');
const { Client,RichEmbed } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login("");
client.on('ready', x => {
  const channel = client.channels.cache.get('729359717616320663')
  //console.log(channel)
  //console.log(`Logged in as ${client.user.tag}!`);
  //console.log(channel.guild.roles.cache.find(o => o.name == "C#"))
  //channel.send('Halo Semua, Aku anak baru jangan di bully yaaaaaaaaaaa :rofl:')
}); 


client.on('guildMemberAdd', member => {
  const channel =  member.guild.channels.cache.find(ch => ch.name === '🏡general');
  if (!channel) return;
  channel.send(`Selamat Datang di Server Team UP Dev ${member}, Oh iya jangan lupa tag skill kamu di <#729575194187923458> ya !!\n
  Server Info :
    Kunjungi <#729575194187923458> untuk ambil skill spesifikasi kamu ya!
    Kunjungi <#724165603740483638> untuk diskusi bareng lewat teks sama temen - temen lainnya
    Kunjungi <#729321872491020294> untuk bermain Quiz(On Development)
    Kunjungi <#729339682307178567> untuk course - course menarik lainnya
    Kunjungi <#729375875711107163> untuk melihat info - info penting
    Kunjungi <#729659401279111168> untuk temen - temen yang kesulitan memahami sebuah kasus
    Kunjungi <#729359717616320663> untuk ide untuk pengembangan bot atau berkontribusi

    Developer Area :
    Kunjungi <#724165704412168212> untuk melihat tips trick pemprograman
    Kunjungi <#729993789745397760> untuk Ide Proyek dan Ide Lainnya
    Kunjungi <#730078494133977219> untuk mendapat info event penting
    Kunjungi <#730225043396886570> untuk mendapatkan Assets untuk digunakan kembali (gratis)
    Kunjungi <#731095073738981417> untuk mendapatkan info lamaran kerja/proyek
    
    Oh iya, aku udah nambahin title Developer nih khusus untuk Dev ${member}, kalau ngerasa titlenya gak diperluin boleh di remove kok :grin:`,{ files: ["./assets/img_bot_rem_role_dev.jpg"] });
  member.roles.add("728981956322263070").then(o => {
    console.log(`User ${o.user.username} telah mengambil role Developer`)
  }).catch(err => console.error) 
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me

client.on('message',m => {
  const args = m.content.split(/ +/);
  const command = args.shift().toLowerCase();
  const channel = client.channels.cache.get(m.channel.id)

  if(command){
    if(command == "ceker"){
      if (args[0]){
        if(channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase())){
          if (args[0].toLowerCase() == channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase()).name.toLowerCase()){
            let d = `List Developer yang memiliki skill ${channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase()).name}:\n`
            let x = 1
            let f = channel.guild.roles.cache.find(o => o.name.toLowerCase() == args[0].toLowerCase()).members.map(y=> {
              d += `${x}. ${y.displayName}\n`
              x += 1
              return d
            })
            m.reply(d)
          }
        }else if(args[0].toLowerCase() === 'ayam' || args[0].toLowerCase() === 'bebek' || args[0].toLowerCase() === 'angsa' || args[0].toLowerCase() === 'kalkun'){
          m.reply(`Ma'af, Dev <@${m.author.id}> Kami bukan tempat jualan ${args[0]}`)
        }else {
          m.reply(`Ma'af mungkin boleh lihat role yang ada di <#729575194187923458>`)
        }
      }else {
        m.reply(`Mau Check Role apa Dev <@${m.author.id}>`)
      }    
    }
    
    if(command == "info"){
      if(args[0]){
        let imgURL = `https://cdn.discordapp.com/avatars/${channel.members.find(x => x.id == args[0].substr(3,(args[0].length)-4)).id}/${channel.members.find(x => x.id == args[0].substr(3,(args[0].length)-4)).user.avatar}.webp`
        let getUser = channel.members.find(x => x.id == args[0].substr(3,(args[0].length)-4))
        console.log(args[0])
        const infoProfile = new Discord.MessageEmbed()
          .setColor(getUser.displayHexColor)
          .setTitle('Developer Info')
          .setURL('https://discord.gg/fEPAA2x')
          .setAuthor(getUser.displayName, imgURL, 'https://discord.gg/fEPAA2x')
          .setDescription('deskriptit')
          .setThumbnail(imgURL)
          .addFields(
            { name: 'In development', value: 'In development' },
            { name: '\u200B', value: '\u200B' },
            { name: 'In development', value: 'a\nb\nc\nd', inline: true },
            { name: 'In development', value: 'a\nb\nc\nd', inline: true },
          )
          .addField('In development', 'In development', true)
          .setImage(imgURL)
          .setTimestamp()
          .setFooter('In development', imgURL);

        console.log(channel.members.find(x => x.id == args[0].substr(3,(args[0].length)-4)))
        channel.send(infoProfile)
        console.log(imgURL)
      }else{
        channel.send(`Mau cari info siapa Dev <@${m.author.id}>`)
      }
    }
  }
  //console.log(`this is args ${args} and this one is command ${command}`)
  //console.log(args)
  //console.log(args[2])
  try {
    let bad = ["remot","mouse"]
    gg = "anjing|babi|monyet|kunyuk|bajingan|asu|bangsat|kampret|kontol|memek|ngentot|ngewe|perek|pecun|bencong|banci|jablay|maho|bego|goblok|idiot|geblek|orang gila|gila|sinting|tolol|sarap|udik|kampungan|kamseupay|buta|budek|bolot|jelek|setan|iblis|keparat|ngehe|bejad|gembel|brengsek|tai|sompret"
    if(m.author.bot === false && m.content.match(/anjing|babi|monyet|kunyuk|bajingan|asu|bangsat|kampret|kontol|memek|ngentot|ngewe|perek|pecun|bencong|banci|jablay|maho|bego|goblok|idiot|geblek|orang gila|gila|sinting|tolol|sarap|udik|kampungan|kamseupay|buta|budek|bolot|jelek|setan|iblis|keparat|ngehe|bejad|gembel|brengsek|tai|sompret/gi)!==null){
      m.reply(`Mas jangan ngomong ${m.content.match(/anjing|babi|monyet|kunyuk|bajingan|asu|bangsat|kampret|kontol|memek|ngentot|ngewe|perek|pecun|bencong|banci|jablay|maho|bego|goblok|idiot|geblek|orang gila|gila|sinting|tolol|sarap|udik|kampungan|kamseupay|buta|budek|bolot|jelek|setan|iblis|keparat|ngehe|bejad|gembel|brengsek|tai|sompret/g)} ya !!
      
Mohon disensor pake * banyak banyak`)
    m.delete() //This is the original message that triggered the message event.
    String.prototype.replaceAt = function(index, replacement) {
      console.log(this.substr(0,index))
      console.log(replacement)
      console.log(this.substr(index + replacement.length))
      return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    y.replaceAt(0, "*&#")
    let msgQuery = m.content.replace(/anjing|babi|monyet|kunyuk|bajingan|asu|bangsat|kampret|kontol|memek|ngentot|ngewe|perek|pecun|bencong|banci|jablay|maho|bego|goblok|idiot|geblek|orang gila|gila|sinting|tolol|sarap|udik|kampungan|kamseupay|buta|budek|bolot|jelek|setan|iblis|keparat|ngehe|bejad|gembel|brengsek|tai|sompret/g,(y)=> {
      return y.replaceAt(0, "*&#")
    })
    m.channel.send(msgQuery) 
    }else{
      console.log(m.content.match(/anjing|babi|monyet|kunyuk|bajingan|asu|bangsat|kampret|kontol|memek|ngentot|ngewe|perek|pecun|bencong|banci|jablay|maho|bego|goblok|idiot|geblek|orang gila|gila|sinting|tolol|sarap|udik|kampungan|kamseupay|buta|budek|bolot|jelek|setan|iblis|keparat|ngehe|bejad|gembel|brengsek|tai|sompret/g))
    }
    if(m.toLowerCase().split(' ')[0]){

    }
  } catch (error) {
    //console.log("roles undefined")
  }
})
client.on('message',(msg) => {
  if (msg.content === 'testbot'){
    msg.reply(`Selamat Datang di Server Team UP Developer Area, \n
    Server Info :
    Kunjungi <#729575194187923458> untuk ambil skill spesifikasi kamu ya!
    Kunjungi <#724165603740483638> untuk diskusi bareng lewat teks sama temen - temen lainnya
    Kunjungi <#729321872491020294> untuk bermain Quiz(On Development)
    Kunjungi <#729339682307178567> untuk course - course menarik lainnya
    Kunjungi <#729375875711107163> untuk melihat info - info penting
    Kunjungi <#729659401279111168> untuk temen - temen yang kesulitan memahami sebuah kasus
    Kunjungi <#729359717616320663> untuk ide untuk pengembangan bot atau berkontribusi

    Developer Area :
    Kunjungi <#724165704412168212> untuk melihat tips trick pemprograman
    Kunjungi <#729993789745397760> untuk Ide Proyek dan Ide Lainnya
    Kunjungi <#730078494133977219> untuk mendapat info event penting
    Kunjungi <#730225043396886570> untuk mendapatkan Assets untuk digunakan kembali (gratis)
    Kunjungi <#731095073738981417> untuk mendapatkan info lamaran kerja/proyek`);
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
      console.log(`User ${o.user.username} telah mengambil role ${role.id}`)
    }).catch(err => console.error) 
    /** 
    console.log(rct.emoji)**/
    //console.log(rct.emoji)
  }else {
    //console.log(rct)
  }
  
})

