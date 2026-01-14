import { useEffect, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { loadProductos,filtrarProductosByCat } from "../../services/productos/ProductoService.js";
import { useParams } from 'react-router-dom';
import WaitingSpinner from '../WaitingSpinner/WaitingSpinner';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { tipoCat = "home" } = useParams();

  useEffect(() => {
    if (productos?.length === 0) {
      setLoading(true);
      setError(null);    
    }
    
    const loader = tipoCat=== "home"
    ? loadProductos()
    : filtrarProductosByCat(tipoCat);

    loader
      .then(setProductos)
      .catch(err => setError(`Ocurrio un error al cargar los productos`))
      .finally(() => setLoading(false));

  }, [tipoCat]);

  if (loading ) {
    return (    
      <WaitingSpinner text="Aguarde un momento, cargando productos..." /> 
    );
  }

  if (error) {
    console.log('Error al cargar el catalogo. '+error);
    return (<Container><Alert variant="danger">{error}</Alert></Container>);
  }

  if (productos?.length>0){
    return (
      <Container className="my-4 mx-4 ">
        <ItemList productos={productos} />
      </Container>
    );
  }
};

export default ItemListContainer;