let sirokumaSuu = 0;
let sirokumaSuuRuikei = 0;
let sirokumaSuuRuikeiHerasu = 0;

let waribiki = 1;

let sirokumaOneClick = 1;


function fuyasuSirokuma(sirokumaKazu) {
    sirokumaSuu = sirokumaSuu + sirokumaKazu;
    sirokumaSuuRuikei = sirokumaSuuRuikei + sirokumaKazu;
    updateHyouji();
    return ("しろくま数を" + sirokumaSuu + "に変更しました")
}

function herasuSirokuma(HerasuSirokumaKazu) {
    sirokumaSuu = sirokumaSuu - HerasuSirokumaKazu;
    sirokumaSuuRuikeiHerasu = sirokumaSuuRuikeiHerasu + HerasuSirokumaKazu;
    updateHyouji();
    return ("しろくま数を" + sirokumaSuu + "に変更しました")

}

function clickSirokuma() {
    fuyasuSirokuma(sirokumaOneClick);
}

function updateHyouji() {
    document.getElementById('hyoujiSirokumaSuu').innerHTML = sirokumaSuu;
}

// スキル値段
let skillcost = [100, 1000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 800000000, 1000000000, 3000000000];

// スキル獲得数
let skillKakutoku = new Array(15).fill(0);

// スキルのクリック増加量
const skillBonus = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 8000000, 10000000, 15000000]

function skillClick(skillID) {
    if (skillKakutoku[skillID] == 1) { alert("すでに獲得しています") } else {
        if (skillID === 0 ? true : skillKakutoku[skillID - 1] == 1) {
            if (sirokumaSuu >= skillcost[skillID]) {
                herasuSirokuma(skillcost[skillID]);//コスト分しろくま数からひく
                sirokumaOneClick = skillBonus[skillID]; // しろくまが１クリックで増える量調整 
                skillKakutoku[skillID] = 1; // 獲得変数に１

                document.getElementById(`skill${skillID + 1}kakutokuDesc`).innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + skillcost[skillID] + "に達していません。しろくま数を貯めてください。") }
        }
        else {
            alert("前のスキルを先に獲得してください。")
        }
    }
}

let itemcost = [15, 100, 1000, 10000, 110000, 5800000, 12500000, 13000000, 135000000, 1400000000, 15000000000, 160000000000, 1750000000000, 19000000000000, 21000000000000];

let itemcount = new Array(15).fill(0)
let itemHyouji = new Array(15).fill(0)

const itemParBonus = [1, 1, 10, 100, 1000, 5000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1000000000000];
let itemRatio = new Array(15).fill(1)


let buyKosuu = 1;
let ratio = 1.15;

function itembuy(id) {
    if (sirokumaSuu >= itemHyouji[id]) {
        herasuSirokuma(itemHyouji[id])
        itemcount[id] = itemcount[id] + buyKosuu;
        itemcost[id] = itemHyouji[id];
        item_hyoujiUpdate();

        document.getElementById(`item${id + 1}havekazu`).innerHTML = itemcount[id].toLocaleString();
        document.getElementById(`item${id + 1}MotterukazuHyouji`).innerHTML = itemcount[id].toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + itemHyouji[id] + 'に達していません。しろくま数を貯めてください。') }
}

setInterval(() => {
    if (buyKosuu == 1) { }
    else if (buyKosuu == 10) { }
    else if (buyKosuu == 100) { }
    else { error_critical(200) }
}, 1000);


setInterval(() => { // アイテムで増える部分の計算
    let itemBonusList = [];

    itemcost.forEach((e, i) => {
        if (i === 0) { }
        else {
            itemBonusList.push(itemcount[i] * itemParBonus[i] * itemRatio[i])
        }
    })

    let total = itemBonusList.reduce((s, e) => {
        return s + e;
    }, 0);
    fuyasuSirokuma(total);
}, 1000);

setInterval(() => {
    fuyasuSirokuma(itemcount[0] * itemParBonus[0] * itemRatio[0]);
}, 10000);

function item_hyoujiUpdate() {

    for (let index = 0; index < 15; index++) {

        if (buyKosuu == 1) {
            if (itemcount[index] == 0) {
                itemHyouji[index] = itemcost[index];
            }
            else {
                itemHyouji[index] = itemcost[index];

                itemHyouji[index] = Math.ceil(itemHyouji[index] * ratio * waribiki)
            }
        }
        else {
            itemHyouji[index] = itemcost[index];

            let itemhyoujiBuffer = itemHyouji[index];
            for (i = 0; i < buyKosuu - 1; i++) {
                itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * ratio * waribiki);
                itemHyouji[index] = itemHyouji[index] + itemhyoujiBuffer;
            }
        }
        document.getElementById(`item${index + 1}-sirokumacost`).innerHTML = itemHyouji[index].toLocaleString() + '&nbsp;しろくま';
        document.getElementById(`item${index + 1}nedan`).innerHTML = itemHyouji[index].toLocaleString() + '&nbsp;しろくま';
    }
}

function x1push() {
    buyKosuu = 1;
    document.getElementById('x1text').innerHTML = '<span style="text-shadow: #FFFFFF 1px 0 5px;">x1</span>';
    document.getElementById('x10text').innerHTML = 'x10';
    document.getElementById('x100text').innerHTML = 'x100';
    item_hyoujiUpdate();
}

function x10push() {
    buyKosuu = 10;
    document.getElementById('x1text').innerHTML = 'x1';
    document.getElementById('x10text').innerHTML = '<span style="text-shadow: #FFFFFF 1px 0 5px;">x10</span>';
    document.getElementById('x100text').innerHTML = 'x100';
    item_hyoujiUpdate();
}

function x100push() {
    buyKosuu = 100;
    document.getElementById('x1text').innerHTML = 'x1';
    document.getElementById('x10text').innerHTML = 'x10';
    document.getElementById('x100text').innerHTML = '<span style="text-shadow: #FFFFFF 1px 0 5px;">x100</span>';
    item_hyoujiUpdate();
}

x1push();

function itemAllLoad() {
    for (let index = 0; index < 15; index++) {
        document.getElementById(`item${index + 1}-sirokumacost`).innerHTML = itemcost[index].toLocaleString() + '&nbsp;しろくま';
        document.getElementById(`item${index + 1}nedan`).innerHTML = itemcost[index].toLocaleString() + '&nbsp;しろくま';
        document.getElementById(`item${index + 1}havekazu`).innerHTML = itemcount[index].toLocaleString();
        document.getElementById(`item${index + 1}MotterukazuHyouji`).innerHTML = itemcount[index].toLocaleString() + '&nbsp;個';
    }
}


// ===========================================
// ダイアログ系
// ===========================================

function hyoujiDialog(titleHTML, textHTML, buttonHTML) {
    document.querySelector(".dialog_body").style.visibility = "visible"

    document.getElementById('dialogText_title').innerHTML = titleHTML;
    document.getElementById('dialogText_text').innerHTML = textHTML;
    document.getElementById('dialogButton').innerHTML = buttonHTML;
}

function batuclick() {
    document.querySelector(".dialog_body").style.visibility = "hidden"
}

function dataExport_button() {
    hyoujiDialog(
        'セーブの書き出し',
        '<span style="font-size: smaller; ">今のセーブデータのコードです。コピーして安全なところに保存しておいてね</span><textarea rows="8" style="width: calc(100% - 9px);" margin-left:3px; margin-top: 1px;">' + dataExport() + ' </textarea>',
        '<button onclick="batuclick();">保存完了！</button>'
    )
}

function dataImport_button() {
    hyoujiDialog('セーブの読み込み', '<span style="font-size: smaller; ">セーブコードを入力してね</span><textarea rows="9" style="margin-left:3px; margin-top: 1px; width: calc(100% - 9px);" id="saveloadarea"></textarea>', '<button style="font-size: small;" onclick="dataImport_ButtonB();">ロード</button><button style="font-size: small;" onclick="batuclick();">やっぱいいや</button>')
}

function dataImport_file() {
    hyoujiDialog('ファイルからセーブを読み込み', 'ここからファイルを読み込み<br><br><br><input style="width: 300px;" type="file" name="" id="dataFile">', '<button onclick="batuclick()">やっぱいいや</button>')
    dataImport_fileB();
}

function dataImport_fileB() {
    let input = document.getElementById('dataFile');
    let reader = new FileReader();

    input.addEventListener('change', () => {
        for (file of input.files) {
            //Fileオブジェクト(テキストファイル)のファイル内容を読み込む
            reader.readAsText(file, 'UTF-8');
            //ファイルの読み込み完了後に内容をコンソールに出力する
            reader.onload = () => {
                if (dataImport(reader.result)) {
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-bottom-center",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    }
                    toastr["success"]("ファイルからロードしました")
                }
                batuclick();
            };
        }
    });
}

function dataImport_ButtonB() {
    let element = document.getElementById('saveloadarea');
    if (element.value === undefined) {

    }
    else {
        if (dataImport(element.value)) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-bottom-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["success"]("テキストからロードしました。")
        }
        batuclick();
    }
}

function dataExport_File() {
    var blob = new Blob([dataExport()], { type: "text/plain;charset=utf-8" });
    // saveAs(blob, 'SirokumaClickerSAVE.txt');
    // 1桁の数字を0埋めで2桁にする
    var toDoubleDigits = function (num) {
        num += "";
        if (num.length === 1) {
            num = "0" + num;
        }
        return num;
    };

    // 日付をYYYY/MM/DD HH:DD:MI:SS形式で取得
    var yyyymmddhhmiss = function () {
        var date = new Date();
        var yyyy = date.getFullYear();
        var mm = String(toDoubleDigits(date.getMonth() + 1));
        var dd = String(toDoubleDigits(date.getDate()));
        var hh = String(toDoubleDigits(date.getHours()));
        var mi = String(toDoubleDigits(date.getMinutes()));
        var ss = String(toDoubleDigits(date.getSeconds()));

        return yyyy + mm + dd + '-' + hh + mi + ss;
    };


    saveAs(blob, 'SirokumaClickerSAVE-' + yyyymmddhhmiss() + '.txt');

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr["success"]("ファイルに保存しました")
}

// ===========================================
// ショップ名変更プログラム
// ===========================================

let shopname = 'polar bear';

function changeShopName() {
    hyoujiDialog(
        'ショップ名の変更',
        `ショップ名を変更することができます。<br>長い名前や日本語を入れるとセーブデータのデータ量が増えます。<br><br><textarea id="shopnameTextbox" style="width: calc(100% - 9px); resize: none;height: 100px;">${shopname}</textarea>`,
        '<button style="font-size: small;" onclick="shopnameConfirm();">決めた</button><button style="font-size: small;" onclick="batuclick();">やっぱいいや</button>')
}

function changeShopShoki() {
    document.getElementById('shopNameArea').textContent = shopname

}

function shopnameConfirm() {
    const textbox = document.getElementById("shopnameTextbox")
    shopname = textbox.value;
    document.getElementById('shopNameArea').textContent = shopname
    batuclick();
}

// ==========================================
// エラープログラム
// ==========================================

function error_critical(errorcode) {
    document.getElementById('index_body').innerHTML = 'Sirokuma-Clicker Version' + clicker_version + '<br>critical error.  Error Code' + errorcode + '<br><br>↓最終セーブデータ↓<br><span id="saveHyouji"></span>';
    document.getElementById('saveHyouji').innerHTML = '<textarea cols="10" rows="10">' + dataExport() + '</textarea>';
}
