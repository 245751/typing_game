import { romajiLyrics } from './romajiLyrics.js';
import { displaySwitching } from './displaySwitching.js';
const lyricskana = "45びょうでなにができる 45びょうでなにができる きみのことをかんがえること 45びょうでなにができる かっぷらーめんはつくれません 45びょうでなにができる きみにすきですとつたえること 45びょうでなにができる さんすうどりるはおわりません 45びょうでなにができる きみをえがおにさせること そのえがおでまたほれなおすこと".split(' ');
let kanaPosition = 0
let score = 0
let player;
const timelist=[6,8.6,12.8,15.2,18.8,22,25,28,31,34,37]
const checkTime=new Array(timelist.length).fill(false);
let timeposition = 0;
document.addEventListener("keydown", event => {
    if (event.key !== lyricsRomaji.charAt(0)) { return; }
    score++;
    displaySwitch.updateScore(score);
    lyricsRomaji.shift();
    if (lyricsRomaji.length() !== 0) {
        displaySwitch.updateLyrics(lyricskana[kanaPosition], lyricsRomaji.show());
        return;
    }
    else{displaySwitch.updateLyrics(lyricskana[kanaPosition], " ");}
    
});

function onYouTubeIframeAPIReady() {
        player= new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'SMtPjDgCtGE', 
          playerVars: {
            autoplay: 0,
            mute: 0,
            controls: 1,
          },
          events: {
        'onReady': onPlayerReady
      }
        });
      }
      document.getElementById("playBtn").addEventListener("click", function () {
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
    }
  });
  function onPlayerReady(event) {
    // 再生時間を1秒ごとにチェック
    setInterval(() => {
      const time = player.getCurrentTime(); // 秒単位で現在の再生時間を取得

      if (time >= timelist[timeposition] && !checkTime[timeposition]) {
        kanaPosition++;
        lyricsRomaji.set(lyricskana[kanaPosition]);
        displaySwitch.updateLyrics(lyricskana[kanaPosition], lyricsRomaji.show());
        checkTime[timeposition]= true;
        timeposition++;
      }

      
    }, 1000);
  }
onYouTubeIframeAPIReady();  
const lyricsRomaji =new romajiLyrics(lyricskana[kanaPosition])
const displaySwitch = new displaySwitching("lyrics","romajiLyrics","score")
displaySwitch.updateLyrics(lyricskana[kanaPosition],lyricsRomaji.show())
displaySwitch.updateScore(score)



