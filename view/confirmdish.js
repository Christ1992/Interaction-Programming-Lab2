function confirmdish() {
  $("#ladagne").hide();
  $("#Ingredient").hide();
  $("#preparation").hide();
  $("#searchArea").show();
  $("#ShowList").show();

  addDishToMenu();
  getAllDishes();
  getTotalMenuPrice(); 
  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}
