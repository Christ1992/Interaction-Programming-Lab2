function confirmdinner() {
$("#SecondPage").hide();
$("#searchArea").hide();
$("#ShowList").hide();
$("#ladagne").hide();
$("#Ingredient").hide();
$("#preparation").hide();
$("#SummeryHeading").show();
$("#table2").show();
$("#DinnerOverview").show();
$("#printbutton").show();

  getAllDishes();
  getTotalMenuPrice(); 
  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}