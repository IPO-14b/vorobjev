/**
 * generator.js
 *
 * Генератор markup разметки для отчетов
 *
 * Created on: June 12, 2017
 *     Author: Lev Vorobjev <lev>
 *      Email: lev.vorobjev@rambler.ru
 *
 * @Last modified by:   lev
 * @Last modified time: June 12, 2017
 */

/**
 * ReportGenerator
 *
 * Генератор отчетов по шаблону
 *
 * @author Lev Vorobjev
 * @param string template Шаблон
 */
function ReportGenerator(template) {
    this.template = template;
}

ReportGenerator.prototype.setTemplate = function (template) {
    this.template = template;
};

ReportGenerator.prototype.getMarkup = function (title, course, subject, author, curator) {
    var text = this.template;
    text = text.replace('(@title)', title);
    text = text.replace('(@course)', course);
    text = text.replace('(@subject)', subject);
    text = text.replace('(@author)', author);
    text = text.replace('(@curator)', curator);
    text = text.replace('(@year)', getFullYear(new Date()));
    return text;
};

module.exports = ReportGenerator;