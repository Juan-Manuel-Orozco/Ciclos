const welcome = `Bienvenidos a la mejor tienda de stickers`
const stickerp= 4000;
const stickerg= 6000;
const CantidadStickersGrandes = ParseInt (Prompt("ingrese cantidad de Stickers grandes desea:"));
const CantidadStickersPequeños = ParseInt (Prompt("ingrese cantidad de Stickers pequeños desea:"));
const TotalStickers= CantidadStickersGrandes + CantidadStickersPequeños;
if (TotalStickers >=10){
    const TotalPagar= CantidadStickersGrandes * stickerg + CantidadStickersPequeños * stickerp;
    console.log (`Gracias por su compra! Total de su compra es $${TotalPagar}`)
}else{
    console.log("Debe comprar al menos 10 stickers")
}