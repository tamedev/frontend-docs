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
