---
layout: post
title: 'Excel lässt grüßen'
date: 2025-06-19
image: 'assets/images/blog/2025-06-18-excel-says-hi_cover.png'
description: 'Tabellen sind schon praktisch, aber sind sie auch ohne Frust nutzbar?'
---

**Ganz ehrlich:** Tabellen sind nicht gerade meine liebsten UI-Elemente. Sie erinnern mich irgendwie immer ein bisschen an Excel (und das ist kein Kompliment).

Obwohl sie auf den ersten Blick einfach, _ja fast schon banal_ wirken, sind sie gestalterisch ganz schön komplex. Gerade auf kleinen Screens oder in Sachen Barrierefreiheit entpuppen sie sich schnell als Büchse der Pandora: versteckte Scrollleisten, unlesbare Inhalte, Fokusfallen&nbsp;… alles dabei (außer die Hoffnung auf Besserung).

> Was auf dem Desktop gut aussieht, wird auf dem Smartphone schnell zur Zumutung. Tabellen sind nicht gerade für ihre Flexibilität bekannt. Und horizontales Scrollen mag einfach niemand. Tabellen fühlen sich auf kleinen Bildschirmen selten gut an.

## Eine kleine Case Study – Contract Management

_(oder etwas langweiliger ausgedrückt auf Deutsch: Vertragsverwaltung)_

**Der Fall?** Eine Anwaltskanzlei möchte alle ihre Verträge in einer Übersicht dargestellt haben. Klar, strukturiert und vergleichbar. Kein wildes Scrollen durch endlose Excel-Tabellen mehr, kein verzweifeltes Suchen nach dem letzten Änderungsstand. Alles soll zukünftig möglichst effizient und intuitiv bedienbar sein. Quasi ein intuitives Interface für maximale Effizienz. Ganz nach guter alter Kapitalismus-Manier.

**Die Idee:** Ein digitales Vertragsmanagement-Tool, das Klarheit schafft. Mein erster Gedanke: Eine Tabelle! Was sonst? (Dabei bin ich nicht einmal das größte Fangirl von den Dingern, wie oben bereits geteasert). Aber dennoch scheinen Sie für so einen Fall wie gemacht. Sie sind von ihrem Wesen her von Natur aus fein säuberlich strukturiert. Doch sei gewarnt! Tabellen können tricky sein. Darauf gehe ich gleich noch weiter ein.

Statt eine trockene Case Study mit Beispiel-Verträgen à la _"Vertrag_Muster_2025_final_wirklichfinal.pdf"_ zu basteln, habe ich die Sache ein wenig gepimpt.

### Willkommen auf dem Millennium Falken oder: in meiner Star-Wars-Case-Study

Ich präsentiere: ein galaktisches Beispiel für gutes Design.

<div class="img-with-figcaption">
  <img src="/assets/images/blog/casestudy/Contract-Management-table-1.png" alt="Screendesign der Benutzeroberfläche in Tabellenansicht">
  <figcaption>So sieht sie aus: die perfekte Tabelle in ihrem natürlichen Lebensraus, auf einem großen Screen. Hübsch, oder? Genug Platz für alle Daten. Keine langen Titel oder Namen in den Zellen. Ein Träumchen. Aber auch: ein Ideal. Eins das von den wenigsten Tabellen je erreicht werden kann. (Das ist wie mit Schönheitsidealen im Allgemeinen …). Die Realität sieht halt meistens anders aus. </figcaption>
</div>

### Warum Tabellen tricky sein können

- Auf kleinen Bildschirmen wird es schnell eng.
- Zu viele Infos auf einmal = Überforderung
- In einer Zelle ist nur begrenzt viel Platz. Bei längeren Inhalten sieht das schnell kacki aus.
- Ohne korrektes semantisches HTML stoßen Screenreader an ihre Grenzen.
- Und Tastaturnavigation durch eine Tabelle? Schon mal gemacht? Oft ein Geduldsspiel.

> **Also:** Wie gestalltet man eine Übersicht so, dass sie verständlich, zugänglich und auch mobil ohne Frust nutzbar ist? Wie bringt man responsives Design, digitale Barrierefreiheit und menschliche Geduld miteinander in Einklang? Und bitte so, dass es auch noch dazu richtig gut aussieht?

### Mein Lösungsansatz

Zusätzlich zur Ansicht als Tabelle, habe ich eine alternative Ansicht entwickelt. In dieser wird jeder Eintrag als einzelne Kachel gedacht. So bleiben die Inhalte übersichtlich, auch auf kleinen Screens. Ein zusätzlicher Vorteil meines Kachel-Ansatzes: Aktionen wie Löschen, Bearbeiten oder Herunterladen sind direkt sicht- und klickbar. In der Tabellenansicht hingegen verstecken sie sich aufgrund von Platzmangel hinter einem Drei-Punkte-Menü ganz rechts. Nicht unbedingt ein Drama, aber eben ein Klick und ein kognitiver Schritt mehr. Und genau das macht im Alltag den Unterschied.

Nutzende können je nach Gerät, Vorlieben oder Zugangsbedürfnissen flexibel umschalten zwischen Tabellen- und Kachel-Ansicht. Das Interface passt sich den Nutzenden an und nicht umgekehrt. Jede, jeder und jedes kann so selbst entscheiden. Yay, digitale Selbstermächtigung! In diesem Sinne: möge die Macht mit dir sein!

<div class="img-with-figcaption">
  <img src="/assets/images/blog/casestudy/Contract-Management-cards.png" alt="Screendesign der Benutzeroberfläche in Kachel-Ansicht">
  <figcaption>Die Alternative zur Tabellenansicht. Verträge nicht in Zellen gepresst, sondern als eigenständige UI-Elemente gedacht. Jede Kachel stellt einen Vertrag dar.</figcaption>
</div>
