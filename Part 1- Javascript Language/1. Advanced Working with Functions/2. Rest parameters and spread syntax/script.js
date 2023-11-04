

// REST Operator

function sumArgs(...args){ 

    let sum =0; 

    for(let i =0; i<args.length; i++){
        sum+=args[i];
    }

    return sum;
}

console.log(sumArgs(10,20,30));

// We can choose first parameters manually and gather all the rest

function intro(firstName, lastName, ...args){
console.log(firstName, lastName);
console.log(args.length);
}

intro('Utkarsh', 'Pant', 'Rewa', 'India');

// SPREAD Operator

// If we want to pass an array as list of arguments

let arr = [10,20,30];

function addArgs(){

}
addArgs(...arr); // Same as addArgs(10,20,30)
