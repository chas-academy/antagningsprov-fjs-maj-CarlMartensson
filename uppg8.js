

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
let persons = [
    { name: "Carl", age: 32 },
    { name: "Fredrik", age: 33 },
    { name: "Jocelyn", age: 28 },
    { name: "Sara", age: 45 },
    { name: "Johan", age: 50 },
]

for (let person of persons) {
    if (person.age > 30) {
        console.log(person.name)
    }
}
}

module.exports = { uppg8 };

uppg8()