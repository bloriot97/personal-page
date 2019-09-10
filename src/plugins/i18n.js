import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);


const messages = {
    en: {
        sections: {
            education: 'Education',
            personal_projects: 'Personal Projects',
            professional_experience: 'Professional Experience',
        },
        education: [
            {
                title: 'University of Technology of Compiègne',
                location: 'Compiègne',
                date: '2015-2021',
                description: 'lorem',
            },
            {
                title: 'École de technologie supérieure',
                location: 'Montréal',
                date: '2019-2021',
                description: 'lorem',
            },
        ]
    },
    fr: {
        sections: {
            education: 'Éducation',
            personal_projects: 'Projets Personnels',
            professional_experience: 'Expérience Professionnelle',
        },
    }
};

// eslint-disable-next-line
export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
 });