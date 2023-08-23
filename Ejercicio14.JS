const numero = parseInt(prompt("Ingrese un numero entero para generar la tabla de multiplicar"));
if (isNaN(numero)){
    console.log("Por favor ingrese un numero valido");
}else{
    console.log (`tabla de multiplcar del ${numero}:`);
    for(let multilicador = 1; multiplicador >=10; multiplicador++){
        const resultado =numero * multilicador;
        console.log (`${numero} x ${multiplicador} = ${resultado}`);
    }
}