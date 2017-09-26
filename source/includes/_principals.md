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
