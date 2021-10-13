/*
This file provides the basic functionality that the template uses
Rmb to include this file in every html document else some of the basic functionalities won't work
DONT CODE PAGE SPECIFIC FUNCTIONALITIES HERE
*/

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