# Conditionals

## Be declarative if possible!

> Imperative example

```javascript
function squareNumbers(array) {

  for (var i = 0; i < array.length; i++) {
    array[i] *= array[i];
  }
  return array;
}

var numbers = [1, 2, 3, 4, 5];
squareNumbers(numbers);
```

> Declarative example

```javascript
function squareNumbers(array) {
  return array.map(val => val * val);
}

var numbers = [1, 2, 3, 4, 5];
squareNumbers(numbers);
```

**Notice** that the imperative approach requires specifying:

* How to loop through the array
* the order of the loop
* Logic

Where the declarative version you have to specify:

* Logic

### Benefits from declarative programming
* minimizes mutability
* reduces state side-effects
* leads to more understandable code
* is just more scalable

## Intermediate variables & Magic numbers

> Bad example

```javascript 
if (employee.age > 50) {
  // do something
}
if (employeeType === 'manager') {
  // do stuff
}
```

> Good example

```javascript
if (employee.age > pensionAge) {
  // do something
}
if (employeeType === employeeTypes.manager) {
  // do stuff
}
```

Prefer variables to be expressive!

**Notice**:
how in the bad example you have no idea what the intent of the number or string actually is, which might require a comment, but can be avoid as seen in good example and there is no magic numbers!

### Benefits
* Avoids noone knows what the magic numbers is
* Avoids typos using variables instead of strings
* Makes the code more searchable
* Gives intellisense support

## Ternary can be elegant

> Bad example 

```javascript
var registrationFee;

if (isSpeaker) {
  registrationFee = 0;
} else {
  registrationFee = 50;
}
```

```javascript
var registrationFee = isSpeaker ? 0 : 50;
```

**Notice**:

* You only have to write out the varible once.
* Fewer lines (yay!)
* Easier to read

## Don't be anti-negative

> bad example

```javascript
if (!IsNotLoggedIn) {
  // do stuff
}
``` 
> good example

```javascript
if (loggedIn) {
  // do stuff
}
``` 

Use positive conditionals, it is much easier/faster to decode when reading it

## Evaluate booleans implicitly

> Bad example

```javascript
if (loggedIn === true) {
  // do stuff
}
```

> Good example

```javascript
if (loggedIn) {
  // do stuff
}
```

Try saying both out loud, the second comes out as more natural language and it is less verbose. Which means it is easier to read as well.
