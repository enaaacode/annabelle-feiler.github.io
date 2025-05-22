const burgerIcon = document.getElementById("burger-icon");
const closeIcon = document.getElementById("close-button");
const mobileOverlay = document.getElementById("mobile-overlay");

// Menü öffnen
burgerIcon.addEventListener("click", function () {
  mobileOverlay.style.display = "flex";
  burgerIcon.style.display = "none";
});

// Menü schließen
closeIcon.addEventListener("click", function () {
  mobileOverlay.style.display = "none";
  burgerIcon.style.display = "flex";
});

// Alle Links im Overlay holen
const overlayLinks = mobileOverlay.querySelectorAll("a");

// Wenn ein Link im Overlay angeklickt wird → Menü schließen
overlayLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileOverlay.style.display = "none";
    burgerIcon.style.display = "flex";
  });
});

// Die 50 beim "Projekte realisiert" wird hochgezählt
/*document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".intro-grid-zahl").forEach(function (el) {
    const target = parseInt(el.textContent, 10);
    if (target === 50) {
      let current = 0;
      const duration = 3500;
      const stepTime = Math.max(Math.floor(duration / target), 20);

      function update() {
        current++;
        el.textContent = current;
        if (current < target) {
          setTimeout(update, stepTime);
        } else {
          el.textContent = target;
        }
      }
      el.textContent = "0";
      update();
    }
  });
});
*/
