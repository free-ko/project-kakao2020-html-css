
const playIcon = document.getElementById("music__play-btn");
const pauseIcon = document.getElementById("music__pause-btn");
const musicPlayImg = document.querySelector(".music-play__img");
const musicPlaying = document.getElementById("music");


playIcon.addEventListener("click", () => {
    musicPlayImg.classList.add("active");
    musicPlaying.style.display = "flex"
    playIcon.style.display = "none"
    pauseIcon.style.display = "flex"
})

pauseIcon.addEventListener("click", () => {
    musicPlayImg.classList.remove("active");
    musicPlaying.style.display = "none"
    pauseIcon.style.display = "none"
    playIcon.style.display = "flex"
})

// toggle 이용할 수 있도록 해보기.