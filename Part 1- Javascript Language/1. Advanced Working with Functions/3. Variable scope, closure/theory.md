# Variables and Scopes

## Blocks
If a variable is declared inside a block, then it's scope is inside that block only.

```
if(true){
    let message = 'Hello World';
    alert(message);
}
alert(message); // Error! message is not defined
```

## Lexical Environment

In JavaScript, every `running function`, `code block {...}`, and `the script as a whole` have an internal (hidden) associated object known as the `Lexical Environment`.

The `Lexical Environment object` consists of `two` parts:
- `Environment Record` – an object that stores all local variables as its properties (and some other information like the value of this).
- A reference to the `outer lexical environment`, the one associated with the outer code.


## Variables

A `variable` is just a property of the special internal object, Environment Record(Variable Store). “To get or change a variable” means “to get or change a property of that object”.

- When the script starts, the `Lexical Environment` is `pre-populated` with all declared variables.

- ### A variable is a `property` of a special internal object, associated with the currently executing `block/function/script`.
- ### Working with variables is actually working with the properties of that object.

## Function Declarations

- When a Lexical Environment is created, a `Function Declaration` immediately becomes a ready-to-use function (unlike let, that is unusable till the declaration).
- This behavior only applies to Function Declarations, `not Function Expressions` where we assign a function to a variable, such as `let say = function(name)....`

##  Inner and outer Lexical Environment

- When a function runs, at the beginning of the call, a `new Lexical Environment` is created automatically `to store local variables` and parameters of the call.

- **When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.**

##  Returning a function