let prato, bebida, sobremesa;

function escolherfrango() {
    document.getElementById("frango").style.borderColor = "#32B72F"; // borda
    document.getElementById("carne").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-frango").classList.remove("escondido"); // check
    document.getElementById("check-carne").classList.add("escondido"); // check

    prato = "frango";
}

function escolhercarne() {
    document.getElementById("frango").style.borderColor = "#FFFFFF";
    document.getElementById("carne").style.borderColor = "#32B72F";

    document.getElementById("check-carne").classList.remove('escondido');
    document.getElementById("check-frango").classList.add("escondido");

    prato = "carne";
}

function escolhercoca() {
    document.getElementById("coca").style.borderColor = "#32B72F";
    document.getElementById("guarana").style.borderColor = "#FFFFFF";

    document.getElementById("check-coca").classList.remove("escondido");
    document.getElementById("check-guarana").classList.add("escondido");

    bebida = "coca";
}

function escolherguarana() {
    document.getElementById("guarana").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "#FFFFFF";

    document.getElementById("check-guarana").classList.remove("escondido");
    document.getElementById("check-coca").classList.add("escondido");

    bebida = "guarana";
}

function escolherpudim() {
    document.getElementById("pudim").style.borderColor = "#32B72F";
    document.getElementById("sorvete").style.borderColor = "#FFFFFF";

    document.getElementById("check-pudim").classList.remove("escondido");
    document.getElementById("check-sorvete").classList.add("escondido");

    sobremesa = "pudim";
}

function escolhersorvete() {
    document.getElementById("sorvete").style.borderColor = "#32B72F";
    document.getElementById("pudim").style.borderColor = "#FFFFFF";

    document.getElementById("check-sorvete").classList.remove("escondido");
    document.getElementById("check-pudim").classList.add("escondido");

    sobremesa = "sorvete"
}

function fecharpedido() {
    alert(prato + bebida + sobremesa);
}