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
        description: `I am a *computer science* student curious about everything but mostly interested in **data science**, **data engineering** and **web technologies**. 
        I am currently pursuing a double degree in France and Canada.`,
        email: 'bloriot97@gmail.com',
        phone_number: '(+33) 6 35 16 25 48',
        education: {
            ets: {
                title: 'Master of Engineering in Information Technology',
                location: 'École de technologie supérieure',
                location_link: 'https://www.etsmtl.ca/en/Home',
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
                location_link: 'https://www.ntua.gr/en/',
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
            dev: {
                title: 'Embedding of developers based on the libraries they use',
                link: 'docs/TX.pdf',
                location: 'University of Technology of Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Spring 2019',
                descriptions: [
                    {
                        body: 'The goal of this research project is to find new techniques to asses who are the core developers of a project.',
                        key_outcome: [
                            'Graph analysis',
                            'Co-clustering',
                        ],
                    },
                ],
            },
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
                location_link: 'https://www.combient.com/',
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
                location_link: 'https://www.kth.se/en',
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
                        level: 'Advanced, TOEIC 975'
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
                            'D3.js',
                            'Pandas ...'
                        ]
                    },
                    {
                        title: 'Programming languages',
                        content: [
                            'Python',
                            'Go',
                            'Javascript',
                            'HTML/CSS',
                            'Java',
                        ]
                    },
                    {
                        title: 'Front & Back',
                        content: [
                            'Vue',
                            'node.js',
                            'SQL',
                            'Graph-database (Neo4j, Dgraph)',
                            'MongoDB',
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
            education: 'Scolarité',
            professional_experience: 'Expérience professionelle',
            personal_projects: 'Projets personnels',
            school_projects: 'Projets scolaires',
            skills: 'Compétances',
        },
        description: 'I am a computer science student curious about everything but mostly interested in data science, data engineering and web technologies. I am currently pursuing a double degree in France and Canada.',
        email: 'bloriot97@gmail.com',
        phone_number: '(+33) 6 35 16 25 48',
        education: {
            ets: {
                title: 'Maîtrise en génie des technologies de l’information ',
                location: 'École de technologie supérieure',
                location_link: 'https://www.etsmtl.ca',
                geoLocation: 'Montréal, Canada',
                date: '2019-2021',
                descriptions: [
                    {
                        body: 'Approfondissement de mes connaissances en informatique notamment en interface humain-machine et sécurité internet. ',
                    },
                    {
                        body: 'Gestion de projets et gestion de portefeuille de projets.',
                    },
                ],
            },
            utc: {
                title: 'Diplôme d\'ingénieur en génie informatique filière Fouille de Données et Décisionnel',
                location_link: 'https://www.utc.fr',
                location: 'Université de technologie de Compiègne',
                geoLocation: 'Compiègne, France',
                date: '2015-2021',
                transcript: 'docs/transcript.pdf',
                descriptions: [
                    {
                        body: 'Étude en sciences de l’informatique, en recherche opérationnelle, statistiques, algèbre et programmation.',
                    },
                    {
                        body: 'Science et ingénerie des données, aide à la décision et calculs distribués',
                    },
                    {
                        body: 'Autres sujets de sciences tels que la physique ou la chimie, les humanitées and l\'économie.',
                    },
                ],
            },
            ntua: {
                title: 'Semestre d\'échange',
                location: 'Université polytechnique nationale d\'Athènes',
                location_link: 'https://www.ntua.gr/en',
                geoLocation: 'Athènes, Grèce',
                date: 'Printemps 2017',
                descriptions: [
                ],
            },
        },
        personal_projects: {
            names: {
                title: 'Visualisation des modes des prénoms de 1900 à aujourd\'hui',
                link: 'https://bloriot97.github.io/names/',
                date: 'Automne 2019',
                descriptions: [
                    {
                        body: 'Analyse des données et création d\'une visualisation intéractive.',
                        key_outcome: [
                            'Jupyter',
                            'Analyse de données',
                            't-SNE',
                            'Vue',
                        ],
                    },
                ],
            },
            hackathon: {
                title: 'Équipe gagnante du Hackathon UTC 2017',
                location: 'Université de technologie de Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Nov. 2017',
                descriptions: [
                    {
                        body: 'Conception d\'un protocole de comunication entre les voitures afin de partager les données provenant de leurs capteurs dans le but d\'augmenter la sécuritée.',
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
            dev: {
                title: 'Représentation des développeurs en fonction des paquets qu\'ils utilisent',
                link: 'docs/TX.pdf',
                location: 'Université de technologie de Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Printemps 2019',
                descriptions: [
                    {
                        body: 'Le but de ce projet de recherche est de trouver des nouvelles techniques pour évaluer qui sont les développeurs centraux d\'un projet.',
                        key_outcome: [
                            'Analyse de graph',
                            'Co-clustering',
                        ],
                    },
                ],
            },
            pollutrack: {
                title: 'Service de tracage de la pollution',
                location: 'Université de technologie de Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Hiver 2017',
                descriptions: [
                    {
                        body: 'Création d\'un appareil que l\'on place sur les bus pour tracer la pollution dans les villes avec plus de précison.',
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
                location: 'Université de technologie de Compiègne',
                geoLocation: 'Compiègne, France',
                date: 'Hiver 2017',
                descriptions: [
                    {
                        body: 'Un service de visualisation de graph qui permet aux étudiants de l\'utc d\'analyser et de planifier leur parcours académique.',
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
                title: 'Stage en développement',
                location: 'Combient',
                location_link: 'https://www.combient.com/',
                geoLocation: 'Stockholm',
                date: 'Été 2019',
                descriptions: [
                    {
                        body: 'Conception et implémentation d\'une solution pour mesurer la "santé" des communautés opensources.',
                        key_outcome: [
                            'Python',
                            'Dgraph',
                            'Data Science',
                        ],
                    },
                    {
                        body: 'Amélioration d\'une platforme pour collecter des information relatives au communautés de développeurs.',
                        key_outcome: [
                            'Go',
                            'Dgraph',
                        ],
                    },
                ],
            },
            kth: {
                title: 'Stage das un laboratoire de recherche',
                location: 'KTH Royal Institute of Technology',
                location_link: 'https://www.kth.se/en',
                geoLocation: 'Stockholm',
                date: 'Automne 2018',
                descriptions: [
                    {
                        body: 'Immersion  dans un laboratoire de recherche en informatique théorique.',
                    },
                    {
                        body: 'J’ai eu l’opportunité de travailler sur mon propre sujet de recherche et de collaborer à l\'écriture du papier associé. ',
                    },
                ],
            },
        },
        skills:{
            languages: {
                title: 'Languages',
                content: [
                    {
                        name: 'Francais',
                        level: 'Langue maternelle '
                    },
                    {
                        name: 'Anglais',
                        level: 'Avancé, TOEIC 975'
                    },
                    {
                        name: 'Espagnol',
                        level: 'Notions'
                    },
                ]
            },
            cs: {
                title: 'Computer',
                sections: [
                    {
                        title: 'Science des données',
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
                            'D3.js',
                            'Pandas ...'
                        ]
                    },
                    {
                        title: 'Languages de programmation',
                        content: [
                            'Python',
                            'Go',
                            'Javascript',
                            'HTML/CSS',
                            'Java',
                        ]
                    },
                    {
                        title: 'Front & Back',
                        content: [
                            'Vue',
                            'node.js',
                            'SQL',
                            'Graph-database (Neo4j, Dgraph)',
                            'MongoDB',
                        ]
                    },
                    {
                        title: 'Autre',
                        content: [
                            'CI/CD',
                            'Lecture & écriture de papiers scientifiques',
                            'Arduino',
                            'Latex',
                        ]
                    },
                ]
            },
            management: {
                title: 'Gestion',
                content: [
                    'Gestion de projets',
                    'Gestion de portefeuille de projets',
                ]
            },
        },
        more: 'plus d\'info',
        transcript: 'notes',
    }
};

// eslint-disable-next-line
export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
 });