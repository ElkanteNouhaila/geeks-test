db.products.insertMany([
  { name: "Laptop", category: "Electronics", price: 1200, stock: 100 },
  { name: "Headphones", category: "Electronics", price: 150, stock: 8 },
  { name: "Desk Lamp", category: "Home", price: 45, stock: 25 },
  { name: "Notebook", category: "Stationery", price: 5, stock: 3 },
  { name: "Coffee Maker", category: "Home", price: 80, stock: 12 }
]);

db.products.find({ stock: { $lt: 10 } });

db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
);

db.products.find().sort({ price: -1 }).limit(1);