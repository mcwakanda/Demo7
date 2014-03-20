
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var searchInput = {};	// @textField
	var deleteDataButton = {};	// @button
	var generateDataButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	searchInput.keyup = function searchInput_keyup (event)// @startlock
	{// @endlock
		sources.company.query('name == :1', $$('searchInput').getValue() + "*");
	};// @lock

	deleteDataButton.click = function deleteDataButton_click (event)// @startlock
	{// @endlock
		generateData();
	};// @lock

	generateDataButton.click = function generateDataButton_click (event)// @startlock
	{// @endlock
		deleteData();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("searchInput", "keyup", searchInput.keyup, "WAF");
	WAF.addListener("deleteDataButton", "click", deleteDataButton.click, "WAF");
	WAF.addListener("generateDataButton", "click", generateDataButton.click, "WAF");
// @endregion
};// @endlock
