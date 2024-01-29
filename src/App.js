import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar";
import {Routes, Route,useNavigate, createSearchParams} from "react-router-dom";
import { useCart } from "./Context/Cart";

function App() {
  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
    <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
