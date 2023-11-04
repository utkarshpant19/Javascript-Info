
// Nested Functions

function fullName(firstName, lastName){


    function getFullName(){
        return `${firstName} ${lastName}`
    }

    console.log('Hi ', getFullName());
    console.log('Bye ', getFullName());
}

function makeCounter(){

    let count=0;

    return function(){
        return count++;
    }
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); //1
console.log(counter()); // 2





