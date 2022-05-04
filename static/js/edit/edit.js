let previousDay = 1;
let currentDay;
let daysList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function testFunct() {
}

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


    let newRow = activeTable.insertRow(-1); //add at last


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

function updateDay_edit(day_num) {
    if (currentDay != null)
        previousDay = currentDay;
    currentDay = day_num;

    document.getElementById("edit__day-h2").innerText = daysList[day_num - 1];


    console.log("previous day: ", previousDay)
    console.log("current day: ", currentDay)


    let previous_day_button = document.getElementsByClassName("btn-outline-warning");
    if (previous_day_button.length > 0) {
        previous_day_button[0].classList.add("btn-outline-success");
        previous_day_button[0].classList.remove("btn-outline-warning");
    }


    let chosen_day_button
    switch (day_num) {
        case 1:
            chosen_day_button = document.getElementById("edit-day-btn-1");
            break;
        case 2:
            chosen_day_button = document.getElementById("edit-day-btn-2");
            break;
        case 3:
            chosen_day_button = document.getElementById("edit-day-btn-3");
            break;
        case 4:
            chosen_day_button = document.getElementById("edit-day-btn-4");
            break;
        case 5:
            chosen_day_button = document.getElementById("edit-day-btn-5");
            break;
        case 6:
            chosen_day_button = document.getElementById("edit-day-btn-6");
            break;
        case 7:
            chosen_day_button = document.getElementById("edit-day-btn-7");
            break;
    }


    chosen_day_button.classList.remove("btn-outline-secondary");
    chosen_day_button.classList.add("btn-outline-warning");
    saveProgress()
    updateProgressBar()
}

function saveProgress() {
    //variables declarations
    let foods = [];

    if (currentDay != null) {
        //select a table, get inside, gather all data from that table
        let rows = []
        for (let i = 0; i < 5; i++) {
            let row_num = "row_".concat(i.toString());
            rows.push(document.getElementById(row_num))
            //rows.push(document.getElementById("row_1"));
        }

        for (let j = 0; j < 5; j++) {
            let row = rows[j];//.querySelectorAll("td")
            if (row != null) {
                let fields = row.getElementsByTagName("td");

                for (let i = 0; i < fields.length; i++) {
                    let inputElements = fields[i].getElementsByTagName("input");
                    for (let a = 0; a < inputElements.length; a++) {
                        foods.push(inputElements[a].value);
                    }
                }
            }
        }
    }
    //manageFoods(foods);
    let a = listToMatrix(foods, 5);
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[3]);
    console.log(a[4]);

    //from id? from class?
    //then it needs to be converted into json

}

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

function updateProgressBar() {
    successDays = document.getElementsByClassName("btn-outline-success");
    progress = (successDays.length * 100) / 7;
    document.getElementById("edit__progress-bar").style.width = (progress + '%');

}