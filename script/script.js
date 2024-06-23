document.addEventListener('DOMContentLoaded', function () {
    const steps = [
        { id: 'Step1', display: 'block' },
        { id: 'Step2', display: 'block' },
        { id: 'Step3', display: 'flex' },
        { id: 'Step4', display: 'flex' },
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
    showStep(0);
    // Next Step buttons
    document.getElementById('NextStep1').addEventListener('click', function () {
        currentStep = 1;
        showStep(currentStep);
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

    // Initialize by showing the first step
    showStep(currentStep);
});
