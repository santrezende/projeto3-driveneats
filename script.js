let prato, bebida, sobremesa;
let valorprato = parseFloat();
let valorbebida = parseFloat()
let valorsobremesa = parseFloat();
let pratourl = String();
let bebidaurl = String();
let sobremesaurl = String();

function escolherfrango() {
    document.getElementById("frango").style.borderColor = "#32B72F";
    document.getElementById("carne").style.borderColor = "#FFFFFF";
    document.getElementById("peixe").style.borderColor = "#FFFFFF"; // borda
    document.getElementById("omelete").style.borderColor = "#FFFFFF"; // borda

    document.getElementById("check-frango").classList.remove("escondido"); // check
    document.getElementById("check-carne").classList.add("escondido"); // check
    document.getElementById("check-peixe").classList.add("escondido"); // check
    document.getElementById("check-omelete").classList.add("escondido"); // check

    prato = "Prato de Frango";
    valorprato = Number(14.90);
    pratourl = "Prato%de%Frango"
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

    prato = "Prato de Carne Bovina";
    valorprato = Number(18.90);
    pratourl = "Prato%de%Carne%Bovina";
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

    prato = "Prato de Peixe";
    valorprato = Number(16.90);
    pratourl = "Prato%de%Peixe";
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

    prato = "Prato de Omelete";
    valorprato = Number(12.90);
    pratourl = "Prato%de%Omelete";
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


    bebida = "Coca-Cola";
    valorbebida = Number(5.90);
    bebidaurl = "Coca-Cola";
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

    bebida = "Guaraná Antartica";
    valorbebida = Number(4.90);
    bebidaurl = "Guaraná%Antartica";
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

    bebida = "Suco de Laranja";
    valorbebida = Number(7.90);
    bebidaurl = "Suco%de%Laranja";
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

    bebida = "Água sem Gás";
    valorbebida = Number(3.90);
    bebidaurl = "Água%sem%Gás";
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

    sobremesa = "Pudim";
    valorsobremesa = Number(3.90);
    sobremesaurl = "Pudim"
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

    sobremesa = "Sorvete Artesanal";
    valorsobremesa = Number(6.90);
    sobremesaurl = "Sorvete%Artesanal";
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

    sobremesa = "Cookie";
    valorsobremesa = Number(4.90);
    sobremesaurl = "Cookie";
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

    sobremesa = "Brownie";
    valorsobremesa = Number(5.90);
    sobremesaurl = "Brownie";
}

const botao = document.getElementById("fechar-pedido");

function verificadora() {
    if (prato != null) {
        if (bebida != null) {
            if (sobremesa != null) {
                botao.style.backgroundColor = "#32B72F";
                botao.disabled = false;
                botao.innerHTML = "Fechar Pedido";
                botao.style.fontFamily = "Roboto";
                botao.style.fontSize = "20px";
                botao.style.fontWeight = "400";
                botao.style.color = "#FFFFFF"
            }
        }
    }
}
const divconfirma = document.getElementById("pedido-final");

const pratoescolhido = document.getElementById("prato-escolhido");
const bebidaescolhida = document.getElementById("bebida-escolhida");
const sobremesaescolhida = document.getElementById("sobremesa-escolhida");

const precoprato = document.getElementById("preco-prato");
const precobebida = document.getElementById("preco-bebida");
const precosobremesa = document.getElementById("preco-sobremesa");

const precototal = document.getElementById("valor-total");

function fecharpedido() {

    divconfirma.style.display = "flex";

    pratoescolhido.innerHTML = prato;
    bebidaescolhida.innerHTML = bebida;
    sobremesaescolhida.innerHTML = sobremesa;

    precoprato.innerHTML = valorprato.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    precobebida.innerHTML = valorbebida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    precosobremesa.innerHTML = valorsobremesa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    precototal.innerHTML = (valorprato + valorbebida + valorsobremesa).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function cancelar() {

    divconfirma.style.display = "none";
}


function finalizar() {
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?");

    let valortotal = String((valorprato + valorbebida + valorsobremesa).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    var mensagem = "Olá, gostaria de fazer o pedido:\n- " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: " + valortotal + "\n\nNome: " + nome + "\nEndereço: " + endereco;
    mensagem = window.encodeURIComponent(mensagem);
    window.open("https://wa.me/5531995015793?text=" + mensagem);
}