
// Detecting buttonpress
let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i=0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function(){

        let buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
  }

  // Detecting keyboard press

document.addEventListener('keypress', function(event){  // event is a parameter that triggers the function. it has many properties like key which invokes function. console.log(event); for more info

    makeSound(event.key);  // sends the keys like m, s,... ie the key that is being pressed
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case 'w':
            audios('tom-1');
            break;

        case 'a':
            audios('tom-2');
            break;

        case 's':
            audios('tom-3');
            break;

        case 'd':
            audios('tom-4');
            break;

        case 'j':
            audios('snare');
            break;

        case 'k':
            audios('crash');
            break;

        case 'l':
            audios('kick-bass');
            break;

        default:
            console.log('oops');
            break;
    }
}

function audios(a){
    let audio = new Audio('sounds/' + a + '.mp3');
    audio.play();
}

function buttonAnimation(currentKey){
    activeBTn = document.querySelector('.' + currentKey);
    activeBTn.classList.add('pressed');   
    setTimeout(function(){
        activeBTn.classList.remove('pressed');
    }, 100);
}









