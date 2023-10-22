bulidHyouji = 0;

settingHyouji = 0;
function showSetting(){
    var hyoujiText = `
    <div class="centerContents-center">
        <div class="tojiruButton" onclick="showSetting()"><i class="fas fa-times" style="color: white; font-size:x-large;"></i></div>
        <div class="centerContents-title contents_text"><span class="centerContents-titletext">設定</span></div><br>
        <div>
            <div class="contents_text"><span class="centerContents-head2">一般設定</span></div>
            <div class="centerContents-contents">
                <button onclick="dataSave();">今すぐセーブ</button>&nbsp;&nbsp;<i class="fas fa-info-circle"></i>今すぐセーブができます。<br>
                <button onclick="dataExport_button();">セーブを書き出し</button>&nbsp;<button onclick="dataImport_button();">セーブの読み込み</button>&nbsp;&nbsp;<i class="fas fa-info-circle"></i>セーブの書き出しと読み込みができます。<br>
                <button onclick="dataExport_File();">セーブをファイルで保存</button>&nbsp;<button onclick="dataImport_file();">ファイルからセーブを読み込み</button><br>
                <div style="border: 1px solid red; margin-top: 5px; padding: 5px 5px 5px 5px;">
                    <span style="color: red;">=== 危険 ===</span>
                    <button onclick="dataRemove();">セーブを削除</button>&nbsp;&nbsp;<span style="color: red;"><i class="fas fa-exclamation-circle"></i>この操作をするとデータが削除されます。</span>
                </div>
            </div>
        </div>
    </div>
    `

    if(settingHyouji == 0){
        infoHyouji = 0;
        document.getElementById('clickerw-centerContents').innerHTML = hyoujiText;
        settingHyouji = 1;
    }
    else{
        document.getElementById('clickerw-centerContents').innerHTML = ''
        settingHyouji = 0;
    }
}
