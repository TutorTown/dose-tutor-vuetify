// import Answer from '../classes/Answer';
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
	getters: {
		currentStep(state) {
			// Return Substep if it is set
			if (state.subStepIndex !== null) {
				return state.problem.mainStep.subSteps[state.stepIndex].subSteps[state.subStepIndex];
			// If step but no substep, return current step
			} else if (state.stepIndex !== null) {
				return state.problem.mainStep.subSteps[state.stepIndex];
			// If no substep, return main step
			} else {
				return state.problem.mainStep;
			}
		},
	},
	mutations: {
		// wrongAnswer(state, value) {
		// 	// state.getters.currentStep.submittedAnswers.push(value);
		// }
	},
	actions: {
		submitAnswer(context, value) {
			console.log(`Checking answer ${value}`);
			console.log(context.getters.currentStep);
			const res = context.getters.currentStep.checkAnswer(value);
			console.log(res);
			return Promise.resolve(res);
			// if (res.correct) {
			// 	// handle correct answer
			// } else {
			// 	// context.commit('wrongAnswer', value);
			// 	// context.getters.currentStep.submittedAnswers.push(new Answer({value: value, correct: false,}));
			// }
		}
	},
}
