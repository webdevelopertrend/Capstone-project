
/*Array*/
var foods = ["Beans", "potatoes", "eru", "pepper soup"];

function loadFoods(){
	document.getElementById('foods').innerHTML = foods;
}

function myFunc(){
	var food = prompt("What's your favorite dish? ");
    foods[foods.length] = food;
    document.getElementById('foods').innerHTML = foods;

}
