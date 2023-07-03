// cart.js

let cart = [];

export function addToCart(product, quantity) {
  const cartItem = { product, quantity };
  cart.push(cartItem);
}

export function displayCartItems() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = "";

  cart.forEach((item) => {
    const { product, quantity } = item;
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
      <img src="${product.img}" alt=""> <br>
      <p>${product.name}</p>
      <p>Quantity: ${quantity}</p>
      <p>Price: $${product.price}</p>
      <p>Total: $${product.price * quantity}</p>
    `;
    cartItemsDiv.appendChild(cartItemDiv);
  });

  updateCartTotal();
}

export function updateCartTotal() {
  const totalAmount = cart.reduce((total, item) => {
    const { product, quantity } = item;
    return total + product.price * quantity;
  }, 0);

  const cartTotal = document.getElementById("cart-total");
  cartTotal.textContent = `Total: $${totalAmount}`;
}

export function clearCart() {
  cart = [];
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = "";
  updateCartTotal();
}
