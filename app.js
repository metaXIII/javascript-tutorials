const start = [0,1,2,3];

let mapTest = start.map(e => console.log(e)) //0,1,2,3 print in console.log

let filtered = start.filter(e => e > 0).map(e => console.log(e)) //1,2,3

let findFirst = console.log(start.find(e => e >= 2)) // only 2

let findIndex = console.log(start.indexOf(3)) //3 position
let notfoundIndex = console.log(start.indexOf(4)) //-1

let filledValue = start.fill(1)
let filledValueAndStart = start.fill(5, 1)
let filledValueAndStartAndEnd = start.fill(0, 1, 3)
console.log(filledValue)
console.log(filledValueAndStart)
console.log(filledValueAndStartAndEnd)

//now start is 1,0,0,5

console.log(start.some(e => e === 0)) //true
console.log(start.every(e => e === 0)) //false, not everything is 0