$(function clean() {

    var config = {
        "www.baidu.com": [
            'alert(1)',
        ],
        "xxxxxxx.com": [
            // lazy....
            `
            $("body > div:nth-child(5) > div > div > article > div.content.unsafe.md").removeAttr("style");
            var save = $("body > div:nth-child(5) > div");
            $('body').empty();
            $('body').html(save);
        
            $("body > div > div > div.no-padding").empty();
            $("body > div > div > article > header").empty();
            $("body > div._article-container > div > ul > li > a").empty();
            $("body > div._article-container > div > section").empty();
            $("#voters").empty();
            $("body > div > div > article > div._article-float.hidden-xs > div > div > aside").empty();
            $("body > div > div > article > footer").empty();
            $("#article-recommend").empty();
            `
        ],
        "www.jianshu.com": [
            `
            var header = $("head");
            var save = $("body > div.note > div.post > div.article");
            $('body').empty();
            $('body').html(header);
            $('body').html(save);
            `
        ]
    }

    if (config.hasOwnProperty(window.location.host) != -1) {
        config[window.location.host].forEach(function (c) {
            eval(c);
        });
    }

    if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
        window.PPClose = false;
        window.onbeforeunload = function () {
            if (window.PPClose === false) {
                return 'Leaving this page will block the parent window!\nPlease select "Stay on this Page option" and use the\nCancel button instead to close the Print Preview Window.\n';
            }
        }
        window.print();
        window.PPClose = true;
    }

});


    //  it has problem with use jsPDF when convert html to pdf 
    // var pdf = new jsPDF('p', 'pt', 'letter');
    // var width = 600;
    // document.body.style.width = width + "px";
    // pdf.html(document.body,0,0);
    // pdf.save('wocao.pdf');

