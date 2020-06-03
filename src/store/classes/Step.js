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
			const res = {correct: false, match: null, message: ''};
			if (this.correctAnswer.isMatch(guess)) {
				res.correct = true;
				res.match = this.correctAnswer;
				res.message = this.correctAnswer.message;
			} else {
				this.commonWrongAnswers.forEach((answer) => {
					if (answer.isMatch(guess)) {
						res.match = answer;
						res.message = answer.message;
					}
				});
			}
			return res;
		}

	}
}