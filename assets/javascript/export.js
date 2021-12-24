function dataExport(){

    exportbuffer = '{"sirokumaSuu": ' + sirokumaSuu + ', "sirokumaSuuRuikei": ' + sirokumaSuuRuikei + ', "sirokumaSuuRuikeiHerasu": ' + sirokumaSuuRuikeiHerasu + ', "waribiki": ' + waribiki + ', "sirokumaOneClick": ' + sirokumaOneClick+ ', "skill1kakutoku": ' + skill1kakutoku+ ', "skill2kakutoku": ' + skill2kakutoku+ ', "skill3kakutoku": ' + skill3kakutoku+ ', "skill4kakutoku": ' + skill4kakutoku+ ', "skill5kakutoku": ' + skill5kakutoku+ ', "skill6kakutoku": ' + skill6kakutoku+ ', "skill7kakutoku": ' + skill7kakutoku+ ', "skill8kakutoku": ' + skill8kakutoku+ ', "skill9kakutoku": ' + skill9kakutoku + ', "skill10kakutoku": ' + skill10kakutoku+ ', "skill11kakutoku": ' + skill11kakutoku+ ', "skill12kakutoku": ' + skill12kakutoku+ ', "skill13kakutoku": ' + skill13kakutoku+ ', "skill14kakutoku": ' + skill14kakutoku + ', "skill15kakutoku": ' + skill15kakutoku + ', "item1nedan": ' + item1nedan + ', "item2nedan": ' + item2nedan + ', "item3nedan": ' + item3nedan + ', "item4nedan": ' + item4nedan + ',"item5nedan": ' + item5nedan + ', "item6nedan": ' + item6nedan + ', "item7nedan": ' + item7nedan + ', "item8nedan": ' + item8nedan + ', "item9nedan": ' + item9nedan + ', "item10nedan": ' + item10nedan + ', "item11nedan": ' + item11nedan + ', "item12nedan": ' + item12nedan + ', "item13nedan": ' + item13nedan + ', "item14nedan": ' + item14nedan;
    
    exportbuffer2 = ', "item15nedan": ' + item15nedan+ ', "item1kosuu": ' + item1kosuu + ', "item2kosuu": ' + item2kosuu + ', "item3kosuu": ' + item3kosuu + ', "item4kosuu": ' + item4kosuu + ', "item5kosuu": ' + item5kosuu + ', "item6kosuu": ' + item6kosuu + ', "item7kosuu": ' + item7kosuu + ', "item8kosuu": ' + item8kosuu + ', "item9kosuu": ' + item9kosuu + ', "item10kosuu": ' + item10kosuu + ', "item11kosuu": ' + item11kosuu + ', "item12kosuu": ' + item12kosuu + ', "item13kosuu": ' + item13kosuu + ', "item14kosuu": ' + item14kosuu + ', "item15kosuu": ' + item15kosuu+ ', "item1bairitu": ' + item1bairitu + ', "item2bairitu": ' + item2bairitu + ', "item3bairitu": ' + item3bairitu + ', "item4bairitu": ' + item4bairitu + ', "item5bairitu": ' + item5bairitu + ', "item6bairitu": ' + item6bairitu + ', "item7bairitu": ' + item7bairitu + ', "item8bairitu": ' + item8bairitu + ', "item9bairitu": ' + item9bairitu + ', "item10bairitu": ' + item10bairitu + ', "item11bairitu": ' + item11bairitu + ', "item12bairitu": ' + item12bairitu + ', "item13bairitu": ' + item13bairitu + ', "item14bairitu": ' + item14bairitu + ', "item15bairitu": ' + item15bairitu;
    
    exportbuffer3 = ', "shopname": ' + shopname + '}'

    exportbufferfinal = exportbuffer + exportbuffer2 + exportbuffer3;
    exportBASE64 = window.btoa(exportbufferfinal);
    // console.log(exportBASE64) <=DEBUG

    return(exportBASE64)
}

function dataImport(ImportData){
    loadBASE64 = window.atob(ImportData)
    jsonObject = JSON.parse(loadBASE64);
    console.log(jsonObject)

    
    sirokumaSuu = jsonObject.sirokumaSuu;
    sirokumaSuuRuikei = jsonObject.sirokumaSuuRuikei;
    sirokumaSuuRuikeiHerasu = jsonObject.sirokumaSuuRuikeiHerasu;

    waribiki = jsonObject.waribiki;
    sirokumaOneClick = jsonObject.sirokumaOneClick;

    skill1kakutoku = jsonObject.skill1kakutoku;
    skill2kakutoku = jsonObject.skill2kakutoku;
    skill3kakutoku = jsonObject.skill3kakutoku;
    skill4kakutoku = jsonObject.skill4kakutoku;
    skill5kakutoku = jsonObject.skill5kakutoku;
    skill6kakutoku = jsonObject.skill6kakutoku;
    skill7kakutoku = jsonObject.skill7kakutoku;
    skill8kakutoku = jsonObject.skill8kakutoku;
    skill9kakutoku = jsonObject.skill9kakutoku;
    skill10kakutoku = jsonObject.skill10kakutoku;
    skill11kakutoku = jsonObject.skill11kakutoku;
    skill12kakutoku = jsonObject.skill12kakutoku;
    skill13kakutoku = jsonObject.skill13kakutoku;
    skill14kakutoku = jsonObject.skill14kakutoku;
    skill15kakutoku = jsonObject.skill15kakutoku;

    item1kosuu = jsonObject.item1kosuu;
    item2kosuu = jsonObject.item2kosuu;
    item3kosuu = jsonObject.item3kosuu;
    item4kosuu = jsonObject.item4kosuu;
    item5kosuu = jsonObject.item5kosuu;
    item6kosuu = jsonObject.item6kosuu;
    item7kosuu = jsonObject.item7kosuu;
    item8kosuu = jsonObject.item8kosuu;
    item9kosuu = jsonObject.item9kosuu;
    item10kosuu = jsonObject.item10kosuu;
    item11kosuu = jsonObject.item11kosuu;
    item12kosuu = jsonObject.item12kosuu;
    item13kosuu = jsonObject.item13kosuu;
    item14kosuu = jsonObject.item14kosuu;
    item15kosuu = jsonObject.item15kosuu;


    item1nedan = jsonObject.item1nedan;
    item2nedan = jsonObject.item2nedan;
    item3nedan = jsonObject.item3nedan;
    item4nedan = jsonObject.item4nedan;
    item5nedan = jsonObject.item5nedan;
    item6nedan = jsonObject.item6nedan;
    item7nedan = jsonObject.item7nedan;
    item8nedan = jsonObject.item8nedan;
    item9nedan = jsonObject.item9nedan;
    item10nedan = jsonObject.item10nedan;
    item11nedan = jsonObject.item11nedan;
    item12nedan = jsonObject.item12nedan;
    item13nedan = jsonObject.item13nedan;
    item14nedan = jsonObject.item14nedan;
    item15nedan = jsonObject.item15nedan;

    item1bairitu = jsonObject.item1bairitu;
    item2bairitu = jsonObject.item2bairitu;
    item3bairitu = jsonObject.item3bairitu;
    item4bairitu = jsonObject.item4bairitu;
    item5bairitu = jsonObject.item5bairitu;
    item6bairitu = jsonObject.item6bairitu;
    item7bairitu = jsonObject.item7bairitu;
    item8bairitu = jsonObject.item8bairitu;
    item9bairitu = jsonObject.item9bairitu;
    item10bairitu = jsonObject.item10bairitu;
    item11bairitu = jsonObject.item11bairitu;
    item12bairitu = jsonObject.item12bairitu;
    item13bairitu = jsonObject.item13bairitu;
    item14bairitu = jsonObject.item14bairitu;
    item15bairitu = jsonObject.item15bairitu;

    shopname = jsonObject.shopname;


    // 文字列を数字に変換
    sirokumaSuu = Number(sirokumaSuu)
    sirokumaSuuRuikei = Number(sirokumaSuuRuikei)
    sirokumaSuuRuikeiHerasu = Number(sirokumaSuuRuikeiHerasu)
    
    waribiki = Number(waribiki)
    sirokumaOneClick = Number(sirokumaOneClick)

    skill1kakutoku = Number(skill1kakutoku)
    skill2kakutoku = Number(skill2kakutoku)
    skill3kakutoku = Number(skill3kakutoku)
    skill4kakutoku = Number(skill4kakutoku)
    skill5kakutoku = Number(skill5kakutoku)
    skill6kakutoku = Number(skill6kakutoku)
    skill7kakutoku = Number(skill7kakutoku)
    skill8kakutoku = Number(skill8kakutoku)
    skill9kakutoku = Number(skill9kakutoku)
    skill10kakutoku = Number(skill10kakutoku)
    skill11kakutoku = Number(skill11kakutoku)
    skill12kakutoku = Number(skill12kakutoku)
    skill13kakutoku = Number(skill13kakutoku)
    skill14kakutoku = Number(skill14kakutoku)
    skill15kakutoku = Number(skill15kakutoku)

    item1nedan = Number(item1nedan)
    item1kosuu = Number(item1kosuu)
    item1bairitu = Number(item1bairitu)
    item2nedan = Number(item2nedan)
    item2kosuu = Number(item2kosuu)
    item2bairitu = Number(item2bairitu)
    item3nedan = Number(item3nedan)
    item3kosuu = Number(item3kosuu)
    item3bairitu = Number(item3bairitu)
    item4nedan = Number(item4nedan)
    item4kosuu = Number(item4kosuu)
    item4bairitu = Number(item4bairitu)
    item5nedan = Number(item5nedan)
    item5kosuu = Number(item5kosuu)
    item5bairitu = Number(item5bairitu)
    item6nedan = Number(item6nedan)
    item6kosuu = Number(item6kosuu)
    item6bairitu = Number(item6bairitu)
    item7nedan = Number(item7nedan)
    item7kosuu = Number(item7kosuu)
    item7bairitu = Number(item7bairitu)
    item8nedan = Number(item8nedan)
    item8kosuu = Number(item8kosuu)
    item8bairitu = Number(item8bairitu)
    item9nedan = Number(item9nedan)
    item9kosuu = Number(item9kosuu)
    item9bairitu = Number(item9bairitu)
    item10nedan = Number(item10nedan)
    item10kosuu = Number(item10kosuu)
    item10bairitu = Number(item10bairitu)
    item11nedan = Number(item11nedan)
    item11kosuu = Number(item11kosuu)
    item11bairitu = Number(item11bairitu)
    item12nedan = Number(item12nedan)
    item12kosuu = Number(item12kosuu)
    item12bairitu = Number(item12bairitu)
    item13nedan = Number(item13nedan)
    item13kosuu = Number(item13kosuu)
    item13bairitu = Number(item13bairitu)
    item14nedan = Number(item14nedan)
    item14kosuu = Number(item14kosuu)
    item14bairitu = Number(item14bairitu)
    item15nedan = Number(item15nedan)
    item15kosuu = Number(item15kosuu)
    item15bairitu = Number(item15bairitu)

    
    

    if (skill15kakutoku == 1) {
        document.getElementById('skill15kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill14kakutoku == 1) {
        document.getElementById('skill14kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill13kakutoku == 1) {
        document.getElementById('skill13kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill12kakutoku == 1) {
        document.getElementById('skill12kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill11kakutoku == 1) {
        document.getElementById('skill11kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill10kakutoku == 1) {
        document.getElementById('skill10kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill9kakutoku == 1) {
        document.getElementById('skill9kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill8kakutoku == 1) {
        document.getElementById('skill8kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill7kakutoku == 1) {
        document.getElementById('skill7kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill6kakutoku == 1) {
        document.getElementById('skill6kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill5kakutoku == 1) {
        document.getElementById('skill5kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill4kakutoku == 1) {
        document.getElementById('skill4kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill3kakutoku == 1) {
        document.getElementById('skill3kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill2kakutoku == 1) {
        document.getElementById('skill2kakutokuDesc').innerHTML = "獲得済み";
    }
    if (skill1kakutoku == 1) {
        document.getElementById('skill1kakutokuDesc').innerHTML = "獲得済み";
    }
    //　sirokumaSuu = localStorage.getItem('sirokumaSuu')

    updateHyouji();
    itemAllLoad();

    x1push();
    return('データをセーブファイルから読みだしました。')

}