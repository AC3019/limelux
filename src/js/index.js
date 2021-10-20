/* 
  Make use of intersection observer and add a fade in effect to the featured product cards
  - adds a wow factor to those with modern supported browsers 
  - doesn't affect those that does not support, they just don't get the effects
*/

// get all the elements with the class of featured product
const featProducts = document.querySelectorAll('.featured-product')

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