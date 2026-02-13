window.addEventListener("DOMContentLoaded", function () {

    // Open My Heart button
    const surpriseBtn = document.getElementById("surpriseBtn");
    const hiddenMessage = document.getElementById("hiddenMessage");

    if (surpriseBtn && hiddenMessage) {
        surpriseBtn.onclick = function () {
            hiddenMessage.style.display = "block";
        };
    }

    // YES button love lines (if you want multiple lines)
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

    // NO button movement
    const noBtn = document.getElementById("noBtn");
    if (noBtn) {
        noBtn.onmouseover = function () {
            this.style.position = "absolute";
            this.style.left = Math.random() * 80 + "%";
            this.style.top = Math.random() * 80 + "%";
        };
    }

});






