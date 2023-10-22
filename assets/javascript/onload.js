// バージョン指定
clicker_version = "2.2.0.1";


(function () {

    console.log("%cSirokumaClicker", 'color: black; font-size: xx-large; text-shadow:2px 0 5px #00FFFF')
    console.log("Version " + clicker_version + "  \nCopyright (C) Nikachu All rights reserved.")
    console.log("最大値は9007199254740991[2^53]です")

    document.getElementById('clickerw-title-version').innerHTML = '<span class="clickerw-title-version">version ' + clicker_version + '<span>';
    changeShopShoki();
    

}());
