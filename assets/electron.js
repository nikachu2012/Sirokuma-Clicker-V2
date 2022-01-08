window.nodeRequire = require;
delete window.module;

function urlopen(url){
    const {shell} = require('electron');
    shell.openExternal(url);
}