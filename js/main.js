import { romajiLyrics } from './romajiLyrics.js';
const lyricskana = "あったか さいこう".split(' ');
let index = 0
let score = 0
const lyricsElement = document.getElementById("lyrics");
const romajiLyricsElement = document.getElementById("romajiLyrics");
const scoreElement = document.getElementById("score")

function displayLyrics(romaji){
    lyricsElement.innerText=lyricskana[index]
    romajiLyricsElement.innerText=romaji
    scoreElement.innerText=score
}

document.addEventListener("keydown", event =>{
    if(event.key==lyricsRomaji.charAt(0)){
        score++
        scoreElement.innerText=score
        lyricsRomaji.shift()
        if(lyricsRomaji.length()==0){
            index++
            lyricsRomaji.set(lyricskana[index])
            lyricsElement.innerText=lyricskana[index]
        }
        romajiLyricsElement.innerText=lyricsRomaji.show()
    }
});


const lyricsRomaji =new romajiLyrics(lyricskana[index])
displayLyrics(lyricsRomaji.show())


