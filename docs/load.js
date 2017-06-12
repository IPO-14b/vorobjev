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
     $('#generator-form').hide();
     var rg = new ReportGenerator("");
     $.get('template.md', function(data){
         rg.setTemplate(data);
         alert( "Load was performed." );
     });
     $('#editor').load('markdown.md',
         function(data) {
             var editor = new Editor();
             editor.render();
         }
     );
 })(Zepto);
