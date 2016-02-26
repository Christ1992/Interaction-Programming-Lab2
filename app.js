
var model;

//var initialization;
$(document).ready(function(){
	//We instantiate our model
	model = new DinnerModel();

	model.setNumberOfGuests(2);
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var sideNavView = new SideNavView($("#sideNavView"), model);
	var searchArea = new SearchArea($("#searchArea"), model);

});

function initialization(){
	$("#hover-div").show();
	$("#SecondPage").hide();
	$("#SearchArea").hide();
	$("#detailView").hide();
	$("#topBar").hide();
	$("#DinnerOverview").hide();
	$("#DinnerPreparation").hide();}



