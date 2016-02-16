var model; 
var exampleView;
var hoverdiv;
var initialization;
$(document).ready(function(){
	//We instantiate our model
	model = new DinnerModel();
	
	//And create the needed controllers and views
	exampleView = new ExampleView($("#exampleView"));
});

function initialization(){
	$("#SecondPage").hide();
	$("#searchArea").hide();
	$("#detailView").hide();
	$("#topBar").hide();
	$("#DinnerOverview").hide();
	$("#DinnerPreparation").hide();}



