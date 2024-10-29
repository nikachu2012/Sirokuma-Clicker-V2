function dataExport() {

    exportbuffer = {
        "sc": sirokumaSuu,
        "scr": sirokumaSuuRuikei,
        "scrm": sirokumaSuuRuikeiHerasu,
        "wari": waribiki,
        "s1c": sirokumaOneClick,
        "skget": skillKakutoku,
        "itcos": itemcost,
        "itcnt": itemcount,
        "itrat": itemRatio,
        "sn": encodeURIComponent(shopname),
        "cc": sirokumaClicks,
        "sbc": sirokumaSuuByC,
        "startDate":startDate
    }

    exportBASE64 = window.btoa(JSON.stringify(exportbuffer));
    console.log(exportBASE64)

    return (exportBASE64)
}
let startDate = Math.floor(Date.now() / 1000)

function dataImport(ImportData) {
    try {
        loadBASE64 = window.atob(ImportData)
        jsonObject = JSON.parse(loadBASE64);
        console.log(jsonObject)


        sirokumaSuu = jsonObject.sc;
        sirokumaSuuRuikei = jsonObject.scr;
        sirokumaSuuRuikeiHerasu = jsonObject.scrm;

        waribiki = jsonObject.wari;
        sirokumaOneClick = jsonObject.s1c;

        skillKakutoku = jsonObject.skget
        itemcost = jsonObject.itcos
        itemcount = jsonObject.itcnt
        itemRatio = jsonObject.itrat
        shopname = decodeURIComponent(jsonObject.sn);
        



        for (let index = 0; index < 15; index++) {
            if (skillKakutoku[index] == 1) {
                document.getElementById(`skill${index}kakutokuDesc`).innerHTML = "獲得済み";
            }
        }

        updateHyouji();
        itemAllLoad();

        x1push();

        document.getElementById('shopNameArea').textContent = shopname
        itemcost.forEach((e, i) => {
            if (i === 0) { }
            else {
                itemBonusList.push(itemcount[i] * itemParBonus[i] * itemRatio[i])
                Sps += itemcount[i] * itemParBonus[i] * itemRatio[i]
            }
        })

        return true;
    } catch (error) {
        console.error(error)
        const confirmResult = window.confirm("読み込みに失敗しました。\n旧バージョンのセーブデータがある場合はOKを選択してください。")
        if (confirmResult) {
            convertOldSavedata(ImportData);
            return false;
        }
        else {
            // 何もしない
            return false;
        }
    }

}


setInterval(() => {
    dataSave()
}, 60000);

function dataSave() {
    try {
        localStorage.setItem('saveDataNew', dataExport())

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["success"]("セーブしました")
    } catch (error) {
        console.error(error)
        alert("セーブできませんでした。")
    }

}


function dataRemove() {
    var result = window.confirm('この操作を行うとデータが削除され、ページが再読み込みされます。よろしいですか？')
    if (result) {
        localStorage.clear();
        window.location.reload();
    }
    else {
        // 何もしない
    }
}


