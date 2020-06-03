import Problem from '../classes/Problem.js';

/**
 * Step 1
 */
const step1a = {

};
const step1b = {

};
const step1c = {

}
const step1 = {
	prompt: `Use the given information to find the ferret's weight in pounds.`,
	stepName: `Find the ferret's weight in pounds`,
	correctAnswer: {
		value: 1.625,
		tolerance: .01,
		correct: true,
		message: 'Correct! The ferret weighs 1.625 pounds.'
	},
	subSteps: [step1a, step1b, step1c],
}

/**
 * Step 2
 */
const step2a = {

}
const step2b = {

}
const step2c = {

}
const step2 = {
	prompt: `What is the ferret's weight in kilograms? (one pound is .454 kilograms)`,
	stepName: `Convert the ferret's weight to kilograms`,
	correctAnswer: {
		value: .738,
		tolerance: .01,
		correct: true,
		message: 'Correct! The ferret weighs .738kg'
	},
	subSteps: [step2a, step2b, step2c],
}

/**
 * Step 3
 */
const step3a = {

};
const step3b = {

};
const step3c = {

};
const step3 = {
	prompt: `What is the required dose of Telazol in miligrams?`,
	stepName: `Calculate the required dose in miligrams`,
	correctAnswer: {
		value: 16.236,
		tolerance: .01,
		correct: true,
		message: 'Correct! The ferret needs 16.236 miligrams of Telazol',
	},
	subSteps: [step3a, step3b, step3c],
};

/**
 * Step 4
 */
const step4a = {

};
const step4b = {

};
const step4c = {

};
const step4 = {
	prompt: `What is the required dose in milliliters?`,
	stepName: `Convert the dosage to milliliters`,
	correctAnswer: {
		value: .162,
		tolerance: .01,
		correct: true,
		message: 'Correct! 16.236mg of Telazol will take up .162mL in your syringe',
	},
	subSteps: [step4a, step4b, step4c],
};

const config = {
	mainStep: {
		prompt: 
		`
			The veterinarian wants to use Telazol to restrain a ferret for a short diagnostic procedure. The dosage is 22 mg/kg IM. This ferret weighs 1 lb 10 oz. What is the required dose in milligrams and milliliters? 
			Note: 1 pound (lb) = .454kg and the density of Telazol is 100mg/mL. Use 3 decimal places. You may enter answers as calculations e.g. 2*4+1
		`,
		correctAnswer: {
			value: .162,
			tolerance: .01,
			correct: true,
			message: 'Excellent! You calculated the correct dose.',
		},
		subSteps: [
			step1,
			step2,
			step3,
			step4,
		],
	}
};

export const Problem1 = new Problem(config);