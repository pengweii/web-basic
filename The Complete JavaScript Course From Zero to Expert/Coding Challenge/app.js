const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

function BMI(mass, height) {
  return mass / Math.pow(height, 2);
}

const markBMI = BMI(markMass, markHeight);
const johnBMI = BMI(johnMass, johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);

console.log(markHigherBMI);