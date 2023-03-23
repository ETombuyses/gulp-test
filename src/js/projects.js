
let projects = [
  {
    title: "OWNEST - Application Owalt (Vue3, Cordova)",
    descriptions: [
      `Participation à la création from scratch d'une web app en Vue3 et Cordova en tant que développeuse front pour l'entreprise Ownest.`,
      "L'application permet la réception et le transfert d'actifs numériques via un simple numéro de téléphone",
      `Disponible en application native sur <a href="https://play.google.com/store/apps/details?id=com.ownest.owalt" target="_blank">Play store</a> et <a href="https://apps.apple.com/gb/app/owalt/id1632435343" target="_blank">App Store</a>`
    ],
    link: "https://app.owalt.io",
    images: {
      svg: false,
      default: "assets/images/desktop/owalt.png",
      mobile: {
        image: "assets/images/mobile/owalt.png",
        width: "210"
      },
      desktop: {
        image: "assets/images/desktop/owalt.png",
        width: "210"
      },
      retina: {
        image: "assets/images/retina/owalt.png",
        width: "250"
      }
    },
    alt: "Application Owalt",
    cta: "App"
  },
  {
    title: "OWNEST - PWA Ownest (Vue2)",
    descriptions: [
      `Maintien et développement de nouvelles fonctionnalités pour une PWA existante en Vue2.`,
      "Cette application B2B permet la traçabilité de biens sur les reseaux logistiques des entreprises grâce à des mécanismes blockchain.",
      "Par souci de confidentialité, je ne rajoute ici que le lien vers le site de l'entreprise Ownest au cas où vous souhaiteriez en savoir plus."
    ],
    link: "https://ownest.io/",
    images: {
      svg: false,
      default: "assets/images/desktop/ownest.png",
      mobile: {
        image: "assets/images/mobile/ownest.png",
        width: "210"
      },
      desktop: {
        image: "assets/images/desktop/ownest.png",
        width: "210"
      },
      retina: {
        image: "assets/images/retina/ownest.png",
        width: "250"
      }
    },
    alt: "Application Ownest",
    cta: "App"
  },
  {
    title: "3e HETIC - Agora (React)",
    descriptions: [
      `Projet scolaire (fictif) autour de l'écologie en React.`,
      "Agora est une plateforme en ligne en collaboration avec le gouvernement abordant le thème de l'écologie. Elle se veut accessible à tous les citoyens français souhaitant contribuer à l'amélioration de l'environnement par des missions mensuelles à remplir sur notre plateforme.",
      "Il s'agit plus exactement d'un dashboard résumant la consommation de ressources de chaque citoyen.",
      "<strong>A faire tourner en local en Node 14</strong>"
    ],
    link: "https://github.com/ETombuyses/agora",
    images: {
      svg: false,
      default: "assets/images/desktop/agora.jpg",
      mobile: {
        image: "assets/images/desktop/agora.jpg",
        width: "250"
      },
      desktop: {
        image: "assets/images/desktop/agora.jpg",
        width: "300"
      },
      retina: {
        image: "assets/images/desktop/agora.jpg",
        width: "560"
      }
    },
    alt: "Agora",
    cta: "Github"
  },
  {
    title: "1e HETIC - Dharma (Vue2)",
    descriptions: [
      `Mon premier jeu en Vue.js. Il s'agit ici d'un "jeu dont vous êtes le héro".`,
      "Chaque choix influe sur la fin (plus ou moins rapide, plus ou moins tragique) de l'histoire.",
      "Je me suis occupée de la partie fonctionnelle du jeu tandis que ma coéquipière s'est occupée de l'aspect histoire et design.",
      "En espérant que vous survivrez au voyage."
    ],
    link: "https://dharma.netlify.app",
    images: {
      svg: false,
      default: "assets/images/desktop/dharma.jpg",
      mobile: {
        image: "assets/images/desktop/dharma.jpg",
        width: "250"
      },
      desktop: {
        image: "assets/images/desktop/dharma.jpg",
        width: "300"
      },
      retina: {
        image: "assets/images/desktop/dharma.jpg",
        width: "560"
      }
    },
    alt: "Jeu Dharma",
    cta: "Jeu"
  },
  {
    title: "1e HETIC - Tour d'Hanoï (JS, HTML, CSS)",
    descriptions: [
      "Un casse tête très connu codé en JavaScript.",
      "Les règles sont expliquées sur la page du jeu.",
      "Bon amusement!"
    ],
    link: "https://tower-of-hanoi.netlify.com/",
    images: {
      svg: true,
      default: "assets/images/svg/hanoi.svg"
    },
    alt: "Tour d'Hanoï",
    cta: "Jeu"
  },
  {
    title: "1e HETIC - Nespresso redesign (HTML, CSS)",
    descriptions: [
      "Ce projet était à l'origine pour mon cours de design. Je devais revisiter la page d'accueil de Nespresso pour lui donner un look plus luxueux.",
      "Fière du résultat des maquettes, il me tenaît à coeur de les intégrer. C'était également l'occasion de m'entraîner sur un projet perso.",
      "<strong>Note: Le site n'est pas (et ne se veut pas) fonctionnel.</strong>"
    ],
    link: "https://nespresso-redesign-school-project.netlify.com/",
    images: {
      svg: false,
      default: "assets/images/desktop/nespresso.png",
      mobile: {
        image: "assets/images/mobile/nespresso.png",
        width: "250"
      },
      desktop: {
        image: "assets/images/desktop/nespresso.png",
        width: "300"
      },
      retina: {
        image: "assets/images/retina/nespresso.png",
        width: "510"
      }
    },
    alt: "Café Nespresso",
    cta: "Site"
  },
  {
    title: "1e HETIC - Yellow Jacket (JS, HTML, CSS)",
    descriptions: [
      "Mon équipe et moi avions 4 jours pour concevoir un jeu en JavaScript basé sur une librairie fournie à cet effet.",
      "Ce fut mon premier projet JavaScript.",
      "<strong>Nécessite de jouer en 1280x800</strong>"
    ],
    link: "https://yellowjacketgame.netlify.com/",
    images: {
      svg: true,
      default: "assets/images/svg/yellow-jacket.svg"
    },
    alt: "Yellow jacket",
    cta: "Jeu"
  },
  {
    title: "1e HETIC - Emporio Armani (HTML, CSS)",
    descriptions: [
      "Voici mon premier projet d'intégration de site après une semaine de cours. Il a été réalisé en équipe en 4 jours seulement.",
      "Le premier jour, nous devions jouer le rôle d'un client pour une autre équipe en leur remettant les wireframes attendus ainsi que nos spécifications. Les jours suivant étaient consacrés au design et à l'intégration du site de notre propre client",
      "Je me suis occupée de la page d'accueil ainsi que la partie responsive des pages produit."
    ],
    link: "https://armani-soufre.netlify.com/",
    images: {
      svg: false,
      default: "assets/images/desktop/emporio-armani.png",
      mobile: {
        image: "assets/images/mobile/emporio-armani.png",
        width: "130"
      },
      desktop: {
        image: "assets/images/desktop/emporio-armani.png",
        width: "216"
      },
      retina: {
        image: "assets/images/retina/emporio-armani.png",
        width: "389"
      }
    },
    alt: "Montre Emporio Armani",
    cta: "Site"
  }
];


let works = document.getElementById("works");
let fragment = document.createDocumentFragment();

const displayWorks = () => {
  for (let i = 0; i < projects.length; i++) {

    /*article*/
    let work = document.createElement('article');
    work.classList.add('work');

    if (i % 2 == 0) {
      work.classList.add('work--odd');
    }

    /*section description*/
    let description = document.createElement('section');
    description.classList.add('work__description');

    //tite
    let title = document.createElement('h3');
    title.classList.add('work__title');
    title.textContent = projects[i].title;
    description.appendChild(title);

    //texts
    let texts = projects[i].descriptions;

    for (let j = 0; j < texts.length; j++) {
      let text = document.createElement('p');
      text.classList.add('work__text');
      text.innerHTML = texts[j];
      description.appendChild(text);
    }

    /*section display*/
    let display = document.createElement('section');
    display.classList.add('work__display');

    //link 
    let link = document.createElement('a');
    link.classList.add('work__bigBox');
    link.href = projects[i].link;
    link.target = "_blank";
    link.rel = "noopener noreferrer nofollow external";

    if (projects[i].images.svg) {
      link.innerHTML = `
      <div class="work__box">
        <div class="work__filter">
          <span class="work__tags">${projects[i].cta}</span>
        </div>
        <img data-src=${projects[i].images.default} alt="${projects[i].alt}">
      </div>`;

    } else {
      link.innerHTML = `
      <div class="work__box">
        <div class="work__filter">
          <span class="work__tags">${projects[i].cta}</span>
        </div>
        <img data-src=${projects[i].images.default} data-srcset="${projects[i].images.mobile.image} ${projects[i].images.mobile.width}w, ${projects[i].images.desktop.image} ${projects[i].images.desktop.width}w, ${projects[i].images.retina.image} ${projects[i].images.retina.width}w"
        sizes="(max-width: 799px) 210px, 280px"
        alt="${projects[i].alt}">
      </div>`;
    }

    display.appendChild(link);

    /*combine sections*/
    work.appendChild(description);
    work.appendChild(display);

    // add to fragment
    fragment.appendChild(work);
  }
}

displayWorks();
works.appendChild(fragment);


/* ------------- project animation on scroll -------------- */

const myProjects = document.querySelectorAll('.work');

// add a class when a project becomes visible on screen
const showProject = project => {

  const offsetScreen = project.getBoundingClientRect().top - window.innerHeight + 100;

  if (offsetScreen <= 0) {
    project.classList.add('is-visible');
  }
}

const showProjectOnResize = project => {
  showProject(project);

  document.addEventListener('scroll', () => {
    showProject(project);
  });
}

for (let i = 0; i < myProjects.length; i++) {
  showProjectOnResize(myProjects[i]);
}

/* ------------- project line animation on scroll -------------- */


const myProject = document.querySelector('.work');
let line = document.getElementById('line');
const offsetScreen = myProject.getBoundingClientRect().top + (window.innerHeight / 2) + 150;


// translate line on scroll on project section
const lineGrows = () => {

  let pageScroll = window.scrollY + window.innerHeight;
  let lineTranslateY = offsetScreen - pageScroll;
  if (lineTranslateY < 0) {
    line.style.transform = `translateY(${Math.abs(lineTranslateY)}px)`;
    // line.style.height = `${Math.abs(lineTranslateY) + 300}px`;
  }
}

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 800) {
    lineGrows();
  }
})