import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
 

const Item = ({ id,title, description, image, price }) => {
  return (
    <Card className="h-100 shadow-sm rounded-4">      
      <Card.Img 
          variant="center"  
          src={image}
          alt={title}
          style={{ height: "350px", objectFit: "scale-down" }}
        />
      
      <Card.Body>
        <Card.Title className="text-primary ">{title}</Card.Title>
        <Card.Text>{description}</Card.Text> 
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold text-success fs-5">${price}
          </span>
          
            <Button variant="secondary">
              <Link to={`/producto/detalle/${id}`} className="nav-link-clean">
                Ver mas detalles...
              </Link>  
            </Button>          
        </div>
      </Card.Body>
 
    </Card>
  );
};

export default Item;