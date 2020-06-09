// import Answer from '../classes/Answer';
import problem1 from '../mock_data/problem1';

const stepLevels = {
	main: 0,
	step: 1,
	subStep: 2,
}

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
		stepLevel(state) {
			if (state.stepIndex === null) {
				return stepLevels.main;
			} else if (state.subStepIndex === null) {
				return stepLevels.step;
			}
			return stepLevels.subStep;
		}
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
			if (res.correct) {
				if (context.getters.stepLevel === stepLevels.main) {
				// main problem correct => complete the problem

				} else if (context.getters.stepLevel === stepLevels.step) {
					// on 1st level step
				} else {
					// On substep
				}
			}
			return Promise.resolve(res);
			// if (res.correct) {
			// 	// handle correct answer
			// } else {
			// 	// context.commit('wrongAnswer', value);
			// 	// context.getters.currentStep.submittedAnswers.push(new Answer({value: value, correct: false,}));
			// }
		},
		breakIntoSteps(context) {
			if (context.getters.stepLevel === stepLevels.main) {
				context.state.stepIndex = 0;
			} else {
				context.state.subStepIndex = 0;
			}
		}
	},
}
