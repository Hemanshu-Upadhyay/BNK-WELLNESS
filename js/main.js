// Global State & Utilities

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Only run homepage logic if elements exist
    if(document.getElementById('categories-container')) {
        renderCategories();
    }
    if(document.getElementById('products-container')) {
        renderFeaturedProducts();
    }
});

// Render Categories
function renderCategories() {
    const container = document.getElementById('categories-container');
    if(!container) return;

    container.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterProducts('${cat.id}')">
            <img src="${cat.image}" alt="${cat.name}">
            <div class="category-overlay">
                <h3>${cat.name}</h3>
            </div>
        </div>
    `).join('');
}

// Render Featured Products
function renderFeaturedProducts(categoryFilter = null) {
    const container = document.getElementById('products-container');
    if(!container) return;

    let displayProducts = products;
    if(categoryFilter) {
        displayProducts = products.filter(p => p.category === categoryFilter);
        // Update section title
        const title = document.querySelector('#products .section-title');
        if(title) title.innerText = categories.find(c => c.id === categoryFilter).name;
    }

    container.innerHTML = displayProducts.map(p => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <a href="product-detail.html?id=${p.id}">
                    <img src="${p.image}" alt="${p.name}">
                </a>
                <button class="quick-add-btn" onclick="addToCart(${p.id})">ADD TO CART</button>
            </div>
            <div class="product-info">
                <span class="product-category-label">${categories.find(c => c.id === p.category)?.name || p.category}</span>
                <a href="product-detail.html?id=${p.id}">
                    <h3 class="product-name">${p.name}</h3>
                </a>
                <div class="price-row">
                    <span class="price-current">₹${p.price}</span>
                    <span class="price-original">₹${p.originalPrice}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter function called by Category Cards
function filterProducts(categoryId) {
    renderFeaturedProducts(categoryId);
    const productsSection = document.getElementById('products');
    if(productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cart Management
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('bnk_cart')) || [];
    
    const existingItem = cart.find(item => item.productId === productId);
    if(existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ productId: productId, qty: 1 });
    }

    localStorage.setItem('bnk_cart', JSON.stringify(cart));
    updateCartCount();
    showToast();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('bnk_cart')) || [];
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const countEl = document.getElementById('cart-count');
    if(countEl) countEl.innerText = count;
}

// Toast Notification
function showToast() {
    const toast = document.getElementById('toast');
    if(toast) {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}
