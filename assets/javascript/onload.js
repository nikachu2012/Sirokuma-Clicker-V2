// バージョン指定
clicker_version = "2.1.0.0 PublicBeta 1";
clicker_bulid = "21000";




(function () {

    console.log("%cSirokumaClicker", 'color: black; font-size: xx-large; text-shadow:2px 0 5px #00FFFF')
    console.log("Version " + clicker_version + "   Bulid " + clicker_bulid + " \nCopyright (C) Nikachu All rights reserved.")
    console.log("最大値は9007199254740991[2^53]です")

    document.getElementById('clickerw-title-version').innerHTML = '<span class="clickerw-title-version" onclick="showBulidNumber();">version ' + clicker_version + '<span>';
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
    dataLoad();
}());
