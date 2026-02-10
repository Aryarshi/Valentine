const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const video = document.getElementById("videoPlayer");

yesBtn.addEventListener("click", () => {
    video.style.display = "block";
    video.src = ""; // 👉 PUT YES VIDEO SRC HERE
    video.play();
});

noBtn.addEventListener("click", () => {
    video.style.display = "block";
    video.src = ""; // 👉 PUT NO VIDEO SRC HERE
    video.play();
});
