// 

const cars = [];
for (let i = 0; i < 10; i++) {
  cars[i] = Math.floor(Math.random() * 99) + 1;
}
console.log('cars :>> ', cars);

//
cars.shift();
cars.pop();

//
cars.unshift(111);
cars.push(112);

//
console.log(cars.length);

//
const carsCopy1 = [...cars];
console.log('carsCopy1 :>> ', carsCopy1);

// 
for (let i = 0; i < cars.length; i += 2) {
console.log(`${i}: ${cars[i]}`);
}
//
let product = 1;
for (let i = 0; i < cars.length; i++) {
  product *= cars[i];
}
console.log('product', product);

//
const nonZero = cars.filter(num => num !== 0);
console.log(nonZero);

//
const divided = cars.map(num => num / 100);
console.log('divided :>> ', divided);

//
cars.forEach(num => console.log(num ** 3));

//
const index = cars.findIndex(num => num ** 2 === 100);
if (index !== -1) {
  cars.splise(index, 1);
  console.log('cars :>> ', cars);
} else {
  
}

//
const allEven = cars.every(num => num % 2 === 0);
console.log('allEven :>> ', allEven);