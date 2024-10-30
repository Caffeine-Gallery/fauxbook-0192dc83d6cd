import { backend } from "declarations/backend";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const loadingSpinner = document.getElementById('loading');
    const createAccountBtn = document.getElementById('createAccount');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            loadingSpinner.style.display = 'block';
            
            const result = await backend.login(email, password);
            
            if (result.ok) {
                window.location.href = '/feed.html';
            } else {
                errorMessage.textContent = 'Invalid email or password';
                errorMessage.style.display = 'block';
            }
        } catch (error) {
            errorMessage.textContent = 'An error occurred. Please try again.';
            errorMessage.style.display = 'block';
        } finally {
            loadingSpinner.style.display = 'none';
        }
    });

    createAccountBtn.addEventListener('click', () => {
        // Redirect to signup page or show signup modal
        alert('Create Account functionality coming soon!');
    });
});
