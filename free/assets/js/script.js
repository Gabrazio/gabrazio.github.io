window.onload = () => {
    fetch("https://www.gamerpower.com/api/giveaways?type=game").catch((res) => {
        console.log(res);
    });
}