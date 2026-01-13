export const categoriasMap = {
  "reel": "reels",
  "anzuelo": "accesorios",
  "plomada": "accesorios",
  "cana": "canas" 
};  

export const getCategoria = (tipo) => categoriasMap[tipo] ?? "Sin definir";


export function getTiposInCategoria(cat){ 
  switch (cat) {
    case "reels":
      return ["reel"];
    case "canas":
      return ["cana"];
    case "accesorios":
      return ["anzuelo","plomada"]; 
    default : return [];

 
  } 
}

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

export const getCategoriaLabel = (key) => {
  return categoriasNavConfig.find(c => c.key === key)?.label;
};
 