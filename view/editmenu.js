function editmenu() {
  $("#menulist").hide();
  $("#SecondPage").show();
  $("#searchArea").show();
  $("#ShowList").show();

  getAllDishes();
  getTotalMenuPrice(); 
  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}