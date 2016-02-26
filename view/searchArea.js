var SearchArea = function (container, model) {

	//this.showList = container.find(".showList");
	this.selectDish = container.find("#selectDish");

	
	var myDishes = model.getAllDishes(temp);
    var html = "";
    
	for (i = 0; i < myDishes.length; i++) { 
		html += "<div class='floating-box' ><div><img onclick='seedetail();'class='borderAll' src='./images/"+dishes[i].image
					+"' alt='"+dishes[i].name+"'></div><div class='textMiddle'>"+dishes[i].name
					+"</div><div style='padding: 5px;'>"+dishes[i].description+"</div></div>";
    }
	console.log(html);
	$(".showList").html(html);
}