import image1 from './assets/images/emile-guillemot.jpg'
import image2 from './assets/images/sophie-bluel.png';
import image3 from './assets/images/nicholas-green-nPz8akkUmDI-unsplash.webp';
import image4 from './assets/images/home_banner.jpg';
import image5 from './assets/images/ImageSource1.png';
import image6 from './assets/images/Booki.png';
import image7 from './assets/images/sophie.png';
import image8 from './assets/images/kasa.png';
import image9 from './assets/images/grimoire.png';
import image10 from './assets/images/nina.png';
import imagePortrait from './assets/images/kilyan-sockalingum.jpg';
import image11 from './assets/images/Doctor Invite Photo 1 (1).png';
const logotext = "Dramé";


const meta = {
    title: "Mohamed Dramé",
    description: "Je suis Mohamed Dramé, je suis un développeur full stack junior basé à Paris",
};

const introdata = {
    title: "Je suis Mohamed Dramé",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "Je suis développeur full stack",
    },
    description: " Je suis un développeur full stack, React et Node JS, je suis intéressé par tout ce qui touche les nouvelles technologies.",
    your_img_url: imagePortrait,
};

const dataabout = {
    title: "À propos",
    aboutme: "Bonjour, je suis développeur web junior formé à Openclassroom et je vis actuellement à Paris. J'ai récemment participé à un projet collaboratif avec Chingu où j'ai pratiqué les méthodologies Agile et le développement en équipe avec TypeScript et PostgreSQL. J'ai occupé différents postes dans différents métiers pendant des années ce qui m'a permis d'élargir mon champs de vision. Je viens d'être diplômé d'openclassroom, en tant que développeur web de plus plusieurs mois avant ma formation, je me suis formé en autodidacte aux technologies informatiques. Je suis de nature autonome, rigoureux et curieux, je souhaite renforcer mes nouvelles compétences acquises. C'est pourquoi, je souhaite intégrer un poste de développeur web full stack afin de pouvoir améliorer mes compétences techniques.",
};
const worktimeline = [{
        jobtitle: "Étudiant, Obtention du baccalauréat économique et social",
        where: "Lycée Edgar Quinet",
        date: "2011",
    },
    {
        jobtitle: "Étudiant, Classe préparatoire aux grandes écoles économique et commerciale",
        where: "Lycée Rodin",
        date: "2011-2013",
    },
    {
        jobtitle: "Étudiant, Licence d'économie et gestion et obtention du baccalauréat scientifique",
        where: "Paris 8, Saint-Denis",
        date: "2013-2014",
    },
    {
        jobtitle: "Ouvrier du batiment",
        where: "Massy-Palaiseau",
        date: "2015",
    },
    {
        jobtitle: "hôte d'accueil",
        where: "Paris",
        date: "2016-2022",
    },
    {
        jobtitle: "Étudiant autodidacte en informatique",
        where: "Paris",
        date: "2019",
    },
    {
        jobtitle: "Formation développeur web",
        where: "Openclassroom",
        date: "2024",
    }
];

const skills = [
    {
        name: "TypeScript",
        value: 75,
    },
    {
        name: "PostgreSQL",
        value: 70,
    },
    {
        name: "Node JS",
        value: 90,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "python",
        value: 50,
    },
    {
        name: "SCSS",
        value: 90,
    },
    {
        name: "HTML & CSS",
        value: 100,
    }
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: image1,
        img2: image6,
        description: "Le site d'une agence de location immobilière Booki.",
        lien: "https://github.com/LMgit91/agence-booki.git",
        id: 1,
        contexte: "Le projet du site Booki consistait à la création d'un site d'hébergement pour les vacances, j'ai codé ce site en CSS pure et Html. J'ai suivi le plan de la maquette pour intégrer l'interface du site Booki, j'ai créé une version ordinateur, tablette et mobile. Ce projet a été réalisé sans utilisation de framework, il m'a permis de voir la base de la programmation. Il m'a également permis d'appréhender la logique de design responsive, qui assure que notre site fonctionne bien sur tous les appareils et toutes les tailles d'écran."
    },
    {
        img: image2,
        img2: image7,
        description: "Le site d'une architecte d'intérieur Sophie Bluel.",
        lien: "https://github.com/LMgit91/Sophie-Buel.git",
        id: 2,
        contexte: "Le projet du site de Sophie Bluel, qui est une architecte d'intérieur m'a permis de commencer à réaliser du code dans un langage de programmation, le javascript. Je n'ai pas utilisé de framework, je l'ai codé en javascript dur.L'objectif est de créer un site dynamique qui communique avec uune api. Ce projet m'aura permis d'utliser les principales fonctions de javascript ainsi que d'appréhender la logique algorithmique du code. J'ai pu utiliser des fonctionnalités de base de javascript qui vont me servir par la suite tel que les map, les boucles \"for\" ou encore le \"fetch\". Ce projet m'aura permis d'apprendre à gérer les événements utilisateur, à utiliser le dom, à gérer les interractions utlisateurs et à communiquer avec une Api. "
    },  
    {
        img: image3,
        img2: image10,
        description: "Le site d'une photographe Nina Carducci.",
        lien: "https://github.com/LMgit91/Nina-Carducci25.git",
        id: 3,
        contexte: "Le projet de nina carducci était que l'on m'a fourni le site de Nina, qui contenait un bug et que son site n'était pas optimisé. J'ai commencé par débugger la fonctionnalité qui avait un bug puis j'ai optimisé le site en mettant en place les bonnes pratiques. J'ai rédigé un rapport qui se trouve sur mon github sur les impactes de mon intervention."
    },
    {
        img: image4,
        img2: image9,
        description: "Un site pour publier et donner des notes aux livres.",
        lien: "https://github.com/LMgit91/Grimoire-livre.git",
        id: 4,
        contexte: "Le projet consitait à créer le backend d'un site de notation de livre, la partie frontend m'était déja fourni. Je davais créer un serveur avec express et connecter ce serveur à une base de donnée MongoDB. J'ai mis en place la structure du serveur et j'ai géré la gestion de la communication entre la base de donnée et le serveur. La principale contrainte de ce projet est que le backend était nouveau pour moi. Donc bien que l'on utilisait toujours javascript, il m'a fallu un certain temps pour m'adapter à cette nouvelle manière de coder côté serveur. Ce projet a été enrichissant car il m'a permis de faire du CRUD(Create Read Update et Delete), ce sont des compétences importantes à connaitre. J'ai également dû mettre en place un système d'authentification sécurisé pour les utlisateurs. Pour ce faire, j'ai utiliser le package Bcrypt et Jsonwebtoken. Le premier va créer un hash des mot de passe et le second va gérer la création et l'envoie de token d'identification. J'ai également gérer les cas de téléchargement de fichiers, et d'optimisations des images. ",
    },
    {
        img: image5,
        img2: image8,
        description: "Le site d'une agence immobilière Kasa",
        lien: "https://github.com/LMgit91/Kasa.git",
        id: 5,
        contexte: "Ce projet consistait à créer un site web d'une application de location immobilière. Pour réaliser ce site j'ai utiliser uniquement le framework React JS. Ce projet m'a permis d'explorer les fonctionnalités de base de React et son fonctionnement. En effet React est une bibliothèque qui m'a permis de créer une interface utlisateur efficace. J'ai utlisé react router pour configurer la navigation entre les pages de notre application. Cette compétence est primordiale, dans les applications modernes il faudra gérer le routage de manière efficace. J'ai démarré mon projet en utlisant create react app, qui est outil util qui simplifie la tâche d'implémenter toutes les dépendances nécessaires à la création d'un projet React. J'ai également utilisé SASS pour gérer mon CSS qui est un élément qui améliore l'expérience utilisateur.",
    },
    {
        img: image11,
        img2: image11,
        description: "Une application médicale WeCare",
        lien: "https://github.com/LMgit91/WeCare.git",
        id: 6,
        contexte: "Application full-stack développée en équipe de 3 via le programme Chingu, suivant une méthodologie Agile avec des daily standups. Ma contribution s'est concentrée sur le développement front-end avec TypeScript et l'intégration de la base PostgreSQL. Cette expérience m'a permis de renforcer mes compétences en travail d'équipe, gestion de version Git et développement d'applications robustes."
    }, 
];

const contactConfig = {
    YOUR_EMAIL: "DMRgit@outlook.fr",
    YOUR_FONE: "(+33)781607027",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};