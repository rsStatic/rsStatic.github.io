function grootste(g1, g2) {
    return (g1 > g2 ? g1 : g2);
}

var getal1 = parseInt(prompt("Geef het eerste getal"));
var getal2 = parseInt(prompt("Geef het tweede getal"));
var getal3 = parseInt(prompt("Geef het derde getal"));
alert("Het grootste = " + grootste(grootste(getal1, getal2), getal3));