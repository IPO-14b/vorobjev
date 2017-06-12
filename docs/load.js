/**
 * load.js
 *
 * Created on: June 12, 2017
 *     Author: Lev Vorobjev <lev>
 *      Email: lev.vorobjev@rambler.ru
 *
 * @Last modified by:   lev
 * @Last modified time: June 13, 2017
 */


(function($) {
    var rg = new ReportGenerator("");
    /**
     * Загрузка списка курсов в selectbox
     */
    function loadCourselist() {
        $('.generator-form #course').empty();
        var courses = rg.getCourses();
        for (var i in courses) {
            $('.generator-form #course')
            .append('<option value="' + i + '">' + courses[i].name + '</option>');
        }
    }
    /**
     * Загрузка списка преподавателей в selectbox
     */
    function loadCuratorslist() {
        $('.add-course-form #curator').empty();
        rg.getCurators().forEach(function(item, i, arr) {
            $('.add-course-form #curator')
            .append('<option value="' + i + '">' + item.name + '</option>');
        });
    }
    /**
     * Загрузка списка курсов и преподавателей из localStorage
     */
    function loadLocalStorage() {
        rg.loadStorage();
        loadCourselist();
        loadCuratorslist();
    }
    $('.add-course-form').hide();
    $('.add-curator-form').hide();
    $('.editor-wrapper').hide();
    $('#add-course').click(function() {
        $('.add-course-form').show();
    });
    $('#add-course-start').click(function() {
        var key = $('.add-course-form #key').val();
        var name = $('.add-course-form #name').val();
        var curator = $('.add-course-form #curator').val();
        rg.addCourse(key, name, curator);
        $('.add-course-form').hide();
        rg.saveStorage();
        loadCourselist();
    });
    $('#add-curator').click(function() {
        $('.add-curator-form').show();
    });
    $('#add-curator-start').click(function() {
        var name = $('.add-curator-form #name').val();
        var post = $('.add-curator-form #post').val();
        rg.addCurator(name, post);
        $('.add-curator-form').hide();
        rg.saveStorage();
        loadCuratorslist();
    });
    $.get('template.md', function(data){
        rg.setTemplate(data);
    });
    $('#editor-start').click(function() {
        var course = $('.generator-form #course').val();
        var subject = $('.generator-form #subject').val();
        var author = $('.generator-form #author').val();
        var markup = rg.getMarkup(course, subject, author);
        $('#editor').html(markup);
        $('.generator-form').hide();
        var editor = new Editor();
        editor.render();
        $('.editor-wrapper').show();
    });
})(Zepto);
