const replayForm = document.querySelector(".reply"),
      replayInput = document.querySelector("input"),
      replayList = document.querySelector(".sent-message");


function sentMessage(text) {
    const messageContent = document.createElement("div");
    const messageInfo = document.createElement("div");
    const messageBubble = document.createElement("span");
    const messageTime = document.createElement("span");
    messageContent.className = "message-row__content";
    messageInfo.className = "message__info";
    messageBubble.className = "message__bubble";
    messageTime.className = "message__time";

    replayList.style.display = "flex";
    replayList.style.flexDirection = "column";
    messageContent.style.marginTop = "20px";

    messageBubble.innerText = text;
    replayList.appendChild(messageContent);
    messageContent.appendChild(messageInfo);
    messageInfo.appendChild(messageBubble);
    messageInfo.appendChild(messageTime);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = replayInput.value;
    sentMessage(currentValue);
    replayInput.value = "";
}

function init() {
    replayForm.addEventListener("submit", handleSubmit);
}

init();