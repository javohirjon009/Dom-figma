document.addEventListener('DOMContentLoaded', function() {
   
    const userIcon = document.querySelector('.user-icon');
    const userDropdown = document.querySelector('.user-dropdown');
    
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        
        document.addEventListener('click', function closeDropdown(e) {
            if (!userIcon.contains(e.target)) {
                userDropdown.style.display = 'none';
                document.removeEventListener('click', closeDropdown);
            }
        });
    });
    
    function updateCountdown() {
        const now = new Date();
        const endDate = new Date(now);
        endDate.setDate(endDate.getDate() + 3);
        endDate.setHours(23, 59, 59);
        
        const diff = endDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);

    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const addToCartBtn = card.querySelector('.add-to-cart button');
        
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
        
            const cartBadge = document.querySelector('.cart-icon .badge');
            let currentCount = parseInt(cartBadge.textContent);
            cartBadge.textContent = (currentCount + 1).toString();
            
            alert('Product added to cart!');
        });
    });

    const categoryLinks = document.querySelectorAll('.categories li a');
    categoryLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#DB4444';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
});