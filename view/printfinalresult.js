function finalresult() {
  $("#menulist").hide();
  $().show();

  getAllDishes();
  getTotalMenuPrice(); 
  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}