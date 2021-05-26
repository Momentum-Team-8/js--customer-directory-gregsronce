// header div
let divHeader = document.createElement('div');
divHeader.innerHTML = '<h1>Customer Directory</h1>';
document.getElementById('header').appendChild(divHeader);

// loop to create page
const customer = customers[0]
const insertionPoint = document.querySelector('#output')

for (let customer of customers) {
    const customerCard = document.createElement('div')
    customerCard.classList.add('customer-card')
    insertionPoint.appendChild(customerCard)
    console.log(customerCard)
    const customerImage = document.createElement('img')
    customerImage.src = customer.picture.large
    customerCard.appendChild(customerImage)
    const customerName = document.createElement('div')
    customerName.innerText = customer.name.first + " " + customer.name.last 
    customerCard.appendChild(customerName)
    const customerEmail = document.createElement('div')
    customerEmail.innerText = customer.email
    customerCard.appendChild(customerEmail)
    const customerAddress = document.createElement('div')
    customerAddress.innerText = customer.location.street.number + " " + customer.location.street.name
    customerCard.appendChild(customerAddress)
    const customerTown = document.createElement('div')
    customerTown.innerText = customer.location.city + ", " + " " + customer.location.state + " " + customer.location.postcode
    customerCard.appendChild(customerTown)
    const dateOfBirth = document.createElement ('div')
    dateOfBirth.innerText = "DOB" + " " + customer.dob.date
    customerCard.appendChild(dateOfBirth)
    const customerRegistration = document.createElement('div')
    customerRegistration.innerText = "Customer since:" + " " + customer.registered.date
    customerCard.appendChild(customerRegistration)
}




