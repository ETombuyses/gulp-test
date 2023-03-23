let lazyloadThrottleTimeout;
const lazyloadImagesProject = document.querySelectorAll(".work");
const myWorksSection = document.querySelector('#myworks');
const worksSection = document.querySelector('#works');

function lazyload() {

  if (lazyloadThrottleTimeout) {
    clearTimeout(lazyloadThrottleTimeout);
  }

  lazyloadThrottleTimeout = setTimeout(function () {
    const scrollTop = window.pageYOffset;

    lazyloadImagesProject.forEach((project) => {
      let img = project.querySelector('img');
      if (project.offsetTop + worksSection.offsetTop + myWorksSection.offsetTop < (window.innerHeight + scrollTop)) {
        img.src = img.dataset.src;

        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
        }
      }
    });

    if (lazyloadImagesProject.length == 0) {
      document.removeEventListener("scroll", lazyload);
      window.removeEventListener("resize", lazyload);
      window.removeEventListener("orientationChange", lazyload);
    }
  }, 20);
}

document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);
