// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header
            behavior: 'smooth'
        });
    });
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.btn-secondary');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').innerText;
        alert(`${productName} has been added to your cart!`);
    });
});

// View More Functionality
const viewMoreButtons = document.querySelectorAll('.btn-tertiary');
viewMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').innerText;
        alert(`You clicked to view more about ${productName}`);
    });
});
