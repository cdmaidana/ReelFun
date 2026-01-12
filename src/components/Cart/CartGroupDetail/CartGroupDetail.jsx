import { Card, ListGroup, Badge } from 'react-bootstrap';
import CartItemDetail from '../CartItemDetail/CartItemDetail';
import { getCategoriaLabel } from '../../../services/Productos/TipoProducto';

const CartGroupDetail = ({ categoria, items }) => {
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
       
        <Card.Title>{getCategoriaLabel(categoria)}</Card.Title>
        <Badge bg="secondary">{items.length}</Badge>
      </Card.Header>

      <ListGroup variant="flush">
        {items.map(item => (
          <CartItemDetail key={item.id} item={item} />
        ))}
      </ListGroup>
    </Card>
  );
};

export default CartGroupDetail;