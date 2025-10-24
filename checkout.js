// ✅ ربط Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAK2MAer8SnP8NZqmE27rDMg3n2qBn7EyQ",
  authDomain: "my-mini-store-ef57a.firebaseapp.com",
  databaseURL: "https://my-mini-store-ef57a-default-rtdb.firebaseio.com",
  projectId: "my-mini-store-ef57a",
  storageBucket: "my-mini-store-ef57a.firebasestorage.app",
  messagingSenderId: "295106847721",
  appId: "1:295106847721:web:5ba2d342c3a994543f2178",
  measurementId: "G-DNDN4WRE5Y"
};

// ✅ تشغيل Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ✅ لما العميل يضغط "Place Order"
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("🛒 Your cart is empty!");
    return;
  }

  const newOrderRef = database.ref("orders").push();

  newOrderRef
    .set({
      name: name,
      email: email,
      address: address,
      items: cart,
      date: new Date().toLocaleString()
    })
    .then(() => {
      localStorage.removeItem("cart"); // 🧹 تفريغ السلة
      window.location.href = "success.html"; // ✅ تحويل لصفحة النجاح
    })
    .catch((error) => {
      console.error("Error adding order:", error);
      alert("⚠️ Failed to place order. Try again later.");
    });
});
