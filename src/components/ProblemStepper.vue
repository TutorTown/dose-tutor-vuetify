<template>
	<v-card
		class="stepper"
	>
		<v-card-title>{{ header }}</v-card-title>
		<v-stepper
			v-model="currentStep"
			vertical
		>
			<v-stepper-step
				v-for="(step, index) in steps"
				:key="`step-${index}`"
				:step="index + 1"
				:complete="index < currentStep"
			>
				{{step.stepName}}
			</v-stepper-step>			
		</v-stepper>
	</v-card>
</template>

<script type="text/javascript">
export default {
	name: 'ProblemStepper',
	data: function() {
		return {
			currentStep: 0,
		}
	},
	computed: {
		header() {
			if (this.subStepper) {
				return 'Sub-Steps';
			}
			return 'Steps';
		}
	},
	props: {
		subStepper: {
			type: Boolean,
			default: false,
		},
		steps: {
			// type: Array,
			required: true,
		}
	},
}
</script>

<style scoped lang="scss">
	
</style>