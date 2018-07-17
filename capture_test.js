 
const fs = require('fs');
const child_process = require("child_process");

(function() {
       
        module.exports.ffprobe =  function(url,stream,testNumber)
        {
            var command = "ffmpeg -y -i rtsp://"+url+"/"+stream+" -acodec copy -t 00:00:05 -vcodec copy "+testNumber+".mp4";
            var command2 = "ffprobe -v error  -show_entries stream=avg_frame_rate -show_format -show_streams "+testNumber+".mp4 > output.txt 2>&1";
            
            //KAYIT AL
           child_process.execSync(command,function (error, stdout, stderr) 
                {
                    if (error) throw error;
                    console.log(stderr);
                });
           
            //KAYIT DOSYASI ÖZELLİKLERİNİ ÇIKAR
           const islem = child_process.execSync(command2, function (error, stdout, stderr) 
                {
                    if (error) throw error;
                    console.log(stderr);
                });
    
            sonuc = fs.readFileSync("output.txt","utf8");
            return sonuc;
        }	
    
}());



 
