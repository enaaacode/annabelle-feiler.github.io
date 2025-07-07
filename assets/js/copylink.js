const rssButton = document.getElementById('copyRssLink');
const feedUrl = 'https://studio-feiler.com/feed';

rssButton.addEventListener('click', function (event) {
  // Verhindere, dass der Link normal ausgeführt wird (Seite nicht neu laden)
  event.preventDefault();

  // Versuche die URL in die Zwischenablage zu kopieren
  navigator.clipboard
    .writeText(feedUrl)
    .then(function () {
      // Wenn es klappt, zeige eine Erfolgsmeldung an
      alert(
        'RSS-Feed-URL wurde in die Zwischenablage kopiert! 😊 Jetzt musst du ihn nur noch in deinem RSS-Reader hinzufügen.'
      );
    })
    .catch(function () {
      // Wenn es nicht klappt, zeige eine Fehlermeldung und bitte manuell zu kopieren
      alert(
        'Kopieren ist leider fehlgeschlagen. Bitte kopiere die URL manuell: ' +
          feedUrl
      );
    });
});
