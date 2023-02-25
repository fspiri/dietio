const weekly_list = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
function heightAssigner(){
    document.getElementById("day_1").style.height = document.getElementById("monday_foods").clientHeight + "px";
    document.getElementById("cost_1").style.height = document.getElementById("monday_foods").clientHeight + "px";

    document.getElementById("day_2").style.height = document.getElementById("tuesday_foods").clientHeight + "px";
    document.getElementById("cost_2").style.height = document.getElementById("tuesday_foods").clientHeight + "px";

    document.getElementById("day_3").style.height = document.getElementById("wednesday_foods").clientHeight + "px";
    document.getElementById("cost_3").style.height = document.getElementById("wednesday_foods").clientHeight + "px";

    document.getElementById("day_4").style.height = document.getElementById("thursday_foods").clientHeight + "px";
    document.getElementById("cost_4").style.height = document.getElementById("thursday_foods").clientHeight + "px";

    document.getElementById("day_5").style.height = document.getElementById("friday_foods").clientHeight + "px";
    document.getElementById("cost_5").style.height = document.getElementById("friday_foods").clientHeight + "px";

    document.getElementById("day_6").style.height = document.getElementById("saturday_foods").clientHeight + "px";
    document.getElementById("cost_6").style.height = document.getElementById("saturday_foods").clientHeight + "px";

    document.getElementById("day_7").style.height = document.getElementById("sunday_foods").clientHeight + "px";
    document.getElementById("cost_7").style.height = document.getElementById("sunday_foods").clientHeight + "px";

    document.getElementById("day_8").style.height = document.getElementById("total_foods").clientHeight + "px";
    document.getElementById("cost_8").style.height = document.getElementById("total_foods").clientHeight + "px";
}

function boot(){
    heightAssigner();
}

function changeDay(value){
    let day = document.getElementById("welcome_day").innerText.toString().toLowerCase();
    let doc = document.getElementById("welcome_day");
    console.log(day);
    if(weekly_list.includes(day)){
        let counter = weekly_list.indexOf(day);
        if(counter === weekly_list.length-1 && value === 1)
            counter = -1;
        if(counter === 0 && value != 1)
            counter = weekly_list.length;

        if(value === 1){   //increase
            document.getElementById("welcome_day").innerText = weekly_list[++counter];
            return;
        }
        document.getElementById("welcome_day").innerText = weekly_list[--counter];
        return;
    }
    else throw new Error("error with the given day");

}