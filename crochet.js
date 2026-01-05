// PRODUCT DATA
const products = [
  { name: "Crochet Bag", category: "bag", image: "bag.jpeg", price: "₹399" },
  { name: "Handmade Tote", category: "bag", image: "bag2.jpg", price: "₹70" },
  { name: "Crochet Top", category: "top", image: "top1.jpg", price: "₹70" },
  { name: "Evileye Keychain", category: "keychain", image: "evileye.jpeg", price: "₹80" },
  { name: "Sunflower Keychain", category: "keychain", image: "sunflower.jpeg", price: "₹70" },
  { name: "Cherry Keychain", category: "keychain", image: "cherry.jpeg", price: "₹70" },
  { name: "Lily Flower", category: "flower", image: "lily.jpeg", price: "₹90" }
];

const productList = document.getElementById("productList");

// SHOW PRODUCTS
function displayProducts(items) {
  productList.innerHTML = "";

  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
    `;

    productList.appendChild(div);
  });
}

// FILTER PRODUCTS
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// INITIAL LOAD
displayProducts(products);

