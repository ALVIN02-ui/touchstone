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


document.getElementById("readMoreBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  let moreContent = document.getElementById("moreContent");
  
  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block";
    this.textContent = "Read Less"; // Change button text
  } else {
    moreContent.style.display = "none";
    this.textContent = "Read More"; // Revert button text
  }
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting
  
  let isValid = true;
  const fields = [
    { id: "name", message: "Please enter your name" },
    { id: "email", message: "Please enter a valid email" },
    { id: "phone", message: "Please enter your phone number" },
    { id: "message", message: "Please enter your message" }
  ];
  
  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorMessage = input.nextElementSibling;
    
    if (input.value.trim() === "") {
      errorMessage.textContent = field.message;
      errorMessage.style.display = "block";
      isValid = false;
    } else {
      errorMessage.style.display = "none";
    }
  });
  
  if (isValid) {
    alert("Form submitted successfully!"); // Replace this with an actual form submission action
    this.submit();
  }
});
function addToCart(itemId, itemName, itemPrice) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push({ id: itemId, name: itemName, price: itemPrice });
  sessionStorage.setItem("cart", JSON.stringify(cart));
}


