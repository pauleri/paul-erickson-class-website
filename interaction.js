const button = document.querySelector("#button");
const message = document.querySelector("#message");
const changeBackgroundButton = document.querySelector("#Change background");

function changeMessage() {
    message.textContent = "Button clicked!";
}
function changeBackground() {
    document.body.style.backgroundImage = "url('images/spooky.png')";
}

button.addEventListener('click', changeMessage);
button.addEventListener("click", changeBackground);