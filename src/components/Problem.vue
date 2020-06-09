<template>
<v-container>
	<v-row>
		<!-- Main Problem Body -->
		<v-col>
			<problem-main-question
				:is-current-step="$store.getters.stepLevel === 0"
				:prompt="prompt"
				:submitted-answers="submittedAnswers"
				@submit="handleSubmit($event)"
			/>
		</v-col>
		<v-col v-if="$store.getters.stepLevel > 0">
			BUTTS
		</v-col>
	</v-row>
	<problem-main-question
		v-if="$store.getters.stepLevel > 0"
		:is-current-step="true"
		:prompt="$store.getters.currentStep.propmt"
		:submitted-answers="submittedAnswers"
	/>
</v-container>
	
</template>

<script type="text/javascript">
import ProblemMainQuestion from './ProblemMainQuestion.vue'

export default {
	name: 'Problem',
	components: {
		ProblemMainQuestion
	},
	props: {

	},
	data: function() {
		return {
			// prompt: 'The veterinarian wants to use Telazol to restrain a ferret for a short diagnostic procedure. The dosage is 22 mg/kg IM. This ferret weighs 1 lb 10 oz. What is the required dose in milligrams and milliliters? Note: 1 pound (lb) = .454kg and the density of Telazol is 100mg/mL. Use 3 decimal places. You may enter answers as calculations e.g. 2*4+1',
			// submittedAnswers: [
			// 	{ text: 5.7, correct: false },
			// ],
		}
	},
	computed: {
		prompt() {
			return this.$store.state.currentProblem.problem.mainStep.prompt;
		},
		submittedAnswers() {
			return this.$store.getters.currentStep.submittedAnswers;
		},
	},
	methods: {
		handleSubmit(answer) {
			console.log('got submit in Problem.vue');
			console.log(answer);
			this.submittedAnswers.push(answer);
		},
	},
}

</script>

<style type="scss" scoped>
	
</style>