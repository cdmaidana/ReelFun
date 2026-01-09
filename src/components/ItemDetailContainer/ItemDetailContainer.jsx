import  { useEffect, useState } from 'react'
import { getProdById } from '../../services/Productos/ProductoService'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Alert, Container } from 'react-bootstrap'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { idProd } = useParams(); 

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProdById(idProd)
      .then(prod => setProducto(prod)) 
      .catch(error => setError('Ocurrio un error al buscar el Producto.'))
      .finally(() => setLoading(false)); 

  }, [idProd])
 
  if (loading ) {
    return (<Container><p>Cargando producto...</p></Container>);
  }
  if (error) {
    console.log('Error al buscar el producto '+error);
    return (<Container><Alert variant="danger">{error}</Alert></Container>);
  }
  if (producto){
  return (
      <Container className="d-flex justify-content-center align-items-center  ">
         {/* <ItemDetail producto={producto.titulo }
                  desc={producto.desc}
                  img={producto.img}
                  precio={producto.precio}  
                  stockInicial={producto.stock}  
                  especificaciones={new Map(producto.especificaciones)}/>    */}     
          <ItemDetail producto={producto }
                      especificaciones={new Map(producto.especificaciones)}/>                  
      </Container>
    );
  }
}
export default ItemDetailContainer

