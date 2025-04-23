export class displaySwitching{
    constructor(lyricsElementId, romajiElementId, scoreElementId) {
        this.lyricsElement = document.getElementById(lyricsElementId);
        this.romajiElement = document.getElementById(romajiElementId);
        this.scoreElement = document.getElementById(scoreElementId);
    }
    //歌詞と歌詞ローマ字の表示の変更
    updateLyrics(kana, romaji) {
        this.lyricsElement.innerText = kana;
        this.romajiElement.innerText = romaji;
    }
    //scoreの表示の変更
    updateScore(score) {
        this.scoreElement.innerText = score;
    }
}