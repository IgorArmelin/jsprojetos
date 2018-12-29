/**
* JS - Calculadora Lucro
* @author Igor Pegoraro Armelin
*/

var valorCompra;
var valorVenda;
var porcentagemLucro;
var diferencaLucro;
var arredondadoValor;
var arredondadoPorc;

function lucro(){
	valorCompra = parseFloat(frmLucro.txtCompra.value.replace(",", "."));
	valorVenda = parseFloat(frmLucro.txtVenda.value.replace(",", "."));

	diferencaLucro = valorVenda - valorCompra;
	porcentagemLucro = (diferencaLucro/valorCompra) * 100;
	arredondadoValor = diferencaLucro.toFixed(2);
	arredondadoPorc = Math.round(porcentagemLucro);

	document.getElementById("resultado").innerHTML = "Valor do lucro: R$ " + arredondadoValor + ", porcentagem do lucro: " + arredondadoPorc + "%";
}

function limpar(){
	document.getElementById("resultado").innerHTML = "";
}