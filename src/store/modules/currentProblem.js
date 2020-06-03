import problem1 from '../mock_data/problem1';

const getDefaultState = () => {
	return {
		problem: null,
		stepIndex: null,
		subStepIndex: null,
	}
}

let initialState = getDefaultState();
initialState.problem = problem1;

export default {
	state: initialState,
	mutations: {

	},
	actions: {

	},
}
