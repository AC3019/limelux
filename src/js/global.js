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