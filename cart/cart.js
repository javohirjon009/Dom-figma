document.addEventListener('DOMContentLoaded', function() {
    
    const quantityInputs = document.querySelectorAll('.quantity-selector input');
    const quantityUpButtons = document.querySelectorAll('.quantity-up');
    const quantityDownButtons = document.querySelectorAll('.quantity-down');
    const removeButtons = document.querySelectorAll('.remove-btn');


    const products = [
        { name: 'LCD Monitor', price: 650 },
        { name: 'HI Gamepad', price: 550 }
    ];

    quantityUpButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let currentValue = parseInt(quantityInputs[index].value);
            currentValue++;
            quantityInputs[index].value = currentValue.toString().padStart(2, '0');
            updateSubtotal(index, currentValue);
            updateCartTotal();
        });
    });
    
    quantityDownButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let currentValue = parseInt(quantityInputs[index].value);
            if (currentValue > 1) {
                currentValue--;
                quantityInputs[index].value = currentValue.toString().padStart(2, '0');
                updateSubtotal(index, currentValue);
                updateCartTotal();
            }
        });
    });
    
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateCartTotal();
            
            const cartBadge = document.querySelector('.fa-shopping-cart').nextElementSibling;
            let currentCount = parseInt(cartBadge.textContent);
            cartBadge.textContent = (currentCount - 1).toString();
        });
    });
    
    function updateSubtotal(index, quantity) {
        const subtotalElement = document.querySelectorAll('.subtotal-col')[index];
        const price = products[index].price;
        const subtotal = price * quantity;
        subtotalElement.textContent = '$' + subtotal;
    }

    function updateCartTotal() {
        const subtotals = document.querySelectorAll('.subtotal-col');
        let total = 0;
        
        subtotals.forEach(subtotal => {
            total += parseInt(subtotal.textContent.replace('$', ''));
        });
        
        document.querySelectorAll('.total-value').forEach(el => {
            el.textContent = '$' + total;
        });
    }
    });
    
