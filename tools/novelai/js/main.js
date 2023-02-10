//商品列表加载方法
loadCommodity = function () {
	let htmllet = "";
	let htmlhead = '<ul class="layui-tab-title">'
	let id = 0
	for (var i = 0; i < commodityList.length; i++) {
		htmllet += '<div class="layui-tab-item">'
		htmlhead += '<li>' + commodityList[i].name + '</li>'
		for (var j = 0; j < commodityList[i].groups.length; j++) {
			htmllet += '<p>'+commodityList[i].groups[j].name + '</p><form class="layui-form' + r18test (commodityList[i].groups[j].r18) +'">' 
			for (var k = 0 ; k < commodityList[i].groups[j].sublist.length; k++) {
				id = id + 1
				htmllet += '<div class="tagbutton" id="' + id + '">'
				htmllet += '<div class="minus">-</div>'
				htmllet += '<div class="plus">+</div>'
				htmllet += '<div class="buttext">'
				htmllet += '<span class="english">' + commodityList[i].groups[j].sublist[k].tag + '</span>'
				htmllet += '<span class="chinese">' + commodityList[i].groups[j].sublist[k].name + '</span></div></div>'
			}
			htmllet += '</form><hr>'
		}
		htmllet +='<br><br><br><br><br></div>'
	}  
	htmlhead += '</ul><div class="layui-tab-content" style="height: 500px;overflow-y: scroll;">'
	htmllet = htmlhead + htmllet


	console.log (htmllet)
	//嵌入HTML方法
	document.getElementById("tags").innerHTML = htmllet;
}
r18test = function (text){
	if (text == "true")
	{
		return(" r18")
	}
	else
	{
		return("")
	}
}
SearchCommodity = function (name) {
	let htmllet = "";
	let htmlhead = '<ul class="layui-tab-title">'
	let id = 0
	for (var i = 0; i < commodityList.length; i++) {
		htmllet += '<div class="layui-tab-item">'
		htmlhead += '<li>' + commodityList[i].name + '</li>'
		for (var j = 0; j < commodityList[i].groups.length; j++) {
			htmllet += '<p>'+commodityList[i].groups[j].name + '</p><form class="layui-form' + r18test (commodityList[i].groups[j].r18) +'">' 
			for (var k = 0 ; k < commodityList[i].groups[j].sublist.length; k++) {
				var str1 = commodityList[i].groups[j].sublist[k].tag
				var str2 = commodityList[i].groups[j].sublist[k].name
				if (str1.includes(name) || str2.includes(name)){
					id = id + 1
					htmllet += '<div class="tagbutton" id="' + id + '">'
					htmllet += '<div class="minus">-</div>'
					htmllet += '<div class="plus">+</div>'
					htmllet += '<div class="buttext">'
					htmllet += '<span class="english">' + commodityList[i].groups[j].sublist[k].tag + '</span>'
					htmllet += '<span class="chinese">' + commodityList[i].groups[j].sublist[k].name + '</span></div></div>'
				}
			}
			htmllet += '</form><hr>'
		}
		htmllet +='<br><br><br><br><br></div>'
	}  
	htmlhead += '</ul><div class="layui-tab-content" style="height: 500px;overflow-y: scroll;">'
	htmllet = htmlhead + htmllet


	console.log (htmllet)
	//嵌入HTML方法
	document.getElementById("tags").innerHTML = htmllet;
}

window.onload = function(){
	$.getScript("tagsql.js",function(){//回调函数，成功获取文件后执行的函数  
		loadCommodity() //初始化tag列表框(虽然说那玩意可能不叫列表框)
		var element = document.createElement("script"); //延迟加载mainui.js 避免点按钮没反应
		element.src = "./js/mainui.js";
		document.body.appendChild(element); 
	});
}
