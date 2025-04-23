import { romajiLyrics } from './romajiLyrics.js';
import { displaySwitching } from './displaySwitching.js';
const lyricskana = "あったか さいこう".split(' ');
let index = 0
let score = 0

document.addEventListener("keydown", event =>{
    if(event.key!==lyricsRomaji.charAt(0)){return}
    score++
    displaySwitch.updateScore(score)
    lyricsRomaji.shift()
    if(lyricsRomaji.length()==0){
        index++
        lyricsRomaji.set(lyricskana[index])
        displaySwitch.updateLyrics(lyricskana[index],lyricsRomaji.show())
    }
    displaySwitch.updateLyrics(lyricskana[index],lyricsRomaji.show())
});


const lyricsRomaji =new romajiLyrics(lyricskana[index])
const displaySwitch = new displaySwitching("lyrics","romajiLyrics","score")
displaySwitch.updateLyrics(lyricskana[index],lyricsRomaji.show())
displaySwitch.updateScore(score)


