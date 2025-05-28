// const personalInformation = {
//   firstName: "Neyton",
//   lastName: "Nhatave",
//   city: "Tsalala",
//   state: "Matola",
//   zipCode: 1234
// }

// const {firstName: fn, lastName: ln} = personalInformation

// console.log(`${fn} ${ln}`)

// Destructuring Arrays

// let [firstName, middleName, lastName] = ["Neyton", "Nordino", "Nhatave"]

// console.log(`${firstName} ${middleName} ${lastName}`)

const person = {
  firstName: "Neyton",
  lastName: "Nhatave"
}

let { firstName, lastName } = person

console.log(lastName)