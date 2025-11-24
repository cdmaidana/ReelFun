import { FaShoppingCart } from "react-icons/fa";
import { Badge,   } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
  return (
    <NavLink className="nav-link-clean" to="/carrito">
      <div className="d-flex align-items-center">
        <FaShoppingCart size={20} />
        <Badge bg="secondary" className="ms-1">
          {itemCount}
        </Badge>
      </div>
    </NavLink>
  );
};

export default CartWidget;