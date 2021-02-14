// startsWith(searchString, position) – check a string starts with another string.

const message = "Hello I am learning js";
document.write(`${message.startsWith('Hello')} <br>`);
document.write(`${message.startsWith('hello')} <br>`);


// startsWith(searchString, length) – check a ends starts with another string.

document.write(`${message.endsWith('js')} <br>`);
document.write(`${message.endsWith('Js')} <br>`);


// startsWith(searchString, position) – check if a string contains  another string.

document.write(`${message.includes('learning')} <br>`);
document.write(`${message.includes('Learning')} <br>`);