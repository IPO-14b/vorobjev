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
    this.courses = {};
    this.curators = [];
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
 * ReportGenerator.addCourse
 * Добалвление нового курса в хранилище
 * @param string key Ключ записи
 * @param string name Название курса
 */
ReportGenerator.prototype.addCourse = function (key, name) {
    this.courses[key] = name;
};

/**
 * ReportGenerator.getCourses
 * Получение списка курсов
 * @return Список курсов
 */
ReportGenerator.prototype.getCourses = function () {
    return this.courses;
};

/**
 * ReportGenerator.addCurator
 * Добавление нового руководителя в хранилище
 * @param string name Имя преподавателя
 * @param string post Должность (асс. каф. | ст. преп. каф. )
 */
ReportGenerator.prototype.addCurator = function (name, post) {
    this.curators.push({"name": name, "post": post});
};

/**
 * ReportGenerator.getCurators
 * Получение списка руководителей
 * @return Список руководителей
 */
ReportGenerator.prototype.getCurators = function () {
    return this.curators;
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
