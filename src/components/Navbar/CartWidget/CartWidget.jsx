import { FaShoppingCart } from "react-icons/fa";
import { Badge,   } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useContext } from "react"; 
import { ReelFunContext } from "../../../providers/CartContextProvider"; 
 

const CartWidget = () => { 
  
  const { totalItems } = useContext(ReelFunContext);
 
  if (totalItems === 0) return null;

  return (
    <NavLink className="nav-link-clean" to="/carrito">
      <div className="d-flex align-items-center">
        <FaShoppingCart size={20} />
        <Badge bg="secondary" className="ms-1">
          {totalItems }
        </Badge>
      </div>
    </NavLink>
  );
}; 

export default CartWidget;