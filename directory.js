// header div
let divHeader = document.createElement('div');
divHeader.innerHTML = '<h1>Customer Directory</h1>';
document.getElementById('header').appendChild(divHeader);

// loop to create page
const customer = customers[0]
moment(customer.dob.date).format("MMM, D, YYYY")
const insertionPoint = document.querySelector('#output')

for (let customer of customers) {
    const customerCard = document.createElement('div')
    customerCard.classList.add('customer-card')
    insertionPoint.appendChild(customerCard)
    const customerImage = document.createElement('img')
    customerImage.src = customer.picture.large
    customerCard.appendChild(customerImage)
    const customerName = document.createElement('h1')
    customerName.innerText = customer.name.first + " " + customer.name.last 
    customerCard.appendChild(customerName)
    const customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email
    customerCard.appendChild(customerEmail)
    const customerAddress = document.createElement('h2')
    customerAddress.innerText = customer.location.street.number + " " + customer.location.street.name
    customerCard.appendChild(customerAddress)
    const customerTown = document.createElement('h2')
    customerTown.innerText = customer.location.city + ", " + " " + nameToAbbr(customer.location.state) + " " + customer.location.postcode
    customerCard.appendChild(customerTown)
    const dateOfBirth = document.createElement ('h2')
    dateOfBirth.innerText = "DOB:" + " " + moment(customer.dob.date).format("MMM, D, YYYY")
    customerCard.appendChild(dateOfBirth)
    const customerRegistration = document.createElement('h2')
    customerRegistration.innerText = "Customer since:" + " " + moment(customer.registered.date).format("MMM, D, YYYY")
    customerCard.appendChild(customerRegistration)
}



