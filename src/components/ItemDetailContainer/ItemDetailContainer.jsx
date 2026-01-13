import  { useEffect, useState } from 'react' 
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Alert, Container, Spinner } from 'react-bootstrap'
import { findProductoByIdDoc } from '../../services/productos/ProductoService'
import WaitingSpinner from '../WaitingSpinner/WaitingSpinner'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { idProd } = useParams(); 

  useEffect(() => {
     
      setLoading(true);
      setError(null);  

    findProductoByIdDoc(idProd)
      .then(prod => setProducto(prod)) 
      .catch(error => setError( error))
      .finally(() => setLoading(false)); 

  }, [idProd])

  if (loading ) {
      return ( 
        <WaitingSpinner text="Aguarde un momento, procesando información del Producto..." /> 
      );
  }
 
  if (error) {
    console.log('Error al buscar el producto '+error);
    return (<Container><Alert variant="danger">{error}</Alert></Container>);
  }
  if (producto){
  return (
      <Container className="d-flex justify-content-center align-items-center  ">
          <ItemDetail producto={producto }
                      especificaciones={new Map(producto.especificaciones)}/>                  
      </Container>
    );
  }
}
export default ItemDetailContainer

