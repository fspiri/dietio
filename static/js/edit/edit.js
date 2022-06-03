let previousDay = 1;
let currentDay;
let daysList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function testFunct() {
}

//inserts a new nested row in the selected table


//gathers data from inputs
function getData() {
    let data = [];

    if (currentDay != null) {
        let inputBoxes = document.getElementsByTagName("input");
        data.length = inputBoxes.length;
        for (let a = 0; a < inputBoxes.length; a++) {
            data[a] = inputBoxes[a].value;
        }
    }
    //for debugging
    printTableMatrix(data);
    return data;
}

//object of an element of the diet
function Food(name, val1, val2, val3, val4) {
    this.name = name;       //food name
    this.grams = val1;      //weight in grams
    this.calories = val2;   //calories for 100g
    this.proteins = val3;   //proteins for 100g
    this.cost = val4;       //cost for 100g
}

//convert the list into Food objects
function listToObjects() {
    let matrix = listToMatrix(getData(), 5);
    let diet = [];

    for (let i = 0; i < matrix.length; i++) {
        let food = new Food(matrix[i][0], matrix[i][1], matrix[i][2], matrix[i][3], matrix[i][4]);
        diet.push(food);
    }

    return diet;
}

//converts the Food object list into JSON


//converts a list 'list' to a matrix of length 'subarrayLength[]'
function listToMatrix(list, subarrayLength) {
    let matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % subarrayLength === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

//updates the create-new-diet progress bar
function updateProgressBar() {
    let successDays = document.getElementsByClassName("btn-outline-success");
    let progress = (successDays.length * 100) / 7;
    document.getElementById("edit__progress-bar").style.width = (progress + '%');
}

//prints the gathered data from the creation table
function printTableMatrix(foods) {
    if (foods === null)
        throw new Error("table matrix is not instantiated, check the creation process validity")
    let a = listToMatrix(foods, 5);
    for (let b = 0; b < a.length; b++) {
        console.log(a[b]);
    }

}