import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);


const messages = {
    en: {
        sections: {
            education: 'Education',
            personal_projects: 'Personal Projects',
            school_projects: 'School Projects',
            professional_experience: 'Professional Experience',
        },
        education: {
            utc: {
                title: 'Master in Computer Science Engineering with a major in Data Mining',
                location_link: 'https://www.utc.fr/en.html',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: '2015-2021',
                descriptions: [
                    'Indepth study in computer science, operational research, programing techniques, mathematics and statistics.',
                    'Large variety of fields of study, including physics, chimistry, humanities and economy.'
                ],
            },
            ets: {
                title: 'Master of Information Technology Engineering',
                location: 'École de technologie supérieure',
                geoLocation: 'Montreal, Canada',
                date: '2019-2021',
                descriptions: ['lorem'],
            },
            ntua: {
                title: 'Semester Abroad',
                location: 'National Technical University of Athens',
                geoLocation: 'Athens, Greece',
                date: 'Spring 2017',
                descriptions: ['lorem'],
            },
        },
        personal_projects: {
            names: {
                title: 'French name trend visualisation from the past century until today',
                link: 'https://bloriot97.github.io/names/',
                date: 'Fall 2019',
                techno: [
                    'Jupyter',
                    'Data Analysis',
                    'Vue',
                ],
                descriptions: [
                    'Creation of a device in order to track the pollution in cities with a better accuracy.',
                ],
            }
        },
        school_projects: {
            pollutrack: {
                title: 'Pollution tracking service',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Winter 2017',
                techno: [
                    'Angular',
                    'node.js',
                ],
                descriptions: [
                    'Creation of a device in order to track the pollution in cities with a better accuracy.',
                ],
            },
            UViz: {
                title: 'UViz',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Winter 2017',
                techno: [
                    'Neo4J',
                    'Docker',
                    'node.js',
                ],
                descriptions: [
                    'A graph visualization service that allows UTC students to analyse and plan their academic career.',
                ],
            },
            hackathon: {
                title: 'Wining team of the Hackathon UTC 2017',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Nov. 2017',
                techno: [
                    'Arduino',
                    'C++',
                ],
                descriptions: [
                    'Development of a concept of car network in order to improve security not only by communicating but also by sharing the sensors.',
                ],
            },
        },
        professional_experience: {
            combient: {
                title: 'Developer Intern Summer Internship',
                location: 'Combient',
                geoLocation: 'Stockholm',
                date: 'Summer 2019',
                descriptions: [
                    'Some description',
                ],
                techno: [
                    'Go',
                    'Python',
                    'Dgraph',
                ],
            },
            kth: {
                title: 'Research Intern',
                location: 'KTH Royal Institute of Technology',
                geoLocation: 'Stockholm',
                date: 'Fall 2018',
                descriptions: [
                    'Some description',
                ],
            },
        },
    },
    fr: {
        sections: {
            education: 'Éducation',
            personal_projects: 'Projets Personnels',
            school_projects: 'Projets Étudiants',
            professional_experience: 'Expérience Professionnelle',
        },
        education: {
            utc: {
                title: 'Diplôme d\'ingénieur en génie Informatique avec une spécialisation en fouille de données' ,
                location: 'Université de technologie de Compiègne',
                geoLocation: 'Compiègne',
                date: '2015-2021',
                descriptions: [
                    'Indepth study in computer science, operational research, programing techniques, mathematics and statistics.',
                    'Large variety of fields of study, including physics, chimistry, humanities and economy.'
                ],
            },
            ets: {
                title: 'Maitrise en genie des technologies de l\'information',
                location: 'École de technologie supérieure',
                geoLocation: 'Montréal',
                date: '2019-2021',
                descriptions: ['lorem'],
            },
            ntua: {
                title: 'Semestre d\'échange',
                location: 'Université polytechnique nationale d\'Athènes',
                geoLocation: 'Athènes',
                date: 'Printemps 2017',
                descriptions: ['lorem'],
            },
        }
    }
};

// eslint-disable-next-line
export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
 });