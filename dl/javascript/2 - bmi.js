var gewicht = parseInt(prompt("Geef je gewicht in kg aub"));
if (gewicht < 30) {
    confirm("gewicht is te laag om bmi te berekenen");
} else {
    if (gewicht > 250) {
        confirm("gewicht is te hoog om bmi te berekenen");
    } else {
        var lengte = parseInt(prompt("Geef je lengte in cm aub"));
        if (lengte < 40) {
            confirm("lengte is te klein om bmi te berekenen");
        } else {
            if (lengte > 300) {
                confirm("lengte is te groot om bmi te berekenen");
            } else {
                var bmi = berekenBMI(gewicht, lengte);
                confirm("Je bmi bedraagt " + bmi);
                confirm("Je hebt " + geefTypeBMI(bmi));
                if (bmi < 18) {
                    confirm("Je moet minstens " + berekenKgBijkomen(gewicht, lengte) + "kg bijkomen om een normaal gewicht te bekomen");
                } else {
                    if (bmi > 25) {
                        confirm("Je moet minstens " + berekenKgAfvallen(gewicht, lengte) + "kg afvallen om een normaal gewicht te bekomen");
                    }
                }
            }
        }
    }
}