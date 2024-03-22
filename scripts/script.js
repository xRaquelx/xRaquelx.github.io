//Loading screen
window.addEventListener("load", ()=> {
    const loading = document.querySelector(".loading-screen");
    setTimeout(event => loading.classList.add("loading-screen_hidden"), "1000");
    loading.addEventListener("transitionend", event => document.body.removeChild(loading));
});