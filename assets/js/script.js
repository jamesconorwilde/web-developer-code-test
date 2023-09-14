const formSteps = document.querySelectorAll('.form-step');
const nextButtons = document.querySelectorAll('[id^="next-"]');
const prevButtons = document.querySelectorAll('[id^="prev-"]');
const sidebarLinks = document.querySelectorAll('.sidebar a');

let currentStep = 0;

function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
        if (index === stepIndex) {
            step.style.display = 'block';
        } else {
            step.style.display = 'none';
        }
    });
}

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

prevButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

sidebarLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentStep = index;
        showStep(currentStep);
    });
});

const planButtons = document.querySelectorAll('.plan-button');
const billingButtons = document.querySelectorAll('.billing-button');
const addonButtons = document.querySelectorAll('.addon-button');

// Handle plan button selection
planButtons.forEach((button) => {
    button.addEventListener('click', () => {
        planButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    });
});

// Handle billing button selection
billingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        billingButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    });
});

// Handle addon button selection
addonButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});


// Handle Step 4 confirmation
const confirmButton = document.querySelector('#confirm');
confirmButton.addEventListener('click', () => {
    currentStep = 4;
    showStep(currentStep);

    // Update the review sections with user selections
    const selectedPlan = document.querySelector('#selected-plan');
    const selectedBilling = document.querySelector('#selected-billing');
    const selectedAddonsList = document.querySelector('#selected-addons');

    const selectedPlanButton = document.querySelector('.plan-button.selected');
    if (selectedPlanButton) {
        selectedPlan.textContent = selectedPlanButton.querySelector('span').textContent;
    }

    const selectedBillingButton = document.querySelector('.billing-button.selected');
    if (selectedBillingButton) {
        selectedBilling.textContent = selectedBillingButton.querySelector('span').textContent;
    }

    const selectedAddonsButtons = document.querySelectorAll('.addon-button.selected');
    if (selectedAddonsButtons.length > 0) {
        selectedAddonsList.innerHTML = '';
        selectedAddonsButtons.forEach((button) => {
            const addonName = button.querySelector('span').textContent;
            const listItem = document.createElement('li');
            listItem.textContent = addonName;
            selectedAddonsList.appendChild(listItem);
        });
    }
});

// Handle plan button selection
planButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove the 'selected' class from all plan buttons
        planButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });
        // Add the 'selected' class to the clicked plan button
        button.classList.add('selected');
    });
});

// Handle billing button selection
billingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove the 'selected' class from all billing buttons
        billingButtons.forEach((btn) => {
            btn.classList.remove('selected');
        });
        // Add the 'selected' class to the clicked billing button
        button.classList.add('selected');
    });
});

// Handle addon button selection
addonButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Toggle the 'selected' class for the clicked addon button
        button.classList.toggle('selected');
    });
});
