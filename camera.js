  (function() {

        const IR_FILTER_MODE = '#ircf_stat';
	const IR_FILTER_TRANSITION = '#auto_ircf_stat';
	const IR_FILTER_THRESHOLD = '#ircf_threshold';
        const IR_APPLY = '#t01 > tbody > tr:nth-child(8) > td:nth-child(2) > p > button';
        const IR_SELECTOR_UP = '#t01 > tbody > tr:nth-child(8) > td:nth-child(1)';
                
	module.exports.set_ir_filter_mode = async function(page, set) 
        {
            await page.click(IR_FILTER_MODE);
            await page.keyboard.type(set);
            await page.keyboard.type('Enter');
            
	}
	module.exports.set_ir_filter_transition = async function(page, set)
        {
            
            await page.click(IR_FILTER_TRANSITION);
            await page.keyboard.type(set);
            await page.keyboard.type('Enter');
            
        }
        
        module.exports.set_ir_filter_threshold = async function(page, set)
        {
            
            await page.click(IR_FILTER_THRESHOLD);
            await page.keyboard.type(set);
            await page.keyboard.type('Enter');
          
        }
        
        module.exports.ir_filter_apply = async function(page) 
        {
            await page.click(IR_APPLY);
            await page.waitFor(1000);
           
	}
	
	module.exports.test_ir_filter_mode = async function(page, set) 
        {
            const input = await page.$(IR_SELECTOR_UP);
            const inpot = await input.$eval('#ircf_stat' , node => node.selectedIndex);
            if(inpot == set)
              {
                console.log("IR Filter Mode Value is        TRUE");
              }
            else
              {
                 console.log("IR Filter Mode Value is        FALSE");
              }
            
	}
	module.exports.test_ir_filter_transition = async function(page, set)
        {
             const input = await page.$(IR_SELECTOR_UP);
            const inpot = await input.$eval('#auto_ircf_stat' , node => node.selectedIndex);
            if(inpot == set)
              {
                console.log("IR Filter Transition Value is  TRUE");
              }
            else
              {
                console.log("IR Filter Transition Value is  FALSE");
              }
        
            
        }
	
	
}());


 
