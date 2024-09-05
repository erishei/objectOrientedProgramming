// class person {
//     firstName;
//     lastName;
//
//     constructor(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//
//     introduce () {
//         console.log(`Hello, I am ${this.firstName} ${this.lastName}`);
//     }
// }
//
// const person1 = new person("Erica", "Sheidai");
// const person2 = new person("Test", "Testesen")
//
// person1.introduce();
// person2.introduce();

class person {
    #firstName;
    #lastName;

    constructor(fName, lName) {
        this.#firstName = fName;
        this.#lastName = lName;
    }

    get getFirstName(){
        return this.#firstName;
    }

    set setFirstName(newFirstName){
        this.#firstName = newFirstName;
    }

    get getLastName(){
        return this.#lastName;
    }

    set setLastName(newLastName){
        this.#lastName = newLastName;
    }

    introduce () {
        console.log(`Hello, I am ${this.firstName} ${this.lastName}`);
    }
}



