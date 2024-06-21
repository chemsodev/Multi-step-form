document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Get references to all step elements
        const step1 = document.getElementById("Step1");
        const step2 = document.getElementById("Step2");
        const step3 = document.getElementById("Step3");
        const step4 = document.getElementById("Step4");
        const step5 = document.getElementById("Step5");

    // Step 2: Get references to Next Step buttons
        const nextStep1Btn = document.getElementById("NextStep");
        const nextStep2Btn = document.getElementById("NextStep2");
        const nextStep3Btn = document.getElementById("NextStep3");
        const nextStep4Btn = document.getElementById("NextStep4");

    // Step 3: Get references to Go Back buttons
        const goBack2Btn = document.getElementById("GoBack2");
        const goBack3Btn = document.getElementById("GoBack3");
        const goBack4Btn = document.getElementById("GoBack4");
        const goBack5Btn = document.getElementById("GoBack5");

    // Step 4: Add event listeners to Next Step buttons
        nextStep1Btn.addEventListener("click", function () {
        step1.style.display = "none";
        step2.style.display = "block";
        });

        nextStep2Btn.addEventListener("click", function () {
        step2.style.display = "none";
        step3.style.display = "block";
        });

        nextStep3Btn.addEventListener("click", function () {
        step3.style.display = "none";
        step4.style.display = "block";
        });

        nextStep4Btn.addEventListener("click", function () {
        step4.style.display = "none";
        step5.style.display = "block";
        });

    // Step 5: Add event listeners to Go Back buttons
        goBack2Btn.addEventListener("click", function () {
        step2.style.display = "none";
        step1.style.display = "block";
        });
        goBack3Btn.addEventListener("click", function () {
        step3.style.display = "none";
        step2.style.display = "block";
        });

        goBack4Btn.addEventListener("click", function () {
        step4.style.display = "none";
        step3.style.display = "block";
        });

        goBack5Btn.addEventListener("click", function () {
        step5.style.display = "none";
        step4.style.display = "block";
        });
        });