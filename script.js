window.onload = function() {

    // YES button
    const yesBtn = document.getElementById("yesBtn");
    const yesMessage = document.getElementById("yesMessage");

    if (yesBtn && yesMessage) {
        yesBtn.addEventListener("click", function() {
            yesMessage.style.display = "block";
        });
    }

    // NO button movement
    const noBtn = document.getElementById("noBtn");

    if (noBtn) {
        noBtn.addEventListener("mouseover", function() {
            const randomX = Math.floor(Math.random() * window.innerWidth);
            const randomY = Math.floor(Math.random() * window.innerHeight);
            this.style.position = "absolute";
            this.style.left = randomX + "px";
            this.style.top = randomY + "px";
        });
    }

};

