    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let resultmult= multiply(num1, num2);
                    let resultdiv=div(num1,num2);
                    let resultadd=add(num1,num2);
                    let resultsub=sub(num1,num2);
                    

                    // Display the result
                    displayResult(resultmult,resultdiv,resultadd,resultsub);
                } else {
                    displayResult('Please enter valid numbers');
                }
    }

    function multiply(a, b) {
                // Introduce a debugger statement to pause execution
               //// debugger;

                // Multiply the numbers
                return a * b;
    }
    function div(a,b){
       // debugger;
        return a/b;    }
    
    function add(a,b){
        //debugger;
        return a+b;
    }
    function sub(a,b){
        //debugger;
        return a-b;
    }

    function displayResult(resultmult,resultdiv,resultadd,resultsub) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                /*resultElement.textContent = `The result is: ${resultmult}`;
                resultElement.textContent = `The result is: ${resultdiv}`;
                resultElement.textContent = `The result is: ${resultadd}`;
                resultElement.textContent = `The result is: ${resultsub}`;*/
                resultElement.innerHTML=`<strong> Results:</strong><br>
                Addition:${resultadd}<br>
                Substraction:${resultsub}<br>
                Multiplication:${resultmult}<br>
                Division:${resultdiv};
                `
    }
        