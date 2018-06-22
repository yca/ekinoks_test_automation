(function() {

	const IFRAME_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(1) > div > div > input';
	const APPLY_BUTTON_SELECTOR = 'body > div.container-fluid > div:nth-child(3) > div.col-md-8 > div.view-container > div > form > div:nth-child(17) > div > div > button';
	const POPUP_SELECTOR = 'body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button';

	module.exports.change = async function(page, iFrameInterval) {
		await page.click(IFRAME_SELECTOR);
		for (let i = 0; i < 10; i++)
			await page.keyboard.down('Backspace');
		await page.keyboard.type(iFrameInterval);
		await page.click(APPLY_BUTTON_SELECTOR);
		await page.waitFor(4000);
		await page.click(POPUP_SELECTOR);
		await page.waitFor(5000);
		console.log("Encoding settings applied");
	}
	
}());
