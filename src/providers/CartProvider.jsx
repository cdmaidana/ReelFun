import { createContext, useState } from "react";

/* Crear contexto para el carrito */ 
export const reelFunContext = createContext();

/* Separar el provider del contexto */
const { Provider } = reelFunContext;

import React from 'react'

/* crear un nuevo componente como contenedor del paso anterior */
const CartProvider = ({children}) => {
    
    const [cantidad,setCantidad] = useState(0);
    
    /* Inicializar el contexto */
    const cartContextValue = {
        cantidad: cantidad,
        setCantidad: setCantidad
    }

  return (
    <Provider value={ cartContextValue}>
        {children}
    </Provider>
  )
}

export default CartProvider