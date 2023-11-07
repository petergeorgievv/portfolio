var backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


/* const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
      });
  
      event.target.classList.add('active-link');
    });
  });
*/


const navLinks = document.querySelectorAll('.link a');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    if (currentSection) {
        const currentLinkId = currentSection.getAttribute('id');
        const currentLink = document.querySelector(`.link a[href="#${currentLinkId}"]`);
        if (currentLink) {
            currentLink.classList.add('active-link');
        }
    }
});