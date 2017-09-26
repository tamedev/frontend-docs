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

**Notice**
That it is a lot harder to understand the intent and context of the code in the first example

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
