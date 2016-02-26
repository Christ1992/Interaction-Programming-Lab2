/*OK*/
function createnew() {
  $("#hover-div").hide();
  $("#SecondPage").show();
  $("#SearchArea").show();
  
}

/*ok*/
function seedetail(){
	$("#SearchArea").hide();
	$("#detailView").show();

	} 

/*ok*/
function backtoselect() {
  $("#detailView").hide();
  $("#SearchArea").show();

}

/*ok*/
function confirmdinner() {
	$("#SecondPage").hide();
	$("#topBar").show();
	$("#DinnerOverview").show();
	
}	

/*ok*/
function confirmdish() {
	  $("#SecondPage").show();
	  $("#SearchArea").show();
	  $("#detailView").hide();

}
/*ok*/
function editmenu() {
	
	$("#topBar").hide();
	$("#DinnerOverview").hide();
	$("#DinnerPreparation").hide();
	$("#SecondPage").show();
	$("#searchArea").show();
	$("#ShowList").show();

}

/*ok*/
function finalresult() {
  $("#DinnerOverview").hide();
  $("#DinnerPreparation").show();
  $("#topBar").show();

 
}