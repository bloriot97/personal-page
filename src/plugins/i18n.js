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
        description: 'Computer Science Student Looking for an internship starting fall 2021. Plus I should put some more blabla. Even more and more and mooooore.',
        email: 'bloriot97@gmail.com',
        phone_number: '(+33) 6 77 96 17 22',
        github: 'https://github.com/bloriot97',
        education: {
            utc: {
                title: 'Master in Computer Science Engineering with a major in Data Mining',
                location_link: 'https://www.utc.fr/en.html',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: '2015-2021',
                descriptions: [
                    {
                        body: 'Indepth study in computer science, operational research, programing techniques, mathematics and statistics.',
                    },
                    {
                        body: 'Large variety of fields of study, including physics, chimistry, humanities and economy.',
                    }
                ],
            },
            ets: {
                title: 'Master of Information Technology Engineering',
                location: 'École de technologie supérieure',
                geoLocation: 'Montreal, Canada',
                date: '2019-2021',
                descriptions: [
                    {
                        body: 'Straightening of my knowledge in various fields of computer science including user interface, internet security.',
                    },
                    {
                        body: 'Managerial skill such as project management, and portfolio management.',
                    },
                ],
            },
            ntua: {
                title: 'Semester Abroad',
                location: 'National Technical University of Athens',
                geoLocation: 'Athens, Greece',
                date: 'Spring 2017',
                descriptions: [
                ],
            },
        },
        personal_projects: {
            names: {
                title: 'French names trend visualisation from the past century until today',
                link: 'https://bloriot97.github.io/names/',
                date: 'Fall 2019',
                descriptions: [
                    {
                        body: 'Creation of a device in order to track the pollution in cities with a better accuracy.',
                        key_outcome: [
                            'Jupyter',
                            'Data Analysis',
                            'Vue',
                        ],
                    },
                    {
                        body: 'Plus some business case related stuff..........'
                    },
                ],
            }
        },
        school_projects: {
            pollutrack: {
                title: 'Pollution tracking service',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Winter 2017',
                descriptions: [
                    {
                        body: 'Creation of a device in order to track the pollution in cities with a better accuracy.',
                        key_outcome: [
                            'Angular',
                            'node.js',
                            'Arduino',
                        ],
                    },
                ],
            },
            UViz: {
                title: 'UViz',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Winter 2017',
                descriptions: [
                    {
                        body: 'A graph visualization service that allows UTC students to analyse and plan their academic career.',
                        key_outcome: [
                            'Neo4J',
                            'Docker',
                            'node.js',
                        ],
                    },
                ],
            },
            hackathon: {
                title: 'Wining team of the Hackathon UTC 2017',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Nov. 2017',
                descriptions: [
                    {
                        body: 'Development of a concept of car network in order to improve security not only by communicating information but also by sharing sensors.',
                        key_outcome: [
                            'Arduino',
                            'C++',
                        ],
                    },
                ],
                moreInfo: {
                    pictures: ['hackathon.jpg'],
                    description: [
                        'Development of a concept of car network in order to improve security not only by communicating information but also by sharing sensors.',
                        'Development of a concept of car network in order to improve security not only by communicating information but also by sharing sensors.',
                        'Development of a concept of car network in order to improve security not only by communicating information but also by sharing sensors.',
                    ],
                }
            },
        },
        professional_experience: {
            combient: {
                title: 'Developer Intern Summer Internship',
                location: 'Combient',
                geoLocation: 'Stockholm',
                date: 'Summer 2019',
                descriptions: [
                    {
                        body: 'Design and development of a software to measure the health of open source communities.',
                        key_outcome: [
                            'Python',
                            'Dgraph',
                            'Data Science',
                        ],
                    },
                    {
                        body: 'Improvement of a platform to mine data from open source communities.',
                        key_outcome: [
                            'Go',
                            'Dgraph',
                        ],
                    },
                ],
            },
            kth: {
                title: 'Research Intern',
                location: 'KTH Royal Institute of Technology',
                geoLocation: 'Stockholm',
                date: 'Fall 2018',
                descriptions: [
                    {
                        body: 'On-the-job immersion into a computer science research lab. ' +
                            'I had the opportunity to work on my own project and to collaborate on the writing of a scientific paper.',
                    },
                ],
            },
        },
        more: 'see more',
    },
    fr: {
        sections: {
            education: 'Éducation',
            personal_projects: 'Projets Personnels',
            school_projects: 'Projets Étudiants',
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