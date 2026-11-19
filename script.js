const startBtn = document.getElementById("start-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");
const audio = document.getElementById("bg-music");
const flowers = ["🌸", "🌺", "💮", "🩷"];

startBtn.addEventListener("click", () => {
    audio.volume = 0.4;
    audio.play();

    welcomeScreen.classList.add("hide");

    mainContent.style.display = "block";

    setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 800);
});

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    const randomLeft = Math.random() * 100;

    petal.style.left = randomLeft + "%"

    petal.style.fontSize = (Math.random() * 20 + 15) + "px";
    petal.style.animationDuration = (Math.random() * 7 + 5) + "s";

    document.body.appendChild(petal);

    console.log("Позиция лепестка:", randomLeft.toFixed(1) + "%");

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 300);