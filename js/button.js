
const playIcon = document.getElementById("music__play-btn");
const nextIcon = document.getElementById("music__next-btn");
const pauseIcon = document.getElementById("music__pause-btn");
const musicPlayImg = document.querySelector(".rotate__img");
const musicPlaying = document.getElementById("music");

const img1 = document.querySelector("music-play__img-1");
const img2 = document.querySelector("music-play__img-2");


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

nextIcon.addEventListener("click", () => {
    img1.style.display = "none"
    img2.style.display = "flex"
})

// toggle 이용할 수 있도록 해보기.