import Vue from 'vue';
import Vuex from 'vuex';
import currentProblem from './modules/currentProblem';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		currentProblem,
	}
});