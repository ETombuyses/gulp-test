
let projects = [
  {
    title: "Tower of Hanoi",
    descriptions: [
      "A well known mathematical game that I coded.",
      "The rules are explained on the game's page.",
      "Have fun playing it !"
    ],
    link : "https://tower-of-hanoi.netlify.com/",
    image: "assets/images/medium/hanoi.svg",
    alt: "tower of Hanoi",
    cta: "Game"
  },
  {
    title: "Nespresso redesign",
    descriptions: [
      "This project was for my UX course. I had to redesign the homepage of Nespresso. But I didn’t stop there!",
      "I really wanted to make this redesign live, so I did. (I am still working on it)."
    ],
    link : "https://nespresso-redesign-school-project.netlify.com/",
    image: "assets/images/large/tasse.png",
    alt: "nespresso redesign",
    cta: "website"
  },
  {
    title: "Yellow Jacket",
    descriptions: [
      "Me and my team had 5 days to develop and present a javascript game in front of a jury. It was a great project where I improved my JS skills a lot. It was a lot of fun too!",
      "<strong>To play in a 1280x800 environment</strong>"
    ],
    link : "https://yellowjacketgame.netlify.com/",
    image: "assets/images/medium/yellow-jacket.png",
    alt: "javascript game - yellow jacket",
    cta: "game"
  },
  {
    title: "Emporio Armani",
    descriptions: [
      "This was my first integration after a few weeks of courses, also made in 5 days including the design and a presentation in front of a jury.",
      "I integrated the home page and made the responsive part for product pages and the home page."
    ],
    link : "https://armani-soufre.netlify.com/",
    image: "assets/images/medium/armani-montre.png",
    alt: "emporio armani integration",
    cta: "website"
  }
];


let works = document.getElementById("works");
let fragment = document.createDocumentFragment();

const displayWorks = () => {
  for (let i = 0; i < projects.length; i++) {

    //article
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

    link.innerHTML= `
    <div class="work__box">
      <div class="work__filter">
        <span class="work__tags">${projects[i].cta}</span>
      </div>
      <img src=${projects[i].image} alt="${projects[i].alt}">
    </div>`;

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

  // distance between element and top of page
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
const lineGrows = project => {

  // distance between element and top of page + half the screen height
  let pageScroll = window.scrollY + window.innerHeight;
  let lineTranslateY = offsetScreen - pageScroll;
  if( lineTranslateY < 0) {
    line.style.transform = `translateY(${Math.abs(lineTranslateY)}px)`;
    console.log(Math.abs(lineTranslateY));
  }
}

window.addEventListener('scroll', () => {
  lineGrows(myProject);
})