const keys = document.querySelectorAll('.key');


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // rewind the audio to the start
    audio.play();
    // key.add('playing') jquery
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');

}

keys.forEach(key => {
    return key.addEventListener('transitionend', removeTransition);
})

document.addEventListener('keydown', playSound);
