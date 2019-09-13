import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);


const messages = {
    en: {
        sections: {
            education: 'Education',
            professional_experience: 'Professional Experience',
            personal_projects: 'Personal Projects',
            school_projects: 'School Projects',
            skills: 'Language & Computer Skills',
        },
        description: 'Computer Science Student Looking for a graduate internship starting from fall 2021. Plus I should put some more blabla. Even more and more and mooooore.',
        email: 'bloriot97@gmail.com',
        phone_number: '(+33) 6 77 96 17 22',
        github: 'https://github.com/bloriot97',
        education: {
            ets: {
                title: 'Master of Engineering in Information Technology',
                location: 'École de technologie supérieure',
                geoLocation: 'Montreal, Canada',
                date: '2019-2021',
                descriptions: [
                    {
                        body: 'Straightening of my knowledge in various fields of computer science including user interface and internet security.',
                    },
                    {
                        body: 'Managerial skill such as project management, and portfolio management.',
                    },
                ],
            },
            utc: {
                title: 'Master of Engineering in Computer Science and Data Mining',
                location_link: 'https://www.utc.fr/en.html',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: '2015-2021',
                transcript: 'docs/transcript.pdf',
                descriptions: [
                    {
                        body: 'In-depth study in computer science, operational research, programing techniques, mathematics and statistics.',
                    },
                    {
                        body: 'Data science and engineering, decision support, and distributed computation.',
                    },
                    {
                        body: 'Large variety of fields of study, including physics, chimistry, humanities and economy.',
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
                        body: 'Analysis of the data, and creation of an interactive visualisation.',
                        key_outcome: [
                            'Jupyter',
                            'Data Analysis',
                            't-SNE',
                            'Vue',
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
                        body: 'Designing of a concept of a car network that improves security not only by communicating information but also by sharing sensors.',
                        key_outcome: [
                            'Arduino',
                            'C++',
                        ],
                    },
                ],
                moreInfo: {
                    pictures: ['hackathon.jpg'],
                    description: [
                        'During 24h we had the opportunity to design and implement a solution about the car of the future.',
                        'We formed a team of 7 students, 6 computer science engineering student background and one mechanical engineering student.',
                        'After some time we came up with a solution of sensor sharing between cars in order for them to have share knowledge at a lower level.',
                        'Then we decided to implement a small proof of concept, as we did not have access to a connected car we created our own.'
                    ],
                }
            },
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
        },
        professional_experience: {
            combient: {
                title: 'Developer Intern Summer Internship',
                location: 'Combient',
                geoLocation: 'Stockholm',
                date: 'Summer 2019',
                descriptions: [
                    {
                        body: 'Design and implementation of a software to measure the health of open source communities.',
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
                        body: 'On-the-job immersion into a computer science research lab.',
                    },
                    {
                        body: 'I had the opportunity to work on my own project and to collaborate on the writing of a scientific paper.',
                    },
                ],
            },
        },
        skills:{
            languages: {
                title: 'Languages',
                content: [
                    {
                        name: 'French',
                        level: 'Native'
                    },
                    {
                        name: 'English',
                        level: 'Advanced, TOEIC 875'
                    },
                    {
                        name: 'Spanish',
                        level: 'Basic notions'
                    },
                ]
            },
            cs: {
                title: 'Computer',
                sections: [
                    {
                        title: 'Data Mining',
                        content: [
                            'XGBoost',
                            't-SNE',
                            'PCA',
                            'Co-clustering',
                            'SVM',
                            'Random forest',
                            'Bayesian decision theory',
                            'distributed computation',
                            'Jupyter',
                            'Matplotlib',
                            'Seaborn',
                            'D3.js'
                        ]
                    },
                    {
                        title: 'Programming languages',
                        content: [
                            'Python',
                            'Go',
                            'Javascript',
                            'Java',
                            'Bash',
                            'R',
                        ]
                    },
                    {
                        title: 'Front & Back',
                        content: [
                            'node.js',
                            'SQL',
                            'Graph-database (Neo4j, Dgraph)',
                            'MongoDB',
                            'Vue',
                            'React (notions)',
                        ]
                    },
                    {
                        title: 'Other',
                        content: [
                            'CI/CD',
                            'Academic paper reading & writing',
                            'Arduino',
                            'Latex',
                        ]
                    },
                ]
            },
            management: {
                title: 'Management',
                content: [
                    'Project Management',
                    'Portfolio Management',
                ]
            },
        },
        more: 'see more',
        transcript: 'transcript',
    },
    fr: {
        sections: {
            education: 'Formation',
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