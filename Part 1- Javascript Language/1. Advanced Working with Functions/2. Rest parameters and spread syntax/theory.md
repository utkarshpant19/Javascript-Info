## REST Parameters and Spread Syntax

- Many JavaScript built-in functions support an arbitrary number of arguments.
  ex- Math.max(10,20,30,.....)
- REST operator (...) converts the passed arguments to a function parameters into an array
```
function sumArgs(...args){ // get the rest of the arguments in the args array

let sum = 0;

for(let i=0; i<args.lnegth; i++){
    sum+=args[i];
}

sumArgs(10,20,30);
}

```

## Spread Operator

- We can pass array as function parameters using Spread (...) syntax

```
let arr = [10,20,30];

Math.max(...arr); // Same as Math.max(10,20,30);
```