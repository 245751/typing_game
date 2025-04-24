import * as wanakana from 'https://cdn.jsdelivr.net/npm/wanakana@5.3.1/esm/index.js'
export class romajiLyrics {
    #romanization
    constructor(text) {
        this.#romanization = String(wanakana.toRomaji(text))
    }
    // ローマ字の表示
    show() {
        return this.#romanization
    }

    // 先頭から1文字削除
    shift() {
        if(this.#romanization.length==0)return
        this.#romanization = this.#romanization.slice(1);
    }

    // n番目の文字取得 (0始まり)
    charAt(n) {
        if (n < 0 || n >= this.#romanization.length) {
            throw new Error("範囲外のインデックスです");
        }
        return this.#romanization[n];
    }

    // 現在の残り文字数
    length(){
        return this.#romanization.length
    }

    //歌詞の変更
    set(text){
        this.#romanization = String(wanakana.toRomaji(text))
    }
}
