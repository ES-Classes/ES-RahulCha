//BMI = mass / height **2 = mass / (height * height) 
//(mass in kg and height in meter).

// 2022 Data 
console.log("For 2022 DATA")
let PrabinWt = 78;
let PrabinHt = 1.70;

let RamWT = 92;
let RamHt = 1.92;

let PrabinBMI = PrabinWt / PrabinHt ** 2;

console.log(PrabinBMI); 
let RamBMI = RamWT / RamHt ** 2;
console.log(RamBMI);

let prabinHigherBMI=( RamBMI > PrabinBMI) ? 'Smaller': 'Greater';
console.log(prabinHigherBMI);

// 2020 data 
console.log("For 2020 DATA")
 PrabinWt = 78;
 PrabinHt = 1.70;

 RamWT = 92;
 RamHt = 1.92;

  RamBMI = RamWT / RamHt ** 2;
  console.log(RamBMI);

   PrabinBMI = PrabinWt / PrabinHt ** 2;

console.log(PrabinBMI); 
 prabinHigherBMI=( RamBMI > PrabinBMI) ? 'Smaller': 'Greater';
console.log(prabinHigherBMI);