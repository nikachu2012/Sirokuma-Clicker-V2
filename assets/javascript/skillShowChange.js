function valueChange(){
    const selectValue = skillSelect.value;
    
    if(selectValue == "pointer"){  
        document.getElementById('skillHyoujiyou').innerHTML = '.pointer-skill{visibility:visible}.bank-skill,.computer-skill,.house-skill,.kujira-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "sharp-pen"){
        document.getElementById('skillHyoujiyou').innerHTML = '.pointer-skill{visibility:hidden}.sharp-pen-skill{visibility:visible}.bank-skill,.computer-skill,.house-skill,.kujira-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "sitajiki"){
        document.getElementById('skillHyoujiyou').innerHTML = '.pointer-skill,.sharp-pen-skill{visibility:hidden}.sitajiki-skill{visibility:visible}.bank-skill,.computer-skill,.house-skill,.kujira-skill,.snow-skill,.turiba-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "house"){
        document.getElementById('skillHyoujiyou').innerHTML = '.pointer-skill,.sharp-pen-skill,.sitajiki-skill{visibility:hidden}.house-skill{visibility:visible}.bank-skill,.computer-skill,.kujira-skill,.snow-skill,.turiba-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "computer"){
        document.getElementById('skillHyoujiyou').innerHTML = '.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill{visibility:hidden}.computer-skill{visibility:visible}.bank-skill,.kujira-skill,.snow-skill,.turiba-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "turiba"){
        document.getElementById('skillHyoujiyou').innerHTML = '.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill{visibility:hidden}.turiba-skill{visibility:visible}.bank-skill,.kujira-skill,.snow-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "bank"){
        document.getElementById('skillHyoujiyou').innerHTML = '.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.turiba-skill{visibility:hidden}.bank-skill{visibility:visible}.kujira-skill,.snow-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "snow"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.turiba-skill{visibility:hidden}.snow-skill{visibility:visible}.kujira-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "kujira"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.kujira-skill{visibility:visible}.atom-skill,.factory-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "factory"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.kujira-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.factory-skill{visibility:visible}.atom-skill,.gpu-skill,.js-skill,.ract-skill,.threed-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "threed"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.factory-skill{visibility:hidden}.threed-skill{visibility:visible}.atom-skill,.gpu-skill,.js-skill,.ract-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "gpu"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.factory-skill,.threed-skill{visibility:hidden}.gpu-skill{visibility:visible}.atom-skill,.js-skill,.ract-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "atom"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.factory-skill,.gpu-skill,.threed-skill{visibility:hidden}.atom-skill{visibility:visible}.js-skill,.ract-skill,.time-skill{visibility:hidden}';
    }
    else if(selectValue == "time"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.threed-skill{visibility:hidden}.time-skill{visibility:visible}.js-skill,.ract-skill{visibility:hidden}';
    }
    else if(selectValue == "js"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.atom-skill,.factory-skill,.gpu-skill,.threed-skill,.time-skill{visibility:hidden}.js-skill{visibility:visible}.ract-skill{visibility:hidden}';
    }
    else if(selectValue == "ract"){
        document.getElementById('skillHyoujiyou').innerHTML = '.bank-skill,.computer-skill,.house-skill,.pointer-skill,.sharp-pen-skill,.sitajiki-skill,.snow-skill,.turiba-skill{visibility:hidden}.factory-skill{visibility:hidden}.threed-skill{visibility:hidden}.gpu-skill{visibility:hidden}.atom-skill{visibility:hidden}.time-skill{visibility:hidden}.js-skill{visibility:hidden}.ract-skill{visibility:visible}';
    }
    else{
        error_critical(100);
    }
    
  }
  
  let skillSelect = document.getElementById('skillType');
  skillSelect.addEventListener('change', valueChange);