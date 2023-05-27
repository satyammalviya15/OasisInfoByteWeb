// Get the login form
const loginForm = document.getElementById("login-form");

// Add event listener for login form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform login validation (dummy validation in this example)
  if (username === "admin" && password === "admin123") {
    // Show the order container
    document.getElementById("order-container").style.display = "block";
    // Hide the login container
    document.querySelector(".login-container").style.display = "none";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

// Get the order form
const orderForm = document.getElementById("order-form");

// Add event listener for order form submission
orderForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected pizza type, size, delivery address, and contact number
  const pizzaType = document.getElementById("pizza-type").value;
  const pizzaSize = document.getElementById("pizza-size").value;
  const deliveryAddress = document.getElementById("delivery-address").value;
  const contactNumber = document.getElementById("contact-number").value;

  // Perform order processing (dummy processing in this example)
  alert(
    `Your order: ${pizzaSize} ${pizzaType} pizza\nDelivery Address: ${deliveryAddress}\nContact Number: ${contactNumber}\n\nThank you for placing your order!`
  );

  // Reset the order form
  orderForm.reset();
});
