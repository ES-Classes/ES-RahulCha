//Unary operators 
// let isEven = x % 2;

//Comparison
let x;
let s = x == '90';

console.log(s);

 s = x === '90';
 console.log(s);

s = x !== '90';
console.log(s);
s=x <= '90';

//logcial 
let ss;
let t = s && ss;

t =false && ss; //anything

t=s || ss;
t= true || ss;


const u = x ?? "Daniel"; //Nullish(null or undefined ) coalescing operator

console.log(u);


let v = x === 90 ? 45 : 89; //ternary operator


let w = x ++ + 45 >> 2 <= 34 ^ 4 & 9;
console.log(w);