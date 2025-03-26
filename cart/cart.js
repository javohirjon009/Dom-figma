document.addEventListener('DOMContentLoaded', function() {
    
    const quantityInputs = document.querySelectorAll('.quantity-selector input');
    const quantityUpButtons = document.querySelectorAll('.quantity-up');
    const quantityDownButtons = document.querySelectorAll('.quantity-down');

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
    });
    