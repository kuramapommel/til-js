interface Person {
    firstName: string
    lastName: string
}

function greeter({ firstName, lastName }: Person) {
    return `Hello, ${firstName} ${lastName}`
}

let user = { firstName: "Jane", lastName: "User" }

console.log(greeter(user))

type T = { firstName: string, lastName: string }

class C implements Person {

    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}