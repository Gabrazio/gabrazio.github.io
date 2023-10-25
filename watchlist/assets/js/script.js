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
    var tv_series = ["The Boys", "How I Met Your Mother", "The Big Bang Theory", "Breaking Bad", "Stranger Things", "The Umbrella Academy", "BoJack Horseman", "The End of the F***ing World", "Sex Education", "La casa di carta", "Malcolm (Malcolm in the Middle)", "The Office", "Riverdale", "Mr. Robot", "Squid Game", "Atypical", "Alice in Borderland", "Strappare lungo i bordi", "Arcane", "Chernobyl", "Superstore", "Tredici"];

    const tv_series_sorted = tv_series.sort();
    const anime_sorted = anime.sort();
    
    const tv_series_list = document.querySelector(".tv-series .list");
    const anime_list = document.querySelector(".anime .list");

    createList(anime_sorted, anime_list);
    createList(tv_series_sorted, tv_series_list);
}