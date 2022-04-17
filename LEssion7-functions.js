/* function printHello(name) {
    console.log(`Hello! ${name}`);
}

printHello('BISHNU BOSS');


//ArrowFunction
let x =(name) => `Hello! ${name}` ;
let formatName = (firstName, lastName) => `Hello! ${lastName}, ${Namefirst}`;
*/ 
function factorial(num) {
    if(num < 0) {
        return -1;
    }

    else if(num == 0 || num == 1) {
        return 1;
    }

    else {
       return( num * factorial(num - 1));
    }
}

factorial(5);