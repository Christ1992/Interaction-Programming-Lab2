/*OK*/
function createnew() {
  $("#hover-div").hide();
  $("#SecondPage").show();
  $("#SearchArea").show();

  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}

/*ok*/
function seeDetail(){
	$("#SearchArea").hide();
	$("#detailView").show();
	getAllIngredients();
	getNumberOfGuests();
	getAllDishes();
	} 

/*ok*/
function backtoselect() {
  $("#detailView").hide();
  $("#SearchArea").show();

  getAllDishes();
  getTotalMenuPrice(); 
  getFullMenu();
  getNumberOfGuests();
  getSelectedDish();
}

/*ok*/
function confirmdinner() {
	$("#SecondPage").hide();
	$("#topBar").show();
	$("#DinnerOverview").show();
	

	  getAllDishes();
	  getTotalMenuPrice(); 
	  getFullMenu();
	  getNumberOfGuests();
	  getSelectedDish();
}	

/*ok*/
function confirmdish() {
	  $("#SecondPage").show();
	  $("#SearchArea").show();
	  $("#detailView").hide();

	  addDishToMenu();
	  getAllDishes();
	  getTotalMenuPrice(); 
	  getFullMenu();
	  getNumberOfGuests();
	  getSelectedDish();
}
/*ok*/
function editmenu() {
	
	$("#topBar").hide();
	$("#DinnerOverview").hide();
	$("#DinnerPreparation").hide();
	$("#SecondPage").show();
	$("#searchArea").show();
	$("#ShowList").show();

	  getAllDishes();
	  getTotalMenuPrice(); 
	  getFullMenu();
	  getNumberOfGuests();
	  getSelectedDish();
}

/*ok*/
function finalresult() {
  $("#DinnerOverview").hide();
  $("#DinnerPreparation").show();
  $("#topBar").show();

  

  getAllDishes();
  getTotalMenuPrice(); 
  getNumberOfGuests();
}