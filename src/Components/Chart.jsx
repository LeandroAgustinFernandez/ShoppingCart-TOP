import "./Chart.css";

const Chart = ({ products, handleQuantity }) => {
  return (
    <section className="cart">
      <article className="cart-container">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <div className="card-header">
              <img
                className="card-img"
                src={require("../img/" + product.image)}
                alt=""
              />
            </div>
            <div className="card-body">
              <h2 className="card-body-title">{product.name}</h2>
              <p className="card-body-text">{product.description}</p>
              <div>
                <button className="card-body-button" data-id={product.id} onClick={handleQuantity}>-</button>
                <span>{product.quantity}</span>
                <button className="card-body-button" data-id={product.id} onClick={handleQuantity}>+</button>
              </div>
            </div>
          </article>
        ))}
      </article>
    </section>
  );
};

export default Chart;
