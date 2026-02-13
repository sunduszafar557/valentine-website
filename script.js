window.addEventListener("DOMContentLoaded", function () {

  const yesBtn = document.getElementById("yesBtn");
  const loveMessages = document.getElementById("loveMessages");
  const nextLineBtn = document.getElementById("nextLineBtn");
  const noBtn = document.getElementById("noBtn");

  let currentLineIndex = 0;
  const lines = loveMessages.querySelectorAll("p");

  // Hide all lines initially
  lines.forEach(line => line.style.display = "none");

  yesBtn.onclick = function () {
    loveMessages.classList.remove("hidden");
    // Show first line
    currentLineIndex = 0;
    lines.forEach(line => line.style.display = "none");
    lines[currentLineIndex].style.display = "block";
    nextLineBtn.style.display = "inline-block";
  };

  nextLineBtn.onclick = function () {
    currentLineIndex++;
    if (currentLineIndex < lines.length) {
      // Show next line, hide others
      lines.forEach(line => line.style.display = "none");
      lines[currentLineIndex].style.display = "block";
    } else {
      // No more lines, hide button
      nextLineBtn.style.display = "none";
    }
  };

  if (noBtn) {
    noBtn.onmouseover = function () {
      this.style.position = "absolute";
      this.style.left = Math.random() * 80 + "%";
      this.style.top = Math.random() * 80 + "%";
    };
  }

});





