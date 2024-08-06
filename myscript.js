const today = new Date();
const dayIndex = today.getDay();
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const dayName = daysOfWeek[dayIndex];
if(dayName == "Вторник" || dayName == "Суббота" || dayName == "Воскресенье" || dayName == "Понедельник"){
    var e1 = document.getElementById("price1o").innerHTML = "37 900 ₽";
    var e1s = document.getElementById("price1b").innerHTML = "9 900 ₽";
    var e2 = document.getElementById("price2o").innerHTML = "56 300 ₽";
    var e2s = document.getElementById("price2b").innerHTML = "14 900 ₽";
    var e3 = document.getElementById("price3o").innerHTML = "76 400₽";
    var e3s = document.getElementById("price3b").innerHTML = "29 900₽";
    var e4 = document.getElementById("price4o").innerHTML = "119 700₽";
    var e4s = document.getElementById("price4b").innerHTML = "39 900₽";
} else {
    var e1 = document.getElementById("price1o").innerHTML = "27 700 ₽";
    var e1s = document.getElementById("price1b").innerHTML = "4 900 ₽";
    var e1 = document.getElementById("price1o").innerHTML = "46 300 ₽";
    var e1s = document.getElementById("price1b").innerHTML = "9 900 ₽";
    var e3 = document.getElementById("price3o").innerHTML = "66 400₽";
    var e3s = document.getElementById("price3b").innerHTML = "19 900₽";
    var e4 = document.getElementById("price4o").innerHTML = "99 700₽";
    var e4s = document.getElementById("price4b").innerHTML = "29 900₽";
}
if(dayName == "Вторник" || dayName == "Суббота" || dayName == "Четверг"){
    var p = document.getElementById("prog").style.display = 'none';
} else {
    var p = document.getElementById("prog").style.display = "block";
}