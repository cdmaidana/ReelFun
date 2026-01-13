
import './App.css'
import CartConfirmationOrder from './components/Cart/CartConfirmationOrder/CartConfirmationOrder';
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
        <Route path="/" element={<ItemListContainer />} />
                
        <Route path="/categoria/:tipoCat" element={<ItemListContainer/>}></Route>
        
        <Route path="/producto/detalle/:idProd" element={<ItemDetailContainer/>}></Route>   

        <Route path="/carrito"  element={<CartDetailContainer/>}></Route>   

        <Route path="/orden-confirmada/:idOrden"  element={<CartConfirmationOrder/>}></Route>   
        
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </>
  );
}

export default App

