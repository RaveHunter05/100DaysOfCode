var seleccion = document.getElementById("list");
var rangeY = document.querySelector("#posicionY");
var rangeX = document.querySelector("#posicionX");
var tamano = document.querySelector("#tamano");
var opacidad = document.querySelector("#opacidad");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var alpha = document.getElementById("alpha");
var hex = document.querySelector("#hex");
let elemento = document.querySelector("section");
let forma=document.getElementById("forma");

rangeY.addEventListener("change", function () {

    elemento.style.top = rangeY.value + "px";

})

rangeX.addEventListener("change", function () {
    elemento.style.left = rangeX.value + "px";

})

tamano.addEventListener("change", function () {
    elemento.style.transform = "scale(" + tamano.value + ")";

})

opacidad.addEventListener("change", function () {
    elemento.style.opacity = opacidad.value;

})

seleccion.addEventListener("change", function () {
    elemento.className = "";
    elemento.classList.add(seleccion.value);
})

hex.addEventListener("change", function () {
    elemento.style.backgroundColor = "#" + hex.value;

})

forma.addEventListener("change", function () {
    elemento.style.backgroundColor = "rgba(" + red.value + "," + green.value + "," + blue.value + "," + alpha.value + ")";
})


// elemento.style.transform = "scale(" + tamano + ")";
// elemento.className = "";
// elemento.classList.add(seleccion);
// elemento.style.top = rangeY + "px";
// elemento.style.left = rangeX + "px";
// elemento.style.opacity = opacidad;
// elemento.style.backgroundColor = "#" + hex;
// elemento.style.backgroundColor = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";