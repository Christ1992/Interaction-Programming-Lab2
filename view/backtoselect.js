function backtoselect() {
  $("#ladagne").hide();
  $("#Ingredient").hide();
  $("#preparation").hide();
  $("#searchArea").show();
  $("#ShowList").show();

  getAllDishes();
  getTotalMenuPrice(); 
  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}