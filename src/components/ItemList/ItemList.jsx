import { Row, Col, Spinner, Container, Stack } from "react-bootstrap";
import Item from "../Item/Item"; 
import './ItemList.css';

const ItemList = ({ productos = [] }) => {
 
  if (!productos || productos.length === 0) {
    return (
      <WaitingSpinner text="Aguarde un momento, cargando productos..." /> 
    );
  }

  return (
    <Container fluid>
      <Row className="g-4">
        {productos.map(({ id, titulo, desc, img, precio }) => (
          <Col key={id} xs={12} sm={6} md={4}lg={3}>
            <Item id={id} title={titulo} description={desc} image={img} price={precio}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ItemList