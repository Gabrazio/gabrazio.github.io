window.onload = () => {
    let img = document.getElementById("img");
    let filename = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"];
    img.style.backgroundImage = "url(assets/img/" + filename[Math.round(Math.floor(Math.random() * (filename.length)))];
}