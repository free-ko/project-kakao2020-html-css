playBtn = document.querySelector(".music__play-btn");

playBtn.addEventListener("click", () => {
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
});

// toggle 이용할 수 있도록 해보기.