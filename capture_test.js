 
const fs = require('fs');
const child_process = require("child_process");

(function() {
       
        module.exports.ffprobe =  function()
        {
            
            //testnumber = 1;
            //degisken = "ffprobe -v error  -show_entries stream=avg_frame_rate -show_format -show_streams " +  testnumber + ".mp4 > output.txt 2>&1";
        const islem = child_process.execSync("ffprobe -v error  -show_entries stream=avg_frame_rate -show_format -show_streams 1.mp4 > output.txt 2>&1", function (error, stdout, stderr) 
        {

            if (error) throw error;
            console.log(stderr);
        });
    
    sonuc = fs.readFileSync("output.txt","utf8");
    return sonuc;
        }	
    
}());



 
