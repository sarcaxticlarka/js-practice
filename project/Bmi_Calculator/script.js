const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value); // Use parseFloat to handle decimal values
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const guide = document.querySelector(".guide");

    // Clear previous results
    results.innerHTML = "";
    guide.innerHTML = "";
    guide.style.backgroundColor = "yellow"

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please provide a valid weight.";
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(1); // Fixed to 1 decimal place
        results.innerHTML = `Your BMI is <span>${bmi}</span>`;

        // Determine BMI category
        if (bmi < 18.5) {
            guide.innerHTML = `<span>Your BMI is ${bmi} and you are underweight.</span>`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            guide.innerHTML = `<span>Your BMI is ${bmi} and you are in the normal weight range.</span>`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            guide.innerHTML = `<span>Your BMI is ${bmi} and you are overweight.</span>`;
        } else {
            guide.innerHTML = `<span>Your BMI is ${bmi} and you are in the obese range.</span>`;
        }

    }
});
