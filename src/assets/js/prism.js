console.log(' %c Maverick By AlanDecode %c https://www.imalan.cn/ ', 'color: #fadfa3; background: #23b7e5; padding:5px;', 'padding:5px;');
console.log(' %c Prism Theme By Zeee %c https://reedo0910.github.io/Prism-Blog/ ', 'color: #fff; background: #444; padding:5px;', 'padding:5px;');

document.addEventListener('DOMContentLoaded', function() {
    (function() {
        var domain = document.domain;
        var els = document.getElementsByTagName('a');
        for (var index = 0; index < els.length; index++) {
            var element = els[index];
            var target = element.getAttribute('target');
            if (typeof target === 'undefined' || (target != '' && target != '_self')) {
                if (element.host != domain) {
                    element.setAttribute('target', '_blank');
                    element.setAttribute('rel', 'noopener noreferrer nofollow')
                }
            }
        }

    })();

    (function() {
        var figures = document.querySelectorAll('figure');

        for (var i = 0; i < figures.length; i++) {
            (function() {
                var figure = figures[i];

                if (figure.hasAttribute('size-undefined')) {
                    var img = new Image();
                    img.src = figure.getElementsByTagName('img')[0].src;
                    img.parentFigure = figure;

                    img.onload = function() {
                        var parent = this.parentFigure;
                        parent.removeAttribute('size-undefined');
                        var w = parseFloat(this.width);
                        var h = parseFloat(this.height);
                        parent.style.flexGrow = String(w * 50 / h);
                        if (h > w) {
                            parent.className += ' vertical-figure';
                        }
                    };
                }
            })();
        }
    })();

    // set cover
    // (function() {
    //     var articleItems = document.getElementById('prism__post-list').querySelectorAll('.prism-post-item');
    //     var articleContent = document.getElementById('prism__content');

    //     if (articleItems && articleItems.length > 0) {
    //         for (var i = 0; i < articleItems.length; i++) {
    //             (function() {
    //                 var itemCover = articleItems[i].querySelector('div.prism-content > div.notice + figure');
    //                 if (itemCover) {
    //                     itemCover.className += ' cover-figure';
    //                 } else {
    //                     var itemTag = articleItems[i].querySelector('div.prism-content').querySelector('*');
    //                     if (itemTag.tagName.toLowerCase() === 'figure') {
    //                         itemTag.className += ' cover-figure';
    //                     }
    //                 }
    //             })();
    //         }
    //     }

    //     if (articleContent) {
    //         var articleCover = articleContent.querySelector('div.prism-content-body > div.notice + figure');
    //         if (articleCover) {
    //             articleCover.className += ' cover-figure';
    //         } else {
    //             var postTag = querySelector('div.prism-content-body').querySelector('*');
    //             if (postTag.tagName.toLowerCase() === 'figure') {
    //                 postTag.className += ' cover-figure';
    //             }
    //         }
    //     }

    // })();

    (function() {
        var tuneBilibili = function() {
            var iframes = document.getElementsByTagName('iframe');

            for (var index = 0; index < iframes.length; index++) {
                var iframe = iframes[index];
                var src = iframe.src;

                if (typeof src === 'string' && src.indexOf('player.bilibili.com') > -1) {
                    iframe.classList.add('bili-player');

                    if (src.indexOf('&high_quality') < 0) {
                        src += '&high_quality=1'; // enable high quality
                        iframe.setAttribute('src', src);
                    }

                    // by default 9:16
                    var height = iframe.clientWidth * 0.5625;

                    // is aspect ratio is explicitly specified
                    if (iframe.getAttribute('data-ratio') != undefined)
                        height = parseFloat(iframe.getAttribute('data-ratio')) * iframe.clientWidth;

                    // show control panel with screen wider than 540
                    if (window.innerWidth >= 540)
                        height += 120;

                    iframe.style.height = height + 'px';
                }
            }
        };

        tuneBilibili();
        window.addEventListener('resize', tuneBilibili);
    })();

    // init all DPlayer
    (function() {
        var dplayers = document.getElementsByClassName('dplayer');
        for (var index = 0; index < dplayers.length; index++) {
            var el = dplayers[index];
            if (!el.hasAttribute('data-url'))
                continue;

            var options = {
                container: el,
                autoplay: el.dataset.autoplay || false,
                theme: el.dataset.theme || '#b7daff',
                loop: el.dataset.loop || false,
                lang: el.dataset.lang || navigator.language.toLowerCase(),
                screenshot: el.dataset.screenshot || false,
                hotkey: el.dataset.hotkey || true,
                preload: el.dataset.hotkey || 'auto',
                volume: 0.7,
                mutex: el.dataset.mutex || true,
                video: {
                    url: el.dataset.url,
                    pic: el.dataset.pic || '',
                    thumbnails: el.dataset.thumbnails || '',
                    type: el.dataset.type || 'auto',
                }
            }

            if (typeof el.dataset.subtitle === 'string') {
                options.subtitle = JSON.parse(el.dataset.subtitle)
            }
            if (typeof el.dataset.danmaku === 'string') {
                options.danmaku = JSON.parse(el.dataset.danmaku)
            }
            if (typeof el.dataset.highlight === 'string') {
                options.highlight = JSON.parse(el.dataset.highlight)
            }

            var contextmenu = [];
            if (typeof el.dataset.contextmenu === 'string') {
                contextmenu = JSON.parse(el.dataset.contextmenu)
            }
            contextmenu.push({
                text: 'Maverick',
                link: 'https://github.com/AlanDecode/Maverick',
            }, {
                text: 'AlanDecode',
                link: 'https://www.imalan.cn',
            });
            options.contextmenu = contextmenu;

            console.log(options);

            new DPlayer(options);
        }
    })();
});
