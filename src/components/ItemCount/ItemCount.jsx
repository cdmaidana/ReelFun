import React from 'react'
import { Button } from 'react-bootstrap';

const ItemCount = ({ cantidad, incrementar, decrementar }) => {
  return (
    <div className="d-flex justify-content-center mb-3" style={{ width: 160 }}>
      <Button variant="outline-secondary" onClick={decrementar}>-</Button>
      <input
        type="text"
        className="form-control text-center mx-2"
        value={cantidad}
        readOnly
      />
      <Button variant="outline-secondary" onClick={incrementar}>+</Button>
    </div>
  );
};

export default ItemCount;