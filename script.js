let isim = prompt("İsminizi giriniz:");
document.querySelector("#myName").innerHTML = isim;

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let d;
        (today.getDay() == 1) ? d = day[1] :
        (today.getDay() == 2) ? d = day[2] :
        (today.getDay() == 3) ? d = day[3] :
        (today.getDay() == 4) ? d = day[4] :
        (today.getDay() == 5) ? d = day[5] :
        (today.getDay() == 6) ? d = day[6] :
        (today.getDay() == 7) ? d = day[0] : d = "";
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + d;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
showTime()