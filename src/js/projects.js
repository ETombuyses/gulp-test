
let projects = [
  {
    title: "Tower of Hanoi",
    descriptions: [
      "A well-known puzzle that I coded in JavaScript.",
      "The rules are explained on the game's page.",
      "Have fun playing it!"
    ],
    link : "https://tower-of-hanoi.netlify.com/",
    images: {
      svg: true,
      default: "assets/images/svg/hanoi.svg"
    },
    alt: "tower of Hanoi",
    cta: "Game"
  },
  {
    title: "Nespresso redesign",
    descriptions: [
      "This project was for my UX course. I had to redesign the homepage of Nespresso to make it look more luxury. But I didn’t stop there!",
      "I really wanted to make this redesign live, so I did. The page is not finished yet, but I will work on it soon!",
      "I had not a lot of experience at that time but it helped me improve my skills."
    ],
    link : "https://nespresso-redesign-school-project.netlify.com/",
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
    alt: "nespresso coffee",
    cta: "website"
  },
  {
    title: "Yellow Jacket",
    descriptions: [
      "Me and my team (5 persons) had 4 days to think of a game, design it and develop it in JavaScript based on a library.",
      "It was my first big JavaScript project which helped me to understand how JavaScript works. It was a lot of fun!",
      "<strong>To play in a 1280x800 environment</strong>"
    ],
    link : "https://yellowjacketgame.netlify.com/",
    images: {
      svg: true,
      default: "assets/images/svg/yellow-jacket.svg"
    },
    alt: "yellow jacket",
    cta: "game"
  },
  {
    title: "Emporio Armani",
    descriptions: [
      "This was my first website integration after a few weeks of courses. This project was also made in 4 days with a 5 persons team.",
      "The first day, we had to play the role of a client for another team. We gave them our wireframes accompanied by our specification. The following days, we designed and integrated our client team's website.",      
      "I integrated the home page and made the responsive part for product pages and the home page."
    ],
    link : "https://armani-soufre.netlify.com/",
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
    alt: "emporio armani watch",
    cta: "website"
  }
];


let works = document.getElementById("works");
let fragment = document.createDocumentFragment();

const displayWorks = () => {
  for (let i = 0; i < projects.length; i++) {

    /*article*/
    let work = document.createElement('article');
    work.classList.add('work');

    if(i%2 == 0) {
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
      link.innerHTML= `
      <div class="work__box">
        <div class="work__filter">
          <span class="work__tags">${projects[i].cta}</span>
        </div>
        <img src=${projects[i].images.default} alt="${projects[i].alt}">
      </div>`;

    } else {
      link.innerHTML= `
      <div class="work__box">
        <div class="work__filter">
          <span class="work__tags">${projects[i].cta}</span>
        </div>
        <img src=${projects[i].images.default} srcset="${projects[i].images.mobile.image} ${projects[i].images.mobile.width}w, ${projects[i].images.desktop.image} ${projects[i].images.desktop.width}w, ${projects[i].images.retina.image} ${projects[i].images.retina.width}w"
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

  const offsetScreen = project.getBoundingClientRect().top  - window.innerHeight + 100;

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

for (let i=0; i < myProjects.length; i++) {
  showProjectOnResize(myProjects[i]);
}

/* ------------- project line animation on scroll -------------- */


const myProject = document.querySelector('.work');
let line = document.getElementById('line');
const offsetScreen = myProject.getBoundingClientRect().top  + (window.innerHeight/2) + 150;


// translate line on scroll on project section
const lineGrows = () => {

  let pageScroll = window.scrollY + window.innerHeight;
  let lineTranslateY = offsetScreen - pageScroll;
  if( lineTranslateY < 0) {
    line.style.transform = `translateY(${Math.abs(lineTranslateY)}px)`;
    // line.style.height = `${Math.abs(lineTranslateY) + 300}px`;
  }
}

window.addEventListener('scroll', () => {
  lineGrows();
})