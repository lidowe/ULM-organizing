// Upper Level Music — small site enhancements.

(function () {
    // Mobile nav toggle.
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.textContent = open ? 'Close' : 'Menu';
        });
    }

    // Footer year.
    var yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();

    // Prefill contact form from query string (e.g. ?topic=lesson, ?gear=SM7B).
    var params = new URLSearchParams(window.location.search);
    var topic = params.get('topic');
    var gear = params.get('gear');
    var topicSel = document.getElementById('topic');
    var msg = document.getElementById('message');

    if (topicSel && topic) {
        for (var i = 0; i < topicSel.options.length; i++) {
            if (topicSel.options[i].value === topic) {
                topicSel.selectedIndex = i;
                break;
            }
        }
    }
    if (msg && gear) {
        msg.value = "I'm interested in the " + gear + ". ";
        if (topicSel && !topic) {
            for (var j = 0; j < topicSel.options.length; j++) {
                if (topicSel.options[j].value === 'gear') {
                    topicSel.selectedIndex = j;
                    break;
                }
            }
        }
    }
})();
