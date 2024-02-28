function openCamera(element) {
 
    if (!element.classList.contains('clown')) {
        alert('Please click on a clown image.');
        return;
    }
   
 
   
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        const constraints = { video: { facingMode: "user" } };
        
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            video.width = element.width;
            video.height = element.height;


            element.parentNode.replaceChild(video, element);
        }).catch((error) => {
            console.error("Error accessing the camera: ", error);
        });
    } else {
        alert("Your browser does not support user media or it's not enabled.");
    }
}


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('verify-button').addEventListener('click', function() {

        document.getElementById('header').style.display = 'none';
        document.getElementById('grid-container').style.display = 'none';
        this.style.display = 'none'; 


        const messageElement = document.createElement('div');
        messageElement.innerHTML = 'Who are you?<br><button id="Try again-btn">Try again</button>';
        messageElement.style.position = 'fixed';
        messageElement.style.top = '50%';
        messageElement.style.left = '50%';
        messageElement.style.transform = 'translate(-50%, -50%)';
        messageElement.style.backgroundColor = '#007bff';
        messageElement.style.color = 'white';
        messageElement.style.padding = '20px';
        messageElement.style.borderRadius = '10px';
        messageElement.style.fontSize = '20px';
        messageElement.style.fontWeight = 'bold';
        messageElement.style.textAlign = 'center';

        document.body.appendChild(messageElement);


        document.getElementById('Try again-btn').addEventListener('click', function() {

            document.body.removeChild(messageElement);
           
            document.getElementById('header').style.display = '';
            document.getElementById('grid-container').style.display = '';
            document.getElementById('verify-button').style.display = '';
        });
    });
});
