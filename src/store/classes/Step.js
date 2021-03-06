import Answer from './Answer.js';

export default class Step {
	constructor(config) {
		this.prompt = Object.prototype.hasOwnProperty.call(config, 'prompt') ? config.prompt : null; // [String] Question being asked this step
		this.stepName = Object.prototype.hasOwnProperty.call(config, 'stepName') ? config.stepName : null; // [String] Name of step e.g. 'Find the ferret's weight in pounds'
		this.correctAnswer = Object.prototype.hasOwnProperty.call(config, 'correctAnswer') ? new Answer(config.correctAnswer) : null;
		this.submittedAnswers = [];
		this.commonWrongAnswers = [];
		if (Object.prototype.hasOwnProperty.call('commonWrongAnswers', config)) {
			config.commonWrongAnswers.forEach((answer) => this.commonWrongAnswers.push(new Answer(answer)));
		}

		this.subSteps = [];
		if(Object.prototype.hasOwnProperty.call(config, 'subSteps')) {
			config.subSteps.forEach((step) => this.subSteps.push(new Step(step)));
		}

		this.checkAnswer = function(guess) {
			const res = {correct: false, match: null, message: '', error: null};
			// Check if this answer was already submitted
			const matchedAnswer = this.submittedAnswers.find((answer) => guess === answer.value);
			if (matchedAnswer !== undefined) {
				res.error = 'You already tried that answer';
			}
			// Check if answer is correct
			else if (this.correctAnswer.isMatch(guess)) {
				res.correct = true;
				res.match = this.correctAnswer;
				res.message = this.correctAnswer.message;
				this.submittedAnswers.push(new Answer({value: guess, correct: true, message: res.message}));
			// Check guess against common wrong answers
			} else {
				this.commonWrongAnswers.forEach((answer) => {
					if (answer.isMatch(guess)) {
						res.match = answer;
						res.message = answer.message;
					}
				});
				this.submittedAnswers.push(new Answer({value: guess, correct: false, message: res.message}));
			}
			return res;
		}

	}
}