window.onload = () => {
    showMenu();
}

function showMenu() {
    let buttons = document.getElementById("buttons");

    let instagram = document.createElement("div");
    let telegram = document.createElement("div");
    let steam = document.createElement("div");

    instagram.className = "button";
    telegram.className = "button";
    steam.className = "button";
    
    instagram.textContent = "instagram";
    telegram.textContent = "telegram";
    steam.textContent = "steam";
 
    buttons.appendChild(instagram);
    buttons.appendChild(telegram);
    buttons.appendChild(steam);

    instagram.addEventListener("click", () => {
        location.href = "https://www.instagram.com/gabrazio/";
    });

    telegram.addEventListener("click", () => {
        location.href = "https://t.me/Gabrazio";
    });

    steam.addEventListener("click", () => {
        location.href = "https://steamcommunity.com/id/Gabrazio/";
    });
}

function removeChildrens(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}