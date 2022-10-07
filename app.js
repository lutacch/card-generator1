let button = document.querySelector("#boton-click");

button.addEventListener("click", function callBack() {
  // NUMEROS
  let numerosCambio = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let randomNumber1 = Math.floor(Math.random() * 13);
  for (let a = 0; a < numerosCambio.length; a++) {
    numerosCambio = numerosCambio[randomNumber1];
  }

  let numero = document.querySelector(".numero");
  numero.innerText = numerosCambio;

  //ICONOS

  let iconosCambio = ["♦", "♥", "♠", "♣"];

  let randomNumber = Math.floor(Math.random() * 4);
  for (let i = 0; i < iconosCambio.length; i++) {
    iconosCambio = iconosCambio[randomNumber];
  }

  let icono1 = document.querySelector(".icon1");
  icono1.innerText = iconosCambio;

  let icono2 = document.querySelector(".icon2");
  icono2.innerText = iconosCambio;

  let color = document.querySelector(".container");

  if (iconosCambio === "♦") {
    icono1.style.color = "blue";
    icono2.style.color = "blue";
    color.style.background = "red";
  } else if (iconosCambio === "♥") {
    icono1.style.color = "red";
    icono2.style.color = "red";
    color.style.background = "blue";
  } else if (iconosCambio === "♣") {
    icono1.style.color = "pink";
    icono2.style.color = "pink";
    color.style.background = "orange";
  } else if (iconosCambio === "♠") {
    icono1.style.color = "orange";
    icono2.style.color = "orange";
    color.style.background = "pink";
  }
});
callBack();

//CAMBIA DE COLOR CUANDO PRESIONAS EL BOTON
/* let button = document.querySelector("#boton-click");
button.addEventListener("click", function () {
  let color = document.querySelector(".container");
  color.style.background = "yellow";
});
 */
