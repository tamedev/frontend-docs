# Styling

> File name exmaple, scss file for <NotificationCard /> component

```javascript
notificationCard.scss
```

* Prefer to use `*.scss` for styling, as it is better at controlling styles than inline JS styling.
* Use camelCase for when naming the a `*.scss` file
* Name the `*.scss` the same as the `*.js` file it belongs to
* Locate the `*.scss` as close to the `*.js` file it belongs to

We are already using CSS modules so we won't experience encapsulation problems. Though this approach forces you to think about styling in a more component oriented way, which is good.
This also makes it easier to use scss variables like colors, and it also makes it easier to write responsive designs when media queries is needed.
