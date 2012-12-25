function getData(routex){
	$.ajax({ 
  	type: "get", 
    url: "/home_v2/json/route/route_"+routex+".json",
    dataType: "json", 
    success: function (data) { 
			//alert(encoded.content);
			renderHTML('route_short_desc',data.content);
    	//$("input#showTime").val(data[0].demoData); 
    }, 
    error: function (XMLHttpRequest, textStatus, errorThrown) { 
    	alert(errorThrown); 
    } 
  });	
}
function renderHTML(id, content){
	alert('render');
	$('#'+id).html(content);
}

