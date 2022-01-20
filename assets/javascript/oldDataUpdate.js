function sampleDataCreate(){
    localStorage.setItem('sirokumaSuu', 9999999999)
    localStorage.setItem('sirokumaSuuRuikei', sirokumaSuuRuikei)
    localStorage.setItem('sirokumaSuuRuikeiHerasu', sirokumaSuuRuikeiHerasu)

    localStorage.setItem('waribiki', waribiki)
    localStorage.setItem('sirokumaOneClick', sirokumaOneClick)

    localStorage.setItem('skill1kakutoku', skill1kakutoku)
    localStorage.setItem('skill2kakutoku', skill2kakutoku)
    localStorage.setItem('skill3kakutoku', skill3kakutoku)
    localStorage.setItem('skill4kakutoku', skill4kakutoku)
    localStorage.setItem('skill5kakutoku', skill5kakutoku)
    localStorage.setItem('skill6kakutoku', skill6kakutoku)
    localStorage.setItem('skill7kakutoku', skill7kakutoku)
    localStorage.setItem('skill8kakutoku', skill8kakutoku)
    localStorage.setItem('skill9kakutoku', skill9kakutoku)
    localStorage.setItem('skill10kakutoku', skill10kakutoku)
    localStorage.setItem('skill11kakutoku', skill11kakutoku)
    localStorage.setItem('skill12kakutoku', skill12kakutoku)
    localStorage.setItem('skill13kakutoku', skill13kakutoku)
    localStorage.setItem('skill14kakutoku', skill14kakutoku)
    localStorage.setItem('skill15kakutoku', skill15kakutoku)

    localStorage.setItem('item1nedan', item1nedan)
    localStorage.setItem('item2nedan', item2nedan)
    localStorage.setItem('item3nedan', item3nedan)
    localStorage.setItem('item4nedan', item4nedan)
    localStorage.setItem('item5nedan', item5nedan)
    localStorage.setItem('item6nedan', item6nedan)
    localStorage.setItem('item7nedan', item7nedan)
    localStorage.setItem('item8nedan', item8nedan)
    localStorage.setItem('item9nedan', item9nedan)
    localStorage.setItem('item10nedan', item10nedan)
    localStorage.setItem('item11nedan', item11nedan)
    localStorage.setItem('item12nedan', item12nedan)
    localStorage.setItem('item13nedan', item13nedan)
    localStorage.setItem('item14nedan', item14nedan)
    localStorage.setItem('item15nedan', item15nedan)


    localStorage.setItem('item1kosuu', item1kosuu)
    localStorage.setItem('item2kosuu', item2kosuu)
    localStorage.setItem('item3kosuu', item3kosuu)
    localStorage.setItem('item4kosuu', item4kosuu)
    localStorage.setItem('item5kosuu', item5kosuu)
    localStorage.setItem('item6kosuu', item6kosuu)
    localStorage.setItem('item7kosuu', item7kosuu)
    localStorage.setItem('item8kosuu', item8kosuu)
    localStorage.setItem('item9kosuu', item9kosuu)
    localStorage.setItem('item10kosuu', item10kosuu)
    localStorage.setItem('item11kosuu', item11kosuu)
    localStorage.setItem('item12kosuu', item12kosuu)
    localStorage.setItem('item13kosuu', item13kosuu)
    localStorage.setItem('item14kosuu', item14kosuu)
    localStorage.setItem('item15kosuu', item15kosuu)

    localStorage.setItem('item1bairitu', item1bairitu)
    localStorage.setItem('item2bairitu', item2bairitu)
    localStorage.setItem('item3bairitu', item3bairitu)
    localStorage.setItem('item4bairitu', item4bairitu)
    localStorage.setItem('item5bairitu', item5bairitu)
    localStorage.setItem('item6bairitu', item6bairitu)
    localStorage.setItem('item7bairitu', item7bairitu)
    localStorage.setItem('item8bairitu', item8bairitu)
    localStorage.setItem('item9bairitu', item9bairitu)
    localStorage.setItem('item10bairitu', item10bairitu)
    localStorage.setItem('item11bairitu', item11bairitu)
    localStorage.setItem('item12bairitu', item12bairitu)
    localStorage.setItem('item13bairitu', item13bairitu)
    localStorage.setItem('item14bairitu', item14bairitu)
    localStorage.setItem('item15bairitu', item15bairitu)

    localStorage.setItem('bairitu', bairitu)

    localStorage.setItem('sirokumaOneClick', sirokumaOneClick)

    localStorage.setItem('shopname', shopname)

    console.log('旧データのサンプルを書き込みました')
}

function dataUpdate(){
    oldData = Number(localStorage.getItem('sirokumaSuu'))

    if(oldData === undefined){}
    else{
            sirokumaSuu = localStorage.getItem('sirokumaSuu')
            sirokumaSuuRuikei = localStorage.getItem('sirokumaSuuRuikei')
            sirokumaSuuRuikeiHerasu = localStorage.getItem('sirokumaSuuRuikeiHerasu')
        
            waribiki = localStorage.getItem('waribiki')
            sirokumaOneClick = localStorage.getItem('sirokumaOneClick')
        
            skill1kakutoku = localStorage.getItem('skill1kakutoku')
            skill2kakutoku = localStorage.getItem('skill2kakutoku')
            skill3kakutoku = localStorage.getItem('skill3kakutoku')
            skill4kakutoku = localStorage.getItem('skill4kakutoku')
            skill5kakutoku = localStorage.getItem('skill5kakutoku')
            skill6kakutoku = localStorage.getItem('skill6kakutoku')
            skill7kakutoku = localStorage.getItem('skill7kakutoku')
            skill8kakutoku = localStorage.getItem('skill8kakutoku')
            skill9kakutoku = localStorage.getItem('skill9kakutoku')
            skill10kakutoku = localStorage.getItem('skill10kakutoku')
            skill11kakutoku = localStorage.getItem('skill11kakutoku')
            skill12kakutoku = localStorage.getItem('skill12kakutoku')
            skill13kakutoku = localStorage.getItem('skill13kakutoku')
            skill14kakutoku = localStorage.getItem('skill14kakutoku')
            skill15kakutoku = localStorage.getItem('skill15kakutoku')
        
            item1nedan = localStorage.getItem('item1nedan')
            item1kosuu = localStorage.getItem('item1kosuu')
            item1bairitu = localStorage.getItem('item1bairitu')
        
            item2nedan = localStorage.getItem('item2nedan')
            item2kosuu = localStorage.getItem('item2kosuu')
            item2bairitu = localStorage.getItem('item2bairitu')
        
            item3nedan = localStorage.getItem('item3nedan')
            item3kosuu = localStorage.getItem('item3kosuu')
            item3bairitu = localStorage.getItem('item3bairitu')
        
            item4nedan = localStorage.getItem('item4nedan')
            item4kosuu = localStorage.getItem('item4kosuu')
            item4bairitu = localStorage.getItem('item4bairitu')
        
            item5nedan = localStorage.getItem('item5nedan')
            item5kosuu = localStorage.getItem('item5kosuu')
            item5bairitu = localStorage.getItem('item5bairitu')
        
            item6nedan = localStorage.getItem('item6nedan')
            item6kosuu = localStorage.getItem('item6kosuu')
            item6bairitu = localStorage.getItem('item6bairitu')
        
            item7nedan = localStorage.getItem('item7nedan')
            item7kosuu = localStorage.getItem('item7kosuu')
            item7bairitu = localStorage.getItem('item7bairitu')
        
            item8nedan = localStorage.getItem('item8nedan')
            item8kosuu = localStorage.getItem('item8kosuu')
            item8bairitu = localStorage.getItem('item8bairitu')
        
            item9nedan = localStorage.getItem('item9nedan')
            item9kosuu = localStorage.getItem('item9kosuu')
            item9bairitu = localStorage.getItem('item9bairitu')
        
            item10nedan = localStorage.getItem('item10nedan')
            item10kosuu = localStorage.getItem('item10kosuu')
            item10bairitu = localStorage.getItem('item10bairitu')
        
            item11nedan = localStorage.getItem('item11nedan')
            item11kosuu = localStorage.getItem('item11kosuu')
            item11bairitu = localStorage.getItem('item11bairitu')
        
            item12nedan = localStorage.getItem('item12nedan')
            item12kosuu = localStorage.getItem('item12kosuu')
            item12bairitu = localStorage.getItem('item12bairitu')
        
            item13nedan = localStorage.getItem('item13nedan')
            item13kosuu = localStorage.getItem('item13kosuu')
            item13bairitu = localStorage.getItem('item13bairitu')
        
            item14nedan = localStorage.getItem('item14nedan')
            item14kosuu = localStorage.getItem('item14kosuu')
            item14bairitu = localStorage.getItem('item14bairitu')
        
            item15nedan = localStorage.getItem('item15nedan')
            item15kosuu = localStorage.getItem('item15kosuu')
            item15bairitu = localStorage.getItem('item15bairitu')
            
            sirokumaOneClick = localStorage.getItem('sirokumaOneClick')
            bairitu = localStorage.getItem('bairitu')
            shopname = localStorage.getItem('shopname')
        
            
            
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
        
            bairitu = Number(bairitu)
        
            sirokumaOneClick = Number(sirokumaOneClick)
            
            updateHyouji();
            itemAllLoad();
            changeShopUpdate();
        
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

            exportbuffer = '{"sirokumaSuu": ' + sirokumaSuu + ', "sirokumaSuuRuikei": ' + sirokumaSuuRuikei + ', "sirokumaSuuRuikeiHerasu": ' + sirokumaSuuRuikeiHerasu + ', "waribiki": ' + waribiki + ', "sirokumaOneClick": ' + sirokumaOneClick+ ', "skill1kakutoku": ' + skill1kakutoku+ ', "skill2kakutoku": ' + skill2kakutoku+ ', "skill3kakutoku": ' + skill3kakutoku+ ', "skill4kakutoku": ' + skill4kakutoku+ ', "skill5kakutoku": ' + skill5kakutoku+ ', "skill6kakutoku": ' + skill6kakutoku+ ', "skill7kakutoku": ' + skill7kakutoku+ ', "skill8kakutoku": ' + skill8kakutoku+ ', "skill9kakutoku": ' + skill9kakutoku + ', "skill10kakutoku": ' + skill10kakutoku+ ', "skill11kakutoku": ' + skill11kakutoku+ ', "skill12kakutoku": ' + skill12kakutoku+ ', "skill13kakutoku": ' + skill13kakutoku+ ', "skill14kakutoku": ' + skill14kakutoku + ', "skill15kakutoku": ' + skill15kakutoku + ', "item1nedan": ' + item1nedan + ', "item2nedan": ' + item2nedan + ', "item3nedan": ' + item3nedan + ', "item4nedan": ' + item4nedan + ',"item5nedan": ' + item5nedan + ', "item6nedan": ' + item6nedan + ', "item7nedan": ' + item7nedan + ', "item8nedan": ' + item8nedan + ', "item9nedan": ' + item9nedan + ', "item10nedan": ' + item10nedan + ', "item11nedan": ' + item11nedan + ', "item12nedan": ' + item12nedan + ', "item13nedan": ' + item13nedan + ', "item14nedan": ' + item14nedan;
    
            exportbuffer2 = ', "item15nedan": ' + item15nedan+ ', "item1kosuu": ' + item1kosuu + ', "item2kosuu": ' + item2kosuu + ', "item3kosuu": ' + item3kosuu + ', "item4kosuu": ' + item4kosuu + ', "item5kosuu": ' + item5kosuu + ', "item6kosuu": ' + item6kosuu + ', "item7kosuu": ' + item7kosuu + ', "item8kosuu": ' + item8kosuu + ', "item9kosuu": ' + item9kosuu + ', "item10kosuu": ' + item10kosuu + ', "item11kosuu": ' + item11kosuu + ', "item12kosuu": ' + item12kosuu + ', "item13kosuu": ' + item13kosuu + ', "item14kosuu": ' + item14kosuu + ', "item15kosuu": ' + item15kosuu+ ', "item1bairitu": ' + item1bairitu + ', "item2bairitu": ' + item2bairitu + ', "item3bairitu": ' + item3bairitu + ', "item4bairitu": ' + item4bairitu + ', "item5bairitu": ' + item5bairitu + ', "item6bairitu": ' + item6bairitu + ', "item7bairitu": ' + item7bairitu + ', "item8bairitu": ' + item8bairitu + ', "item9bairitu": ' + item9bairitu + ', "item10bairitu": ' + item10bairitu + ', "item11bairitu": ' + item11bairitu + ', "item12bairitu": ' + item12bairitu + ', "item13bairitu": ' + item13bairitu + ', "item14bairitu": ' + item14bairitu + ', "item15bairitu": ' + item15bairitu;
            
            exportbuffer3 = ', "shopname": ' + shopname + '}'
        
            exportbufferfinal = exportbuffer + exportbuffer2 + exportbuffer3;

            console.log(exportbufferfinal);
            exportBASE64 = window.btoa(exportbufferfinal);

            localStorage.clear();

            dataImport(exportBASE64);
        }
    }
