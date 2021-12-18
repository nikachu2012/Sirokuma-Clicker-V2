bulidHyouji = 0;
function showBulidNumber(){
    if(bulidHyouji == 0){
        document.getElementById('clickerw-title-bulidNumber').innerHTML = '<span>Bulid ' + clicker_bulid + '<span>';
        bulidHyouji = 1;
    }
    else{
        document.getElementById('clickerw-title-bulidNumber').innerHTML = ''
        bulidHyouji = 0;
    }
}
