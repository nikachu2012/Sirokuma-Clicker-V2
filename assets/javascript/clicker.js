sirokumaSuu = 0;
sirokumaSuuRuikei = 0;
sirokumaSuuRuikeiHerasu = 0;

waribiki = 1

sirokumaOneClick = 1;


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
/*
window.addEventListener('DOMContentLoaded', function(){

    window.addEventListener("keypress", function(e){
      if(e.key == " "){
          clickSirokuma();
      }
    });
  });
*/

function updateHyouji() {
    document.getElementById('hyoujiSirokumaSuu').innerHTML = sirokumaSuu;
}

skill1cost = 100;
skill2cost = 1000;
skill3cost = 10000;
skill4cost = 50000;
skill5cost = 100000;
skill6cost = 500000;
skill7cost = 1000000;
skill8cost = 5000000;
skill9cost = 10000000;
skill10cost = 50000000;
skill11cost = 100000000;
skill12cost = 500000000;
skill13cost = 800000000;
skill14cost = 1000000000;
skill15cost = 3000000000;

skill1kakutoku = 0;
skill2kakutoku = 0;
skill3kakutoku = 0;
skill4kakutoku = 0;
skill5kakutoku = 0;
skill6kakutoku = 0;
skill7kakutoku = 0;
skill8kakutoku = 0;
skill9kakutoku = 0;
skill10kakutoku = 0;
skill11kakutoku = 0;
skill12kakutoku = 0;
skill13kakutoku = 0;
skill14kakutoku = 0;
skill15kakutoku = 0;


function skill1Click() {
    if (skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill1cost) {
            herasuSirokuma(skill1cost); //コスト分しろくま数からひく
            sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
            skill1kakutoku = 1; // 獲得変数に１

            document.getElementById('skill1kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
        }
        else { alert("しろくま数が" + skill1cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function skill2Click() {
    if (skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill2cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill2cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('skill2kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function skill3Click() {
    if (skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill3cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill3cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('skill3kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function skill4Click() {
    if (skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill4cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill4cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('skill4kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function skill5Click() {
    if (skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill5cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill5cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('skill5kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function skill6Click() {
    if (skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill6cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill6cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('skill6kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function skill7Click() {
    if (skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill7cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill7cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('skill7kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function skill8Click() {
    if (skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill8cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill8cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('skill8kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
} function skill9Click() {
    if (skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill9cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill9cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('skill9kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
} function skill10Click() {
    if (skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill10cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill10cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('skill10kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
} function skill11Click() {
    if (skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill11cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill11cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('skill11kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
} function skill12Click() {
    if (skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill12cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill12cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('skill12kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
} function skill13Click() {
    if (skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill13cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill13cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('skill13kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
} function skill14Click() {
    if (skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill14cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill14cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('skill14kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
} function skill15Click() {
    if (skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= skill15cost) {
            if (skill5kakutoku == 1) {
                herasuSirokuma(skill15cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('skill15kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}
/* function skill6Click(){
    if(sirokumaSuu >= skill6cost){
        if(skill5kakutoku == 1){
            if(skill6kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill6cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('skill6kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill6cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}*/



item1nedan = 15;
item2nedan = 100;
item3nedan = 1000;
item4nedan = 10000;
item5nedan = 110000;
item6nedan = 5800000;
item7nedan = 12500000;
item8nedan = 13000000;
item9nedan = 135000000;
item10nedan = 1400000000;
item11nedan = 15000000000;
item12nedan = 160000000000;
item13nedan = 1750000000000;
item14nedan = 19000000000000;
item15nedan = 21000000000000;

item1kosuu = 0;
item2kosuu = 0;
item3kosuu = 0;
item4kosuu = 0;
item5kosuu = 0;
item6kosuu = 0;
item7kosuu = 0;
item8kosuu = 0;
item9kosuu = 0;
item10kosuu = 0;
item11kosuu = 0;
item12kosuu = 0;
item13kosuu = 0;
item14kosuu = 0;
item15kosuu = 0;

item1Hyouji = 0;
item2Hyouji = 0;
item3Hyouji = 0;
item4Hyouji = 0;
item5Hyouji = 0;
item6Hyouji = 0;
item7Hyouji = 0;
item8Hyouji = 0;
item9Hyouji = 0;
item10Hyouji = 0;
item11Hyouji = 0;
item12Hyouji = 0;
item13Hyouji = 0;
item14Hyouji = 0;
item15Hyouji = 0;

item1fueruTan = 1; // 実質0.1/s 実際1/10s
item2fueruTan = 1;
item3fueruTan = 10;
item4fueruTan = 100;
item5fueruTan = 1000;
item6fueruTan = 5000;
item7fueruTan = 10000;
item8fueruTan = 100000;
item9fueruTan = 1000000;
item10fueruTan = 10000000;
item11fueruTan = 100000000;
item12fueruTan = 1000000000;
item13fueruTan = 10000000000;
item14fueruTan = 100000000000;
item15fueruTan = 1000000000000;

item1bairitu = 1;
item2bairitu = 1;
item3bairitu = 1;
item4bairitu = 1;
item5bairitu = 1;
item6bairitu = 1;
item7bairitu = 1;
item8bairitu = 1;
item9bairitu = 1;
item10bairitu = 1;
item11bairitu = 1;
item12bairitu = 1;
item13bairitu = 1;
item14bairitu = 1;
item15bairitu = 1;


buyKosuu = 1;
bairitu = 1.15;

function item1buy() {
    if (sirokumaSuu >= item1hyouji) {
        herasuSirokuma(item1hyouji)
        item1kosuu = item1kosuu + buyKosuu;
        item1nedan = item1hyouji;
        item_hyoujiUpdate();

        document.getElementById('item1havekazu').innerHTML = item1kosuu.toLocaleString();
        document.getElementById('item1MotterukazuHyouji').innerHTML = item1kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item1hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item2buy() {
    if (sirokumaSuu >= item2hyouji) {
        herasuSirokuma(item2hyouji)
        item2kosuu = item2kosuu + buyKosuu;
        item2nedan = item2hyouji;
        item_hyoujiUpdate();

        document.getElementById('item2havekazu').innerHTML = item2kosuu.toLocaleString();
        document.getElementById('item2MotterukazuHyouji').innerHTML = item2kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item2hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item3buy() {
    if (sirokumaSuu >= item3hyouji) {
        herasuSirokuma(item3hyouji)
        item3kosuu = item3kosuu + buyKosuu;
        item3nedan = item3hyouji;
        item_hyoujiUpdate();

        document.getElementById('item3havekazu').innerHTML = item3kosuu.toLocaleString();
        document.getElementById('item3MotterukazuHyouji').innerHTML = item3kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item3hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item4buy() {
    if (sirokumaSuu >= item4hyouji) {
        herasuSirokuma(item4hyouji)
        item4kosuu = item4kosuu + buyKosuu;
        item4nedan = item4hyouji;
        item_hyoujiUpdate();

        document.getElementById('item4havekazu').innerHTML = item4kosuu.toLocaleString();
        document.getElementById('item4MotterukazuHyouji').innerHTML = item4kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item4hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item5buy() {
    if (sirokumaSuu >= item5hyouji) {
        herasuSirokuma(item5hyouji)
        item5kosuu = item5kosuu + buyKosuu;
        item5nedan = item5hyouji;
        item_hyoujiUpdate();

        document.getElementById('item5havekazu').innerHTML = item5kosuu.toLocaleString();
        document.getElementById('item5MotterukazuHyouji').innerHTML = item5kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item5hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item6buy() {
    if (sirokumaSuu >= item6hyouji) {
        herasuSirokuma(item6hyouji)
        item6kosuu = item6kosuu + buyKosuu;
        item6nedan = item6hyouji;
        item_hyoujiUpdate();

        document.getElementById('item6havekazu').innerHTML = item6kosuu.toLocaleString();
        document.getElementById('item6MotterukazuHyouji').innerHTML = item6kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item6hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item7buy() {
    if (sirokumaSuu >= item7hyouji) {
        herasuSirokuma(item7hyouji)
        item7kosuu = item7kosuu + buyKosuu;
        item7nedan = item7hyouji;
        item_hyoujiUpdate();

        document.getElementById('item7havekazu').innerHTML = item7kosuu.toLocaleString();
        document.getElementById('item7MotterukazuHyouji').innerHTML = item7kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item7hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item8buy() {
    if (sirokumaSuu >= item8hyouji) {
        herasuSirokuma(item8hyouji)
        item8kosuu = item8kosuu + buyKosuu;
        item8nedan = item8hyouji;
        item_hyoujiUpdate();

        document.getElementById('item8havekazu').innerHTML = item8kosuu.toLocaleString();
        document.getElementById('item8MotterukazuHyouji').innerHTML = item8kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item8hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item9buy() {
    if (sirokumaSuu >= item9hyouji) {
        herasuSirokuma(item9hyouji)
        item9kosuu = item9kosuu + buyKosuu;
        item9nedan = item9hyouji;
        item_hyoujiUpdate();

        document.getElementById('item9havekazu').innerHTML = item9kosuu.toLocaleString();
        document.getElementById('item9MotterukazuHyouji').innerHTML = item9kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item9hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item10buy() {
    if (sirokumaSuu >= item10hyouji) {
        herasuSirokuma(item10hyouji)
        item10kosuu = item10kosuu + buyKosuu;
        item10nedan = item10hyouji;
        item_hyoujiUpdate();

        document.getElementById('item10havekazu').innerHTML = item10kosuu.toLocaleString();
        document.getElementById('item10MotterukazuHyouji').innerHTML = item10kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item10hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item11buy() {
    if (sirokumaSuu >= item11hyouji) {
        herasuSirokuma(item11hyouji)
        item11kosuu = item11kosuu + buyKosuu;
        item11nedan = item11hyouji;
        item_hyoujiUpdate();

        document.getElementById('item11havekazu').innerHTML = item11kosuu.toLocaleString();
        document.getElementById('item11MotterukazuHyouji').innerHTML = item11kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item11hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item12buy() {
    if (sirokumaSuu >= item12hyouji) {
        herasuSirokuma(item12hyouji)
        item12kosuu = item12kosuu + buyKosuu;
        item12nedan = item12hyouji;
        item_hyoujiUpdate();

        document.getElementById('item12havekazu').innerHTML = item12kosuu.toLocaleString();
        document.getElementById('item12MotterukazuHyouji').innerHTML = item12kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item12hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item13buy() {
    if (sirokumaSuu >= item13hyouji) {
        herasuSirokuma(item13hyouji)
        item13kosuu = item13kosuu + buyKosuu;
        item13nedan = item13hyouji;
        item_hyoujiUpdate();

        document.getElementById('item13havekazu').innerHTML = item13kosuu.toLocaleString();
        document.getElementById('item13MotterukazuHyouji').innerHTML = item13kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item13hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item14buy() {
    if (sirokumaSuu >= item14hyouji) {
        herasuSirokuma(item14hyouji)
        item14kosuu = item14kosuu + buyKosuu;
        item14nedan = item14hyouji;
        item_hyoujiUpdate();

        document.getElementById('item14havekazu').innerHTML = item14kosuu.toLocaleString();
        document.getElementById('item14MotterukazuHyouji').innerHTML = item14kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item14hyouji + 'に達していません。しろくま数を貯めてください。') }
}
function item15buy() {
    if (sirokumaSuu >= item15hyouji) {
        herasuSirokuma(item15hyouji)
        item15kosuu = item15kosuu + buyKosuu;
        item15nedan = item15hyouji;
        item_hyoujiUpdate();

        document.getElementById('item15havekazu').innerHTML = item15kosuu.toLocaleString();
        document.getElementById('item15MotterukazuHyouji').innerHTML = item15kosuu.toLocaleString() + '&nbsp;個';
    }
    else { alert('しろくま数が' + item15hyouji + 'に達していません。しろくま数を貯めてください。') }
}


/*
 ======= BACKUP ======= 2020/12/18 2:22 a.m.
function item1buy(){
    if(sirokumaSuu >= item1nedan){
        herasuSirokuma(item1nedan * buyKosuu);
        item1kosuu = item1kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item1nedan = Math.ceil(item1nedan * bairitu * waribiki);
        }

        document.getElementById('item1-sirokumacost').innerHTML = item1nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item1nedan').innerHTML = item1nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item1havekazu').innerHTML = item1kosuu.toLocaleString();
        document.getElementById('item1MotterukazuHyouji').innerHTML = item1kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item1nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
*/


setInterval(() => {
    if (buyKosuu == 1) { }
    else if (buyKosuu == 10) { }
    else if (buyKosuu == 100) { }
    else { error_critical(200) }
}, 1000);


setInterval(() => { // アイテムで増える部分の計算

    var item2fuyasu = item2kosuu * item2fueruTan * item2bairitu;
    var item3fuyasu = item3kosuu * item3fueruTan * item3bairitu;
    var item4fuyasu = item4kosuu * item4fueruTan * item4bairitu;
    var item5fuyasu = item5kosuu * item5fueruTan * item5bairitu;
    var item6fuyasu = item6kosuu * item6fueruTan * item6bairitu;
    var item7fuyasu = item7kosuu * item7fueruTan * item7bairitu;
    var item8fuyasu = item8kosuu * item8fueruTan * item8bairitu;
    var item9fuyasu = item9kosuu * item9fueruTan * item9bairitu;
    var item10fuyasu = item10kosuu * item10fueruTan * item10bairitu;
    var item11fuyasu = item11kosuu * item11fueruTan * item11bairitu;
    var item12fuyasu = item12kosuu * item12fueruTan * item12bairitu;
    var item13fuyasu = item13kosuu * item13fueruTan * item13bairitu;
    var item14fuyasu = item14kosuu * item14fueruTan * item14bairitu;
    var item15fuyasu = item15kosuu * item15fueruTan * item15bairitu;


    var fueru = item2fuyasu + item3fuyasu + item4fuyasu + item5fuyasu + item6fuyasu + item7fuyasu + item8fuyasu + item9fuyasu + item10fuyasu + item11fuyasu + item12fuyasu + item13fuyasu + item14fuyasu + item15fuyasu;

    fuyasuSirokuma(fueru);

}, 1000);

setInterval(() => {
    var item1fuyasu = item1kosuu * item1fueruTan * item2bairitu;
    fuyasuSirokuma(item1fuyasu);
}, 10000);

function item_hyoujiUpdate() {
    if (buyKosuu == 1) {
        if (item1kosuu == 0) {
            item1hyouji = item1nedan;

            document.getElementById('item1-sirokumacost').innerHTML = item1hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item1nedan').innerHTML = item1hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item1hyouji = item1nedan;

            item1hyouji = Math.ceil(item1hyouji * bairitu * waribiki)

            document.getElementById('item1-sirokumacost').innerHTML = item1hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item1nedan').innerHTML = item1hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item1hyouji = item1nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item1hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item1hyouji = item1hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item1-sirokumacost').innerHTML = item1hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item1nedan').innerHTML = item1hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item2kosuu == 0) {
            item2hyouji = item2nedan;

            document.getElementById('item2-sirokumacost').innerHTML = item2hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item2nedan').innerHTML = item2hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item2hyouji = item2nedan;

            item2hyouji = Math.ceil(item2hyouji * bairitu * waribiki)

            document.getElementById('item2-sirokumacost').innerHTML = item2hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item2nedan').innerHTML = item2hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item2hyouji = item2nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item2hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item2hyouji = item2hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item2-sirokumacost').innerHTML = item2hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item2nedan').innerHTML = item2hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item3kosuu == 0) {
            item3hyouji = item3nedan;

            document.getElementById('item3-sirokumacost').innerHTML = item3hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item3nedan').innerHTML = item3hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item3hyouji = item3nedan;

            item3hyouji = Math.ceil(item3hyouji * bairitu * waribiki)

            document.getElementById('item3-sirokumacost').innerHTML = item3hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item3nedan').innerHTML = item3hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item3hyouji = item3nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item3hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item3hyouji = item3hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item3-sirokumacost').innerHTML = item3hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item3nedan').innerHTML = item3hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item4kosuu == 0) {
            item4hyouji = item4nedan;

            document.getElementById('item4-sirokumacost').innerHTML = item4hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item4nedan').innerHTML = item4hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item4hyouji = item4nedan;

            item4hyouji = Math.ceil(item4hyouji * bairitu * waribiki)

            document.getElementById('item4-sirokumacost').innerHTML = item4hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item4nedan').innerHTML = item4hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item4hyouji = item4nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item4hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item4hyouji = item4hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item4-sirokumacost').innerHTML = item4hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item4nedan').innerHTML = item4hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item5kosuu == 0) {
            item5hyouji = item5nedan;

            document.getElementById('item5-sirokumacost').innerHTML = item5hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item5nedan').innerHTML = item5hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item5hyouji = item5nedan;

            item5hyouji = Math.ceil(item5hyouji * bairitu * waribiki)

            document.getElementById('item5-sirokumacost').innerHTML = item5hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item5nedan').innerHTML = item5hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item5hyouji = item5nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item5hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item5hyouji = item5hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item5-sirokumacost').innerHTML = item5hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item5nedan').innerHTML = item5hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item6kosuu == 0) {
            item6hyouji = item6nedan;

            document.getElementById('item6-sirokumacost').innerHTML = item6hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item6nedan').innerHTML = item6hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item6hyouji = item6nedan;

            item6hyouji = Math.ceil(item6hyouji * bairitu * waribiki)

            document.getElementById('item6-sirokumacost').innerHTML = item6hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item6nedan').innerHTML = item6hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item6hyouji = item6nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item6hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item6hyouji = item6hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item6-sirokumacost').innerHTML = item6hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item6nedan').innerHTML = item6hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item7kosuu == 0) {
            item7hyouji = item7nedan;

            document.getElementById('item7-sirokumacost').innerHTML = item7hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item7nedan').innerHTML = item7hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item7hyouji = item7nedan;

            item7hyouji = Math.ceil(item7hyouji * bairitu * waribiki)

            document.getElementById('item7-sirokumacost').innerHTML = item7hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item7nedan').innerHTML = item7hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item7hyouji = item7nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item7hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item7hyouji = item7hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item7-sirokumacost').innerHTML = item7hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item7nedan').innerHTML = item7hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item8kosuu == 0) {
            item8hyouji = item8nedan;

            document.getElementById('item8-sirokumacost').innerHTML = item8hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item8nedan').innerHTML = item8hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item8hyouji = item8nedan;

            item8hyouji = Math.ceil(item8hyouji * bairitu * waribiki)

            document.getElementById('item8-sirokumacost').innerHTML = item8hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item8nedan').innerHTML = item8hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item8hyouji = item8nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item8hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item8hyouji = item8hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item8-sirokumacost').innerHTML = item8hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item8nedan').innerHTML = item8hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item9kosuu == 0) {
            item9hyouji = item9nedan;

            document.getElementById('item9-sirokumacost').innerHTML = item9hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item9nedan').innerHTML = item9hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item9hyouji = item9nedan;

            item9hyouji = Math.ceil(item9hyouji * bairitu * waribiki)

            document.getElementById('item9-sirokumacost').innerHTML = item9hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item9nedan').innerHTML = item9hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item9hyouji = item9nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item9hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item9hyouji = item9hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item9-sirokumacost').innerHTML = item9hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item9nedan').innerHTML = item9hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item10kosuu == 0) {
            item10hyouji = item10nedan;

            document.getElementById('item10-sirokumacost').innerHTML = item10hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item10nedan').innerHTML = item10hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item10hyouji = item10nedan;

            item10hyouji = Math.ceil(item10hyouji * bairitu * waribiki)

            document.getElementById('item10-sirokumacost').innerHTML = item10hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item10nedan').innerHTML = item10hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item10hyouji = item10nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item10hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item10hyouji = item10hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item10-sirokumacost').innerHTML = item10hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item10nedan').innerHTML = item10hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item11kosuu == 0) {
            item11hyouji = item11nedan;

            document.getElementById('item11-sirokumacost').innerHTML = item11hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item11nedan').innerHTML = item11hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item11hyouji = item11nedan;

            item11hyouji = Math.ceil(item11hyouji * bairitu * waribiki)

            document.getElementById('item11-sirokumacost').innerHTML = item11hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item11nedan').innerHTML = item11hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item11hyouji = item11nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item11hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item11hyouji = item11hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item11-sirokumacost').innerHTML = item11hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item11nedan').innerHTML = item11hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item12kosuu == 0) {
            item12hyouji = item12nedan;

            document.getElementById('item12-sirokumacost').innerHTML = item12hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item12nedan').innerHTML = item12hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item12hyouji = item12nedan;

            item12hyouji = Math.ceil(item12hyouji * bairitu * waribiki)

            document.getElementById('item12-sirokumacost').innerHTML = item12hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item12nedan').innerHTML = item12hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item12hyouji = item12nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item12hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item12hyouji = item12hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item12-sirokumacost').innerHTML = item12hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item12nedan').innerHTML = item12hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item13kosuu == 0) {
            item13hyouji = item13nedan;

            document.getElementById('item13-sirokumacost').innerHTML = item13hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item13nedan').innerHTML = item13hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item13hyouji = item13nedan;

            item13hyouji = Math.ceil(item13hyouji * bairitu * waribiki)

            document.getElementById('item13-sirokumacost').innerHTML = item13hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item13nedan').innerHTML = item13hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item13hyouji = item13nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item13hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item13hyouji = item13hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item13-sirokumacost').innerHTML = item13hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item13nedan').innerHTML = item13hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item14kosuu == 0) {
            item14hyouji = item14nedan;

            document.getElementById('item14-sirokumacost').innerHTML = item14hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item14nedan').innerHTML = item14hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item14hyouji = item14nedan;

            item14hyouji = Math.ceil(item14hyouji * bairitu * waribiki)

            document.getElementById('item14-sirokumacost').innerHTML = item14hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item14nedan').innerHTML = item14hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item14hyouji = item14nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item14hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item14hyouji = item14hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item14-sirokumacost').innerHTML = item14hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item14nedan').innerHTML = item14hyouji.toLocaleString() + '&nbsp;しろくま';

    }
    if (buyKosuu == 1) {
        if (item15kosuu == 0) {
            item15hyouji = item15nedan;

            document.getElementById('item15-sirokumacost').innerHTML = item15hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item15nedan').innerHTML = item15hyouji.toLocaleString() + '&nbsp;しろくま';
        }
        else {
            item15hyouji = item15nedan;

            item15hyouji = Math.ceil(item15hyouji * bairitu * waribiki)

            document.getElementById('item15-sirokumacost').innerHTML = item15hyouji.toLocaleString() + '&nbsp;しろくま';
            document.getElementById('item15nedan').innerHTML = item15hyouji.toLocaleString() + '&nbsp;しろくま';
        }
    }
    else {
        item15hyouji = item15nedan;
        var n = buyKosuu - 1;
        var itemhyoujiBuffer = item15hyouji;
        for (i = 0; i < n; i++) {
            itemhyoujiBuffer = Math.ceil(itemhyoujiBuffer * bairitu * waribiki);
            //console.log(itemhyoujiBuffer) <=DEBUG
            item15hyouji = item15hyouji + itemhyoujiBuffer;
            //console.log("item1hyouji" + item1hyouji) <=DEBUG
        }

        document.getElementById('item15-sirokumacost').innerHTML = item15hyouji.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item15nedan').innerHTML = item15hyouji.toLocaleString() + '&nbsp;しろくま';

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
    document.getElementById('item1-sirokumacost').innerHTML = item1nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item1nedan').innerHTML = item1nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item1havekazu').innerHTML = item1kosuu.toLocaleString();
    document.getElementById('item1MotterukazuHyouji').innerHTML = item1kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item2-sirokumacost').innerHTML = item2nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item2nedan').innerHTML = item2nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item2havekazu').innerHTML = item2kosuu.toLocaleString();
    document.getElementById('item2MotterukazuHyouji').innerHTML = item2kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item3-sirokumacost').innerHTML = item3nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item3nedan').innerHTML = item3nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item3havekazu').innerHTML = item3kosuu.toLocaleString();
    document.getElementById('item3MotterukazuHyouji').innerHTML = item3kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item4-sirokumacost').innerHTML = item4nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item4nedan').innerHTML = item4nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item4havekazu').innerHTML = item4kosuu.toLocaleString();
    document.getElementById('item4MotterukazuHyouji').innerHTML = item4kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item5-sirokumacost').innerHTML = item5nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item5nedan').innerHTML = item5nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item5havekazu').innerHTML = item5kosuu.toLocaleString();
    document.getElementById('item5MotterukazuHyouji').innerHTML = item5kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item6-sirokumacost').innerHTML = item6nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item6nedan').innerHTML = item6nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item6havekazu').innerHTML = item6kosuu.toLocaleString();
    document.getElementById('item6MotterukazuHyouji').innerHTML = item6kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item7-sirokumacost').innerHTML = item7nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item7nedan').innerHTML = item7nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item7havekazu').innerHTML = item7kosuu.toLocaleString();
    document.getElementById('item7MotterukazuHyouji').innerHTML = item7kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item8-sirokumacost').innerHTML = item8nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item8nedan').innerHTML = item8nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item8havekazu').innerHTML = item8kosuu.toLocaleString();
    document.getElementById('item8MotterukazuHyouji').innerHTML = item8kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item9-sirokumacost').innerHTML = item9nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item9nedan').innerHTML = item9nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item9havekazu').innerHTML = item9kosuu.toLocaleString();
    document.getElementById('item9MotterukazuHyouji').innerHTML = item9kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item10-sirokumacost').innerHTML = item10nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item10nedan').innerHTML = item10nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item10havekazu').innerHTML = item10kosuu.toLocaleString();
    document.getElementById('item10MotterukazuHyouji').innerHTML = item10kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item11-sirokumacost').innerHTML = item11nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item11nedan').innerHTML = item11nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item11havekazu').innerHTML = item11kosuu.toLocaleString();
    document.getElementById('item11MotterukazuHyouji').innerHTML = item11kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item12-sirokumacost').innerHTML = item12nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item12nedan').innerHTML = item12nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item12havekazu').innerHTML = item12kosuu.toLocaleString();
    document.getElementById('item12MotterukazuHyouji').innerHTML = item12kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item13-sirokumacost').innerHTML = item13nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item13nedan').innerHTML = item13nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item13havekazu').innerHTML = item13kosuu.toLocaleString();
    document.getElementById('item13MotterukazuHyouji').innerHTML = item13kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item14-sirokumacost').innerHTML = item14nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item14nedan').innerHTML = item14nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item14havekazu').innerHTML = item14kosuu.toLocaleString();
    document.getElementById('item14MotterukazuHyouji').innerHTML = item14kosuu.toLocaleString() + '&nbsp;個';
    document.getElementById('item15-sirokumacost').innerHTML = item15nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item15nedan').innerHTML = item15nedan.toLocaleString() + '&nbsp;しろくま';
    document.getElementById('item15havekazu').innerHTML = item15kosuu.toLocaleString();
    document.getElementById('item15MotterukazuHyouji').innerHTML = item15kosuu.toLocaleString() + '&nbsp;個';

}


// ===========================================
// ダイアログ系
// ===========================================

function hyoujiDialog(titleHTML, textHTML, buttonHTML) {
    document.getElementById('dialogHyoujiyou').innerHTML = '.dialog_body{visibility: visible;}';

    document.getElementById('dialogText_title').innerHTML = titleHTML;
    document.getElementById('dialogText_text').innerHTML = textHTML;
    document.getElementById('dialogButton').innerHTML = buttonHTML;

}
function batuclick() {
    document.getElementById('dialogHyoujiyou').innerHTML = '.dialog_body{visibility: hidden;}';
}

function dataExport_button() {
    hyoujiDialog('セーブの書き出し', '<span style="font-size: smaller; ">今のセーブデータのコードです。コピーして安全なところに保存しておいてね</span><textarea rows="8" style="width: calc(100% - 9px);" margin-left:3px; margin-top: 1px;">' + dataExport() + ' </textarea>', '<button onclick="batuclick();">保存完了！</button>')
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
                dataImport(reader.result)
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
        dataImport(element.value);
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
}

// ===========================================
// ショップ名変更プログラム
// ===========================================

function changeShopName() {
    hyoujiDialog('ショップ名の変更', '全角半角どちらも12文字まで対応しています。<br><br><input value="ショップ名" maxlength="12" id="shopnameTextbox" style="width: calc(100% - 9px)">', '<button style="font-size: small;" onclick="shopnameConfirm();">決めた</button><button style="font-size: small;" onclick="batuclick();">やっぱいいや</button>')
}

function changeShopShoki(){
    shopname = 'polar bear';
    changeShopUpdate();
    
}

function changeShopUpdate(){
    document.getElementById('shopNameArea').innerHTML = shopname + '<br>しろくまショップ';
}


function shopnameConfirm(){
    const textbox = document.getElementById("shopnameTextbox")
    shopname = textbox.value;
    document.getElementById('shopNameArea').innerHTML = shopname + '<br>しろくまショップ';
    batuclick();
}

// ==========================================
// 悲しくなるプログラム 2020年
// ==========================================

const nikachu_2020_girlfriend = 'undefined';
const sirokuma_2020_girlfriend = 'have';
const amudon_2020_girlfriend = 'undefined';

// ==========================================
// 悲しくなるプログラム 2021年
// ==========================================

const nikachu_2021_girlfriend = 'undefined';
const sirokuma_2021_girlfriend = 'had'; //ざっこwwwwwwwwwwwwww by nikachu
const amudon_2021_girlfriend = 'undefined';

// ==========================================
// エラープログラム
// ==========================================

function error_critical(errorcode){
    document.getElementById('index_body').innerHTML = 'Sirokuma-Clicker Version' + clicker_version + ' Bulid ' +  clicker_bulid +' <br>critical error.  Error Code' + errorcode + '<br><br>↓最終セーブデータ↓<br><span id="saveHyouji"></span>';
    document.getElementById('saveHyouji').innerHTML = '<textarea cols="10" rows="10">' + dataExport() + '</textarea>';
}

/*
BSODのやつ
function error_critical_new(errorcode){
    document.getElementById('index_body').innerHTML = '<style>body{font-family:Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;background:#3973aa;color:#fefeff;height:100vh;margin:0}#page{display:table;height:100%;margin:0 auto;margin-top:-10px;width:70%;font-size:1.9vw}#container{display:table-cell;vertical-align:middle}h1,h2,h3,h4,h5{font-weight:400;padding:0;margin:25px 0;margin-top:0;font-weight:300}h1{font-size:6.5em;margin-bottom:10px}h2{font-size:1.5em}h4{font-size:1.4em;line-height:1.5em}h5{line-height:1.1em;font-size:1.3em}#details{display:flex;flex-flow:row;flex-wrap:nowrap;padding-top:10px}#qr{flex:0 1 auto}#image{background:#fff;padding:5px;line-height:0}#image img{width:9.8em;height:9.8em}#stopcode{padding-left:10px;flex:1 1 auto}@media(min-width:840px){#page{font-size:140%;width:50pc}}</style><div id="page"> <div id="container"> <h1>:(</h1> <h2>エラーが発生しました。<br>しろくまクリッカーをリロードしてください。</h2> <h2> <span id="percentage">0</span>% complete</h2> <div id="details"> <div id="qr"> <div id="image"> <img src="https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=https://github.io/nikachu2012/Sirokuma-Clicker-V2" alt="QR Code"> </div></div><div id="stopcode"> <h4>バグを送りたい方はこちらから<br>https://github.io/nikachu2012/Sirokuma-Clicker-V2</h4> <h5>エラーコードを開発者に伝えてください: <br>Stop Code: ' + errorcode + '</h5> </div></div>最終セーブデータはこちら<br><span id="saveHyouji"></span></div></div>';
    document.getElementById('saveHyouji').innerHTML = 'SIROKUMABAN';
}

旧バージョンバックアップ
function error_critical(errorcode){
    alert("Sirokuma-Clicker Version" + clicker_version + " Bulid " +  clicker_bulid +" \ncritical error.  Error Code" + errorcode)
    window.location.reload();
}
*/