let message = prompt("Введите имя")
let div = document.createElement("div")
document.body.prepend(div)
div.innerHTML = message

div.style.cssText = `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    color: red;
`;

function getRandomColor() {
    var colors = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    return div.style.color = getRandomColor()
}
setInterval(changeColor, 10000);
setTimeout(() => div.remove(), 30000);

