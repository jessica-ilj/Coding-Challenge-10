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