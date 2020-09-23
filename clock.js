// a 태그 눌렀을 시 이전 단계로 돌아가기
// window.history.back() 사용

// 시간 표시 하기

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("span");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
