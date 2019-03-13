import { Person, greeter } from "./greeter"

class Child implements Person {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

let child = new Child("aaa", "bbb")

console.log(greeter(child))