
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var deleteDataButton = {};	// @button
	var generateDataButton = {};	// @button
	var searchInput = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	deleteDataButton.click = function deleteDataButton_click (event)// @startlock
	{// @endlock
		ds.Company.deleteData({
			onSuccess: function(event){
				if(event.result == true){
					sources.company.all();
				}
			}
		});
	};// @lock

	generateDataButton.click = function generateDataButton_click (event)// @startlock
	{// @endlock
		ds.Company.generateData({
			onSuccess: function(event){
				if(event.result == true){
					sources.company.all();
				}
			}
		},400);
	};// @lock

	searchInput.keyup = function searchInput_keyup (event)// @startlock
	{// @endlock
		sources.company.query('name = :1', $$('searchInput').getValue() + "*");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("deleteDataButton", "click", deleteDataButton.click, "WAF");
	WAF.addListener("generateDataButton", "click", generateDataButton.click, "WAF");
	WAF.addListener("searchInput", "keyup", searchInput.keyup, "WAF");
// @endregion
};// @endlock
