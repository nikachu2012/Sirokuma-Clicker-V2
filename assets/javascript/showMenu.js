bulidHyouji = 0;

settingHyouji = 0;
function showSetting(){
    if(settingHyouji == 0){
        infoHyouji = 0;
        document.querySelector('.centerContents-setting').classList.remove("hidden")
        document.querySelector('.centerContents-information').classList.add("hidden")
        settingHyouji = 1;
    }
    else{
        document.querySelector('.centerContents-setting').classList.add("hidden")
        document.querySelector('.centerContents-information').classList.remove("hidden")
        settingHyouji = 0;
    }
}
