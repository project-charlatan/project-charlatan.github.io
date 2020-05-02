  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li');

  burger.addEventListener('click', ()=>{
    //Toggle Nav
    menu.classList.toggle('nav-active');

    //Animate Links
    menuLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = '';
        }
        else {
          link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
    //Burger animation
    burger.classList.toggle('toggle');

  });
}

navSlide();
