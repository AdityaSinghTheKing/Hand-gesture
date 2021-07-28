Webcam.set({
    width:350,
    height:350,
    image_format:'png'
  });
camera=document.getElementById("camera")
Webcam.attach("#camera");
function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+ '">'
    })
    console.log("ml5version" , ml5.version)
    classifier=ml5.imageClassifier( "https://teachablemachine.withgoogle.com/models/-exSNVBN6/model.json" , modelLoaded) //rember to add link
   }

    function modelLoaded(){
        console.log("model is loaded");
    }
    function Check(){
        img=document.getElementById("capturedimage")
        classifier.classify(img , getResult)
    }
    function getResult(error , results){
        if(error){
            console.error(error)
        }
        else{
            console.log(results);
            document.getElementById("resultobjectname").innerHTML=results[0].label
            accuracy=results[0].confidence.toFixed(3)*100
            document.getElementById("resultobjecaccuracy").innerHTML=Math.round(accuracy)
        }
    }