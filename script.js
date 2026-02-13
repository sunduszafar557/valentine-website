// Relationship Counter
const startDate = new Date("2024-12-12");

const today = new Date();
const difference = today - startDate;

const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const months = Math.floor(days / 30);
const years = Math.floor(months / 12);

document.getElementById("loveCounter").innerHTML =
years + " Years 💞 " +
(months % 12) + " Months 💕 " +
(days % 30) + " Days ❤️";


// Typewriter Effect
const text = "Luqman Ahmad, my Bhalu 🧸 you are my safe place, my forever, my always ❤️";
let index = 0;

function typeWriter() {
if (index < text.length) {
document.getElementById("typeText").innerHTML += text.charAt(index);
index++;
setTimeout(typeWriter, 80);
}
}

typeWriter();


// Hidden Letter
document.getElementById("surpriseBtn").addEventListener("click", function() {
document.getElementById("hiddenMessage").style.display = "block";
});


// Moving NO Button
document.getElementById("noBtn").addEventListener("mouseover", function() {
const randomX = Math.floor(Math.random() * window.innerWidth);
const randomY = Math.floor(Math.random() * window.innerHeight);
this.style.position = "absolute";
this.style.left = randomX + "px";
this.style.top = randomY + "px";
});


// YES Button
document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("yesMessage").style.display = "block";
});


});
