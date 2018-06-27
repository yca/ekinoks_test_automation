(function() {
	
	const TAB_ENCODINGH_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(5) > a';
        const TAB_ENCODINGL_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(6) > a';
	const TAB_VERSION_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(14) > a';
        const TAB_RESOLUTION_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(7) > a';
	const TAB_CAMERA_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(4) > a';
        const TAB_LIVE_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(1) > a';
        const TAB_ALARM_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(12) > a';
        const TAB_TIME_SELECTOR = 'body > div > div:nth-child(3) > div.col-md-8 > div.ng-isolate-scope > ul > li:nth-child(3) > a';
	module.exports.toEncodingHigh = async function(page) {
		await page.click(TAB_ENCODINGH_SELECTOR);
		await page.waitFor(2000);
	}
	module.exports.toLive = async function(page) {
		await page.click(TAB_LIVE_SELECTOR);
		await page.waitFor(2000);
	}
	module.exports.toEncodingLow = async function(page) {
		await page.click(TAB_ENCODINGL_SELECTOR);
		await page.waitFor(2000);
	}
	
	module.exports.toVersion = async function(page) {
		await page.click(TAB_VERSION_SELECTOR);
		await page.waitFor(2000);
	}
	
	module.exports.toResolution = async function(page) {
		await page.click(TAB_RESOLUTION_SELECTOR);
		await page.waitFor(2000);
	}
	module.exports.toCamera = async function(page) {
                await page.click(TAB_CAMERA_SELECTOR);
                await page.waitFor(2000);
	}
	module.exports.toAlarm = async function(page) {
                await page.click(TAB_ALARM_SELECTOR);
                await page.waitFor(2000);
	}
	module.exports.toTime = async function(page) {
                await page.click(TAB_TIME_SELECTOR);
                await page.waitFor(2000);
	}
	
}());
