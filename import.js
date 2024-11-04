let {person} = require("./export")
function showage_byindex(index) {
    let d=person[index]
    let current_year= 2024
    let age = current_year -d.year_of_birth
    return age;
}
console.log(person)
let answer=showage_byindex(0)
console.log(answer)