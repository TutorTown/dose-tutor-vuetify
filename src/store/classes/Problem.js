import Step from './Step.js'

export function Problem(config) {
	this.mainStep = new Step(config.mainStep);
}