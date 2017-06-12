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
     $('#editor').load('markdown.md',
         function(data) {
             var editor = new Editor();
             editor.render();
         }
     );
 })(Zepto);
