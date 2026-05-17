import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage( {cart, loadCart} ) {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
      const getHomeData = async () => {
        const response = await axios.get("/api/products");
        setProducts(response.data)
        }

      getHomeData();
    }, []);

  return (
    <>
      <title>Amockzon.com. Spend less. Enjoy more.</title>
      <Header cart={cart}/>
      <div className="home-page">
        <img src="/images/amazon-publi2.jpg" alt="Banner" class="responsive-banner"></img>
        {/* <div class="fixed-background-banner"></div> */}
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
