  (function() {

        const SEI_ALARM_SELECTOR_UP = 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(9) > div > div';
	const MOTION_DETECTOR_SELECTOR_UP= 'body > div > div:nth-child(3) > div.col-md-8 > div.view-container > div > div > div:nth-child(10) > div > div';
	    
        
	module.exports.test_sei_selected = async function(page) 
        {
                        const input = await page.$(SEI_ALARM_SELECTOR_UP);
                        const inpot = await input.$eval('.ng-valid' , node => node.checked);
                        console.log("SEI is SELECTED?");
                        console.log(inpot);
                        console.log("");
                        if(inpot == 1)
                        {
                        const input1 = await page.$(MOTION_DETECTOR_SELECTOR_UP);
                        const inpot1 = await input1.$eval('.form-control' , node => node.value);
                        
                        if(inpot1 == 2)
                        {console.log("Motion Detector Value is TRUE");
                        }
                        else
                        {console.log("Motion Detector Value is FALSE");}
                            
                        }
            
	}
	
	
    
}());


 

