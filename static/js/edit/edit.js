let previousDay = 1;
let currentDay;
let daysList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function testFunct() {
}

//inserts a new nested row in the selected table
function insertRow(table_num) {
    let activeTable = null;
    switch (table_num) {
        case 0:
            activeTable = document.getElementById("active-table-0");
            break;
        case 1:
            activeTable = document.getElementById("active-table-1");
            break;
        case 2:
            activeTable = document.getElementById("active-table-2");
            break;
        case 3:
            activeTable = document.getElementById("active-table-3");
            break;
        case 4:
            activeTable = document.getElementById("active-table-4");
            break;
    }
    let newRow;
    if (activeTable != null)
        newRow = activeTable.insertRow(-1); //add at last

    let newCell = newRow.insertCell()
    let textBox = document.createElement("input");
    newCell.appendChild(textBox);
    textBox.setAttribute("type", "text");
    textBox.setAttribute("class", "form-control");
    textBox.setAttribute("id", "inputDefault");

    for (let i = 0; i < 4; i++) {
        let newCell = newRow.insertCell()
        let inputBox = newCell.appendChild(document.createElement("input"));
        inputBox.setAttribute("type", "text");
        inputBox.setAttribute("class", "form-control");
        inputBox.setAttribute("id", "inputDefault");
        inputBox.setAttribute("inputmode", "numeric");

        console.log("inserted")
    }
}

//changes day --TODO to be finished
function processDayButtonClick(day_num) {
    //updates currentDay and previousDay variables
    if (currentDay != null)
        previousDay = currentDay;
    currentDay = day_num;
    //for debugging
    console.log("previous day: ", previousDay);
    console.log("current day: ", currentDay);
    //selects and updates the previousDay's button
    let previous_day_button = document.getElementsByClassName("btn-outline-warning");
    if (previous_day_button.length > 0) {
        previous_day_button[0].classList.add("btn-outline-success");
        previous_day_button[0].classList.remove("btn-outline-warning");
    }
    //selects the correct dayButton to update
    let chosen_day_button;
    switch (day_num) {
        case 1: {
            chosen_day_button = document.getElementById("edit-day-btn-1");
            break;
        }
        case 2: {
            chosen_day_button = document.getElementById("edit-day-btn-2");
            break;
        }
        case 3: {
            chosen_day_button = document.getElementById("edit-day-btn-3");
            break;
        }
        case 4: {
            chosen_day_button = document.getElementById("edit-day-btn-4");
            break;
        }
        case 5: {
            chosen_day_button = document.getElementById("edit-day-btn-5");
            break;
        }
        case 6: {
            chosen_day_button = document.getElementById("edit-day-btn-6");
            break;
        }
        case 7: {
            chosen_day_button = document.getElementById("edit-day-btn-7");
            break;
        }
    }
    //button graphics update
    chosen_day_button.classList.remove("btn-outline-secondary");
    chosen_day_button.classList.add("btn-outline-warning");
    //title update
    document.getElementById("edit__day-h2").innerText = daysList[day_num - 1];
    //proceeds to update the logic
    getData()
    updateProgressBar()
    listToObjects()
}

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