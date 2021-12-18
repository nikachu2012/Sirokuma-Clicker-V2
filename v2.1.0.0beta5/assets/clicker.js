sirokumaSuu = 0;
sirokumaSuuRuikei = 0;
sirokumaSuuRuikeiHerasu = 0;

sirokumaOneClick = 1;

function fuyasuSirokuma(sirokumaKazu){
    sirokumaSuu = sirokumaSuu + sirokumaKazu;
    sirokumaSuuRuikei = sirokumaSuuRuikei + sirokumaKazu;
    updateHyouji();
    return("しろくま数を" + sirokumaSuu + "に変更しました")
}

function herasuSirokuma(HerasuSirokumaKazu){
    sirokumaSuu = sirokumaSuu - HerasuSirokumaKazu;
    sirokumaSuuRuikeiHerasu = sirokumaSuuRuikeiHerasu + HerasuSirokumaKazu;
    updateHyouji();
    return("しろくま数を" + sirokumaSuu + "に変更しました")

}

function clickSirokuma(){
    fuyasuSirokuma(sirokumaOneClick);
}

function updateHyouji(){
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

function skill1Click(){
    if(sirokumaSuu >= skill1cost){
        if(skill1kakutoku == 1){

        }
        else{
            herasuSirokuma(skill1cost);
            sirokumaOneClick = 10;
            skill1kakutoku = 1;
    
            document.getElementById('skill1kakutokuDesc').innerHTML = "獲得済み";
        }
    }
    else{
        alert("しろくま数が" + skill1cost + "に達していません。しろくま数を貯めてください。")
    }
}

function skill2Click(){
    if(sirokumaSuu >= skill2cost){
        if(skill1kakutoku == 1){
            if(skill2kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill2cost); //コスト分しろくま数からひく
                sirokumaOneClick = 50; // しろくまが１クリックで増える量調整
                skill2kakutoku = 1; // 獲得変数に１

                document.getElementById('skill2kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill2cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill3Click(){
    if(sirokumaSuu >= skill3cost){
        if(skill2kakutoku == 1){
            if(skill3kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill3cost); //コスト分しろくま数からひく
                sirokumaOneClick = 100; // しろくまが１クリックで増える量調整
                skill3kakutoku = 1; // 獲得変数に１

                document.getElementById('skill3kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill3cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill4Click(){
    if(sirokumaSuu >= skill4cost){
        if(skill3kakutoku == 1){
            if(skill4kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill4cost); //コスト分しろくま数からひく
                sirokumaOneClick = 500; // しろくまが１クリックで増える量調整
                skill4kakutoku = 1; // 獲得変数に１

                document.getElementById('skill4kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill4cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill5Click(){
    if(sirokumaSuu >= skill5cost){
        if(skill4kakutoku == 1){
            if(skill5kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill5cost); //コスト分しろくま数からひく
                sirokumaOneClick = 1000; // しろくまが１クリックで増える量調整
                skill5kakutoku = 1; // 獲得変数に１

                document.getElementById('skill5kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill5cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill6Click(){
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
}

function skill7Click(){
    if(sirokumaSuu >= skill7cost){
        if(skill6kakutoku == 1){
            if(skill7kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill7cost); //コスト分しろくま数からひく
                sirokumaOneClick = 10000; // しろくまが１クリックで増える量調整
                skill7kakutoku = 1; // 獲得変数に１

                document.getElementById('skill7kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill7cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill8Click(){
    if(sirokumaSuu >= skill8cost){
        if(skill7kakutoku == 1){
            if(skill8kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill8cost); //コスト分しろくま数からひく
                sirokumaOneClick = 50000; // しろくまが１クリックで増える量調整
                skill8kakutoku = 1; // 獲得変数に１

                document.getElementById('skill8kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill8cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill9Click(){
    if(sirokumaSuu >= skill9cost){
        if(skill8kakutoku == 1){
            if(skill9kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill9cost); //コスト分しろくま数からひく
                sirokumaOneClick = 100000; // しろくまが１クリックで増える量調整
                skill9kakutoku = 1; // 獲得変数に１

                document.getElementById('skill9kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill9cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill10Click(){
    if(sirokumaSuu >= skill10cost){
        if(skill9kakutoku == 1){
            if(skill10kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill10cost); //コスト分しろくま数からひく
                sirokumaOneClick = 500000; // しろくまが１クリックで増える量調整
                skill10kakutoku = 1; // 獲得変数に１

                document.getElementById('skill10kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill10cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}