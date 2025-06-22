// ===========================================================
// ================== SCROLL BACK UP BUTTON =================
// ===========================================================

// Get the button
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ===========================================================
// ========== Die 50 beim "Projekte realisiert" zählt hoch ====
// ===========================================================

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
