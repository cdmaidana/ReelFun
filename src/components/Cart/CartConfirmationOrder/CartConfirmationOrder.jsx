import { Link, useNavigate  , useParams } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import { useContext } from "react";
import { ReelFunContext } from "../../../providers/CartContextProvider";

const CartConfirmationOrder = () => {
  const { idOrden } = useParams();
  const {   limpiarCarrito } = useContext(ReelFunContext);  
  const navigate = useNavigate();

  const handleClick = () => {
    limpiarCarrito();
    navigate('/');
  };

  return (
    <Alert variant="success" className="mt-4">
        <h4>¡Felicitacones!!!! Su compra ya fue registrada con éxito!</h4>
        <p>Tu número de orden es:</p>
        <h5>{idOrden}</h5>
        <p>Ya falta poco, en breve continuaremos con el pago......(cuando lo implementemos!) </p>          
        <Button variant="primary" onClick={handleClick}>Seguir viendo prouctos</Button>
    </Alert>
  );
};

export default CartConfirmationOrder;