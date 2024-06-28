console.log("Welcome spotify");
let songIndex = 0;
let audioElement = new Audio ('1sng.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgessBar');


let songs = [
    {songName: "Dil hai chota sa", filePath: "2sng.mp3" , coverpath:"covers/.cover.jpeg"},
    {songName: "Dil hai chota sa", filePath: "2sng.mp3" , coverpath:"covers/.cover.jpeg"},
    {songName: "Dil hai chota sa", filePath: "2sng.mp3" , coverpath:"covers/.cover.jpeg"},
    {songName: "Dil hai chota sa", filePath: "2sng.mp3" , coverpath:"covers/.cover.jpeg"},
    {songName: "Dil hai chota sa", filePath: "2sng.mp3" , coverpath:"covers/.cover.jpeg"},
    
]
// Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
// listen to events
myProgressBar.addEventListener("timeupdate", ()=>{
    console.log('timeupdate');

})