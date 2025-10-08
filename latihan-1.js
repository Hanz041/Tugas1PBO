class FruitBasket {
    constructor() {
        this.fruitsBasket = [];
    }

    addItem(item) {
        this.fruitsBasket.push(item);
        console.log(`${item} has been added to the basket.`);
    }

    removeLastItem() {
        if (this.fruitsBasket.length > 0) {
            const removedItem = this.fruitsBasket.pop();
            console.log(`${removedItem} has been removed from the basket.`);
        } else {
            console.log("The basket is already empty.");
        }
    }

    getInformation() {
        if (this.fruitsBasket.length > 0) {
            console.log("Fruits in the basket:");
            this.fruitsBasket.forEach(fruit => {
                console.log(`- ${fruit}`);
            });
        } else {
            console.log("The basket is empty.");
        }
    }
}

const myBasket = new FruitBasket();

myBasket.addItem("Apple");
myBasket.addItem("Banana");
myBasket.addItem("Orange");

myBasket.getInformation();

myBasket.removeLastItem();

myBasket.getInformation();