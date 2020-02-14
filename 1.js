function BemVindo(){
let nome = prompt("Informe seu nome");
alert("Seja Bem Vindo (a) " + nome);
}

function Multiplicar(){
    let numb1 = prompt("Informe um número");
    let numb2 = prompt("Informe outro número");
    let total = numb1 * numb2;
    alert(numb1 + " X " +numb2 + " = " + total );
}

function Joguinho(){
    let palpite =prompt("Adivinhe o número entre 0 e 10");
    let numeroale = Math.floor(Math.random() * 10);

    if (palpite==numeroale){
        alert("Parabens tu acertou!");
    } else {
        alert("Tente dnv o numero certo era: " + numeroale);
    }
}