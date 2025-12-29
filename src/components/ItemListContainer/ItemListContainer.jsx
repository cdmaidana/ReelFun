import { useEffect, useState } from "react";
import { Container, Alert,Spinner } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { loadProductos,filtrarProductosByCat } from "../../services/Productos/ProductoService";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Se inicializa a "home" para los paths "/", o explicitamente desde
  el brand del navbar  */
  const { tipoCat = "home" } = useParams();

  
  /**Inicializacion lista de productos */
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const loader = tipoCat=== "home"
    ? loadProductos()
    : filtrarProductosByCat(tipoCat);

    loader
      .then(setProductos)
      .catch(err => setError(`Ocurrio un error al cargar los productos`))
      .finally(() => setLoading(false));

  }, [tipoCat]);
  
  if (loading ) {
    return (<Container className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
      <p>Cargando productos...</p>
    </Container>);
  }

  if (error) {
    console.log('Error al cargar el catalogo. '+error);
    return (<Container><Alert variant="danger">{error}</Alert></Container>);
  }

  if (productos.length>0){
    return (
      <Container className="my-4 mx-4 ">
        <ItemList productos={productos} />
      </Container>
    );
  }
};

export default ItemListContainer;