var person = [];

person.name = "Leon";
person.age = 61;

console.log(person);

console.log(person.name);
console.log(person.age);

console.log(person['name']);
console.log(person['age']);

person.evaluations = [7,10,9];

console.log(person.evaluations);

var newColors = ['groen', 'blauw', 'wit'];
console.log(newColors);
console.log(newColors.length);

console.log(newColors[newColors.length - 1]);

newColors.push('geel');
console.log(newColors);

newColors.push(5);
console.log(newColors);

newColors.push({greeting: 'Hi, ik ben een object'});
console.log(newColors);

console.log(newColors[newColors.length - 1]);
