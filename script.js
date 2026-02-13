window.addEventListener("DOMContentLoaded", function () {

    // YES button
    const yesBtn = document.getElementById("yesBtn");
    const yesMessage = document.getElementById("yesMessage");

    if (yesBtn && yesMessage) {
        yesBtn.onclick = function () {
            yesMessage.style.display = "block";
        };
    }

    // NO button
    const noBtn = document.getElementById("noBtn");

    if (noBtn) {
        noBtn.onmouseover = function () {
            this.style.position = "absolute";
            this.style.left = Math.random() * 80 + "%";
            this.style.top = Math.random() * 80 + "%";
        };
    }

});



