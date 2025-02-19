const open = new Audio("assets/audio/open.wav");

window.onload = () => {
    showMenu();
}

function playSelect() {
    open.pause();
    open.currentTime = 0;
    open.play();
}

function showMenu() {
    let social = document.createElement("div");
    let notes = document.createElement("div");
    let projects = document.createElement("div");
    
    social.className = "button";
    notes.className = "button";
    projects.className = "button";
    
    social.textContent = "social";
    notes.textContent = "notes";
    projects.textContent = "projects";
    
    let buttons = document.getElementById("buttons");
    
    buttons.appendChild(social);
    buttons.appendChild(notes);
    buttons.appendChild(projects);

    social.addEventListener("click", () => {
        playSelect();
        removeChildrens(buttons);
        showSocial();
    });

    notes.addEventListener("click", () => {
        playSelect();
        alert("¯\\_(ツ)_/¯");
    });

    projects.addEventListener("click", () => {
        playSelect();
        alert("¯\\_(ツ)_/¯");
    });
}

function showSocial() {
    let buttons = document.getElementById("buttons");

    let instagram = document.createElement("div");
    let telegram = document.createElement("div");
    let steam = document.createElement("div");
    let back = document.createElement("div");

    instagram.className = "button";
    telegram.className = "button";
    steam.className = "button";
    back.className = "button";
    
    instagram.textContent = "instagram";
    telegram.textContent = "telegram";
    steam.textContent = "steam";
    back.textContent = "back";

    buttons.appendChild(instagram);
    buttons.appendChild(telegram);
    buttons.appendChild(steam);
    buttons.appendChild(back);

    instagram.addEventListener("click", () => {
        playSelect();
        location.href = "https://www.instagram.com/gabrazio/";
    });

    telegram.addEventListener("click", () => {
        playSelect();
        location.href = "https://t.me/Gabrazio";
    });

    steam.addEventListener("click", () => {
        playSelect();
        location.href = "https://steamcommunity.com/id/Gabrazio/";
    });

    back.addEventListener("click", () => {
        playSelect();
        removeChildrens(buttons);
        showMenu();
    });
}

function removeChildrens(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}