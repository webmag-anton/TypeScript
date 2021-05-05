/* 

npx create-react-app appName --template typescript

удаляем все не нужное из созданного проекта: тесты, svg...

подключаю materialize стили (можно было и с помощью npm поставить):
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
Import Google Icon Font:
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

создаю components\Navbar.tsx и вставляю разметку из https://materializecss.com/navbar.html + импортирую компонент в App.tsx

создаю components\TodoForm.tsx + импортирую компонент в App.tsx

state будем хранить в главном компоненте TodoForm.tsx


      Декларативные файлы: 

https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
https://metanit.com/web/typescript/4.1.php
  Для установки связи с внешними файлами скриптов javascript в TS служат декларативные 
или заголовочные файлы. Это файлы с расширением .d.ts, они описывают синтаксис и 
структуру функций и свойств, которые могут использоваться в программе, не предоставляя 
при этом конкретной реализации.
d.ts - d означает declaration; когда ts будет компилировать файлы с 
       таким расширением, он не создаст никакого функционала; обычно
       в таких файлах присутствуют интерфейсы, позволяющие соединить JS и TS


*/