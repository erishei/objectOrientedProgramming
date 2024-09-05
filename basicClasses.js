// class Duck{
//     // fields / properties
//
//     id;
//     name;
//     temperament;
//     #weight;
//
//     // #id;
//     // #name;
//     // #temperament;
//     // Now they're private. But also useless bc they cant be changed/updated
//
//     // constructor(id, name) {
//     //     this.#id = id;
//     //     this.#name = name;
//     //     this.#temperament = "uncertain"
//     // }
//
//     // constructor
//
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//         this.temperament = "uncertain"
//         this.#weight = "Is this right?"
//     }
//
//     setWeight(value){
//         this.#weight = value;
//     }
//     getWeight(){
//        return this.#weight
//     }
//     //methods
//
//     // For locked fields:
//     // setTemperament(value){
//     //     if(user...)
//     //     this.#temperament = value;
//     // }
//
// // Always hide your fields and allow access with setters & getters
// }
//
// const duck1 = new Duck(1, "Sptheven")
// console.log(duck1);
//
// const duck2 = new Duck(2, "Dave")
// console.log(duck2)
//
// duck2.temperament = "bit of a douche"
// console.log(duck2)
//
//
//
// // class duckCalculator
//     // you CAN create classes that are abstract/don't actually exist, it might just serve u a function

