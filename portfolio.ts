import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'DJ\'s Portfolio',
  title: "Damien-Joseph Rispal",
  description:
    "French Engineer and Game Developer",
  resumeLink:
    '',
};

export const openSource = {
  githubUserName: 'drispal',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/rispal-dj/',
  github: 'https://github.com/drispal',
  itchio: 'https://fulgu.itch.io/',
};

export const skillsSection: SkillsSectionType = {
  title: 'Who I Am',
  subTitle: '',
  data: [
    {
      title: 'Game Developement',
      lottieAnimationFile: '/lottie/gamedev.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🎮 As a gameplay programmer, I possess a strong understanding of game design and mechanics, enabling me to bring creative ideas to life through coding.'),
        emoji('👨‍💻 Proficiency in programming languages such as C++ and C#, as well as experience with public game engines (Unity and Unreal).'),
        emoji('👥 I like collaborating with artists, designers, and other programmers to create engaging and immersive games.'),
      ],
      softwareSkills: [
        {
          skillName: 'Unity',
          fontAwesomeClassName: 'logos:unity',
        },
        {
          skillName: 'C Sharp',
          fontAwesomeClassName: 'teenyicons:c-sharp-solid',
        },
        {
          skillName: 'Unreal Engine',
          fontAwesomeClassName: 'fontisto:unreal-engine',
        },
        {
          skillName: 'C Plus Plus',
          fontAwesomeClassName: 'logos:c-plusplus',
        },
      ],
    },
    {
      title: 'Engineering',
      lottieAnimationFile: '/lottie/engineer.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🧮 Strong background in mathematics and physics and interest in sciences.'),
        emoji('✅ Proficient in programming languages such as C++, C#, Python, Java, and JavaScript.'),
        emoji('🔄 Understanding of software development life cycle and agile methodologies.'),
        emoji('🤖 Knowledge in various computer science fields such as Network and AI.'),
        emoji('🤝 Experienced in managing team and bring together the best of everyone.'),
      ],
      softwareSkills: [
        {
          skillName: 'Mathematics',
          fontAwesomeClassName: 'mdi:math-integral-box',
        },
        {
          skillName: 'Physics',
          fontAwesomeClassName: 'ph:atom',
        },
        {
          skillName: 'Network',
          fontAwesomeClassName: 'mdi:access-point-network',
        },
        {
          skillName: 'AI',
          fontAwesomeClassName: 'eos-icons:ai',
        },
        {
          skillName: 'Team Management',
          fontAwesomeClassName: 'fluent:people-team-16-regular',
        },
      ],
    },
    {
      title: 'Mobile/Web developement',
      lottieAnimationFile: '/lottie/mobdev.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🏛️ Skilled in Jetpack Compose and Flutter for mobile app development, with strong architecture knowledge.'),
        emoji('💥 Experienced in front-end frameworks like React and back-end development using Node.js, PHP and MySQL'),
        emoji('🚀 Experienced in UI/UX implementation and backend integration.'),
        emoji('🐞 Proficient in debugging, troubleshooting, and maintaining code quality with Git.'),
      ],
      softwareSkills: [
        {
          skillName: 'Android',
          fontAwesomeClassName: 'devicon:android',
        },
        {
          skillName: 'Jetpack Compose',
          fontAwesomeClassName: 'simple-icons:jetpackcompose',
        },
        {
          skillName: 'Flutter',
          fontAwesomeClassName: 'logos:flutter',
        },
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Threejs',
          fontAwesomeClassName: 'simple-icons:threedotjs',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'UQAC',
    subHeader: 'Master’s degree in video games',
    duration: '2022 - 2023',
    desc: 'University of Quebec in Chicoutimi, Canada. ',
    grade: '',
    descBullets: [
      'Processes of game making.',
      'Prototyping on Unreal and Unity.',
    ],
  }, {
    schoolName: 'INSA Lyon',
    subHeader: 'Computer Science Engineering degree',
    duration: '2020 - 2023',
    desc: 'French engineering school, ranked 1st in France for its research and 4th for its international outreach.',
    grade: '',
    descBullets: [
      'OOP (C++, Java) and programming (C, JavaScript).',
      'Computer architecture and network.',
      'High Level Algorithm, AI and data mining.',
      'Mathematics (Algebra, Probability, Statistics)',
      'Software engineering',
    ],
  },
  {
    schoolName: 'Lycée Descartes',
    subHeader: 'Higher School Preparatory Course MP/MP*',
    duration: '2018 - 2020',
    desc: 'Two years of intensive preparation for the national competitive entrance exams to the French engineering schools (Grandes Ecoles).',
    grade: '',
    descBullets: [
      'Mathematics (Algebra, Analysis, Geometry, Functions, Equations).',
      'Physics (Thermodynamics, Mechanics, Electrokinetic, Electromagnetism, Optics).',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Web developer',
    company: 'wiiCare',
    companyLogo: '/img/entreprises/wiicare.png',
    date: 'June 2021 – August 2021',
    desc: 'Development in full autonomy of a website. (no longer used)',
    descBullets: [
      "Using WordPress and PHP.",
      "Making custom packages and themes.",
    ],
  },
  {
    role: 'President',
    company: 'AEDI',
    companyLogo: '/img/entreprises/aedi.jpeg',
    date: 'May 2021 – May 2022',
    desc: 'President of a student union at INSA Lyon.',
    descBullets: [
      "Planning events and activities every two weeks.",
      "Managing a group of 30 and a 70K year budget.",
      "Discussion with mentorship companies.",
    ],
  },
  {
    role: 'Unity 3D VR Programmer',
    company: 'onepoint',
    companyLogo: '/img/entreprises/onepoint.png',
    date: 'May 2022 - Aug 2022',
    desc: 'Developed an online VR experience on unity.',
    descBullets: [
      "Improved game server with rooms features.",
      "Created image editor tool by working with shaders.",
    ],
  },
  {
    role: 'Gameplay Programmer Internship',
    company: 'Your company',
    companyLogo: '/img/hireMe.jpg',
    date: '6 Months starting September 2023',
    desc: '',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Hyperaustral',
    image: '/img/projects/hyperAustral.png',
    desc: 'Hyperaustral is a 2D top-down management game where you control a flying ark carrying survivors of an Earth catastrophe. You must manage resources, order passengers to perform tasks, and make quick decisions to keep them alive as you fly towards a landing strip. Random events and problems will eliminate passengers one by one, and only good management skills will prevent a disaster. The goal is to save enough passengers to win the game.',
    link: '',
  },
  {
    name: 'Messy Potions',
    image: '/img/projects/messyp.png',
    desc: 'Messy Potions is a 3D RPG where the player controls a young wizard named Audric. He creates potions that are rather strange in order to defeat his enemies throughout the different dungeons of the game.',
    link: 'https://zaksley.itch.io/messy-potions',
  },
  {
    name: 'Endless Ball',
    image: '/img/projects/endless.png',
    desc: 'Just a casual game that is not as easy at it looks like. Start from zero and try to reach the highest score by moving the ball towards obstacles.',
    link: 'https://fulgu.itch.io/endless-ball',
  },
  {
    name: 'SwearOff',
    desc: 'A simple AI to censure swear in youtube videos.',
    github: 'https://github.com/drispal/SwearOff',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Damien-Joseph RISPAL',
  description:
    'A passionate gameplay programmer.',
  author: 'Damien-Joseph RISPAL',
  image: 'https://media.licdn.com/dms/image/C4E03AQGRz0vcyGFElg/profile-displayphoto-shrink_800_800/0/1654350488409?e=1687996800&v=beta&t=ErRFHgnTlWQLN6AA77pVovJnyWBveCdG1JbdlgUlwos',
  url: '',
  keywords: [
    'Damien-Joseph',
    'Damien Joseph RISPAL',
    'Damien-Joseph RISPAL',
    'Damien RISPAL',
    'Damien',
    'RISPAL',
    'Damien-Joseph RISPAL Portfolio',
    'drispal',
    '@drispal',
    'Portfolio',
  ],
};
