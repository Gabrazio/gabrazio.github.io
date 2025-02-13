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

    let buttons = document.getElementById("buttons");

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
        let movies = ["22 Jump Street", "21 Jump Street", "Shrek", "Shrek 2", "Shrek the Third", 
            "Shrek Forever After", "Back to the Future", "Back to the Future Part II", 
            "Back to the Future Part III", "Jojo Rabbit",
            "Bridge to Terabithia", "A Series of Unfortunate Events", 
            "How the Grinch Stole Christmas", "The Polar Express", "Elf", 
            "A Christmas Carol", "Sing", "The Lorax", "The Super Mario Bros. Movie", 
            "Over the Hedge", "Kung Fu Panda", "Wreck-It Ralph", "Who Framed Roger Rabbit", 
            "Scott Pilgrim vs. the World", "Dumbo", "Mary Poppins Returns", 
            "Diary of a Wimpy Kid", "Diary of a Wimpy Kid: Rodrick Rules", 
            "Diary of a Wimpy Kid: Dog Days", "Rise of the Guardians", "Jingle All the Way", 
            "Dead Poets Society", "Home Alone", "Harry Potter and the Sorcerer's Stone", 
            "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", 
            "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix", 
            "Harry Potter and the Half-Blood Prince", "Harry Potter and the Deathly Hallows: Part 1", 
            "Harry Potter and the Deathly Hallows: Part 2", "Fantastic Beasts and Where to Find Them", 
            "Fantastic Beasts: The Crimes of Grindelwald", "John Wick", "John Wick: Chapter 4", 
            "John Wick: Chapter 3 - Parabellum", "John Wick: Chapter 2", 
            "The Lord of the Rings: The Fellowship of the Ring", "The Hobbit: An Unexpected Journey", 
            "The Lord of the Rings: The Two Towers", "The Lord of the Rings: The Return of the King", 
            "The Hobbit: The Battle of the Five Armies", "The Hobbit: The Desolation of Smaug",
            "Yes Man", "A Clockwork Orange", "Ace Ventura: Pet Detective", 
            "The House with a Clock in Its Walls", "Deadpool", "Deadpool 2", "Paul", "The Matrix",
            "Spider-Man", "Spider-Man 2", "Spider-Man 3", "Ted", "Ted 2", "Hot Fuzz", 
            "The Internship", "Léon: The Professional", "Aquaman", "Shaun of the Dead", 
            "The Cobbler", "Night at the Museum", "Night at the Museum: Battle of the Smithsonian", 
            "Night at the Museum: Secret of the Tomb", "Jumanji", "Luca", "Soul", "Coco", 
            "The Adam Project", "Lightyear", "Toy Story", "Toy Story 3", "Toy Story 2", 
            "Monsters University", "Monsters, Inc.", "Up", "Toy Story 4", "Free Guy", 
            "The Incredibles", "WALL·E", "Cars", "Cars 2", "Puss in Boots", 
            "Madagascar: Escape 2 Africa", "Ice Age: Dawn of the Dinosaurs", "Kung Fu Panda 2",
            "Madagascar 3: Europe's Most Wanted", "Madagascar", "Sing 2", "Ice Age", 
            "Ice Age: Continental Drift", "Ice Age: The Meltdown", "Rio", "Despicable Me 2", 
            "Despicable Me", "Minions", "Cloudy with a Chance of Meatballs", "Bolt", 
            "Meet the Robinsons", "Monsters vs. Aliens", "Bee Movie", "Flushed Away", 
            "The Lion King", "Space Jam", "Stuart Little", "Antz", "Paddington", 
            "Alice in Wonderland", "The BFG", "Arthur and the Invisibles", "Chicken Little", 
            "Zootopia", "Tangled", "Inside Out", "Brave", "How to Train Your Dragon", 
            "Finding Nemo", "Shark Tale", "Guardians of the Galaxy", "Guardians of the Galaxy Vol. 2", 
            "Captain America: The First Avenger", "Iron Man", "Iron Man 2", "Shazam!", 
            "Suicide Squad", "Joker", "Django Unchained", "Everything Everywhere All at Once", 
            "Interstellar", "Avatar: The Way of Water", "Avatar", "Charlie and the Chocolate Factory", 
            "The Wolf of Wall Street", "Save Yourselves!", "The Imitation Game", "Innerspace", 
            "Blade Runner 2049", "Aquaman and the Lost Kingdom", "Blade Runner", 
            "The Truman Show", "The Nutty Professor", "Eternal Sunshine of the Spotless Mind", 
            "The Big Lebowski", "Once Upon a Time... in Hollywood", "Anger Management", 
            "500 Days of Summer", "The Kid Who Would Be King", "Puss in Boots: The Last Wish", 
            "Inception", "Die Hart 2: Die Harter", "Shutter Island", "Zoolander 2", 
            "Zoolander", "Tropic Thunder", "Dodgeball: A True Underdog Story", 
            "The Secret Life of Walter Mitty", "The Simpsons Movie", "The Mask", 
            "Robots", "Happy Feet", "Monster House", "Forrest Gump", "Good Will Hunting", 
            "The Adventures of Tintin", "Fight Club", "American Psycho", "Pulp Fiction", 
            "The Godfather", "Rango", "Megamind", "Taxi Driver", "Scarface", "Inglourious Basterds", 
            "Superbad", "Kill Bill: Vol. 1", "Reservoir Dogs", "The Tenant", "Elemental", 
            "Stand by Me", "Little Miss Sunshine", "Goosebumps", "The Nightmare Before Christmas", 
            "Liberal Arts", "Seeking a Friend for the End of the World", "The Notebook", 
            "About Time", "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem", 
            "Begin Again", "Nightcrawler", "Anomalisa", "Life of Pi", "Apollo 13", 
            "Trading Places", "Gremlins", "Dennis the Menace", "Past Lives", 
            "Kill Bill: Vol. 2", "Mothers' Instinct", "The Wizard of Oz", "Super", 
            "Austin Powers: International Man of Mystery", "The 40-Year-Old Virgin", 
            "Central Intelligence", "The Green Mile", "The Perks of Being a Wallflower", 
            "Whiplash", "Howl's Moving Castle", "To the Forest of Firefly Lights"];
        movies.sort();
        
        let tvseries = ["The Office", "Malcolm in the Middle", "Death Note", "The Big Bang Theory", 
            "Sex Education", "Breaking Bad", "How I Met Your Mother", "Fallout", 
            "The Simpsons", "The Boys", "Gen V", "Stranger Things", "The Umbrella Academy", 
            "Arcane", "Invincible", "Superstore", "Chernobyl", "Atypical", "Squid Game", "Young Sheldon", "Death Note", "Death Parade"];
        tvseries.sort();

        const window = new WindowListContent("watchlist", ["Film", "TV Series"], [movies, tvseries]);
        window.display();
    });
}