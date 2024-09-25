function Address(street, city, country, code) {
    this.street = street
    this.city = city,
        this.country = country,
        this.z_code = code
}

const areEqual = (address1, address2) => {
    return (
        address1.street.toLowerCase() === address2.street.toLowerCase()
        && address1.city.toLowerCase() === address2.city.toLowerCase()
        && address1.country.toLowerCase() === address2.country.toLowerCase()
        && address1.z_code === address2.z_code
    )
}

const areSame = (address1, address2) => {
    return address1 === address2;
}

const address_1 = new Address('Peltokatu', 'Oulu', 'Finland', 90650)
const address_2 = new Address('peltokatu', 'oulu', 'finland', 90650)
const address_3 = address_1;

console.log(`address_1 and address_2 are equal : ${areEqual(address_1, address_2)}`)
console.log(`address_1 and address_2 are same : ${areSame(address_1, address_2)}`)
console.log(`address_1 and address_3 are same : ${areSame(address_1, address_3)}`)