sirokumaSuu = 0;
sirokumaSuuRuikei = 0;
sirokumaSuuRuikeiHerasu = 0;

waribiki = 1;

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
/*
window.addEventListener('DOMContentLoaded', function(){

    window.addEventListener("keypress", function(e){
      if(e.key == " "){
          clickSirokuma();
      }
    });
  });
*/

function updateHyouji(){
    document.getElementById('hyoujiSirokumaSuu').innerHTML = sirokumaSuu;
}


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

function skill11Click(){
    if(sirokumaSuu >= skill11cost){
        if(skill10kakutoku == 1){
            if(skill11kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill11cost); //コスト分しろくま数からひく
                sirokumaOneClick = 1000000; // しろくまが１クリックで増える量調整
                skill11kakutoku = 1; // 獲得変数に１

                document.getElementById('skill11kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill11cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill12Click(){
    if(sirokumaSuu >= skill12cost){
        if(skill11kakutoku == 1){
            if(skill12kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill12cost); //コスト分しろくま数からひく
                sirokumaOneClick = 5000000; // しろくまが１クリックで増える量調整
                skill12kakutoku = 1; // 獲得変数に１

                document.getElementById('skill12kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill12cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill13Click(){
    if(sirokumaSuu >= skill13cost){
        if(skill12kakutoku == 1){
            if(skill13kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill13cost); //コスト分しろくま数からひく
                sirokumaOneClick = 8000000; // しろくまが１クリックで増える量調整
                skill13kakutoku = 1; // 獲得変数に１

                document.getElementById('skill13kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill13cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill14Click(){
    if(sirokumaSuu >= skill14cost){
        if(skill13kakutoku == 1){
            if(skill14kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill14cost); //コスト分しろくま数からひく
                sirokumaOneClick = 10000000; // しろくまが１クリックで増える量調整
                skill14kakutoku = 1; // 獲得変数に１

                document.getElementById('skill14kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill14cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}

function skill15Click(){
    if(sirokumaSuu >= skill15cost){
        if(skill14kakutoku == 1){
            if(skill15kakutoku == 1){alert('既に獲得しています。')}
            else{
                herasuSirokuma(skill15cost); //コスト分しろくま数からひく
                sirokumaOneClick = 15000000; // しろくまが１クリックで増える量調整
                skill15kakutoku = 1; // 獲得変数に１

                document.getElementById('skill15kakutokuDesc').innerHTML = "獲得済み"; //説明を獲得済みに変更
            }
            
        }
        else{alert("前のスキルを獲得していません。前のスキルを獲得してください。")} // 前のスキルをまだとっていない時
    }
    else{alert("しろくま数が" + skill15cost + "に達していません。しろくま数を貯めてください。")} // しろくま数が足りていない時
}




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
function item2buy(){
    if(sirokumaSuu >= item2nedan){
        herasuSirokuma(item2nedan * buyKosuu);
        item2kosuu = item2kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item2nedan = Math.ceil(item2nedan * bairitu * waribiki);
        }

        document.getElementById('item2-sirokumacost').innerHTML = item2nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item2nedan').innerHTML = item2nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item2havekazu').innerHTML = item2kosuu.toLocaleString();
        document.getElementById('item2MotterukazuHyouji').innerHTML = item2kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item2nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item3buy(){
    if(sirokumaSuu >= item3nedan){
        herasuSirokuma(item3nedan * buyKosuu);
        item3kosuu = item3kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item3nedan = Math.ceil(item3nedan * bairitu * waribiki);
        }

        document.getElementById('item3-sirokumacost').innerHTML = item3nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item3nedan').innerHTML = item3nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item3havekazu').innerHTML = item3kosuu.toLocaleString();
        document.getElementById('item3MotterukazuHyouji').innerHTML = item3kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item3nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item4buy(){
    if(sirokumaSuu >= item4nedan){
        herasuSirokuma(item4nedan * buyKosuu);
        item4kosuu = item4kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item4nedan = Math.ceil(item4nedan * bairitu * waribiki);
        }

        document.getElementById('item4-sirokumacost').innerHTML = item4nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item4nedan').innerHTML = item4nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item4havekazu').innerHTML = item4kosuu.toLocaleString();
        document.getElementById('item4MotterukazuHyouji').innerHTML = item4kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item4nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item5buy(){
    if(sirokumaSuu >= item5nedan){
        herasuSirokuma(item5nedan * buyKosuu);
        item5kosuu = item5kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item5nedan = Math.ceil(item5nedan * bairitu * waribiki);
        }

        document.getElementById('item5-sirokumacost').innerHTML = item5nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item5nedan').innerHTML = item5nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item5havekazu').innerHTML = item5kosuu.toLocaleString();
        document.getElementById('item5MotterukazuHyouji').innerHTML = item5kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item5nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item6buy(){
    if(sirokumaSuu >= item6nedan){
        herasuSirokuma(item6nedan * buyKosuu);
        item6kosuu = item6kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item6nedan = Math.ceil(item6nedan * bairitu * waribiki);
        }

        document.getElementById('item6-sirokumacost').innerHTML = item6nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item6nedan').innerHTML = item6nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item6havekazu').innerHTML = item6kosuu.toLocaleString();
        document.getElementById('item6MotterukazuHyouji').innerHTML = item6kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item6nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item7buy(){
    if(sirokumaSuu >= item7nedan){
        herasuSirokuma(item7nedan * buyKosuu);
        item7kosuu = item7kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item7nedan = Math.ceil(item7nedan * bairitu * waribiki);
        }

        document.getElementById('item7-sirokumacost').innerHTML = item7nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item7nedan').innerHTML = item7nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item7havekazu').innerHTML = item7kosuu.toLocaleString();
        document.getElementById('item7MotterukazuHyouji').innerHTML = item7kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item7nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item8buy(){
    if(sirokumaSuu >= item8nedan){
        herasuSirokuma(item8nedan * buyKosuu);
        item8kosuu = item8kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item8nedan = Math.ceil(item8nedan * bairitu * waribiki);
        }

        document.getElementById('item8-sirokumacost').innerHTML = item8nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item8nedan').innerHTML = item8nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item8havekazu').innerHTML = item8kosuu.toLocaleString();
        document.getElementById('item8MotterukazuHyouji').innerHTML = item8kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item8nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item9buy(){
    if(sirokumaSuu >= item9nedan){
        herasuSirokuma(item9nedan * buyKosuu);
        item9kosuu = item9kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item9nedan = Math.ceil(item9nedan * bairitu * waribiki);
        }

        document.getElementById('item9-sirokumacost').innerHTML = item9nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item9nedan').innerHTML = item9nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item9havekazu').innerHTML = item9kosuu.toLocaleString();
        document.getElementById('item9MotterukazuHyouji').innerHTML = item9kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item9nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item10buy(){
    if(sirokumaSuu >= item10nedan){
        herasuSirokuma(item10nedan * buyKosuu);
        item10kosuu = item10kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item10nedan = Math.ceil(item10nedan * bairitu * waribiki);
        }

        document.getElementById('item10-sirokumacost').innerHTML = item10nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item10nedan').innerHTML = item10nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item10havekazu').innerHTML = item10kosuu.toLocaleString();
        document.getElementById('item10MotterukazuHyouji').innerHTML = item10kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item10nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item11buy(){
    if(sirokumaSuu >= item11nedan){
        herasuSirokuma(item11nedan * buyKosuu);
        item11kosuu = item11kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item11nedan = Math.ceil(item11nedan * bairitu * waribiki);
        }

        document.getElementById('item11-sirokumacost').innerHTML = item11nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item11nedan').innerHTML = item11nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item11havekazu').innerHTML = item11kosuu.toLocaleString();
        document.getElementById('item11MotterukazuHyouji').innerHTML = item11kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item11nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item12buy(){
    if(sirokumaSuu >= item12nedan){
        herasuSirokuma(item12nedan * buyKosuu);
        item12kosuu = item12kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item12nedan = Math.ceil(item12nedan * bairitu * waribiki);
        }

        document.getElementById('item12-sirokumacost').innerHTML = item12nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item12nedan').innerHTML = item12nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item12havekazu').innerHTML = item12kosuu.toLocaleString();
        document.getElementById('item12MotterukazuHyouji').innerHTML = item12kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item12nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item13buy(){
    if(sirokumaSuu >= item13nedan){
        herasuSirokuma(item13nedan * buyKosuu);
        item13kosuu = item13kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item13nedan = Math.ceil(item13nedan * bairitu * waribiki);
        }

        document.getElementById('item13-sirokumacost').innerHTML = item13nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item13nedan').innerHTML = item13nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item13havekazu').innerHTML = item13kosuu.toLocaleString();
        document.getElementById('item13MotterukazuHyouji').innerHTML = item13kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item13nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item14buy(){
    if(sirokumaSuu >= item14nedan){
        herasuSirokuma(item14nedan * buyKosuu);
        item14kosuu = item14kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item14nedan = Math.ceil(item14nedan * bairitu * waribiki);
        }

        document.getElementById('item14-sirokumacost').innerHTML = item14nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item14nedan').innerHTML = item14nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item14havekazu').innerHTML = item14kosuu.toLocaleString();
        document.getElementById('item14MotterukazuHyouji').innerHTML = item14kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item14nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
}
function item15buy(){
    if(sirokumaSuu >= item15nedan){
        herasuSirokuma(item15nedan * buyKosuu);
        item15kosuu = item15kosuu + buyKosuu;

        const n = buyKosuu;
        for(i=0; i < n; i++){
            item15nedan = Math.ceil(item15nedan * bairitu * waribiki);
        }

        document.getElementById('item15-sirokumacost').innerHTML = item15nedan.toLocaleString() + '&nbsp;しろくま';
        document.getElementById('item15nedan').innerHTML = item15nedan.toLocaleString() + '&nbsp;しろくま';

        document.getElementById('item15havekazu').innerHTML = item15kosuu.toLocaleString();
        document.getElementById('item15MotterukazuHyouji').innerHTML = item15kosuu.toLocaleString() + '&nbsp;個';
    }
    else{alert('しろくま数が' + item15nedan * buyKosuu + 'に達していません。しろくま数を貯めてください。')} 
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
    if (buyKosuu == 1) {}
    else if (buyKosuu == 10) {}
    else if (buyKosuu == 100) {}
    else{error_critical(200)}
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


function x1push(){
    buyKosuu = 1;
    document.getElementById('x1text').innerHTML = '<span style="text-shadow: #FFFFFF 1px 0 5px;">x1</span>';
    document.getElementById('x10text').innerHTML = 'x10';
    document.getElementById('x100text').innerHTML = 'x100';
}

function x10push(){
    buyKosuu = 10;
    document.getElementById('x1text').innerHTML = 'x1';
    document.getElementById('x10text').innerHTML = '<span style="text-shadow: #FFFFFF 1px 0 5px;">x10</span>';
    document.getElementById('x100text').innerHTML = 'x100';
}

function x100push(){
    buyKosuu = 100;
    document.getElementById('x1text').innerHTML = 'x1';
    document.getElementById('x10text').innerHTML = 'x10';
    document.getElementById('x100text').innerHTML = '<span style="text-shadow: #FFFFFF 1px 0 5px;">x100</span>';
}

function itemAllLoad(){
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