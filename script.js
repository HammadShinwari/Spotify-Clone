console.log("welcome to spotify");

// Initialize the Element
let songIndex = 0;
let audioElement = new Audio('2.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");


let songs = [
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Salam-e-ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg'},
]

// audioElement.play();

// Handle play/pause Click
masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // Update seekbar
})