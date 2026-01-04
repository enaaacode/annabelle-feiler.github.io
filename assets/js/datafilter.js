document.addEventListener('DOMContentLoaded', function () {
  // Alle Filter-Buttons auswählen
  var filterButtons = document.querySelectorAll('.blog-filter button');

  // Alle Blog-Items (die <a>-Elemente im Grid)
  var blogItems = document.querySelectorAll('.blog-item');

  // Für jeden Filter-Button einen Click-Listener setzen
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      /* --------------------------------------------------
       * Aktiven Button visuell markieren
       * -------------------------------------------------- */
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');
      this.blur();

      /* --------------------------------------------------
       * Gewählten Filter auslesen
       * -------------------------------------------------- */
      var filter = this.getAttribute('data-filter').toLowerCase();

      /* --------------------------------------------------
       * Alle Blogposts durchgehen und filtern
       * -------------------------------------------------- */
      blogItems.forEach(function (item) {
        // Kategorien aus dem data-Attribut lesen
        // Beispiel: "design,code,sonstiges"
        var categories = item
          .getAttribute('data-category')
          .toLowerCase()
          .split(',')
          .map(function (category) {
            return category.trim();
          });

        // Prüfen, ob der Post angezeigt werden soll
        var showItem = filter === 'alle' || categories.indexOf(filter) !== -1;

        // Anzeigen oder ausblenden
        item.style.display = showItem ? '' : 'none';
      });
    });
  });
});
