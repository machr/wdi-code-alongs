var walkBtn = document.getElementById('walkBtn');
var progress;
var movePixel = 30;
var img = document.getElementById('zombie');


currentLeft = img.style.left = 0;
// walking function
var moveZombie = function(){
  //grab image in html
  var currentLeft = parseInt(img.style.left);
  if (currentLeft <= 0 ) {
    movePixel = 30;
    img.style.transform = "scaleX(1)";
    img.style.transition = "all 0.150s linear";

  } else if( currentLeft >= (window.innerWidth - img.width) ){
    movePixel = -20;
    img.style.transform = "scaleX(-1)";
    img.style.transition = "all 0.150s linear";
  }
  img.style.left = currentLeft + movePixel + 'px';
};
var zombieWalk = function(){
  if (progress) {
    return;
  }
  stopWalk();
  progress = setInterval(moveZombie, 150); // use setTimeout if only move once.
  // console.log('clicked');
};

var walkFaster = function(){
  movePixel = movePixel * 1.5;
};

var stopWalk = function(){

    clearInterval(progress);

  // console.log('clicked');
};

fasterBtn.addEventListener('click', walkFaster);
walkBtn.addEventListener('click', zombieWalk);
stopBtn.addEventListener('click', stopWalk );
