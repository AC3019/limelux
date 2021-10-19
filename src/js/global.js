/*
This file provides the basic functionality that the template uses
Rmb to include this file in every html document else some of the basic functionalities won't work
DONT CODE PAGE SPECIFIC FUNCTIONALITIES HERE
*/

/*
Apply the "shrink and float header bar"
- wanted to use intersection observer for optimised performance 
  but that would add a little complexity 
  and not all browsers support the intersection observer (some outdated didnt support)
- make the window listen for onscroll function
- check the scroll on body and the documentElement AKA html itself
- if the scrollTop is big, apply the header-scrolled class
- AND make the scroll to top button visible
*/

window.onscroll = () => {
  if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40) {
    document.getElementsByTagName('header')[0].classList.add('header-scrolled')
    document.getElementById('goToTop').style.display = 'block'
  } else {
    // if the scroll is not that big then the class shall be removed
    document.getElementsByTagName('header')[0].classList.remove('header-scrolled')
    document.getElementById('goToTop').style.display = 'none'
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

// to remember if the bgm is playing
// we are gonna have videos soon or later
// so we plan let this be a global variable that spans across multiple files
// it will store which media player is playing at the moment
// so when the other media player is played, the current playing media player will be paused
let currentMediaPlayer = undefined

// toggle background music function
function toggleMusic() {
  const bgmElem = document.getElementById('bgm')
  const musicToggler = document.getElementById('music-toggle')
  if (currentMediaPlayer != bgmElem) {
    if (currentMediaPlayer) {
      // pause the current media player if it exists
      currentMediaPlayer.pause()
    }
    bgmElem.play()
    musicToggler.classList.add('music-on')
    musicToggler.classList.remove('music-off')
    currentMediaPlayer = bgmElem
  } else {
    currentMediaPlayer.pause()
    musicToggler.classList.add('music-off')
    musicToggler.classList.remove('music-on')
    currentMediaPlayer = undefined
  }
}

// go to the top of the document (not supported in IE)
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}