function convertOldSavedata(ImportData) {
    loadBASE64 = window.atob(ImportData)
    jsonObject = JSON.parse(loadBASE64);
    console.log(jsonObject)


    sirokumaSuu = jsonObject.sirokumaSuu;
    sirokumaSuuRuikei = jsonObject.sirokumaSuuRuikei;
    sirokumaSuuRuikeiHerasu = jsonObject.sirokumaSuuRuikeiHerasu;

    waribiki = jsonObject.waribiki;
    sirokumaOneClick = jsonObject.sirokumaOneClick;

    skillKakutoku = [
        jsonObject.skill1kakutoku,
        jsonObject.skill2kakutoku,
        jsonObject.skill3kakutoku,
        jsonObject.skill4kakutoku,
        jsonObject.skill5kakutoku,
        jsonObject.skill6kakutoku,
        jsonObject.skill7kakutoku,
        jsonObject.skill8kakutoku,
        jsonObject.skill9kakutoku,
        jsonObject.skill10kakutoku,
        jsonObject.skill11kakutoku,
        jsonObject.skill12kakutoku,
        jsonObject.skill13kakutoku,
        jsonObject.skill14kakutoku,
        jsonObject.skill15kakutoku
    ]

    itemcount = [
        jsonObject.item1kosuu,
        jsonObject.item2kosuu,
        jsonObject.item3kosuu,
        jsonObject.item4kosuu,
        jsonObject.item5kosuu,
        jsonObject.item6kosuu,
        jsonObject.item7kosuu,
        jsonObject.item8kosuu,
        jsonObject.item9kosuu,
        jsonObject.item10kosuu,
        jsonObject.item11kosuu,
        jsonObject.item12kosuu,
        jsonObject.item13kosuu,
        jsonObject.item14kosuu,
        jsonObject.item15kosuu
    ]

    itemcost = [
        jsonObject.item1nedan,
        jsonObject.item2nedan,
        jsonObject.item3nedan,
        jsonObject.item4nedan,
        jsonObject.item5nedan,
        jsonObject.item6nedan,
        jsonObject.item7nedan,
        jsonObject.item8nedan,
        jsonObject.item9nedan,
        jsonObject.item10nedan,
        jsonObject.item11nedan,
        jsonObject.item12nedan,
        jsonObject.item13nedan,
        jsonObject.item14nedan,
        jsonObject.item15nedan,
    ]

    itemRatio = [
        jsonObject.item1bairitu,
        jsonObject.item2bairitu,
        jsonObject.item3bairitu,
        jsonObject.item4bairitu,
        jsonObject.item5bairitu,
        jsonObject.item6bairitu,
        jsonObject.item7bairitu,
        jsonObject.item8bairitu,
        jsonObject.item9bairitu,
        jsonObject.item10bairitu,
        jsonObject.item11bairitu,
        jsonObject.item12bairitu,
        jsonObject.item13bairitu,
        jsonObject.item14bairitu,
        jsonObject.item15bairitu,
    ]

    shopname = jsonObject.shopname;


    // 文字列を数字に変換
    sirokumaSuu = Number(sirokumaSuu)
    sirokumaSuuRuikei = Number(sirokumaSuuRuikei)
    sirokumaSuuRuikeiHerasu = Number(sirokumaSuuRuikeiHerasu)

    waribiki = Number(waribiki)
    sirokumaOneClick = Number(sirokumaOneClick)

    skillKakutoku = skillKakutoku.map(Number)
    itemcost = itemcost.map(Number)
    itemcount = itemcount.map(Number)
    itemRatio = itemRatio.map(Number)


    for (let index = 0; index < 15; index++) {
        if (skillKakutoku[index] == 1) {
            document.getElementById(`skill${index}kakutokuDesc`).innerHTML = "獲得済み";
        }
    }

    document.getElementById('shopNameArea').innerHTML = shopname

    updateHyouji();
    itemAllLoad();

    x1push();

    dataSave();
}
