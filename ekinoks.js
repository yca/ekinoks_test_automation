const puppeteer = require('puppeteer');

var login = require("./login");
var nav = require("./navigate");
var encoding = require("./encoding");

let testIt = async () => {
	const browser = await puppeteer.launch({headless: false});

	const page = await browser.newPage();
	await login.loginCamera(page, 'http://10.5.176.249:8080');

	while (1) {
		var iframes = ["12", "24", "36", "48"];
		for (let i = 0; i < iframes.length; i++) {
			await nav.toVersion(page);
			await nav.toEncodingHigh(page);
			console.log("Setting i-frame interval to " + iframes[i]);
			await encoding.change(page, iframes[i]);
		}
	}

	await page.waitFor(30000);
	await page.close();
	await browser.close();
	return 0;
}

testIt().then((value) => {
	console.log("Testing done " + value); // Success!
});
