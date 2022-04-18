/* Arjun wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 10% if the bill value is between 50 and 300. If the value is different, the tip is 15%.
Your tasks:
Calculate the tip, depending on the bill value.
Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example:
“The bill was Rs. 200, the tip was Rs. 20, and the total is Rs. 220”

Test data:
Test for bill values 275, 40 and 430 */

function Calculator(bill) {



    let tip=0;
    if(bill >= 50 && bill ==300) {
         tip = bill * 10/100;
    }

    else {
        tip = bill * 15/100;
    }



    console.log(`THe bill was ${bill}, the tip was ${tip} and the total is ${bill + tip} ` );

}

Calculator(200);

//let Calculator = (tip, bill) => ()