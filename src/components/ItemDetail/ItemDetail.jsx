import { useContext, useState } from 'react';
import { ListGroup,Button,Card, Col,Row, Container, Stack } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'; 
import { ReelFunContext } from '../../providers/CartContextProvider';
import { Link } from 'react-router-dom';

 
const ItemDetail = ({producto, especificaciones =  []}) => {
    const [cantidad, setCantidad] = useState(0);
    const [habilitaCompra, setHabilitaCompra] = useState(false);   
    const [stockActual, setStock] = useState(producto.stock); 

    const incrementarCantidad = () => {      
      if (stockActual > 0 && producto.stock >=  Math.min(producto.stock,cantidad + 1)) {
        setCantidad(cantidad + 1);
        setStock(stockActual - 1);
      }      
    };

    const decrementarCantidad = () => {
      if (cantidad >= 1) {
        setCantidad(cantidad - 1);
        setStock(stockActual + 1);
      }
    }; 
        
    const cartContext = useContext(ReelFunContext);   
    
    const addToCart = () => 
        { if(cantidad>0)
            {cartContext.agregarProducto(producto,cantidad);
              setHabilitaCompra(true)}
          else
            alert('Ingrese la cantidad que desea agregar.'); 
         }   
  return (
    <Card >
      <Container>
        <Row className="g-3">                  
          <Col md={4} className="text-center">
            <img 
              src={producto.img} 
              alt={producto.titulo}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />            
            <Card.Body>
              <Card.Title>{producto.titulo}</Card.Title>
              <Card.Subtitle className="text-muted">{producto.desc}</Card.Subtitle>
              <Container>              
              <h2 className="text-success my-3">
                ${producto.precio}
              </h2>
              <p>
                <strong> 
                {stockActual > 0 ? '' : `Disculpas....solo disponemos de ${producto.stock} unidades de este producto.`}</strong>
              </p>
              <p> {stockActual > 0 ? (`+${stockActual} disponibles`):('')  }</p>  
              </Container>                
              <Container className="d-flex justify-content-center mb-3" style={{ width: 160 }}>                 
                <ItemCount
                    cantidad={cantidad}
                    incrementar={incrementarCantidad}
                    decrementar={decrementarCantidad}
                  />                
              </Container>                            
              <Stack gap={2} className="col-md-8 mx-auto"> 
                <Button variant="secondary" onClick={addToCart} disabled={cantidad === 0} >Agregar al Carrito</Button>                
                {habilitaCompra ? (
                  <Link to="/carrito">
                    <Button variant="primary">
                      Terminar Compra
                    </Button>
                  </Link>
                ) : (
                  <Button variant="primary" disabled>
                    Terminar Compra
                  </Button>
                )}
              </Stack>

            </Card.Body>
          </Col>
          
          <Col md={8}>
            <h5 className="mb-3">Características del Producto</h5>

            <ListGroup>
              {especificaciones &&
                [...especificaciones].map(([key, value]) => (
                  <ListGroup.Item key={key}>
                    <strong>{key.toUpperCase()}</strong>: {value}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default ItemDetail