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
const tasks = tasks.map((task, index) => <Task key={index} {..task}>);

// GOOD
const tasks = tasks.map((task) => <Task key={task.id} {..task}>);
```

### Prop rules

* Use camelCase for props
* Boolean omit value
* Use id not index for key
* Always define `defaultProps`

## Render function

> Bad example (bind)

```javascript
render() {
  return (
    <button onClick={this.handleClick.bind(this)}>Sad</button>
  )
}
render() {
  return (
    <button onClick={::this.handleClick}>Sad</button>
  )
}
```

> Not prefered experimental

```javascript
...
  // ES7 bind way
  this.handleClick = ::this.handleClick;
}
render() {
  return (
    <button onClick={this.handleClick}>Not prefered</button>
  )
}
```

> Not prefered but acceptable example (arrow)

```javascript
...
constructor(){
  super();
  this._handleclick = () => this.handleClick();
}
render() {
  return (
    <button onClick={this.handleClick}>alright</button>
  )
}
```

> Not prefered but acceptable example (arrow)

```javascript
...
  // ES7 way
  handleClick = () => this.handleClick();
}
render() {
  return (
    <button onClick={this.handleClick}>a bit better</button>
  )
}
```

> Good example (bind)

```javascript
...
constructor(){
  super();
  this.handleClick = this.handleClick.bind(this);
}
render() {
  return (
    <button onClick={this.handleClick}>Good</button>
  )
}
```

* Keep the render function as clean and lean as possible
* Don't use bind in the render function
* Don't use arrow functions in the render function

These will prevent the function from being re-created for each render.

<a href="http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html">Futher reasoning</a>
