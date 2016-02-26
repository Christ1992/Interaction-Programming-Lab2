/*OK*/
function createnew() {
  $("#hover-div").hide();
  $("#SecondPage").show();
  $("#searchArea").show();
  
}

/*ok*/
function seedetail(){
	$("#searchArea").hide();
	$("#detailView").show();

	} 

/*ok*/
function backtoselect() {
  $("#detailView").hide();
  $("#searchArea").show();

}

/*ok*/
function confirmdinner() {
	$("#SecondPage").hide();
	$("#topBar").show();
	$("#dinnerOverview").show();
	DinnerOverview("#dinnerOverview",model);
	
}	

/*ok*/
function confirmdish() {
	  $("#SecondPage").show();
	  $("#searchArea").show();
	  $("#detailView").hide();

}
/*ok*/
function editmenu() {
	
	$("#topBar").hide();
	$("#dinnerOverview").hide();
	$("#DinnerPreparation").hide();
	$("#SecondPage").show();
	$("#searchArea").show();
	$("#showList").show();

}

/*ok*/
function finalresult() {
  $("#dinnerOverview").hide();
  $("#DinnerPreparation").show();
  $("#topBar").show();

 
}