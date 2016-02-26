var SearchArea = function (container, model) {

	//this.showList = container.find(".showList");
	this.selectDish = container.find("#selectDish");

	console.log(courseTemp);
	var myDishes = model.getAllDishes(courseTemp);
    
    var html = "";
    console.log(myDishes);
	for (i = 0; i < myDishes.length; i++) { 
		html += "<div class='floating-box' ><div><img onclick='seedetail();'class='borderAll' src='./images/"+myDishes[i].image
					+"' alt='"+myDishes[i].name+"'></div><div class='textMiddle'>"+myDishes[i].name
					+"</div><div style='padding: 5px;'>"+myDishes[i].description+"</div></div>";
    }
	console.log(html);
	$(".showList").html(html);
}

function changevalue(){
	courseTemp=$("#courseType").find('option:selected').val();
	SearchArea($("#searchArea"),model);
}