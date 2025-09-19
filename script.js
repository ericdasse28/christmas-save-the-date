// Countdown timer
function updateCountdown() {
  const christmasEve = new Date("December 24, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = christmasEve - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s jusqu'au réveillon 🎅🎁`;
}
setInterval(updateCountdown, 1000);

// Snow Effect
function createSnowFlake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄️";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}
setInterval(createSnowFlake, 200);

function copyAddress() {
  const address = document.getElementById("festaAddress").innerText;

  // Copy address to clipboard
  navigator.clipboard.writeText(address).then(() => {
    // Alert that copy was successful!
    let toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 2000);
  });
}
