// Product array with id, name, and average rating
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the product name select element dynamically
const selectElement = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id; // Use ID as value (required by rubric)
  option.textContent = product.name; // Display name to user
  selectElement.appendChild(option);
});

// Optional: Add form validation feedback
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    // All validation is handled by HTML5 required attributes
    // This is just for future enhancements
  });
}
