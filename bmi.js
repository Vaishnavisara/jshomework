function BMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let result = document.getElementById("result") 
    let userBMI = Calculation(weight, height);

    if (userBMI <= 21) {
        console.log(result)
        result.innerHTML = `your BMI is ${userBMI}. You are underweight.`;
    } else if (userBMI <= 25 ) {
        console.log(result)
        result.innerHTML = `your BMI is ${userBMI}. You are in a healthy weight range.`;
    } else {
        console.log(result)
        result.innerHTML= `your BMI is ${userBMI}. You are overweight.`;
    } 
    
}

function Calculation(weight, height) {
    return weight / (height * height);
}
