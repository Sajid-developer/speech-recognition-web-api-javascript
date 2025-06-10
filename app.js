console.log("App running successfully...");

let msg=document.querySelector(".message");
let scroll=msg.scrollHeight;

// code to enable speech recognition feature ✅
    function getVoice(){
        let voice=new webkitSpeechRecognition();
        voice.lang="en-GB";
        voice.onresult=(e) =>{
        msg.value+=e.results[0][0].transcript + "." + " ";
        msg.scrollTo(0,scroll);
      }
        voice.start();
    }

// code to clear message box ✅
    function clearMessage(){
        msg.value="";
    }