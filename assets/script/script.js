const open = new Audio("assets/audio/open.wav");
const close = new Audio("assets/audio/close.wav");

class Window {
    constructor(name) {
        playOpen();
        this.window = document.createElement("div");
        this.window.className = "window";

        this.top = document.createElement("div");
        this.top.className = "top";

        this.title = document.createElement("div");
        this.title.className = "title";
        this.title.textContent = name;

        this.close = document.createElement("div");
        this.close.className = "close";
        this.close.textContent = "X";

        this.content = document.createElement("div");
        this.content.className = "content";

        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;

        this.top.addEventListener('mousedown', this.startDrag.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.stopDrag.bind(this));

        this.top.addEventListener('touchstart', this.startDragTouch.bind(this));
        document.addEventListener('touchmove', this.dragTouch.bind(this));
        document.addEventListener('touchend', this.stopDrag.bind(this));

        this.close.addEventListener('click', this.closeWindow.bind(this));
        this.close.addEventListener('touchend', this.closeWindow.bind(this));
    }

    startDrag(e) {
        e.preventDefault();
        this.isDragging = true;
        this.offsetX = e.clientX - this.window.offsetLeft;
        this.offsetY = e.clientY - this.window.offsetTop;
    }

    drag(e) {
        if (this.isDragging) {
            let x = e.clientX - this.offsetX;
            let y = e.clientY - this.offsetY;

            const windowWidth = this.window.offsetWidth;
            const windowHeight = this.window.offsetHeight;
            const pageWidth = window.innerWidth;
            const pageHeight = window.innerHeight;

            if (x < 0) x = 0;
            if (x + windowWidth > pageWidth) x = pageWidth - windowWidth;

            if (y < 0) y = 0;
            if (y + windowHeight > pageHeight) y = pageHeight - windowHeight;

            this.window.style.left = `${x}px`;
            this.window.style.top = `${y}px`;
        }
    }

    stopDrag() {
        this.isDragging = false;
    }

    startDragTouch(e) {
        e.preventDefault();
        this.isDragging = true;
        const touch = e.touches[0];
        this.offsetX = touch.clientX - this.window.offsetLeft;
        this.offsetY = touch.clientY - this.window.offsetTop;
    }

    dragTouch(e) {
        if (this.isDragging) {
            const touch = e.touches[0];
            let x = touch.clientX - this.offsetX;
            let y = touch.clientY - this.offsetY;

            const windowWidth = this.window.offsetWidth;
            const windowHeight = this.window.offsetHeight;
            const pageWidth = window.innerWidth;
            const pageHeight = window.innerHeight;

            if (x < 0) x = 0;
            if (x + windowWidth > pageWidth) x = pageWidth - windowWidth;

            if (y < 0) y = 0;
            if (y + windowHeight > pageHeight) y = pageHeight - windowHeight;

            this.window.style.left = `${x}px`;
            this.window.style.top = `${y}px`;
        }
    }

    closeWindow() {
        playClose();
        this.window.remove();
    }

    centerWindow() {
        const windowWidth = this.window.offsetWidth;
        const windowHeight = this.window.offsetHeight;
        const pageWidth = window.innerWidth;
        const pageHeight = window.innerHeight;

        const x = (pageWidth - windowWidth) / 2;
        const y = (pageHeight - windowHeight) / 2;

        this.window.style.left = `${x}px`;
        this.window.style.top = `${y}px`;
    }

    display() {
        document.body.appendChild(this.window);
        this.window.appendChild(this.top);
        this.top.appendChild(this.title);
        this.top.appendChild(this.close);
        this.window.appendChild(this.content);

        this.window.style.position = 'absolute';
        this.centerWindow();
    }
}

class WindowListContent extends Window {
    constructor(name, titles, items) {
        super(name);

        titles.forEach((title, index) => {
            let titleElement = document.createElement("div");
            titleElement.classList.add("title");
            titleElement.textContent = title;
            this.content.appendChild(titleElement);

            let list = document.createElement("div");
            list.classList.add("list");
            this.content.appendChild(list);

            let ul = document.createElement("ul");
            list.appendChild(ul);

            let item = items[index];
            item.forEach(element => {
                let li = document.createElement("li");
                li.textContent = element;
                ul.appendChild(li);
            });
        });
    }
}

window.onload = () => {
    showMenu();
}

function removeButton(button) {
    for(i = button.length - 1; i >= 0; i--) {
        button[i].remove();
    }
}

function playSelect() {
    open.pause();
    open.currentTime = 0;
    open.play();
}

function playOpen() {
    open.pause();
    open.currentTime = 0;
    open.play();
}

function playClose() {
    close.pause();
    close.currentTime = 0;
    close.play();
}

function playError() {
    close.pause();
    close.currentTime = 0;
    close.play();
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
    watchlist.addEventListener("click", () => {
        let movies = ["Ted", "Spider-Man", "The Matrix", "Deadpool", "A Clockwork Orange", "Yes Man", "Home Alone", "Dead Poets Society", "Rise of the Guardians", "Diary of a Wimpy Kid", "Scott Pilgrim vs. the World", "Wreck-It Ralph", "Kung Fu Panda", "Over the Hedge", "A Christmas Carol", "Elf", "The Polar Express", "How the Grinch Stole Christmas", "John Wick", "Shrek", "Back to the Future", "Jojo Rabbit"];
        movies.sort();
        
        let tvseries = ["The Boys", "Alice in Borderland", "Money Heist", "Stranger Things", "The Big Bang Theory", "Malcolm in the Middle", "Breaking Bad", "Squid Game", "The Office"];
        tvseries.sort();

        let anime = ["Howl's Moving Castle", "To the Forest of Firefly Lights", "Death Note", "Death Parade"];
        tvseries.sort();

        const window = new WindowListContent("watchlist", ["Film", "TV Series", "Anime"], [movies, tvseries, anime]);
        window.display();
    });
}