// バージョン指定
clicker_version = "2.1.0.0 PublicBeta 1";
clicker_bulid = "21000";


(function () {

    console.log("%cSirokumaClicker", 'color: black; font-size: xx-large; text-shadow:2px 0 5px #00FFFF')
    console.log("Version " + clicker_version + "   Bulid " + clicker_bulid + " \nCopyright (C) Nikachu All rights reserved.")
    console.log("最大値は9007199254740991[2^53]です")

    document.getElementById('clickerw-title-version').innerHTML = '<span class="clickerw-title-version" onclick="showBulidNumber();">version ' + clicker_version + '<span>';
    dataLoad();
}());
