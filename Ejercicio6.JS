const welcome = `Bienvenidos a Italiana pizza`
const Pizza = 7000;
const sandwich = 5000;
const ensalada = 15000;
const salsa = 500;
const eleccion = prompt  ("Que desea ordenar: \n1. Pizza \n2. sandwich  \n3. ensalada \n4. Salsa");{

    if (opcion >= 1 && opcion <= 4) {
        const cantidad = parseInt(prompt("ingrese la cantidad de porciones que desea:"));
        let totalapagar =0;
        switch (eleccion) {
            case 1:
                totalapagar = pizza * cantidad;
                break;
            case 2:
                totalapagar = sandwich * cantidad;
                break;
            case 3:
                totalapagar = esalada * cantidad;
                break;
            case 4:
                totalapagar = alsa * cantidad;
                break;
            
        }
        console.log(`Gracias por su pedido, total a pagar $${totalapagar}`);
    } else{
        console.log( "Opcion no valida")
    }


}