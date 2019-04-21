import './index.less';

function tick() {
    var $time = document.getElementById('js-time');
    $time.textContent = (new Date()).toLocaleString();
    setTimeout(tick, 1000);
}

tick();