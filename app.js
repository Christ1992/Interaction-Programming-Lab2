var model; 
var exampleView;
var hoverdiv;
var initialization;
$(document).ready(function(){
	//We instantiate our model
	model = new DinnerModel();
	
	//And create the needed controllers and views
	exampleView = new ExampleView($("#exampleView"), model);
});

function initialization(){
	$("#hover-div").show();
	$("#SecondPage").hide();
	$("#SearchArea").hide();
	$("#detailView").hide();
	$("#topBar").hide();
	$("#DinnerOverview").hide();
	$("#DinnerPreparation").hide();}



