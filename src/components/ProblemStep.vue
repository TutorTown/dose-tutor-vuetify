<template>
	<div id="step_wrapper">
		<v-card>
			<v-card-title>{{isMainQuestion ? 'Main Question' : 'Current Step'}}</v-card-title>

			<v-card-text> {{ prompt }} </v-card-text>

			<v-card-actions v-if="isCurrentStep">
				<v-btn
					v-if="$store.getters.stepLevel < 2"
					class="primary"
					@click="breakIntoSteps"
				>
					BREAK INTO STEPS
				</v-btn>
				<problem-answers
					:submitted-answers="submittedAnswers"
					@submit="$emit('submit', $event)"
				/>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script type="text/javascript">
import ProblemAnswers from './ProblemAnswers.vue';

export default {
	name: 'ProblemStep',
	components: {
		ProblemAnswers,
	},
	props: {
		isCurrentStep: Boolean,
		prompt: String,
		submittedAnswers: {
			type: Array,
		},
		isMainQuestion: Boolean,
	},
	methods: {
		breakIntoSteps() {
			this.$store.dispatch('breakIntoSteps');
		},
	}
}
</script>

<style type="scss" scoped>

.v-card__actions {
	display: flex;
	position: relative;
	justify-content: space-between;
}
.v-card__text {
	text-align: left;
}

.answers_wrapper {
	max-width: 30%;
}
</style>