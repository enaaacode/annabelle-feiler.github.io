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
