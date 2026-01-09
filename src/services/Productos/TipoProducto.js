export const categoriasMap = {
  "reel": "reels",
  "anzuelo": "accesorios",
  "plomada": "accesorios",
  "cana": "canas" 
}; 

export const getCategoria = (tipo) => categoriasMap[tipo] ?? "Sin definir";

export const categoriasNavConfig = [
  {
    key: "reels",
    label: "Reels",
    path: "/categoria/reels",
  },
  {
    key: "canas",
    label: "Cañas",
    path: "/categoria/canas",
  },
  {
    key: "accesorios",
    label: "Accesorios",
    path: "/categoria/accesorios",
  },
];

/*
export const navbarCategorias = Array.from(
  new Set(Object.values(categoriasMap))
);
export const categoriasLabels = {
  reels: "Reels",
  canas: "Cañas",
  accesorios: "Accesorios",
}; 

 export const TipoProducto2 = {
reel : "reel",
cana : "cana",
accesorios : "accesorios"
}

export function getCategoria2(tipoProducto){
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
} */