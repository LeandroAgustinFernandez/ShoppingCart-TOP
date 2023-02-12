import { Product } from "./Product";
import "./Products.css";

const Products = ({ products, add }) => {
  return (
    <>
      <section className="product-container">
        {products.map((product) => (
          <Product product={product} add={add} key={product.id}/>
        ))}
      </section>
    </>
  );
};

export default Products;
