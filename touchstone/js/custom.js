// Initialize cart
let cart = [];

// Update Cart Display
function updateCart() {
  const cartCount = document.getElementById("cartCount");
  const cartItemsContainer = document.getElementById("cartItems");

  cartCount.textContent = cart.length;
  cartCount.style.display = cart.length > 0 ? "inline-block" : "none";

  // Update modal cart items
  cartItemsContainer.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong> - ${item.desc} - <span>$${item.price}</span> 
                    <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItemsContainer.appendChild(li);
  });
}

// Add to Cart Function
document.querySelectorAll(".cart-button").forEach((btn) => {
  btn.addEventListener("click", function () {
    let card = this.closest(".card");
    let itemName = card.querySelector(".title span").textContent;
    let itemDesc = card.querySelector(".card-subtitle").textContent;
    let itemPrice = card.querySelector(".price").textContent.replace("$", "");

    cart.push({ name: itemName, desc: itemDesc, price: itemPrice });

    alert("Item added!");
    updateCart();
  });
});

// Remove Item from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Open Cart Modal
document.getElementById("cartIcon").addEventListener("click", function () {
  document.getElementById("cartModal").style.display = "block";
});

// Close Cart Modal
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("cartModal").style.display = "none";
});

// Clear Cart
document.getElementById("clearCart").addEventListener("click", function () {
  cart = [];
  updateCart();
  alert("Cart cleared!");
});

// Process Order
document.getElementById("processOrder").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your order!");
    cart = [];
    updateCart();
  }
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  let modal = document.getElementById("cartModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

  document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    let emailInput = document.getElementById("emailInput");
    let errorMessage = document.getElementById("errorMessage");

    if (emailInput.value.trim() === "") {
      e.preventDefault(); // Prevent form submission
      errorMessage.style.display = "block"; // Show custom message
      emailInput.focus();
    } else {
      errorMessage.style.display = "none"; // Hide message when valid
    }
  });

