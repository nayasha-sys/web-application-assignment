
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    content.classList.toggle('show');
}


function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;
    

    clearErrors();
    
    
    if (name.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    } else {
        showSuccess('name');
    }
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    } else {
        showSuccess('email');
    }
    
    
    if (message.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    } else {
        showSuccess('message');
    }
    
    return isValid;
}


function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    
    field.classList.add('error');
    field.classList.remove('success');
    errorDiv.textContent = message;
}


function showSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('error');
    field.classList.add('success');
}


function clearErrors() {
    const fields = ['name', 'email', 'message'];
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        field.classList.remove('error', 'success');
        errorDiv.textContent = '';
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        if (validateForm()) {
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            
            
            button.innerHTML = 'Sending... ⏳';
            button.disabled = true;
            
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                
        
                document.getElementById('successMessage').classList.add('show');
                
                
                this.reset();
                clearErrors();
                
            
                setTimeout(() => {
                    document.getElementById('successMessage').classList.remove('show');
                }, 3000);
            }, 2000);
        }
    });
});