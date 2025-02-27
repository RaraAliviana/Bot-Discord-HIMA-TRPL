require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('guildMemberAdd', async (member) => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "welcome"); // Ganti dengan nama channel yang sesuai

    if (!welcomeChannel) return;

    const embed = new EmbedBuilder()
        .setTitle("🎉 Selamat Datang di HIMA TRPL! 🎉")
        .setDescription(`Halo **${member.user.username}**! 👋  
        Selamat bergabung di **Himpunan Mahasiswa Teknologi Rekayasa Perangkat Lunak**! 🚀
        
        🔹 Jangan lupa baca aturan di <#1341024830618730548>  

        **Semoga betah dan aktif ya! 💡**`)
        .setColor("#2ECC71")
        .setImage("https://media.discordapp.net/attachments/1344704711349108796/1344709429127413902/Untitled_design_1.png") // Ganti dengan URL banner yang sesuai
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: "HIMA TRPL - Together We Learn, Together We Grow!", iconURL: "https://cdn.discordapp.com/attachments/1344704711349108796/1344709428783353977/Add_a_subheading.png" });

    welcomeChannel.send({ content: `👋 Selamat datang, ${member}!`, embeds: [embed] });
});

// Menggunakan token dari file .env
client.login(process.env.TOKEN);
