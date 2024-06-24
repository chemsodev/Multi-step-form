document.addEventListener('DOMContentLoaded', function () {
    const steps = [
        { id: 'Step1', display: 'block' },
        { id: 'Step2', display: 'block' },
        { id: 'Step3', display: 'flex' },
        { id: 'Step4', display: 'block' },
        { id: 'Step5', display: 'flex' }
    ];
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((stepInfo, index) => {
            const stepElement = document.getElementById(stepInfo.id);
            if (index === step) {
                stepElement.style.display = stepInfo.display;
            } else {
                stepElement.style.display = 'none';
            }
        });
    }

    function validateStep1() {
        const nameElement = document.getElementById('name');
        const emailElement = document.getElementById('email');
        const phoneElement = document.getElementById('phone');
    
        const name = nameElement.value.trim();
        const email = emailElement.value.trim();
        const phone = phoneElement.value.trim();
    
        let isValid = true;
    
        // Helper function to set the error message
        function setError(element, message) {
            let errorElement = element.previousElementSibling;
            if (errorElement && errorElement.className === 'error-message') {
                errorElement.textContent = message;
            } else {
                errorElement = document.createElement('span');
                errorElement.className = 'error-message';
                errorElement.style.color = 'var(--strawberry-red)';
                errorElement.textContent = message;
                element.parentNode.insertBefore(errorElement, element);
            }
            element.style.borderColor = 'var(--strawberry-red)';
        }
    
        // Helper function to clear the error message
        function clearError(element) {
            let errorElement = element.previousElementSibling;
            if (errorElement && errorElement.className === 'error-message') {
                errorElement.parentNode.removeChild(errorElement);
            }
            element.style.outlineColor = '';
        }
    
        if (name === '') {
            setError(nameElement, 'This field is required');
            isValid = false;
        } else {
            clearError(nameElement);
        }
    
        if (email === '') {
            setError(emailElement, 'This field is required');
            isValid = false;
        } else {
            clearError(emailElement);
        }
    
        if (phone === '') {
            setError(phoneElement, 'This field is required');
            isValid = false;
        } else {
            clearError(phoneElement);
        }
    
        return isValid;
    }
    

    // Initialize by showing the first step
    showStep(currentStep);

    // Next Step buttons
    document.getElementById('NextStep1').addEventListener('click', function () {
        if (validateStep1()) {
            currentStep = 1;
            showStep(currentStep);
        }
    });

    document.getElementById('NextStep2').addEventListener('click', function () {
        currentStep = 2;
        showStep(currentStep);
    });

    document.getElementById('NextStep3').addEventListener('click', function () {
        currentStep = 3;
        showStep(currentStep);
    });

    document.getElementById('Confirm').addEventListener('click', function () {
        currentStep = 4;
        showStep(currentStep);
    });

    // Go Back buttons
    document.getElementById('GoBack2').addEventListener('click', function () {
        currentStep = 0;
        showStep(currentStep);
    });

    document.getElementById('GoBack3').addEventListener('click', function () {
        currentStep = 1;
        showStep(currentStep);
    });

    document.getElementById('GoBack4').addEventListener('click', function () {
        currentStep = 2;
        showStep(currentStep);
    });
});
