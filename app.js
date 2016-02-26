
var model;
var courseTemp='starter';

//var initialization;
$(document).ready(function(){
	//We instantiate our model
	model = new DinnerModel();

	model.setNumberOfGuests(5);
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var sideNavView = new SideNavView($("#sideNavView"), model);
	var searchArea = new SearchArea($("#searchArea"), model);
	var topBar= new TopBar($("#topBar"),model);
	var dinnerOverview= new DinnerOverview($("#dinnerOverview"),model);
	//var detailView= new DetailView($("#detailView"),model,identifier);

});

function initialization(){
	$("#hover-div").show();
	$("#SecondPage").hide();
	$("#SearchArea").hide();
	$("#detailView").hide();
	$("#topBar").hide();
	$("#dinnerOverview").hide();
	$("#DinnerPreparation").hide();}



