let prato, bebida, sobremesa;

function escolherfrango() {
    document.getElementById("frango").style.borderColor = "#32B72F";
    document.getElementById("carne").style.borderColor = "#FFFFFF";
    document.getElementById("peixe").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("omelete").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-frango").classList.remove("escondido"); // check
    document.getElementById("check-carne").classList.add("escondido"); // check
    document.getElementById("check-peixe").classList.add("escondido"); // check
    document.getElementById("check-omelete").classList.add("escondido"); // check

    prato = "frango";

}

function escolhercarne() {
    document.getElementById("frango").style.borderColor = "#FFFFFF";
    document.getElementById("carne").style.borderColor = "#32B72F";
    document.getElementById("peixe").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("omelete").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-carne").classList.remove('escondido');
    document.getElementById("check-frango").classList.add("escondido");
    document.getElementById("check-peixe").classList.add("escondido"); // check
    document.getElementById("check-omelete").classList.add("escondido"); // check

    prato = "carne";
}

function escolherpeixe() {
    document.getElementById("peixe").style.borderColor = "#32B72F";
    document.getElementById("carne").style.borderColor = "#FFFFFF";
    document.getElementById("frango").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("omelete").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-peixe").classList.remove("escondido");
    document.getElementById("check-carne").classList.add("escondido");
    document.getElementById("check-frango").classList.add("escondido"); // check
    document.getElementById("check-omelete").classList.add("escondido"); // check

    prato = "peixe";
}

function escolheromelete() {
    document.getElementById("omelete").style.borderColor = "#32B72F";
    document.getElementById("carne").style.borderColor = "#FFFFFF";
    document.getElementById("peixe").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("frango").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-omelete").classList.remove("escondido");
    document.getElementById("check-carne").classList.add("escondido");
    document.getElementById("check-peixe").classList.add("escondido"); // check
    document.getElementById("check-frango").classList.add("escondido"); // check

    prato = "omelete";
}

function escolhercoca() {
    document.getElementById("coca").style.borderColor = "#32B72F";
    document.getElementById("guarana").style.borderColor = "#FFFFFF";
    document.getElementById("suco").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("agua").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-coca").classList.remove("escondido");
    document.getElementById("check-guarana").classList.add("escondido");
    document.getElementById("check-suco").classList.add("escondido"); // check
    document.getElementById("check-agua").classList.add("escondido"); // check


    bebida = "coca";
}

function escolherguarana() {
    document.getElementById("guarana").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "#FFFFFF";
    document.getElementById("suco").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("agua").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-guarana").classList.remove("escondido");
    document.getElementById("check-coca").classList.add("escondido");
    document.getElementById("check-suco").classList.add("escondido"); // check
    document.getElementById("check-agua").classList.add("escondido"); // check

    bebida = "guarana";
}

function escolhersuco() {
    document.getElementById("suco").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "#FFFFFF";
    document.getElementById("guarana").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("agua").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-suco").classList.remove("escondido");
    document.getElementById("check-coca").classList.add("escondido");
    document.getElementById("check-guarana").classList.add("escondido"); // check
    document.getElementById("check-agua").classList.add("escondido"); // check

    bebida = "suco";
}

function escolheragua() {
    document.getElementById("agua").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "#FFFFFF";
    document.getElementById("suco").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("guarana").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-agua").classList.remove("escondido");
    document.getElementById("check-coca").classList.add("escondido");
    document.getElementById("check-suco").classList.add("escondido"); // check
    document.getElementById("check-guarana").classList.add("escondido"); // check

    bebida = "agua";
}

function escolherpudim() {
    document.getElementById("pudim").style.borderColor = "#32B72F";
    document.getElementById("sorvete").style.borderColor = "#FFFFFF";
    document.getElementById("brownie").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("cookie").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-pudim").classList.remove("escondido");
    document.getElementById("check-sorvete").classList.add("escondido");
    document.getElementById("check-cookie").classList.add("escondido"); // check
    document.getElementById("check-brownie").classList.add("escondido"); // check

    sobremesa = "pudim";
}

function escolhersorvete() {
    document.getElementById("sorvete").style.borderColor = "#32B72F";
    document.getElementById("pudim").style.borderColor = "#FFFFFF";
    document.getElementById("brownie").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("cookie").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-sorvete").classList.remove("escondido");
    document.getElementById("check-pudim").classList.add("escondido");
    document.getElementById("check-cookie").classList.add("escondido"); // check
    document.getElementById("check-brownie").classList.add("escondido"); // check

    sobremesa = "sorvete"
}

function escolhercookie() {
    document.getElementById("cookie").style.borderColor = "#32B72F";
    document.getElementById("sorvete").style.borderColor = "#FFFFFF";
    document.getElementById("brownie").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("pudim").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-cookie").classList.remove("escondido");
    document.getElementById("check-sorvete").classList.add("escondido");
    document.getElementById("check-pudim").classList.add("escondido"); // check
    document.getElementById("check-brownie").classList.add("escondido"); // check

    sobremesa = "cookie";
}

function escolherbrownie() {
    document.getElementById("brownie").style.borderColor = "#32B72F";
    document.getElementById("sorvete").style.borderColor = "#FFFFFF";
    document.getElementById("pudim").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("cookie").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-brownie").classList.remove("escondido");
    document.getElementById("check-sorvete").classList.add("escondido");
    document.getElementById("check-cookie").classList.add("escondido"); // check
    document.getElementById("check-cookie").classList.add("escondido"); // check

    sobremesa = "brownie";
}

const botao = document.getElementById("fechar-pedido");

function verificadora() {
    if (prato != null) {
        if (bebida != null) {
            if (sobremesa != null) {
                botao.style.backgroundColor = "#32B72F";
                botao.innerHTML = "Fechar Pedido";
                botao.disabled = false;
            }
        }
    }
}

function fecharpedido() {
    alert("bebida");
}