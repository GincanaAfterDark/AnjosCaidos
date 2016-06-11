// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

var imageList = [
url('../New/1.jpg'),
url('../New/2.jpg'),
url('../New/3.jpg'),
url('../New/4.jpg'),
url('../New/5.jpg'),
url('../New/6.jpg'),
url('../New/7.jpg'),
url('../New/8.jpg'),
url('../New/1.jpg')

    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
