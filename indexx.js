import React, { useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useContext(CartContext);

  const addProduct = (productId) => {
    axios
      .get(`/api/products/${productId}`)
      .then((response) => {
        const product = response.data;
        setCart([...cart, product]);
        setTotal(total + product.price);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
    setTotal(total - cart.find(product => product.id === productId).price);
  };

  return (
    <div>
      <h1>Carrinho de compras</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button onClick={() => removeProduct(product.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Cart;