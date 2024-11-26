

const refreshToukei = ()=>{
    let keika_jikan = []
    let now_Date = Math.floor(Date.now() / 1000)
    keika_jikan[10] = Math.floor(now_Date-startDate)
    keika_jikan[0] = Math.floor(keika_jikan[10] / 31536000)
    keika_jikan[1] = Math.floor(keika_jikan[10] % 31536000 / 86400)
    keika_jikan[10] = keika_jikan[10] % 31536000 % 86400
    keika_jikan[2] = Math.floor(keika_jikan[10] / 3600)
    keika_jikan[3] = Math.floor(keika_jikan[10] % 3600 / 60)
    keika_jikan[4] = Math.floor(keika_jikan[10] %3600 % 60 % 60)
 



    let toukei_content = document.querySelectorAll(".toukei-value")
    toukei_content[0].textContent = sirokumaSuu
    toukei_content[1].textContent = sirokumaSuuRuikei
    toukei_content[2].textContent = sirokumaSuuRuikeiHerasu
    toukei_content[3].textContent = `${keika_jikan[0]}年${keika_jikan[1]}日${keika_jikan[2]}時間${keika_jikan[3]}分${keika_jikan[4]}秒`
    toukei_content[4].textContent = Sps
    toukei_content[5].textContent = sirokumaOneClick
    toukei_content[6].textContent = sirokumaClicks
    toukei_content[7].textContent = sirokumaSuuByC
    toukei_content[8].textContent = clicker_version



}
const addJisseki = ()=>{

}
upgradeColor = ["red","pink","purple","blueviolet","loyalblue","blue","lightblue","cyan","teal","green","limegreen","lime","yellow","orange","brown"]
