console.log("✅ script.js loaded successfully");

// الدالة المسؤولة عن الإضافة للسلة
window.addToCart = function(productName, price) {
  console.log("addToCart called:", productName, price);

  // جلب البيانات القديمة من localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // إضافة المنتج الجديد
  cart.push({ name: productName, price: price });

  // حفظ السلة بعد التحديث
  localStorage.setItem("cart", JSON.stringify(cart));

  // رسالة للمستخدم
  alert(`${productName} added to cart ✅`);

  // التحويل لصفحة الدفع
  window.location.href = "checkout.html";
};
