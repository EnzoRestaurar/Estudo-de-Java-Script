var nome = prompt("Informe seu nome");
var nasc = prompt("Qual o seu ano de nascimento");
var ano = (new Date).getFullYear();
var idade = ano - nasc;

alert("Seu nome é " + nome + ", você tem " + idade + " anos");
if (idade >= 18) {
    alert(" e você é maior de idade");
}
else {
    alert(" e você é menor de idade");
}