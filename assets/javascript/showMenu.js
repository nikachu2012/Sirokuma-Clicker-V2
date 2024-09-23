//bulidHyouji = 0; nikachu五時ってて草

settingHyouji = 0;
/*function showSetting(){
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
}*/
lastHyoujiContent = "information"
const showCenterContent = (name) => {
    if (name == lastHyoujiContent) {
        document.querySelector(`.centerContents-${name}`).classList.add("hidden")
        document.querySelector(`.centerContents-information`).classList.remove("hidden")
        lastHyoujiContent = "information"
    }
    else {
        document.querySelector(`.centerContents-${lastHyoujiContent}`).classList.add("hidden")
        document.querySelector(`.centerContents-${name}`).classList.remove("hidden")
        lastHyoujiContent = name
    }

}
