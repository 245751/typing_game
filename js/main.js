import { romajiLyrics } from './romajiLyrics.js';
import { displaySwitching } from './displaySwitching.js';
const lyricskana = "あったか さいこう".split(' ');
let kanaPosition = 0
let score = 0

document.addEventListener("keydown", event => {
    if (event.key !== lyricsRomaji.charAt(0)) { return; }
    score++;
    displaySwitch.updateScore(score);
    lyricsRomaji.shift();
    if (lyricsRomaji.length() !== 0) {
        displaySwitch.updateLyrics(lyricskana[kanaPosition], lyricsRomaji.show());
        return;
    }
    kanaPosition++;
    if (kanaPosition === lyricskana.length) {
        displaySwitch.updateLyrics("終了", "");
        return;
    }
    lyricsRomaji.set(lyricskana[kanaPosition]);
    displaySwitch.updateLyrics(lyricskana[kanaPosition], lyricsRomaji.show());
    
});


const lyricsRomaji =new romajiLyrics(lyricskana[kanaPosition])
const displaySwitch = new displaySwitching("lyrics","romajiLyrics","score")
displaySwitch.updateLyrics(lyricskana[kanaPosition],lyricsRomaji.show())
displaySwitch.updateScore(score)


