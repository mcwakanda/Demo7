
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var generateDataButton = {};	// @button
	var goTo1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
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

	goTo1.click = function goTo1_click (event)// @startlock
	{// @endlock
		$$('navigationView2').goToView(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("generateDataButton", "click", generateDataButton.click, "WAF");
	WAF.addListener("goTo1", "click", goTo1.click, "WAF");
// @endregion
};// @endlock
