window.onload = () => {
    let homeButton = document.getElementById("home");
    homeButton.onclick = () => {
        location.href = "https://gabrazio.github.io";
    }

    let aboutButton = document.getElementById("about");
    aboutButton.onclick = () => {
        location.href = "https://gabrazio.github.io/about";
    }

    let projectsButton = document.getElementById("projects");
    projectsButton.onclick = () => {
        alert("Coming Soon!");
    }

    let telegramButton = document.getElementById("telegram");
    telegramButton.onclick = () => {
        location.href = "https://t.me/Gabrazio";
    }

    let instagramButton = document.getElementById("instagram");
    instagramButton.onclick = () => {
        location.href = "https://www.instagram.com/gabrazio";
    }

    let githubButton = document.getElementById("github");
    githubButton.onclick = () => {
        location.href = "https://github.com/Gabrazio";
    }

    let steamButton = document.getElementById("steam");
    steamButton.onclick = () => {
        location.href = "https://steamcommunity.com/id/Gabrazio";
    }
    
    let discordButton = document.getElementById("discord");
    discordButton.onclick = () => {
        location.href = "https://discord.gg/gt2GQbPyPG";
    }

    let twitchButton = document.getElementById("twitch");
    twitchButton.onclick = () => {
        location.href = "https://www.twitch.tv/gabrazio";
    }
}