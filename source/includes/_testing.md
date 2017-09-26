
# Testing

We are currently using the following tools for testing:

* <a href="https://facebook.github.io/jest/">Jest</a>, <a href="http://airbnb.io/enzyme/">enzyme</a> (Unit)
* <a href="https://docs.cypress.io/guides/getting-started/why-cypress.html">Cypress</a> (E2E)
* <a href="https://artillery.io/docs/">Artillery</a> (Load)

Which test approach should we follow?

* TDD
* BDD
* DDD

?

## Unit tests

> naming example

```javascript
describe('React components', () => {
  describe('when testing them', () => {
    it('should be fun')
    describe('when choosing the test runner', () => {
      it('should be Jest')
    })
  })
})
```

* Unit test files should be named the same as the file it is testing with post-fix `*.spec.js`
* Unit test files should be located as close to the file it is testing as possible
* Use jest snapshots to avoid spending time on mocking
* Like in the naming paragraph aim to write describe and it messages which is "natural language" (see example)

To run jest `yarn start jest`
## E2E

* When writing E2E make sure the test can be run completly separately without the need of relying on assumtions about present data or other tests/states
* E2E tests should be located separately from the project itself (currently in `/cypress`)

To run Cypress `yarn run cypress` (currently not supporting Windows)
