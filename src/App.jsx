
import './App.css'
import CartDetailContainer from './components/Cart/CartDetailContainer/CartDetailContainer';
import NotFoundPage from './components/Error/NotFoundPage';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavbarReelFun from './components/Navbar/NavbarReelFun';
import { Routes,Route } from 'react-router-dom';
function App() {
 

  return (
    <>      
      <NavbarReelFun   /> 
      <Routes>
        {/* si (url ==="?") => retorna <Component>) */} 
        
        <Route path="/" element={<ItemListContainer />} />
        
        {/*Rutas dinamicas para un mismo componente  */}
        <Route path="/categoria/:tipoCat" element={<ItemListContainer/>}></Route>
        <Route path="/producto/detalle/:idProd" element={<ItemDetailContainer/>}></Route>   

        <Route path="/carrito"  element={<CartDetailContainer/>}></Route>   

        {/* 404 capturo cualquier ruta no deseada*/}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </>
  );
}

export default App

