function loadStudy() {
	
$.getJSON("https://201610006.github.io/LiVS_site/dataset/dataset.json", function(data) {
                console.log("==="+data)
		data.livs.forEach(function(study) {
			var studyRow = '<tr><td>' +
			study.name + '</td><td>' +
			study.sex + '</td><td>' +
			study.age + '</td><td>' +
			study.StudyDate + '</td><td>' +
			study.SliceThickness + '</td><td>' +
			study.size + '</td><td>' +
			study.density + '</td><td>' +
			study.space + '</td><td>' +
			study.description + '</td><td>' +
			"Download" + '</td>' +
			'</tr>';

		// Append the row to the study list
		var studyRowElement = $(studyRow).appendTo('#studyListData');
		})
	})
}
