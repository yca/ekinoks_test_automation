(function() {
	
	const TAB_ENCODINGH_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(5) > a';
	const TAB_VERSION_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(15) > a';
	
	module.exports.toEncodingHigh = async function(page) {
		await page.click(TAB_ENCODINGH_SELECTOR);
		await page.waitFor(2000);
	}
	module.exports.toVersion = async function(page) {
		await page.click(TAB_VERSION_SELECTOR);
		await page.waitFor(2000);
	}
	
}());
