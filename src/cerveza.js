function compararRespuesta1(respuesta1) {
    if(respuesta1 == "opc4") {
        document.getElementById("Respuesta1").innerHTML = "Correcto";
    } else {
        document.getElementById("Respuesta1").innerHTML = "Incorrecto";
    }
}

document.getElementById("opc1").addEventListener("click", function () {
    compararRespuesta1("opc1");
});document.getElementById("opc2").addEventListener("click", function () {
    compararRespuesta1("opc2");
});document.getElementById("opc3").addEventListener("click", function () {
    compararRespuesta1("opc3");
});
document.getElementById("opc4").addEventListener("click", function () {
    compararRespuesta1("opc4");
});

function compararRespuesta2(respuesta2) {
    if(respuesta2 == "op1") {
        document.getElementById("Respuesta2").innerHTML = "Correcto";
    } else {
        document.getElementById("Respuesta2").innerHTML = "Incorrecto";
    }
}

document.getElementById("op1").addEventListener("click", function () {
    compararRespuesta2("op1");
});document.getElementById("op2").addEventListener("click", function () {
    compararRespuesta2("op2");
});document.getElementById("op3").addEventListener("click", function () {
    compararRespuesta2("op3");
});
document.getElementById("op4").addEventListener("click", function () {
    compararRespuesta2("op4");
});