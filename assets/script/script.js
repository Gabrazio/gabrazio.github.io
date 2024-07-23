window.onload = () => {
    var N = 12;
    var imgNumber = Math.floor(Math.random() * N) + 1;
    var img = document.getElementById("meme");
    img.style.backgroundImage = "url(assets/img/" + imgNumber + ".jpg)";
}