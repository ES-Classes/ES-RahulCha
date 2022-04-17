
const a = "Vedas";
const b = 'Vedas';
const c = `Vedas`;
const d = new String('Vedas');


console.log(a.length);
console.log(a.charAt(1));
console.log(a);

let cc ='क';
let ccc = 'क';
let dd= 'ख';

console.log(cc.localeCompare(ccc));


//TemplateLiteral
let para = `sdfsfsfs+ 
sdsdsdsd`;

//stromg interpolation
console.log(` My college is ${a + b + c} `); //stringma dynamic embbed garne