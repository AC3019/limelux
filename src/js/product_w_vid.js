// if the user wanna play the video, and the bgm is playing, pause the video first
// save the bgm state, if it is playing, automatically play it back after the video has ended or paused
let pausedMedia = undefined  // this will be set to the media that is playing when the video is played

document.querySelector('video').addEventListener('play', event => {
    // get the current playing media (currentMedia (in global.js))
    if (currentMediaPlayer) {
        // if it is not undefined then prob smtg is playing
        currentMediaPlayer.pause()
        pausedMedia = currentMediaPlayer
    }
    currentMediaPlayer = event.target
})

document.querySelector('video').addEventListener('pause', () => {
    // if it is pausable means user already played it as it is not autoplay
    if (pausedMedia) {
        // if the user is playing smtg else before, restore it
        pausedMedia.play()
        currentMediaPlayer = pausedMedia
    } else {
        // reset the currentMediaPlayer to undefined
        currentMediaPlayer = undefined
    }
    pausedMedia = undefined
})

// observer for the key features to observe if they are in the viewport, if they are, make them slide in
// elements that we want to slide them in
const slideInElems = document.querySelectorAll('.slide-in')

// if the browser have intersectionobserver and isIntersecting function is accepted
// PS can actually extract this into a function but for small project like this it's not necessary
if ('IntersectionObserver' in window && 
    'isIntersecting' in window.IntersectionObserverEntry.prototype) {

        const slideInOptions = {
            // make the place that the observer can see 150px shorter on the bottom side
            rootMargin: '0px 0px -250px 0px'
        }
        
        const keyFeatureObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return
                }
        
                entry.target.classList.add('appear')
                observer.unobserve(entry.target)
            })
        }, slideInOptions)
        
        slideInElems.forEach(elem => {
            keyFeatureObserver.observe(elem)
        });

} else {
    // if they are not supported directly show the things, no need for fancy animation so the user can at least see smtg
    slideInElems.forEach(elem => {
        elem.classList.add('appear')
    })
}
