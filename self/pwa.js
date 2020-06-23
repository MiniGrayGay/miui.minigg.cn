Css = '<style type="text/css">.app-refresh{position:fixed;top:-2.2rem;left:0;right:0;z-index:99999;padding:0 1rem;font-size:15px;height:2.2rem;transition:all .3s ease}.app-refresh-wrap{display:flex;color:#fff;height:100%;align-items:center;justify-content:center}.app-refresh-wrap a{color:#fff;text-decoration:underline;cursor:pointer}</style>'
var pwaJoin = '<div class="app-refresh" id="app-refresh"> <div class="app-refresh-wrap"> <label>✨ 網站已更新最新版本 ������</label> <a href="javascript:void(0)" onclick="location.reload()">點擊刷新</a> </div></div><script>function showNotification(){if(GLOBAL_CONFIG.Snackbar){var t="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark,e=GLOBAL_CONFIG.Snackbar.position;Snackbar.show({text:"已更新最新版本",backgroundColor:t,duration:5e5,pos:e,actionText:"點擊刷新",actionTextColor:"#fff",onActionClick:function(t){location.reload()}})}else{var o=`top: 0; background: ${"light"===document.documentElement.getAttribute("data-theme")?"#49b1f5":"#1f1f1f"};`;document.getElementById("app-refresh").style.cssText=o}}"serviceWorker"in navigator&&(navigator.serviceWorker.controller&&navigator.serviceWorker.addEventListener("controllerchange",function(){showNotification()}),window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js")}));</script>'
  
function pwaInsert() {
    document.head.insertAdjacentHTML('beforeend', pwaCss);
    document.body.insertAdjacentHTML('beforeend', pwaJoin);
}
window.addEventListener('load', pwaInsert)
