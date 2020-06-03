/**
 * Represents a possible answer
 */
export function Answer(config) {
	this.value = config.value; // Correct answer
	this.tolerance = Math.abs(config.tolerance); // Amount answer may be off by to still match (count as this answer)
	this.correct = config.correct; // Whether answer is correct
	this.message = config.message; // Message when submits this answer (congratulations or explanation why it's wrong)
	/**
	 * Returns whether a tested value matches this answer
	 */
	this.isMatch = function(value) {
		return Math.abs(value - this.value) <= this.tolerance;
	}
}