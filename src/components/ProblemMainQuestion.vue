<template>
	<div id="main_question_wrapper">
		<v-card>
			<v-card-title>Main Question</v-card-title>

			<v-card-text> {{ prompt }} </v-card-text>

			<v-card-actions>
				<v-btn>BREAK INTO STEPS</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'MainQuestion',
	props: {
		prompt: String,
	}
}
</script>

<style type="scss" scoped>
	
</style>