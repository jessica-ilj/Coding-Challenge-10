// Product class
class Product {
    constructor(name, basePrice) {
      this.name = name;
      this.basePrice = basePrice;
      this.sizes = {}; // Holds size and price/availability
    }
  
    // Method to add sizes with specific prices and stock availability
    addSize(size, priceAdjustment, isAvailable) {
      this.sizes[size] = {
        priceAdjustment: priceAdjustment,
        isAvailable: isAvailable
      };
    }
  
    // Get the price based on the selected size
    getPrice(size) {
      return this.basePrice + (this.sizes[size]?.priceAdjustment || 0);
    }
  
    // Check if a specific size is available
    isAvailable(size) {
      return this.sizes[size]?.isAvailable || false;
    }
  }
  
  // Initialize product
  const product = new Product("Graphic Tee", 50);
  
  // Add sizes to the product
  product.addSize("small", 0, true);     // Small: $50, In Stock
  product.addSize("medium", 10, true);   // Medium: $60, In Stock
  product.addSize("large", 20, false);   // Large: $70, Out of Stock


// Get references to HTML elements
const productPriceElement = document.getElementById("product-price");
const sizeSelectorElement = document.getElementById("size-selector");
const purchaseButtonElement = document.getElementById("purchase-button");

// Update price and availability when a new size is selected
sizeSelectorElement.addEventListener("change", (event) => {
  const selectedSize = event.target.value;

  // Update the price display
  const updatedPrice = product.getPrice(selectedSize);
  productPriceElement.textContent = `Price: $${updatedPrice.toFixed(2)}`;

  // Handle availability status
  if (product.isAvailable(selectedSize)) {
    purchaseButtonElement.disabled = false; // Enable purchase button if in stock
  } else {
    purchaseButtonElement.disabled = true;  // Disable purchase button if out of stock
  }
});

// Handle the purchase button click
purchaseButtonElement.addEventListener("click", () => {
    const selectedSize = sizeSelectorElement.value;


  // Check if the selected size is available
  if (product.isAvailable(selectedSize)) {
    alert("Purchase successful!");
  } else {
    alert("This product is out of stock and cannot be purchased.");
  }
});

// Event delegation for dynamically adding new products
document.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (event.target.matches(".new-product-form")) {
      const newProductName = document.getElementById("new-product-name").value;
      const newProductPrice = parseFloat(document.getElementById("new-product-price").value);
  
      if (newProductName && !isNaN(newProductPrice)) {
        const newProduct = new Product(newProductName, newProductPrice);
        alert(`${newProductName} has been added with a base price of $${newProductPrice}.`);
      } else {
        alert("Please enter valid product details.");
      }
    }
  });
  