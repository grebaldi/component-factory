# component-factory

> create universal, stateful components

## Installation

npm:
```
npm install --save @grebaldi/component-factory
```

yarn:
```
yarn add @grebaldi/component-factory
```

## Usage

```html
<div id="my-label"></div>
<button id="my-button"></button>
```

```js
import create from '@grebaldi/component-factory';

create((update, reconcile) => {
	const button = document.getElementById('#my-button');
	const label = document.getElementById('#my-label');

	button.addEventListener('click', () => update(
		state => ({
			...state,
			counter: state.counter + 1
		})
	));

	return reconcile({counter: 0}, (oldState, newState) => {
		if (oldState.counter !== newState.counter) {
			label.innerHTML = `Counter: ${newState.counter}`;
		}
	});
});
```

## License

MIT
