$(window).load(function() {
	var CUR_INDEX=1;
	for(i=1;i<5;i++){
		$('#route-img-1-' + i).click(function(){
			$('#route-x').fadeOut('slow');
		//	getData("/home_v2/json/route/route_"+CUR_INDEX+".json","route_short_desc");
			$('#route-x').fadeIn('slow');
    	//$('#route-x').animate({
    	//    marginLeft: '-=100%'
    	//}, 500, function() {
    	//    $('#route-x').css('margin-left', '100%');
    	//    //$('#route-x').css('position', 'absolute');
    	//});
    	//$('#route-x').animate({
    	//    marginLeft:'0'
    	//}, 500);
		//	CUR_INDEX=$(this).attr("route_index");
		//	// get data for route-x
		//	getData("/home_v2/json/route/route_"+CUR_INDEX+".json","route_short_desc");
		});
	}
	// click event handler
	$('#notice_li').click(function(){
		$('#route_desc_section').css('display','none');
		$('#photo_section').css('display','none');
		$('#notice_section').css('display','block');
	
		$('#notice_tab').attr('class', 'route-detail-title other-detail-title-selected')
		$('#route_tab').attr('class', 'route-detail-title other-detail-title-unselected')
		$('#photo_tab').attr('class', 'route-detail-title other-detail-title-unselected')
		getData("/home_v2/json/notice/route_"+CUR_INDEX+".json", "notice_section");
	});
	$('#route_desc_li').click(function(){
		$('#notice_section').css('display','none');
		$('#photo_section').css('display','none');
		$('#route_desc_section').css('display','block');
	
		$('#notice_tab').attr('class', 'route-detail-title other-detail-title-unselected')
		$('#route_tab').attr('class', 'route-detail-title other-detail-title-selected')
		$('#photo_tab').attr('class', 'route-detail-title other-detail-title-unselected')
	});
	
	$('#photo_li').click(function(){
		$('#route_desc_section').css('display','none');
		$('#notice_section').css('display','none');
		$('#photo_section').css('display','block');
	
		$('#notice_tab').attr('class', 'route-detail-title other-detail-title-unselected')
		$('#route_tab').attr('class', 'route-detail-title other-detail-title-unselected')
		$('#photo_tab').attr('class', 'route-detail-title other-detail-title-selected')
	});

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

});


