let diaSemana = 0

if(diaSemana === 0){
    console.log("hoje é quinta")
}else if (diaSemana === 1){
    console.log ("hoje é sexta")
}else if (diaSemana === 2){
    console.log("hoje é sabado")
}else if(diaSemana ===3){
    console.log("hoje é domingo")
}else if (diaSemana === 4){
    console.log("hoje é segunda")
}else if (diaSemana === 5){
    console.log("hoje é terça")
}else {
    console.log("hoje é quarta")
}

let dia =""
switch(diaSemana){
    case 0:
        dia = "quinta"
        break

    case 1:
        dia = "sexta"
        break
    
    case 2:
        dia = "sabado" 
        break
    case 3 :
        dia =" domingo"
        break
    case 4 :        
        dia =" segunda"
        break
     case 5:
        dia ="terça"
        break
     case 6 :
        dia ="quarta"      
        break
    default:
            dia ="--" 

    }   
    console.log (` hoje é ${dia}`) 

