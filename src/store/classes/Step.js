import Answer from './Answer.js';

export function Step(config) {
	this.prompt = config.prompt; // [String] Question being asked this step
	this.stepName = config.stepName; // [String] Name of step e.g. 'Find the ferret's weight in pounds'
	this.correctAnswer = new Answer(config.correctAnswer);

	this.commonWrongAnswers = [];
	config.commonWrongAnswers.forEach((answer) => this.commonWrongAnswers.push(new Answer(answer)));

	this.subSteps = [];
	config.subSteps.forEach((step) => this.subSteps.push(new Step(step)));

	this.checkAnswer = function(guess) {
		res = {correct: false, match: null, message: ''};
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