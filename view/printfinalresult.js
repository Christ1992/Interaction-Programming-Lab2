function finalresult() {
  $("#DinnerOverview").hide();
  $("printbutton").hide();
  $("#DinnerPreparation").show();

  getAllDishes();
  getTotalMenuPrice(); 
  getNumberOfGuests();
}