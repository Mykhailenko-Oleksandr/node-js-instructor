# Node.js

<details>
  <summary>Module 1</summary>
<ul>
    <li>
    <details>
    <summary>Ініціалізація Node.js-проєкта</summary>

# Ініціалізація Node.js-проєкта

Для створення проєкта необхідно переконатися, що на вашому комп’ютері встановлено Node.js. Для цього введіть у терміналі команду для перевірки його версії:

- <em>node --version</em>

Якщо у терміналі ви побачите щось на кшталт v18.17.0 (або новішу версію), значить Node.js уже встановлено. Якщо ж отримаєте відповідь command not found: node, тоді потрібно завантажити та встановити LTS-версію з офіційного сайту.

Для роботи з Node.js-застосунками використовується npm — менеджер пакетів.

1. У терміналі створіть папку проєкта з будь-якою назвою:

mkdir nodejs-app

2. Перейдіть у створену папку:

cd nodejs-app

3. Ініціалізуйте npm:

- <em>npm init -y</em>

З’явиться файл package.json із базовою інформацією про проєкт. Додамо сучасний режим ESM (щоб можна було використовувати import/export), додавши властивість "type": "module".

<em>
<details>
<summary>{ </br>
"name": "nodejs-app", </br>
"version": "1.0.0", </br></summary>
"description": "", </br>
"main": "src/index.js", </br>
// Додали нову властивість type </br>
"type":"module", </br>
"scripts": { </br>
"test": "echo \\"Error: no test specified\\" && exit 1" </br>
}, </br>
"keywords": [], </br>
"author": "", </br>
"license": "ISC" </br>
}
</details>
</em>
</details>
</li>

<li>
<details>
<summary>Виконання JS поза браузером</summary>

# Виконання JS поза браузером

Створимо папку src, де зберігатиметься весь код, і додамо у ній перший файл index.js з таким вмістом:

<em>
  // src/index.js

const message = 'Hello world';

console.log(message);
</em>

JavaScript-код можна виконати за допомогою команди node, вказавши після неї шлях до файлу, який потрібно запустити:

node src/index.js

У терміналі побачимо результат:

Hello world

## Nodemon

Незручно щоразу після змін у коді вручну запускати JavaScript-файл або сервер, щоб перевірити результат. Щоб автоматизувати цей процес, використаємо пакет nodemon, який автоматично перезапускає застосунок після змін у файлах.

Встановіть його як залежність для розробки командою:

- <em>npm install -D nodemon</em>

Додайте скрипт у файл package.json:

<em>
  // package.json </br>
   </br>
  { </br>
  "scripts": { </br>
  "dev": "nodemon src/index.js" </br>
  } </br>
  } </br>
</em>
 </br>
Тепер ви можете запускати застосунок за допомогою команди:

- <em>npm run dev</em>

При збереженні змін у JavaScript-файлах він буде автоматично перезапускатися.

</details>
</li>
<li>
<details>
<summary>Налаштування робочого середовища</summary>

# Налаштування робочого середовища

Додайте в кореневу папку проєкта конфігураційні файли та встановіть відповідні розширення для VSCode.

## EditorConfig

Встановіть розширення EditorConfig та створіть файл <strong>.editorconfig</strong>. Він забезпечує однакові відступи, кодування й кінцівки рядків у різних редакторах. Такі налаштування допомагають уникнути проблем, пов’язаних із різницею символів кінця рядка між різними операційними системами.

<em>
  <details>
  <summary>root = true </br>
  </br>
  [*] </br></summary>
  charset = utf-8 </br>
  end_of_line = lf </br>
  insert_final_newline = true </br>
  indent_style = space </br>
  indent_size = 2 </br>
  trim_trailing_whitespace = true </br>
  </details>
</em>

## Prettier

Встановіть розширення Prettier та додайте файл <strong>.prettierrc</strong>, у якому зберігатимуться налаштування для форматування коду.

<em>
  <details>
  <summary>{ </br>
"semi": true, </br>
"singleQuote": true, </br></summary>
 "trailingComma": "all", </br>
"printWidth": 80, </br>
"tabWidth": 2, </br>
"useTabs": false, </br>
"arrowParens": "always", </br>
"bracketSpacing": true, </br>
"endOfLine": "lf" </br>
} </br>
  </details>
</em>

## ESLint

Лінтинг коду відповідно до стандарту — важлива складова кожного проєкта. Він дозволяє задати єдиний стиль написання коду для всієї команди та контролювати дотримання певних кращих практик.

Для роботи з ESLint у VS Code потрібно встановити розширення ESLint.

У наступному відео розглянемо етапи ініціалізації ESLint у проєкті командою:

npm init @eslint/config@latest

Замініть вміст свого файлу eslint.config.mjs наступним кодом. Ми трохи його доповнили під наші потреби, додавши властивість rules.

<em>
  <details>
  <summary>import js from "@eslint/js"; </br>
import globals from "globals"; </br>
import { defineConfig } from "eslint/config"; </br></summary>
  </br>
export default defineConfig([ </br>
{ </br>
files: ["**/*.{js,mjs,cjs}"], </br>
plugins: { js }, </br>
extends: ["js/recommended"], </br>
languageOptions: { globals: globals.node }, </br>
rules: { </br>
semi: "error", </br>
"no-unused-vars": ["error", { args: "none" }], </br>
"no-undef": "error", </br>
}, </br>
}, </br>
]); </br>
  </details>
</em>

## GitIgnore

Файл <strong>.gitignore</strong> використовується для вказання файлів і папок, які не повинні потрапляти в репозиторій Git.

<em>
<details>
<summary>.vscode </br>
.DS_Store </br>
.idea </br></summary>
 </br>
# Logs </br>
logs </br>
*.log </br>
npm-debug.log* </br>
yarn-debug.log* </br>
yarn-error.log* </br>
lerna-debug.log* </br>
 </br>
# Diagnostic reports (https://nodejs.org/api/report.html) </br>
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json </br>
 </br>
# Runtime data </br>
pids </br>
*.pid </br>
*.seed </br>
*.pid.lock </br>
 </br>
# Directory for instrumented libs generated by jscoverage/JSCover </br>
lib-cov </br>
 </br>
# Coverage directory used by tools like istanbul </br>
coverage </br>
*.lcov </br>
 </br>
# nyc test coverage </br>
.nyc_output </br>
 </br>
# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files) </br>
.grunt </br>
 </br>
# Bower dependency directory (https://bower.io/) </br>
bower_components </br>
 </br>
# node-waf configuration </br>
.lock-wscript </br>
 </br>
# Compiled binary addons (https://nodejs.org/api/addons.html) </br>
build/Release </br>
 </br>
# Dependency directories </br>
node_modules/ </br>
jspm_packages/ </br>
 </br>
# Snowpack dependency directory (https://snowpack.dev/) </br>
web_modules/ </br>
 </br>
# TypeScript cache </br>
*.tsbuildinfo </br>
 </br>
# Optional npm cache directory </br>
.npm </br>
 </br>
# Optional eslint cache </br>
.eslintcache </br>
 </br>
# Optional stylelint cache </br>
.stylelintcache </br>
 </br>
# Optional REPL history </br>
.node_repl_history </br>
 </br>
# Output of 'npm pack' </br>
*.tgz </br>
 </br>
# Yarn Integrity file </br>
.yarn-integrity </br>
 </br>
# dotenv environment variable files </br>
.env </br>
.env.* </br>
!.env.example </br>
 </br>
# parcel-bundler cache (https://parceljs.org/) </br>
.cache </br>
.parcel-cache </br>
 </br>
# Next.js build output </br>
.next </br>
out </br>
 </br>
# Nuxt.js build / generate output </br>
.nuxt </br>
dist </br>
 </br>
# Gatsby files </br>
.cache/ </br>
# Comment in the public line in if your project uses Gatsby and not Next.js </br>
# https://nextjs.org/blog/next-9-1#public-directory-support </br>
# public </br>
 </br>
# vuepress build output </br>
.vuepress/dist </br>
 </br>
# vuepress v2.x temp and cache directory </br>
.temp </br>
.cache </br>
 </br>
# Sveltekit cache directory </br>
.svelte-kit/ </br>
 </br>
# vitepress build output </br>
**/.vitepress/dist </br>
 </br>
# vitepress cache directory </br>
**/.vitepress/cache </br>
 </br>
# Docusaurus cache and generated files </br>
.docusaurus </br>
 </br>
# Serverless directories </br>
.serverless/ </br>
 </br>
# FuseBox cache </br>
.fusebox/ </br>
 </br>
# DynamoDB Local files </br>
.dynamodb/ </br>
 </br>
# Firebase cache directory </br>
.firebase/ </br>
 </br>
# TernJS port file </br>
.tern-port </br>
 </br>
# Stores VSCode versions used for testing VSCode extensions </br>
.vscode-test </br>
 </br>
# yarn v3 </br>
.pnp.* </br>
.yarn/* </br>
!.yarn/patches </br>
!.yarn/plugins </br>
!.yarn/releases </br>
!.yarn/sdks </br>
!.yarn/versions </br>
 </br>
# Vite logs files </br>
vite.config.js.timestamp-* </br>
vite.config.ts.timestamp-* </br>
</details>
</em>
</details>
</li>

<li>
<details>
<summary>Вбудовані модулі Node.js</summary>

# Вбудовані модулі Node.js

У Node.js є набір вбудованих модулів, які доступні відразу без встановлення додаткових пакетів. Наприклад:

- node:os — інформація про операційну систему;
- node:http — створення веб-серверів;
- node:path — робота зі шляхами до файлів і папок;
- node:fs — робота з файловою системою.

У цьому розділі ми базово розглянемо роботу з файловою системою та формування шляхів.

## Модуль path

Модуль node:path допомагає працювати з файловими шляхами у різних операційних системах.

У Windows для побудови шляхів використовується роздільник \\, а у POSIX-системах (Linux, macOS) — /.

Щоб уникнути проблем із цими відмінностями, у Node.js варто використовувати методи модуля path, а не писати шляхи вручну.

Важливо! Модуль path не перевіряє, чи існує файл або папка. Він тільки допомагає правильно формувати шляхи.

### path.join(...paths)

Об’єднує частини шляху у правильний формат для поточної ОС.

<em>
<details>
<summary>import path from "node:path";

const somePath = path.join("some_folder", "some_file.txt");</summary>

// на macOS → 'some_folder/some_file.txt'
// на Windows → 'some_folder\\\\some_file.txt'

</details>
</em>

Можна вкладати виклики, щоб будувати складніші шляхи:

<em>
<details>
<summary>import path from "node:path";

// абсолютний шлях до робочої директорії
const pathToWorkDir = path.join(process.cwd());</summary>

// додаємо нові частини до шляху
const pathToFile = path.join(pathToWorkDir, "some_folder", "some_file.txt");

// macOS → /коренева*папка/some_folder/some_file.txt
// Windows → C:\\\\коренева*папка\\\\some_folder\\\\some_file.txt

</details>
</em>

Тут ми використали глобальну змінну process, а метод <strong>process.cwd()</strong> повертає абсолютний шлях до папки, з якої запущений процес Node.js.

### path.parse(path)

Розбирає рядок-шлях на складові частини:

<em>
<details>
  <summary>
    import path from "node:path"; </br>
    </br>
    // macOS </br>
    console.log(path.parse("/home/user/dir/file.txt")); </br></summary>
  /_
  { </br>
  root: '/', </br>
  dir: '/home/user/dir', </br>
  base: 'file.txt', </br>
  ext: '.txt', </br>
  name: 'file' </br>
  } </br>
  _/ </br>
 </br>
// Windows </br>
console.log(path.parse("C:\\\\path\\\\dir\\\\file.txt")); </br>
/_ </br>
{ </br>
root: 'C:\\\\', </br>
dir: 'C:\\\\path\\\\dir', </br>
base: 'file.txt', </br>
ext: '.txt', </br>
name: 'file' </br>
} </br>
_/
</details>
</em>
</br>
За потреби більше методів можна знайти у документації Node.js, але основні, які нам потрібні, ми вже розглянули.

## Модуль fs

Одна з головних можливостей Node.js — робота з файлами та папками. Для цього використовується вбудований модуль fs.

Багато його методів існують у двох варіантах:

- синхронні (readFileSync, writeFileSync), які блокують виконання коду;
- асинхронні (через fs/promises), які працюють із Promise і не блокують.

Синхронні методи іноді зручно застосувати, наприклад, щоб один раз зчитати конфігурацію на старті програми. У більшості випадків краще використовувати асинхронні версії.

### Читання файлу

<strong>fs.readFileSync(path, options)</strong> — синхронне читання вмісту файла. Приймає шлях до файлу та, за потреби, кодування ("utf8", "ascii" тощо). Якщо кодування не вказано, повертає Buffer, якщо вказано — звичайний рядок.

<em>
<details>
<summary>
      import fs from "node:fs"; </br>
 </br>
    // приклад без кодування </br>
    const buffer = fs.readFileSync("file.txt"); </br>
</summary>
  console.log(buffer); // <Buffer 48 65 6c 6c 6f ...> </br>
 </br>
  // приклад із кодуванням </br>
  const data = fs.readFileSync("file.txt", "utf8"); </br>
  console.log("Вміст файлу:", data); // "Hello" </br>
</details>
</em>
</br>
<strong>fs.readFile(path, options)</strong> — асинхронне читання вмісту файла. Приймає шлях і опції. Повертає Promise, який у разі успіху містить або Buffer, або рядок (залежно від того, чи вказано кодування).

<em>
 <details>
  <summary>
      import fs from "node:fs/promises"; </br>
     </br>
    // без кодування </br>
    const buffer = await fs.readFile("file.txt"); </br>
  </summary>
  console.log(buffer); // <Buffer ... > </br>
   </br>
  // з кодуванням </br>
  const data = await fs.readFile("file.txt", "utf8"); </br>
  console.log("Вміст файлу:", data); // "Hello" </br>
 </details>
</em>
</br>
У Node.js <strong>Buffer</strong> — це спеціальний тип даних для зберігання двійкової інформації (наприклад, вмісту файлів). Якщо потрібно працювати з текстом, достатньо вказати кодування, і тоді результатом буде звичайний рядок.

### Запис у файл

<strong>fs.writeFileSync(path, data, options)</strong> — синхронний запис у файл. Якщо файл існує — перезапише його, якщо ні — створить новий.

<em>
  import fs from "node:fs";

fs.writeFileSync("output.txt", "Привіт з Node.js!", "utf8");
</em>

<strong>fs.writeFile(path, data, options)</strong> — асинхронний запис у файл. Повертає Promise, що виконується після завершення операції.

<em>
  import fs from "node:fs/promises";

await fs.writeFile("output.txt", "Привіт з Node.js!", "utf8");
console.log("Дані успішно записані у файл.");
</em>

### Додавання у файл

<strong>fs.appendFile(path, data, options)</strong> — асинхронне додавання у файл. Дописує дані в кінець файлу.

<em>
  import fs from "node:fs/promises";

await fs.appendFile("output.txt", "\\nЩе один рядок", "utf8");
console.log("Дані успішно додані у файл.");
</em>

### Перейменування / переміщення файлів

<strong>fs.rename(oldPath, newPath)</strong> — асинхронне перейменування або переміщення файлу. Повертає Promise.

<em>
  import fs from "node:fs/promises";

await fs.rename("oldfile.txt", "newfile.txt");
console.log("Файл успішно перейменовано.");
</em>

### Видалення файлу

<strong>fs.unlink(path)</strong> — асинхронне видалення файлу. Повертає Promise.

<em>
  import fs from "node:fs/promises";

await fs.unlink("file.txt");
console.log("Файл успішно видалено.");
</em>

<strong>Підсумок</strong>

- path — для правильного формування шляхів у різних ОС.
- fs — для роботи з файлами та папками.
- Синхронні методи зручні для одноразових операцій (наприклад, читання конфігів на старті).
- В реальних застосунках використовуємо асинхронні методи (fs/promises), бо вони не блокують виконання.

Ці два модулі є базовими інструментами у Node.js, і розуміння їхньої роботи — перший крок до створення повноцінних серверних застосунків.

</details>
</li>
<li>
<details>
<summary>Тип даних Buffer</summary>

# Тип даних Buffer

При роботі з файловою системою ви часто будете бачити об’єкти типу Buffer. Це спеціальний тип даних у Node.js, призначений для роботи з двійковими даними.

- Біт — це найменша одиниця інформації: 0 або 1.
- Байт — це 8 бітів. У такій комбінації можна представити 256 різних значень.

<strong>Buffer</strong> у Node.js — це масив байтів. Кожен байт може зберігати невелике значення (наприклад, код символу).

<em>
  import fs from "node:fs/promises";

const buffer = await fs.readFile("hello.txt");
// якщо у файлі hello.txt був текст "Hello World!"

console.log(buffer);
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
</em>

Вивід <Buffer ...> показує набір байтів у шістнадцятковій системі (hex). Кожен байт відповідає одному символу або службовому знаку (наприклад, пробілу).

## Кодування

Файл завжди зберігається як набір байтів. Але щоб інтерпретувати його вміст як текст, потрібно знати кодування.

Найпоширеніше текстове кодування — <strong>UTF-8</strong>. Саме воно дозволяє перетворити байти у символи:

<em>
  import fs from "node:fs/promises";

const buffer = await fs.readFile("hello.txt");
console.log(buffer.toString("utf-8")); // Hello World!
</em>

Якщо при читанні файлу одразу вказати кодування ("utf8"), результатом буде рядок, а не Buffer. Якщо кодування не вказано — повертається Buffer.

<strong>Висновок</strong>

- Buffer — це масив байтів.
- Якщо методи fs.readFile/fs.readFileSync викликати без кодування, результатом буде Buffer.
- Якщо вказати кодування ("utf8"), результатом буде звичайний рядок.
- Розуміння Buffer стане в пригоді при завантаженні файлів та роботі з двійковими даними (наприклад, зображеннями).
</details>
</li>
<li>
<details>
<summary>REST API</summary>

# REST API

Перш ніж писати власний бекенд і працювати з HTTP-запитами в Node.js, нагадаємо, що таке REST API. Ви вже користувалися ним у фронтенді, коли отримували чи відправляли дані на сервер.

<strong>REST (Representational State Transfer)</strong> API — це спосіб побудови вебсервісів, який визначає, як клієнт і сервер взаємодіють через Інтернет.

Простіше кажучи: REST API описує правила, за якими клієнт (наприклад, браузер) може попросити дані у сервера або надіслати йому нові.

Уявіть, що сервер — це поштове відділення, а REST API — це правила, як саме ми можемо відправляти і отримувати листи чи пакунки.

## Ресурси

Ресурс — це сутність, з якою працює сервер.

- У поштовому відділенні ресурсом є лист або посилка.
- У бібліотеці — книга.
- В університеті — студент.
  Наприклад, ресурс «студент» може виглядати так:

<en>
  { </br>
  "id": 123, </br>
  "name": "John Doe", </br>
  "age": 16, </br>
  "gender": "male", </br>
  "onDuty": false </br>
  } </br>
</en>

## Методи запиту

Метод — це дія, яку клієнт хоче виконати над ресурсом.

У поштовому відділенні ви можете отримати лист, відправити пакунок чи змінити адресу. У REST API діють схожі принципи:

- GET — отримати ресурс (наприклад, список студентів).
- POST — створити новий ресурс.
- PUT — повністю оновити ресурс або створити новий.
- PATCH — частково оновити ресурс.
- DELETE — видалити ресурс.

## Шляхи (роути)

Щоб знайти ресурс, потрібна його адреса. У REST API це URL.

- https://example.com/students — усі студенти.
- https://example.com/students/123 — студент із id=123.
- https://example.com/students/123/homeworks — усі домашні роботи студента №123.

Зверніть увагу: назви сутностей пишемо у множині (students, homeworks). Частина 123 — це динамічний параметр, який можна замінити іншим id.

## Параметри запиту

Іноді потрібно уточнити результат: відсортувати чи відфільтрувати дані. Для цього використовують query parameters (параметри запиту). Вони пишуться після ? у URL.

Приклад:

- https://example.com/students?order=asc&search=joe&page=1&per_page=10

Такий запит може повернути перших 10 студентів, відсортованих у порядку зростання, чиї імена містять «joe».

## Приклади REST-запитів

Отримати всіх студентів:

- GET https://example.com/students

Оновити дані студента з id=123:

- PATCH https://example.com/students/123

Видалити домашнє завдання з id=456 у студента №123:

- DELETE https://example.com/students/123/homeworks/456

## Короткий підсумок

REST API — це набір правил, як клієнт може звертатися до сервера за допомогою HTTP-запитів.

Він визначає:

- які є ресурси,
- які дії можна над ними виконувати (методи),
- які адреси мають ці ресурси (шляхи),
- як уточнювати запит (параметри).
Це схоже на поштову систему: у вас є адреса (URL), спосіб доставки (метод) і сам вміст (ресурс).
</details>
</li>

<li>
<details>
<summary>Знайомство з Express</summary>

# Знайомство з Express

Express — мінімалістичний веб-фреймворк для Node.js. Він спрощує створення HTTP-серверів та REST API:

- маршрутизація (обробка шляхів і методів HTTP);
- конвеєр middleware (до/після обробки запиту);
- зручні методи відповіді (res.json, res.status тощо).
- Express не нав’язує ORM, шаблонізатори чи архітектуру — ці речі додаєш за потреби.

## Створення вебсервісу

Встанови пакет:

- <em>npm install express</em>

Мінімальний застосунок (app boilerplate) — файл <strong>src/server.js</strong>:

<em>
<details>
<summary>// src/server.js
import express from 'express';

const app = express();
const PORT = 3000;</summary>

// Перший маршрут
app.get('/', (req, res) => {
res.status(200).json({ message: 'Hello world!' });
});

// Запуск сервера
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

</details>
</em>

<strong>Порт</strong> — номер “входу” для мережевих з’єднань твоєї програми (тут 3000). Усі запити на цей порт обробляє твій сервер.

Онови скрипт запуску в package.json:

// package.json </br>
</br>
{ </br>
"scripts": { </br>
"dev": "nodemon src/server.js" </br>
} </br>
} </br>

Запусти у dev-режимі (ми вже налаштували nodemon у попередньому занятті):

- <em>npm run dev</em>

Перейди в браузері або зроби GET запит у POSTMAN на http://localhost:3000 — побачиш JSON-відповідь.

## Маршрути та обробники

У вебсервері важливо вміти реагувати на різні шляхи (routes) та HTTP-методи. Для цього в Express використовуються методи об’єкта app.

Кожен маршрут складається з:

- HTTP-методу (GET, POST, PUT, PATCH, DELETE).
- Шляху (наприклад, /, /users, /products/:id).
- Функції-обробника (callback) — виконується щоразу, коли сервер отримує запит, що підходить під метод і шлях.

Функція-обробник завжди має два аргументи:

- req (request) — об’єкт запиту. Містить інформацію про сам HTTP-запит: шлях, параметри, тіло, заголовки.
- res (response) — об’єкт відповіді. Використовується для формування і відправки відповіді клієнту.

Перший маршрут:

<em>
  // GET-запит до кореневого маршруту "/" </br>
  app.get('/', (req, res) => { </br>
  res.status(200).json({ </br>
  message: 'Hello world!', </br>
  }); </br>
  }); </br>
</em>
</br>
Що тут відбувається:

- app.get — ми реєструємо маршрут для GET-запитів.
- '/' — шлях. Це означає, що маршрут спрацює при запиті до http://localhost:3000/.
- (req, res) => { ... } — функція-обробник. Вона виконається автоматично, коли на сервер прийде GET-запит до цього шляху.
- res.status(200) — встановлюємо код відповіді 200 OK.
- res.json({ message: 'Hello world!' }) — відправляємо відповідь у форматі JSON.

Маршрутів може бути скільки завгодно

<em>
<details>
  <summary>
      // GET-запит до кореневого маршруту "/" </br>
      app.get('/', (req, res) => { </br>
      res.status(200).json({ </br>
      message: 'Hello world!', </br>
  </summary>
    }); </br>
    }); </br>
     </br>
    // GET-запит до маршруту "/health" </br>
    app.get('/health', (req, res) => { </br>
    res.status(200).json({ </br>
    status: 'Ok!', </br>
    }); </br>
    }); </br>
</details>
</em>
</br>
Таким чином, кожен маршрут в Express — це правило: “як сервер має реагувати на конкретний метод і шлях”. За допомогою req ми отримуємо дані від клієнта, а через res відправляємо відповідь.
</details>
</li>

<li>
<details>
<summary>Динамічні параметри в маршрутах</summary>

# Динамічні параметри в маршрутах

У багатьох випадках потрібно отримати конкретний ресурс за його ідентифікатором: користувача за id, товар за id, статтю за slug тощо. Для цього в Express використовуються динамічні параметри.

<em>
  // Список усіх користувачів </br>
  app.get('/users', (req, res) => { </br>
  res.status(200).json([{ id: 1, name: 'Alice' }]); </br>
  }); </br>
   </br>
  // Конкретний користувач за id </br>
  app.get('/users/:userId', (req, res) => { </br>
  const { userId } = req.params; </br>
  res.status(200).json({ id: userId, name: 'Jacob' }); </br>
  }); </br>
   </br>
</em>

- GET /users → повертає масив користувачів.
- GET /users/:userId → повертає дані одного користувача.

У виразі шляху частина з двокрапкою (:userId) означає, що ця частина URL є змінною. Значення параметра потрапляє в об’єкт req.params.

Приклади:

- Запит GET /users/5 → req.params.userId === "5".
- Запит GET /users/42 → req.params.userId === "42".

Параметри завжди приходять у вигляді рядків. Якщо потрібне число, його треба конвертувати:

<em>const userId = Number(req.params.userId);</em>

Динамічні параметри дозволяють створювати маршрути, які працюють із конкретними ресурсами, а не лише з колекціями.

</details>
</li>
<li>
<details>
<summary>Middleware у Express</summary>

# Middleware у Express

У Express запити проходять через ланцюжок проміжних обробників — middleware.

Кожен middleware може змінювати об’єкти req і res, виконувати певні дії (логування, парсинг тіла запиту, перевірку доступу тощо) і передавати обробку далі.

Middleware додаються через метод app.use:

<em>
  app.use(middleware); // для всіх маршрутів
  app.use('/path', middleware); // тільки для /path/\*
</em>

Звичайні middleware мають три аргументи:

<em>(req, res, next) => { ... }</em>

- req — запит
- res — відповідь
- next — функція, яка передає обробку далі

Якщо middleware не завершує обробку (res.json, res.send тощо), воно обов’язково має викликати next(). Інакше запит «зависне».

Приклад: логування часу

<em>
 <details>
   <summary>
      // src/server.js </br>
      import express from 'express'; </br>
       </br>
      const app = express(); </br>
   </summary>
    const PORT = 3000; </br>
     </br>
    // Логування часу </br>
    app.use((req, res, next) => { </br>
    console.log(`Time: ${new Date().toLocaleString()}`); </br>
    next(); </br>
    }); </br>
     </br>
    // Маршрут </br>
    app.get('/', (req, res) => { </br>
    res.status(200).json({ message: 'Hello, World!' }); </br>
    }); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
 </details>
</em>
 </br>
У цьому прикладі запит проходить такі етапи:

- Middleware логування часу.
- Обробник маршруту /.

Порядок підключення middleware має значення: Express виконує їх у тому порядку, в якому вони оголошені в коді.

Тепер при GET-запиті сервер буде логувати час і дату у консоль:

## Middleware обробки помилок

У Express є спеціальний тип middleware, який обробляє помилки. Його особливість у тому, що він завжди має чотири аргументи:

<em>(err, req, res, next) => { ... }</em>

- err — об’єкт помилки
- req — запит
- res — відповідь
- next — функція для передачі далі (зазвичай не використовується, бо обробку завершує це middleware)

Express автоматично передає сюди помилки, якщо попереднє middleware або маршрут викликав next(err) чи виникла синхронна помилка.

Таке middleware завжди підключається останнім після усіх звичайних middleware та маршрутів, інакше воно не перехопить помилки.

Доповнимо наш приклад з логуванням додавши middleware обробки помилок:

<em>
 <details>
   <summary>
      // src/server.js </br>
      import express from 'express'; </br>
       </br>
      const app = express(); </br>
      const PORT = 3000; </br>
   </summary>
     </br>
    // Логування часу </br>
    app.use((req, res, next) => { </br>
    console.log(`Time: ${new Date().toLocaleString()}`); </br>
    next(); </br>
    }); </br>
     </br>
    // Маршрут </br>
    app.get('/', (req, res) => { </br>
    res.status(200).json({ message: 'Hello, World!' }); </br>
    }); </br>
     </br>
    // Маршрут для тестування middleware помилки </br>
    app.get('/test-error', (req, res) => { </br>
    // Штучна помилка для прикладу </br>
    throw new Error('Something went wrong'); </br>
    }); </br>
     </br>
    // Middleware для обробки помилок </br>
    app.use((err, req, res, next) => { </br>
    console.error('Error:', err.message); </br>
    res.status(500).json({ </br>
    message: 'Internal Server Error', </br>
    error: err.message, </br>
    }); </br>
    }); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
 </details>
</em>
 </br>
Пізніше ми повернемось до middleware обробки помилок і вдосконалимо її.

Якщо не додати error middleware, сервер просто завершить запит без відповіді, а клієнт отримає «завислий» запит.

</details>
</li>
<li>
<details>
<summary>Middleware для неіснуючих маршрутів</summary>

# Middleware для неіснуючих маршрутів

Бувають ситуації, коли клієнт звертається до маршруту, якого не існує, тобто до URL, який наш сервіс не підтримує. Щоб коректно обробляти такі запити, у Express додають спеціальне middleware для 404 Not Found.

<em>
  app.use((req, res) => { </br>
  res.status(404).json({ message: 'Route not found' }); </br>
  }); </br>
  </br>
</em>

Особливість цього middleware у тому, що воно підключається після всіх маршрутів, але перед middleware для обробки помилок. Якщо жоден із маршрутів не збігся, керування дійде сюди.

<em>
<details>
  <summary>
      // src/server.js </br>
      import express from 'express'; </br>
       </br>
      const app = express(); </br>
      const PORT = 3000; </br>
  </summary>
     </br>
    // Логування часу </br>
    app.use((req, res, next) => { </br>
    console.log(`Time: ${new Date().toLocaleString()}`); </br>
    next(); </br>
    }); </br>
     </br>
    // Кореневий маршрут </br>
    app.get('/', (req, res) => { </br>
    res.status(200).json({ message: 'Hello, World!' }); </br>
    }); </br>
     </br>
    // Маршрут для тестування middleware помилки </br>
    app.get('/test-error', (req, res) => { </br>
    // Штучна помилка для прикладу </br>
    throw new Error('Something went wrong'); </br>
    }); </br>
     </br>
    // Middleware 404 (після всіх маршрутів) </br>
    app.use((req, res) => { </br>
    res.status(404).json({ message: 'Route not found' }); </br>
    }); </br>
     </br>
    // Middleware для обробки помилок (останнє) </br>
    app.use((err, req, res, next) => { </br>
    console.error('Error:', err.message); </br>
    res.status(500).json({ </br>
    message: 'Internal Server Error', </br>
    error: err.message, </br>
    }); </br>
    }); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
</details>
</em>
</br>
У цьому прикладі обробка запиту проходить так:

- Middleware логування часу.
- Якщо шлях /, виконується обробник маршруту.
- Якщо шлях не знайдено — спрацьовує 404 middleware.
- Якщо виникла помилка — спрацьовує error middleware.

Таким чином клієнт завжди отримає зрозумілу відповідь:

- або дані,
- або повідомлення про відсутність маршруту,
- або опис помилки.

Тепер при GET-запиті на будь-який неіснуючий маршрут, наприклад http://localhost:3000/random, сервер поверне відповідь із повідомленням про відсутність маршруту.

</details>
</li>
<li>
<details>
<summary>Middleware із бібліотек</summary>

# Middleware із бібліотек

Багато типових завдань у вебзастосунках вже вирішені готовими бібліотеками. У цьому розділі розглянемо три найпоширеніші приклади: робота з JSON, підтримка CORS і логування запитів.

### Обробка JSON

Більшість сучасних вебзастосунків обмінюються даними у форматі JSON. У Express для цього є вбудоване middleware — express.json(). Воно автоматично парсить (розпаковує) тіло HTTP-запиту, якщо воно надійшло у форматі JSON, і додає його у req.body.

<em>
<details>
   <summary>
      // src/server.js </br>
      import express from 'express'; </br>
       </br>
      const app = express(); </br>
      const PORT = 3000; </br>
   </summary>
     </br>
    // Middleware для парсингу JSON </br>
    app.use(express.json()); </br>
     </br>
    app.post('/users', (req, res) => { </br>
    console.log(req.body); // тепер тіло доступне як JS-об’єкт </br>
    res.status(201).json({ message: 'User created' }); </br>
    }); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
</details>
</em>
     </br>
Тепер, якщо відправити POST-запит із JSON-тілом, сервер автоматично розпарсить його і збереже у req.body як JavaScript-об’єкт. У нашому прикладі ми ще не використовуємо POST чи PATCH маршрути, але express.json() настільки базове та поширене middleware, що його варто підключати одразу.

## CORS

<strong>CORS (Cross-Origin Resource Sharing)</strong> — механізм безпеки, який дозволяє браузеру робити запити з одного домену до іншого.

Наприклад, ваш фронтенд працює на http://localhost:3000, а бекенд — на http://localhost:5000. Без CORS браузер заблокує такі запити.

Щоб дозволити обмін даними, сервер має вказати у відповідях спеціальний заголовок:

- <em>Access-Control-Allow-Origin: \*</em>

Це означає, що доступ дозволений з будь-якого джерела. В Express для цього використовують пакет cors:

- <em>npm install cors</em>

Підключення у коді:

<em>
  // src/server.js
  import express from 'express';
  import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors()); // Дозволяє запити з будь-яких джерел

// Решта коду
</em>

У більш складних випадках можна задавати конкретні домени чи методи, але для базового застосунку цього достатньо.

### Логування запитів

Логування допомагає відслідковувати, як працює застосунок: які запити надходять, які відповіді повертаються і скільки часу займає обробка.

Ми використаємо сучасний логер <strong>pino-http</strong>. Він дуже швидкий і простий у налаштуванні.

Встановлення:

- <em>npm install pino-http pino-pretty</em>

Підключення у коді:

<em>
 <details>
   <summary>
      // src/server.js </br>
      import express from 'express'; </br>
      import cors from 'cors'; </br>
      import pino from 'pino-http'; </br>
   </summary>
     </br>
    const app = express(); </br>
    const PORT = 3000; </br>
     </br>
    // Middleware </br>
    app.use(express.json()); </br>
    app.use(cors()); </br>
    app.use( </br>
    pino({ </br>
    level: 'info', </br>
    transport: { </br>
    target: 'pino-pretty', </br>
    options: { </br>
    colorize: true, </br>
    translateTime: 'HH:MM:ss', </br>
    ignore: 'pid,hostname', </br>
    messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms', </br>
    hideObject: true, </br>
    }, </br>
    }, </br>
    }), </br>
    ); </br>
     </br>
    // Решта коду </br>
 </details>
</em>
     </br>
Налаштування Pino досить гнучкі — можна створити будь-який формат логів. У нашому випадку ми використовуємо готову конфігурацію, яка робить повідомлення у консолі зручними та читабельними: кольоровий текст, час запиту, HTTP-метод, шлях і статус відповіді.

</details>
</li>
<li>
<details>
<summary>Змінні оточення</summary>

# Змінні оточення

Будь-який застосунок має працювати в різних середовищах: на локальному комп’ютері, у тестовому середовищі чи на продакшені. Для кожного з них можуть відрізнятися налаштування: адреси баз даних, API-ключі, секрети або інші параметри. Саме для цього існують змінні оточення.

Змінні оточення (environment variables) — це змінні, що зберігають конфігураційні параметри програми. Вони дозволяють винести чутливу або специфічну для середовища інформацію за межі коду.

Зазвичай такі змінні оголошуються у файлі .env, який створюється в корені проєкту. Наприклад, порт, на якому запускається сервер:

<em>
  // .env </br>
 </br>
PORT=3000 </br>
</em>
</br>
.env обов’язково додається в .gitignore і ніколи не комітиться в репозиторій. Якщо випадково закомітили — потрібно негайно змінити всі ключі й паролі. Навіть видалення файлу у наступному коміті не прибере його з історії.

Доброю практикою є створення файлу .env.example, де перелічуються всі змінні без реальних значень. Це допомагає іншим розробникам налаштувати своє середовище:

<em>
  // .env.example </br>
 </br>
PORT=9999 </br>
</em>
</br>
Використання змінних у коді

Щоб зчитувати .env, встановлюємо пакет <strong>dotenv</strong>:

- <em>npm install dotenv</em>

Імпортуємо його у коді:

<em>
  // src/server.js </br>
 </br>
// Такий імпорт одразу ініціалізує бібліотеку </br>
import 'dotenv/config'; </br>
</em>
</br>
У Node.js змінні доступні через глобальний об’єкт process.env:

<em>
  // src/server.js </br>
 </br>
import express from 'express'; </br>
import cors from 'cors'; </br>
import pino from 'pino-http'; </br>
import 'dotenv/config'; </br>
 </br>
const app = express(); </br>
 </br>
// Використовуємо значення з .env або дефолтний порт 3000 </br>
const PORT = process.env.PORT ?? 3000; </br>
 </br>
app.listen(PORT, () => { </br>
console.log(`Server is running on port ${PORT}`); </br>
}); </br>
</em>
</br>
Значення у process.env завжди є рядками. Якщо потрібен інший тип (наприклад число чи булеве значення), його слід явно конвертувати. Використання дефолтного значення (?? 3000) захистить від ситуацій, коли змінна у .env ще не вказана.

## Middleware обробки помилок

Наша мідлвара для обробки помилок у поточному вигляді завжди відправляє користувачу деталі помилки (err.message). Це зручно під час розробки, але в продакшені так робити небезпечно — користувач може побачити внутрішню інформацію про застосунок.

Щоб вирішити цю проблему, ми додамо змінну оточення NODE_ENV, яка буде вказувати, у якому середовищі працює застосунок:

- development — режим розробки (показуємо деталі помилки і стек).
- production — продакшн (повертаємо лише загальне повідомлення).

Оновлюємо файл .env у корені проєкту:

<em>
  #.env
  PORT=3000
  NODE_ENV=development
</em>

Тепер під час локальної розробки process.env.NODE_ENV матиме значення development.

Оновлений код middleware:

<em>
 <details>
  <summary>
      // src/server.js </br>
       </br>
      // Решта коду файла </br>
       </br>
  </summary>
    // Middleware для обробки помилок </br>
    app.use((err, req, res, next) => { </br>
    console.error(err); </br>
     </br>
    const isProd = process.env.NODE_ENV === "production"; </br>
     </br>
    res.status(500).json({ </br>
    message: isProd </br>
    ? "Something went wrong. Please try again later." </br>
    : err.message, </br>
    }); </br>
    }); </br>
     </br>
    // Решта коду файла </br>
 </details>
</em>
</br>
При деплої продакшн-версії на Render.com змінна NODE_ENV автоматично матиме значення "production", навіть якщо ви її не задавали. Це гарантує, що у продакшені деталі помилок не потраплять у відповідь.

</details>
</li>
</ul>
</details>

<details>
  <summary>Module 2</summary>
<ul>
    <li>
    <details>
    <summary>MongoDB Atlas</summary>

# MongoDB Atlas

Уявіть собі величезний склад, де зберігаються всі ваші дані. Так працює база даних MongoDB: вона зберігає інформацію у вигляді документів, які виглядають як JavaScript-об’єкти.

<em>
  { </br>
  "id": 1, </br>
  "name": "Alice", </br>
  "email": "alice@mail.com" </br>
  } </br>
</em>
</br>
MongoDB можна встановити локально на комп’ютер, але набагато зручніше користуватися її хмарною версією.

<strong>MongoDB Atlas</strong> — це сервіс, який дозволяє створити та використовувати базу даних у хмарі. Вам не потрібно налаштовувати сервери вручну — достатньо зареєструватися, і ви отримаєте готовий кластер.

Кластер — це група серверів, які працюють разом, щоб:

- база даних завжди була доступною,
- дані не зникли при збої,
- запити виконувались швидко навіть під великим навантаженням.

Тобто, якщо звичайна база — це просто склад, то кластер у

MongoDB Atlas — це склад із додатковими "охоронцями", резервними копіями та можливістю швидко збільшувати площу, якщо з’являється більше товару (даних).

## Створення акаунту

Щоб почати роботу:

- Переходимо на MongoDB Atlas.
- Реєструємо акаунт.
- Створюємо кластер (це буде наша база в хмарі).

## Збереження даних підключення

Після створення бази ви отримаєте спеціальний connection string — рядок підключення. Наприклад:

<em>mongodb+srv://borismeshkovaws:12345678@cluster0.xpxkilq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0</em>

У код його додавати не можна — це небезпечно. Натомість ми збережемо ці дані у файлі .env, щоб зручно працювати з різними середовищами (локально, на тесті, у продакшені).

#.env

<em>
  PORT=3000 </br>
  MONGO_URL=mongodb+srv://borismeshkovaws:12345678@cluster0.xpxkilq.mongodb.net/?retryWrites=true& w=majority&appName=Cluster0 </br>
</em>
</br>
І не забудьте оновити файл .env.example, щоб інші розробники бачили, які змінні треба налаштувати:

#.env.example

<em>
  PORT= </br>
  MONGO_URL=
</em>

## Підключення MongoDB

Щоб працювати з базою даних, нам потрібно підключитися до неї зі свого бекенду. Робити це "вручну" через драйвер MongoDB незручно, тому ми використаємо бібліотеку Mongoose.

Mongoose спрощує роботу з базою:

- дозволяє легко підключитися,
- працювати з колекціями як з об’єктами,
- будувати схеми та моделі для даних.

Встановлюємо пакет у наш проєкт:

- <em>npm install mongoose</em>

Файл для підключення

Щоб код був структурованим, створимо у папці src нову папку db, а в ній файл connectMongoDB.js. Там ми напишемо функцію для підключення до бази даних.

<em>
 <details>
    <summary>
      // src/db/connectMongoDB.js</br>
      import mongoose from 'mongoose';</br>
      </br>
      export const connectMongoDB = async () => {</br>
    </summary>
    try {</br>
    const mongoUrl = process.env.MONGO_URL;</br>
    await mongoose.connect(mongoUrl);</br>
    console.log('✅ MongoDB connection established successfully');</br>
    } catch (error) {</br>
    console.error('❌ Failed to connect to MongoDB:', error.message);</br>
    process.exit(1); // аварійне завершення програми</br>
    }</br>
    };</br>
 </details>
</em>
</br>
Тут ми:

- читаємо рядок підключення (MONGO_URL) зі змінних оточення,
- викликаємо mongoose.connect(...) для встановлення з’єднання,
- у разі успіху виводимо повідомлення,
- у разі помилки завершуємо роботу процесу (process.exit(1)), щоб сервер не залишався "напівживим".

Виклик у сервері

У файлі src/server.js імпортуємо та викликаємо функцію перед запуском сервера:

<em>
  <details>
   <summary>
      // src/server.js</br>
      </br>
      import express from 'express';</br>
      import 'dotenv/config';</br>
   </summary>
    import cors from 'cors';</br>
    import { connectMongoDB } from './db/connectMongoDB.js';</br>
    </br>
    const app = express();</br>
    const PORT = process.env.PORT ?? 3030;</br>
    </br>
    /_ Middleware та маршрути _/</br>
    </br>
    // підключення до MongoDB</br>
    await connectMongoDB();</br>
    </br>
    // запуск сервера</br>
    app.listen(PORT, () => {</br>
    console.log(`Server is running on port ${PORT}`);</br>
    });</br>
  </details>
</em>
</br>
У сучасному Node.js ми можемо використовувати top-level await. Це означає, що await можна викликати прямо у файлі модуля, а не тільки всередині async функції. Це зручно, бо дозволяє писати асинхронний код на верхньому рівні програми.

  </details>
</li>
<li>
<details>
<summary>MongoDB Compass</summary>

# Імпорт даних у MongoDB

Працювати з базою даних можна різними способами: через командний рядок, напряму з коду або за допомогою зручних інструментів з графічним інтерфейсом. Для початку ми використаємо MongoDB Compass — офіційний інструмент зручної роботи з MongoDB.

MongoDB Compass — це програма, яка дозволяє переглядати базу даних у зрозумілому віконному інтерфейсі. Вона значно полегшує роботу:

- можна переглядати колекції та документи,
- редагувати записи,
- виконувати пошук і фільтрацію,
- імпортувати та експортувати дані.

Це хороший старт, бо дає можливість швидко ознайомитися з тим, як виглядають дані у базі.

При завантаженні обирайте саме <strong>MongoDB Compass Download (GUI)</strong> — це потрібна нам версія.

Імпорт тестових даних

Щоб мати з чим працювати далі на практиці, ми одразу додамо у базу даних тестову колекцію студентів. Для цього:

1. Завантажте файл із даними:

students.json

2. Використайте функцію імпорту в Compass, щоб додати ці дані у нову базу даних Students.

Після імпорту у вас з’явиться готова колекція студентів, яку ми будемо використовувати для навчання: шукати, змінювати, видаляти та додавати нові записи.

Підключення до конкретної бази даних

У MongoDB Atlas ми можемо працювати з багатьма базами даних в одному кластері. Але для нашого проєкту важливо, щоб сервер одразу підключався саме до тієї бази, з якою ми працюємо.

Ми вже створили базу даних students, тому потрібно вказати її назву у змінній оточення. Для цього після mongodb.net/ у connection string додаємо назву бази (students) перед параметрами ?retry....

Файл .env тепер виглядає так:

<em>
  #.env </br>
 </br>
  PORT=3000 </br>
  MONGODB_URL=mongodb+srv://borismeshkovaws:12345678@cluster0.xpxkilq.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0 </br>
</em>
</br>
Тепер при підключенні через Mongoose ми одразу працюємо з базою students. Це означає, що всі наші моделі та колекції будуть створюватися й зберігатися саме в цій базі.

Mongoose читає повний рядок підключення з process.env.MONGODB_URL, тому код підключення в connectMongoDB лишається без змін.

</details>
</li>

<li>
<details>
<summary>Модель даних</summary>

# Модель даних

У цьому модулі ми будемо створювати бекенд для адмін-панелі навчального закладу, де ведеться облік студентів. Тому нашою першою моделлю буде студент.

MongoDB — це документоорієнтована NoSQL база даних, яка зберігає дані у вигляді документів у форматі BSON (Binary JSON). Модель даних у MongoDB базується на колекціях і документах.

Основні поняття MongoDB

- Колекція (Collection): група документів. Можна уявити як масив об’єктів.
- Документ (Document): основна одиниця даних. Це JSON-подібний об’єкт у форматі BSON.
- Поле (Field): пара «ключ-значення» всередині документа.
- Ідентифікатор (\_id): унікальне поле, яке автоматично створюється для кожного документа.

Основні поняття Mongoose

Щоб працювати з MongoDB, ми будемо використовувати бібліотеку <strong>Mongoose</strong>, яка спрощує опис структури документів. У ній є кілька ключових понять:

- Схема (Schema): описує структуру документа (які поля і з якими типами будуть).
- Модель (Model): клас, створений на основі схеми. Використовується для роботи з колекцією.
- Документ (Document): конкретний екземпляр моделі, який відповідає запису в базі даних.

Схема студента

Створимо схему для документа студента. Для цього використаємо клас Schema з бібліотеки mongoose.

<em>
 <details>
   <summary>
      // src/models/student.js </br>
       </br>
      import { Schema } from 'mongoose'; </br>
       </br>
      const studentSchema = new Schema( </br>
   </summary>
    { </br>
    name: { </br>
    type: String, </br>
    required: true, </br>
    trim: true, // прибирає пробіли на початку та в кінці </br>
    }, </br>
    age: { </br>
    type: Number, </br>
    required: true, </br>
    }, </br>
    gender: { </br>
    type: String, </br>
    required: true, </br>
    enum: ['male', 'female', 'other'], </br>
    }, </br>
    avgMark: { </br>
    type: Number, </br>
    required: true, </br>
    }, </br>
    onDuty: { </br>
    type: Boolean, </br>
    default: false, </br>
    }, </br>
    }, </br>
    { </br>
    timestamps: true, </br>
    versionKey: false, </br>
    }, </br>
    ); </br>
 </details>
</em>
 </br>
Пояснення

- type — тип даних (String, Number, Boolean).
- required — чи поле обов’язкове.
- trim: true — автоматично видаляє зайві пробіли на початку та в кінці рядка. Корисно для текстових полів, - таких як name, щоб уникнути збереження значень на кшталт " John ".
- enum — перелік допустимих значень (наприклад, для gender).
- default — значення за замовчуванням, якщо поле не передано.
- timestamps — автоматично додає createdAt і updatedAt.
- versionKey: false — вимикає службове поле \_\_v.

Модель студента

Створимо модель Student на основі нашої схеми:

<em>
  // src/models/student.js </br>
   </br>
  import { model } from 'mongoose'; </br>
   </br>
  /_ Решта коду файла _/ </br>
   </br>
  export const Student = model('Student', studentSchema); </br>
</em>
</br>
Mongoose автоматично створить колекцію students у базі даних (назва береться у множині). Тепер ми можемо використовувати модель Student для взаємодії з колекцією: створювати нових студентів, отримувати список, оновлювати чи видаляти записи.

</details></li>
<li>
<details>
<summary>Взаємодія з базою даних</summary>

# Взаємодія з базою даних

Тепер, коли ми вже маємо базу students та модель Student, додамо маршрути для взаємодії з нею. Почнемо з отримання всіх студентів та отримання одного студента за його id.

## Маршрут: отримати всіх студентів

У цьому маршруті ми будемо звертатися до колекції students через вбудований метод Mongoose <strong>Student.find()</strong>, який повертає масив документів (може бути порожнім), що відповідають моделі Student.

<em>
 <details>
   <summary>
      // src/server.js </br>
       </br>
      import { Student } from './models/student.js'; </br>
      // Код імпортів та підключення middleware бібліотек </br>
   </summary>
     </br>
    app.get('/students', async (req, res) => { </br>
    const students = await Student.find(); </br>
    res.status(200).json(students); </br>
    }); </br>
     </br>
    // Код 404 та error middleware, підключення до бази даних та старт сервера </br>
 </details>
</em>
 </br>

## Маршрут: отримати одного студента за id

Для цього маршруту ми використаємо вбудований метод Mongoose <strong>Student.findById()</strong>. Якщо документ із заданим ідентифікатором не буде знайдено, метод поверне null. У такому випадку ми повернемо статус 404.

<em>
 <details>
  <summary>
      // src/server.js </br>
       </br>
      // Решта коду </br>
       </br>
  </summary>
    app.get('/students/:studentId', async (req, res) => { </br>
    const { studentId } = req.params; </br>
    const student = await Student.findById(studentId); </br>
     </br>
    if (!student) { </br>
    return res.status(404).json({ message: 'Student not found' }); </br>
    } </br>
     </br>
    res.status(200).json(student); </br>
    }); </br>
     </br>
    // Решта коду </br>
 </details>
</em>
</br>
Властивість <strong>params</strong> на об’єкті запиту <strong>req</strong> містить динамічні параметри маршруту. Кожне ім’я параметра відповідає властивості цього об’єкта, а значення, передане в URL, стає значенням цієї властивості.

Повний код із підключенням middleware

<em>
<details>
  <summary>
      // src/server.js </br>
       </br>
      import express from 'express'; </br>
      import 'dotenv/config'; </br>
      import cors from 'cors'; </br>
  </summary>
    import { connectMongoDB } from './db/connectMongoDB.js'; </br>
    import { Student } from './models/student.js'; </br>
     </br>
    const app = express(); </br>
    const PORT = process.env.PORT ?? 3000; </br>
     </br>
    app.use(express.json()); </br>
    app.use(cors()); </br>
     </br>
    // GET /students — список усіх студентів </br>
    app.get('/students', async (req, res) => { </br>
    const students = await Student.find(); </br>
    res.status(200).json(students); </br>
    }); </br>
     </br>
    // GET /students/:studentId — один студент за id </br>
    app.get('/students/:studentId', async (req, res) => { </br>
    const { studentId } = req.params; </br>
    const student = await Student.findById(studentId); </br>
    if (!student) { </br>
    return res.status(404).json({ message: 'Student not found' }); </br>
    } </br>
    res.status(200).json(student); </br>
    }); </br>
     </br>
    // Middleware 404 </br>
    app.use((req, res) => { </br>
    res.status(404).json({ message: 'Route not found' }); </br>
    }); </br>
     </br>
    // Middleware для обробки помилок </br>
    app.use((err, req, res, next) => { </br>
    console.error(err); </br>
     </br>
    const isProd = process.env.NODE_ENV === "production"; </br>
     </br>
    res.status(500).json({ </br>
    message: isProd </br>
    ? "Something went wrong. Please try again later." </br>
    : err.message, </br>
    }); </br>
    }); </br>
     </br>
    await connectMongoDB(); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
</details>
</em>
 </br>
Тепер ми маємо:

- GET <http://localhost:3000/students> → повертає всіх студентів.
- GET <http://localhost:3000/students/:studentId> → повертає одного студента або 404, якщо такого немає.

</details>
</li>

<li>
<details>
<summary>Організація middleware</summary>

# Організація middleware

Коли наш код зростає, важливо зберігати його структурованим і зрозумілим. Якщо всі middleware та маршрути будуть в одному файлі server.js, швидко виникне плутанина. Тому ми виносимо middleware в окремі файли. Це дає кілька переваг:

- легше читати код, бо кожен файл відповідає за одну конкретну задачу;
- простіше підтримувати — якщо треба змінити тільки логування або обробку помилок, ми працюємо з окремим файлом;
- масштабованість — у майбутньому легко додати нові middleware без засмічення server.js.

## Структура проєкту

Створюємо в папці src нову папку middleware і кладемо туди наші кастомні middleware.

src/ </br>
--middleware/ </br>
----errorHandler.js </br>
----notFoundHandler.js </br>
----logger.js </br>
--server.js </br>
</br>

## Error middleware

Перенесемо middleware для обробки помилок у файл <strong>errorHandler.js</strong>.

<em>
<details>
   <summary>
      // src/middleware/errorHandler.js </br>
       </br>
      app.use((err, req, res, next) => { </br>
      console.error(err); </br>
   </summary>
     </br>
    const isProd = process.env.NODE_ENV === "production"; </br>
     </br>
    res.status(500).json({ </br>
    message: isProd </br>
    ? "Something went wrong. Please try again later." </br>
    : err.message, </br>
    }); </br>
    }); </br>
</details>
</em>
 </br>
Це middleware має 4 аргументи (err, req, res, next) — саме за цим Express розуміє, що воно призначене для помилок.
Використовується завжди останнім, щоб перехопити всі помилки з попередніх обробників.
Ми виводимо помилку в консоль і повертаємо клієнту відповідь зі статусом 500 Internal Server Error.

## 404 middleware

Тепер винесемо обробку випадку, коли клієнт звертається до неіснуючого маршруту. Для цього створимо <strong>notFoundHandler.js</strong>.

<em>
  // src/middleware/notFoundHandler.js </br>
   </br>
  export const notFoundHandler = (req, res) => { </br>
  res.status(404).json({ message: 'Route not found' }); </br>
  }; </br>
</em>
 </br>
Це middleware підключається після всіх маршрутів.
Якщо жоден маршрут не збігся, керування потрапить сюди.
Ми відправляємо клієнту відповідь зі статусом 404 Not Found.

## Логер Pino

Щоб бачити всі запити, підключимо pino-http у <strong>logger.js</strong>.

<em>
 <details>
   <summary>
      // src/middleware/logger.js </br>
       </br>
      import pino from 'pino-http'; </br>
       </br>
      export const logger = pino({ </br>
   </summary>
    level: 'info', </br>
    transport: { </br>
    target: 'pino-pretty', </br>
    options: { </br>
    colorize: true, </br>
    translateTime: 'HH:MM:ss', </br>
    ignore: 'pid,hostname', </br>
    messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms', </br>
    hideObject: true, </br>
    }, </br>
    }, </br>
    }); </br>
 </details>
</em>
 </br>
Логер дозволяє відстежувати всі запити до сервера: метод (GET, POST), шлях, статус відповіді, час виконання.
Ми використовуємо pino-pretty, щоб логи в консолі були кольоровими та зручними для читання.
Логер треба підключати одним із перших middleware, щоб він бачив усі запити та помилки.

## Підключення в сервері

Тепер у <strong>server.js</strong> імпортуємо всі ці middleware та використовуємо їх у правильному порядку.

<em>
  <details>
  <summary>
      // src/server.js </br>
      import express from 'express'; </br>
      import 'dotenv/config'; </br>
      import cors from 'cors'; </br>
  </summary>
     </br>
    import { connectMongoDB } from './db/connectMongoDB.js'; </br>
    import { logger } from './middleware/logger.js'; </br>
    import { notFoundHandler } from './middleware/notFoundHandler.js'; </br>
    import { errorHandler } from './middleware/errorHandler.js'; </br>
     </br>
    const app = express(); </br>
    const PORT = process.env.PORT ?? 3000; </br>
     </br>
    // Глобальні middleware </br>
    app.use(logger); // 1. Логер першим — бачить усі запити </br>
    app.use(express.json()); // 2. Парсинг JSON-тіла </br>
    app.use(cors()); // 3. Дозвіл для запитів з інших доменів </br>
     </br>
    // ...тут ваші маршрути </br>
     </br>
    // 404 — якщо маршрут не знайдено </br>
    app.use(notFoundHandler); </br>
     </br>
    // Error — якщо під час запиту виникла помилка </br>
    app.use(errorHandler); </br>
     </br>
    await connectMongoDB(); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
  </details>
</em>
 </br>
Чому порядок важливий?

1. Logger першим → логуються всі вхідні запити.
2. JSON і CORS далі → кожен запит обробляється перед передачею в маршрути.
3. Маршрути → відповідають на конкретні запити.
4. 404 handler → якщо маршрут не знайдено.
5. Error handler → якщо трапилась помилка на будь-якому етапі.
</details>
</li>
<li>
<details>
<summary>Організація роутингу</summary>

# Організація роутингу

До цього ми писали обробники запитів безпосередньо у файлі server.js. Якщо маршрутів стає більше, зручніше винести їх у окремі файли й групувати за доменами (наприклад, students, auth, courses). Для цього є <strong>Express Router</strong> — об'єкт, який дозволяє групувати маршрути та їх обробники у логічні блоки.

Створюємо роутер для студентів

Створіть файл src/routes/studentsRoutes.js. Тут оголошуємо роутер і одразу експортуємо його. Це «порожня рамка», у яку додамо маршрути.

<em>
  // src/routes/studentsRoutes.js </br>
   </br>
  import { Router } from 'express'; </br>
   </br>
  const router = Router(); </br>
   </br>
  export default router; </br>
</em>
 </br>
Переносимо обробники у роутер

Далі переносимо контролери, які обробляють маршрути /students та /students/:studentId із файла server.js у файл роутингу studentsRoutes.js. Для їх оголошення замість app використовуємо створений router.

<em>
 <details>
  <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { Student } from '../models/student.js'; </br>
  </summary>
     </br>
    const router = Router(); </br>
     </br>
    router.get('/students', async (req, res) => { </br>
    const students = await Student.find(); </br>
    res.status(200).json(students); </br>
    }); </br>
     </br>
    router.get('/students/:studentId', async (req, res) => { </br>
    const { studentId } = req.params; </br>
    const student = await Student.findById(studentId); </br>
    if (!student) { </br>
    return res.status(404).json({ message: 'Student not found' }); </br>
    } </br>
    res.status(200).json(student); </br>
    }); </br>
     </br>
    export default router; </br>
 </details>
</em>
 </br>
Підключаємо роутер

Тепер імпортуємо створений роутер у файл server.js та додаємо його як middleware до app, за допомогою методу app.use().

<em>
<details>
    <summary>
      // src/server.js </br>
       </br>
      import express from 'express'; </br>
      import 'dotenv/config'; </br>
      import cors from 'cors'; </br>
    </summary>
     </br>
    import { connectMongoDB } from './db/connectMongoDB.js'; </br>
    import { logger } from './middleware/logger.js'; </br>
    import { notFoundHandler } from './middleware/notFoundHandler.js'; </br>
    import { errorHandler } from './middleware/errorHandler.js'; </br>
     </br>
    import studentsRoutes from './routes/studentsRoutes.js'; </br>
     </br>
    const app = express(); </br>
    const PORT = process.env.PORT ?? 3000; </br>
     </br>
    // глобальні middleware </br>
    app.use(logger); </br>
    app.use(express.json()); </br>
    app.use(cors()); </br>
     </br>
    // підключаємо групу маршрутів студента </br>
    app.use(studentsRoutes); </br>
     </br>
    // 404 і обробник помилок — наприкінці ланцюжка </br>
    app.use(notFoundHandler); </br>
    app.use(errorHandler); </br>
     </br>
    await connectMongoDB(); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
</details>
</em>
 </br>
Підсумок

Така організація коду створює зрозумілу структуру проєкту:

- server.js відповідає за складання застосунку та запуск сервера;
- роутери містять логіку для роботи з конкретними сутностями (у нашому випадку — студентами);
- моделі визначають доступ до бази даних.
- Цей підхід робить код більш чистим, масштабованим і зручним у підтримці.

</details>
</li>
<li>
<details>
<summary>Організація контролерів</summary>

# Організація контролерів

Ми вже винесли маршрути в окремий файл, але в ньому все ще залишилася логіка обробки запитів. Якщо маршрути будуть складнішими, код швидко стане важким для читання. Щоб уникнути цього, створимо окремий шар контролерів.

<strong>Контролери</strong> — це функції, які відповідають за обробку запитів і формування відповіді. Роутер лише «знає», який контролер викликати для конкретного маршруту, а саму логіку ми зберігаємо в іншому місці. Це робить код більш організованим і зрозумілим.

## Створюємо контролери

Створіть папку src/controllers, а в ній файл studentsController.js. У цей файл винесемо контролери, які зараз знаходяться у файлі studentsRoutes.js.

<em>
 <details>
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      import { Student } from '../models/student.js'; </br>
       </br>
      // Отримати список усіх студентів </br>
   </summary>
    export const getStudents = async (req, res) => { </br>
    const students = await Student.find(); </br>
    res.status(200).json(students); </br>
    }; </br>
     </br>
    // Отримати одного студента за id </br>
    export const getStudentById = async (req, res) => { </br>
    const { studentId } = req.params; </br>
    const student = await Student.findById(studentId); </br>
     </br>
    if (!student) { </br>
    return res.status(404).json({ message: 'Student not found' }); </br>
    } </br>
     </br>
    res.status(200).json(student); </br>
    }; </br>
 </details>
</em>
 </br>

## Використовуємо контролери у роутері

Тепер оновимо файл src/routes/studentsRoutes.js, щоб замість логіки напряму викликати контролери.

<em>
 <details>
   <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { </br>
   </summary>
    getStudents, </br>
    getStudentById </br>
    } from '../controllers/studentsController.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.get('/students', getStudents); </br>
    router.get('/students/:studentId', getStudentById); </br>
     </br>
    export default router; </br>
 </details>
</em>
</br>
<strong>Підсумок</strong>

Ми винесли контролери в окремий файл і тепер маршрути виглядають більш чисто. Така організація дозволяє:

- відокремити логіку обробки запитів від опису маршрутів;
- полегшити підтримку та рефакторинг коду;
- підготувати ґрунт для подальшої роботи (наприклад, додавання нових методів чи валідації).

</details>

</li>

<li>
<details>
<summary>Обробка помилок</summary>

# Обробка помилок

Уяви, що в кожному контролері ти вручну пишеш обробку помилок — це швидко перетворюється на хаос: дублювання коду, різні формати відповіді й зайва плутанина. Набагато зручніше мати єдине місце для обробки помилок — спеціальне middleware errorHandler яке у нас вже є.

Для цього нам потрібно лише навчитися передавати помилки з контролерів у middleware. Це робиться за допомогою виклику next(error).

## Базова обробка помилки

У контролері getStudentById метод Student.findById повертає null, якщо студент із переданим id не знайдений. Цей випадок потрібно обробити. Додамо параметр next у функцію та викличемо його у разі відсутності студента.

Обов’язково після виклику next ставимо return, щоб припинити виконання коду в контролері.

<em>
 <details>
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      // Додаємо третій параметр next до контролера </br>
      export const getStudentById = async (req, res, next) => { </br>
   </summary>
    const { studentId } = req.params; </br>
    const student = await Student.findById(studentId); </br>
     </br>
    // Код що був до цього </br>
    // if (!student) { </br>
    // return res.status(404).json({ message: 'Student not found' }); </br>
    // } </br>
     </br>
        // Додаємо базову обробку помилки замість res.status(404) </br>
     </br>
    if (!student) { </br>
    next(new Error('Student not found')); </br>
    return; </br>
    } </br>
     </br>
    res.status(200).json(student); </br>
    }; </br>
 </details>
</em>
 </br>
Виклик next передає управління наступному middleware у ланцюжку. Якщо забути написати return, код після next усе одно виконається — і це часта помилка початківців.

## Використання http-errors

Але є нюанс: у цьому випадку ми створюємо «звичайну» помилку. Наш обробник (errorHandler) відповідає на неї кодом 500 Internal Server Error. Це неправильно, адже тут логічніше повернути 404 Not Found.

Щоб робити це зручно, використаємо пакет http-errors. Він дозволяє створювати помилки з потрібним статусом і повідомленням.

Встановлюємо пакет:

- <em>npm install http-errors</em>

У контролері використовуємо функцію createHttpError:

<em>
 <details>
    <summary>
      // src/controllers/studentsController.js </br>
      import createHttpError from 'http-errors'; </br>
       </br>
      export const getStudentById = async (req, res, next) => { </br>
      const { studentId } = req.params; </br>
    </summary>
    const student = await Student.findById(studentId); </br>
     </br>
    if (!student) { </br>
    next(createHttpError(404, 'Student not found')); </br>
    return; </br>
    } </br>
     </br>
    res.status(200).json(student); </br>
    }; </br>
 </details>
</em>
 </br>
Тепер замість «звичайної» помилки ми явно вказуємо код 404 і повідомлення.

## Оновлюємо errorHandler

У middleware errorHandler також потрібно оновити код, щоб він відрізняв HTTP-помилки від інших.

<em>
 <details>
   <summary>
      // src/middleware/errorHandler.js </br>
       </br>
      import { HttpError } from "http-errors"; </br>
       </br>
      export const errorHandler = (err, req, res, next) => { </br>
   </summary>
    console.error("Error Middleware:", err); </br>
     </br>
    // Якщо помилка створена через http-errors </br>
    if (err instanceof HttpError) { </br>
    return res.status(err.status).json({ </br>
    message: err.message || err.name, </br>
    }); </br>
    } </br>
     </br>
    const isProd = process.env.NODE_ENV === "production"; </br>
     </br>
    // Усі інші помилки — як внутрішні </br>
    res.status(500).json({ </br>
    message: isProd </br>
    ? "Something went wrong. Please try again later." </br>
    : err.message, </br>
    }); </br>
    }; </br>
 </details>
</em>
 </br>
<strong>HttpError</strong> — це свідомо створені помилки, які ми самі генеруємо в коді (наприклад, createError(400, "Bad request"), createError(404, "Not Found") тощо). Такі повідомлення вважаються безпечними для користувача, оскільки вони не містять внутрішніх деталей застосунку чи бази даних. Тому їх можна повертати "як є" як у режимі розробки, так і в продакшені.

А от для решти помилок ситуація інша. Їхні повідомлення можуть містити:

- частину Mongo-запиту,
- stack trace,
- назви внутрішніх змінних чи функцій.

  Таку інформацію небезпечно показувати у продакшені, тому:

- у development ми повертаємо реальний err.message, щоб було зручно дебажити,
- у production віддаємо лише загальне дружнє повідомлення, без деталей.

Результат

Тепер, якщо відправити запит на GET /students/:id із неіснуючим id, отримаємо у відповідь:

- статус: 404 Not Found,
- повідомлення: "Student not found".

Таким чином ми винесли обробку помилок у єдине місце, зробили її більш правильною та зрозумілою для клієнта.

</details>
</li>
<li>
<details>
<summary>CRUD</summary>

# Тіло HTTP-запиту

Ми вже створювали GET-маршрути, які дозволяють отримувати дані. Наприклад, GET /students повертає список студентів, а GET /students/:id — одного конкретного студента.

У таких запитах клієнт (браузер чи Postman) передає мінімум інформації — тільки сам маршрут та іноді параметри. Але якщо ми хочемо створити нового студента (POST) або оновити дані існуючого (PUT чи PATCH), цього недостатньо. Нам потрібно передати більше інформації — наприклад, ім’я, вік чи оцінку студента. Ці дані ми передаємо у тілі запиту.

## Що таке тіло запиту?

<strong>Тіло запиту (request body</strong>) — це частина HTTP-запиту, яка містить дані. Вона йде після заголовків (headers) і може містити текст, JSON, XML, HTML або навіть файли.

Найчастіше бекенд-розробники працюють із тілом у форматі JSON, бо це зручно й знайомо: тіло запиту виглядає як об’єкт JavaScript.

Приклад:

<em>
  { </br>
  "name": "Alice", </br>
  "age": 20, </br>
  "gender": "female" </br>
  } </br>
</em>
</br>

Коли клієнт надсилає такий об’єкт у запиті POST /students, сервер отримає ці дані та створить нового студента в базі.

## Як сервер розуміє тіло запиту?

Для цього використовуються HTTP-заголовки. Найважливіший із них — <strong>Content-Type</strong>.

- Якщо Content-Type: application/json, сервер очікує, що тіло запиту буде у форматі JSON.
- Якщо Content-Type: multipart/form-data, то тіло містить файл (або кілька файлів) разом із даними форми.
- Якщо Content-Type: text/plain, сервер отримає просто звичайний текст.

Заголовок <strong>Content-Length</strong> вказує розмір тіла запиту в байтах. Він зазвичай виставляється автоматично і допомагає переконатися, що дані передані повністю.

Приклад:

<em>
  Content-Type: application/json
  Content-Length: 256
</em>

Що будемо використовувати?

У нашому курсі ми працюватимемо з двома основними варіантами:

- application/json — для POST, PUT та PATCH запитів, коли ми передаємо дані у вигляді JSON-об’єкта.
- multipart/form-data — для завантаження файлів (цей варіант ми розглянемо пізніше).

</details>
</li>
<li>
<details>
<summary>Обробка тіла запиту</summary>

# Обробка тіла запиту

Щоб створювати (POST) або оновлювати (PUT, PATCH) ресурси, ми передаємо дані в тілі запиту. У контролері ці дані можна отримати з об’єкта req як властивість body.

<em>
  const controller = (req, res) => { </br>
  const body = req.body; </br>
  }; </br>
</em>
 </br>
Але якщо спробувати вивести req.body без додаткових налаштувань — він буде порожнім. Чому так? Тому що Express за замовчуванням не знає, як "розпакувати" тіло запиту. Для цього потрібна спеціальна middleware, яка вміє парсити дані.

## Вбудована middleware Express

У сучасних версіях Express достатньо додати в server.js таке налаштування:

<em>
  import express from 'express'; </br>
 </br>
  const app = express(); </br>
 </br>
  // ця middleware "вчить" Express розуміти JSON у тілі запиту </br>
  app.use(express.json()); </br>
</em>
</br>

Це налаштування ми вже додали в нашому проєкті. Завдяки йому Express автоматично парсить тіло запиту, якщо заголовок Content-Type встановлений у application/json. У такому випадку дані потрапляють у req.body як звичайний JavaScript-об’єкт.

Раніше для цього використовували окремий пакет body-parser, але тепер він вбудований у Express, тож додатково встановлювати його не потрібно.

## Інші формати JSON

Іноді клієнти можуть надсилати JSON із менш стандартними заголовками. Наприклад, за специфікацією <strong>JSON:API</strong> використовується <strong>application/vnd.api+json</strong>. У такому випадку потрібно явно вказати додаткові типи:

<em>
  import express from 'express'; </br>
   </br>
  const app = express(); </br>
   </br>
  app.use(express.json({ </br>
  type: ['application/json', 'application/vnd.api+json'], </br>
  })); </br>
</em>
 </br>

## Обмеження розміру тіла

Щоб захистити сервер від занадто великих запитів (наприклад, якщо користувач випадково чи навмисно надсилає дуже великий об’єкт), можна задати ліміт на розмір тіла.

<em>
  import express from 'express'; </br>
   </br>
  const app = express(); </br>
   </br>
  app.use(express.json({ </br>
  limit: '100kb', // максимум 100 кілобайт </br>
  })); </br>
</em>
 </br>
У разі перевищення ліміту запит буде відхилений із помилкою.

</details>
</li>
<li>
<details>
<summary>Роут POST запиту</summary>

# Роут POST запиту

Додаємо можливість створювати нового студента до колекції за маршрутом POST /students. У запиті будемо очікувати тіло запиту, яке приходитиме як JSON.

## Контролер

Дописуємо контролер у файл src/controllers/studentsController.js. Він читає дані з req.body і створює документ через <strong>Student.create(...)</strong>. Для запитів, які щось створюють, семантично правильно відправляти відповідь зі статус-кодом 201 Created.

<em>
  // src/controllers/studentsController.js </br>
   </br>
  import { Student } from '../models/student.js'; </br>
   </br>
  // Решта контролерів </br>
   </br>
  // Новий контролер </br>
  export const createStudent = async (req, res) => { </br>
  const student = await Student.create(req.body); </br>
  res.status(201).json(student); </br>
  }; </br>
</em>
 </br>
Перший аргумент для Student.create() обов’язковий і має містити об'єкт даних, які будуть використані для створення нового документа у колекції. База даних створює новий документ, додає до нього унікальний ідентифікатор та повертає створений об’єкт.

Очікуваний приклад тіла запиту (поля мають відповідати нашій схемі Student):

<em>
  { </br>
  "name": "John Doe", </br>
  "age": 18, </br>
  "gender": "male", </br>
  "avgMark": 10.3, </br>
  "onDuty": true </br>
  } </br>
</em>
 </br>
Якщо тіло не відповідає схемі (наприклад, бракує обов’язкових полів або неправильні типи), Mongoose згенерує базову помилку валідації. Такі помилки автоматично підуть у наш errorHandler.

## Роут

Підключаємо контролер у маршрутизатор студентів:

<em>
  <details>
   <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { </br>
      getStudents, </br>
   </summary>
    getStudentById, </br>
    createStudent </br>
    } from '../controllers/studentsController.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.get('/students', getStudents); </br>
    router.get('/students/:studentId', getStudentById); </br>
    router.post('/students', createStudent); </br>
     </br>
    export default router; </br>
  </details>
</em>

## Перевірка в Postman

- POST <http://localhost:3000/students>
- Headers: Content-Type: application/json
- Body (raw, JSON): як у прикладі вище

У відповідь отримаєш 201 і створений документ (з \_id, createdAt, updatedAt тощо — якщо вони ввімкнені у схемі).

</details>
</li>
<li>
<details>
<summary>Роут DELETE запиту</summary>

# Роут DELETE запиту

Додаємо маршрут DELETE /students/:studentId, за допомогою якого користувачі зможуть видаляти студентів з бази даних.

## Контролер

Для видалення документа з колекції в Mongoose використовується метод:

<strong>findOneAndDelete(filter, options)</strong>

де:

- filter — перший аргумент, який вказує на умову пошуку документа для видалення (обов’язковий);
- options — об’єкт із додатковими налаштуваннями (необов’язковий);

У контролері отримуємо studentId із параметрів, видаляємо студента через Mongoose-метод findOneAndDelete, і якщо такого не існує — повертаємо помилку 404. Якщо все добре — повертаємо 200 Success.

<em>
 <details>
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      import createHttpError from 'http-errors'; </br>
      import { Student } from '../models/student.js'; </br>
   </summary>
     </br>
    /_ Решта коду файлу _/ </br>
     </br>
    export const deleteStudent = async (req, res, next) => { </br>
    const { studentId } = req.params; </br>
    const student = await Student.findOneAndDelete({ </br>
    \_id: studentId, </br>
    }); </br>
     </br>
    if (!student) { </br>
    next(createHttpError(404, "Student not found")); </br>
    return; </br>
    } </br>
     </br>
    res.status(200).json(student); </br>
    }; </br>
 </details>
</em>
 </br>

## Роут

Додаємо DELETE-роут /students/:studentId та підключаємо контролер:

<em>
 <details>
   <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from "express"; </br>
      import { </br>
      getStudents, </br>
   </summary>
    getStudentById, </br>
    createStudent, </br>
    deleteStudent, </br>
    } from "../controllers/studentsController.js"; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.get("/students", getStudents); </br>
    router.get("/students/:studentId", getStudentById); </br>
    router.post("/students", createStudent); </br>
    router.delete("/students/:studentId", deleteStudent); </br>
     </br>
    export default router; </br>
 </details>
</em>

## Перевірка в Postman

Перевіримо роботу нового маршруту в Postman:

- Метод: DELETE
- URL: http://localhost:3000/students/:studentId

У разі успіху отримаємо відповідь 200 Success із видаленим об’єктом студента. Якщо такого id немає — повернеться 404 Not Found.

</details>
</li>
<li>
<details>
<summary>Роут PATCH запиту</summary>

# Роут PATCH запиту

Додаємо маршрут PATCH /students/:studentId, за допомогою якого користувачі зможуть частково оновлювати дані студентів у базі даних. Від PUT метод PATCH відрізняється тим, що оновлюється не весь ресурс, а лише окремі його поля.

## Метод Mongoose

Для оновлення документа в Mongoose використовується метод:

<strong>findOneAndUpdate(query, update, options)</strong>

де:

- query — об’єкт умов пошуку документа (обов’язковий);
- update — об’єкт із даними для оновлення (обов’язковий);
- options — об’єкт додаткових налаштувань (необов’язковий), наприклад:
  - new: true — повернути оновлений документ;
  - includeResultMetadata: true — додати метадані результату;
  - upsert: true — створити документ, якщо не знайдено (для PATCH зазвичай не використовуємо).

## Контролер

У контролері беремо studentId з параметрів, req.body — дані для часткового оновлення. Якщо студента не знайдено — повертаємо 404. Якщо все добре — повертаємо 200 і оновлений документ.

<em>
 <details>
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      import createHttpError from 'http-errors'; </br>
      import { Student } from '../models/student.js'; </br>
   </summary>
     </br>
    /_ Решта коду файлу _/ </br>
     </br>
    export const updateStudent = async (req, res, next) => { </br>
    const { studentId } = req.params; </br>
     </br>
    const student = await Student.findOneAndUpdate( </br>
    { \_id: studentId }, // Шукаємо по id </br>
    req.body, </br>
    { new: true }, // повертаємо оновлений документ </br>
    ); </br>
     </br>
    if (!student) { </br>
    next(createHttpError(404, 'Student not found')); </br>
    return; </br>
    } </br>
     </br>
    res.status(200).json(student); </br>
    }; </br>
 </details>
</em>
 </br>
У тілі запиту будемо очікувати частковий об’єкт даних для оновлення студента з наступними властивостями:

  </br>
<em>
  { </br>
  "name": "John Doe", </br>
  "email": "jojndoe@mail.com", </br>
  "age": 18, </br>
  "gender": "male", </br>
  "avgMark": 10.3, </br>
  "onDuty": true </br>
  } </br>
</em>
 </br>
Роут

Підключаємо контролер у маршрутизатор студентів:

<em>
 <details>
   <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { </br>
      getStudents, </br>
   </summary>
    getStudentById, </br>
    createStudent, </br>
    deleteStudent, </br>
    updateStudent, </br>
    } from '../controllers/studentsController.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.get('/students', getStudents); </br>
    router.get('/students/:studentId', getStudentById); </br>
    router.post('/students', createStudent); </br>
    router.delete('/students/:studentId', deleteStudent); </br>
    router.patch('/students/:studentId', updateStudent); </br>
     </br>
    export default router; </br>
 </details>
</em>

## Перевірка в Postman

Перевіримо роботу нового маршруту в Postman:

- Метод: PATCH
- URL: http://localhost:3000/students/:studentId
- Body (raw, JSON), наприклад:</br>

  <em>
  { </br>
  "avgMark": 9.8, </br>
  "onDuty": false </br>
  } </br>
  </em>
  </br>
  У разі успіху отримаємо відповідь 200 Success з оновленим об’єктом студента. Якщо такого id немає — повернеться 404 Not Found.

</details>
</li>
</ul>
</details>
<details>
<summary>Module 3</summary>
<ul>
<li>
<details>
<summary>Схеми валідації</summary>

# Схеми валідації

<strong>Joi</strong> — це бібліотека для валідації даних у Node.js. Вона дозволяє:

- створювати схеми для об’єктів;
- перевіряти об’єкти на відповідність цим схемам;
- налаштовувати повідомлення про помилки.

Усі схеми ми зберігатимемо в окремій папці src/validations/. Для студентів це буде файл:

- src/validations/studentsValidation.js

## Базова схема валідації

Визначення схем (Schema definition): ви можете повністю описати схеми для об'єктів, які бажаєте валідувати. Для цього використовуються методи <strong>Joi.object()</strong> та <strong>Joi.array()</strong> для структур, а також методи для примітивів (числа, рядки, булеві значення тощо). Схеми є зрозумілими та читаються майже як звичайні правила.

Приклад схеми для перевірки тіла запиту під час створення нового студента:

<em>
 <details>
   <summary>
      import { Joi } from 'celebrate'; </br>
       </br>
      const bodySchema = Joi.object({ </br>
      name: Joi.string().min(3).max(30).required(), </br>
      age: Joi.number().integer().min(12).max(65).required(), </br>
   </summary>
    gender: Joi.string().valid('male', 'female', 'other').required(), </br>
    avgMark: Joi.number().min(2).max(12).required(), </br>
    onDuty: Joi.boolean(), </br>
    }); </br>
 </details>
</em>
 </br>
Тут ми описали правила для кожного поля. Наприклад, name має бути рядком довжиною від 3 до 30 символів і є обов’язковим.

## Використання Segments

Далі потрібно визначити, яку саме частину HTTP-запиту ця схема має валідувати. Для цього ми експортуємо схему як об’єкт і через Segments вказуємо, що саме перевіряємо: body, params, query, headers чи cookies.

Ось так виглядає схема для валідації тіла запиту:

<em>
<details>
  <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from "celebrate"; </br>
       </br>
      export const createStudentSchema = { </br>
  </summary>
    [Segments.BODY]: Joi.object({ </br>
    name: Joi.string().min(3).max(30).required(), </br>
    age: Joi.number().integer().min(12).max(65).required(), </br>
    gender: Joi.string().valid("male", "female", "other").required(), </br>
    avgMark: Joi.number().min(2).max(12).required(), </br>
    onDuty: Joi.boolean(), </br>
    }), </br>
    }; </br>
</details>
</em>
 </br>
<strong>Segments</strong> — це набір «ключів», які визначають, яку саме частину запиту потрібно перевіряти:

- Segments.BODY → тіло запиту (req.body);
- Segments.PARAMS → параметри маршруту (req.params);
- Segments.QUERY → рядок запиту (req.query);
- Segments.HEADERS → заголовки (req.headers);
- Segments.COOKIES → кукі (req.cookies).

Ми передаємо ці значення як ключі в об’єкті запиту.

Наприклад, валідація параметра маршруту /notes/:category, де category — динамічний параметр:</br>

<em>
{ </br>
[Segments.PARAMS]: Joi.object({ </br>
category: Joi.string().valid('work', 'study', 'personal').required(), </br>
}) </br>
} </br>
</em>
</br>
У цьому випадку валідуються параметри маршруту, а саме :category.

Якщо зробити запит GET /notes/work або GET /notes/personal — він пройде валідацію.
Якщо ж зробити GET /notes/music — celebrate одразу поверне помилку 400 Bad Request, і контролер не виконається.

## Кастомізація повідомлень про помилки

За замовчуванням повідомлення про помилки в Joi можуть бути незручними для користувачів: вони занадто технічні й складні для фронтенду.

Тому варто робити власні повідомлення, щоб у відповіді віддавати більш зрозумілу інформацію — що саме пішло не так із валідацією. Це полегшує обробку помилок на клієнті й покращує досвід як для розробників, так і для користувачів.

Ми можемо налаштовувати повідомлення через метод <strong>.messages()</strong>:

<em>
<details>
   <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from 'celebrate'; </br>
       </br>
      export const createStudentSchema = { </br>
      [Segments.BODY]: Joi.object({ </br>
   </summary>
    name: Joi.string().min(3).max(30).required().messages({ </br>
    "string.base": "Name must be a string", </br>
    "string.min": "Name should have at least {#limit} characters", </br>
    "string.max": "Name should have at most {#limit} characters", </br>
    "any.required": "Name is required", </br>
    }), </br>
    age: Joi.number().integer().min(12).max(65).required().messages({ </br>
    "number.base": "Age must be a number", </br>
    "number.min": "Age must be at least {#limit}", </br>
    "number.max": "Age must be at most {#limit}", </br>
    "any.required": "Age is required", </br>
    }), </br>
    gender: Joi.string().valid("male", "female", "other").required().messages({ </br>
    "any.only": "Gender must be one of: male, female, or other", </br>
    "any.required": "Gender is required", </br>
    }), </br>
    avgMark: Joi.number().min(2).max(12).required().messages({ </br>
    "number.base": "Average mark must be a number", </br>
    "number.min": "Average mark must be at least {#limit}", </br>
    "number.max": "Average mark must be at most {#limit}", </br>
    "any.required": "Average mark is required", </br>
    }), </br>
    onDuty: Joi.boolean().messages({ </br>
    "boolean.base": "onDuty must be a boolean value", </br>
    }), </br>
    }), </br>
    }; </br>
</details>
</em>
 </br>
У цьому прикладі ми використовуємо метод .messages() для кожного правила в схемі, щоб задати власні повідомлення про помилки.

- Правило string.base стосується .string().
- Правило string.min стосується .min(), яке йде після .string().
- І так далі.

Наприклад, якщо користувач надішле name як число, Joi поверне помилку з повідомленням:

- "Name must be a string"

Таким чином, ми можемо гнучко налаштовувати повідомлення про помилки для кожного поля, роблячи їх більш зрозумілими та інформативними.

</details>
</li>
<li>
<details>
<summary>Middleware валідації</summary>

# Middleware валідації

<strong>celebrate</strong> — це middleware для Express, який обгортає Joi та спрощує валідацію в маршрутах. Він дозволяє перевіряти дані у різних частинах запиту: тіло (body), параметри (params), рядок запиту (query), заголовки (headers), кукі (cookies) тощо.

- Ви описуєте схему валідації (Joi schema) і вказуєте, до якої частини запиту її застосувати.
- celebrate виконує цю валідацію до контролера.
- Якщо дані валідні — запит переходить далі у контролер.
- Якщо ні — автоматично повертається помилка 400 Bad Request з поясненням, що саме не відповідає правилам.

## Використання схеми у маршруті

Тепер підключимо схему у маршруті POST /students, щоб валідація виконувалась автоматично до контролера:

<em>
<details>
  <summary>
      // src/routes/studentsRoutes.js </br>
      </br>
      import { Router } from 'express'; </br>
      import { celebrate, Segments } from 'celebrate'; </br>
      import { createStudent } from '../controllers/studentsController.js'; </br>
  </summary>
    import { createStudentSchema } from '../validations/studentsValidation.js'; </br>
    </br>
    const router = Router(); </br>
    </br>
    router.post('/students', celebrate(createStudentSchema), createStudent); </br>
    </br>
    export default router; </br>
</details>
</em>
</br>
У цьому прикладі celebrate перевіряє тіло запиту за схемою createStudentSchema. Якщо дані некоректні — клієнт одразу отримає 400 Bad Request. Якщо все гаразд — виконається контролер createStudent.

Як це працює

У Express маршрут може мати не лише контролер, а й кілька проміжних функцій (middleware). Вони виконуються у тому порядку, в якому ми їх вказали.

У прикладі вище:

- <em>router.post('/students', celebrate(createStudentSchema), createStudent);</em>

- Спочатку виконується celebrate. Він бере дані з req.body і перевіряє їх за схемою.
- Якщо дані невалідні — повертається помилка 400 Bad Request, і контролер не запускається.
- Якщо дані валідні — виконується наступна функція, тобто контролер createStudent.

Таким чином, додавання celebrate другим аргументом у маршруті гарантує, що контролер працює лише з перевіреними даними.

## Middleware для обробки помилок

Ми вже бачили, що celebrate автоматично генерує помилки при невдалій валідації (наприклад, якщо studentId має неправильний формат). Але щоб ці помилки правильно відображалися у нашому додатку, потрібно підключити спеціальний <strong>middleware errors()</strong> від celebrate.

Де саме підключати?

Усі middleware виконуються у порядку, в якому вони оголошені.
Тому errors() має бути підключений до глобального errorHandler.
Це потрібно для того, щоб спочатку відловлювались помилки валідації celebrate, а вже потім — усі інші.

<em>
 <details>
   <summary>
      // src/server.js </br>
       </br>
      import express from "express"; </br>
      import "dotenv/config"; </br>
      import cors from "cors"; </br>
   </summary>
    // Імпортуємо middleware </br>
    import { errors } from "celebrate"; </br>
    import { connectMongoDB } from "./db/connectMongoDB.js"; </br>
    import { logger } from "./middleware/logger.js"; </br>
    import { notFoundHandler } from "./middleware/notFoundHandler.js"; </br>
    import { errorHandler } from "./middleware/errorHandler.js"; </br>
    import studentsRoutes from "./routes/studentsRoutes.js"; </br>
     </br>
    const app = express(); </br>
    const PORT = process.env.PORT ?? 3000; </br>
     </br>
    app.use(logger); </br>
    app.use(express.json()); </br>
    app.use(cors()); </br>
     </br>
    app.use(studentsRoutes); </br>
     </br>
    // обробка 404 </br>
    app.use(notFoundHandler); </br>
    // обробка помилок від celebrate (валідація) </br>
    app.use(errors()); </br>
    // глобальна обробка інших помилок </br>
    app.use(errorHandler); </br>
     </br>
    await connectMongoDB(); </br>
     </br>
    app.listen(PORT, () => { </br>
    console.log(`Server is running on port ${PORT}`); </br>
    }); </br>
 </details>
</em>
 </br>
Якщо не підключити errors() від celebrate, то помилки валідації не будуть коректно оброблятися й ви отримаєте сирі Joi-помилки в консолі.

Правильний порядок підключення гарантує, що:

- notFoundHandler ловить відсутні маршрути;
- errors() перехоплює проблеми з валідацією;
- errorHandler закриває все інше.

</details>
</li>
<li>
<details>
<summary>Валідація ідентифікатора</summary>

# Валідація ідентифікатора

У MongoDB кожен документ має унікальний ідентифікатор у полі \_id. Це ObjectId, який має строго визначений формат:

- завжди рядок у шістнадцятковому (hex) вигляді;
- довжина — рівно 24 символи (12 байт у двійковому представленні);
- автоматично генерується MongoDB при створенні документа.

Через це будь-який довільний рядок (навіть із 24 символів) не обов’язково буде валідним ObjectId. Якщо такий рядок передати у запит, MongoDB може повернути помилку або просто не знайти документ.

Щоб цього уникнути, ми додаємо валідацію ідентифікатора ще на рівні API. Це дозволяє:

- відсіювати некоректні або шкідливі запити;
- не передавати у базу "сміттєві" значення;
- одразу повертати зрозумілу помилку клієнту.

## Функція objectIdValidator

Створимо кастомний валідатор для Joi, який перевірятиме значення на валідність ObjectId.

<em>
<details>
   <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from 'celebrate'; </br>
      import { isValidObjectId } from 'mongoose'; </br>
   </summary>
     </br>
    // Кастомний валідатор для ObjectId </br>
    const objectIdValidator = (value, helpers) => { </br>
    return !isValidObjectId(value) ? helpers.message('Invalid id format') : value; </br>
    }; </br>
     </br>
    // Схема для перевірки параметра studentId </br>
    export const studentIdParamSchema = { </br>
    [Segments.PARAMS]: Joi.object({ </br>
    studentId: Joi.string().custom(objectIdValidator).required(), </br>
    }), </br>
    }; </br>
</details>
</em>
 </br>
<strong>isValidObjectId(value)</strong> — це утиліта з Mongoose, яка перевіряє, чи рядок відповідає формату MongoDB ObjectId.
Якщо isValidObjectId повертає false, ми викликаємо helpers.message('Invalid id format'), щоб створити помилку в Joi.
Якщо все гаразд, функція просто повертає значення далі.

Таким чином, ми отримуємо зрозумілу помилку для клієнта замість технічної MongoDB-помилки.

## Використання у маршрутах

Додамо схему у маршрут /students/:studentId, щоб celebrate автоматично перевіряв параметр studentId:

<em>
<details>
   <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { celebrate } from 'celebrate'; </br>
   </summary>
     </br>
    import { getStudentById, deleteStudent } from '../controllers/studentsController.js'; </br>
    import { studentIdParamSchema } from '../validations/studentsValidation.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.get('/students/:studentId', celebrate(studentIdParamSchema), getStudentById); </br>
    router.delete('/students/:studentId', celebrate(studentIdParamSchema), deleteStudent); </br>
     </br>
    export default router; </br>
</details>
</em>
 </br>
Ми використовуємо одну й ту саму схему для обох маршрутів:

- GET /students/:studentId — отримання студента за id;
- DELETE /students/:studentId — видалення студента за id.

Це дозволяє уникнути дублювання коду й зберігати валідацію в одному місці.

Тепер:

- Якщо id валідний → виконується контролер.
- Якщо id невалідний → celebrate одразу повертає 400 Bad Request з повідомленням "Invalid id format".

</details>
</li>
<li>
<details>
<summary>Валідація для PATCH</summary>

# Валідація для PATCH

Тепер ми реалізуємо валідацію для маршруту PATCH /students/:studentId.

У цьому випадку потрібно перевіряти дві речі:

- Ідентифікатор у параметрах маршруту. studentId має бути валідним ObjectId. Це дозволяє відсікти некоректні запити ще до звернення до бази.
- Тіло запиту. Оскільки це PATCH, усі поля є необов’язковими, але хоча б одне повинно бути передано. Для цього у Joi використовується .min(1).

Створимо схему, яка перевірятиме одночасно і params, і body:

<em>
<details>
   <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from 'celebrate'; </br>
      import { isValidObjectId } from 'mongoose'; </br>
   </summary>
     </br>
    // Кастомний валідатор для ObjectId </br>
    const objectIdValidator = (value, helpers) => { </br>
    return !isValidObjectId(value) ? helpers.message('Invalid id format') : value; </br>
    }; </br>
     </br>
    export const updateStudentSchema = { </br>
    [Segments.PARAMS]: Joi.object({ </br>
    studentId: Joi.string().custom(objectIdValidator).required(), </br>
    }), </br>
    [Segments.BODY]: Joi.object({ </br>
    name: Joi.string().min(3).max(30), </br>
    age: Joi.number().integer().min(12).max(65), </br>
    gender: Joi.string().valid('male', 'female', 'other'), </br>
    avgMark: Joi.number().min(2).max(12), </br>
    onDuty: Joi.boolean(), </br>
    }).min(1), // важливо: не дозволяємо порожнє тіло </br>
    }; </br>
</details>
</em>
 </br>
Тепер використаємо цю схему у маршруті PATCH /students/:studentId:</br>
</br>
<em>
<details>
   <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { celebrate } from 'celebrate'; </br>
      import { updateStudent } from '../controllers/studentsController.js'; </br>
   </summary>
    import { updateStudentSchema } from '../validations/studentsValidation.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.patch('/students/:studentId', celebrate(updateStudentSchema), updateStudent); </br>
     </br>
    export default router; </br>
</details>
</em>
 </br>
- Якщо studentId невалідний → повертається 400 Bad Request з повідомленням "Invalid id format".
- Якщо тіло запиту порожнє → повертається 400 Bad Request з повідомленням від Joi.
- Якщо дані валідні → виконується контролер updateStudent.

</details>
</li>
</ul>
</details>
