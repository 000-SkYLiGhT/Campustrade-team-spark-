// Toggle Hamburger Menu
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Mock Data for Items
const items = [
    { title: "Engineering Math Textbook", price: "$15", img: "https://via.placeholder.com/250" },
    { title: "Scientific Calculator", price: "$10", img: "https://via.placeholder.com/250" },
    { title: "Electric Kettle", price: "$20", img: "https://via.placeholder.com/250" },
    { title: "Study Table Lamp", price: "$8", img: "https://via.placeholder.com/250" }
];

// Display Items on Page
const productGrid = document.getElementById('product-list');

items.forEach(item => {
    const card = `
        <div class="card">
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p style="color: #27ae60; font-weight: bold; margin-top: 5px;">${item.price}</p>
            <button style="width:100%; margin-top:10px; padding:8px; cursor:pointer;">View Details</button>
        </div>
    `;
    productGrid.innerHTML += card;
});