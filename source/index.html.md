---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

Purpose: Write human readable code!

<aside class="notice">
Code reviews will be judged by the following
</aside>

# Principals

## Signal to noice ratio
What about your code? Surely that is all signal right? After all, we can’t delete 50% of the lines and leave the behaviour of the code intact. But the truth is that code can be written in a very noisy way. This happens when so much code for logging, or caching, or error handling, (or whatever) is mixed in that the structure and intent of the method in question is obscured from view.

The solution is simple: write clean code. Extract each task out into small, well-named helper methods or dependencies. This allows people to see the “signal” of what is going on, and only delve into the details that are of interest to them. Implementation details are usually noise.
### Signal
Logic that follows the TED rule:

* **T**erse
* **E**xpressive
* **D**o one thing

### Noise 

* High cyclomatic complexity
* Excessice indentation
* Zombie code
* Unnecessary comments
* Poorly named structures
* Huge classes
* Long methods
* Repetition
* No whitespace
* Overly verbose

## DRY
Simply do not repeat yourself, make abstractions to solve this.

### Helps
* Decrease signal to noice ratio
* Decrease number of lines of code

# Naming
This section is about assigning the correct naming conventions.

## General

> Bad example

```javascript
const p = [ 3, 6, 8 ];
let t = 0;
for(i in p) {
  t += i;
}
return t;
```

> Good example

```javascript
const prices = [ 3, 6, 8 ];
let total = 0;
for(price in prices) {
  total += price;
}
return total;
```
You should be able to read code like you would read a book


## Classes

> Bad example

```javascript
WebsiteBO
Utility
Common
MyFunctions
JimmysObjects
*Manager / *Processor / *Info
```

> Good examples

```javascript
User 
Account
QueryBuilder
ProductRepository
```

Guidelines:

* Noun
* Be specific
* Single Responsibility 
* Avoid generic suffices

## Functions/Methods

> Bad examples

```javascript
function Get()
function Process()
function Pending()
function Dolt()
function Start()
function On_Init, Page_Load(), etc..
```

> Good examples

```javascript
function GetRegisteredUsers()
function IsValidSubmission()
function ImportDocument()
function SendEmail()
```

Method names should be precise and explain exactly what it does

## Warning Signs

> Doing too much

```javascript
* And
* If
* Or
```

> Watch our for side effects

```javascript
* CheckPassword should not log users out.
* ValidateSubmission shouldn not save.
* GetUser shouldn not create their session.
* ChargeCreditCard shouldn not send emails.
```

If you find yourself adding these words to a function/method name it is most likely doing too much
## Abbreviations

> Bad examples

```javascript
var RegUsr
var Registuser
var RegiUser
var RegisterUsr
```

> Good example

```javascript
var RegisterUser
```
Avoid using abbreviations!

This will make it easier to talk about the code with others as it is natural language + there will be no misunderstanding around the abbreviations if there is none.



## Booleans

> Bad examples

```javascript 
var open
var start
var status
var login

if (login) {

}
```
> Good examples

```javascript 
var isOpen
var done
var isActive
var loggedIn

if (loggedIn) {
  
}
```
Boolean names should sound like true/false questions


### Be symmetrical

> Bad examples

```javascript 
var on, disabled
var quick, slow
var lock, open
var slow, max
```
> Good examples

```javascript 
var on, off
var fast, slow
var lock, unlock
var min, max
```

When dealing with states that toggle, consistently use matching pairs

## Summary

* Strive for specific class names
* The name should explain it all
* Watch out for function side effects
* Booleans should sound "truthy" and "falsy"
* When struggling find a name try, explain it out loud

# Classes

## When to create a class

* New concept: Abtract or real-world
* Low cohesion: Methods should relate
* Promote reuse: Small and targeted = reuse
* Reduce complexity: Solve once and then hide away
* Clarify parameters: Identify a group of data

## High Cohesion

> Low Cohesion

```javascript 
class Vehicle {
  editVehicleOptions()
  updatePricing()
  scheduleMaintenance()
  sendMaintenanceReminder()
  selectFinancing()
  calculateMonthlyPayment()
}
```

> High Cohesion

```javascript 
class Vehicle {
  editVehicleOptions()
  updatePricing()
}
class VehicleMaintenance {
  scheduleMaintenance()
  sendMaintenanceReminder()
}
class VehicleFinance {
  selectFinancing()
  calculateMonthlyPayment()
}
```

Classes responsibilties should be strongly related

* Enhances readability
* Increases likehood of reuse
* Avoid attracting lazy programmers

Watch out for

* Methods that don't interact with the rest of the class
* Fields that are only used by one method
* Classes that change often

## Primitive obsession

> Bad example

```javascript
function saveUser({ firstname, lastname, email, state, timezone, gender })
```

> Good example

```javascript
function saveUser(user)
```

Don't pass too many parameters

* Helps reader conceptualize
* Implicit => explicit
* Encapsulates
* Aids maintenance

# Functions/methods

## When to create functions

* To avoid duplication
* To avoid deep indentation
* To clearify an intent
* To avoid doing more than one task responsibility 

## Arrow code

> Extract method (Bad example)

```javascript
if
  if
    while
      /*
        Do 
        complex 
        logic here
      */
  else
else
```
> Extract method (Good example)

```javascript
if
  if
    doComplexLogic()
  else
else

doComplexLogic() {
  while
    // complex logic here
}
```

> Fail fast (Bad example)

```javascript
function registerUser(username, password) {
  if(username) {
    if(password) {
      // register user logic here
    } else {
      // return password validation error here
    }
  } else {
    // return username validation error here
  }
}
```

> Fail fast (Good example)

```javascript
function registerUser(username, password) {
  if(username) { /* return username validation error here */ }
  if(password) { /* return password validation error here */ }
  
  // register user logic here
}
```
Comprehension decreases beyond three levels of nested 'if' blocks
(Noam Chomsky and Gerald Weinberg)

### Solutions to arrow code

* Extract methods
* Fail fast
* Return early:
  use a return when it enhances readability. not returning immediately means that you have to write more code

## Convey intent

> Bad example

```javascript
// Check if for valid file extensions. Confirm admin or active
if ((fileExtension === 'mp4' ||
    fileExtension === 'mkv' ||
    fileExtension === 'avi')
    && isAdmin;
```

> Good example

```javascript 
if (ValidateFileRequest(fileExtension, isAdmin))

function ValidateFileRequest(fileExtension, isAdmin) {
  const validFileExtensions = ['mp4', 'mkv', 'avi'];

  const isValidFileType = validFileExtensions.includes(fileExtension);
  const userIsAllowedToViewFile = isAdmin;

  return isValidFileType && userIsAllowedToViewFile;
}
```

your code should in most cases be able to convey the intent without the need of comments as you see in the example. Notice how second examples doesn't need to comment (noice).
And notice how you cannot not be sure, in the first example, that the `fileExtension` variable is supposed to check if the file extensions are valid.

## Do one thing!

A function should ONLY do one thing and aids 

* Aids readability
* Promotes reuse
* Eases naming and testing
* Avoids side-effects

<aside class="notice">
also see <a href="?javascript#warning-signs">warning signs</a>
</aside>

## Watch for flag arguments

> Bad example

```javascript
function SaveUser(user, shouldEmailUser) {
  // saves user
  if(shouldEmailUser) {
    // email user
  }
}
```

> Good example

```javascript
function SaveUser(user) {
  // saves user
}
function EmailUser(user) {
 // email user 
}
```

Avoid flag arguments as that might mean that the function is doing more than one thing

## How many parameters?

> Bad example

```javascript
function saveUser(user, sendEmail, emailFormat, printReport, sendBill) {
  // probably too much going on here
}
```

* Strive for 0-2 parameters
* Makes testing easier
* Eases understanding
* Helps assure function does only one thing

## Sign that a function is too long

* Whitespace & Comments
* Scrolling required
* Naming issues
* Multiple conditionals 
* Hard to digest
* Hard to test

A function should:
* rarely be over 20 lines
* hardly ever over 100 lines
* have no more than 3 parameters
(<a href="https://en.wikipedia.org/wiki/Robert_Cecil_Martin">Robert C. Martin, "Clean Code"</a>)

**Bottom line**: Simple functions can be longer. Complex functions should be short.

## Exceptions

> Bad example

```javascript
try {

  // Many 
  // lines 
  // of 
  // logic 
  // here

} catch(e) {
  // catch the error here
}
```

> Good example

```javascript
try {
  doComplicatedThings();
} catch(e) {
  // catch the error here
}

function doComplicatedThings() {
  // Many 
  // lines 
  // of 
  // logic 
  // here
}
```

* Uncoverable
* Recoverable
* Ignorable

Keep the body small!

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

# Comments

## General rules

> Bad examples 

```javascript
var i = 1; // Set i = 1

// Check user account is deactivated
if (user.status === 2) // this should be refactored (see conditional rules)

// I was too tired to refactor this pile of spaghetti code

// Great sins against code
```

> Good examples 

```javascript
// see www.google.com/api for documentation

// logic for calculating ticket fee

// TODO: Refactor this anti-negative

// HACK: API does not expose needed call yet

```
* Prefer expressiv code over comments
* Use comments when code alone can't be sufficient
* Assume your reader can read
* Don't repeat yourself
* No apology comments (instead use TODO)
* No warning comments => refactor
* Change metadata belongs in source control, NOT comments

## Zombie code

Before out commenting code ask yourself:

* When, if ever, would this be uncommented?
* Can I just get it from the source control later?
* Is this incomplete work that should be worked via. a branch?
* Is this a feature that should be enable/disabled via. config/feature toggle?

# React

* Only one component allowed pr. file
* Though multiple stateless or pure components are allowed pr. file

## Stateless/Pure Components

> bad example

```javascript
const fn = ({ message }) => (
  <div>{message}</div>
)
```

> Good example

```javascript
function fn({ message }) {
  return <div>{message}</div>
}
```

## Naming

* Extensions: use `.js` always, not `.jsx`
* Use PascalCase for filenames e.g. NotificationCard
* Use camelCase for instances of the components
* Use `index.js` for root components and refer to directory for import

> bad examples

```javascript
import notificationCard from './NotificationCard'

const NotificationCard = <NotificationCard/>

import NotificationCard from './NotificationCard/NotificationCard'

import NotificationCard from './NotificationCard/index'
```

> good examples

```javascript
import NotificationCard from './NotificationCard'

const notificationCard = <NotificationCard/>

import NotificationCard from './NotificationCard'
```

Prefer normal functions over arrow functions. (see why <a href="https://github.com/airbnb/javascript/issues/794">here</a>)

## Props

> Always use camelCase for prop naming!

```javascript
<Component
  firstName=""
/>
```

> Boolean props should omit value

```javascript
<Component
  hidden
/>
```

> Never use index as key

```javascript
// BAD
const tasks = tasks.map((task, index) => <Task key={index} {..task}>)

// GOOD
const tasks = tasks.map((task) => <Task key={task.id} {..task}>)
```

### Prop rules

* Use camelCase for props
* Boolean omit value
* Use id not index for key
* Always define `defaultProp`

# Glossary

## Signal to Noise Ratio
The ratio of code that conveys intent
to cruft

## Side Effects 
When a method does more than what its name
describes. Avoid by refactoring to separate methods or
selecting a more descriptive name

## Magnet Class 
Class with ambiguous/high level name.
Attracts lazy developers and becomes a dumping ground for
unrelated logic. Characterized by low cohesion

## Cohesion 
A highly cohesive class has methods that revolve
around a common purpose and frequently interact. A class
with a clear responsibility should be highly cohesive.

## The Outline Rule 
Strive to structure your code like an
outline with multiple levels of abstractions. This aids the
reader by converting implicit concepts in named explicit
concepts. It also aids navigation when looking for bugs.

## Cyclomatic Complexity 
A measurement of the number of
discrete paths through the code. Higher complexity is
associated with difficulty reading, and more frequent bugs.

## Intermediate Variable 
A variable that clarifies intent by
providing a clear name to express the intent of a conditional.
Useful technique to avoid writing a comment.

## Zombie Code 
Code that is commented out in production.
Often code that was previously used in production or was
never completed. This noise that hinders reading and
refactoring. Move to a branch or delete.

## Stringly Typed 
Using strings in conditionals instead of
strongly typed alternatives like Booleans, enums or classes.
Strive to stay strongly typed when working in strongly typed
languages so you can lean on the compiler and enjoy
Intellisense support.

## Primitive Obsession 
Passing around a loose list of variables
between methods instead of defining a class to encapsulate
the concept.

## DRY 
Don’t repeat yourself. Each piece of logic/knowledge
should exist in one place.

## Return Early 
Return when there is nothing more to do in
the method.

## Fail Fast 
Throw an exception/return as soon as something
required is missing or something unexpected occurs. This
avoids failing slow which often masks the root cause.

## Fail slow 
Swallowing an exception or continuing processing
in a method when you already know that there’s no way the
logic can succeed. Strive to fail fast so the root cause of the
failure is easy to detect and unpredictable states aren’t
created.

## Table Driven Method 
A method whose data and/or logic is
driven via a data stored elsewhere (typically in a database or
configuration file).

## Mayfly Variables 
Variables that are initialized as late as
possible and removed from scope as early as possible. Like a
Mayfly, they have a very short lifespan. NOTE: Avoid this
technique in JavaScript due to hoisting.

## Broken Window Theory 
Don’t accept ugly hacks in the
code, despite the fact that there may already be flaws in the
system. Derived from a study that found once a window is
broken in an abandoned building it quickly falls into further
disrepair due to neglect.

## Boy Scout Rule 
When adding a feature or fixing a bug, strive
to leave the code a little better than you found it