import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const WaitingSpinner = ({text}) => {
  return (
    <Container className="text-center py-5">
      <Spinner animation="border" />
      <p>{text}</p>
    </Container>
  )
}

export default WaitingSpinner