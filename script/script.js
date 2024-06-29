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
    function validateStep2() {
        const plan = document.getElementById("do it");
        const plan1 = document.getElementById("Arcade");
        const plan2 = document.getElementById("Advanced");
        const plan3 = document.getElementById("Pro");
        function setError(element) {
         element.style.color = "var(--strawberry-red)";
        }
    
        function clearError(element) {
            element.style.color = "";
        }
    
        if (plan1.classList.contains("selected") || plan2.classList.contains("selected") || plan3.classList.contains("selected")) {
            clearError(plan);
            return true;
        } else {
            setError(plan);
            return false;
        }
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
        if (validateStep2()) {
        currentStep = 2;
        showStep(currentStep);
        }
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

function selectplan(element) {
    // Deselect all elements
    document.querySelectorAll('.selected').forEach(selectedElement => {
        selectedElement.classList.remove('selected');
    });

    // Select the clicked element
    element.classList.add('selected');
}

// Add event listeners to all elements with the class "same"
Array.from(document.getElementsByClassName('same')).forEach(el => {
    el.addEventListener('click', function() {
        selectplan(this);
    });
});
// Get all elements with the class 'checkbox'
var checkboxes = document.getElementsByClassName('checkbox');

// Loop through each checkbox and add the event listener
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
        var addonDiv = this.parentElement.parentElement;
        if (this.checked) {
            addonDiv.style.borderColor = 'var(--purplish-blue)';
        } else {
            addonDiv.style.borderColor = 'var(--light-gray)';
        }
    });
}
const switcher = document.getElementById("switcher");
const plans = [document.getElementById("arcade"),document.getElementById("advanced"),document.getElementById("pro")];
const plansArray = Array.from(plans);
const addons =[document.getElementById("onlineService"),document.getElementById("largerStorage"),document.getElementById("customizableProfile")];
const addonsArray = Array.from(addons);
switcher.addEventListener("click", function () {
    plansArray.forEach((plan, index) => {
                if (switcher.checked) {
            switch (index) {
                case 0:
                    plan.parentElement.style.height = "10vw";
                    plan.innerHTML = "<h4>Arcade</h4 ><p>$90/yr</p><p class='free'>2 months free</p>";
                    break;
                case 1:
                    plan.parentElement.style.height = "10vw";   
                    plan.innerHTML = "<h4>Advanced</h4><p>$120/yr</p><p class='free'>2 months free</p>";
                    break;
                case 2:
                    plan.parentElement.style.height = "10vw";
                    plan.innerHTML = "<h4>Pro</h4><p>$150/yr</p><p class='free'>2 months free</p>";
                    break;
                default:
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    plan.parentElement.style.height = "9vw";
                    plan.innerHTML = " <h4>Arcade</h4><p>$9/mo</p>";
                    break;
                case 1:
                    plan.parentElement.style.height = "9vw";
                    plan.innerHTML = " <h4>Advanced</h4><p>$12/mo</p>";
                    break;
                case 2:
                    plan.parentElement.style.height = "9vw";
                    plan.innerHTML = " <h4>Pro</h4><p>$15/mo</p>";
                    break;
                default:
                    break;
            }
        }
    });
addonsArray.forEach((addon, index) => {
        if (switcher.checked) {
          switch (index) {
            case 0:
                addon.innerHTML="+$10/yr";
                break;
            case 1:
                addon.innerHTML="+$20/yr";
                break;
            case 2:
                addon.innerHTML="+$20/yr";
                break;
            default:
                break;
          }
        } else {
          switch (index) {
            case 0:
                addon.innerHTML="+$1/mo";
                break;
            case 1:
                addon.innerHTML="+$2/mo";
                break;
            case 2:
                addon.innerHTML="+$2/mo";
                break;
            default:
                break;
          }
        }
});});
