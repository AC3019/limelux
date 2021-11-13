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

    // for now just toggle the class see if it works
    elem.classList.add('filter-active')
    // if there is already a filter, remove the filter-active class from it
    if (currentFilter) {
        currentFilter.classList.remove('filter-active')
    }
    // reset the currentFilter to the newly filtered thing
    currentFilter = elem
}