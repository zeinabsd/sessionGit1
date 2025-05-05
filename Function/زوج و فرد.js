let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let countEven = 0;
let countOdd = 0;
for (let num of numbers) {
    if (num % 2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }
}
console.log(" زوج:", countEven);
console.log(" فرد:", countOdd);
