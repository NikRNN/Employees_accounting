## Структура проекта

**Основные каталоги**

```
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── App/
│   │   ├── AppFilter/
│   │   ├── AppHeader/
│   │   ├── EmployeesAddForm/
│   │   ├── EmployeesList/
│   │   ├── EmployeesListItem/
│   │   └── SearchPanel/
│   ├── screenshots/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js



```

=======

![Интерфейс приложения](./src/screenshots/screenshot1.png)
![Сотрудники на повышение](./src/screenshots/screenshot2.png)
![Сотрудники с зарплатой более 100 000 руб.](./src/screenshots/screenshot3.png)
![Добавление нового сотрудника](./src/screenshots/screenshot4.png)

**О проекте**

Простое React-приложение для учёта сотрудников с возможностью поиска, фильтрации, добавления и удаления сотрудников. Также реализовано выделение сотрудников с премией и повышением.

**Технологии**

- Vite
- React (классовые компоненты, react-dom)
- uuid
- CSS
- eslint (eslint-plugin-react-hooks, eslint-plugin-react-refresh)

**Установка**

```
git clone https://github.com/NikRNN/Employees_accounting.git
cd Employees_accounting
npm install
npm run dev
```
