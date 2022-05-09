### Aufgabe 1 – Javascript und DOM

<span style="color:pink">

**1.1** - Beschreiben Sie die wichtigsten Verwendungszwecke von AJAX\
**1.2** - Beschreiben Sie wofür jQuery nützlich ist\
**1.3** - Beschreiben Sie, was das DOM ist, seine Ziele und wie es in JavaScript verwendet wird

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">

**ANTWORTEN**\
**1.1** - Die wichtigsten Verwendungszwecke von AJAX sind alle Systeme, die asynchronous aktualisieren brauchen. Oder mehr Geschwindigkeit brauchen. \
**1.2** - jQuery ist vor allem für Javascript-Interaktionen mit HTML-Elemente nützlich. Seinen Geltungsbereich ist zum einfacheren Code schreiben und weniger Zeilen.\
**1.3** - DOM ( **D**ocument **O**bject **M**odel ) ist einen Standard zu Dokumente greifen. Ist eine Schnittstelle zum dynamischen Zugreifen auf oder Aktualisieren eines Dokuments.
Da das DOM eine objektorientierte Darstellung der Webseite ist, die mit einer Programmiersprache aktualisiert werden kann. JS ist oft diese Programmiersprache.

</div>

***

### Aufgabe 2 – DOM mit AJAX und jQuery verändern

<span style="color:pink">

**2.1** - Laden Sie die Datei firstAjax.html aus OLE herunter (lab5-assignment.zip)\
**2.2** - Implementieren Sie die JS Funktion loadDoc mit folgender Funktionalität\
  - Erstellt ein neues XMLHttpRequest element\
  - Läd den Inhalt von content.txt (lab5-assignment.txt)\
  - Ersetzt den Inhalt vom HTML Element "demo" durch den Inhalt der Datei mithilfe von jQuery\
  - Versteckt button1 und macht button2 mithilfe von jQuery sichtbar\
  - Gibt den request status in der Console aus\
  - Implementieren Sie die JS Funktion resetDoc, welche mit jQuery\
  - button2 versteckt und button1 sichtbar macht\
  - den ursprünglichenInhalt des HTML Element "demo" wiederherstellt\
  - Versuchen Sie, das Programm in verschiedenenWebbrowsern auszuführen, und prüfen Sie, ob der Seiteninhalt korrekt geändert wird.

</span>

**ANTWORTEN**

  <div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: 10px auto 0px auto; color:rgba(255,255,255, 0.7)">

  <button
    style = "background-color: purple; text-decoration: none; border:transparent; border-radius: 5px;">
  [**CODE**](./Aufgabe_2)
  </button> <span style="color:white"> - ist im Unterordner ```Aufgabe_2``` </span>
  </div>


***  



### Aufgabe 3 – JSON mit AJAX laden

<span style="color:pink">

  - Laden Sie die Datei table.html aus OLE herunter(lab5-assignment.zip)\
  - Erstellen Sie eine Bootstrap Tabelle für verschiedene Produkte. Folgende Spalten werden benötigt:ID, Name, Anzahl, Preis
  -  Fügen Sie einen button "load data" zu ihrer HTML Datei table.html hinzu. Durch das klicken auf den button wird die Tabelle mit den Daten aus products.json (lab5-assignment.zip) gefüllt.
  - Erstellen Sie einen button "clear", welcher die Inhalte der Tabelle wieder löscht.
  - Die Tabelle sollte wie im Bild unten dargestellt werden.

</span>

  **ANTWORTEN**

  <div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: 10px auto 0px auto; color:rgba(255,255,255, 0.7)">

  <button
    style = "background-color: purple; text-decoration: none; border:transparent; border-radius: 5px;">
  [**CODE**](./Aufgabe_3)
  </button> <span style="color:white"> - ist im Unterordner ```Aufgabe_3``` </span>
  </div>
