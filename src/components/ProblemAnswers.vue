<template>
	<div class="answers_wrapper">
		<h3>My Answers</h3>

		<div
			v-for="answer in submittedAnswers"
			:key="answer.text"
			class="submitted_answer"
			:class="{ 'correct': answer.correct }"
		>
			{{ answer.text }}
		</div>

		<div id="submit_answer">
			<v-text-field
				v-model="currentAttempt"
			/>

			<v-btn
				class="submit"
				@click="submitAnswer(currentAttempt)"
			>
				Submit	
			</v-btn>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'ProblemAnswers',
	props: {
		/*
		 * @example { value: 4.2, tolerance: .01 }
		*/
		correctAnswer: {
			type: Object
		},
		submittedAnswers: {
			type: Array,
		}
	},
	data: function() {
		return {
			currentAttempt: null,
		}
	},
	methods: {
		checkAnswer(value) {
			return Math.abs(value - this.correctAnswer.value) <= this.correctAnswer.tolerance;
		},
		submitAnswer(value) {
			const correct = this.checkAnswer(value);
			this.$emit('submit', {value: value, correct: correct});
		}
	}
}
</script>

<style type="scss" scoped>
.answers_wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;	
}

#submit_answer {
	display: inline-flex;

}

.submitted_answer {
	display: inline-block;
	position: relative;
	background-color: #ffa000;
	color: #FFFFFF;
	padding: 4px 16px 4px;
	border-radius: 16px;
}
</style>