// Form Validation Helper Functions

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^[\d\s+\-()]+$/;
    return phone.length >= 7 && regex.test(phone);
}

function validateForm(formInputs) {
    const errors = {};

    formInputs.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input) return;

        const value = input.value.trim();

        // Required field
        if (field.required && !value) {
            errors[field.id] = field.label + ' is required';
            input.classList.add('input-error');
            input.classList.remove('input-success');
            return;
        }

        // Email validation
        if (field.type === 'email' && value && !validateEmail(value)) {
            errors[field.id] = 'Please enter a valid email';
            input.classList.add('input-error');
            input.classList.remove('input-success');
            return;
        }

        // Phone validation
        if (field.type === 'phone' && value && !validatePhone(value)) {
            errors[field.id] = 'Please enter a valid phone number';
            input.classList.add('input-error');
            input.classList.remove('input-success');
            return;
        }

        // Min length validation
        if (field.minLength && value && value.length < field.minLength) {
            errors[field.id] = field.label + ' must be at least ' + field.minLength + ' characters';
            input.classList.add('input-error');
            input.classList.remove('input-success');
            return;
        }

        // If valid
        if (value) {
            input.classList.add('input-success');
            input.classList.remove('input-error');
            if (document.getElementById(field.id + 'Error')) {
                document.getElementById(field.id + 'Error').textContent = '';
            }
        }
    });

    return errors;
}

function displayErrors(errors) {
    Object.keys(errors).forEach(fieldId => {
        const errorElement = document.getElementById(fieldId + 'Error');
        if (errorElement) {
            errorElement.textContent = errors[fieldId];
        }
    });
}

function clearErrors() {
    document.querySelectorAll('.error-text').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('.input-error, .input-success').forEach(el => {
        el.classList.remove('input-error', 'input-success');
    });
}

function saveFormToLocalStorage(formName, data) {
    localStorage.setItem('form_' + formName, JSON.stringify(data));
}

function getFormFromLocalStorage(formName) {
    const data = localStorage.getItem('form_' + formName);
    return data ? JSON.parse(data) : null;
}

function showLoading(show = true) {
    const spinner = document.getElementById('loadingSpinner');
    const submitBtn = document.querySelector('button[type="submit"]');

    if (show) {
        if (submitBtn) submitBtn.style.display = 'none';
        if (spinner) spinner.style.display = 'block';
    } else {
        if (submitBtn) submitBtn.style.display = 'block';
        if (spinner) spinner.style.display = 'none';
    }
}

function showMessage(message, type = 'error') {
    const msgElement = document.getElementById('errorMessage');
    if (!msgElement) return;

    msgElement.style.display = 'block';
    msgElement.innerHTML = message;

    if (type === 'success') {
        msgElement.style.borderLeft = '4px solid #0b6b3a';
        msgElement.style.background = '#efe';
        msgElement.style.color = '#063';
    } else if (type === 'error') {
        msgElement.style.borderLeft = '4px solid #c33';
        msgElement.style.background = '#fee';
        msgElement.style.color = '#c33';
    } else if (type === 'warning') {
        msgElement.style.borderLeft = '4px solid #f39c12';
        msgElement.style.background = '#fff8e1';
        msgElement.style.color = '#7d6608';
    }
}

// Global styles to add to forms
const formStyles = `
    .error-message {
        background: #fee;
        color: #c33;
        padding: 12px;
        border-radius: 4px;
        margin-bottom: 15px;
        border-left: 4px solid #c33;
        display: none;
    }
    .error-text {
        color: #c33;
        font-size: 12px;
        display: block;
        margin-top: 4px;
    }
    input.input-error,
    select.input-error,
    textarea.input-error {
        border: 2px solid #c33 !important;
    }
    input.input-success,
    select.input-success,
    textarea.input-success {
        border: 2px solid #0b6b3a !important;
    }
    .loading-spinner {
        color: #0f766e;
        font-weight: bold;
        padding: 10px 0;
        display: none;
    }
    .progress-bar {
        width: 100%;
        height: 8px;
        background: #e0e0e0;
        border-radius: 4px;
        margin: 20px 0;
        overflow: hidden;
    }
    .progress-fill {
        height: 100%;
        background: #0b6b3a;
        width: 0%;
        transition: width 0.3s;
    }
    .form-navigation {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        gap: 10px;
    }
    .nav-btn {
        flex: 1;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: 0.2s;
    }
    .nav-btn-prev {
        background: #e0e0e0;
        color: #333;
    }
    .nav-btn-prev:hover {
        background: #d0d0d0;
    }
    .nav-btn-next {
        background: #0b6b3a;
        color: white;
    }
    .nav-btn-next:hover {
        background: #0f8f4b;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = formStyles;
document.head.appendChild(styleSheet);
