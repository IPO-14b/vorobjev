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

/**
 * ReportGenerator.setTemplate
 *
 * Установка шаблона
 *
 * @param string template Шаблон
 */
ReportGenerator.prototype.setTemplate = function (template) {
    this.template = template;
};

/**
 * ReportGenerator.getMarkup
 *
 * Генерация разметки
 *
 * @param string title Название документа
 * @param string course Учебный курс
 * @param string subject Тема работы
 * @param string author Автор (студент)
 * @param string curator Преподаватель
 * @return Текст разметки
 */
ReportGenerator.prototype.getMarkup = function (title, course, subject, author, curator) {
    var text = this.template;
    text = text.replace('(@title)', title);
    text = text.replace('(@course)', course);
    text = text.replace('(@subject)', subject);
    text = text.replace('(@author)', author);
    text = text.replace('(@curator)', curator);
    text = text.replace('(@year)', new Date().getFullYear());
    return text;
};

module.exports = ReportGenerator;
