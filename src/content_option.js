const logotext = "Dramé";
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
//import imagePortrait from './assets/images/IMG_20241016_085140.jpg';
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
    //your_img_url: imagePortrait,
};

const dataabout = {
    title: "À propos",
    aboutme: " Bonjour, je suis développeur web junior formé à Openclassroom et je vis actuellement à Paris. J'ai occupé différents postes dans différents métiers pendant des années ce qui m'a permis d'élargir mon champs de vision. Je viens d'être diplômé d'openclassroom, en tant que développeur web de plus plusieurs mois avant ma formation, je me suis formé en autodidacte aux technologies informatiques. Je suis de nature autonome, rigoureux et curieux, je souhaite renforcer mes nouvelles compétences acquises. C'est pourquoi, je souhaite intégrer un poste de développeur web full stack afin de pouvoir améliorer mes compétences techniques. ",
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
        jobtitle: "Agent de sécurité",
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

const skills = [{
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
        contexte: "Le projet du site Booki consistait à la création d'un site d'hébergement pour les vacances, j'ai codé ce site en CSS pure et Html. J'ai suivi le plan de la maquette pour intégrer l'interface du site Booki, j'ai crée une version ordinateur, tablette et mobile. Ce projet a été réalisé sans utilisation de framework, il m'a permis de voir la base de la programmation. Il m'a également permis d'apréhender la logique de design responsive, qui assure que notre site fonctionne bien sur tous les appareils et toutes les tailles d'écran."
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
        contexte: ""
    },
    {
        img: image4,
        img2: image9,
        description: "Un site pour publier et donner des notes aux livres.",
        lien: "https://github.com/LMgit91/Grimoire-livre.git",
        id: 4,
    },
    {
        img: image5,
        img2: image8,
        description: "Le site d'une agence immobilière Kasa",
        lien: "https://github.com/LMgit91/Kasa.git",
        id: 5,
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