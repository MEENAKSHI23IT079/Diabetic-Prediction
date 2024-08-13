// Get references to DOM elements
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    // Retrieve height and weight values
    const height = parseInt(document.getElementById('height').value, 10);
    const weight = parseInt(document.getElementById('weight').value, 10);

    // Get references to result and error message elements
    const result = document.getElementById('output');
    const heightError = document.getElementById('height_error');
    const weightError = document.getElementById('weight_error');

    let heightStatus = false;
    let weightStatus = false;

    // Validate height
    if (isNaN(height) || height <= 0) {
        heightError.innerHTML = 'Please provide a valid height';
    } else {
        heightError.innerHTML = '';
        heightStatus = true;
    }

    // Validate weight
    if (isNaN(weight) || weight <= 0) {
        weightError.innerHTML = 'Please provide a valid weight';
    } else {
        weightError.innerHTML = '';
        weightStatus = true;
    }

    // Calculate and display BMI if both height and weight are valid
    if (heightStatus && weightStatus) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Underweight: ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal: ' + bmi;
        } else {
            result.innerHTML = 'Overweight: ' + bmi;
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});