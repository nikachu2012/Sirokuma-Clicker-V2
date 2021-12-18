sirokumaSuu = 0;
sirokumaSuuRuikei = 0;

function fuyasuSirokuma(sirokumaKazu){
    sirokumaSuu = sirokumaSuu + sirokumaKazu;
    sirokumaSuuRuikei = sirokumaSuuRuikei + sirokumaKazu;
    updateHyouji();
    return("しろくま数を" + sirokumaSuu + "に変更しました")
}

function herasuSirokuma(HerasuSirokumaKazu){
    sirokumaSuu = sirokumaSuu - sirokumaKazu;
    updateHyouji();
    return("しろくま数を" + sirokumaSuu + "に変更しました")

}

function clickSirokuma(){
    fuyasuSirokuma(1);
}

function updateHyouji(){
    document.getElementById('hyoujiSirokumaSuu').innerHTML = sirokumaSuu;
}

