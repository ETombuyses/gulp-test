//issue : mouseenter and mouseleave not triggered in firefox and safari
//fix: mouseover and mouseout are working fine

class CursorPosition {
  constructor(cursor) {
    this.x = 0;
    this.y = 0;
    let lastScrollY = 0;

    document.addEventListener('mousemove', event => {
      this.x = event.pageX;
      this.y = event.pageY;
      cursor.style.left = this.x + 'px';
      cursor.style.top = this.y + 'px';
    })

    window.addEventListener('scroll', () => {
      let currentScrollY = window.scrollY;
      let deltaScrollY = currentScrollY - lastScrollY;
      this.y = this.y + deltaScrollY;
      cursor.style.top = this.y + 'px';
      lastScrollY = currentScrollY;
    })

    document.addEventListener('mouseover', () => {
      if (window.innerWidth > 800) {
        cursor.style.display='block';
      }
    })

    document.addEventListener('mouseout', () => {
      cursor.style.display='none';
    })

    const darkSections = document.querySelectorAll("[data-color='dark']")
    darkSections.forEach(darkSection => {
      darkSection.addEventListener('mouseover', () => {
        cursor.classList.add('is-white');
      });

      darkSection.addEventListener('mouseout', () => {
        cursor.classList.remove('is-white');
      });
    });

    

  }
}

module.exports = CursorPosition