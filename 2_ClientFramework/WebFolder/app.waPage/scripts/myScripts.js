﻿function deleteData(){	ds.Company.deleteData({		onSuccess: function(event){			if(event.result == true){				sources.company.all();			}		}	});}|function generateData(){	v}