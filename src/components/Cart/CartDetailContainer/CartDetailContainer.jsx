import { useContext } from 'react';
import { Button, Container, Stack, Alert, Row, Form } from 'react-bootstrap';
import { ReelFunContext } from '../../../providers/CartContextProvider';
import CartGroupDetail from '../CartGroupDetail/CartGroupDetail';
import CartEmpty from '../CartEmpty/CartEmpty';
import { Link } from 'react-router-dom';
import { useUser } from '../../../providers/UserContextProvider';
import { serverTimestamp } from 'firebase/firestore';
import { createOrdenCompra } from '../../../services/firebase/firestore/OrdenesCompra';

const CartDetailContainer = () => {
  const { carrito, precioTotal, limpiarCarrito, carritoAgrupado } =
    useContext(ReelFunContext);

  const { user } = useUser();
  console.log(user);
  console.log(carrito);
  if (carrito.length === 0) {
    return <CartEmpty />;
  }

  /* const handleComprar = () => {
    alert('Pago en proceso, página en construcción');
    limpiarCarrito();
  }; */

   const handleSubmit = async (event) => {
    event.preventDefault(); 

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

      alert(`Se registro la orden de Compra ${ordenCompraIdDoc}, se redireccionará para el Pago , página en construcción`);

    } catch (error) {
      console.error("Error creating order", error);
    } finally {
      limpiarCarrito();
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

            <Stack direction="horizontal" gap={2} className="justify-content-end">
              <Button variant="outline-danger" onClick={limpiarCarrito}>
                Vaciar carrito
              </Button>
              
              <Link to="/">
                <Button variant="primary">Seguir viendo prouctos</Button>
              </Link>
              <Button variant="success" type="submit" /* onClick={handleComprar} */>
                Finalizar Compra iniciar Pago
              </Button>
            </Stack>
          </Stack> 
        </Form>
      </Row>
    </Container>
  );
};

export default CartDetailContainer;