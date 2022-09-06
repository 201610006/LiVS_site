function loadStudy(start, num) {
var ct = 0	
var list_num = 0
$("#studyListData tr").remove();
$.ajaxSettings.async = false;
$.getJSON("https://201610006.github.io/LiVS_site/dataset/dataset.json", function(data) {
                console.log("==="+data)
		data.livs.forEach(function(study) {
			var imgnum = 'img/labs/case_' + Math.floor(Math.random()*20+60) + '.png'
			var studyRow = "<tr><td><img width='25px' style='margin-top:0px;' src="+imgnum+" />" +
			'</td><td>' +
			study.name + '</td><td>' +
			study.sex + '</td><td>' +
			study.age + '</td><td>' +
			study.StudyDate + '</td><td>' +
			study.SliceThickness + '</td><td>' +
			study.size + '</td><td>' +
			study.density + '</td><td>' +
			study.space + '</td><td>' +
			study.description + '</td>' +
			'</tr>';

		        list_num = list_num + 1
			if (list_num > num)
				return
			if (ct>=start){
				// Append the row to the study list
				var studyRowElement = $(studyRow).appendTo('#studyListData');
				
			}
			ct = ct + 1
		})
	})
}
function getpagedata(tb){

	var page = $('#page').text();
	var pages = 65
	if(tb=='first')
		page = 1;
	if(tb=='previous'&&parseInt(page)>1){
		page = parseInt(page) - 1;
	}
	if(tb=='next'&&parseInt(page)<parseInt(pages)){
		page = parseInt(page) + 1;
	}
	if(tb=='last')
		page = pages;

	
	loadStudy((page-1)*5, 5)
	$('#page').text(page);
	
}
