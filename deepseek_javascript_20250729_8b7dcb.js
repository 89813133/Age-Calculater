// Add this to the script section to make inputs more user-friendly
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('focus', function() {
        this.select(); // Select all text when clicking an input
    });
    
    // Auto-tab between fields
    input.addEventListener('input', function() {
        if (this.value.length >= this.maxLength) {
            const next = this.nextElementSibling?.querySelector('input');
            if (next) next.focus();
        }
    });
});