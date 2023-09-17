window.onload = () => {
    const instagram = document.getElementById("instagram");
    const telegram = document.getElementById("telegram");
    const discord = document.getElementById("discord");
    const spotify = document.getElementById("spotify");
    const steam = document.getElementById("steam");

    instagram.addEventListener("click", (event) => {
        window.open("https://www.instagram.com/gabrazio");
    });

    telegram.addEventListener("click", (event) => {
        window.open("https://t.me/Gabrazio");
    });

    discord.addEventListener("click", (event) => {
        window.open("https://discord.gg/9c59zuEuM");
    });

    spotify.addEventListener("click", (event) => {
        window.open("https://open.spotify.com/user/315tjw2pqcnsvba6b3ggadalmzme");
    });

    steam.addEventListener("click", (event) => {
        window.open("https://steamcommunity.com/id/Gabrazio");
    });
}