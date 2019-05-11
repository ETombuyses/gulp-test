var lazyloadThrottleTimeout;
var lazyloadImagesProject = document.querySelectorAll(".work");
var myWorksSection = document.querySelector('#myworks');
var worksSection = document.querySelector('#works');
  
function lazyload () {

  if(lazyloadThrottleTimeout) {
    clearTimeout(lazyloadThrottleTimeout);
  }    
    
  lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;

      lazyloadImagesProject.forEach((project) => {
        let img = project.querySelector('img');
          if (project.offsetTop + worksSection.offsetTop + myWorksSection.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;

            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
          }
      });
      if(lazyloadImagesProject.length == 0) { 
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
  }, 20);
}
  
document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);
