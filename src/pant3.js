function compararRes1(Res1) {
  if (Res1 == "op3") {
    document.getElementById("Res1").innerHTML = "Correcto";
  } else {
    document.getElementById("Res1").innerHTML = "Incorrecto";
  }
}

document.getElementById("op1").addEventListener("click", function () {
  compararRes1("op1");
});
document.getElementById("op2").addEventListener("click", function () {
  compararRes1("op2");
});
document.getElementById("op3").addEventListener("click", function () {
  compararRes1("op3");
});

function compararRes2(Res2) {
  if (Res2 == "Opt2") {
    document.getElementById("Res2").innerHTML = "Correcto";
  } else {
    document.getElementById("Res2").innerHTML = "Incorrecto";
  }
}
document.getElementById("Opt1").addEventListener("click", function () {
  compararRes2("Opt1");
});
document.getElementById("Opt2").addEventListener("click", function () {
  compararRes2("Opt2");
});
document.getElementById("Opt3").addEventListener("click", function () {
  compararRes2("Opt3");
});
