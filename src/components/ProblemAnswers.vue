<template>
	<div class="answers_wrapper">
		<h3>My Answers</h3>
		<div id="submitted-answers">
			
			<div
				v-for="answer in submittedAnswers"
				:key="answer.value"
				class="submitted_answer"
				:class="{ 'correct': answer.correct }"
			>
				{{ answer.value }}
			</div>
		</div>

		<div id="submit_answer">
			<v-text-field
				v-model="currentAttempt"
				@keydown.enter="submitAnswer(currentAttempt)"
			/>

			<v-btn
				class="submit"
				@click="submitAnswer(currentAttempt)"
			>
				Submit	
			</v-btn>
		</div>
		<v-snackbar
			:color="snackColor"
			v-model="showSnackbar"
		>
			{{snackText}}
		</v-snackbar>
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
			showSnackbar: false,
			snackText: '',
			snackColor: 'warning',
		}
	},
	methods: {
		checkAnswer(value) {
			return Math.abs(value - this.correctAnswer.value) <= this.correctAnswer.tolerance;
		},
		submitAnswer(value) {
			// const correct = this.checkAnswer(value);
			// this.$emit('submit', value);
			this.$store.dispatch('submitAnswer', value)
			.then((res) => {
				this.ssnackColor = 'info';
				if (res.error) {
					this.snackText = res.error;
					this.snackColor = 'error';
					this.showSnackbar = true;
				} else {
					if (res.correct) {
						this.snackColor = 'primary';
					}
					if (res.message) {
						this.snackText = res.message;
						this.showSnackbar = true;
					}
				}
				this.currentAttempt = '';
			});
		},
		submitIfEnter(event) {
			console.log(event);
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
	align-self: flex-end;

}

#submitted-answers {
	display: flex;
	position: relative;
	margin-bottom: 8px;
	flex-direction: row;
	flex-wrap: wrap;

}

	.submitted_answer {
		display: inline-block;
		position: relative;
		margin-right: 8px;
		margin-bottom: 8px;
		background-color: #ffa000;
		color: #FFFFFF;
		padding: 4px 16px 4px;
		border-radius: 16px;
	}
		.correct {
			background-color: #219653;
		}
</style>