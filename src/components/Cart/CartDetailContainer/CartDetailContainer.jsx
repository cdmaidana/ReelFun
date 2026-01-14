import { useContext, useState } from 'react';
import { Button, Container, Stack, Alert, Row, Form } from 'react-bootstrap';
import { ReelFunContext } from '../../../providers/CartContextProvider';
import CartGroupDetail from '../CartGroupDetail/CartGroupDetail';
import CartEmpty from '../CartEmpty/CartEmpty';
import { Link, useNavigate  } from 'react-router-dom';
import { useUser } from '../../../providers/UserContextProvider';
import { serverTimestamp } from 'firebase/firestore';
import { createOrdenCompra } from '../../../services/firebase/firestore/OrdenesCompra';

const CartDetailContainer = () => {
  const { carrito, precioTotal, limpiarCarrito, carritoAgrupado, setOrdenConfirmada } =
    useContext(ReelFunContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useUser(); 
  if (carrito.length === 0) {
    return <CartEmpty />;
  } 

   const handleSubmit = async (event) => {
    event.preventDefault(); 

    setLoading(true);

     try {
      const ordenCompra = {
        cliente: user,
        items: carrito.map(item => ({
          idProducto: item.id,
          titulo: item.titulo,
          precio: item.precio,
          cantidad: item.cant
        })),
        total: precioTotal,
        estadoOrden: "generada",
        fechaCreacion: serverTimestamp()
      };
      
      const ordenCompraIdDoc = await createOrdenCompra(ordenCompra);
      setOrdenConfirmada(true);
      navigate(`/orden-confirmada/${ordenCompraIdDoc}`);

    } catch (error) {
        console.error("Error no esperado al confirmar la orden", error);
        setError("No se pudo generar la orden. Intenta nuevamente.");
    } finally {
        setLoading(false);     
    }  
    
    
  };

  return (
    <Container fluid  className="mt-4 px-4">
      <Row className="justify-content-center"> 
        <Form onSubmit={handleSubmit}>
          <Stack gap={3}>
            <h2>Detalle del carrito</h2>

            {Object.entries(carritoAgrupado).map(([categoria, items]) => (
              <CartGroupDetail
                key={categoria}
                categoria={categoria}
                items={items}
              />
            ))}

            <Alert variant="secondary" className="text-end mb-0">
              <strong>Total de la compra:</strong> ${precioTotal.toLocaleString()}
            </Alert>

            {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}

            <Stack direction="horizontal" gap={2} className="justify-content-end">              

              <Button variant="outline-danger" onClick={limpiarCarrito}>
                Vaciar carrito
              </Button>
              
              <Link to="/">
                <Button variant="primary">Seguir viendo prouctos</Button>
              </Link>
              <Button variant="success" type="submit" disabled={loading}>               
                {loading ? "Procesando..." : "Finalizar compra"}
              </Button>
            </Stack>
          </Stack> 
        </Form>
      </Row>
    </Container>
  );
};

export default CartDetailContainer;