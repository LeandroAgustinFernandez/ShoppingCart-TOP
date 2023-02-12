import React from "react";

export const Product = ({ product, add }) => {
  return (
    <article className="card">
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
        <button
          type="button"
          className="card-body-button"
          onClick={add}
          id={product.id}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};
