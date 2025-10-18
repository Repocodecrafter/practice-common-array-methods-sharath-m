//Task 1:
let orders = [["Latte","Tea", "Espresso"], ["Crossiant", "Muffin", "Bagel"]];
console.log("Initial orders:" , orders);

//Task2:
console.log("Drinks count: ", orders[0].length);
console.log("Pastries count: ", orders[1].length);

//Task 3:
console.log("1st order: ", (orders[0][1]), "and", (orders[1][2]));
console.log("2nd order: ", (orders[0][0]), "and", (orders[1][0]));
console.log("3rd order: ", (orders[0][2]), "and", (orders[1][1]));


//Task 4:
let row = 0;
let item = 0;
console.log("Selected order:", orders[row][item]);
row = 0;
item = 1;
console.log("Selected order:", orders[row][item]);
row = 0;
item = 2;
console.log("Selected order:", orders[row][item]);
row = 1;
item = 0;
console.log("Selected order:", orders[row][item]);
row = 1;
item = 1;
console.log("Selected order:", orders[row][item]);
row = 1;
item = 2;
console.log("Selected order:", orders[row][item]);



//Task 5:
console.log("All drinks:" );
for(i = 0; i < orders[0].length; i++){
    console.log(orders[0][i]);
}


//Task 6:
orders[0].push("flat white");
console.log("Updated drinks list: ", orders[0]);
console.log("Updated number of drinks after addition: ", orders[0].length);

let row = 1;
let item = 2;
console.log("The dynamically accessed order is: ", orders[1][2]);

