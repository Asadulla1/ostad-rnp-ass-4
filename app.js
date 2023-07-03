// app.js

import products from "./product.js";
import { addToCart, displayCartItems, clearCart } from "./cart.js";

// Product List Section
const productListDiv = document.querySelector(".product-list");

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
    <p>${product.name}</p>
    <p>Price: $${product.price}</p>
    <img src="${product.img}" alt=""> <br>
    <button class="add-to-cart">Add to Cart</button>
  `;
  productListDiv.appendChild(productDiv);

  const addToCartBtn = productDiv.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    const quantity = parseInt(prompt("Enter quantity:", "1"), 10);
    addToCart(product, quantity);
    displayCartItems(); // Update the cart display
  });
});

// Clear Cart Button
const clearCartBtn = document.getElementById("clear-cart");
clearCartBtn.addEventListener("click", () => {
  clearCart();
});
