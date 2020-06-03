<template>
	<div id="main_question_wrapper">
		<v-card>
			<v-card-title>Main Question</v-card-title>

			<v-card-text> {{ prompt }} </v-card-text>

			<v-card-actions>
				<v-btn
					class="primary"
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
	name: 'MainQuestion',
	components: {
		ProblemAnswers,
	},
	props: {
		prompt: String,
		submittedAnswers: {
			type: Array,
		}
	}
}
</script>

<style type="scss" scoped>

.v-card__actions {
	display: flex;
	position: relative;
	justify-content: space-between;
}
</style>