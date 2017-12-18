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

		//passing through an on-click function to the add topic ID

		$("#add-topic").on("click", function (event) {

			//this keeps the button from performing unexpectedly
			event.preventDefault();
			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=20";
			var topic = $("topic-input").val().toLowerCase().trim();

		//AJAX call will pull the API from Giffy for user

		$.ajax({

			url: queryURL,
			method: "GET"


		}).done(function (response) {





		})

		});
		//function to display the gifs on the page

		//console log out for testing


		//need variables for attribute data-still and data-animate


		//append the divs to the gifs view ID


		//this function will play and animate the gifs

		function gifPlay () {

			if ($(this).attr("data-state") == "still") {

				$(this).html("<img src" + $(this).attr("data-animate"))
				$(this).attr("data-state", "animate");

			}

			else {

				$(this).html("<img src='" + $(this).attr("data-still") + "'>");
				$(this).attr("data-state", "still");

			}
			};

		//need on-click for topic class

//run all JS functions

makeButtons();