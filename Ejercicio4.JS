// lavaservis
const welcome= `¡Welcome to Lavaservis!`
const eslavados= true;
const eslavadon= true;
const esplanchado= true;
const lavados= 4000;
const lavadon= 3000;
const planchado= 2000;
const domicilio= 4000;
const election = prompt ("What process do you want to perform on your garment:\n1. washed 1\n2 ironed");{
    if (eletion === "1") {
        console.log("The user chose to wash");
      } else if (eleccion === "2") {
        console.log("The user chose to iron");
      } else {
        console.log("Invalid election");
     }}
let total= 0;
     if (eslavados){
        total += lavados;
        console.log(`Lavado en seco vale: $${lavados}`);
     }
     if (eslavadon) {
        total = lavadon;
        console.log(`Lavado normal vale: $${lavadon}`);
     } 
     if (esplanchado) {
        total = planchado;
        console.log(`Plachado vale: $${planchado}`);
     }
if (planchado && !eslavados && !eslavadon ) {
total +=domicilio;
console.log(`Costo del domicilio para planchado: $${planchado}`);
}else {
    console.log("Domicilio gratuito para el resto de servicios.");
}
console.log(`Total a pagar: $${total}`)