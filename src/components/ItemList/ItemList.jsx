import { Row, Col, Spinner, Container, Stack } from "react-bootstrap";
import Item from "../Item/Item"; 
import './ItemList.css';

const ItemList = ({ productos }) => {
  /* Evaluo si tengo algun producto, caso contrario pongo 
  spinner de espera */  
  if (productos.length === 0) {
    return (
      <Container className="spinner-loading-productos"  fluid>
        <div className="text-center">           
          <Spinner animation="border" />
          <p >Cargando produtos...</p> 
        </div>
      </Container>
    );
  }
  /***
   * Si tengo productos muestro la lista de productos */
  return (
    <Row className="g-4">
      {productos.map(item => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Item
            id={item.id}
            title={item.titulo }
            description={item.desc}
            image={item.img}
            price={item.precio} 
          />
        </Col>
      ))}
    </Row>
  );
};
export default ItemList