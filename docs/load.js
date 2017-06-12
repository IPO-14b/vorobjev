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
    var rg = new ReportGenerator("");
    $('.add-course-form').hide();
    $('.editor-wrapper').hide();
    $('#add-course').click(function() {
        $('.add-course-form').show();
    });
    $('#add-course-start').click(function() {
        var key = $('.add-course-form #key').val();
        var name = $('.add-course-form #name').val();
        rg.addCourse(key, name);
        $('.add-course-form').hide();
    });
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
