model.Company.methods.generateData = function(numPeople) {	require('generateData').generateData(numPeople);	return true;};model.Company.methods.generateData.scope = 'public';model.Company.methods.deleteData = function() {	ds.Person.remove();	ds.Company.remove();	return true;};model.Company.methods.deleteData.scope = 'public';