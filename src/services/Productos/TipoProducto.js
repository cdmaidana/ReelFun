export const TipoProducto = {
reel : "reel",
cana : "cana",
accesorios : "accesorios"
}

export function getCategoria(tipoProducto){
  var cat = ''; 
  switch (tipoProducto) {
    case "reel":
      cat = "reels";
      break;
    case "anzuelo":
      cat = "accesorios";
      break;
    case "plomada":
      cat = "accesorios";
      break;
    case "cana":
      cat = "canas";
      break; 
  }
  return cat;
}