import create from './index';

test('Should return the original value', () => {
	expect(create(() => () => 'Some Value')()).toBe('Some Value');
});

test('Should inject the update and the reconcile function', () => {
	let update, reconcile;

	create((u, r) => () => {
		update = u;
		reconcile = r;
	})();

	expect(typeof update).toBe('function');
	expect(typeof reconcile).toBe('function');
});

test('Should call the reconciler on state updates', () => {
	let update, oldState, newState;

	create((u, reconcile) => () => {
		update = u;

		return reconcile({some: 'value'}, (o, n) => {
			oldState = o;
			newState = n;
		});
	})();

	update(() => ({some: 'different value'}));

	expect(oldState).toMatchObject({some: 'value'});
	expect(newState).toMatchObject({some: 'different value'});
});
