function ExampleConstructor() {

}

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeOf ExampleConstructor:', typeof ExampleConstructor.prototype);

var value = new ExampleConstructor();
console.log(value);

var checkInstance = value instanceof ExampleConstructor
console.log(checkInstance);
