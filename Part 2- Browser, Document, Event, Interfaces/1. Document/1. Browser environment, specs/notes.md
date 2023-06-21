# Browser Environment

There’s a “root” object called window. It has two roles:
- First, it is a `global object` for JavaScript code
- Second, it represents the `“browser window”` and provides methods to control it.

```
function sayHi() {
  alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();

```
And we can use it as a browser window, to show the window height:

```
alert(window.innerHeight); // inner window height
```

## DOM (Document Object Model)

- The Document Object Model, or DOM for short, represents `all page content as objects` that can be modified.
- The `document` object is the main `“entry point”` to the page. We can change or create anything on the page using it.

```
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);
```

## BOM (Browser Object Model)

- The Browser Object Model (BOM) represents `additional objects` provided by the browser `(host environment)` for working with everything `except the document`.
 Ex- The `navigator object` provides background information about the browser and the operating system.
 - The `location object` allows us to read the current URL and can redirect the browser to a new one.
 - The BOM is a part of the general `HTML specification.`

 ## HTML Specification

 Describes the HTML language `(e.g. tags)` and also the `BOM (browser object model)` – various browser functions: `setTimeout`, `alert`, `location` and so on, see https://html.spec.whatwg.org. It takes the DOM specification and extends it with many additional properties and methods.