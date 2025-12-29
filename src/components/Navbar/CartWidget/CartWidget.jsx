import { FaShoppingCart } from "react-icons/fa";
import { Badge,   } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { reelFunContext } from "../../../providers/CartProvider";

const CartWidget = () => {
  const valorActual = useContext(reelFunContext);
  return (
    <NavLink className="nav-link-clean" to="/carrito">
      <div className="d-flex align-items-center">
        <FaShoppingCart size={20} />
        <Badge bg="secondary" className="ms-1">
          {valorActual.cantidad}
        </Badge>
      </div>
    </NavLink>
  );
};

export default CartWidget;