
window.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");

function playMusicOnce() {
    if(bgMusic){
        bgMusic.play().catch(() => console.log("Autoplay blocked, music will start on click"));
    }
}

// Trigger music when user clicks YES or Open My Heart
const yesBtn = document.getElementById("yesBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

if(yesBtn){
    yesBtn.addEventListener("click", playMusicOnce);
}

if(surpriseBtn){
    surpriseBtn.addEventListener("click", playMusicOnce);
}


    // ===== Open My Heart button =====
    const surpriseBtn = document.getElementById("surpriseBtn");
    const hiddenMessage = document.getElementById("hiddenMessage");

    if (surpriseBtn && hiddenMessage) {
        surpriseBtn.onclick = function () {
            hiddenMessage.style.display = "block";
        };
    }

    // ===== YES button with multiple love lines =====
    const yesBtn = document.getElementById("yesBtn");
    const loveMessages = document.getElementById("loveMessages");
    const nextLineBtn = document.getElementById("nextLineBtn");

    if (yesBtn && loveMessages && nextLineBtn) {
        let currentLineIndex = 0;
        const lines = loveMessages.querySelectorAll("p");
        lines.forEach(line => line.style.display = "none");

        yesBtn.onclick = function () {
            loveMessages.classList.remove("hidden");
            currentLineIndex = 0;
            lines.forEach(line => line.style.display = "none");
            lines[currentLineIndex].style.display = "block";
            nextLineBtn.style.display = "inline-block";

            // optional: heart explosion when YES clicked
            for (let i = 0; i < 50; i++) {
                createHeart();
            }
        };

        nextLineBtn.onclick = function () {
            currentLineIndex++;
            if (currentLineIndex < lines.length) {
                lines.forEach(line => line.style.display = "none");
                lines[currentLineIndex].style.display = "block";
            } else {
                nextLineBtn.style.display = "none";
            }
        };
    }

    // ===== NO button movement =====
    const noBtn = document.getElementById("noBtn");
    if (noBtn) {
        noBtn.onmouseover = function () {
            this.style.position = "absolute";
            this.style.left = Math.random() * 80 + "%";
            this.style.top = Math.random() * 80 + "%";
        };
    }

    // ===== Slideshow =====
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        if(slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();

    // ===== Floating hearts =====
    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.fontSize = Math.random() * 30 + 10 + "px";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-50px";
        heart.style.zIndex = 1000;
        document.body.appendChild(heart);

        let top = -50;
        const interval = setInterval(() => {
            top += 2;
            heart.style.top = top + "px";
            if (top > window.innerHeight) {
                heart.remove();
                clearInterval(interval);
            }
        }, 20);
    }

    setInterval(createHeart, 500); // one heart every 0.5s

});








