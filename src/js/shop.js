// adds and removes .filter-active to the element passed in, 
// AS LONG AS: 
//   The element is not focused (the user didn't filter based on that category)

// stores the currently filtered category's element (if any)
let currentFilter = null;

function filterHovered(elem) {
    if (elem.classList.contains('filter-active') && !(currentFilter && elem == currentFilter)) {
        elem.classList.remove('filter-active')
    } else if (!elem.classList.contains('filter-active')) {
        elem.classList.add('filter-active')
    }
}

function filterCategory(elem) {
    // there's nothing to filter
    if (currentFilter && elem == currentFilter) return

    const filterCategory = elem.getAttribute('data-filter-category')
    // console.log(filterCategory)

    if (filterCategory === 'null') {
        alert('More categories are coming soon, for now, it doesn\'t exist yet, sorry.')
        // skip the rest of this function
        return
    }

    // remove the visibility of all the divs (display none)
    document.querySelectorAll('div.category').forEach(elem => {
        elem.style.display = 'none'
    })

    // toggle back the visibility of the div with the id that matches the filter
    document.getElementById(filterCategory).style.display = 'block'

    goToTop()

    elem.classList.add('filter-active')
    // if there is already a filter, remove the filter-active class from it
    if (currentFilter) {
        currentFilter.classList.remove('filter-active')
    }
    // reset the currentFilter to the newly filtered thing
    currentFilter = elem
}