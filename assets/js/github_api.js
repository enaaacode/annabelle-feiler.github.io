// Warten, bis das HTML fertig geladen wurde
document.addEventListener("DOMContentLoaded", function () {
  // Das Element, in das wir die Projekte einfügen wollen
  const projektOverview = document.getElementById("projekt-overview");

  // Die GitHub API liefert uns eine Liste aller öffentlichen Repositories des Users
  const apiUrl = "https://api.github.com/users/enaaacode/repos";
  console.log(apiUrl);

  // Schritt 1: Repos von GitHub holen
  fetch(apiUrl)
    .then(function (response) {
      // Die Antwort in ein JavaScript-Objekt (Array) umwandeln
      test = response.json();
      console.log(test);
      return test;
    })
    .then(function (repos) {
      // Schritt 2: Jedes Repo durchgehen
      // repo ist das aktuelle Repository-Objekt,
      // for repo of repos => for Listeneintrag in Liste
      for (const repo of repos) {
        // 🔒 Symbol abhängig davon, ob das Repo öffentlich oder privat ist
        let lockIconClass;
        if (repo.private) {
          lockIconClass = "fa-solid fa-lock";
        } else {
          lockIconClass = "fa-solid fa-lock-open";
        }

        const projektName = repo.name;
        console.log(projektName);

        const sterneAnzahl = repo.stargazers_count;

        // Beschreibung oder Platzhaltertext, falls keine vorhanden ist
        let beschreibung;
        if (repo.description) {
          beschreibung = repo.description;
        } else {
          beschreibung = "Keine Beschreibung vorhanden.";
        }

        const projektLink = repo.html_url;

        // ========================
        // DOM-Bausteine erstellen
        // ========================

        // Hauptcontainer für ein Projekt
        const projektContainer = document.createElement("div");
        projektContainer.className = "projekt-container";

        // 1. Erste Zeile mit Name und Sterne
        const ersteZeile = document.createElement("div");
        ersteZeile.className = "erste-zeile";

        // -- Status und Name nebeneinander
        const statusName = document.createElement("div");
        statusName.className = "projekt-status-name";

        // -- Status (öffentlich/privat)
        const status = document.createElement("div");
        status.className = "projekt-status";
        const statusIcon = document.createElement("i");
        statusIcon.className = lockIconClass;
        status.appendChild(statusIcon);

        // -- Projektname
        const nameDiv = document.createElement("div");
        nameDiv.className = "projekt-name";
        const nameP = document.createElement("p");
        nameP.textContent = projektName;
        nameDiv.appendChild(nameP);

        // -- Zusammenfügen: Status + Name
        statusName.appendChild(status);
        statusName.appendChild(nameDiv);

        // -- Sterne (Bewertungen)
        const sterne = document.createElement("div");
        sterne.className = "projekt-sterne";
        const sternIcon = document.createElement("i");
        sternIcon.className = "fa-solid fa-star";
        const sternZahl = document.createElement("p");
        sternZahl.textContent = sterneAnzahl;

        sterne.appendChild(sternIcon);
        sterne.appendChild(sternZahl);

        // -- Erste Zeile zusammensetzen
        ersteZeile.appendChild(statusName);
        ersteZeile.appendChild(sterne);

        // 2. Beschreibung
        const beschreibungDiv = document.createElement("div");
        beschreibungDiv.className = "projekt-beschreibung";
        const beschreibungP = document.createElement("p");
        beschreibungP.textContent = beschreibung;
        beschreibungDiv.appendChild(beschreibungP);

        // 3. GitHub-Link
        const linkDiv = document.createElement("div");
        linkDiv.className = "projekt-link";
        const linkA = document.createElement("a");
        linkA.href = projektLink;
        linkA.target = "_blank"; // Öffnet Link in neuem Tab
        linkA.textContent = "Link zum Projekt auf Github";
        linkDiv.appendChild(linkA);

        // ========================
        // 🧱 Alles zusammenbauen
        // ========================
        projektContainer.appendChild(ersteZeile);
        projektContainer.appendChild(beschreibungDiv);
        projektContainer.appendChild(linkDiv);

        // Fertiges Projekt in den Hauptbereich einfügen
        projektOverview.appendChild(projektContainer);
      }
    })
    .catch(function (error) {
      // Fehler abfangen (z. B. wenn die API nicht erreichbar ist)
      console.error("Fehler beim Laden der GitHub-Daten:", error);
    });
});
