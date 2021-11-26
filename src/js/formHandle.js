function addToFeedbackForm(from) {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  let message = ''

  if (from === 'custom') {
    // to standardise things, build a message here with all the user inputs
    const productType = document.getElementById('productType').value
    const pagesNeeded = document.getElementById('pagesNeeded').value
    // for now generate a random 8 digit order id for them because we don't actually have a backend
    const orderID = Math.floor(Math.random() * 99999999)
    const extraMsg = document.getElementById('extraInfo').value

    message = `Product Type: ${productType}\nPages/Banners Needed: ${pagesNeeded}\nOrder ID: ${orderID}\n\nYour Thoughts Etc:\n${extraMsg}`
  } else if (from === 'contact') {
    // however if the user came from contact, there is already a dedicated message field
    message = document.getElementById('message').value
  }

  console.log(name, email, message)

  const userInfo = {
    name: name,
    email: email,
    message: message
  }

  localStorage.setItem('userInfo', JSON.stringify(userInfo))
  location.href = 'formFeedback.html'
}

function retrieveFromFeedbackForm() {

  // heheheh if user no use the submit button from the form to get here heheheheh
  if (!localStorage.getItem('userInfo')) {
    location.href = 'index.html'
  }
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  const nameElem = document.getElementById('name')
  const emailElem = document.getElementById('email')
  const messageElem = document.getElementById('message')

  nameElem.value = userInfo.name
  emailElem.value = userInfo.email
  messageElem.value = userInfo.message
}
