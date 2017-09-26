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
