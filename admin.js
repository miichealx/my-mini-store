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

// ✅ تحميل الطلبات عند فتح صفحة الادمن
const ordersList = document.getElementById("orders-list");

database.ref("orders").on("value", (snapshot) => {
  ordersList.innerHTML = ""; // تفريغ القائمة قبل إعادة العرض

  snapshot.forEach((childSnapshot) => {
    const order = childSnapshot.val();
    const orderId = childSnapshot.key;

    const div = document.createElement("div");
    div.classList.add("order-card", "p-3", "mb-3", "bg-light", "rounded");

    div.innerHTML = `
      <h5>🧾 Order ID: <span class="text-primary">${orderId}</span></h5>
      <p><strong>Name:</strong> ${order.name}</p>
      <p><strong>Email:</strong> ${order.email}</p>
      <p><strong>Address:</strong> ${order.address}</p>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Items:</strong></p>
      <ul>${order.items.map((item) => `<li>${item.name} - $${item.price}</li>`).join("")}</ul>
    `;

    ordersList.appendChild(div);
  });
});
