const loanForm = document.querySelector('#loan-form');
loanForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Computing the results
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    //Calculate
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    //Calculating the monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    //calculating the total interest
    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

    //calculating the total payment
    const totalPayment = (monthly * calculatedPayments).toFixed(2);

    //Display elements using DOM manipulation
    document.getElementById("monthlyPayment").innerHTML = "Ksh " + monthlyPayment;

    document.getElementById("totalInterest").innerHTML = "% " + totalInterest;

    document.getElementById("totalPayment").innerHTML = "Ksh " + totalPayment;
})