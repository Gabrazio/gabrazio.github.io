window.onload = () => {
    function createList(array, list){
        let old_letter;
        for(let i in array){
            let title = array[i];
            
            let new_letter = title[0];
            let name = document.createElement("h4");
            name.style.fontWeight = "lighter";
            name.style.margin = 0;

            if(new_letter != old_letter){
                let letter = document.createElement("h3");
                list.appendChild(letter);
                letter.textContent = new_letter;
            }
            
            list.appendChild(name);
            name.textContent = title;
            
            old_letter = new_letter;
        }
    }

    var anime = ["Sword Art Online", "Another", "Mirai nikki - Future Diary", "La forma della voce", "Your Name.", "Hotarubi no mori e", "Wolf Children - Ame e Yuki i bambini lupo", "Death Parade", "One-Punch Man", "Noragami", "Death Note", "Weathering with You", "Voglio mangiare il tuo pancreas", "Il castello errante di Howl"];
    var tv_series = ["I Am Not Okay with This", "The Boys", "How I Met Your Mother", "The Big Bang Theory", "Breaking Bad", "Stranger Things", "The Umbrella Academy", "BoJack Horseman", "The End of the F***ing World", "Sex Education", "La casa di carta", "Malcolm (Malcolm in the Middle)", "The Office", "Riverdale", "Mr. Robot", "Squid Game", "Atypical", "Alice in Borderland", "Strappare lungo i bordi", "Arcane", "Chernobyl", "Superstore", "Tredici", "Dahmer - Mostro: la storia di Jeffrey Dahmer"];
    var film = ["L'attimo fuggente", "The Truman Show", "Ritorno al futuro", "Ritorno al futuro - Parte II", "Ritorno al futuro - Parte III", "Jojo Rabbit", "Scott Pilgrim vs. the World", "Dumbo", "Diario di una schiappa", "Diario di una schiappa 2", "Diario di una schiappa: Vita da cani", "Le 5 leggende", "21 Jump Street", "22 Jump Street", "Shrek", "Shrek 2", "Shrek Terzo", "Shrek 4: e vissero felici e contenti", "Sing", "Lorax - Il guardiano della foresta", "Super Mario Bros - Il film", "La gang del bosco", "Kung Fu Panda", "Ralph Spaccatutto", "Il ritorno di Mary Poppins", "Harry Potter e la pietra filosofale", "Harry Potter e la camera dei segreti", "Harry Potter e il prigioniero di Azkaban", "Harry Potter e il calice di fuoco", "Harry Potter e l'Ordine della Fenice", "Harry Potter e il principe mezzosangue", "Harry Potter e i Doni della Morte - Parte 1", "Harry Potter e i Doni della Morte - Parte 2", "Animali fantastici e dove trovarli", "Animali fantastici: I crimini di Grindelwald", "John Wick", "John Wick - Capitolo 2", "John Wick 3 - Parabellum", "John Wick 4", "Il Signore degli Anelli - La compagnia dell'Anello", "Lo Hobbit - Un viaggio inaspettato", "Il Signore degli Anelli - Le due torri", "Il Signore degli Anelli - Il ritorno del re", "Lo Hobbit - La battaglia delle cinque armate", "Lo Hobbit - La desolazione di Smaug", "Una parola può cambiare tutto - Yes Man", "Arancia meccanica", "Ace Ventura - L'acchiappanimali", "Il mistero della casa del tempo", "Deadpool", "Deadpool 2", "Paul", "Matrix", "Spider-Man", "Spider-Man 2", "Spider-Man 3", "Ted", "Ted 2", "Hot Fuzz", "Gli stagisti", "Léon", "Aquaman", "L'alba dei morti dementi", "Mr Cobbler e la bottega magica", "Una notte al museo", "Una notte al museo 2 - La fuga", "Notte al museo - Il segreto del faraone", "Jumanji", "Luca", "Soul", "Coco", "The Adam Project", "Lightyear - La vera storia di Buzz", "Toy Story - Il mondo dei giocattoli", "Toy Story 3 - La grande fuga", "Toy Story 2: Woody & Buzz alla riscossa", "Toy Story 4", "Monsters University", "Monsters & Co.", "Up", "Free Guy - Eroe per gioco", "Gli Incredibili - Una 'normale' famiglia di supereroi", "WALL·E", "Cars - Motori ruggenti", "Cars 2", "Il gatto con gli stivali", "Madagascar 2", "L'era glaciale 3 - L'alba dei dinosauri", "Kung Fu Panda 2", "Madagascar 3 - Ricercati in Europa", "Madagascar", "Sing 2 - Sempre più forte", "L'era glaciale", "L'era glaciale 2 - Il disgelo", "L'era glaciale 4 - Continenti alla deriva",
                "Rio", "Cattivissimo me", "Cattivissimo me 2", "Minions", "Piovono polpette", "Bolt - Un eroe a quattro zampe", "I Robinson - Una famiglia spaziale", "Mostri contro alieni", "Bee Movie", "Giù per il tubo", "Il re Leone"];

    const tv_series_sorted = tv_series.sort();
    const anime_sorted = anime.sort();
    const film_sorted = film.sort();

    const tv_series_list = document.querySelector(".tv-series .list");
    const anime_list = document.querySelector(".anime .list");
    const film_list = document.querySelector(".film .list");

    createList(anime_sorted, anime_list);
    createList(tv_series_sorted, tv_series_list);
    createList(film_sorted, film_list);
}