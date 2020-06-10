console.log('destructuring');

const person = {
    name: 'Saarthak',
    age: 26,
    location: {
        city: 'Aligarh',
        temp: '42 C'
    }
};

const { name, age } = person;
console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`City is ${city}. Temp is ${temperature}`);
}

console.log(`${person.name} is the person's name`);


const address = ['56', 'Prayag Sarovar Colony', 'Ramghat Road', 'Aligarh', '202001'];

console.log(`House No. is ${address[0]}. Street Name is ${address[1]}`);


const [houseNo, streetName, roadName, cityName] = address;

console.log(`Road Name is ${roadName}. City Name is ${cityName}`);