window.onload = () => {
    let homeButton = document.getElementById("home");
    homeButton.onclick = () => {
        location.href = "https://gabrazio.github.io";
    }

    let aboutButton = document.getElementById("about");
    aboutButton.onclick = () => {
        location.href = "https://gabrazio.github.io/about";
    }

    let projectsButton = document.getElementById("projects");
    projectsButton.onclick = () => {
        alert("Coming Soon!");
    }

    let img = document.getElementById("img");
    let filename = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];
    img.style.backgroundImage = "url(assets/img/" + filename[Math.round(Math.floor(Math.random() * (filename.length)))];
}