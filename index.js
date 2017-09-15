//
// Create a universal, stateful component
//
export default function factory (fn) {
	let state, onUpdate;

	//
	// The update function
	//
	const update = function update (reducer) {
		if (!state || !onUpdate) {
			return;
		}

		const newState = reducer(state);

		onUpdate(state, newState);

		state = newState;
	};

	//
	// The reconcile function
	//
	const reconcile = function reconcile (initialState, reconciler) {
		state = initialState;
		onUpdate = reconciler;
	};

	return fn(update, reconcile);
};
