# WriteReport
Онлайн генератор шаблонов и редактор учебных отчетов в соответствии со стандартом ГОСТ 7.32-2001

## Возожности системы ##
* Генерация титульного листа по названию курса и номеру работы
* Добаление разделов в отчет
* Верстка страниц (вставка изображений, таблиц, формул, листингов программного кода)
* Автоматическая нумерация рисунков, таблиц, формул, листингов
* Экспорт отчета в DOC и PDF форматы

[UML](https://drive.google.com/file/d/0BznTR_PhCDnWcXB5TGgzcENCU0E/view?usp=sharing)

## Доступ к сервису ##
Рабочая версия редактора отчетов будет доступна конечному пользователю через сайт [www.write-report.tk](https://www.write-report.tk/)

## Компиляция проекта ##

Для компиляции проекта необходим [node.js](https://www.npmjs.com/) и
[grunt](http://gruntjs.com)

```bash
# Установка grunt
npm install grunt-cli -g

# Установка зависимостей
npm install

# Компиляция проекта
grunt transport
```

Для запуска проекта для разработки (авоматическая перекомпиляция
исходных кодов) выполните:

```bash
grunt build
```

Все скомпилированные файлы помещаются в каталог build

## Licensing disclaimer ##

Кодовая база основана на проекте https://github.com/lepture/editor
