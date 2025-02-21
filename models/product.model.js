const db = require("../data/database");
class Product {
  constructor(productData) {
    this.title = productData.title;
    this.image = productData.image; // the name of image file
    this.imagePath = `product-data/images/${productData.image}`;
    this.summary = productData.summary;
    this.price = +productData.price;
    this.description = productData.description;
    this.imageUrl = `/products/assets/images/${productData.image}`;
  }

  async save() {
    const productData = {
      title: this.title,
      summary: this.summary,
      price: this.price,
      description: this.description,
      image: this.image,
    };
  await  db.getDb().collection("products").insertOne(productData);
  }
}

module.exports = Product;
