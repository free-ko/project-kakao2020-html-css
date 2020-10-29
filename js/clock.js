const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("span");

// const messageClockTitle = document.querySelectorAll(".message__time-now");


function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  // messageClockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
  //   minutes < 10 ? `0${minutes}` : minutes
  // }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
