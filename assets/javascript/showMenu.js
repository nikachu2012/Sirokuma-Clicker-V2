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


settingHyouji = 0;
function showSetting(){
    var hyoujiText = `
    <div class="centerContents-center">
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
            <br>
            <div class="contents_text"><span class="centerContents-head2">高度な設定</span></div>
            <div class="centerContents-contents">
                カスタムCSS
            </div>
        </div>
    </div>
    `

    if(settingHyouji == 0){
        document.getElementById('clickerw-centerContents').innerHTML = hyoujiText;
        settingHyouji = 1;
    }
    else{
        document.getElementById('clickerw-centerContents').innerHTML = ''
        settingHyouji = 0;
    }
}

infoHyouji = 0;
function showInfo(){
    var hyoujiText = `
    <div class="centerContents-center">
        <div class="centerContents-title contents_text"><span class="centerContents-titletext">Information</span></div><br>                                                         
        <div>
            <div class="contents_text"><span class="centerContents-head2">しろくまクリッカーについて</span></div>
            <div class="centerContents-contents">
                <ul>
                    <li>このゲームは<a href="https://github.com/nikachu2012" style="color: white;">ニカチュウ</a>が制作しました。</li>
                    <li>ただいまデバッグ担当者を募集中です。やりたい方はDMに送ってください。今ならデバッグ担当をするとこのゲームにクレジットが表記されます。</li>
                    <li style="color: red;">注：バグを発見した際はニカチュウまでご報告ください。よろしくお願いします。</li>
                    <li>Copyright &copy; 2021 Nikachu All rights reserved.</li>
                </ul>
            </div>
            <h2 style="color: red;">このソフトウェアはベータ版です。まだ未実装が含まれており、完成版ではないことをご了承ください。2021/12/18 nikachu</h1>
        </div>
        <div>
            <div class="contents_text"><span class="centerContents-head2">更新履歴</span></div><br>

            <div class="contents_text"><span class="centerContents-head3">2021/12/18 version2.1.0.0 Public Beta 2.1</span></div>
            <div class="centerContents-contents">
                <ul>
                    <li>ポインターのスキルが正しく購入できない不具合を修正</li>
                </ul>
                2021.01.04 12:50 p.m. by nikachu<br><br>
            </div>

            <div class="contents_text"><span class="centerContents-head3">2021/12/18 version2.1.0.0 Public Beta 2</span></div>
            <div class="centerContents-contents">
                <ul>
                    <li>ファイルでのセーブ機能の追加</li>
                    <li>セーブの書き出し機能の追加</li>
                    <li>しろくまショップの名前変更機能の追加</li>
                    <li>スペルミスの修正</li>
                </ul>
                2021.12.25 04:27 a.m. by nikachu<br><br>
            </div>


            <div class="contents_text"><span class="centerContents-head3">2021/12/18 version2.1.0.0 Public Beta 1</span></div>
            <div class="centerContents-contents">
                <ul>
                    <li>初期版の公開</li>
                    <li>バージョン１の機能はほとんど搭載したつもりですが、コードをすべて書き直しているため、バグがあったらご報告ください。</li>
                    <li style="color: red;">まだポインター以外のスキルは実装されていません。</li>
                </ul>
            </div>


        </div>
    </div>
    `

    if(infoHyouji == 0){
        document.getElementById('clickerw-centerContents').innerHTML = hyoujiText;
        infoHyouji = 1;
    }
    else{
        document.getElementById('clickerw-centerContents').innerHTML = ''
        infoHyouji = 0;
    }
}