
const playIcon = document.getElementById("music__play-btn");
const pauseIcon = document.getElementById("music__pause-btn");

playIcon.addEventListener("click", () => {
    playIcon.style.display = "none"
    pauseIcon.style.display = "flex"
})

pauseIcon.addEventListener("click", () => {
    pauseIcon.style.display = "none"
    playIcon.style.display = "flex"
})

// toggle 이용할 수 있도록 해보기.