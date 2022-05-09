

### Aufgabe 1 – Bootstrap und Responsive Design

<span style="color:pink">

**1.1** - Erklären Sie, was mit Responsive Design gemeint ist und warum das Konzept relevant ist.\
**1.2** Wie funktioniert Responsive Design und wie wird es implementiert. Erstellen Sie ein kurzes Beispiel (HTML +
CSS)

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">

***ANTWORTEN***\
Responsive Desing bedeutet, dass eine Web-App anderes ihre Strukture basiert auf Gerät Display Dimensionen. Das bedeutet, dass die App kann an jedes Gerät funktionieren.
Es funktioniert mit relativer Maßeinheiten ( em,  rem, vh, vw, ... );
oder mit Media-Queries\
**BEISPIEL**

```
  <!--HTML5-->
  <div class='beispieleKlasse'>
    <img class='beispielBild' src='../src/route/of/the/img'>
  </div>
```
```
  /*CSS*/
  /*für handys*/
  .beispieleKlasse{
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .beispielBild {
    width: 80%;
  }
  /* für Tablets */
  @media only screen and (min-width: 768px) {
    .beispielBild{
      width: 70%;
    }
  }
  /* für Computers */
  @media only screen and (min-width: 1024px) {
    .beispielBild{
      width: 50%;
    }
  }
```

</div>

<span style="color:pink">

**1.3** - Was sind die Vorteile von Frameworks wie Bootstrap und wie helfen sie einem Entwickler?\
**1.4** - Wie kann mit Bootstrap ein Responsive Design umgesetzt werden?*

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">


***ANTWORTEN***\
Die Vorteil von Frameworks wie Bootstrap sind vielen, aber die bemerkenswertesten sind:
  - fertigen Mobile-First Entwürfe
  - CSS und JS-basiertet Layouts.

Mit Präfixen man kann ein Responsive Design machen:
  - sx - <  768 px
  - sm - >= 768 px
  - md - >= 992 px
  - lg - >= 1200 px

</div>

<span style="color:pink">

**1.5** - Laden Sie von OLE die Datei lab4-assignment.zip herunter und entpacken Sie den Inhalt im Ordner lab3\
**1.6** - Gestalten Sie mithilfe von Bootstrap das Design für ticketForm.html wie unten dargestellt.
  - **1.6.a** - Nutzen Sie die von Bootstrap definierten CSS classes.
  - **1.6.b** - Beachten Sie die unterschiedliche Darstellung je nach Bildschirmgröße.
(concert.png nurin Desktop-Größe sichtbar, angepasste Spaltenbreite für mobile Ansicht)

</span>

<button
  style = "background-color: purple; text-decoration: none; border:transparent; border-radius: 5px;">
[**CODE**](./lab3/ticketForm.html)
</button> - ist im Unterordner ```lab3``` wie die Übung geschriebt.\


***

### Aufgabe 2 –Validierung

<span style="color:pink">

**2.1** - Implementieren Sie client-seitig eineValidierung mithilfe von Bootstrap für das Formular
aus der vorherigen Ausgabe (ohne HTML5 Validierung)\
**2.2** - Notwendige Eingaben sind Datum des Konzerts, Ort, Vor- und Nachname\
**2.3** - Im Falle von fehlender Eingaben soll ein Feedback erscheinen.\
**2.4** - Nutzen Sie die Javascript-Datei form-validation.js aus lab4-assignment.zip, um die Validierung zu implementieren.

</span>

<button
  style = "background-color: purple; text-decoration: none; border:transparent; border-radius: 5px;">
[**CODE**](./lab3/form-validation.js)
</button> - ist im Unterordner ```lab3``` wie die Übung geschriebt.\

***
### Aufgabe 3 – Navigation mit Bootstrap

<span style="color:pink">

**3.1** - Erstellen Sie eine Navigationsleiste mit Bootstrap.\
**3.2** - Die Leiste sollte auch von mobilen Geräten aus nutzbarsein (siehe Screenshots unten)\
**3.3** - Folgende Elemente sollen enthalten sein: Home-Link, Dropdown Menü mit verschiedenen

</span>

<button
  style = "background-color: purple; text-decoration: none; border:transparent; border-radius: 5px;">
[**CODE**](./lab3/nav_beispiel.html)
</button> - ist im Unterordner ```lab3``` wie die Übung geschriebt.
