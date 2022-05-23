let selectedDiet = 1;
let selectedDay = 1;

function setSelectedDiet(val) {
    selectedDiet = val;
}

function getSelectedDiet() {
    return selectedDiet;
}

function setSelectedDay(val) {
    selectedDay = val;
}

function getSelectedDay() {
    return selectedDay;
}

//creates and returns an array of type [[diet_id],[diet_name]]
function getDietsList(diets_id_list) {
    let dietsList = [];

    if (diets_id_list !== undefined) {
        for (let i = 0; i < diets_id_list?.length; i++) {
            let dietToString = JSON.stringify(diets_id_list[i]);
            let length = dietToString.length;
            let ind = dietToString.indexOf(',');

            let name = dietToString.substring(3, ind - 1)
            let id = dietToString.substring(ind + 1, length - 2)

            dietsList.push([id, name])
        }
    } else {
        throw new Error("problem at getDietList");
    }

    return dietsList;
}

//creates and returns an array of objects of days of the selected diet
function getDaysList(daysList) {
    //plan is to gather from the DaysOfTheWeekTable all the days_id which have the same id as te selected diet
    let dietDaysList = [];

    for (let i = 0; i < daysList?.length; i++) {
        if (daysList[0][i][0] === getSelectedDiet()) {   //this creates a diet with only days of the selected diet
            let day = {
                diet_id: daysList[0][i][0],
                day_id: daysList[0][i][1],
                meal_number: daysList[0][i][2],
                mealfood_id: daysList[0][i][3],
            };

            dietDaysList.push(day)
            //console.log(day);
        }
    }

    return dietDaysList;
}

function getMealGroupList(daily_list) {
    let mealGroupList = []
    for (let i = 0; i < daily_list.length; i++) {
        if (daily_list[i].day_id === getSelectedDay()) {
            mealGroupList.push(daily_list[i].mealfood_id);
            //console.log(daily_list[i].mealfood_id);
        }
    }
    return mealGroupList;
}

//creates and returns an array of objects with the necessary info using meal and food tables
function getMealsList(mealsGroups_list, mealfood_list) {
    let meals_list = []
    for (let i = 0; i < mealsGroups_list.length; i++) {
        if (mealsGroups_list[0].mealfood_id === mealfood_list[i][1] &&
            mealfood_list[0][i] !== undefined) {
            let mealfood = {
                meal_1: mealfood_list[0][i][2],
                meal_2: mealfood_list[0][i][3],
                meal_3: mealfood_list[0][i][4],
                meal_4: mealfood_list[0][i][5],
                meal_5: mealfood_list[0][i][6],
                meal_6: mealfood_list[0][i][7],
                meal_7: mealfood_list[0][i][8],
                meal_8: mealfood_list[0][i][9],
                meal_9: mealfood_list[0][i][10],
                meal_10: mealfood_list[0][i][11],
            }
            meals_list.push(mealfood)
        }
    }
    return meals_list;
}

function getMealInfo(meal) {

}

function load_page(
    diets_id_list,   //diets of the current user
    days_list,
    mealfood_list,
    //og_meals_list,
) {
    let diets_list = getDietsList(diets_id_list);  //array of the form [[id],[name]]
    //console.log(diets_list)
    let daily_list = getDaysList(days_list);
    //console.log(daily_list)

    // list of all the meals in a given day, held inside different mealfoodGroups but in the same diet
    let meals_list = getMealsList(getMealGroupList(daily_list), mealfood_list);
    //console.log(meals_list)
    //console.log(og_meals_list)

}


function tableCreate() {
    const body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < 3; i++) {
        const tr = tbl.insertRow();

        for (let j = 0; j < 2; j++) {
            if (i === 2 && j === 1) {
                break;
            } else {
                const td = tr.insertCell();
                td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
                td.style.border = '1px solid black';
                if (i === 1 && j === 1) {
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl);
}
