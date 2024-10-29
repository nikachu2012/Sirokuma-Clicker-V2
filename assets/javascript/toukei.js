

const refreshToukei = ()=>{
    let keika_jikan = []
    let start_date = localStorage.getItem("startDate")
    let now_Date = Math.floor(Date.now() / 1000)
    keika_jikan[10] = Math.floor(now_Date-start_date)
    keika_jikan[0] = Math.floor(keika_jikan[10] / 31536000)
    keika_jikan[1] = Math.floor(keika_jikan[10] % 31536000 / 86400)
    keika_jikan[10] = keika_jikan[10] % 31536000 % 86400
    keika_jikan[2] = Math.floor(keika_jikan[10] / 3600)
    keika_jikan[3] = Math.floor(keika_jikan[10] % 3600 / 60)
    keika_jikan[4] = Math.floor(keika_jikan[10] %3600 % 60 % 60)
    console.log(keika_jikan)
    


    let toukei_content = document.querySelectorAll(".toukei-value")
    toukei_content[0].textContent = sirokumaSuu
    toukei_content[1].textContent = sirokumaSuuRuikei
    toukei_content[2].textContent = sirokumaSuuRuikeiHerasu
    


}
upgradeColor = ["red","pink","purple","blueviolet","loyalblue","blue","lightblue","cyan","teal","green","limegreen","lime","yellow","orange","brown"]