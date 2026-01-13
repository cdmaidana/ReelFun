import { useContext } from 'react';
import {
  Button,
  ListGroup,
  Stack,
  Badge
} from 'react-bootstrap';
import { ReelFunContext } from '../../../providers/CartContextProvider';

const CartItemDetail = ({ item }) => {
  const { eliminarProducto } = useContext(ReelFunContext);

  return (
    <ListGroup.Item>
      <Stack
        direction="horizontal"
        gap={3}
        className="align-items-center"
      >        
        <div className="me-auto">
         <div className="fw-semibold">{item.titulo}</div>  
           
          <small className="text-muted">            
             ${(item.precio ).toLocaleString()}
          </small>
        </div>
       
        <Badge bg="info">
          x{item.cant}
        </Badge>
       
        <div className="fw-bold">
          ${(item.precio * item.cant).toLocaleString()}
        </div>

        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => eliminarProducto(item.id)}
        >
          Eliminar
        </Button>
      </Stack>
    </ListGroup.Item>
  );
};

export default CartItemDetail;