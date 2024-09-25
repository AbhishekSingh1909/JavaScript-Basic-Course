const address = {
    street: 'Peltokatu',
    city: 'oulu',
    zipCode: 90650,
    country: 'Finland'
}

const showAddress = (address) => {
    for (const key in address) {
        console.log(`${key} : ${address[key]}`)
    }
}

showAddress(address);