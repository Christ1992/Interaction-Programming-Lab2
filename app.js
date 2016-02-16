var model; 
var exampleView;
var hoverdiv;
$(document).ready(function() {
	//We instantiate our model
	model = new DinnerModel();
	
	//And create the needed controllers and views
	exampleView = new ExampleView($("#exampleView"));

});

var initialization;
function initialization(){
	$("#SecondPage").hide();
	$("#searchArea").hide();
	$("#detailView").hide();
	$("#topBar").hide();
	$("#DinnerOverview").hide();
	$("#DinnerPreparation").hide();

}