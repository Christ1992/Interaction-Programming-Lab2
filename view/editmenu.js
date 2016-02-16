function editmenu() {
	$("SummeryHeading").hide();
	$("table2").hide();
	$("DinnerOverview").hide();
	$("printbutton").hide();
	$("DinnerPreparation").hide();
	$("#SecondPage").show();
	$("#searchArea").show();
	$("#ShowList").show();

  getAllDishes();
  getTotalMenuPrice(); 
  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}