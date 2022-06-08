// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import Home from "../Home/Home";
import About from '../About/About';
import Cart from '../Cart/Cart';
import ProductDetail from '../ProductDetail/ProductDetail';
import Header from '../Header/Header';
import Wishlist from '../Wishlist/Wishlist';

export function App() {
  return (
    <>
    <Header/>
    <div className="p-7">
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />
        <Route
          path="/about"
          element={
            <About/>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart/>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist/>
          }
        />
        <Route
          path="/detail/:productId"
          element={
            <ProductDetail/>
          }
        />
      </Routes>
      {/* END: routes */}
      </div>
    </>
  );
}

export default App;
