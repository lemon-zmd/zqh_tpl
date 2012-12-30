function getData(data_url, id){
	$.ajax({ 
  	type: "get", 
		url:data_url,
    dataType: "json", 
    success: function (data) { 
			renderHTML(id, data.content);
    }, 
    error: function (XMLHttpRequest, textStatus, errorThrown) { 
    	alert(errorThrown); 
    } 
  });	
}
function renderHTML(id, content){
	$('#'+id).html(content);
}

