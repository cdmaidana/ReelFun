import React from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <Container className="ml-10 mt-5 text-center">
        <Alert variant="info">
          <h4>No hay productos en el carrito</h4>
          <p>Agregá productos para continuar con la compra</p>
        </Alert>

        <Link to="/">
          <Button variant="primary">Volver al inicio</Button>
        </Link>
      </Container>
  )
}

export default CartEmpty