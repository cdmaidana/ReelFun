import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const CartWidget = ({ itemCount }) => {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={20} />
      <Badge bg="secondary" className="ms-1">
        {itemCount}
      </Badge>
    </div>
  );
};

export default CartWidget;