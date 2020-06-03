import Step from './Step.js';

export default class Problem {
	constructor(config) {
		this.mainStep = new Step(config.mainStep);
	}
}