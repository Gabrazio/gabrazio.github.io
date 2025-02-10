const select = new Audio("assets/audio/select.wav");
const error = new Audio("assets/audio/error.wav");

window.onload = () => {
    showMenu();
}

function removeButton(button) {
    for(i = button.length - 1; i >= 0; i--) {
        button[i].remove();
    }
}

function playSelect() {
    select.pause();
    select.currentTime = 0;
    select.play();
}

function playError() {
    error.pause();
    error.currentTime = 0;
    error.play();
    alert("¯\\_(ツ)_/¯");
}

function showSocial() {
    playSelect();

    let button = document.getElementsByClassName("button");

    removeButton(button);

    let instagram = document.createElement("div");
    let telegram = document.createElement("div");
    let back = document.createElement("div");
                
    instagram.className = "button";
    telegram.className = "button";
    back.className = "button";
                
    instagram.textContent = "instagram";
    telegram.textContent = "telegram";
    back.textContent = "back";

    let buttons = document.getElementById("buttons");

    buttons.appendChild(instagram);
    buttons.appendChild(telegram);
    buttons.appendChild(back);

    instagram.addEventListener("click", () => {
        playSelect();
        location.href = "https://www.instagram.com/gabrazio/";
    });

    telegram.addEventListener("click", () => {
        playSelect();
        location.href = "https://t.me/Gabrazio";
    });

     back.addEventListener("click", showMenu);
}

function showMenu() {
    playSelect();
                
    let button = document.getElementsByClassName("button");

    if(button != null) {
        removeButton(button);
    }

    let social = document.createElement("div");
    let notes = document.createElement("div");
    let projects = document.createElement("div");
    let watchlist = document.createElement("div");

    social.className = "button";
    notes.className = "button";
    projects.className = "button";
    watchlist.className = "button";
    
    social.textContent = "social";
    notes.textContent = "notes";
    projects.textContent = "projects";
    watchlist.textContent = "watchlist";
    
    let buttons = document.getElementById("buttons");
    
    buttons.appendChild(social);
    buttons.appendChild(notes);
    buttons.appendChild(projects);
    buttons.appendChild(watchlist);

    social.addEventListener("click", showSocial);
    notes.addEventListener("click", playError);
    projects.addEventListener("click", playError);
    watchlist.addEventListener("click", playError);
}