/* treino 1 js*/
let n1 = 5
let n2 = 5
let media =(n1 + n2 ) / 2;

console.log(`media ${media}`);

if(n1 === 0 || n2 === 0){
    console.log("reprovado")
}else if (media < 7){
    console.log("reprovado mas podera recuperar a nota")
}else{
    console.log("aprovado")
}

/* treino 2 js*/

let idade = 18
let comPais = false
let comprouBilhete = true

const podeviajar = (idade >= 18 || comPais) && comprouBilhete ;

console.log(`Pode viajar ${podeviajar}`);

 let msgMaiorIdade = (idade >=18) ? "é maior de idade" : " é menor de idade";

 if(!comprouBilhete){
        console.log("nao comprou o bilhete");
 }else{
    console.log(msgMaiorIdade);
 }