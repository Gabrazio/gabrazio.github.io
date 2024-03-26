window.onload = () => {
    fetch("https://www.gamerpower.com/api/giveaways?type=game").then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    });
}