import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>404</h1>
          <h2>Pagina no encontrada</h2>
          <p>Disculpas, no encontramos lo que desea o la pagina se encuentra en desarrollo.</p>
          <Link to="/categoria/home">
            <Button variant="primary">Volver al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFoundPage