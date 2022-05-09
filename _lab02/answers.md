
### Aufgabe 1 – CSS

<span style="color: pink">

**1.1** - Was ist ein CSS Selector und welche Selektoren stellt CSS zurVerfügung. Erklären Sie diese mithilfe von Beispielen.

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">

***ANTWORTEN***
- Ein CSS Selector ist eine Art zu selektieren HTML Elemente. In CSS es gibt
  - ```"."```               - für selektieren Klassen
  - ```" Elemente_name "``` - für jedes Element mit diesem Name
  - ```" * "```             - für jedes Element
  - ```" # "```             - für ID

Gibt es auch pseudo-Selectors für aktionen:
  - zum Beispiel: ```".Klasse_Name::hover"``` => macht ein Aktion, wenn das Element bewegt wird.

Beispiel: das Element:
```
  <h1 class="first_h1" id="header_title"> I'm a Title </h1>
```
konnen mit jedes folgen Selectors
```
  \* { ... }  h1 { ... } .first_h1 { ... } #header_title { ... }
```

  selektieren, aber mit anderen Spezifität.

</div>

<span style="color: pink">

**1.2** - Was versteht man unter dem Boxmodell und wann ist es relevant.

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">


***ANSWER***

Der Boxmodell ist den CSS-Anzeigemodus

 ![boxmodel](./lab2-assignment/boxmodel.png)

seine Verwendungen sind meistens:
  - ```margin```: zu distanzieren sich von anderen Elemente.
  - ```border```: zu zeigen eine Grenze an.
  - ```padding```: zu positionieren das Element innerhalb das Border.

</div>  

<span style="color:pink;">

**1.3** - Wie können verschiedene Schriftarten in CSS definiert werden?

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">


***ANSWER***

In CSS man kann Schriftarten definieren mit ```font-family: fontname```.

</div>

***


### Aufgabe 2 – CSS3 – Hintergrund und Animation

<span style="color:pink;">

**2.1** - Erstellen Sie einen Unterordner Lab2 in ihrem Repository und fügen Sie die Dateien aus lab2-assignment.zip aus OLE hinzu.\
Fügen Sie das Bild "airplane.png" im Header hinzu. Es muss imVordergrund des Hintergrundbildes "clouds.jpg" angezeigt werden.\
Fügen Sie eine CSS3 Animation hinzu, welche das Bild "airplane.png" von links nach rechts und zurückfliegen lässt.\
Die Animation sollte ohne Verzögerung starten, sobald die Seite fertig geladen ist und sich ständig wiederholen.\
Ein Durchgang der Animation (von links nach rechts und zurück zum Ausgangspunkt) sollte 10 Sekunden dauern.\
Sobald das Bild die Richtung ändert (also wieder von recht nach links zurückfliegt), sollsich auch das Bild entsprechend in einer kurzen Animation drehen.

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">


***ANTWORTEN***
```
body {
	font-family: Verdana;
	width: 750px
}

header {
	position: relative;
	background-image:url("clouds.jpg");
	border: 1px solid navy;
	height: 120px;
	width: 500px;
}

header #plane {
	position: relative;
	width: 100px;
	animation: fly 10s infinite;
}
@keyframes fly{
	0% {left: 0px; transform: rotateY(180deg);}
	50% {left: 400px;}
	100% {left: 0px; }

}
section {
	float:left;
	width: 500px;
}

section h1 {
	color: red;		
}
```


das File ist innerhalb die ```lab2-assignment``` Unterordner.

</div>

***

### Aufgabe 3 – SASS mit SCSS-Syntax

<span style="color:pink;">

**3.1** - Erklären Sie den Nutzen, die Funktionalität und die Verwendung von CSS-Präprozessoren.

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">


***ANTWORTEN***

CSS-Präprozessoren sind für vielen Dinge benutzen
  - Mathematische Operationen mit Operatoren ( CSS calc() Funktion ist sehr begrenzt ).
  - Selector cascading
  - Besser Variablen Verwendung
    - ```--var-name: value; {...var(--var-name)}``` VS ```$var-name: value;```

Insgesamt große Hilfe für redundanten Code.

</div>

<span style="color:pink;">

**3.2** - Verwenden Sie SASS mit SCSS-Syntax auf der Webseite aus Aufgabe 2.\
**3.3** - Installieren Sie einen mit SASS kompatiblen Präprozessor oder verwenden Sie einen web-basierten SASSPräprozessor.

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">


**ANTWORTEN**

An WebStorm IDE geschreibt mit SCSS Präprozessor.\
Das File ist ```newstyle.scss```.

</div>

<span style="color:pink;">

**3.4** -Ändern Sie die Datei style.css in style.scss und verwenden Sie SASS mit SCSS-Syntax (zumindest Verschachtelung und Mixin)

</span>

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">


***ANTWORTEN***
```
$font: Verdana;
$width: 500px;
$plane-width: 100px;

body {
  font-family: $font;
  width: 750px
}
header {
  position: relative;
  background-image:url("clouds.jpg");
  border: 1px solid navy;
  height: 120px;
  width: $width;
  #plane{
    position: relative;
    width: $plane-width;
    animation: fly 10s infinite;
  }
}

@keyframes fly{
  0% {left: 0px; transform: rotateY(180deg);}
  50% {left: $width - $plane-width;}
  100% {left: 0px; }

}
section {
  float:left;
  width: $width;
  h1 {
    color: red;
  }
}
```

</div>

<span style="color:pink;">

**3.5** - Validieren Sie die neue Datei und überprüfen Sie, ob sie die Voraussetzungen aus Aufgabe 2 noch erfüllt.

</span>

***ANTWORTEN***

<div class="answer" style="background-color: rgba(0,0,0,0.4); border: 1px solid transparent;border-radius: 10px; padding: 10px; margin: auto; color:rgba(255,255,255, 0.7)">

Geprüft an WebStorm.

</div>
