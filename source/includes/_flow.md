# Flow

> Bad examples

```javascript
function method(func: Function) {
  func(1, 2);     // Works.
  func("1", "2"); // Works.
  func({}, []);   // Works.
}

method(function(a: number, b: number) {
  // ...
});
```

> Better examples

```javascript
function method(func: () => mixed)) {
  // ...
}

method(function(a: number, b: number) {
  // ...
});
```

> Good examples

```javascript
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 5);
```

* Implement flow everywhere
* Avoid using generic types, such as `any`, `Function`, `Object`, `Event`
* When adding flow to a file make sure it is cover to an acceptable level
* Sometimes it might be necessary to opt-out of the type checker (see example)
* Type out the function, Object etc.. if you know the structure
