const imc = (altura, peso)=>{
    let calculo =Math.round(( peso / (altura ** 2)*100))/100
    let status;
    if(calculo < 18.5){
        status = `Status: Magreza \nResultado: ${calculo}`
        return status;
    }else if(calculo >= 18.5 && calculo <= 24.9 ){
        status = `Status: Normal \nResutlado: ${calculo}`
        return status;
    }else if(calculo >= 25.0 && calculo <= 29.9){
        status = `Status: Sobrepeso \nResutlado: ${calculo}`
        return status;
    }else if(calculo >=30.0 && calculo <= 39.9){
        status =`Status: Obesidade \nResutlado: ${calculo}`;
        return status;
    }else if(calculo >= 40.0){
        status=`Status: Obeso \nResutlado: ${calculo}`;
        return status;
    }
}

document.getElementById('formImc').addEventListener('submit', function(event){
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let mensgem = document.getElementById('messagem');

    let resultado = imc(altura, peso);

    let alerta = `Olá ${nome} \n ${resultado}`;

    mensgem.innerText = alerta;
});



