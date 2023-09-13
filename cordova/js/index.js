document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('batterystatus', onBatteryStatus, false);


function onDeviceReady(){
    //Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@'+cordova.platformPs)
    document.getElementById('deviceready').classList.add('ready');
}
function onBatteryStatus(status){
    const txt = `LEVEL: ${status.level} isPlugged: ${status.isPlugged} `
    console.log(txt)
}
