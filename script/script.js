document.addEventListener("DOMContentLoaded", function () {
    const steps = [
        { id: "Step1", display: "block" },
        { id: "Step2", display: "block" },
        { id: "Step3", display: "flex" },
        { id: "Step4", display: "block" },
        { id: "Step5", display: "flex" },
    ];
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((stepInfo, index) => {
            const stepElement = document.getElementById(stepInfo.id);
            if (index === step) {
                stepElement.style.display = stepInfo.display;
            } else {
                stepElement.style.display = "none";
            }
        });

        // Update active circle
        updateActiveCircle(step);
    }

    function updateActiveCircle(step) {
        const circles = document.querySelectorAll(".circle");
        circles.forEach((circle, index) => {
            if (index === step) {
                circle.classList.add("active-circle"); 
                circle.classList.add("active-circle-p");
            } else {
                circle.classList.remove("active-circle");
            }
        });
    }

    function validateStep1() {
        const nameElement = document.getElementById("name");
        const emailElement = document.getElementById("email");
        const phoneElement = document.getElementById("phone");

        const name = nameElement.value.trim();
        const email = emailElement.value.trim();
        const phone = phoneElement.value.trim();

        let isValid = true;

        // Helper functions to set and clear errors
        function setError(element, message) {
            let errorElement = element.previousElementSibling;
            if (errorElement && errorElement.className === "error-message") {
                errorElement.textContent = message;
            } else {
                errorElement = document.createElement("span");
                errorElement.className = "error-message";
                errorElement.style.color = "var(--strawberry-red)";
                errorElement.textContent = message;
                element.parentNode.insertBefore(errorElement, element);
            }
            element.style.borderColor = "var(--strawberry-red)";
        }

        function clearError(element) {
            let errorElement = element.previousElementSibling;
            if (errorElement && errorElement.className === "error-message") {
                errorElement.parentNode.removeChild(errorElement);
            }
            element.style.outlineColor = "";
        }

        // Validation logic
        if (name === "") {
            setError(nameElement, "This field is required");
            isValid = false;
        } else {
            clearError(nameElement);
        }

        if (email === "") {
            setError(emailElement, "This field is required");
            isValid = false;
        } else {
            clearError(emailElement);
        }

        if (phone === "") {
            setError(phoneElement, "This field is required");
            isValid = false;
        } else {
            clearError(phoneElement);
        }

        return isValid;
    }

    // Initialize by showing the first step
    showStep(currentStep);

    // Event listeners for Next Step buttons
    document.getElementById("NextStep1").addEventListener("click", function () {
        if (validateStep1()) {
            currentStep = 1;
            showStep(currentStep);
        }
    });

    document.getElementById("NextStep2").addEventListener("click", function () {
        currentStep = 2;
        showStep(currentStep);
    });

    document.getElementById("NextStep3").addEventListener("click", function () {
        currentStep = 3;
        showStep(currentStep);
    });

    document.getElementById("Confirm").addEventListener("click", function () {
        currentStep = 4;
        showStep(currentStep);
    });

    // Event listeners for Go Back buttons
    document.getElementById("GoBack2").addEventListener("click", function () {
        currentStep = 0;
        showStep(currentStep);
    });

    document.getElementById("GoBack3").addEventListener("click", function () {
        currentStep = 1;
        showStep(currentStep);
    });

    document.getElementById("GoBack4").addEventListener("click", function () {
        currentStep = 2;
        showStep(currentStep);
    });
});
