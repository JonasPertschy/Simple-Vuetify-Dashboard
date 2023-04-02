import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#ff6840',
            secondary: '#202020',
            background: '#f4f4f4',
            accent: '#ffffff',
            error: '#ffffff',
          },
        },
      },
});
