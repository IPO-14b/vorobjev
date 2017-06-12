/**
 * load.js
 *
 * Created on: June 12, 2017
 *     Author: Lev Vorobjev <lev>
 *      Email: lev.vorobjev@rambler.ru
 *
 * @Last modified by:   lev
 * @Last modified time: June 12, 2017
 */


(function($) {
    $('.editor-wrapper').hide();
    var rg = new ReportGenerator("");
    $.get('template.md', function(data){
        rg.setTemplate(data);
    });
    $('#editor-start').click(function() {
        var title = $('.generator-form #title').val();
        var course = $('.generator-form #course').val();
        var subject = $('.generator-form #subject').val();
        var author = $('.generator-form #author').val();
        var curator = $('.generator-form #curator').val();
        var markup = rg.getMarkup(title, course, subject, author, curator);
        $('#editor').html(markup);
        $('.generator-form').hide();
        var editor = new Editor();
        editor.render();
        $('.editor-wrapper').show();
    });
})(Zepto);
