
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavbarReelFun from './components/Navbar/CartWidget/NavbarReelFun';

function App() {

  /* items en el carrito */
  const itemCount = 0;
  /* lLeyenda para el itemListContainer. Parte de la consigna */
  const itemListContainerTit = "Bienvenidos ReelFun!!!";  
  const itemListContainerDet = "Pagina en desarrollo..."; 
  return (
    <>
      <NavbarReelFun  itemCount={itemCount} />
      <ItemListContainer itemListTit={itemListContainerTit} itemListDet={itemListContainerDet} />
    </>
  );
}

export default App
