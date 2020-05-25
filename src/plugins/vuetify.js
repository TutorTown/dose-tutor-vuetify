import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#219653', // green
				secondary: '#ffa000', // orange
			},
		},
	},
});
