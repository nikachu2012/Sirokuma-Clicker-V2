
bulidHyouji = 0;

ToukeiHyouji = 0;
function showSetting(){
    if(ToukeiHyouji == 0){
        infoHyouji = 0;
        document.querySelector('.centerContents-toukei').classList.remove("hidden")
        document.querySelector('.centerContents-information').classList.add("hidden")
        ToukeiHyouji = 1;
    }
    else{
        document.querySelector('.centerContents-toukei').classList.add("hidden")
        document.querySelector('.centerContents-information').classList.remove("hidden")
        ToukeiHyouji = 0;
    }
}
