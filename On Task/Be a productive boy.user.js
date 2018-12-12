

// ==UserScript==
// @name         Be a productive boy
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Close bad sites
// @author       Viyi


// In firefox go to about:config, set dom.allow_scripts_to_close_windows to true
// Now add sites to block
// @include *reddit*
// @include *masterani*
// @include *4chan*
// @include *tumblr*
// @include *youtube*


// ==/UserScript==

(function() {
    'use strict';
    window.open('', '_self', '');
    window.close();
})();
