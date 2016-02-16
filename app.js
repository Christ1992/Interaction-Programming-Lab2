var model; 
var exampleView;

$(document).ready(function() {
	//We instantiate our model
	model = new DinnerModel();
	
	//And create the needed controllers and views
	exampleView = new ExampleView($("#exampleView"));

	hover-div = new hover-div($("#hover-div"));
	SecondPage = new SecondPage($("#SecondPage").hide());
});


	$("#SecondPage").hide();
	$("#searchArea").hide();
	$("#ShowList").hide();
	$("#ladagne").hide();
	$("#Ingredient").hide();
	$("#preparation").hide();
	$("#SummeryHeading").hide();
	$("#table2").hide();
	$("#DinnerOverview").hide();
	$("#printbutton").hide();
	$("#DinnerPreparation").hide();
