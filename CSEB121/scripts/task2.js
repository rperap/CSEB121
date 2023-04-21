/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Rogelio Perea";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const rogelioPerea = document.querySelector('#name');

rogelioPerea.textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year

const date = new Date();
const currentYear = document.querySelector('#year');
currentYear.textContent = date.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
let myPhoto = "images/rogelio.perea.png";

const myPicture = document.querySelector("img");

myPicture.setAttribute("src", "images/rogelio.perea.png");
myPicture.width = 240;
myPicture.height = 300;
// Step 5: declare and instantiate a variable to hold the name of your picture


document.querySelector("img").setAttribute("src",myPhoto);


// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

var foodList = document.createElement("ol");

var foods = [ -1, "-3", "chicken sandwich", "salad", "Hamburguer", "fried chicken"]; 

var food = "Fried Fish";

foods.push(food);


foods.shift();


foods.pop();

for (let index = 0; index < foods.length; index++) {
    var food = document.createElement("li");

    food.appendChild(document.createTextNode(foods[index]));

    foodList.appendChild(food);
}

document.querySelector("#food").appendChild(foodList);


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2



