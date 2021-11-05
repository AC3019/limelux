/*
This file provides the basic functionality that the template uses
Rmb to include this file in every html document else some of the basic functionalities won't work
DONT CODE PAGE SPECIFIC FUNCTIONALITIES HERE
*/

/*
Prompt user to see if they want bgm anot
*/
window.addEventListener('load', () => {
  const noRemindObj = localStorage.getItem('noremind')

  // if the user chose to not show the prompt, but it had passed that day yet
  // or if the user didnt even see the prompt before
  if (!noRemindObj || new Date(noRemindObj.expiry) < new Date()) {
    let prompt = document.querySelector('.music-prompt')
    prompt.style.display = 'flex'
  }
})

let noRemindOnMusic = false

function closePrompt1(elem) {
  let prompt = document.querySelectorAll('.music-prompt')
  if (elem.id == 'playMusic') {
    toggleMusic()
    document.querySelector('.music-prompt-bg').style.display = 'none'
  } else {
    prompt[0].style.display = 'none'
    prompt[1].style.display = 'flex'
  }
}

function closePrompt2(elem) {
  let promptParent = document.querySelector('.music-prompt-bg')
  if (noRemindOnMusic) {
    // save to localStorage, with a expiry date of 1 day from the day they enter
    const expiryDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)
    console.log('Do not show prompt expiry date', expiryDate)
    const noRemindObj = {
      expiry: expiryDate
    }
    localStorage.setItem('noremind', JSON.stringify(noRemindObj))
    promptParent.style.display = 'none'
    // prompt[1].style.display = 'none'
  } else if (elem.id == 'playMusic') {
    toggleMusic()
    promptParent.style.display = 'none'
  } else {
    promptParent.style.display = 'none'
  }
}

function toggleYesState(elem) {
  if (elem.checked) {
    document.querySelectorAll('#playMusic')[1].disabled = true
    noRemindOnMusic = true
  } else {
    document.querySelectorAll('#playMusic')[1].disabled = false
    noRemindOnMusic = false
  }
}

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

// sometimes there are other way to trigger the bgm to play
// gonna listen to the onplay and onpause event and toggle the class also
const bgmElem = document.getElementById('bgm')
const musicToggler = document.getElementById('music-toggle')

bgmElem.addEventListener('play', () => {
  musicToggler.classList.add('music-on')
  musicToggler.classList.remove('music-off')
})

bgmElem.addEventListener('pause', () => {
  musicToggler.classList.add('music-off')
  musicToggler.classList.remove('music-on')
})

// toggle background music function
function toggleMusic() {
  if (currentMediaPlayer != bgmElem) {
    if (currentMediaPlayer) {
      // pause the current media player if it exists
      currentMediaPlayer.pause()
    }
    bgmElem.play()
    currentMediaPlayer = bgmElem
  } else {
    currentMediaPlayer.pause()
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

function subscribeNewsletter() {
  // for now just alert they subscribed jiu can d
  const name = document.querySelector('input[name="name"]').value
  const email = document.querySelector('input[name="email"]').value
  alert(`Thanks! ${name}, our newsletter will be sent to ${email} to notify you about our latest news!`)
}