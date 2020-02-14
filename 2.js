let precoUnitario , quantidade , totalproduto, totalgeral = 0;

function CalcularPrecoTotal(){
    precoUnitario = document.querySelector('#preco').value;
    quantidade = document.querySelector('#quantidade').value;
    totalproduto = precoUnitario * quantidade;
    document.querySelector('#total-produto').innerHTML = totalproduto;
}

function Adicionar(){
    let nome = document.querySelector('#produto').value;
    let linha = "<tr>";
     linha += "<td>" +nome+"<td>";
     linha += "<td>"+quantidade+"<td>";
     linha +="<td>"+precoUnitario+"<td>";
     linha +="<td>"+totalproduto+"<td>";
     linha+="<tr>";
     document.querySelector("#listaprodutos").innerHTML+=linha;

     AtualizarTotal();
}

function AtualizarTotal(){
    totalgeral +=totalproduto;
    document.querySelector("#totalgeral").innerHTML = "TOTAL: " +totalgeral;
}

function LimparCampos(){
    document.querySelector('#quantidade').value= "";
    document.querySelector('#preco').value="";
    document.querySelector('#quantidade').value="";
    document.querySelector('#total-produto').value="";
}

function BemVindo(){
    let dataCompleta = new Date();
    // console.log(dataCompleta);
    // console.log(dataCompleta.getDay());
    // console.log(dataCompleta.getDate());
    // console.log(dataCompleta.getMonth());
    // console.log(dataCompleta.getFullYear());
    // console.log(dataCompleta.getHours());
    // console.log(dataCompleta.getMinutes());

    let hora = dataCompleta.getHours();
    if (hora <12){
        document.querySelector("#mensagem").innerHTML = "Bom dia!"
    } else if (hora<19){
        document.querySelector("#mensagem").innerHTML = "Boa tarde!"
    } else {
        document.querySelector("#mensagem").innerHTML = "Boa noite!"
    }
}