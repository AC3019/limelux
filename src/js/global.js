/*
  Apply the "shrink and float header bar"
    - make the window listen for onscroll function
    - check the scroll on body and the documentElement AKA html itself
    - if the scrollTop is big, apply the header-scrolled class
*/

window.onscroll = () => {
  if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60) {
    document.getElementsByTagName('header')[0].classList.add('header-scrolled')
  } else {
    // if the scroll is not that big then the class shall be removed
    document.getElementsByTagName('header')[0].classList.remove('header-scrolled')
  }
}

/*
  Nav styles
    - add event listener to every nav links
    - it will toggle the active class on them when they are hovered
    - except those already had active class on them
    - the reason to have a special active class instead of just css hover
      - we can set which link is active on our own
      - which can help us tell user which page they are on
*/

// get all the a tags with the nav-link class except those who already have the active class
const navLinks = document.querySelectorAll('.nav-links:not(.active)')

navLinks.forEach(link => {
  link.addEventListener('mouseenter', event => {
    event.target.classList.add('active')
  })

  link.addEventListener('mouseleave', event => {
    event.target.classList.remove('active')
  })
})