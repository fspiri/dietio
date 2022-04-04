function heightAssigner(){
    console.log("abbecedario");
    const r = 0xff0000;



    console.log(document.getElementById("monday_foods").clientHeight);
    document.getElementById("day_1").style.height = document.getElementById("monday_foods").clientHeight + "px";
    document.getElementById("cost_1").style.height = document.getElementById("monday_foods").clientHeight + "px";
}