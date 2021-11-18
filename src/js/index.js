/* 
  Make use of intersection observer and add a fade in effect to the featured product cards
  - adds a wow factor to those with modern supported browsers 
  - doesn't affect those that does not support, they just don't get the effects
*/

// get all the elements with the class of featured product
const featProducts = document.querySelectorAll('.featured-product')

// if the browser have intersectionobserver and isIntersecting function is accepted
// PS can actually extract this into a function but for small project like this it's not necessary
if ('IntersectionObserver' in window && 
    'isIntersecting' in window.IntersectionObserverEntry.prototype) {

    const fadeInOptions = {
      threshold: .7, // only fade in when some part of the element is in the viewport
    }

    const featProductObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // directly exit, don't do anything
          return;
        } else {
          entry.target.classList.add('fade-in')
          observer.unobserve(entry.target) // can stop observing the target d, that animation alrd done
        }
      })
    }, fadeInOptions)

    // add the observer to all of them
    featProducts.forEach(featProduct => {
      featProductObserver.observe(featProduct)
    })

} else {
  // if they are not supported directly show the things, no need for fancy animation so the user can at least see smtg
  featProducts.forEach(elem => {
    elem.classList.add('fade-in')
  });
}
