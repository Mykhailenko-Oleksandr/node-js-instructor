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
