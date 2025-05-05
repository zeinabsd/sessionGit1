
let n = 5; 
let fib = [];
for (let i = 0; i < n; i++) {
    if (i === 0) 
        fib.push(0);
     else if (i === 1) 
        fib.push(1);
     else {
        let next = fib[i - 1] + fib[i - 2];
        fib.push(next);
    }
}
console.log("فیبوناچی:", fib);