function icecreamdetail() {
  $("#searchArea").hide();
  $("#ShowList").hide();
  $("#ladagne").show();
  $("#Ingredient").show();
  $("#preparation").show();

  getAllIngredients();
  getNumberOfGuests();
  getAllDishes();
}
