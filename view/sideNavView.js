//ExampleView Object constructor
var SideNavView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.area = container.find("#numberOfGuests");
	this.PriceTable = container.find("#PriceTable");
	

	$("#numberOfGuests").text(model.getNumberOfGuests());
	var totalPrice = 0;
	var html="";
	
	html+="<div class='col-sm-7'>"+"Name:"+"</div><div class='col-sm-4'>Cost</div>";
	

	var dishes = [];
    dishes.push(model.getSelectedDish('starter'));
    dishes.push(model.getSelectedDish('main dish'));
    dishes.push(model.getSelectedDish('dessert'));
    dishes.forEach(function(dishId) {
        if (dishId != null) {
            var dish = model.getDish(dishId);
            var priceForSingle = model.getPriceForDish(dish);
            var totalPriceForDish = priceForSingle * model.getNumberOfGuests();
            totalPrice += totalPriceForDish;
            
           
             html+="<div class='col-sm-7'>"+dish.name+"</div><div class='col-sm-3'>"+totalPriceForDish+"</div><div class='col-sm-1' class='dishID"+dishId+"'><img src='remove.png'></div>";
            
		}
	});
	html+="<div class='col-sm-7'>"+"Total:"+"</div><div class='col-sm-4'> "+totalPrice+" SEK</div>";
	html+="<div class='col-sm-3'></div><div class='col-sm-8'><button id='confirmDinner' onclick='confirmdinner();'> Confirm Dinner</div><div class='col-sm-1'></div>";
	$("#PriceTable").html(html);
}
  
  //	function	reduceNumber();
  //	function	plusNumber();
 
function reduceNumber(){numberOfGuests=numberOfGuests-1; SideNavView($("#sideNavView"), model);SummaryHeading($("#summaryHeading"),model);}
function plusNumber(){numberOfGuests =numberOfGuests+1;	SideNavView($("#sideNavView"), model); SummaryHeading($("#summaryHeading"),model);}





