window.onload = () => {
    var N = 12;
    var imgNumber = Math.floor(Math.random() * N) + 1;
    var img = document.getElementById("meme");
    img.style.backgroundImage = "url(assets/img/" + imgNumber + ".jpg)";

    var homeButton = document.getElementById("home");
    var aboutButton = document.getElementById("about");
    var blogButton = document.getElementById("blog");
    var socialButton = document.getElementById("social");
    var projectsButton = document.getElementById("projects");

    aboutButton.onclick = () => {
        alert("COMING SOON");
    }

    blogButton.onclick = () => {
        alert("COMING SOON");
    }

    socialButton.onclick = () => {
        alert("COMING SOON");
    }

    projectsButton.onclick = () => {
        alert("COMING SOON");
    }
}