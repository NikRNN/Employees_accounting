## Структура проекта

**Основные каталоги**

```
public/
├── favicon.ico
├── index.html

src/
├── components/
│ ├── AppFilter/ # Компоненты фильтрации сотрудников
│ ├── AppInfo/ # Общая информация о сотрудниках
│ ├── EmployeesAddForm/ # Форма добавления сотрудников
│ ├── EmployeesList/ # Список сотрудников
│ ├── EmployeesListItem/ # Отдельный элемент списка
│ └── SearchPanel/ # Панель поиска
├── App.js # Основной компонент приложения
├── index.js # Точка входа
├── index.css # Стили приложения


```

=======

![Интерфейс приложения](./screenshots/screenshot1.png)
![Интерфейс приложения](./screenshots/screenshot2.png)
![Интерфейс приложения](./screenshots/screenshot3.png)
![Интерфейс приложения](./screenshots/screenshot4.png)

**О проекте**

Простое React-приложение для учёта сотрудников с возможностью поиска, фильтрации, добавления и удаления сотрудников. Также реализовано выделение сотрудников с премией и повышением.

**Технологии**

- React (классовые компоненты)
- JavaScript
- CSS
- vite

**Установка**

```
git clone https://github.com/NikRNN/Employees_accounting.git
cd Employees_accounting
npm install
npm run dev
```
