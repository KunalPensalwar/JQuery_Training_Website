$().ready(function(){
var imageCount = 2;

	setInterval(function(){console.log("setInterval Called");
		if(imageCount == 4)
			imageCount=1;
		$("#body").css("background","url(image"+imageCount+".jpg)");
		$("#body").css("background-size","cover");
		imageCount++;
		
	}, 3000);

	$.ajax({
		url:'marqueeInfo1.json',
		success:function(response){
			var str="";
			for(var i=0;i<response.marqueeInfo.length;i++){
				str += "<li style='display:inline;margin-left:1.5%'>" +response.marqueeInfo[i].item+ "</li>";
			}
			$("#info").html(str);
		},
		failure:function(er){
			console.log(er);
		}
	});

	$("#menuList").menu({ position: { my: "left top", at: " top+30" } });
	$("#tabs").tabs();
	$(document).tooltip();
	//$("td").on("click",myadd);
	$("#mybutton").button();

	$("#one").on("change",function(){
		$("#comeDate").attr("disabled","disabled");
	});

	$("#two").on("change",function(){console.log("asd");
		$("#comeDate").removeAttr("disabled");
	});
	var present = false;
	var str="";
	var lastFocused;
	var airports;
	$("#leave").on("click",function(){
		if(0){console.log("if");
		$("#city").html(str);
			$("#city").dialog({
					position: { 
						my: "left top", 
						at: "left bottom", 
						of: leave 
					},minWidth:400
				});
			//$("#city").dialog();
		}else{console.log("else");
			$.ajax({
				url:'airports.json',
				dataType:'JSON',
				success: function(response){
					airports = response.airports;
					console.log("hi");
					 str="<table border=1>";
					//var count=0;
					var i=0;
					$.each(response.airports,function(index,item){
						var temp = item.city;
						
						if(i==0){
							str += "<tr> <td>" + item.city + "</td>";
						}else if(i%3 != 0){
							str += "<td>" + item.city + "</td>";
						}else{
							str += "</tr>";
							str += "<tr>";
							str += "<td>" + item.city + "</td>";
						}
						i++;
					});
					$("#city").html(str);
					$("#city").dialog({ 
					position: { 
						my: "left top", 
						at: "left bottom", 
						of: leave 
					},
					minWidth:600
				});
					//console.log(str);
					present =true;

					$("#city td").click(function(e){
						$("#leave").val(e.target.innerHTML);
						$("#city").dialog('close');
						//lastFocused = $(this);
						
					});

					$("#city td").on("mouseover",function(e){console.log("mouseover");
						$(this).css("background-color","red");
						//lastFocused = $(this);
					});

					$("#city td").on("mouseout",function(e){
						$(this).css("background-color","white");
						
					});
				}
			}); //ajax end
		} //else close
		//lastFocused.mouseover();
	});	//onclick end

	$("#go").on("click",function(){
		if(0){console.log("if");
		$("#gocity").html(str);
			$("#gocity").dialog({
					position: { 
						my: "left top", 
						at: "left bottom", 
						of: leave 
					},minWidth:400
				});
			//$("#city").dialog();
		}else{console.log("else");
			$.ajax({
				url:'airports.json',
				dataType:'JSON',
				success: function(response){
					airports = response.airports;
					 str="<table border=1>";
					//var count=0;
					var i=0;
					$.each(response.airports,function(index,item){
						var temp = item.city;
						
						if(i==0){
							str += "<tr> <td>" + item.city + "</td>";
						}else if(i%3 != 0){
							str += "<td>" + item.city + "</td>";
						}else{
							str += "</tr>";
							str += "<tr>";
							str += "<td>" + item.city + "</td>";
						}
						i++;
					});
					$("#gocity").html(str);
					$("#gocity").dialog({ 
					position: { 
						my: "left top", 
						at: "left bottom", 
						of: go 
					},
					minWidth:600
				});
					//console.log(str);
					present =true;

					$("#gocity td").click(function(e){
						$("#go").val(e.target.innerHTML);
						$("#gocity").dialog('close');
						//lastFocused = $(this);
						
					});

					$("#gocity td").on("mouseover",function(e){console.log("mouseover");
						$(this).css("background-color","red");
						//lastFocused = $(this);
					});

					$("#gocity td").on("mouseout",function(e){
						$(this).css("background-color","white");
						
					});
				}
			}); //ajax end
		} //else close
		//lastFocused.mouseover();
	});	//onclick end
	
	$("#leave").on("keyup",displayCitiesOnType);
	$("#go").on("keyup",displayCitiesOnTypeByGo);

	var res="";
	function displayCitiesOnType(e){
		var count =0;
			//var res = "";
			var input = $("#leave").val();
			var res="<table border='1'>";
			for(var i=0; i<airports.length;i++){
				if(airports[i].city.toLowerCase().match(input) == input ){
					if(count==0){
							res += "<tr>";
							res += "<td>" + airports[i].city + "</td>";
						}else if(count%4 != 0){
							res += "<td>" + airports[i].city + "</td>";
							//console.lof("2nd: "+item.city);
						}else{
							res += "</tr>";
							res += "<tr>";
							res += "<td>" + airports[i].city + "</td>";
						}
						count++;
				}
			}
			res+="</table>";
			$("#city").html(res);
			$("#city td").click(function(e){
				$("#leave").val(e.target.innerHTML);
				lastFocused = $(this);
						
			});

			$("#city td").on("mouseover",function(e){
				$(this).css("background-color","red");
				//lastFocused = $(this);
			});

			$("#city td").on("mouseout",function(e){
				$(this).css("background-color","white");
			});
		}

		function displayCitiesOnTypeByGo(e){console.log("asdasd");
		var count =0;
			//var res = "";
			var input = $("#go").val();
			var res="<table border='1'>";
			for(var i=0; i<airports.length;i++){
				if(airports[i].city.toLowerCase().match(input) == input ){
					if(count==0){
							res += "<tr>";
							res += "<td>" + airports[i].city + "</td>";
						}else if(count%4 != 0){
							res += "<td>" + airports[i].city + "</td>";
							//console.lof("2nd: "+item.city);
						}else{
							res += "</tr>";
							res += "<tr>";
							res += "<td>" + airports[i].city + "</td>";
						}
						count++;
				}
			}
			res+="</table>";
			$("#gocity").html(res);
			$("#gocity td").click(function(e){
				$("#go").val(e.target.innerHTML);
				lastFocused = $(this);
						
			});

			$("#gocity td").on("mouseover",function(e){
				$(this).css("background-color","red");
				//lastFocused = $(this);
			});

			$("#gocity td").on("mouseout",function(e){
				$(this).css("background-color","white");
			});
		}



	$("#mybutton").click(function(){$.ajax({
		url:'flights.json',
		success:function(response){
			// /console.log(response);
			for(var i=0;i<response.flight_data.length;i++){
				if(response.flight_data[i].from == $("#leave").val() && response.flight_data[i].to == $("#go").val()){
					console.log(response.flight_data[i].from);
					break;
				}
				else{
					console.log("No flights on this route");
					break;
				}
			}
		},
		failure:function(er){
			console.log(er);
		}
	});
});	
});





	