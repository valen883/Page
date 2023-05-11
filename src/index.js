function compararRespuesta1(Respuesta1) {
  if (Respuesta1 == "Opcion2") {
    document.getElementById("Respuesta1").innerHTML = "Correcto";
  } else {
    document.getElementById("Respuesta1").innerHTML = "Incorrecto";
  }
}
// Agrega el evento de click a los botones de respuesta de la primera pregunta
document.getElementById("Opcion1").addEventListener("click", function () {
  compararRespuesta1("Opcion1");
});
document.getElementById("Opcion2").addEventListener("click", function () {
  compararRespuesta1("Opcion2");
});
document.getElementById("Opcion3").addEventListener("click", function () {
  compararRespuesta1("Opcion3");
});
document.getElementById("Opcion4").addEventListener("click", function () {
  compararRespuesta1("Opcion4");
});
function compararRespuesta2(Respuesta2) {
  if (Respuesta2 == "OpcionA") {
    document.getElementById("Respuesta2").innerHTML = "Correcto";
  } else {
    document.getElementById("Respuesta2").innerHTML = "Incorrecto";
  }
}
document.getElementById("OpcionA").addEventListener("click", function () {
  compararRespuesta2("OpcionA");
});
document.getElementById("OpcionB").addEventListener("click", function () {
  compararRespuesta2("OpcionB");
});
document.getElementById("OpcionC").addEventListener("click", function () {
  compararRespuesta2("OpcionC");
});
document.getElementById("OpcionD").addEventListener("click", function () {
  compararRespuesta2("OpcionD");
});
function compararRespuesta3(Respuesta3) {
  if (Respuesta3 == "Boton2") {
    document.getElementById("Respuesta3").innerHTML = "Correcto";
  } else {
    document.getElementById("Respuesta3").innerHTML = "Incorrecto";
  }
}
document.getElementById("Boton1").addEventListener("click", function () {
  compararRespuesta3("Boton1");
});
document.getElementById("Boton2").addEventListener("click", function () {
  compararRespuesta3("Boton2");
});
document.getElementById("Boton3").addEventListener("click", function () {
  compararRespuesta3("Boton3");
});
document.getElementById("Boton4").addEventListener("click", function () {
  compararRespuesta3("Boton4");
});

function Game(VolveraJugar) {
  if (VolveraJugar == "si") {
    document.getElementById("VolveraJugar").innerHTML = "Ok";
  } else {
    document.getElementById("VolveraJugar").innerHTML = "Bye";
  }
}
document.getElementById("si").addEventListener("click", function () {
  Game("si");
});
document.getElementById("no").addEventListener("click", function () {
  Game("no");
});
