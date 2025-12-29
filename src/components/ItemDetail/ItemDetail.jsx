import { useContext, useState } from 'react';
import { ListGroup,Button,Card, Col,Row, Container, Stack } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { reelFunContext } from '../../providers/CartProvider';

 
const ItemDetail = ({titulo, 
  desc, 
  img, 
  precio,
  stockInicial = 10,
  especificaciones =  []}) => {
    /**unidades del producto a comprar */
    const [cantidad, setCantidad] = useState(0);
    /**stock inicial del producto, harcodeado en 10 por ahora */
    const [stock, setStock] = useState(stockInicial); 

    const incrementarCantidad = () => {      
      if (stock > 0 && stockInicial >=  Math.min(stockInicial,cantidad + 1)) {
        setCantidad(cantidad + 1);
        setStock(stock - 1);
      }      
    };

    const decrementarCantidad = () => {
      if (cantidad >= 1) {
        setCantidad(cantidad - 1);
        setStock(stock + 1);
      }
    }; 
    
    const valorActual = useContext(reelFunContext);
    const addToCart = () => {
    (cantidad>0)?valorActual.setCantidad(cantidad):alert('Ingrese la cantidad que desea agregar.');
      
      
    };
   

  return (
    <Card >
      <Container>
        <Row className="g-3">        
          {/* Columna Izquierda - Producto */}
          <Col md={4} className="text-center">
            {/* imagen del producto */}
            <img 
              src={img} 
              alt={titulo}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            {/* descripcion del producto */}
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Subtitle className="text-muted">{desc}</Card.Subtitle>
              <Container>
              {/* precio */}
              <h2 className="text-success my-3">
                ${precio}
              </h2>
              <p>
                <strong> 
                {stock > 0 ? '' : `Disculpas....solo disponemos de ${stockInicial} unidades de este producto.`}</strong>
              </p>
              <p> {stock > 0 ? (`+${stock} disponibles`):('')  }</p>  
              </Container>                
              <Container className="d-flex justify-content-center mb-3" style={{ width: 160 }}> 
                {/* spinner cantidad a comprar*/}
                <ItemCount
                    cantidad={cantidad}
                    incrementar={incrementarCantidad}
                    decrementar={decrementarCantidad}
                  />                
              </Container>              
              {/* Botones de accion para agregar al carrito/comprar */}
              <Stack gap={2} className="col-md-8 mx-auto"> 
                <Button variant="secondary" onClick={addToCart} >Agregar al Carrito</Button>
                <Button variant="primary">Comprar</Button>
              </Stack>

            </Card.Body>
          </Col>

          {/* Columna Derecha - Caracteristicas del Producto */}
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