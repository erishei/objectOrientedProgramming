const person = {age: 14, height: 150, shirtSize: "M"};

// let copiedAge = person.age
// let copiedHeight = person.height
// let copiedShirtSize = person.shirtSize

// The below is the same as the three lines above, just shortened

const {age:copiedAge,height:copiedHeight,shirtSize} = person

console.log(`Here is a persons details ${copiedAge}, ${copiedHeight}, ${shirtSize}`);

//
//

const obj = {
    method: function() {
        console.log("Hello");
    }
};

console.log(obj)

//
//

// function calculateArea(...args){
//     let area
//     // get input
//     window.prompt()
//
//     //process
//     if(args.length() == 1) {
//         // triangle area
//         area = args[0]
//
//     }
//     // output
//     console.log()
// }
// The more focused and narrow your functions are, the better. Above is not a great example.


let areaFinal = 0
function calculateArea(...args){
    let area
    // get input
    window.prompt()

    //process
    if(args.length() == 1) {
        // triangle area
        // area = args[0]
        areaFinal = args[0]**2

    }
    // output
    console.log()
}




// 1x1, 2x2, 3x3 100x100
// 1+2+3+4+5+6+7... + 100x100


function differenceOfSquaredSums(n) {
    let sumOfSquares = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
        sum += i;
    }

    let squareOfSums = sum * sum;
    return squareOfSums - sumOfSquares;
}

const n = 100;
console.log(differenceOfSquaredSums(n));