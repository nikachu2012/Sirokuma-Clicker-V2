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

// ===========================================
// スキル値段
// ===========================================

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


sharp_skill1cost = 100;
sharp_skill2cost = 1000;
sharp_skill3cost = 10000;
sharp_skill4cost = 50000;
sharp_skill5cost = 100000;
sharp_skill6cost = 500000;
sharp_skill7cost = 1000000;
sharp_skill8cost = 5000000;
sharp_skill9cost = 10000000;
sharp_skill10cost = 50000000;
sharp_skill11cost = 100000000;
sharp_skill12cost = 500000000;
sharp_skill13cost = 800000000;
sharp_skill14cost = 1000000000;
sharp_skill15cost = 3000000000;

sitajiki_skill1cost = 100;
sitajiki_skill2cost = 1000;
sitajiki_skill3cost = 10000;
sitajiki_skill4cost = 50000;
sitajiki_skill5cost = 100000;
sitajiki_skill6cost = 500000;
sitajiki_skill7cost = 1000000;
sitajiki_skill8cost = 5000000;
sitajiki_skill9cost = 10000000;
sitajiki_skill10cost = 50000000;
sitajiki_skill11cost = 100000000;
sitajiki_skill12cost = 500000000;
sitajiki_skill13cost = 800000000;
sitajiki_skill14cost = 1000000000;
sitajiki_skill15cost = 3000000000;


house_skill1cost = 100;
house_skill2cost = 1000;
house_skill3cost = 10000;
house_skill4cost = 50000;
house_skill5cost = 100000;
house_skill6cost = 500000;
house_skill7cost = 1000000;
house_skill8cost = 5000000;
house_skill9cost = 10000000;
house_skill10cost = 50000000;
house_skill11cost = 100000000;
house_skill12cost = 500000000;
house_skill13cost = 800000000;
house_skill14cost = 1000000000;
house_skill15cost = 3000000000;

computer_skill1cost = 100;
computer_skill2cost = 1000;
computer_skill3cost = 10000;
computer_skill4cost = 50000;
computer_skill5cost = 100000;
computer_skill6cost = 500000;
computer_skill7cost = 1000000;
computer_skill8cost = 5000000;
computer_skill9cost = 10000000;
computer_skill10cost = 50000000;
computer_skill11cost = 100000000;
computer_skill12cost = 500000000;
computer_skill13cost = 800000000;
computer_skill14cost = 1000000000;
computer_skill15cost = 3000000000;


turiba_skill1cost = 100;
turiba_skill2cost = 1000;
turiba_skill3cost = 10000;
turiba_skill4cost = 50000;
turiba_skill5cost = 100000;
turiba_skill6cost = 500000;
turiba_skill7cost = 1000000;
turiba_skill8cost = 5000000;
turiba_skill9cost = 10000000;
turiba_skill10cost = 50000000;
turiba_skill11cost = 100000000;
turiba_skill12cost = 500000000;
turiba_skill13cost = 800000000;
turiba_skill14cost = 1000000000;
turiba_skill15cost = 3000000000;


bank_skill1cost = 100;
bank_skill2cost = 1000;
bank_skill3cost = 10000;
bank_skill4cost = 50000;
bank_skill5cost = 100000;
bank_skill6cost = 500000;
bank_skill7cost = 1000000;
bank_skill8cost = 5000000;
bank_skill9cost = 10000000;
bank_skill10cost = 50000000;
bank_skill11cost = 100000000;
bank_skill12cost = 500000000;
bank_skill13cost = 800000000;
bank_skill14cost = 1000000000;
bank_skill15cost = 3000000000;


snow_skill1cost = 100;
snow_skill2cost = 1000;
snow_skill3cost = 10000;
snow_skill4cost = 50000;
snow_skill5cost = 100000;
snow_skill6cost = 500000;
snow_skill7cost = 1000000;
snow_skill8cost = 5000000;
snow_skill9cost = 10000000;
snow_skill10cost = 50000000;
snow_skill11cost = 100000000;
snow_skill12cost = 500000000;
snow_skill13cost = 800000000;
snow_skill14cost = 1000000000;
snow_skill15cost = 3000000000;


kujira_skill1cost = 100;
kujira_skill2cost = 1000;
kujira_skill3cost = 10000;
kujira_skill4cost = 50000;
kujira_skill5cost = 100000;
kujira_skill6cost = 500000;
kujira_skill7cost = 1000000;
kujira_skill8cost = 5000000;
kujira_skill9cost = 10000000;
kujira_skill10cost = 50000000;
kujira_skill11cost = 100000000;
kujira_skill12cost = 500000000;
kujira_skill13cost = 800000000;
kujira_skill14cost = 1000000000;
kujira_skill15cost = 3000000000;


factory_skill1cost = 1000;
factory_skill2cost = 10000;
factory_skill3cost = 100000;
factory_skill4cost = 500000;
factory_skill5cost = 1000000;
factory_skill6cost = 5000000;
factory_skill7cost = 10000000;
factory_skill8cost = 50000000;
factory_skill9cost = 100000000;
factory_skill10cost = 500000000;
factory_skill11cost = 1000000000;
factory_skill12cost = 5000000000;
factory_skill13cost = 8000000000;
factory_skill14cost = 10000000000;
factory_skill15cost = 30000000000;


threed_skill1cost = 10000;
threed_skill2cost = 100000;
threed_skill3cost = 10000;
threed_skill4cost = 5000000;
threed_skill5cost = 10000000;
threed_skill6cost = 50000000;
threed_skill7cost = 100000000;
threed_skill8cost = 500000000;
threed_skill9cost = 1000000000;
threed_skill10cost = 5000000000;
threed_skill11cost = 10000000000;
threed_skill12cost = 50000000000;
threed_skill13cost = 80000000000;
threed_skill14cost = 100000000000;
threed_skill15cost = 300000000000;


gpu_skill1cost = 100000;
gpu_skill2cost = 1000000;
gpu_skill3cost = 10000000;
gpu_skill4cost = 50000000;
gpu_skill5cost = 100000000;
gpu_skill6cost = 500000000;
gpu_skill7cost = 1000000000;
gpu_skill8cost = 5000000000;
gpu_skill9cost = 10000000000;
gpu_skill10cost = 50000000000;
gpu_skill11cost = 100000000000;
gpu_skill12cost = 500000000000;
gpu_skill13cost = 800000000000;
gpu_skill14cost = 1000000000000;
gpu_skill15cost = 3000000000000;


atom_skill1cost = 1000000;
atom_skill2cost = 10000000;
atom_skill3cost = 100000000;
atom_skill4cost = 500000000;
atom_skill5cost = 1000000000;
atom_skill6cost = 5000000000;
atom_skill7cost = 10000000000;
atom_skill8cost = 50000000000;
atom_skill9cost = 100000000000;
atom_skill10cost = 500000000000;
atom_skill11cost = 1000000000000;
atom_skill12cost = 5000000000000;
atom_skill13cost = 8000000000000;
atom_skill14cost = 10000000000000;
atom_skill15cost = 30000000000000;


time_skill1cost = 10000000;
time_skill2cost = 100000000;
time_skill3cost = 1000000000;
time_skill4cost = 5000000000;
time_skill5cost = 10000000000;
time_skill6cost = 50000000000;
time_skill7cost = 100000000000;
time_skill8cost = 500000000000;
time_skill9cost = 1000000000000;
time_skill10cost = 5000000000000;
time_skill11cost = 10000000000000;
time_skill12cost = 50000000000000;
time_skill13cost = 80000000000000;
time_skill14cost = 100000000000000;
time_skill15cost = 300000000000000;

// 明日の自分へ　↑のやつ０を５個プラスから
js_skill1cost = 100000000;
js_skill2cost = 1000000000;
js_skill3cost = 10000000000;
js_skill4cost = 50000000000;
js_skill5cost = 100000000000;
js_skill6cost = 500000000000;
js_skill7cost = 1000000000000;
js_skill8cost = 5000000000000;
js_skill9cost = 10000000000000;
js_skill10cost = 50000000000000;
js_skill11cost = 100000000000000;
js_skill12cost = 500000000000000;
js_skill13cost = 800000000000000;
js_skill14cost = 1000000000000000;
js_skill15cost = 3000000000000000;


ract_skill1cost = 1000000000;
ract_skill2cost = 10000000000;
ract_skill3cost = 100000000000;
ract_skill4cost = 500000000000;
ract_skill5cost = 1000000000000;
ract_skill6cost = 5000000000000;
ract_skill7cost = 10000000000000;
ract_skill8cost = 50000000000000;
ract_skill9cost = 100000000000000;
ract_skill10cost = 500000000000000;
ract_skill11cost = 1000000000000000;
ract_skill12cost = 5000000000000000;
ract_skill13cost = 8000000000000000;
ract_skill14cost = 10000000000000000;
ract_skill15cost = 30000000000000000;

// ===========================================
// スキル獲得数
// ===========================================

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

sharp_skill1kakutoku = 0;
sharp_skill2kakutoku = 0;
sharp_skill3kakutoku = 0;
sharp_skill4kakutoku = 0;
sharp_skill5kakutoku = 0;
sharp_skill6kakutoku = 0;
sharp_skill7kakutoku = 0;
sharp_skill8kakutoku = 0;
sharp_skill9kakutoku = 0;
sharp_skill10kakutoku = 0;
sharp_skill11kakutoku = 0;
sharp_skill12kakutoku = 0;
sharp_skill13kakutoku = 0;
sharp_skill14kakutoku = 0;
sharp_skill15kakutoku = 0;

sitajiki_skill1kakutoku = 0;
sitajiki_skill2kakutoku = 0;
sitajiki_skill3kakutoku = 0;
sitajiki_skill4kakutoku = 0;
sitajiki_skill5kakutoku = 0;
sitajiki_skill6kakutoku = 0;
sitajiki_skill7kakutoku = 0;
sitajiki_skill8kakutoku = 0;
sitajiki_skill9kakutoku = 0;
sitajiki_skill10kakutoku = 0;
sitajiki_skill11kakutoku = 0;
sitajiki_skill12kakutoku = 0;
sitajiki_skill13kakutoku = 0;
sitajiki_skill14kakutoku = 0;
sitajiki_skill15kakutoku = 0;

house_skill1kakutoku = 0;
house_skill2kakutoku = 0;
house_skill3kakutoku = 0;
house_skill4kakutoku = 0;
house_skill5kakutoku = 0;
house_skill6kakutoku = 0;
house_skill7kakutoku = 0;
house_skill8kakutoku = 0;
house_skill9kakutoku = 0;
house_skill10kakutoku = 0;
house_skill11kakutoku = 0;
house_skill12kakutoku = 0;
house_skill13kakutoku = 0;
house_skill14kakutoku = 0;
house_skill15kakutoku = 0;

computer_skill1kakutoku = 0;
computer_skill2kakutoku = 0;
computer_skill3kakutoku = 0;
computer_skill4kakutoku = 0;
computer_skill5kakutoku = 0;
computer_skill6kakutoku = 0;
computer_skill7kakutoku = 0;
computer_skill8kakutoku = 0;
computer_skill9kakutoku = 0;
computer_skill10kakutoku = 0;
computer_skill11kakutoku = 0;
computer_skill12kakutoku = 0;
computer_skill13kakutoku = 0;
computer_skill14kakutoku = 0;
computer_skill15kakutoku = 0;

turiba_skill1kakutoku = 0;
turiba_skill2kakutoku = 0;
turiba_skill3kakutoku = 0;
turiba_skill4kakutoku = 0;
turiba_skill5kakutoku = 0;
turiba_skill6kakutoku = 0;
turiba_skill7kakutoku = 0;
turiba_skill8kakutoku = 0;
turiba_skill9kakutoku = 0;
turiba_skill10kakutoku = 0;
turiba_skill11kakutoku = 0;
turiba_skill12kakutoku = 0;
turiba_skill13kakutoku = 0;
turiba_skill14kakutoku = 0;
turiba_skill15kakutoku = 0;

bank_skill1kakutoku = 0;
bank_skill2kakutoku = 0;
bank_skill3kakutoku = 0;
bank_skill4kakutoku = 0;
bank_skill5kakutoku = 0;
bank_skill6kakutoku = 0;
bank_skill7kakutoku = 0;
bank_skill8kakutoku = 0;
bank_skill9kakutoku = 0;
bank_skill10kakutoku = 0;
bank_skill11kakutoku = 0;
bank_skill12kakutoku = 0;
bank_skill13kakutoku = 0;
bank_skill14kakutoku = 0;
bank_skill15kakutoku = 0;

snow_skill1kakutoku = 0;
snow_skill2kakutoku = 0;
snow_skill3kakutoku = 0;
snow_skill4kakutoku = 0;
snow_skill5kakutoku = 0;
snow_skill6kakutoku = 0;
snow_skill7kakutoku = 0;
snow_skill8kakutoku = 0;
snow_skill9kakutoku = 0;
snow_skill10kakutoku = 0;
snow_skill11kakutoku = 0;
snow_skill12kakutoku = 0;
snow_skill13kakutoku = 0;
snow_skill14kakutoku = 0;
snow_skill15kakutoku = 0;

kujira_skill1kakutoku = 0;
kujira_skill2kakutoku = 0;
kujira_skill3kakutoku = 0;
kujira_skill4kakutoku = 0;
kujira_skill5kakutoku = 0;
kujira_skill6kakutoku = 0;
kujira_skill7kakutoku = 0;
kujira_skill8kakutoku = 0;
kujira_skill9kakutoku = 0;
kujira_skill10kakutoku = 0;
kujira_skill11kakutoku = 0;
kujira_skill12kakutoku = 0;
kujira_skill13kakutoku = 0;
kujira_skill14kakutoku = 0;
kujira_skill15kakutoku = 0;

factory_skill1kakutoku = 0;
factory_skill2kakutoku = 0;
factory_skill3kakutoku = 0;
factory_skill4kakutoku = 0;
factory_skill5kakutoku = 0;
factory_skill6kakutoku = 0;
factory_skill7kakutoku = 0;
factory_skill8kakutoku = 0;
factory_skill9kakutoku = 0;
factory_skill10kakutoku = 0;
factory_skill11kakutoku = 0;
factory_skill12kakutoku = 0;
factory_skill13kakutoku = 0;
factory_skill14kakutoku = 0;
factory_skill15kakutoku = 0;

threed_skill1kakutoku = 0;
threed_skill2kakutoku = 0;
threed_skill3kakutoku = 0;
threed_skill4kakutoku = 0;
threed_skill5kakutoku = 0;
threed_skill6kakutoku = 0;
threed_skill7kakutoku = 0;
threed_skill8kakutoku = 0;
threed_skill9kakutoku = 0;
threed_skill10kakutoku = 0;
threed_skill11kakutoku = 0;
threed_skill12kakutoku = 0;
threed_skill13kakutoku = 0;
threed_skill14kakutoku = 0;
threed_skill15kakutoku = 0;

gpu_skill1kakutoku = 0;
gpu_skill2kakutoku = 0;
gpu_skill3kakutoku = 0;
gpu_skill4kakutoku = 0;
gpu_skill5kakutoku = 0;
gpu_skill6kakutoku = 0;
gpu_skill7kakutoku = 0;
gpu_skill8kakutoku = 0;
gpu_skill9kakutoku = 0;
gpu_skill10kakutoku = 0;
gpu_skill11kakutoku = 0;
gpu_skill12kakutoku = 0;
gpu_skill13kakutoku = 0;
gpu_skill14kakutoku = 0;
gpu_skill15kakutoku = 0;

atom_skill1kakutoku = 0;
atom_skill2kakutoku = 0;
atom_skill3kakutoku = 0;
atom_skill4kakutoku = 0;
atom_skill5kakutoku = 0;
atom_skill6kakutoku = 0;
atom_skill7kakutoku = 0;
atom_skill8kakutoku = 0;
atom_skill9kakutoku = 0;
atom_skill10kakutoku = 0;
atom_skill11kakutoku = 0;
atom_skill12kakutoku = 0;
atom_skill13kakutoku = 0;
atom_skill14kakutoku = 0;
atom_skill15kakutoku = 0;

time_skill1kakutoku = 0;
time_skill2kakutoku = 0;
time_skill3kakutoku = 0;
time_skill4kakutoku = 0;
time_skill5kakutoku = 0;
time_skill6kakutoku = 0;
time_skill7kakutoku = 0;
time_skill8kakutoku = 0;
time_skill9kakutoku = 0;
time_skill10kakutoku = 0;
time_skill11kakutoku = 0;
time_skill12kakutoku = 0;
time_skill13kakutoku = 0;
time_skill14kakutoku = 0;
time_skill15kakutoku = 0;

js_skill1kakutoku = 0;
js_skill2kakutoku = 0;
js_skill3kakutoku = 0;
js_skill4kakutoku = 0;
js_skill5kakutoku = 0;
js_skill6kakutoku = 0;
js_skill7kakutoku = 0;
js_skill8kakutoku = 0;
js_skill9kakutoku = 0;
js_skill10kakutoku = 0;
js_skill11kakutoku = 0;
js_skill12kakutoku = 0;
js_skill13kakutoku = 0;
js_skill14kakutoku = 0;
js_skill15kakutoku = 0;

ract_skill1kakutoku = 0;
ract_skill2kakutoku = 0;
ract_skill3kakutoku = 0;
ract_skill4kakutoku = 0;
ract_skill5kakutoku = 0;
ract_skill6kakutoku = 0;
ract_skill7kakutoku = 0;
ract_skill8kakutoku = 0;
ract_skill9kakutoku = 0;
ract_skill10kakutoku = 0;
ract_skill11kakutoku = 0;
ract_skill12kakutoku = 0;
ract_skill13kakutoku = 0;
ract_skill14kakutoku = 0;
ract_skill15kakutoku = 0;


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
            if (skill1kakutoku == 1) {
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
            if (skill2kakutoku == 1) {
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
            if (skill3kakutoku == 1) {
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
            if (skill4kakutoku == 1) {
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
            if (skill6kakutoku == 1) {
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
            if (skill7kakutoku == 1) {
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
            if (skill8kakutoku == 1) {
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
            if (skill9kakutoku == 1) {
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
            if (skill10kakutoku == 1) {
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
            if (skill11kakutoku == 1) {
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
            if (skill12kakutoku == 1) {
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
            if (skill13kakutoku == 1) {
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
            if (skill14kakutoku == 1) {
                herasuSirokuma(skill15cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000; // しろくまが１クリックで増える量調整
                skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('skill15kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}



function sharp_skill1Click() {
    if (sharp_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill1cost) {
                herasuSirokuma(sharp_skill1cost); //コスト分しろくま数からひく
                item1bairitu = 2; // 単価調整
                sharp_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + sharp_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function sharp_skill2Click() {
    if (sharp_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill2cost) {
            if (sharp_skill1kakutoku == 1) {
                herasuSirokuma(sharp_skill2cost); //コスト分しろくま数からひく
                item1bairitu = 4; // 単価調整
                sharp_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill3Click() {
    if (sharp_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill3cost) {
            if (sharp_skill2kakutoku == 1) {
                herasuSirokuma(sharp_skill3cost); //コスト分しろくま数からひく
                item1bairitu = 6; // 単価調整
                sharp_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill4Click() {
    if (sharp_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill4cost) {
            if (sharp_skill3kakutoku == 1) {
                herasuSirokuma(sharp_skill4cost); //コスト分しろくま数からひく
                item1bairitu = 8; // 単価調整
                sharp_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill5Click() {
    if (sharp_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill5cost) {
            if (sharp_skill4kakutoku == 1) {
                herasuSirokuma(sharp_skill5cost); //コスト分しろくま数からひく
                item1bairitu = 10; // 単価調整
                sharp_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill6Click() {
    if (sharp_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill6cost) {
            if (sharp_skill5kakutoku == 1) {
                herasuSirokuma(sharp_skill6cost); //コスト分しろくま数からひく
                item1bairitu = 12; // 単価調整
                sharp_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill7Click() {
    if (sharp_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill7cost) {
            if (sharp_skill6kakutoku == 1) {
                herasuSirokuma(sharp_skill7cost); //コスト分しろくま数からひく
                item1bairitu = 14; // 単価調整
                sharp_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill8Click() {
    if (sharp_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill8cost) {
            if (sharp_skill7kakutoku == 1) {
                herasuSirokuma(sharp_skill8cost); //コスト分しろくま数からひく
                item1bairitu = 16; // 単価調整
                sharp_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill9Click() {
    if (sharp_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill9cost) {
            if (sharp_skill8kakutoku == 1) {
                herasuSirokuma(sharp_skill9cost); //コスト分しろくま数からひく
                item1bairitu = 18; // 単価調整
                sharp_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill10Click() {
    if (sharp_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill10cost) {
            if (sharp_skill9kakutoku == 1) {
                herasuSirokuma(sharp_skill10cost); //コスト分しろくま数からひく
                item1bairitu = 20; // 単価調整
                sharp_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill11Click() {
    if (sharp_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill11cost) {
            if (sharp_skill10kakutoku == 1) {
                herasuSirokuma(sharp_skill11cost); //コスト分しろくま数からひく
                item1bairitu = 22; // 単価調整
                sharp_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill12Click() {
    if (sharp_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill12cost) {
            if (sharp_skill11kakutoku == 1) {
                herasuSirokuma(sharp_skill12cost); //コスト分しろくま数からひく
                item1bairitu = 24; // 単価調整
                sharp_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill13Click() {
    if (sharp_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill13cost) {
            if (sharp_skill12kakutoku == 1) {
                herasuSirokuma(sharp_skill13cost); //コスト分しろくま数からひく
                item1bairitu = 26; // 単価調整
                sharp_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill14Click() {
    if (sharp_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill14cost) {
            if (sharp_skill13kakutoku == 1) {
                herasuSirokuma(sharp_skill14cost); //コスト分しろくま数からひく
                item1bairitu = 28; // 単価調整
                sharp_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sharp_skill15Click() {
    if (sharp_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sharp_skill15cost) {
            if (sharp_skill14kakutoku == 1) {
                herasuSirokuma(sharp_skill15cost); //コスト分しろくま数からひく
                item1bairitu = 30; // 単価調整
                sharp_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('sharp_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sharp_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}



function sitajiki_skill1Click() {
    if (sitajiki_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill1cost) {
                herasuSirokuma(sitajiki_skill1cost); //コスト分しろくま数からひく
                item2bairitu = 2; // 単価調整
                sitajiki_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + sitajiki_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function sitajiki_skill2Click() {
    if (sitajiki_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill2cost) {
            if (sitajiki_skill1kakutoku == 1) {
                herasuSirokuma(sitajiki_skill2cost); //コスト分しろくま数からひく
                item2bairitu = 4; // 単価調整
                sitajiki_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill3Click() {
    if (sitajiki_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill3cost) {
            if (sitajiki_skill2kakutoku == 1) {
                herasuSirokuma(sitajiki_skill3cost); //コスト分しろくま数からひく
                item2bairitu = 6; // 単価調整
                sitajiki_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill4Click() {
    if (sitajiki_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill4cost) {
            if (sitajiki_skill3kakutoku == 1) {
                herasuSirokuma(sitajiki_skill4cost); //コスト分しろくま数からひく
                item2bairitu = 8; // 単価調整
                sitajiki_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill5Click() {
    if (sitajiki_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill5cost) {
            if (sitajiki_skill4kakutoku == 1) {
                herasuSirokuma(sitajiki_skill5cost); //コスト分しろくま数からひく
                item2bairitu = 10; // 単価調整
                sitajiki_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill6Click() {
    if (sitajiki_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill6cost) {
            if (sitajiki_skill5kakutoku == 1) {
                herasuSirokuma(sitajiki_skill6cost); //コスト分しろくま数からひく
                item2bairitu = 12; // 単価調整
                sitajiki_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill7Click() {
    if (sitajiki_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill7cost) {
            if (sitajiki_skill6kakutoku == 1) {
                herasuSirokuma(sitajiki_skill7cost); //コスト分しろくま数からひく
                item2bairitu = 14; // 単価調整
                sitajiki_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill8Click() {
    if (sitajiki_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill8cost) {
            if (sitajiki_skill7kakutoku == 1) {
                herasuSirokuma(sitajiki_skill8cost); //コスト分しろくま数からひく
                item2bairitu = 16; // 単価調整
                sitajiki_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill9Click() {
    if (sitajiki_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill9cost) {
            if (sitajiki_skill8kakutoku == 1) {
                herasuSirokuma(sitajiki_skill9cost); //コスト分しろくま数からひく
                item2bairitu = 18; // 単価調整
                sitajiki_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill10Click() {
    if (sitajiki_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill10cost) {
            if (sitajiki_skill9kakutoku == 1) {
                herasuSirokuma(sitajiki_skill10cost); //コスト分しろくま数からひく
                item2bairitu = 20; // 単価調整
                sitajiki_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill11Click() {
    if (sitajiki_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill11cost) {
            if (sitajiki_skill10kakutoku == 1) {
                herasuSirokuma(sitajiki_skill11cost); //コスト分しろくま数からひく
                item2bairitu = 22; // 単価調整
                sitajiki_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill12Click() {
    if (sitajiki_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill12cost) {
            if (sitajiki_skill11kakutoku == 1) {
                herasuSirokuma(sitajiki_skill12cost); //コスト分しろくま数からひく
                item2bairitu = 24; // 単価調整
                sitajiki_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill13Click() {
    if (sitajiki_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill13cost) {
            if (sitajiki_skill12kakutoku == 1) {
                herasuSirokuma(sitajiki_skill13cost); //コスト分しろくま数からひく
                item2bairitu = 26; // 単価調整
                sitajiki_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill14Click() {
    if (sitajiki_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill14cost) {
            if (sitajiki_skill13kakutoku == 1) {
                herasuSirokuma(sitajiki_skill14cost); //コスト分しろくま数からひく
                item2bairitu = 28; // 単価調整
                sitajiki_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function sitajiki_skill15Click() {
    if (sitajiki_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= sitajiki_skill15cost) {
            if (sitajiki_skill14kakutoku == 1) {
                herasuSirokuma(sitajiki_skill15cost); //コスト分しろくま数からひく
                item2bairitu = 30; // 単価調整
                sitajiki_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('sitajiki_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + sitajiki_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function house_skill1Click() {
    if (house_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill1cost) {
                herasuSirokuma(house_skill1cost); //コスト分しろくま数からひく
                item3bairitu = 2; // 単価調整
                house_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + house_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function house_skill2Click() {
    if (house_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill2cost) {
            if (house_skill1kakutoku == 1) {
                herasuSirokuma(house_skill2cost); //コスト分しろくま数からひく
                item3bairitu = 4; // 単価調整
                house_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill3Click() {
    if (house_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill3cost) {
            if (house_skill2kakutoku == 1) {
                herasuSirokuma(house_skill3cost); //コスト分しろくま数からひく
                item3bairitu = 6; // 単価調整
                house_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill4Click() {
    if (house_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill4cost) {
            if (house_skill3kakutoku == 1) {
                herasuSirokuma(house_skill4cost); //コスト分しろくま数からひく
                item3bairitu = 8; // 単価調整
                house_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill5Click() {
    if (house_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill5cost) {
            if (house_skill4kakutoku == 1) {
                herasuSirokuma(house_skill5cost); //コスト分しろくま数からひく
                item3bairitu = 10; // 単価調整
                house_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill6Click() {
    if (house_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill6cost) {
            if (house_skill5kakutoku == 1) {
                herasuSirokuma(house_skill6cost); //コスト分しろくま数からひく
                item3bairitu = 12; // 単価調整
                house_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill7Click() {
    if (house_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill7cost) {
            if (house_skill6kakutoku == 1) {
                herasuSirokuma(house_skill7cost); //コスト分しろくま数からひく
                item3bairitu = 14; // 単価調整
                house_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill8Click() {
    if (house_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill8cost) {
            if (house_skill7kakutoku == 1) {
                herasuSirokuma(house_skill8cost); //コスト分しろくま数からひく
                item3bairitu = 16; // 単価調整
                house_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill9Click() {
    if (house_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill9cost) {
            if (house_skill8kakutoku == 1) {
                herasuSirokuma(house_skill9cost); //コスト分しろくま数からひく
                item3bairitu = 18; // 単価調整
                house_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill10Click() {
    if (house_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill10cost) {
            if (house_skill9kakutoku == 1) {
                herasuSirokuma(house_skill10cost); //コスト分しろくま数からひく
                item3bairitu = 20; // 単価調整
                house_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill11Click() {
    if (house_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill11cost) {
            if (house_skill10kakutoku == 1) {
                herasuSirokuma(house_skill11cost); //コスト分しろくま数からひく
                item3bairitu = 22; // 単価調整
                house_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill12Click() {
    if (house_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill12cost) {
            if (house_skill11kakutoku == 1) {
                herasuSirokuma(house_skill12cost); //コスト分しろくま数からひく
                item3bairitu = 24; // 単価調整
                house_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill13Click() {
    if (house_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill13cost) {
            if (house_skill12kakutoku == 1) {
                herasuSirokuma(house_skill13cost); //コスト分しろくま数からひく
                item3bairitu = 26; // 単価調整
                house_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill14Click() {
    if (house_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill14cost) {
            if (house_skill13kakutoku == 1) {
                herasuSirokuma(house_skill14cost); //コスト分しろくま数からひく
                item3bairitu = 28; // 単価調整
                house_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function house_skill15Click() {
    if (house_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= house_skill15cost) {
            if (house_skill14kakutoku == 1) {
                herasuSirokuma(house_skill15cost); //コスト分しろくま数からひく
                item3bairitu = 30; // 単価調整
                house_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('house_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + house_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}




function computer_skill1Click() {
    if (computer_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill1cost) {
                herasuSirokuma(computer_skill1cost); //コスト分しろくま数からひく
                item4bairitu = 2; // 単価調整
                computer_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + computer_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function computer_skill2Click() {
    if (computer_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill2cost) {
            if (computer_skill1kakutoku == 1) {
                herasuSirokuma(computer_skill2cost); //コスト分しろくま数からひく
                item4bairitu = 4; // 単価調整
                computer_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill3Click() {
    if (computer_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill3cost) {
            if (computer_skill2kakutoku == 1) {
                herasuSirokuma(computer_skill3cost); //コスト分しろくま数からひく
                item4bairitu = 6; // 単価調整
                computer_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill4Click() {
    if (computer_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill4cost) {
            if (computer_skill3kakutoku == 1) {
                herasuSirokuma(computer_skill4cost); //コスト分しろくま数からひく
                item4bairitu = 8; // 単価調整
                computer_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill5Click() {
    if (computer_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill5cost) {
            if (computer_skill4kakutoku == 1) {
                herasuSirokuma(computer_skill5cost); //コスト分しろくま数からひく
                item4bairitu = 10; // 単価調整
                computer_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill6Click() {
    if (computer_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill6cost) {
            if (computer_skill5kakutoku == 1) {
                herasuSirokuma(computer_skill6cost); //コスト分しろくま数からひく
                item4bairitu = 12; // 単価調整
                computer_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill7Click() {
    if (computer_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill7cost) {
            if (computer_skill6kakutoku == 1) {
                herasuSirokuma(computer_skill7cost); //コスト分しろくま数からひく
                item4bairitu = 14; // 単価調整
                computer_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill8Click() {
    if (computer_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill8cost) {
            if (computer_skill7kakutoku == 1) {
                herasuSirokuma(computer_skill8cost); //コスト分しろくま数からひく
                item4bairitu = 16; // 単価調整
                computer_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill9Click() {
    if (computer_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill9cost) {
            if (computer_skill8kakutoku == 1) {
                herasuSirokuma(computer_skill9cost); //コスト分しろくま数からひく
                item4bairitu = 18; // 単価調整
                computer_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill10Click() {
    if (computer_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill10cost) {
            if (computer_skill9kakutoku == 1) {
                herasuSirokuma(computer_skill10cost); //コスト分しろくま数からひく
                item4bairitu = 20; // 単価調整
                computer_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill11Click() {
    if (computer_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill11cost) {
            if (computer_skill10kakutoku == 1) {
                herasuSirokuma(computer_skill11cost); //コスト分しろくま数からひく
                item4bairitu = 22; // 単価調整
                computer_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill12Click() {
    if (computer_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill12cost) {
            if (computer_skill11kakutoku == 1) {
                herasuSirokuma(computer_skill12cost); //コスト分しろくま数からひく
                item4bairitu = 24; // 単価調整
                computer_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill13Click() {
    if (computer_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill13cost) {
            if (computer_skill12kakutoku == 1) {
                herasuSirokuma(computer_skill13cost); //コスト分しろくま数からひく
                item4bairitu = 26; // 単価調整
                computer_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill14Click() {
    if (computer_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill14cost) {
            if (computer_skill13kakutoku == 1) {
                herasuSirokuma(computer_skill14cost); //コスト分しろくま数からひく
                item4bairitu = 28; // 単価調整
                computer_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function computer_skill15Click() {
    if (computer_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= computer_skill15cost) {
            if (computer_skill14kakutoku == 1) {
                herasuSirokuma(computer_skill15cost); //コスト分しろくま数からひく
                item4bairitu = 30; // 単価調整
                computer_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('computer_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + computer_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function turiba_skill1Click() {
    if (turiba_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill1cost) {
                herasuSirokuma(turiba_skill1cost); //コスト分しろくま数からひく
                item5bairitu = 2; // 単価調整
                turiba_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + turiba_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function turiba_skill2Click() {
    if (turiba_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill2cost) {
            if (turiba_skill1kakutoku == 1) {
                herasuSirokuma(turiba_skill2cost); //コスト分しろくま数からひく
                item5bairitu = 4; // 単価調整
                turiba_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill3Click() {
    if (turiba_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill3cost) {
            if (turiba_skill2kakutoku == 1) {
                herasuSirokuma(turiba_skill3cost); //コスト分しろくま数からひく
                item5bairitu = 6; // 単価調整
                turiba_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill4Click() {
    if (turiba_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill4cost) {
            if (turiba_skill3kakutoku == 1) {
                herasuSirokuma(turiba_skill4cost); //コスト分しろくま数からひく
                item5bairitu = 8; // 単価調整
                turiba_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill5Click() {
    if (turiba_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill5cost) {
            if (turiba_skill4kakutoku == 1) {
                herasuSirokuma(turiba_skill5cost); //コスト分しろくま数からひく
                item5bairitu = 10; // 単価調整
                turiba_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill6Click() {
    if (turiba_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill6cost) {
            if (turiba_skill5kakutoku == 1) {
                herasuSirokuma(turiba_skill6cost); //コスト分しろくま数からひく
                item5bairitu = 12; // 単価調整
                turiba_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill7Click() {
    if (turiba_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill7cost) {
            if (turiba_skill6kakutoku == 1) {
                herasuSirokuma(turiba_skill7cost); //コスト分しろくま数からひく
                item5bairitu = 14; // 単価調整
                turiba_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill8Click() {
    if (turiba_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill8cost) {
            if (turiba_skill7kakutoku == 1) {
                herasuSirokuma(turiba_skill8cost); //コスト分しろくま数からひく
                item5bairitu = 16; // 単価調整
                turiba_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill9Click() {
    if (turiba_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill9cost) {
            if (turiba_skill8kakutoku == 1) {
                herasuSirokuma(turiba_skill9cost); //コスト分しろくま数からひく
                item5bairitu = 18; // 単価調整
                turiba_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill10Click() {
    if (turiba_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill10cost) {
            if (turiba_skill9kakutoku == 1) {
                herasuSirokuma(turiba_skill10cost); //コスト分しろくま数からひく
                item5bairitu = 20; // 単価調整
                turiba_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill11Click() {
    if (turiba_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill11cost) {
            if (turiba_skill10kakutoku == 1) {
                herasuSirokuma(turiba_skill11cost); //コスト分しろくま数からひく
                item5bairitu = 22; // 単価調整
                turiba_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill12Click() {
    if (turiba_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill12cost) {
            if (turiba_skill11kakutoku == 1) {
                herasuSirokuma(turiba_skill12cost); //コスト分しろくま数からひく
                item5bairitu = 24; // 単価調整
                turiba_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill13Click() {
    if (turiba_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill13cost) {
            if (turiba_skill12kakutoku == 1) {
                herasuSirokuma(turiba_skill13cost); //コスト分しろくま数からひく
                item5bairitu = 26; // 単価調整
                turiba_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill14Click() {
    if (turiba_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill14cost) {
            if (turiba_skill13kakutoku == 1) {
                herasuSirokuma(turiba_skill14cost); //コスト分しろくま数からひく
                item5bairitu = 28; // 単価調整
                turiba_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function turiba_skill15Click() {
    if (turiba_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= turiba_skill15cost) {
            if (turiba_skill14kakutoku == 1) {
                herasuSirokuma(turiba_skill15cost); //コスト分しろくま数からひく
                item5bairitu = 30; // 単価調整
                turiba_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('turiba_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + turiba_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}




function bank_skill1Click() {
    if (bank_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill1cost) {
                herasuSirokuma(bank_skill1cost); //コスト分しろくま数からひく
                item6bairitu = 2; // 単価調整
                bank_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + bank_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function bank_skill2Click() {
    if (bank_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill2cost) {
            if (bank_skill1kakutoku == 1) {
                herasuSirokuma(bank_skill2cost); //コスト分しろくま数からひく
                item6bairitu = 4; // 単価調整
                bank_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill3Click() {
    if (bank_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill3cost) {
            if (bank_skill2kakutoku == 1) {
                herasuSirokuma(bank_skill3cost); //コスト分しろくま数からひく
                item6bairitu = 6; // 単価調整
                bank_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill4Click() {
    if (bank_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill4cost) {
            if (bank_skill3kakutoku == 1) {
                herasuSirokuma(bank_skill4cost); //コスト分しろくま数からひく
                item6bairitu = 8; // 単価調整
                bank_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill5Click() {
    if (bank_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill5cost) {
            if (bank_skill4kakutoku == 1) {
                herasuSirokuma(bank_skill5cost); //コスト分しろくま数からひく
                item6bairitu = 10; // 単価調整
                bank_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill6Click() {
    if (bank_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill6cost) {
            if (bank_skill5kakutoku == 1) {
                herasuSirokuma(bank_skill6cost); //コスト分しろくま数からひく
                item6bairitu = 12; // 単価調整
                bank_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill7Click() {
    if (bank_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill7cost) {
            if (bank_skill6kakutoku == 1) {
                herasuSirokuma(bank_skill7cost); //コスト分しろくま数からひく
                item6bairitu = 14; // 単価調整
                bank_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill8Click() {
    if (bank_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill8cost) {
            if (bank_skill7kakutoku == 1) {
                herasuSirokuma(bank_skill8cost); //コスト分しろくま数からひく
                item6bairitu = 16; // 単価調整
                bank_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill9Click() {
    if (bank_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill9cost) {
            if (bank_skill8kakutoku == 1) {
                herasuSirokuma(bank_skill9cost); //コスト分しろくま数からひく
                item6bairitu = 18; // 単価調整
                bank_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill10Click() {
    if (bank_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill10cost) {
            if (bank_skill9kakutoku == 1) {
                herasuSirokuma(bank_skill10cost); //コスト分しろくま数からひく
                item6bairitu = 20; // 単価調整
                bank_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill11Click() {
    if (bank_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill11cost) {
            if (bank_skill10kakutoku == 1) {
                herasuSirokuma(bank_skill11cost); //コスト分しろくま数からひく
                item6bairitu = 22; // 単価調整
                bank_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill12Click() {
    if (bank_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill12cost) {
            if (bank_skill11kakutoku == 1) {
                herasuSirokuma(bank_skill12cost); //コスト分しろくま数からひく
                item6bairitu = 24; // 単価調整
                bank_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill13Click() {
    if (bank_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill13cost) {
            if (bank_skill12kakutoku == 1) {
                herasuSirokuma(bank_skill13cost); //コスト分しろくま数からひく
                item6bairitu = 26; // 単価調整
                bank_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill14Click() {
    if (bank_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill14cost) {
            if (bank_skill13kakutoku == 1) {
                herasuSirokuma(bank_skill14cost); //コスト分しろくま数からひく
                item6bairitu = 28; // 単価調整
                bank_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function bank_skill15Click() {
    if (bank_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= bank_skill15cost) {
            if (bank_skill14kakutoku == 1) {
                herasuSirokuma(bank_skill15cost); //コスト分しろくま数からひく
                item6bairitu = 30; // 単価調整
                bank_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('bank_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + bank_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function snow_skill1Click() {
    if (snow_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill1cost) {
                herasuSirokuma(snow_skill1cost); //コスト分しろくま数からひく
                item7bairitu = 2; // 単価調整
                snow_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + snow_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function snow_skill2Click() {
    if (snow_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill2cost) {
            if (snow_skill1kakutoku == 1) {
                herasuSirokuma(snow_skill2cost); //コスト分しろくま数からひく
                item7bairitu = 4; // 単価調整
                snow_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill3Click() {
    if (snow_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill3cost) {
            if (snow_skill2kakutoku == 1) {
                herasuSirokuma(snow_skill3cost); //コスト分しろくま数からひく
                item7bairitu = 6; // 単価調整
                snow_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill4Click() {
    if (snow_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill4cost) {
            if (snow_skill3kakutoku == 1) {
                herasuSirokuma(snow_skill4cost); //コスト分しろくま数からひく
                item7bairitu = 8; // 単価調整
                snow_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill5Click() {
    if (snow_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill5cost) {
            if (snow_skill4kakutoku == 1) {
                herasuSirokuma(snow_skill5cost); //コスト分しろくま数からひく
                item7bairitu = 10; // 単価調整
                snow_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill6Click() {
    if (snow_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill6cost) {
            if (snow_skill5kakutoku == 1) {
                herasuSirokuma(snow_skill6cost); //コスト分しろくま数からひく
                item7bairitu = 12; // 単価調整
                snow_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill7Click() {
    if (snow_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill7cost) {
            if (snow_skill6kakutoku == 1) {
                herasuSirokuma(snow_skill7cost); //コスト分しろくま数からひく
                item7bairitu = 14; // 単価調整
                snow_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill8Click() {
    if (snow_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill8cost) {
            if (snow_skill7kakutoku == 1) {
                herasuSirokuma(snow_skill8cost); //コスト分しろくま数からひく
                item7bairitu = 16; // 単価調整
                snow_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill9Click() {
    if (snow_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill9cost) {
            if (snow_skill8kakutoku == 1) {
                herasuSirokuma(snow_skill9cost); //コスト分しろくま数からひく
                item7bairitu = 18; // 単価調整
                snow_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill10Click() {
    if (snow_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill10cost) {
            if (snow_skill9kakutoku == 1) {
                herasuSirokuma(snow_skill10cost); //コスト分しろくま数からひく
                item7bairitu = 20; // 単価調整
                snow_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill11Click() {
    if (snow_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill11cost) {
            if (snow_skill10kakutoku == 1) {
                herasuSirokuma(snow_skill11cost); //コスト分しろくま数からひく
                item7bairitu = 22; // 単価調整
                snow_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill12Click() {
    if (snow_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill12cost) {
            if (snow_skill11kakutoku == 1) {
                herasuSirokuma(snow_skill12cost); //コスト分しろくま数からひく
                item7bairitu = 24; // 単価調整
                snow_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill13Click() {
    if (snow_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill13cost) {
            if (snow_skill12kakutoku == 1) {
                herasuSirokuma(snow_skill13cost); //コスト分しろくま数からひく
                item7bairitu = 26; // 単価調整
                snow_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill14Click() {
    if (snow_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill14cost) {
            if (snow_skill13kakutoku == 1) {
                herasuSirokuma(snow_skill14cost); //コスト分しろくま数からひく
                item7bairitu = 28; // 単価調整
                snow_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function snow_skill15Click() {
    if (snow_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= snow_skill15cost) {
            if (snow_skill14kakutoku == 1) {
                herasuSirokuma(snow_skill15cost); //コスト分しろくま数からひく
                item7bairitu = 30; // 単価調整
                snow_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('snow_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + snow_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function kujira_skill1Click() {
    if (kujira_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill1cost) {
                herasuSirokuma(kujira_skill1cost); //コスト分しろくま数からひく
                item8bairitu = 2; // 単価調整
                kujira_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + kujira_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function kujira_skill2Click() {
    if (kujira_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill2cost) {
            if (kujira_skill1kakutoku == 1) {
                herasuSirokuma(kujira_skill2cost); //コスト分しろくま数からひく
                item8bairitu = 4; // 単価調整
                kujira_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill3Click() {
    if (kujira_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill3cost) {
            if (kujira_skill2kakutoku == 1) {
                herasuSirokuma(kujira_skill3cost); //コスト分しろくま数からひく
                item8bairitu = 6; // 単価調整
                kujira_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill4Click() {
    if (kujira_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill4cost) {
            if (kujira_skill3kakutoku == 1) {
                herasuSirokuma(kujira_skill4cost); //コスト分しろくま数からひく
                item8bairitu = 8; // 単価調整
                kujira_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill5Click() {
    if (kujira_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill5cost) {
            if (kujira_skill4kakutoku == 1) {
                herasuSirokuma(kujira_skill5cost); //コスト分しろくま数からひく
                item8bairitu = 10; // 単価調整
                kujira_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill6Click() {
    if (kujira_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill6cost) {
            if (kujira_skill5kakutoku == 1) {
                herasuSirokuma(kujira_skill6cost); //コスト分しろくま数からひく
                item8bairitu = 12; // 単価調整
                kujira_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill7Click() {
    if (kujira_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill7cost) {
            if (kujira_skill6kakutoku == 1) {
                herasuSirokuma(kujira_skill7cost); //コスト分しろくま数からひく
                item8bairitu = 14; // 単価調整
                kujira_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill8Click() {
    if (kujira_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill8cost) {
            if (kujira_skill7kakutoku == 1) {
                herasuSirokuma(kujira_skill8cost); //コスト分しろくま数からひく
                item8bairitu = 16; // 単価調整
                kujira_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill9Click() {
    if (kujira_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill9cost) {
            if (kujira_skill8kakutoku == 1) {
                herasuSirokuma(kujira_skill9cost); //コスト分しろくま数からひく
                item8bairitu = 18; // 単価調整
                kujira_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill10Click() {
    if (kujira_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill10cost) {
            if (kujira_skill9kakutoku == 1) {
                herasuSirokuma(kujira_skill10cost); //コスト分しろくま数からひく
                item8bairitu = 20; // 単価調整
                kujira_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill11Click() {
    if (kujira_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill11cost) {
            if (kujira_skill10kakutoku == 1) {
                herasuSirokuma(kujira_skill11cost); //コスト分しろくま数からひく
                item8bairitu = 22; // 単価調整
                kujira_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill12Click() {
    if (kujira_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill12cost) {
            if (kujira_skill11kakutoku == 1) {
                herasuSirokuma(kujira_skill12cost); //コスト分しろくま数からひく
                item8bairitu = 24; // 単価調整
                kujira_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill13Click() {
    if (kujira_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill13cost) {
            if (kujira_skill12kakutoku == 1) {
                herasuSirokuma(kujira_skill13cost); //コスト分しろくま数からひく
                item8bairitu = 26; // 単価調整
                kujira_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill14Click() {
    if (kujira_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill14cost) {
            if (kujira_skill13kakutoku == 1) {
                herasuSirokuma(kujira_skill14cost); //コスト分しろくま数からひく
                item8bairitu = 28; // 単価調整
                kujira_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function kujira_skill15Click() {
    if (kujira_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= kujira_skill15cost) {
            if (kujira_skill14kakutoku == 1) {
                herasuSirokuma(kujira_skill15cost); //コスト分しろくま数からひく
                item8bairitu = 30; // 単価調整
                kujira_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('kujira_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + kujira_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function factory_skill1Click() {
    if (factory_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill1cost) {
                herasuSirokuma(factory_skill1cost); //コスト分しろくま数からひく
                item9bairitu = 2; // 単価調整
                factory_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + factory_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function factory_skill2Click() {
    if (factory_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill2cost) {
            if (factory_skill1kakutoku == 1) {
                herasuSirokuma(factory_skill2cost); //コスト分しろくま数からひく
                item9bairitu = 4; // 単価調整
                factory_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill3Click() {
    if (factory_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill3cost) {
            if (factory_skill2kakutoku == 1) {
                herasuSirokuma(factory_skill3cost); //コスト分しろくま数からひく
                item9bairitu = 6; // 単価調整
                factory_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill4Click() {
    if (factory_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill4cost) {
            if (factory_skill3kakutoku == 1) {
                herasuSirokuma(factory_skill4cost); //コスト分しろくま数からひく
                item9bairitu = 8; // 単価調整
                factory_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill5Click() {
    if (factory_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill5cost) {
            if (factory_skill4kakutoku == 1) {
                herasuSirokuma(factory_skill5cost); //コスト分しろくま数からひく
                item9bairitu = 10; // 単価調整
                factory_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill6Click() {
    if (factory_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill6cost) {
            if (factory_skill5kakutoku == 1) {
                herasuSirokuma(factory_skill6cost); //コスト分しろくま数からひく
                item9bairitu = 12; // 単価調整
                factory_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill7Click() {
    if (factory_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill7cost) {
            if (factory_skill6kakutoku == 1) {
                herasuSirokuma(factory_skill7cost); //コスト分しろくま数からひく
                item9bairitu = 14; // 単価調整
                factory_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill8Click() {
    if (factory_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill8cost) {
            if (factory_skill7kakutoku == 1) {
                herasuSirokuma(factory_skill8cost); //コスト分しろくま数からひく
                item9bairitu = 16; // 単価調整
                factory_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill9Click() {
    if (factory_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill9cost) {
            if (factory_skill8kakutoku == 1) {
                herasuSirokuma(factory_skill9cost); //コスト分しろくま数からひく
                item9bairitu = 18; // 単価調整
                factory_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill10Click() {
    if (factory_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill10cost) {
            if (factory_skill9kakutoku == 1) {
                herasuSirokuma(factory_skill10cost); //コスト分しろくま数からひく
                item9bairitu = 20; // 単価調整
                factory_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill11Click() {
    if (factory_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill11cost) {
            if (factory_skill10kakutoku == 1) {
                herasuSirokuma(factory_skill11cost); //コスト分しろくま数からひく
                item9bairitu = 22; // 単価調整
                factory_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill12Click() {
    if (factory_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill12cost) {
            if (factory_skill11kakutoku == 1) {
                herasuSirokuma(factory_skill12cost); //コスト分しろくま数からひく
                item9bairitu = 24; // 単価調整
                factory_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill13Click() {
    if (factory_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill13cost) {
            if (factory_skill12kakutoku == 1) {
                herasuSirokuma(factory_skill13cost); //コスト分しろくま数からひく
                item9bairitu = 26; // 単価調整
                factory_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill14Click() {
    if (factory_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill14cost) {
            if (factory_skill13kakutoku == 1) {
                herasuSirokuma(factory_skill14cost); //コスト分しろくま数からひく
                item9bairitu = 28; // 単価調整
                factory_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function factory_skill15Click() {
    if (factory_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= factory_skill15cost) {
            if (factory_skill14kakutoku == 1) {
                herasuSirokuma(factory_skill15cost); //コスト分しろくま数からひく
                item9bairitu = 30; // 単価調整
                factory_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('factory_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + factory_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function threed_skill1Click() {
    if (threed_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill1cost) {
                herasuSirokuma(threed_skill1cost); //コスト分しろくま数からひく
                item10bairitu = 2; // 単価調整
                threed_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + threed_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function threed_skill2Click() {
    if (threed_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill2cost) {
            if (threed_skill1kakutoku == 1) {
                herasuSirokuma(threed_skill2cost); //コスト分しろくま数からひく
                item10bairitu = 4; // 単価調整
                threed_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill3Click() {
    if (threed_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill3cost) {
            if (threed_skill2kakutoku == 1) {
                herasuSirokuma(threed_skill3cost); //コスト分しろくま数からひく
                item10bairitu = 6; // 単価調整
                threed_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill4Click() {
    if (threed_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill4cost) {
            if (threed_skill3kakutoku == 1) {
                herasuSirokuma(threed_skill4cost); //コスト分しろくま数からひく
                item10bairitu = 8; // 単価調整
                threed_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill5Click() {
    if (threed_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill5cost) {
            if (threed_skill4kakutoku == 1) {
                herasuSirokuma(threed_skill5cost); //コスト分しろくま数からひく
                item10bairitu = 10; // 単価調整
                threed_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill6Click() {
    if (threed_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill6cost) {
            if (threed_skill5kakutoku == 1) {
                herasuSirokuma(threed_skill6cost); //コスト分しろくま数からひく
                item10bairitu = 12; // 単価調整
                threed_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill7Click() {
    if (threed_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill7cost) {
            if (threed_skill6kakutoku == 1) {
                herasuSirokuma(threed_skill7cost); //コスト分しろくま数からひく
                item10bairitu = 14; // 単価調整
                threed_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill8Click() {
    if (threed_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill8cost) {
            if (threed_skill7kakutoku == 1) {
                herasuSirokuma(threed_skill8cost); //コスト分しろくま数からひく
                item10bairitu = 16; // 単価調整
                threed_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill9Click() {
    if (threed_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill9cost) {
            if (threed_skill8kakutoku == 1) {
                herasuSirokuma(threed_skill9cost); //コスト分しろくま数からひく
                item10bairitu = 18; // 単価調整
                threed_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill10Click() {
    if (threed_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill10cost) {
            if (threed_skill9kakutoku == 1) {
                herasuSirokuma(threed_skill10cost); //コスト分しろくま数からひく
                item10bairitu = 20; // 単価調整
                threed_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill11Click() {
    if (threed_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill11cost) {
            if (threed_skill10kakutoku == 1) {
                herasuSirokuma(threed_skill11cost); //コスト分しろくま数からひく
                item10bairitu = 22; // 単価調整
                threed_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill12Click() {
    if (threed_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill12cost) {
            if (threed_skill11kakutoku == 1) {
                herasuSirokuma(threed_skill12cost); //コスト分しろくま数からひく
                item10bairitu = 24; // 単価調整
                threed_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill13Click() {
    if (threed_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill13cost) {
            if (threed_skill12kakutoku == 1) {
                herasuSirokuma(threed_skill13cost); //コスト分しろくま数からひく
                item10bairitu = 26; // 単価調整
                threed_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill14Click() {
    if (threed_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill14cost) {
            if (threed_skill13kakutoku == 1) {
                herasuSirokuma(threed_skill14cost); //コスト分しろくま数からひく
                item10bairitu = 28; // 単価調整
                threed_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function threed_skill15Click() {
    if (threed_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= threed_skill15cost) {
            if (threed_skill14kakutoku == 1) {
                herasuSirokuma(threed_skill15cost); //コスト分しろくま数からひく
                item10bairitu = 30; // 単価調整
                threed_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('threed_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + threed_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function gpu_skill1Click() {
    if (gpu_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill1cost) {
                herasuSirokuma(gpu_skill1cost); //コスト分しろくま数からひく
                item11bairitu = 2; // 単価調整
                gpu_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + gpu_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function gpu_skill2Click() {
    if (gpu_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill2cost) {
            if (gpu_skill1kakutoku == 1) {
                herasuSirokuma(gpu_skill2cost); //コスト分しろくま数からひく
                item11bairitu = 4; // 単価調整
                gpu_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill3Click() {
    if (gpu_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill3cost) {
            if (gpu_skill2kakutoku == 1) {
                herasuSirokuma(gpu_skill3cost); //コスト分しろくま数からひく
                item11bairitu = 6; // 単価調整
                gpu_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill4Click() {
    if (gpu_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill4cost) {
            if (gpu_skill3kakutoku == 1) {
                herasuSirokuma(gpu_skill4cost); //コスト分しろくま数からひく
                item11bairitu = 8; // 単価調整
                gpu_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill5Click() {
    if (gpu_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill5cost) {
            if (gpu_skill4kakutoku == 1) {
                herasuSirokuma(gpu_skill5cost); //コスト分しろくま数からひく
                item11bairitu = 10; // 単価調整
                gpu_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill6Click() {
    if (gpu_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill6cost) {
            if (gpu_skill5kakutoku == 1) {
                herasuSirokuma(gpu_skill6cost); //コスト分しろくま数からひく
                item11bairitu = 12; // 単価調整
                gpu_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill7Click() {
    if (gpu_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill7cost) {
            if (gpu_skill6kakutoku == 1) {
                herasuSirokuma(gpu_skill7cost); //コスト分しろくま数からひく
                item11bairitu = 14; // 単価調整
                gpu_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill8Click() {
    if (gpu_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill8cost) {
            if (gpu_skill7kakutoku == 1) {
                herasuSirokuma(gpu_skill8cost); //コスト分しろくま数からひく
                item11bairitu = 16; // 単価調整
                gpu_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill9Click() {
    if (gpu_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill9cost) {
            if (gpu_skill8kakutoku == 1) {
                herasuSirokuma(gpu_skill9cost); //コスト分しろくま数からひく
                item11bairitu = 18; // 単価調整
                gpu_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill10Click() {
    if (gpu_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill10cost) {
            if (gpu_skill9kakutoku == 1) {
                herasuSirokuma(gpu_skill10cost); //コスト分しろくま数からひく
                item11bairitu = 20; // 単価調整
                gpu_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill11Click() {
    if (gpu_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill11cost) {
            if (gpu_skill10kakutoku == 1) {
                herasuSirokuma(gpu_skill11cost); //コスト分しろくま数からひく
                item11bairitu = 22; // 単価調整
                gpu_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill12Click() {
    if (gpu_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill12cost) {
            if (gpu_skill11kakutoku == 1) {
                herasuSirokuma(gpu_skill12cost); //コスト分しろくま数からひく
                item11bairitu = 24; // 単価調整
                gpu_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill13Click() {
    if (gpu_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill13cost) {
            if (gpu_skill12kakutoku == 1) {
                herasuSirokuma(gpu_skill13cost); //コスト分しろくま数からひく
                item11bairitu = 26; // 単価調整
                gpu_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill14Click() {
    if (gpu_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill14cost) {
            if (gpu_skill13kakutoku == 1) {
                herasuSirokuma(gpu_skill14cost); //コスト分しろくま数からひく
                item11bairitu = 28; // 単価調整
                gpu_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function gpu_skill15Click() {
    if (gpu_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= gpu_skill15cost) {
            if (gpu_skill14kakutoku == 1) {
                herasuSirokuma(gpu_skill15cost); //コスト分しろくま数からひく
                item11bairitu = 30; // 単価調整
                gpu_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('gpu_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + gpu_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function atom_skill1Click() {
    if (atom_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill1cost) {
                herasuSirokuma(atom_skill1cost); //コスト分しろくま数からひく
                item12bairitu = 2; // 単価調整
                atom_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + atom_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function atom_skill2Click() {
    if (atom_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill2cost) {
            if (atom_skill1kakutoku == 1) {
                herasuSirokuma(atom_skill2cost); //コスト分しろくま数からひく
                item12bairitu = 4; // 単価調整
                atom_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill3Click() {
    if (atom_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill3cost) {
            if (atom_skill2kakutoku == 1) {
                herasuSirokuma(atom_skill3cost); //コスト分しろくま数からひく
                item12bairitu = 6; // 単価調整
                atom_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill4Click() {
    if (atom_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill4cost) {
            if (atom_skill3kakutoku == 1) {
                herasuSirokuma(atom_skill4cost); //コスト分しろくま数からひく
                item12bairitu = 8; // 単価調整
                atom_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill5Click() {
    if (atom_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill5cost) {
            if (atom_skill4kakutoku == 1) {
                herasuSirokuma(atom_skill5cost); //コスト分しろくま数からひく
                item12bairitu = 10; // 単価調整
                atom_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill6Click() {
    if (atom_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill6cost) {
            if (atom_skill5kakutoku == 1) {
                herasuSirokuma(atom_skill6cost); //コスト分しろくま数からひく
                item12bairitu = 12; // 単価調整
                atom_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill7Click() {
    if (atom_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill7cost) {
            if (atom_skill6kakutoku == 1) {
                herasuSirokuma(atom_skill7cost); //コスト分しろくま数からひく
                item12bairitu = 14; // 単価調整
                atom_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill8Click() {
    if (atom_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill8cost) {
            if (atom_skill7kakutoku == 1) {
                herasuSirokuma(atom_skill8cost); //コスト分しろくま数からひく
                item12bairitu = 16; // 単価調整
                atom_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill9Click() {
    if (atom_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill9cost) {
            if (atom_skill8kakutoku == 1) {
                herasuSirokuma(atom_skill9cost); //コスト分しろくま数からひく
                item12bairitu = 18; // 単価調整
                atom_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill10Click() {
    if (atom_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill10cost) {
            if (atom_skill9kakutoku == 1) {
                herasuSirokuma(atom_skill10cost); //コスト分しろくま数からひく
                item12bairitu = 20; // 単価調整
                atom_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill11Click() {
    if (atom_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill11cost) {
            if (atom_skill10kakutoku == 1) {
                herasuSirokuma(atom_skill11cost); //コスト分しろくま数からひく
                item12bairitu = 22; // 単価調整
                atom_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill12Click() {
    if (atom_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill12cost) {
            if (atom_skill11kakutoku == 1) {
                herasuSirokuma(atom_skill12cost); //コスト分しろくま数からひく
                item12bairitu = 24; // 単価調整
                atom_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill13Click() {
    if (atom_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill13cost) {
            if (atom_skill12kakutoku == 1) {
                herasuSirokuma(atom_skill13cost); //コスト分しろくま数からひく
                item12bairitu = 26; // 単価調整
                atom_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill14Click() {
    if (atom_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill14cost) {
            if (atom_skill13kakutoku == 1) {
                herasuSirokuma(atom_skill14cost); //コスト分しろくま数からひく
                item12bairitu = 28; // 単価調整
                atom_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function atom_skill15Click() {
    if (atom_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= atom_skill15cost) {
            if (atom_skill14kakutoku == 1) {
                herasuSirokuma(atom_skill15cost); //コスト分しろくま数からひく
                item12bairitu = 30; // 単価調整
                atom_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('atom_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + atom_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function time_skill1Click() {
    if (time_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill1cost) {
                herasuSirokuma(time_skill1cost); //コスト分しろくま数からひく
                item13bairitu = 2; // 単価調整
                time_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + time_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function time_skill2Click() {
    if (time_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill2cost) {
            if (time_skill1kakutoku == 1) {
                herasuSirokuma(time_skill2cost); //コスト分しろくま数からひく
                item13bairitu = 4; // 単価調整
                time_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill3Click() {
    if (time_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill3cost) {
            if (time_skill2kakutoku == 1) {
                herasuSirokuma(time_skill3cost); //コスト分しろくま数からひく
                item13bairitu = 6; // 単価調整
                time_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill4Click() {
    if (time_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill4cost) {
            if (time_skill3kakutoku == 1) {
                herasuSirokuma(time_skill4cost); //コスト分しろくま数からひく
                item13bairitu = 8; // 単価調整
                time_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill5Click() {
    if (time_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill5cost) {
            if (time_skill4kakutoku == 1) {
                herasuSirokuma(time_skill5cost); //コスト分しろくま数からひく
                item13bairitu = 10; // 単価調整
                time_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill6Click() {
    if (time_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill6cost) {
            if (time_skill5kakutoku == 1) {
                herasuSirokuma(time_skill6cost); //コスト分しろくま数からひく
                item13bairitu = 12; // 単価調整
                time_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill7Click() {
    if (time_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill7cost) {
            if (time_skill6kakutoku == 1) {
                herasuSirokuma(time_skill7cost); //コスト分しろくま数からひく
                item13bairitu = 14; // 単価調整
                time_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill8Click() {
    if (time_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill8cost) {
            if (time_skill7kakutoku == 1) {
                herasuSirokuma(time_skill8cost); //コスト分しろくま数からひく
                item13bairitu = 16; // 単価調整
                time_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill9Click() {
    if (time_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill9cost) {
            if (time_skill8kakutoku == 1) {
                herasuSirokuma(time_skill9cost); //コスト分しろくま数からひく
                item13bairitu = 18; // 単価調整
                time_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill10Click() {
    if (time_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill10cost) {
            if (time_skill9kakutoku == 1) {
                herasuSirokuma(time_skill10cost); //コスト分しろくま数からひく
                item13bairitu = 20; // 単価調整
                time_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill11Click() {
    if (time_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill11cost) {
            if (time_skill10kakutoku == 1) {
                herasuSirokuma(time_skill11cost); //コスト分しろくま数からひく
                item13bairitu = 22; // 単価調整
                time_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill12Click() {
    if (time_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill12cost) {
            if (time_skill11kakutoku == 1) {
                herasuSirokuma(time_skill12cost); //コスト分しろくま数からひく
                item13bairitu = 24; // 単価調整
                time_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill13Click() {
    if (time_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill13cost) {
            if (time_skill12kakutoku == 1) {
                herasuSirokuma(time_skill13cost); //コスト分しろくま数からひく
                item13bairitu = 26; // 単価調整
                time_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill14Click() {
    if (time_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill14cost) {
            if (time_skill13kakutoku == 1) {
                herasuSirokuma(time_skill14cost); //コスト分しろくま数からひく
                item13bairitu = 28; // 単価調整
                time_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function time_skill15Click() {
    if (time_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= time_skill15cost) {
            if (time_skill14kakutoku == 1) {
                herasuSirokuma(time_skill15cost); //コスト分しろくま数からひく
                item13bairitu = 30; // 単価調整
                time_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('time_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + time_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}




function js_skill1Click() {
    if (js_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill1cost) {
                herasuSirokuma(js_skill1cost); //コスト分しろくま数からひく
                item14bairitu = 2; // 単価調整
                js_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + js_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function js_skill2Click() {
    if (js_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill2cost) {
            if (js_skill1kakutoku == 1) {
                herasuSirokuma(js_skill2cost); //コスト分しろくま数からひく
                item14bairitu = 4; // 単価調整
                js_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill3Click() {
    if (js_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill3cost) {
            if (js_skill2kakutoku == 1) {
                herasuSirokuma(js_skill3cost); //コスト分しろくま数からひく
                item14bairitu = 6; // 単価調整
                js_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill4Click() {
    if (js_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill4cost) {
            if (js_skill3kakutoku == 1) {
                herasuSirokuma(js_skill4cost); //コスト分しろくま数からひく
                item14bairitu = 8; // 単価調整
                js_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill5Click() {
    if (js_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill5cost) {
            if (js_skill4kakutoku == 1) {
                herasuSirokuma(js_skill5cost); //コスト分しろくま数からひく
                item14bairitu = 10; // 単価調整
                js_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill6Click() {
    if (js_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill6cost) {
            if (js_skill5kakutoku == 1) {
                herasuSirokuma(js_skill6cost); //コスト分しろくま数からひく
                item14bairitu = 12; // 単価調整
                js_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill7Click() {
    if (js_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill7cost) {
            if (js_skill6kakutoku == 1) {
                herasuSirokuma(js_skill7cost); //コスト分しろくま数からひく
                item14bairitu = 14; // 単価調整
                js_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill8Click() {
    if (js_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill8cost) {
            if (js_skill7kakutoku == 1) {
                herasuSirokuma(js_skill8cost); //コスト分しろくま数からひく
                item14bairitu = 16; // 単価調整
                js_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill9Click() {
    if (js_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill9cost) {
            if (js_skill8kakutoku == 1) {
                herasuSirokuma(js_skill9cost); //コスト分しろくま数からひく
                item14bairitu = 18; // 単価調整
                js_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill10Click() {
    if (js_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill10cost) {
            if (js_skill9kakutoku == 1) {
                herasuSirokuma(js_skill10cost); //コスト分しろくま数からひく
                item14bairitu = 20; // 単価調整
                js_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill11Click() {
    if (js_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill11cost) {
            if (js_skill10kakutoku == 1) {
                herasuSirokuma(js_skill11cost); //コスト分しろくま数からひく
                item14bairitu = 22; // 単価調整
                js_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill12Click() {
    if (js_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill12cost) {
            if (js_skill11kakutoku == 1) {
                herasuSirokuma(js_skill12cost); //コスト分しろくま数からひく
                item14bairitu = 24; // 単価調整
                js_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill13Click() {
    if (js_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill13cost) {
            if (js_skill12kakutoku == 1) {
                herasuSirokuma(js_skill13cost); //コスト分しろくま数からひく
                item14bairitu = 26; // 単価調整
                js_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill14Click() {
    if (js_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill14cost) {
            if (js_skill13kakutoku == 1) {
                herasuSirokuma(js_skill14cost); //コスト分しろくま数からひく
                item14bairitu = 28; // 単価調整
                js_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function js_skill15Click() {
    if (js_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= js_skill15cost) {
            if (js_skill14kakutoku == 1) {
                herasuSirokuma(js_skill15cost); //コスト分しろくま数からひく
                item14bairitu = 30; // 単価調整
                js_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('js_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + js_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}





function ract_skill1Click() {
    if (ract_skill1kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill1cost) {
                herasuSirokuma(ract_skill1cost); //コスト分しろくま数からひく
                item15bairitu = 2; // 単価調整
                ract_skill1kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill1kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("しろくま数が" + ract_skill1cost + "に達していません。しろくま数を貯めてください。") }
        } 
    }

function ract_skill2Click() {
    if (ract_skill2kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill2cost) {
            if (ract_skill1kakutoku == 1) {
                herasuSirokuma(ract_skill2cost); //コスト分しろくま数からひく
                item15bairitu = 4; // 単価調整
                ract_skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill2kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill2cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill3Click() {
    if (ract_skill3kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill3cost) {
            if (ract_skill2kakutoku == 1) {
                herasuSirokuma(ract_skill3cost); //コスト分しろくま数からひく
                item15bairitu = 6; // 単価調整
                ract_skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill3kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill3cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill4Click() {
    if (ract_skill4kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill4cost) {
            if (ract_skill3kakutoku == 1) {
                herasuSirokuma(ract_skill4cost); //コスト分しろくま数からひく
                item15bairitu = 8; // 単価調整
                ract_skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill4kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill4cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill5Click() {
    if (ract_skill5kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill5cost) {
            if (ract_skill4kakutoku == 1) {
                herasuSirokuma(ract_skill5cost); //コスト分しろくま数からひく
                item15bairitu = 10; // 単価調整
                ract_skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill5kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill5cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill6Click() {
    if (ract_skill6kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill6cost) {
            if (ract_skill5kakutoku == 1) {
                herasuSirokuma(ract_skill6cost); //コスト分しろくま数からひく
                item15bairitu = 12; // 単価調整
                ract_skill6kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill6kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill6cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill7Click() {
    if (ract_skill7kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill7cost) {
            if (ract_skill6kakutoku == 1) {
                herasuSirokuma(ract_skill7cost); //コスト分しろくま数からひく
                item15bairitu = 14; // 単価調整
                ract_skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill7kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill7cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill8Click() {
    if (ract_skill8kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill8cost) {
            if (ract_skill7kakutoku == 1) {
                herasuSirokuma(ract_skill8cost); //コスト分しろくま数からひく
                item15bairitu = 16; // 単価調整
                ract_skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill8kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill8cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill9Click() {
    if (ract_skill9kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill9cost) {
            if (ract_skill8kakutoku == 1) {
                herasuSirokuma(ract_skill9cost); //コスト分しろくま数からひく
                item15bairitu = 18; // 単価調整
                ract_skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill9kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill9cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill10Click() {
    if (ract_skill10kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill10cost) {
            if (ract_skill9kakutoku == 1) {
                herasuSirokuma(ract_skill10cost); //コスト分しろくま数からひく
                item15bairitu = 20; // 単価調整
                ract_skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill10kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill10cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill11Click() {
    if (ract_skill11kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill11cost) {
            if (ract_skill10kakutoku == 1) {
                herasuSirokuma(ract_skill11cost); //コスト分しろくま数からひく
                item15bairitu = 22; // 単価調整
                ract_skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill11kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill11cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill12Click() {
    if (ract_skill12kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill12cost) {
            if (ract_skill11kakutoku == 1) {
                herasuSirokuma(ract_skill12cost); //コスト分しろくま数からひく
                item15bairitu = 24; // 単価調整
                ract_skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill12kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill12cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill13Click() {
    if (ract_skill13kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill13cost) {
            if (ract_skill12kakutoku == 1) {
                herasuSirokuma(ract_skill13cost); //コスト分しろくま数からひく
                item15bairitu = 26; // 単価調整
                ract_skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill13kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill13cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill14Click() {
    if (ract_skill14kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill14cost) {
            if (ract_skill13kakutoku == 1) {
                herasuSirokuma(ract_skill14cost); //コスト分しろくま数からひく
                item15bairitu = 28; // 単価調整
                ract_skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill14kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill14cost + "に達していません。しろくま数を貯めてください。") }
    }
}
function ract_skill15Click() {
    if (ract_skill15kakutoku == 1) { alert('すでに獲得しています') }
    else {
        if (sirokumaSuu >= ract_skill15cost) {
            if (ract_skill14kakutoku == 1) {
                herasuSirokuma(ract_skill15cost); //コスト分しろくま数からひく
                item15bairitu = 30; // 単価調整
                ract_skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('ract_skill15kakutokudesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            else { alert("前のスキルを獲得していません。前のスキルを獲得してください。") }
        } else { alert("しろくま数が" + ract_skill15cost + "に達していません。しろくま数を貯めてください。") }
    }
}



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
        toastr["success"]("テキストからロードしました")
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

// ==========================================
// カスタムCSS適用
// ==========================================

function customCSS_confirm(){
    const customCSS = document.getElementById("customcss").value;

    document.getElementById("customCSS_tekiyou").textContent = '';
    document.getElementById("customCSS_tekiyou").textContent = customCSS;

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
    toastr["info"]("カスタムCSSを読み込みました。")
}


function customJS_confirm(){
    const customJS = document.getElementById("customjs").value;

    document.getElementById("customJS_tekiyou").textContent = '';
    document.getElementById("customJS_tekiyou").textContent = customJS;

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
    toastr["info"]("カスタムJavaScriptを読み込みました。")
}
