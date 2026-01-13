import { useState } from 'react';
import { createContext } from 'react';
import { getCategoria } from '../services/productos/ClasificacionProducto';

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
            return [
                  ...carritoActual,
                  {
                    id: producto.idProducto,
                    tipo:producto.tipo,
                    titulo: producto.titulo,
                    precio: producto.precio,
                    cant: cant
                  }
                ];
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
    
    const carritoAgrupado = carrito.reduce((mapaCategorias, item) => {
                            const categoria = getCategoria(item.tipo);
                            mapaCategorias[categoria] = mapaCategorias[categoria] || [];
                            mapaCategorias[categoria].push(item);
                            return mapaCategorias;
                        }, {});

    const precioXCategoria = (categoria) => {
      const itemsByCat = carrito.filter(
        item => getCategoria(item.tipo) === categoria
      );

      return itemsByCat.reduce(
        (precioAcumulado, item) => {
          precioAcumulado = precioAcumulado + item.precio * item.cant;
          return precioAcumulado;
        },
        0
      );
    };


    const precioTotal = carrito.reduce(
      (precioAcumulado,item) =>  {
          precioAcumulado = precioAcumulado + item.precio * item.cant;
          return precioAcumulado;
        },
        0
    );

    const totalItems = carrito.length; 
    const eliminarProducto = (idProducto) => {
      setCarrito(carrito => carrito.filter(item => item.id !== idProducto));
    };

    const limpiarCarrito = () => setCarrito([]);

    return (
      <Provider
        value={{ carrito, productoEnCarrito, agregarProducto, eliminarProducto, limpiarCarrito,precioTotal,precioXCategoria,totalItems,carritoAgrupado }}
        >
        {children}  
      </Provider>  
    ); 
  }

  export default CartContextProvider;