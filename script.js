scipt.js
const PI = 3.14159
let radius;
let circumference;
let area;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").ariaValueMax;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("H3_1").textContent = "circumference =" + circumference + "cm";
    area = PI * radius **2;
    document.getElementById("H3_2").textContent = "Area =" + area + "cm";
}
