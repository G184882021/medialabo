// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let i = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 2;       // 第5回課題:テキストボックスの数値をここに代入

    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    kaisu = kaisu + 1;
    let k = document.querySelector('span#kaisuu');
    k.textContent = kaisu;
    let y = document.querySelector('span#yosou');
    y.textContent = yoso;

    if(kaisu < 4 && i < 1){
        if(kaisu !== 3){
            if(yoso === kotae){
                let kekka = document.querySelector('p#result');
                kekka.textContent = "正解です．おめでとう！"
                i++;
            }else{
                if(yoso < kotae){
                    let kekka = document.querySelector('p#result');
                    kekka.textContent = "まちがい．答えはもっと大きいですよ"
                    // console.log("まちがい．答えはもっと大きいですよ");
                }else{
                    let kekka = document.querySelector('p#result');
                    kekka.textContent = "まちがい．答えはもっと小さいですよ"
                    // console.log("まちがい．答えはもっと小さいですよ");
                }
            }
        }else{
            let kekka = document.querySelector('p#result');
            kekka.textContent = "まちがい．残念でした答えは" + kotae + "です．"
            // console.log("まちがい．残念でした答えは" + kotae + "です．");
        }
    }else{
        let kekka = document.querySelector('p#result');
        kekka.textContent = "答えは" + kotae + "でした．すでにゲームは終わっています"
        // console.log("答えは" + kotae + "でした．すでにゲームは終わっています");
    }

}

// let s = document.querySelector('span#name');
// s.textContent = name;
