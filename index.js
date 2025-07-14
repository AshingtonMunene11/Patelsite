// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            // You can add mobile menu functionality here
            alert('Mobile menu would open here. You can implement a sliding menu or dropdown.');
        });
    }
    
    // Rest of your existing code...
    const oddButtons = document.querySelectorAll('.odd-btn');
    
    oddButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('empty-betslip').classList.add('hidden');
            document.getElementById('betslip-items').classList.remove('hidden');
        });
    });
    
    oddButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 300);
        });
    });
});