//var nome = prompt("Qual o seu nome?")

//alert("Seja bem vindo " + nome)






//var numero1 = prompt("Digite o primeiro numero")

// criar mais uma variavel , que aramazene o segundo numero
//var numero2 = prompt("Digite o segundo numero")

// criar um alerta que retorne a multiplicacao  entre 
// o primeiro e o segundo
//alert(numero1 * numero2)



/*

var numero1 = Number(prompt("Qual o primeiro numero?"))
var numero2 = Number(prompt("Qual o segundo numero?"))

alert("O resultado da soma dos dois é: " + (numero1 + numero2))
alert("O resultado da subtração dos dois é: " + (numero1 - numero2))
alert("O resultado da multiplicacao dos dois é: " + (numero1 * numero2))
alert("O resultado da divisao dos dois é: " + (numero1 / numero2))
*/

/*
var nome = prompt("Qual o nome do aluno?")

var nota1 = Number(prompt("Qual a primeira nota do " + nome))
var nota2 = Number(prompt("Ok. Primeira nota foi " + nota1 + ". Qual foi a segunda nota?"))

var media = ((nota1 + nota2) / 2)

alert("A média final será " + media)


if (media >= 6){
    alert("Aluno " + nome + " APROVADO")
}
else {
    alert("Aluno " + nome + " REPROVADO")
}

*/
/*
var numero1 = 100
var numero2 = 50
var numero3 = 3

alert(numero2 * numero2)



alert("Wesley" + " " + "Silva") */

//  PERGUNTAR A IDADE E SALVAR EM UMA VARIAVEL

//   SE A IDADE FOR MAIOR OU IGUAL A 18
//  APARECER UM ALERTA FALANDO   "MAIOR DE IDADE"
//   SENAO  APARECER "MENOR DE IDADE"


// código da chamada  743
/*
var nota = prompt("Qual a nota do aluno?")

if(nota >= 60){
    alert("APROVADO")
}
else{
    alert("REPROVADO")
}
    */


/*
var peso = prompt("Qual o peso?")
var altura = prompt("Qual a altura?")

var imc = (peso / (altura * altura)).toFixed(2)

alert(imc)

if (imc <= 16.9){
    alert("Muito abaixo do peso")
}
else if (imc >= 17 && imc <= 18.4){
    alert("Abaixo do peso")
}
else if (imc >= 18.5 && imc <= 24.9){
    alert("Peso normal")
}
else if (imc >= 25 && imc <= 29.9){
    alert("Acima do Peso")
}
else if (imc >= 30 && imc <= 34.9){
    alert("Obesidade 1")
}
else if (imc >= 35 && imc <= 40){
    alert("Obesidade 2")
}
else if (imc > 40){
    alert("Obesidade 3")
} */

/*
var carro = {
    modelo: prompt("Qual o modelo"),
    marca: "Fiat",
    ano: 2008
}

alert("Meu carro é um " + carro.modelo + " do ano "+ carro.ano)
*/

//var listaDeCursos = [ "Programação", "Enfermagem", "Estética", "Administracao", "Segurança", "Informatica", "Excel" ]
/*
alert( listaDeCursos[0] )
alert( listaDeCursos[1] )
alert( listaDeCursos[2] )
alert( listaDeCursos[3] )
*/
//listaDeCursos.forEach(curso => alert(curso))
/*
for(var i=0; i<=6; i++){
    alert(listaDeCursos[i])
}
*/
/*
//PROMPT INICIAL PARA COLETAR QUANTAS NOTAS SERÃO UTILIZADAS NO CALCULO
var qtdeNotas = prompt("Quantas notas serão avaliadas?")

//CRIACAO DO ACUMULADOR QUE VAI SOMAR TODAS AS NOTAS
var acumuladorNotas = 0;

//ESTRUTURA DE REPETIÇÃO QUE IRÁ RODAR UMA VEZ PARA CADA NOTA
for (var i = 1; i<= qtdeNotas; i++){
    //PROMPT PARA PERGUNTAR A NOTA DO ALUNO ATUAL
    var nota = prompt("Digite a nota " + i)
    //VARIAVEL RECEBE O VALOR DELA MEMSA MAIS A NOTA DO ALUNO ATUAL
    acumuladorNotas = acumuladorNotas + Number(nota)
}
//CRIAR UM ALERTA COM A DIVISAO DO VALOR ACUMULADO PELA QTDE DE NOTAS
alert("A média é: " + (acumuladorNotas / Number(qtdeNotas)))
  */
/*
var listaDeNomes = [ "Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly", "Dalton", "Patrick" ]
var indiceProcurado = prompt("Qual o indice do aluno?")
alert( listaDeNomes[indiceProcurado] )
*/
/*
var numero = prompt("Qual o número?")

for(var i=0; i<=9; i++){
    alert(i + " x " + numero + " = " + (i * numero))
}
*/

//var listaDeJogos = ["FIFA", "Call of Duty", "Red Dead", "CS"]
//var novoJogo = prompt("Digite um jogo para adicionar")
// PUSH serve para ADICIONAR um NOVO REGISTRO em uma LISTA
//listaDeJogos.push( novoJogo )
//listaDeJogos.pop() // REMOVE O ULTIMO ELEMENTO DA LISTA
//listaDeJogos.shift() // REMOVE O PRIMEIRO ELEMENTO DA LISTA
//listaDeJogos.splice(2, 1) // REMOVE 1 elemento a partir do indice 2
//listaDeJogos.reverse() // INVERTE A ORDEM
//var indice = listaDeJogos.indexOf("FIFA")
//alert( indice )
//listaDeJogos.forEach(jogo => alert("Estou jogando " + jogo))

/*
var listaDeJogos = ["FIFA", "Call of Duty", "Red Dead", "CS"]

var qtdeJogosNovos = prompt("Quantos jogos vc quer adicionar?")

for(var i=0; i<qtdeJogosNovos; i++){
    var jogo = prompt("Digite o nome do jogo")
    listaDeJogos.push(jogo)
}

alert(listaDeJogos)
*/
/*
var saldo = 14000

alert("Bem vindo ao sistema")

while (funcionalidade != 4) {
    var funcionalidade = prompt("Digite qual funcionalidade deseja acessar\n1- Saldo \n2- Extrato \n3- Transferencia \n4- Sair do sistema")
    if (funcionalidade == 1) {
        alert("Seu saldo é: R$ " + saldo)
    }
    else if (funcionalidade == 2) {
        alert("Funcionalidade 'extrato' ainda não habilitada")
    }
    else if (funcionalidade == 3) {
        var valorTransferencia = Number(prompt("Qual valor deseja transferir?"))
        if (saldo >= valorTransferencia) {
            saldo = saldo - valorTransferencia
            alert("Transferência de R$ " + valorTransferencia + " realizada com sucesso!\nSeu saldo agora é: R$ " + saldo)
        }
        else {
            alert("Saldo insuficiente")
        }

    }
    else if (funcionalidade == 4) {
        alert("Obrigado por usar o sistema")
        break;
    }
    else {
        alert("Funcionalidade não identificada. Atualize para tentar novamente")
    }
}
*/
/*
while (operacao != 3) {
    var operacao = prompt("1- Saldo\n2- Transferencia\n3- Sair do sistema")
}
*/

/*
var pessoa1 = {
    nome: "Daniel",
    sobrenome: "Andrade",
    id: 23219,
    idade: 27,
    jogosFavoritos: listaDeNomes
}
    */

//alert(pessoa1.nome + pessoa1.sobrenome)


// Propriedades do objeto CURSO
// nomeDoCurso
// alunos
// cargaHoraria
// 
// pensar em mais 2 propriedades
/*
var listaDeNomes = [ "Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", 
    "Macoly", "Dalton", "Patrick" ]

var curso = {
    nome: "Lógica de Programação",
    alunos: listaDeNomes,
    cargaHoraria: 60,
    materia: "Javascript",
    dataInicio: "27/08/2024",
    dataFinal: "29/09/2024",
}

alert(curso.nome + " é um curso com " +
     curso.cargaHoraria + "h de carga horaria")
*/
/*
function rotinaDiaria() {
    alert("Acordar")
    alert("Arrumar a cama")
    alert("Ir trabalhar")
    alert("Voltar pra casa")
    alert("Dormir")
}

rotinaDiaria()
*/
/*
function somarNumeros(){
    var num1 = Number(prompt("Digite o primeiro numero"))
    var num2 = Number(prompt("Digite o segundo numero"))
    var resultado = num1 + num2
    alert(resultado)
}

somarNumeros()
*/
/*
function saudacao(nome) {
    alert("Seja bem vindo, " + nome)
    alert("Digite a operacao: \n1- Tal \n2- Tal")
}

saudacao("Daniel")
*/  
/*
function multiplicacao(){
    var num1 = Number(prompt("Digite o numero 1"))
    var num2 = Number(prompt("Digite o numero 2"))
    var num3 = Number(prompt("Digite o numero 3"))
    var resultado = num1 * num2 * num3
    alert(resultado)
}

multiplicacao()
*/
/*
function classificador(){
    var numero = prompt("Qual o número?")
    if(numero>10){
        alert(numero + " maior do que dez")
    }
    else if (numero==10){
        alert(numero + " é igual a dez")
    }
    else{
        alert(numero + " menor que dez")
    }
}

classificador()
*/
/*
var cep = "38702098"
var cepFormatado = cep.substring(0,5) + "-" + cep.substring(5, 8)

alert( cepFormatado )

var cpf = "13342509123"
// criar aqui o cpf formatado
*/
/*
for (var i=0; i<10; i++){
    alert(i)
}
    */
/*
var usuario = {
    nome: prompt("Qual o seu nome"),
    idade: 27,
    altura: 1.74,
    peso: 75,
    cpf: 132323231,
}

alert(usuario.nome + " tem " + usuario.idade + " anos")


var nome = "dsad"
*/



/*
alert("ola seja nem vindo maylon")

var opercao = prompt(" o que deseja fazer? \n1- var jogos disponibeis \n2- cadastrar jogos \n3- sair do site")

 if(operacao== 1){
      alert("jogos disponiveis:escreverrr algo")
 }
 else if(operacao == 2){
 }
 */


/*
 alert ("seja bem vindo ao cadastrazap")
 var operacao = prompt("o que deseja fazer no site? \n1- cadastrar o seu zap \n2- aCHAR O ZAP SE ALGUEM \N3- SAIR DO SITE")
   if (operacao==1){
        var NOME= prompt ("QUAL O SEU NOME?")
   VAR n1 = number (prompt ("COLOQUE SEU ZAP AQUI "+ NOME))
   alert  (NOME +" SEU ZAP  "+n1+" FOI CADASTRO NO CADASTRAZAP")
 }
  else if (OPERACAO=2){
     VAR PROCURA = prompt("qual E O NOME DESSA PESSOA")

     VAR LISTADENOMES: ["maylon", "arthur", "guilherme", "diego", "maycon" "lucas", "paulo", "douglas"]
     PROMPT("E ALGUEM DESSES ", listadenomes)
    
  }
*/
/*
public bool atualizarfuncionario()
{mysqconnexaobanco = new mysqlconnection(conexaobanco.bancoservidor);
    try
    {
        mysqconnexaobanco = new mysqlconnection(conexaobanco.bancoservidor);
        mysqlconexaobanco.open();

        string update = $"update funcionarios set email = '{email}' , endereco = '{endereco}' where id= '{id}';"; 
        comandosql.comandtext =undate;
    }
    catch (exception ex)
    {
        messagebox.show("erro no banco de dados- metodo atuyalizarfuncionario:"+ ex.message):
            return false;
        }
        */
    

/*
 var nome = prompt("qual seu nome?")
 alert("bem vino ao bando sandander" + nome)
 var i=0
 var saldo=0
 while(i==0){
 
var operacao=prompt("o que voce deseja fazer? /n1-ver extrato disponivel /n2-retirar o dinheiro /n3-deposita o dinheiro /n4-sair do sistema")
    if(operacao==1){
        if(saldo<0){alert("saldo repectivamente indisponivel procure a agencia mais proximo ou ligue dd 157")}
        else{
    }
}
        else if(operacao==2){
        var retirada = prompt("qual seria o valor para retirada")
        alert("voce nao tem saldo em sua conta,deposite um valor para poder sacalo!")
        }
    
        else if(operacao== 3){
             var deposita = Number(prompt("quando voce dejeja depositar em sua conta?"))
             saldo = saldo + depositar
             alert("voce tem r$ "+saldo+ " de saldo")
            }
        }
        /*   else if (operacao==5){
            var sacar =prompt(" qual valor que voce queria sacar")
            alert(" voce tem $1200 "+saldo+" na conta")
        }
        */
       

       


       
       /*
       
           var nome = prompt("qual seu nome?")
           alert("bem vino ao bando sandander" + nome)
        var i=0
        var saldo=0
        while(i==0){
       var operacao=prompt("o que voce dejeja fazer? /n1-ver extrato disponivel /n2-retirar o dinheiro /n3-deposita o dinheiro /n4-sair do sistema")
           if(operacao==1){
               if(saldo<0){alert("saldo repectivamente indisponivelprocure a agencia mais proximo ou ligue dd 157")}
               else{
           }
       }
               else if(operacao==2){
               var retirada = prompt("qual seria o valor para retirada")
               alert("voce nao tem saldo em sua conta,deposite um valor para poder sacalo!")
               }
           
               else if(operacao== 3){
                    var deposita = Number(prompt("quando voce dejeja depositar em sua conta?"))
                    saldo = saldo + depositar
                    alert("voce tem r$ "+saldo+ " de saldo")
               }
           }
               
       */
       
       


           
       
       var nome = prompt("qual seu nome?")
       alert("seja bem vindo sandander" + nome )
       var i=0
       var saldo= 0
       while(i==0){
           var operacao=prompt("o que voce dejeja fazer?/n1-ver extrato disponivel/n2-retirar o dinheiro/n3-deposita o dinheiro/n4-sair do sistema")
           if(operacao==1){
               if(saldo<0){alert("saldo repectivamente indisponivelprocure a agencia mais proximo ou ligue dd 157")}
        else{
        }
}
else if(operacao==2){
    var retirada = prompt("qual seria o valor para retirada")
    alert("voce nao tem saldo em sua conta,deposite um valor para poder sacalo!")
}
else if(operacao== 3){
    var deposita = Number(prompt("quando voce dejeja depositar em sua conta?"))
    saldo = saldo + depositar
    alert("voce tem r$ "+saldo+ " de saldo")
}
}



