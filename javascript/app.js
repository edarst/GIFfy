// set variables

var food = ["cheeseburger", "steak", "sandwich", "taco", "burrito", "pizza", "bacon", "sausage", "cheesecake", "pie", "ice cream"];

//functions that will render buttons on the page

	function makeButtons () {

//remove any child element with .empty

		$(".buttons-view").empty();

		//loop through the array of food

		for (var i = 0; i < food.length; i++) {

			//make the variable create a button

			var buttonCreate = $("<button>");

			//add the class to the button

			buttonCreate.addClass("food btn btn-default");

			//attribute data-name to the food array and the buttonCreate function

			buttonCreate.attr("data-name", food[i]);

			//pass through the array text to the button

			buttonCreate.text(food[i]);

			//append the buttons view class to the button creation function

			$(".buttons-view").append(buttonCreate);

		} 


	}

//run all JS functions