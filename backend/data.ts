import { Work, Details, Misc, Blog, About } from './interfaces';
import moment from 'moment';

export const addAbout: About = {
  details: {
    name: 'Klara Bryntesson',
    city: 'Gothenburg',
    email: 'k_bryntesson@hotmail.com',
    github: 'https://github.com/KlaraBryntesson',
    linkedin: 'https://linkedin.com/in/klarabryntesson/',
    image: [
      '/images/IMG_1215.jpg',
      '/images/helen-unsplash.jpg',
      '/images/IMG_2116.png',
    ],
  },
  misc: {
    bio: 'I am a dedicated and enthusiastic frontend developer student with a passion for creating intuitive and visually appealing user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I constantly want to expanding my skillset and explore new frameworks and technologies to stay on the cutting edge of web development.',
    introdescription:
      'My name is Klara. I like to create websites and solve problems.',
    description: [
      "I'm a frontend developer with a diverse set of skills and experiences that enable me to create beautiful and functional web applications. With a background in textile design and product development, I bring a unique perspective to the table that allows me to approach problems with creativity and attention to detail.",
      'My experience in various roles has developed my skills in communication, attention to detail, organization, and creativity - all valuable assets in any web development project. In terms of education, my degree in Textile Product Development and Entrepreneurship from the Textile University of Borås gave me a strong foundation in business, project management, and product development. I also gained practical experience in textile technologies such as weaving and garment construction, which has taught me to be meticulous in my work and detail-oriented.',
      'I am passionate about creating user-friendly and visually stunning web applications that meet the needs of clients and users alike.',
      'Working at Sahlgrenska University Hospital, I gained valuable experience in administrative work and reception duties. This role shaped my attention to detail and organizational skills, which are critical in ensuring the smooth functioning of any project. Moreover, my ability to manage multiple tasks and priorities was developed in this role, which is essential for delivering high-quality work in a fast-paced environment.',
      'I am comfortable working with clients to understand their needs and finding solutions that meet those requirements. I have experience managing teams and daily operations, as well as working under pressure. These skills are transferable to web development, where project management and collaboration are essential.',
      'I believe my skills in communication, attention to detail, organization, and creativity will be valuable assets in any web development project.',
      'Overall, my background in customer service, administration, leadership, and textile design has given me a unique set of skills that I can bring to the field of frontend development.',
    ],
    important: 'Information som aktuell just nu',
    skills: [
      'HTML',
      'JavaScript',
      'CSS',
      'UX-Design',
      'Vue.js',
      'Agile methods',
      'VITE',
      'Typescript',
      'React',
      'Node.js',
      'Git',
      'MongoDB',
      'Express',
      'SQL',
      'Mongoose',
    ],
  },
};

// export const addDetails: Details = {
//   name: "Klara Bryntesson",
//   city: "Gothenburg",
//   email: "k_bryntesson@hotmail.com",
//   github: "https://github.com/KlaraBryntesson",
//   linkedin: "https://linkedin.com/in/klarabryntesson/",
//   image: [
//     "/images/IMG_1215.jpg",
//     "/images/helen-unsplash.jpg",
//     "/images/IMG_2116.png",
//   ],
// };

// export const addMisc: Misc = {
//   bio: "I am a dedicated and enthusiastic frontend developer student with a passion for creating intuitive and visually appealing user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I constantly want to expanding my skillset and explore new frameworks and technologies to stay on the cutting edge of web development.",
//   introdescription:
//     "My name is Klara. I like to create websites and solve problems.",
//   description: [
//     "I'm a frontend developer with a diverse set of skills and experiences that enable me to create beautiful and functional web applications. With a background in textile design and product development, I bring a unique perspective to the table that allows me to approach problems with creativity and attention to detail.",
//     "My experience in various roles has developed my skills in communication, attention to detail, organization, and creativity - all valuable assets in any web development project. In terms of education, my degree in Textile Product Development and Entrepreneurship from the Textile University of Borås gave me a strong foundation in business, project management, and product development. I also gained practical experience in textile technologies such as weaving and garment construction, which has taught me to be meticulous in my work and detail-oriented.",
//     "I am passionate about creating user-friendly and visually stunning web applications that meet the needs of clients and users alike.",
//     "Working at Sahlgrenska University Hospital, I gained valuable experience in administrative work and reception duties. This role shaped my attention to detail and organizational skills, which are critical in ensuring the smooth functioning of any project. Moreover, my ability to manage multiple tasks and priorities was developed in this role, which is essential for delivering high-quality work in a fast-paced environment.",
//     "I am comfortable working with clients to understand their needs and finding solutions that meet those requirements. I have experience managing teams and daily operations, as well as working under pressure. These skills are transferable to web development, where project management and collaboration are essential.",
//     "I believe my skills in communication, attention to detail, organization, and creativity will be valuable assets in any web development project.",
//     "Overall, my background in customer service, administration, leadership, and textile design has given me a unique set of skills that I can bring to the field of frontend development.",
//   ],
//   important: "Information som aktuell just nu",
//   skills: [
//     "HTML",
//     "JavaScript",
//     "CSS",
//     "UX/UI-Design",
//     "Vue.js",
//     "Agile development",
//     "VITE",
//     "Typescript",
//     "React",
//     "Node.js",
//     "Git",
//   ],
// };

export const addWork: Work[] = [
  {
    id: 'fomobar',
    name: 'Fomo Bar',
    shortdescription: 'Project using only HTML and CSS',
    description:
      'This is the first project I did at IT-Högskolan only a few weeks into my studies. Using only HTML and CSS, I created a website for a bar to implement the different types of elements and styling that I had learnt so far',
    image: '/images/fomobar.png',
    url: '/fomobar',
    languages: ['HTML', 'CSS'],
    participants: [],
  },
  {
    id: 'beerlibrary',
    name: 'Beer Library',
    shortdescription: 'bla',
    description:
      'This project was based on using an API to fetch information from. Fetching from Punk API, I decided to do a beer library to render the information from the API. In this project, there was a need to use Chart.js to display some of the information from the website. I also used an API provided by our teacher to render and use PUT, PATCH and DELETE to modify the information',
    image: '/images/beerlibrary.png',
    url: '/beerlibrary',
    languages: ['HTML', 'CSS', 'Native Javascript'],
    participants: [],
  },
  {
    id: 'gameofthrones',
    name: 'Game Of Thrones',
    shortdescription:
      'Using Vue.js and VITE to display data fetched with axios',
    description:
      "To get started with Vue.js and VITE, I made this website during a two week project. The context was to fetch information from an API and to use a 'Single Page Application' to render the website. Another requirement was to use dynamic routerlinks",
    image: '/images/got.png',
    url: '/gameofthrones',
    languages: ['HTML', 'CSS', 'Javascript', 'Vue', 'VITE', 'Node.js'],
    participants: [],
  },
  {
    id: 'urbangreens',
    name: 'Urban Greens',
    shortdescription:
      'Group-project creating a mockup API and fetching using Vue.js and VITE',
    description:
      'A group project created during four weeks in combination with working in an agile team with two week sprints. For this project, we made our own mockup API using json to fetch from. We also implemented a login function using Vuex and Vuex persist to make the user information persist on that specific device. This was the closest thing to using a backend that we could get. This project experiments with a few different npm packages to get to know their functions and usages',
    image: '/images/urbangreens.png',
    url: '/urbangreens',
    languages: ['HTML', 'CSS', 'Javascript', 'Vue', 'VITE', 'Node.js', 'Git'],
    participants: [
      'Ellinor Sahberg',
      'Isabell Leosson',
      'Sanna Asp',
      'Tove Karlström',
    ],
  },
];

export const addBlog: Blog[] = [
  {
    title: 'Grunderna i React',
    date: moment('2023-03-23'),
    content: [
      'Att lära sig React kan verka lite överväldigande i början, men det är faktiskt ganska lätt att komma igång om du har grundläggande förkunskaper i HTML, CSS och Javascript. Ett bra ställe att börja är att förstå att allt i React är en komponent. En komponent kan vara en knapp, en textruta, en bild eller till och med en hel sida. Genom att bryta ner en webbapplikation i små, återanvändbara komponenter kan du lättare hantera och uppdatera koden. Nästa steg är att lära sig JSX, vilket är en syntax för att skapa komponenter i React.',
      'Det kan verka konstigt i början att kombinera HTML och Javascript på det här sättet, men det gör det faktiskt enklare att skapa dynamiska användargränssnitt. En annan viktig del av React är props (egenskaper). Props är sättet att skicka data mellan komponenter. Till exempel kan du skicka en bildadress som en prop till en bildkomponent, eller textinnehåll till en textkomponent. Detta gör det möjligt för dig att skapa mer flexibla och återanvändbara komponenter.',
      'Efter att du har lärt dig dessa grundläggande koncept kan du börja arbeta med mer avancerade funktioner i React, såsom state (tillstånd) och livscykelmetoder. State gör det möjligt för dig att hantera och uppdatera data inom en komponent, medan livscykelmetoder låter dig köra kod vid olika tidpunkter i en komponents livscykel. Det finns en mängd resurser tillgängliga för att lära sig React, inklusive dokumentationen på Reacts hemsida och online-kurser på webbplatser som Udemy och Codecademy. Och om du behöver hjälp eller har frågor, finns det en livlig community av React-utvecklare där ute som är glada att hjälpa till. Så, sammanfattningsvis, att lära sig React är inte så svårt som det kan verka. Genom att förstå grundläggande koncept som komponenter, JSX och props, kan du snabbt börja bygga interaktiva och dynamiska användargränssnitt för webbapplikationer.',
    ],
  },
  {
    title: 'Typescript',
    date: moment('2023-03-20'),
    content: [
      'Typescript är ett öppen källkodsspråk som fungerar som en striktare och typsäkrare version av Javascript. Det utvecklades av Microsoft och är baserat på Javascript, vilket gör det lätt att använda för utvecklare som redan är bekanta med Javascript. En av de stora fördelarna med Typescript är att det ger dig möjlighet att arbeta med typer och använda statisk typning i din kod. Detta betyder att du kan definiera typer för dina variabler, funktioner och objekt, vilket gör det lättare att undvika buggar och fel i din kod. Typerna i Typescript inkluderar grundläggande datatyper som strängar och nummer, men också mer avancerade typer som unioner, intersectioner och typer för objekt och funktioner.',
      'En annan fördel med Typescript är att det har utmärkt integrering med moderna utvecklingsverktyg och ramverk, som React och Angular. Detta innebär att du kan använda Typescript för att skapa större och mer komplexa applikationer som är lättare att underhålla och utveckla över tid. När du börjar använda Typescript i dina projekt kan det ta lite tid att vänja sig vid den strikta syntaxen och de nya typerna. Men när du väl har lärt dig grunderna kan du förvänta dig att skriva kod som är mer robust, mer lättläst och mindre benägen för buggar och fel.',
      'För att komma igång med Typescript kan du använda skapa ett nytt projekt med hjälp av verktyg som create-react-app eller angular-cli, och sedan börja lägga till typer i din kod. Du kan också använda verktyg som Visual Studio Code för att få stöd för Typescript i din redigerare och få hjälp med att hitta och lösa fel och varningar i din kod.',
    ],
  },
  {
    title: 'Vue.js och VITE',
    date: moment('2023-02-15'),
    content: [
      'Som frontendutvecklare är det viktigt att hålla sig uppdaterad med de senaste teknologierna och verktygen för att bygga moderna webbapplikationer. En av dessa teknologier är Vue.js, ett progressivt JavaScript-ramverk som används för att bygga användargränssnitt. Med Vue.js kan du skapa interaktiva och reaktiva användargränssnitt med hjälp av enkla och intuitiva komponenter. För att komma igång med Vue.js kan det vara bra att först lära sig grunderna i HTML, CSS och JavaScript. När du har en grundläggande förståelse för dessa teknologier kan du börja lära dig Vue.js.',
      'Ett bra sätt att lära sig Vue.js är att gå igenom dokumentationen på Vue.js webbplats. Där hittar du en komplett guide som täcker allt från grundläggande syntax till mer avancerade koncept som reaktivitet och livscykelmetoder. När du har en grundläggande förståelse för Vue.js kan du börja utforska dess ekosystem.',
      'Ett verktyg som kan underlätta din Vue.js-utveckling är VITE. VITE är ett snabbt och lättviktsverktyg som används för att bygga och utveckla Vue.js-applikationer. Med VITE kan du enkelt skapa en Vue.js-applikation med minimal konfiguration. Verktyget använder sig av den senaste versionen av JavaScript och innehåller inbyggd stöd för Vue.js, därför kan du enkelt importera Vue.js-komponenter och använda dem i din applikation. En annan fördel med VITE är dess snabbhet. Verktyget är optimerat för snabb utveckling och leverans av webbapplikationer. Detta innebär att du kan utveckla och testa dina applikationer mycket snabbare än med traditionella verktyg.',
    ],
  },
];
