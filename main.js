// Objects should be here

class Order {
    // fields
    orderId;
    total;
    date;

    //constructor
    constructor(ordId, total, date) {
        this.orderId = ordId;
        this.total = total;
        this.date = date;
    }

    //method
    printReceipt() {
        console.log(
            `Receipt Id: ${this.orderId}, Date: ${this.date}, Total: ${this.total}`
        );
    }
}

// Invoking the method happens here
// const order1 =


