import { useState } from 'react';
import { createContext } from 'react';
import { getCategoria } from '../services/Productos/TipoProducto';

  export const ReelFunContext = createContext();

  const { Provider } = ReelFunContext;

  const CartContextProvider = ({children}) => {

    const [carrito,setCarrito] = useState([]);

    const productoEnCarrito = (idProducto) => carrito.some(prod => prod.id === idProducto);

    const agregarProducto = (producto,cant) => {  
      setCarrito(carritoActual => {
          const productoYaAgregado = carritoActual.find( item => item.id === producto.id);
          if (!productoYaAgregado){
            if (cant > producto.stock){
              console.log('Stock no disponible');
              return carritoActual;  
            }
            return [...carritoActual,{...producto,cant}];
          }
          const cantidadAcumulada = productoYaAgregado.cant + cant;
          if (cantidadAcumulada > producto.stock){
            console.log('Stock no disponible');
            return carritoActual;  
          }
          return carritoActual.map(item => 
              (item.id === producto.id)? {...item,cant:cantidadAcumulada} : item
          );
        });
      } 
    
    const precioXCategoria = (categoria) => {
        const itemsByCat = carrito.filter(item => getCategoria(item.tipo) === categoria);
        if (itemsByCat.length>0){
          return itemsByCat.reduce((precioAcumulado,item) => {precioAcumulado + item.precio*item.cant},0);    
        }
        return 0;
    }


    const precioTotal = 
      carrito.reduce((precioAcumulado,item) => {precioAcumulado + item.precio*item.cant},0);

    const totalItems = carrito.length;
      //carrito.reduce((itemsAgregados,item) => {itemsAgregados + item.cant},0);

    const eliminarProducto = (idProducto) => {
      setCarrito(carrito => carrito.filter(item => item.id !== idProducto));
    };

    const limpiarCarrito = () => setCarrito([]);

    return (
      <Provider
        value={{ carrito, productoEnCarrito, agregarProducto, eliminarProducto, limpiarCarrito,precioTotal,precioXCategoria,totalItems }}
        >
        {children}  
      </Provider>  
    ); 
  }

  export default CartContextProvider;