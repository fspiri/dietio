let selectedDietId = 1;
let selectedDay = 1;

/*
    INITIAL VARIABLES FROM DB DECLARATION
variables converted to list from the JSON passed from the API.
    initialized in loadPage(...) -> loadLocalVariables(...)
*/
// list of all the diets
let diets_list = [];
// list of al the days in the diets
let daily_list = [];
// list of all the mealGroups
let mealsGroupList = [];
// list of all the mealsList
let mealsList = [];
// list of the entire foodList
let foodList = [];


/*
    REFINED VALUES DECLARATION
variables stripped out of useless elements (making the app lighter [ ... I hope ... ])
    initialized in loadPage(...) -> refineVariables()
*/

// id, name and length of selected diet - could have used selectedDietId, but whatever
let selectedDiet;
// list of the days only of the selected diet
let refinedDays = [];
// object containing data only of the selected day of the selected diet
let dietDay;
// list of only the mealGroups_IDs of the selected day of the selected diet
let dayMealsGroupIDsList = [];
// list of only the mealsGroups needed for the day
let refinedMealGroupsList = [];
// list of only the meals used refinedMealsGroupsList
let refinedMealsList = [];
// list of only the foods used by refinedMealsList
let refinedFoodList = [];

function resetRefinedVariables() {
    refinedDays = [];
    dietDay = null;
    dayMealsGroupIDsList = [];
    refinedMealGroupsList = [];
    refinedMealsList = [];
    refinedFoodList = [];
}

function checkDay(val) {
    let length = selectedDiet[2];
    let dayNum;

    if (val > length) {
        dayNum = val - (length);
    } else if (val < 1) {
        dayNum = (length) - val;
    } else {
        dayNum = val;
    }
    return dayNum;

}

function setSelectedDietId(val) {
    if (val != null) {
        if (selectedDietId !== val) {
            selectedDietId = val;
        }
    } else
        selectedDietId = 1;
}

function getSelectedDietId() {
    return selectedDietId;
}

function setSelectedDay(val, og_diets_id_list, og_days_list, og_groupmeal_list, og_meals_list, og_food_list) {
    selectedDay = checkDay(val);
    cleanTable();
    resetRefinedVariables();

    loadPage(og_diets_id_list, og_days_list, og_groupmeal_list,
        og_meals_list, og_food_list);

}

function getSelectedDay() {
    return selectedDay;
}

/*
Converts the given JSON to list.
creates and returns an array of arrays with all the diets
    [[diet_id],[diet_name]]
 */
function getDietsList(diets_id_list) {
    let dietsList = [];

    if (diets_id_list !== undefined) {
        for (let i = 0; i < diets_id_list?.length; i++) {

            let dietToString = JSON.stringify(diets_id_list[i]);
            let length = dietToString.length;
            let ind = dietToString.indexOf(',');
            let secondInd = dietToString.substring(ind + 1).indexOf(',') + ind;


            let name = dietToString.substring(3, ind - 1);
            let id = dietToString.substring(ind + 1, secondInd + 1);
            let daysLength = dietToString.substring(secondInd + 2, length - 2)


            dietsList.push([id, name, daysLength]);
        }
    } else {
        throw new Error("problem at getDietList");
    }

    return dietsList;
}

/*
Converts the given JSON to list.
creates and returns an array of objects of days of the selected diet.
    day = {day_id, diet_id, mealfood_one, mealfood_two,
            mealfood_three, mealfood_four, mealfood_five }
 */
function redirectToMain() {
    location.replace("/main?diet_id=" + getSelectedDietId());
}

function getDaysList(daysList) {
    //plan is to gather from the DaysOfTheWeekTable all the days_id which have the same id as te selected diet
    let dietDaysList = [];

    for (let i = 0; i < daysList[0].length; i++) {
        if (daysList[0][i][2] === parseInt(getSelectedDietId())) {   //this creates a list with only days of the selected diet
            let day = {
                day_id: daysList[0][i][1],
                diet_id: daysList[0][i][2],
                mealfood_one: daysList[0][i][3],
                mealfood_two: daysList[0][i][4],
                mealfood_three: daysList[0][i][5],
                mealfood_four: daysList[0][i][6],
                mealfood_five: daysList[0][i][7],
            };
            dietDaysList.push(day);
        }
    }

    return dietDaysList;
}

/*
Converts the given JSON to list.
creates and returns an array of objects of mealGroups.
    mealGroup = {diet_id, mealNumberOfTheDay, meal_1, meal_2, meal_3, meal_4, meal_5,
                    meal_6, meal_7, meal_8, meal_9, meal_10 }
 */
function getMealsGroupList(og_groupmeal_list) {
    let mealGroupList = []
    for (let i = 0; i < og_groupmeal_list[0].length; i++) {
        let mealGroup = {
            mealGroup_id: og_groupmeal_list[0][i][0],
            diet_id: og_groupmeal_list[0][i][1],
            mealNumberOfTheDay: og_groupmeal_list[0][i][2],
            meal_1: og_groupmeal_list[0][i][3],
            meal_2: og_groupmeal_list[0][i][4],
            meal_3: og_groupmeal_list[0][i][5],
            meal_4: og_groupmeal_list[0][i][6],
            meal_5: og_groupmeal_list[0][i][7],
            meal_6: og_groupmeal_list[0][i][8],
            meal_7: og_groupmeal_list[0][i][9],
            meal_8: og_groupmeal_list[0][i][10],
            meal_9: og_groupmeal_list[0][i][11],
            meal_10: og_groupmeal_list[0][i][12],
        }
        //console.log(mealGroup)
        mealGroupList.push(mealGroup);
    }
    return mealGroupList;
}

/*
Converts the given JSON to list.
creates and returns an array of objects of meals.
    meal = { id, food_id, quantity }
 */
function getMealsList(og_meals_list) {
    let meals_list = [];

    for (let i = 0; i < og_meals_list.length; i++) {
        let meal = {
            id: og_meals_list[i][0],
            food_id: og_meals_list[i][1],
            quantity: og_meals_list[i][2],
        }
        meals_list.push(meal);
    }

    return meals_list;
}

/*
Converts the given JSON to list.
creates and returns an array of objects of food.
    food = { food_id, foodName, calories, proteins, carbs, fats, cost }
 */
function getFoodList(og_food_list) {
    let foodList = [];
    for (let i = 0; i < og_food_list.length; i++) {
        let food = {
            food_id: og_food_list[i][0],
            foodName: og_food_list[i][1],
            calories: og_food_list[i][2],
            proteins: og_food_list[i][3],
            carbs: og_food_list[i][4],
            fats: og_food_list[i][5],
            cost: og_food_list[i][6],
        }
        foodList.push(food);
    }
    return foodList;
}

// loads all the crude unprocessed variables
function loadLocalVariables(og_diets_id_list, og_days_list, og_groupmeal_list, og_meals_list, og_food_list) {
    diets_list = getDietsList(og_diets_id_list);
    daily_list = getDaysList(og_days_list);
    mealsGroupList = getMealsGroupList(og_groupmeal_list);
    mealsList = getMealsList(og_meals_list);
    foodList = getFoodList(og_food_list);
}

// clears all the memory used for holding the original variables
function freeOriginalVariables(og_diets_id_list, og_days_list, og_groupmeal_list, og_meals_list, og_food_list) {
    og_diets_id_list = null;
    og_days_list = null;
    og_groupmeal_list = null;
    og_meals_list = null;
    og_food_list = null;
}

// takes the local variables and keeps only what is needed for the rendering
function refineVariables() {

    // STEP 0 - initialize the diet variable ( will **NOT** work with the dietList after )
    for (let i = 0; i < diets_list.length; i++) {
        if (diets_list[i][0] === getSelectedDietId().toString()) {
            selectedDiet = diets_list[i];
            break;
        } else if (i === diets_list.length - 1) {
            throw new Error("ERROR (refineVariables() - 1): diet not found in diets_list");
        }
    }

    // STEP 1 - Check if the selected day is in the range of the selected diet
    if (getSelectedDay() > parseInt(selectedDiet[2])) {
        throw new Error("ERROR (refineVariable() - 3): selected day higher than number of days in the diet");
    }
    // STEP 2 - select only the days of the selectedList
    for (let i = 0; i < daily_list.length; i++) {
        if (daily_list[i].diet_id.toString() === selectedDiet[0]) {
            refinedDays.push(daily_list[i])
        }
        if (refinedDays.length === 0) {
            throw new Error("ERROR (refineVariables() - 2: days of the current diet not found)");
        }
    }


    // STEP 3 - select the correct day from the dayList
    for (let i = 0; i < refinedDays.length; i++) {
        if (refinedDays[i].day_id === getSelectedDay()) {
            dietDay = refinedDays[i];
            break;
        } else if (i === refinedDays.length - 1) {
            throw new Error("ERROR (refineVariables() - 3): day not found in diet");
        }
    }


    // STEP 3.5 - make a list of the mealGroups of that day
    dayMealsGroupIDsList = [dietDay.mealfood_one, dietDay.mealfood_two, dietDay.mealfood_three,
        dietDay.mealfood_four, dietDay.mealfood_five]


    // STEP 4 - keep only the mealGroups of that day only
    for (let j = 0; j < dayMealsGroupIDsList.length; j++) {
        for (let i = 0; i < mealsGroupList.length; i++) {
            if (mealsGroupList[i].mealGroup_id === dayMealsGroupIDsList[j]) {
                refinedMealGroupsList.push(mealsGroupList[i]);
                break;
            }
        }
    }

    // STEP 5 - keep only the meals of those selected mealGroups
    for (let i = 0; i < refinedMealGroupsList.length; i++) {
        for (let j = 0; j < mealsList.length; j++) {

            if (refinedMealGroupsList[i].meal_1 === mealsList[j].id ||
                refinedMealGroupsList[i].meal_2 === mealsList[j].id ||
                refinedMealGroupsList[i].meal_3 === mealsList[j].id ||
                refinedMealGroupsList[i].meal_4 === mealsList[j].id ||
                refinedMealGroupsList[i].meal_5 === mealsList[j].id) {
                refinedMealsList.push(mealsList[j]);
            }
        }
    }


    // STEP 6 - keep only the food needed for those meals
    for (let i = 0; i < refinedMealsList.length; i++) {
        for (let j = 0; j < foodList.length; j++) {
            if (refinedMealsList[i].food_id === foodList[j].food_id) {
                refinedFoodList.push(foodList[j]);
            }
        }
    }
}

// frees up resources used to store entire JSON to lists
// makes variables eligible for being garbage-collected
function freeLocalVariables() {
    //diets_list = null;
    daily_list = null;
    mealsGroupList = null;
    mealsList = null;
    foodList = null;
}


function cleanTable() {

    for (let i = 0; i < refinedMealGroupsList.length; i++) {
        let table = document.getElementById("active-table-" + i);
        let size = table.childNodes[1].childNodes.length;

        for (let j = 3; j < size; j++) {
            removeRow(i);
        }
    }

}


function loadPage(
    og_diets_id_list,       // diets of the current user
    og_days_list,           // days of the current selected diets
    og_groupmeal_list,      // all the meals of a part of the day (breakfast, ... )
    og_meals_list,          // food and quantity
    og_food_list,           // list of all the foods
) {

    let params = new URLSearchParams(window.location.search)
    let selected_id_diet = params.get("diet_id");


    setSelectedDietId(selected_id_diet, og_diets_id_list, og_days_list, og_groupmeal_list,
        og_meals_list, og_food_list);
    loadLocalVariables(og_diets_id_list, og_days_list, og_groupmeal_list,
        og_meals_list, og_food_list);
    freeOriginalVariables(og_diets_id_list, og_days_list, og_groupmeal_list,
        og_meals_list, og_food_list)
    refineVariables();
    freeLocalVariables();
    updateCurrentDay();
    loadDropDownElements();


    for (let i = 0; i < Object.keys(refinedMealGroupsList).length; i++) {
        if (loadDietPart(i) !== 0) {
            removeFirstRow(i);
        }
    }
}

function loadDropDownElements() {
    document.getElementById("dropdownMenuButton1").innerText = selectedDiet[1];
    document.getElementById("dropdownMenu1").innerHTML = "";
    let menu = document.getElementById("dropdownMenu1");

    for (let i = 0; i < diets_list.length; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.innerText = textContent = diets_list[i][1];
        a.setAttribute("href", "#");
        a.style.textAlign = "center";
        a.classList.add("dropdown-item");
        li.appendChild(a);
        menu.appendChild(li);
    }
}

function save() {
    const NUMBEROFDAYPARTS = 5;
    let day = getSelectedDay();
    let diet_id = getSelectedDietId();

    let foodFlag = false;
    let mealGroupFlag = false;

    let tempFood;
    let tempGroup;
    /*
    n = number of meals

    <table> --> { <tbody> --> ( n+1 ) <tr> --> { 2 <td>:---> {   foodName[input:text]   }
                                                         \-> {   qty[input:numeric]     }
     */
    let bodiesList = [];
    for (let i = 0; i < NUMBEROFDAYPARTS; i++)
        bodiesList.push(document.getElementById("active-table-" + i).getElementsByTagName("tbody")[0]);


    let groupMealsList = [bodiesList.length];
    for (let i = 0; i < bodiesList.length; i++) {
        let mealsList = [];
        for (let j = 1; j < bodiesList[i].getElementsByTagName("tr").length; j++) {
            /*
            TODO - searching inside the refined food list is a problem, because what if the user inputs a food
                that is not currently being used? find a way to keep the original list
             */
            for (let a = 0; a < refinedFoodList.length; a++) {
                if (refinedFoodList[a].foodName ===
                    bodiesList[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[0].getElementsByTagName("input")[0].value) {

                    tempFood = refinedFoodList[a];
                    foodFlag = true;
                }
            }

            for (let a = 0; a < refinedMealGroupsList.length; a++) {
                if (parseInt(diet_id) === parseInt(refinedMealGroupsList[a].diet_id)
                    && parseInt(refinedMealGroupsList[a].mealNumberOfTheDay) === i + 1) {

                    tempGroup = refinedMealGroupsList[a];
                    mealGroupFlag = true;
                }
            }

            if (foodFlag && mealGroupFlag) {
                let meal = {
                    day: day,
                    diet_id: parseInt(diet_id),
                    mealGroup_id: tempGroup.mealGroup_id,
                    mealNumberOfTheDay: tempGroup.mealNumberOfTheDay,
                    food_id: tempFood.food_id,
                    foodName: bodiesList[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[0].getElementsByTagName("input")[0].value,
                    quantity: bodiesList[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[1].getElementsByTagName("input")[0].value,
                }
                mealsList.push(meal);
            }
        }
        groupMealsList[i] = mealsList;
    }

    let processedMeals = [];
    let processedMealGroups = [];
    for (let i = 0; i < groupMealsList.length; i++) {
        for (let j = 0; j < groupMealsList[i].length; j++) {
            let newMeal = {
                id: refinedMealGroupsList[i].meal_1,
                food_id: groupMealsList[i][j].food_id,
                quantity: groupMealsList[i][j].quantity,
            }
            processedMeals.push(newMeal);
        }
        for (let e = 0; e < processedMeals.length; e++) {


        }
        let counter = 1;
        let newMealGroup = {
            id: refinedMealGroupsList[i].id,
            diet_id: diet_id,
            mealNumberOfTheDay: counter++,
            meal_id_1: processedMeals[1].id || '',
            meal_id_2: '',
            meal_id_3: '',
            meal_id_4: '',
            meal_id_5: '',
            meal_id_6: '',
            meal_id_7: '',
            meal_id_8: '',
            meal_id_9: '',
            meal_id_10: '',
        }
        processedMealGroups.push(newMealGroup);

    }
    console.log(processedMealGroups)
    console.log(groupMealsList);

}

function removeFirstRow(table_num) {
    let table = document.getElementById("active-table-" + table_num);
    table.childNodes[1].childNodes[2].remove();

}

function loadDietPart(group_num) {
    let counter = 0;
    let nameAndQuantity = [2];

    let mealsGroupList = Object.values(refinedMealGroupsList[group_num]);

    for (let i = 3; i < mealsGroupList.length; i++) //takes only from the first meal_id and on
    {
        if (mealsGroupList[i] != null) //discards all non-specified meals
        {
            nameAndQuantity = getNameAndQuantity(mealsGroupList[i]); //gets foodName and foodQuantity
            insertRow(group_num, nameAndQuantity[0], nameAndQuantity[1]);
            counter++;
        }
    }
    return counter;
}

function getNameAndQuantity(meal_id) {
    let food_id;
    let quantity;
    let foodName;

    for (let j = 0; j < refinedMealsList.length; j++) //searches across all meals
    {
        if (refinedMealsList[j].id === meal_id) {   //if it finds the same meal_id it continues

            food_id = refinedMealsList[j].food_id;
            quantity = refinedMealsList[j].quantity;
            for (let h = 0; h < refinedFoodList.length; h++) //searches through the foodlist
            {
                if (refinedFoodList[h].food_id === food_id) //when it finds a matching food_id, it updates the foodName
                {
                    foodName = refinedFoodList[h].foodName;
                }
            }
        }
    }
    return [foodName, quantity];
}

function updateCurrentDay() {
    let dayH1 = document.getElementById("todays_date");
    dayH1.innerText = getSelectedDay().toString();
}

function getMeals(mealGroup) {
    let meals = [];
    for (let i = 0; i < refinedMealsList.length; i++) {
        if (refinedMealsList[i].id === mealGroup.meal_1 ||
            refinedMealsList[i].id === mealGroup.meal_2 ||
            refinedMealsList[i].id === mealGroup.meal_3 ||
            refinedMealsList[i].id === mealGroup.meal_4 ||
            refinedMealsList[i].id === mealGroup.meal_5 ||
            refinedMealsList[i].id === mealGroup.meal_6 ||
            refinedMealsList[i].id === mealGroup.meal_7 ||
            refinedMealsList[i].id === mealGroup.meal_8 ||
            refinedMealsList[i].id === mealGroup.meal_9 ||
            refinedMealsList[i].id === mealGroup.meal_10) {
            meals.push(refinedMealsList[i])
        }
    }
    let compound = [];
    for (let i = 0; i < refinedFoodList.length; i++) {
        for (let j = 0; j < meals.length; j++) {
            if (refinedFoodList[i].food_id === meals[j].food_id) {
                let food = {
                    name: refinedFoodList[i].foodName,
                    quantity: meals[j].quantity
                }
                compound.push(food);
            }
        }
    }
    return compound;

}

function removeRow(table_num) {
    let activeTable = document.getElementById("active-table-" + table_num);

    activeTable.lastChild.lastChild.remove();
}

function insertRow(table_num, foodName, quantity) {
    let activeTable = document.getElementById("active-table-" + table_num);

    let newRow;
    if (activeTable != null)
        newRow = activeTable.insertRow(-1); //add at last

    let newCell = newRow.insertCell()
    let foodNameBox = document.createElement("input");
    foodNameBox.setAttribute("type", "text");
    foodNameBox.setAttribute("class", "form-control");
    foodNameBox.setAttribute("id", "inputDefault");
    if (foodName !== undefined) {
        foodNameBox.value = foodName;
    }

    //foodNameBox.setAttribute("placeholder", foodName);
    newCell.appendChild(foodNameBox);

    newCell = newRow.insertCell()
    let quantityBox = newCell.appendChild(document.createElement("input"));
    quantityBox.setAttribute("type", "number");
    quantityBox.setAttribute("class", "form-control");
    quantityBox.setAttribute("id", "inputDefault");
    if (quantity !== undefined) {
        quantityBox.value = quantity;
    }
    //quantityBox.setAttribute("placeholder", quantity);

}
