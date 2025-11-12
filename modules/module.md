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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // src/index.js

const message = 'Hello world';

console.log(message);
</em>

</div>

JavaScript-код можна виконати за допомогою команди node, вказавши після неї шлях до файлу, який потрібно запустити:

node src/index.js

У терміналі побачимо результат:

Hello world

## Nodemon

Незручно щоразу після змін у коді вручну запускати JavaScript-файл або сервер, щоб перевірити результат. Щоб автоматизувати цей процес, використаємо пакет nodemon, який автоматично перезапускає застосунок після змін у файлах.

Встановіть його як залежність для розробки командою:

- <em  style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm install -D nodemon</em>

Додайте скрипт у файл package.json:

<div  style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em >
    // package.json </br>
     </br>
    { </br>
    "scripts": { </br>
    "dev": "nodemon src/index.js" </br>
    } </br>
    } </br>
  </em>
</div>
 </br>
Тепер ви можете запускати застосунок за допомогою команди:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm run dev</em>

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
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm init @eslint/config@latest</em>

Замініть вміст свого файлу eslint.config.mjs наступним кодом. Ми трохи його доповнили під наші потреби, додавши властивість rules.

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
<summary>import path from "node:path";

const somePath = path.join("some_folder", "some_file.txt");</summary>

// на macOS → 'some_folder/some_file.txt'
// на Windows → 'some_folder\\\\some_file.txt'

</details>
</em>

Можна вкладати виклики, щоб будувати складніші шляхи:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import fs from "node:fs";

fs.writeFileSync("output.txt", "Привіт з Node.js!", "utf8");
</em>

</div>

<strong>fs.writeFile(path, data, options)</strong> — асинхронний запис у файл. Повертає Promise, що виконується після завершення операції.

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import fs from "node:fs/promises";

await fs.writeFile("output.txt", "Привіт з Node.js!", "utf8");
console.log("Дані успішно записані у файл.");
</em>

</div>

### Додавання у файл

<strong>fs.appendFile(path, data, options)</strong> — асинхронне додавання у файл. Дописує дані в кінець файлу.

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import fs from "node:fs/promises";

await fs.appendFile("output.txt", "\\nЩе один рядок", "utf8");
console.log("Дані успішно додані у файл.");
</em>

</div>

### Перейменування / переміщення файлів

<strong>fs.rename(oldPath, newPath)</strong> — асинхронне перейменування або переміщення файлу. Повертає Promise.

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import fs from "node:fs/promises";

await fs.rename("oldfile.txt", "newfile.txt");
console.log("Файл успішно перейменовано.");
</em>

</div>

### Видалення файлу

<strong>fs.unlink(path)</strong> — асинхронне видалення файлу. Повертає Promise.

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import fs from "node:fs/promises";

await fs.unlink("file.txt");
console.log("Файл успішно видалено.");
</em>

</div>

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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import fs from "node:fs/promises";

const buffer = await fs.readFile("hello.txt");
// якщо у файлі hello.txt був текст "Hello World!"

console.log(buffer);
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
</em>

</div>

Вивід <Buffer ...> показує набір байтів у шістнадцятковій системі (hex). Кожен байт відповідає одному символу або службовому знаку (наприклад, пробілу).

## Кодування

Файл завжди зберігається як набір байтів. Але щоб інтерпретувати його вміст як текст, потрібно знати кодування.

Найпоширеніше текстове кодування — <strong>UTF-8</strong>. Саме воно дозволяє перетворити байти у символи:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import fs from "node:fs/promises";

const buffer = await fs.readFile("hello.txt");
console.log(buffer.toString("utf-8")); // Hello World!
</em>

</div>

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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <en>
    { </br>
    "id": 123, </br>
    "name": "John Doe", </br>
    "age": 16, </br>
    "gender": "male", </br>
    "onDuty": false </br>
    } </br>
  </en>
</div>

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

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm install express</em>

Мінімальний застосунок (app boilerplate) — файл <strong>src/server.js</strong>:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // package.json </br>
    </br>
    { </br>
    "scripts": { </br>
    "dev": "nodemon src/server.js" </br>
    } </br>
    } </br>
  </em>
</div>

Запусти у dev-режимі (ми вже налаштували nodemon у попередньому занятті):

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm run dev</em>

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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // GET-запит до кореневого маршруту "/" </br>
    app.get('/', (req, res) => { </br>
    res.status(200).json({ </br>
    message: 'Hello world!', </br>
    }); </br>
    }); </br>
  </em>
</div>
</br>
Що тут відбувається:

- app.get — ми реєструємо маршрут для GET-запитів.
- '/' — шлях. Це означає, що маршрут спрацює при запиті до http://localhost:3000/.
- (req, res) => { ... } — функція-обробник. Вона виконається автоматично, коли на сервер прийде GET-запит до цього шляху.
- res.status(200) — встановлюємо код відповіді 200 OK.
- res.json({ message: 'Hello world!' }) — відправляємо відповідь у форматі JSON.

Маршрутів може бути скільки завгодно

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
</div>

- GET /users → повертає масив користувачів.
- GET /users/:userId → повертає дані одного користувача.

У виразі шляху частина з двокрапкою (:userId) означає, що ця частина URL є змінною. Значення параметра потрапляє в об’єкт req.params.

Приклади:

- Запит GET /users/5 → req.params.userId === "5".
- Запит GET /users/42 → req.params.userId === "42".

Параметри завжди приходять у вигляді рядків. Якщо потрібне число, його треба конвертувати:

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">const userId = Number(req.params.userId);</em>

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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    app.use(middleware); // для всіх маршрутів
    app.use('/path', middleware); // тільки для /path/\*
  </em>
</div>

Звичайні middleware мають три аргументи:

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">(req, res, next) => { ... }</em>

- req — запит
- res — відповідь
- next — функція, яка передає обробку далі

Якщо middleware не завершує обробку (res.json, res.send тощо), воно обов’язково має викликати next(). Інакше запит «зависне».

Приклад: логування часу

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">(err, req, res, next) => { ... }</em>

- err — об’єкт помилки
- req — запит
- res — відповідь
- next — функція для передачі далі (зазвичай не використовується, бо обробку завершує це middleware)

Express автоматично передає сюди помилки, якщо попереднє middleware або маршрут викликав next(err) чи виникла синхронна помилка.

Таке middleware завжди підключається останнім після усіх звичайних middleware та маршрутів, інакше воно не перехопить помилки.

Доповнимо наш приклад з логуванням додавши middleware обробки помилок:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    app.use((req, res) => { </br>
    res.status(404).json({ message: 'Route not found' }); </br>
    }); </br>
    </br>
  </em>
</div>

Особливість цього middleware у тому, що воно підключається після всіх маршрутів, але перед middleware для обробки помилок. Якщо жоден із маршрутів не збігся, керування дійде сюди.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">Access-Control-Allow-Origin: \*</em>

Це означає, що доступ дозволений з будь-якого джерела. В Express для цього використовують пакет cors:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm install cors</em>

Підключення у коді:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // src/server.js
    import express from 'express';
    import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors()); // Дозволяє запити з будь-яких джерел

// Решта коду
</em>

</div>

У більш складних випадках можна задавати конкретні домени чи методи, але для базового застосунку цього достатньо.

### Логування запитів

Логування допомагає відслідковувати, як працює застосунок: які запити надходять, які відповіді повертаються і скільки часу займає обробка.

Ми використаємо сучасний логер <strong>pino-http</strong>. Він дуже швидкий і простий у налаштуванні.

Встановлення:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm install pino-http pino-pretty</em>

Підключення у коді:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // .env </br>
   </br>
  PORT=3000 </br>
  </em>
</div>
</br>
.env обов’язково додається в .gitignore і ніколи не комітиться в репозиторій. Якщо випадково закомітили — потрібно негайно змінити всі ключі й паролі. Навіть видалення файлу у наступному коміті не прибере його з історії.

Доброю практикою є створення файлу .env.example, де перелічуються всі змінні без реальних значень. Це допомагає іншим розробникам налаштувати своє середовище:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // .env.example </br>
   </br>
  PORT=9999 </br>
  </em>
</div>
</br>
Використання змінних у коді

Щоб зчитувати .env, встановлюємо пакет <strong>dotenv</strong>:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm install dotenv</em>

Імпортуємо його у коді:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // src/server.js </br>
   </br>
  // Такий імпорт одразу ініціалізує бібліотеку </br>
  import 'dotenv/config'; </br>
  </em>
</div>
</br>
У Node.js змінні доступні через глобальний об’єкт process.env:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
</div>
</br>
Значення у process.env завжди є рядками. Якщо потрібен інший тип (наприклад число чи булеве значення), його слід явно конвертувати. Використання дефолтного значення (?? 3000) захистить від ситуацій, коли змінна у .env ще не вказана.

## Middleware обробки помилок

Наша мідлвара для обробки помилок у поточному вигляді завжди відправляє користувачу деталі помилки (err.message). Це зручно під час розробки, але в продакшені так робити небезпечно — користувач може побачити внутрішню інформацію про застосунок.

Щоб вирішити цю проблему, ми додамо змінну оточення NODE_ENV, яка буде вказувати, у якому середовищі працює застосунок:

- development — режим розробки (показуємо деталі помилки і стек).
- production — продакшн (повертаємо лише загальне повідомлення).

Оновлюємо файл .env у корені проєкту:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    #.env
    PORT=3000
    NODE_ENV=development
  </em>
</div>

Тепер під час локальної розробки process.env.NODE_ENV матиме значення development.

Оновлений код middleware:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    { </br>
    "id": 1, </br>
    "name": "Alice", </br>
    "email": "alice@mail.com" </br>
    } </br>
  </em>
</div>
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

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">mongodb+srv://borismeshkovaws:12345678@cluster0.xpxkilq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0</em>

У код його додавати не можна — це небезпечно. Натомість ми збережемо ці дані у файлі .env, щоб зручно працювати з різними середовищами (локально, на тесті, у продакшені).

#.env

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    PORT=3000 </br>
    MONGO_URL=mongodb+srv://borismeshkovaws:12345678@cluster0.xpxkilq.mongodb.net/?retryWrites=true& w=majority&appName=Cluster0 </br>
  </em>
</div>
</br>
І не забудьте оновити файл .env.example, щоб інші розробники бачили, які змінні треба налаштувати:

#.env.example

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    PORT= </br>
    MONGO_URL=
  </em>
</div>

## Підключення MongoDB

Щоб працювати з базою даних, нам потрібно підключитися до неї зі свого бекенду. Робити це "вручну" через драйвер MongoDB незручно, тому ми використаємо бібліотеку Mongoose.

Mongoose спрощує роботу з базою:

- дозволяє легко підключитися,
- працювати з колекціями як з об’єктами,
- будувати схеми та моделі для даних.

Встановлюємо пакет у наш проєкт:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm install mongoose</em>

Файл для підключення

Щоб код був структурованим, створимо у папці src нову папку db, а в ній файл connectMongoDB.js. Там ми напишемо функцію для підключення до бази даних.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    #.env </br>
   </br>
    PORT=3000 </br>
    MONGODB_URL=mongodb+srv://borismeshkovaws:12345678@cluster0.xpxkilq.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0 </br>
  </em>
</div>
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // src/models/student.js </br>
     </br>
    import { model } from 'mongoose'; </br>
     </br>
    /_ Решта коду файла _/ </br>
     </br>
    export const Student = model('Student', studentSchema); </br>
  </em>
</div>
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  src/ </br>
  --middleware/ </br>
  ----errorHandler.js </br>
  ----notFoundHandler.js </br>
  ----logger.js </br>
  --server.js </br>
  </br>
</div>

## Error middleware

Перенесемо middleware для обробки помилок у файл <strong>errorHandler.js</strong>.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // src/middleware/notFoundHandler.js </br>
     </br>
    export const notFoundHandler = (req, res) => { </br>
    res.status(404).json({ message: 'Route not found' }); </br>
    }; </br>
  </em>
</div>
 </br>
Це middleware підключається після всіх маршрутів.
Якщо жоден маршрут не збігся, керування потрапить сюди.
Ми відправляємо клієнту відповідь зі статусом 404 Not Found.

## Логер Pino

Щоб бачити всі запити, підключимо pino-http у <strong>logger.js</strong>.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // src/routes/studentsRoutes.js </br>
     </br>
    import { Router } from 'express'; </br>
     </br>
    const router = Router(); </br>
     </br>
    export default router; </br>
  </em>
</div>
 </br>
Переносимо обробники у роутер

Далі переносимо контролери, які обробляють маршрути /students та /students/:studentId із файла server.js у файл роутингу studentsRoutes.js. Для їх оголошення замість app використовуємо створений router.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary >
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">npm install http-errors</em>

У контролері використовуємо функцію createHttpError:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    { </br>
    "name": "Alice", </br>
    "age": 20, </br>
    "gender": "female" </br>
    } </br>
  </em>
</div>
</br>

Коли клієнт надсилає такий об’єкт у запиті POST /students, сервер отримає ці дані та створить нового студента в базі.

## Як сервер розуміє тіло запиту?

Для цього використовуються HTTP-заголовки. Найважливіший із них — <strong>Content-Type</strong>.

- Якщо Content-Type: application/json, сервер очікує, що тіло запиту буде у форматі JSON.
- Якщо Content-Type: multipart/form-data, то тіло містить файл (або кілька файлів) разом із даними форми.
- Якщо Content-Type: text/plain, сервер отримає просто звичайний текст.

Заголовок <strong>Content-Length</strong> вказує розмір тіла запиту в байтах. Він зазвичай виставляється автоматично і допомагає переконатися, що дані передані повністю.

Приклад:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    Content-Type: application/json
    Content-Length: 256
  </em>
</div>

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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    const controller = (req, res) => { </br>
    const body = req.body; </br>
    }; </br>
  </em>
</div>
 </br>
Але якщо спробувати вивести req.body без додаткових налаштувань — він буде порожнім. Чому так? Тому що Express за замовчуванням не знає, як "розпакувати" тіло запиту. Для цього потрібна спеціальна middleware, яка вміє парсити дані.

## Вбудована middleware Express

У сучасних версіях Express достатньо додати в server.js таке налаштування:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import express from 'express'; </br>
   </br>
    const app = express(); </br>
   </br>
    // ця middleware "вчить" Express розуміти JSON у тілі запиту </br>
    app.use(express.json()); </br>
  </em>
</div>
</br>

Це налаштування ми вже додали в нашому проєкті. Завдяки йому Express автоматично парсить тіло запиту, якщо заголовок Content-Type встановлений у application/json. У такому випадку дані потрапляють у req.body як звичайний JavaScript-об’єкт.

Раніше для цього використовували окремий пакет body-parser, але тепер він вбудований у Express, тож додатково встановлювати його не потрібно.

## Інші формати JSON

Іноді клієнти можуть надсилати JSON із менш стандартними заголовками. Наприклад, за специфікацією <strong>JSON:API</strong> використовується <strong>application/vnd.api+json</strong>. У такому випадку потрібно явно вказати додаткові типи:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import express from 'express'; </br>
     </br>
    const app = express(); </br>
     </br>
    app.use(express.json({ </br>
    type: ['application/json', 'application/vnd.api+json'], </br>
    })); </br>
  </em>
</div>
 </br>

## Обмеження розміру тіла

Щоб захистити сервер від занадто великих запитів (наприклад, якщо користувач випадково чи навмисно надсилає дуже великий об’єкт), можна задати ліміт на розмір тіла.

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    import express from 'express'; </br>
     </br>
    const app = express(); </br>
     </br>
    app.use(express.json({ </br>
    limit: '100kb', // максимум 100 кілобайт </br>
    })); </br>
  </em>
</div>
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
</div>
 </br>
Перший аргумент для Student.create() обов’язковий і має містити об'єкт даних, які будуть використані для створення нового документа у колекції. База даних створює новий документ, додає до нього унікальний ідентифікатор та повертає створений об’єкт.

Очікуваний приклад тіла запиту (поля мають відповідати нашій схемі Student):

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    { </br>
    "name": "John Doe", </br>
    "age": 18, </br>
    "gender": "male", </br>
    "avgMark": 10.3, </br>
    "onDuty": true </br>
    } </br>
  </em>
</div>
 </br>
Якщо тіло не відповідає схемі (наприклад, бракує обов’язкових полів або неправильні типи), Mongoose згенерує базову помилку валідації. Такі помилки автоматично підуть у наш errorHandler.

## Роут

Підключаємо контролер у маршрутизатор студентів:

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
</div>
 </br>
Роут

Підключаємо контролер у маршрутизатор студентів:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

  <div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
    <em>
    { </br>
    "avgMark": 9.8, </br>
    "onDuty": false </br>
    } </br>
    </em>
  </div>
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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
  { </br>
  [Segments.PARAMS]: Joi.object({ </br>
  category: Joi.string().valid('work', 'study', 'personal').required(), </br>
  }) </br>
  } </br>
  </em>
</div>
</br>
У цьому випадку валідуються параметри маршруту, а саме :category.

Якщо зробити запит GET /notes/work або GET /notes/personal — він пройде валідацію.
Якщо ж зробити GET /notes/music — celebrate одразу поверне помилку 400 Bad Request, і контролер не виконається.

## Кастомізація повідомлень про помилки

За замовчуванням повідомлення про помилки в Joi можуть бути незручними для користувачів: вони занадто технічні й складні для фронтенду.

Тому варто робити власні повідомлення, щоб у відповіді віддавати більш зрозумілу інформацію — що саме пішло не так із валідацією. Це полегшує обробку помилок на клієнті й покращує досвід як для розробників, так і для користувачів.

Ми можемо налаштовувати повідомлення через метод <strong>.messages()</strong>:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">router.post('/students', celebrate(createStudentSchema), createStudent);</em>

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
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
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
<li>
<details>
<summary>Створення пагінації</summary>

# Створення пагінації

Додаємо пагінацію до маршруту отримання всіх студентів GET /students. Ми очікуємо, що клієнт може передати у рядку запиту параметри page та perPage.

- /students?page=1&perPage=15

Це означає: "поверни мені першу сторінку з 15 студентів".

## Валідація параметрів

Щоб запити були коректними, одразу додамо валідацію через Joi і celebrate. Для валідації параметрів рядка запиту описуємо схему в Segments.QUERY.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from "celebrate"; </br>
       </br>
      export const getStudentsSchema = { </br>
   </summary>
    [Segments.QUERY]: Joi.object({ </br>
    page: Joi.number().integer().min(1).default(1), </br>
    perPage: Joi.number().integer().min(5).max(20).default(10), </br>
    }), </br>
    }; </br>
</details>
</em>
 </br>
Що тут відбувається:

- page — має бути цілим числом, не менше ніж 1. Якщо клієнт не передав значення, воно автоматично дорівнює 1.
- perPage — кількість студентів на сторінці. Має бути від 5 до 20. Якщо клієнт не вказав, за замовчуванням буде 10.
- Обидва параметри необов’язкові: якщо їх немає в запиті, ми все одно отримаємо безпечні дефолтні значення.

Додаємо middleware валідації до маршруту:</br>

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
  // src/routes/studentsRoutes.js </br>
  </br>
  import { getStudentsSchema } from "../validations/studentsValidation.js"; </br>
  </br>
  router.get("/students", celebrate(getStudentsSchema), getStudents); </br>
  </em>
</div>

## Контролер із логікою пагінації

Тепер оновимо контролер getStudents, щоб він віддавав студентів частинами.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      //src/controllers/studentsController.js </br>
       </br>
      import { Student } from "../models/student.js"; </br>
       </br>
      export const getStudents = async (req, res) => { </br>
   </summary>
    // Отримуємо пара метри пагінації </br>
    const { page = 1, perPage = 10 } = req.query; </br>
     </br>
    const skip = (page - 1) \* perPage; </br>
     </br>
    // Створюємо базовий запит до колекції </br>
    const studentsQuery = Student.find(); </br>
     </br>
    // Виконуємо одразу два запити паралельно </br>
    const [totalItems, students] = await Promise.all([ </br>
    studentsQuery.clone().countDocuments(), </br>
    studentsQuery.skip(skip).limit(perPage), </br>
    ]); </br>
     </br>
        // Обчислюємо загальну кількість «сторінок» </br>
     </br>
    const totalPages = Math.ceil(totalItems / perPage); </br>
     </br>
    res.status(200).json({ </br>
    page, </br>
    perPage, </br>
    totalItems, </br>
    totalPages, </br>
    students, </br>
    }); </br>
    }; </br>
</details>
</em>
 </br>
У відповіді ми віддаємо не тільки список студентів, але й корисну мета-інформацію:

- на якій сторінці він зараз,
- скільки студентів показано на сторінці,
- скільки студентів є загалом,
- скільки всього сторінок доступно.

## Розбір коду крок за кроком

1. Обчислюємо skip

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">const skip = (page - 1) \* perPage;</em>

Це визначає, скільки записів потрібно пропустити перед тим, як відібрати дані для поточної сторінки:

- якщо page = 1 → пропускаємо 0 записів;
- якщо page = 2 → пропускаємо perPage записів;
- якщо page = 3 → пропускаємо 2 \* perPage записів.
  Таким чином ми зсуваємося на потрібну сторінку.

2. Створюємо базовий запит

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">const studentsQuery = Student.find();</em>

Тут ми ще не звертаємось до бази, а лише описуємо запит. Це дозволяє згодом «доповнювати» його іншими методами (skip, limit тощо).

3. Виконуємо запити паралельно

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    const [totalItems, students] = await Promise.all([ </br>
    studentsQuery.clone().countDocuments(), </br>
    studentsQuery.skip(skip).limit(perPage), </br>
    ]); </br>
  </em>
</div>
</br>
- .countDocuments() — підраховує загальну кількість студентів у колекції.
- .skip(skip).limit(perPage) — повертає тільки ту частину студентів, яка відповідає потрібній сторінці.

Ми запускаємо обидва запити одночасно за допомогою Promise.all. Це економить час, бо замість того, щоб чекати спочатку на один, а потім на інший — вони виконуються паралельно.

4. Чому потрібен <strong>.clone()</strong>

У Mongoose один і той самий запит не можна виконати двічі. Тому перед повторним використанням його потрібно «клонувати». У нашому випадку це потрібно, щоб один раз отримати кількість документів, а другий — самі документи.

5. Обчислюємо кількість сторінок

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">const totalPages = Math.ceil(totalItems / perPage);</em>

Наприклад, якщо в колекції є 53 студенти, а на сторінку ми показуємо по 10, отримаємо:

Math.ceil(53 / 10) = 6

Тобто дані займають 6 сторінок.

</details>
</li>
<li>
<details>
<summary>Фільтрація</summary>

# Фільтрація

Коли ми працюємо з великими наборами даних, важливо мати можливість отримувати не всі документи одразу, а лише ті, які відповідають певним умовам. Це і є фільтрація.

Фільтрація дозволяє:

- обмежувати результати запитів;
- працювати тільки з потрібними даними;
- оптимізувати роботу сервера й бази даних.

Як клієнт передає фільтри

Найпоширеніший спосіб — через query parameters в URL.

https://example.com/students?minAge=12&maxAvgMark=10

- символ ? відділяє шлях (/students) від параметрів;
- параметри передаються у вигляді ключ=значення;
- кілька параметрів розділяються знаком &.

У цьому прикладі:

- minAge=12 означає, що мінімальний вік студента має бути 12 років;
- maxAvgMark=10 означає, що середній бал не повинен перевищувати 10.

Фільтрацію варто виконувати саме на рівні бази даних, тобто на бекенді, а не після отримання всіх даних на фронтенді . Це швидше та ефективніше.

## Фільтрація в MongoDB

У MongoDB ми можемо накладати умови за допомогою спеціальних операторів.

Приклад: знайти студентів, у яких середній бал від 10 і вище:

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">db.students.find({ avgMark: { $gte: 10 } });</em>

Тут <strong>$gte</strong> означає greater than or equal (більше або дорівнює).

## Основні оператори в Mongoose

У Mongoose ці оператори працюють так само. Ось кілька прикладів:

1. <strong>Рівність ($eq)</strong>

Student.find({ age: { $eq: 9 } });

Знаходимо студентів з віком 9.

2. <strong>Нерівність ($ne)</strong>

Student.find({ avgMark: { $ne: 10 } });

Знаходимо студентів, у яких середній бал не дорівнює 10.

3. <strong>Більше ($gt), Більше або дорівнює ($gte)</strong>

Student.find({ age: { $gt: 8 } });

Знаходимо студентів з віком більше 8.

4. <strong>Менше ($lt), Менше або дорівнює ($lte)</strong>

Student.find({ avgMark: { $lte: 8.5 } });

Знаходимо студентів із середнім балом не вищим за 8.5.

5. <strong>У межах списку ($in)</strong>

Student.find({ gender: { $in: ['male', 'female'] } });

Знаходимо студентів чоловічої або жіночої статі.

6. <strong>Не у списку ($nin)</strong>

Student.find({ gender: { $nin: ['male'] } });

Знаходимо всіх студентів, крім чоловіків.

## Query Builder у Mongoose

У Mongoose є зручний механізм побудови складних запитів — Query Builder. Він дозволяє будувати умови покроково, додаючи фільтри «ланцюжком».

Приклад:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    await Student.find() </br>
    .where('age').gte(6).lte(10) // вік від 6 до 10 включно </br>
    .where('avgMark').gt(7) // середній бал більше 7 </br>
    .exec(); </br>
  </em>
</div>
</br>
Що тут відбувається:

- .where('age').gte(6).lte(10) → додаємо умову для віку;
- .where('avgMark').gt(7) → додаємо умову для середнього балу;
- .exec() → виконує зібраний запит.

Таким чином, ми отримаємо студентів, яким від 6 до 10 років, і які мають середній бал вище 7.

Завдяки фільтрації ми можемо швидко працювати навіть із великими колекціями, отримуючи лише ті дані, які нам потрібні.

</details>
</li>
<li>
<details>
<summary>Створення фільтрів</summary>

# Створення фільтрів

Додамо можливість фільтрувати колекцію студентів за статтю (gender) та мінімальним значенням середнього балу (minAvgMark).

Приклад запиту з усіма параметрами:

- /students?page=1&perPage=15&gender=female&minAvgMark=2

## Схема валідації

Спочатку оновимо схему, щоб перевіряти всі можливі query-параметри у маршруті GET /students.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
    <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from "celebrate"; </br>
       </br>
      export const getStudentsSchema = { </br>
    </summary>
    [Segments.QUERY]: Joi.object({ </br>
    page: Joi.number().integer().min(1).default(1), </br>
    perPage: Joi.number().integer().min(5).max(20).default(10), </br>
    gender: Joi.string().valid("male", "female", "other"), </br>
    minAvgMark: Joi.number().positive() </br>
    }) </br>
    }; </br>
</details>
</em>
 </br>
- page і perPage — як і раніше, для пагінації;
- gender — дозволені значення "male", "female", "other";
- minAvgMark — число більше нуля, для вибору студентів із середнім балом вище заданого.

## Контролер

Тепер у контролері будуємо запит динамічно, враховуючи, які параметри передав користувач.

Модифікуємо код контролера:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      export const getStudents = async (req, res) => { </br>
      const { page = 1, perPage = 10, gender, minAvgMark } = req.query; </br>
      const skip = (page - 1) \* perPage; </br>
   </summary>
     </br>
    const studentsQuery = Student.find(); </br>
     </br>
    // Будуємо фільтр </br>
    if (gender) { </br>
    studentsQuery.where("gender").equals(gender); </br>
    } </br>
    if (minAvgMark) { </br>
    studentsQuery.where("avgMark").gte(minAvgMark); </br>
    } </br>
     </br>
    const [totalItems, students] = await Promise.all([ </br>
    studentsQuery.clone().countDocuments(), </br>
    studentsQuery.skip(skip).limit(perPage), </br>
    ]); </br>
     </br>
    const totalPages = Math.ceil(totalItems / perPage); </br>
     </br>
    res.status(200).json({ </br>
    page, </br>
    perPage, </br>
    totalItems, </br>
    totalPages, </br>
    students, </br>
    }); </br>
    }; </br>
 </details>
</em>
 </br>
Що тут відбувається?

- studentsQuery.where("gender").equals(gender) — додає умову для фільтрації за статтю, якщо параметр переданий.
- studentsQuery.where("avgMark").gte(minAvgMark) — додає умову для фільтрації за середнім балом (беремо тільки тих, у кого avgMark ≥ minAvgMark).
- Promise.all([...]) — запускаємо підрахунок (countDocuments) і отримання списку студентів одночасно, щоб не робити два послідовних запити.
- .clone() — потрібен у Mongoose, щоб один і той самий запит можна було виконати двічі (для підрахунку і для вибірки).

У результаті ми отримуємо список студентів із врахуванням пагінації та фільтрів, а також додаткову інформацію: скільки всього студентів (totalItems) і скільки сторінок (totalPages).

</details>
</li>
<li>
<details>
<summary>Текстовий пошук</summary>

# Текстовий пошук

Коли в нас є рядкові поля (наприклад, name) і користувач хоче знайти студентів за словами з цих полів (наприклад, search=Anna), зручно робити повнотекстовий пошук. У MongoDB він реалізується оператором <strong>$text</strong>, але працює лише по полях, які входять до текстового індексу.

<strong>Індекс</strong> — це окрема структура даних, яку MongoDB підтримує поруч із колекцією, щоб прискорювати пошук. Для текстового пошуку потрібен текстовий індекс. Без нього запит із $text просто не працюватиме (MongoDB повідомить, що немає відповідного індексу). Може бути лише один текстовий індекс на колекцію, але в нього можна включити декілька полів одразу.

Оператор $text шукає слова, а не частини слова. Anna знайдеться, а Ann — ні. Для часткових збігів використовується <strong>$regex</strong>.
Додаємо текстовий індекс до моделі Student

Ми хочемо шукати студентів за іменем, тому додамо індекс на поле name.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <summary>
      // src/models/student.js </br>
      import { Schema, model } from "mongoose"; </br>
       </br>
      // Решта коду файла </br>
  </summary>
     </br>
    // Додаємо текстовий індекс: кажемо MongoDB, що по полю name можна робити $text </br>
    studentSchema.index({ name: "text" }); </br>
     </br>
    export const Student = model("Student", studentSchema); </br>
</details>
</em>
 </br>
Так індекс стає частиною коду й буде однаково створений на будь-якому середовищі (локальному, staging, production).

## Синхронізація індексу з базою

Після зміни схеми Mongoose ще не створює індекс автоматично. Щоб MongoDB додала його в колекцію, потрібно один раз після підключення виконати:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/db/connectMongoDB.js </br>
       </br>
      import mongoose from "mongoose"; </br>
      import { Student } from "../models/student.js"; </br>
   </summary>
     </br>
    export const connectMongoDB = async () => { </br>
    try { </br>
    const mongoUrl = process.env.MONGO_URL; </br>
    await mongoose.connect(mongoUrl); </br>
    console.log("✅ MongoDB connection established successfully"); </br>
     </br>
        // Гарантуємо, що індекси в БД відповідають схемі </br>
        await Student.syncIndexes(); </br>
        console.log("Indexes synced successfully"); </br>
     </br>
    } catch (error) { </br>
    console.error("❌ Failed to connect to MongoDB:", error.message); </br>
    process.exit(1); </br>
    } </br>
    }; </br>
 </details>
</em>
 </br>
Ця команда перевірить, чи індекс уже існує, і створить його, якщо ні.

## Доповнюємо код контролера

Отримуємо новий параметр search із req.query і додаємо до запиту пошуку студентів ще одну умову з використанням $text через той самий ланцюжок studentsQuery.where().

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      import { Student } from "../models/student.js"; </br>
       </br>
      export const getStudents = async (req, res) => { </br>
      // Отримуємо параметри запиту </br>
   </summary>
    const { page = 1, perPage = 10, gender, minAvgMark, search } = req.query; </br>
    const skip = (page - 1) \* perPage; </br>
     </br>
    // Створюємо базовий запит </br>
    const studentsQuery = Student.find(); </br>
     </br>
    // Текстовий пошук по name (працює лише якщо створено текстовий індекс) </br>
    if (search) { </br>
    studentsQuery.where({ </br>
    $text: { $search: search } </br>
    }); </br>
    } </br>
     </br>
    // Фільтр за статтю </br>
    if (gender) { </br>
    studentsQuery.where("gender").equals(gender); </br>
    } </br>
     </br>
    // Фільтр за середнім балом </br>
    if (minAvgMark) { </br>
    studentsQuery.where("avgMark").gte(minAvgMark); </br>
    } </br>
     </br>
    const [totalItems, students] = await Promise.all([ </br>
    studentsQuery.clone().countDocuments(), </br>
    studentsQuery.skip(skip).limit(perPage), </br>
    ]); </br>
     </br>
    const totalPages = Math.ceil(totalItems / perPage); </br>
     </br>
    res.status(200).json({ </br>
    page, </br>
    perPage, </br>
    totalItems, </br>
    totalPages, </br>
    students, </br>
    }); </br>
    }; </br>
 </details>
</em>
 </br>
Не забуваємо валідацію параметра search:</br>
</br>
<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from "celebrate"; </br>
       </br>
      export const getStudentsSchema = { </br>
      [Segments.QUERY]: Joi.object({ </br>
   </summary>
    page: Joi.number().integer().min(1).default(1), </br>
    perPage: Joi.number().integer().min(5).max(20).default(10), </br>
    gender: Joi.string().valid("male", "female", "other"), </br>
    minAvgMark: Joi.number().positive(), </br>
    search: Joi.string().trim().allow('') </br>
    }) </br>
    }; </br>
 </details>
</em>
 </br>
Після цього можна передавати текст для пошуку, і все працюватиме.

## Типові помилки та як їх уникнути

- Забули додати індекс у схему → $text не працює.
- Не викликали syncIndexes() після зміни схеми → у БД індексу все ще немає.
- Очікуєте, що $text знайде підрядок → він працює тільки по цілих словах.

## Додаткові налаштування індексів

При створенні індексу у функцію index можна передати додаткові налаштування як другий аргумент. Наприклад:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/models/student.js </br>
       </br>
      import { Schema, model } from "mongoose"; </br>
       </br>
      // Решта коду файла </br>
   </summary>
     </br>
    // Додаємо текстовий індекс: кажемо MongoDB, що по полю name можна робити $text </br>
    studentSchema.index( </br>
    { name: "text" }, </br>
    { </br>
    name: "StudentTextIndex", </br>
    weights: { name: 10 }, </br>
    default_language: "english", </br>
    } </br>
    ); </br>
     </br>
    export const Student = model("Student", studentSchema); </br>
</details>
</em>
 </br>
<strong>name</strong>

Це назва індексу в базі даних, а не поле колекції. MongoDB зазвичай створює автоматичну назву типу "name_text", але краще дати свою — наприклад, "StudentTextIndex". Це зручно, якщо потім потрібно буде переглянути список індексів у Compass.

<strong>weights</strong>

Використовується, коли текстовий індекс створюється на кілька полів одночасно. Кожному полю можна задати вагу (пріоритет) для розрахунку релевантності під час пошуку.

Наприклад:

- weights: { name: 10, gender: 2 }

У цьому випадку збіги в полі name будуть важливішими, ніж у gender. У нашому прикладі лише одне поле (name), тому вага 10 — просто приклад, який показує, як це робиться.

<strong>default_language</strong>

MongoDB під час пошуку намагається «розуміти» мову тексту:

- ігнорує стоп-слова (the, and, is тощо);
- приводить слова до основи (наприклад, run, running, runs → run).
- Це відбувається відповідно до мови, вказаної в default_language.

Якщо встановити "english", MongoDB застосовуватиме англійські правила стемінгу.

Якщо текст не англійський (наприклад, імена чи українські слова), це не завадить — просто частина лінгвістичної обробки не спрацює.

## Пошук через регулярні вирази з $regex

MongoDB підтримує два способи пошуку тексту: через <strong>$text</strong> і через <strong>$regex</strong>. Вони вирішують схожі завдання, але працюють по-різному.

<strong>Оператор $text</strong>

- Працює через текстовий індекс, тому швидкий навіть на великих колекціях.
- Шукає цілі слова, а не частини.
- Використовується, коли пошук має бути точним — наприклад, за іменем чи назвою.
- Підтримує мовний аналіз (ігнорує стоп-слова, розпізнає форми слів).
- // знайде студентів, у яких слово "Anna" є в полі name
- studentsQuery.where({ $text: { $search: "Anna" } });

$text не знайде частину слова. Наприклад, "Ann" не знайде "Anna".

<strong>Оператор $regex</strong>

- Використовується для пошуку частини слова або шаблону.
  Не потребує індексу, але через це повільніший, бо перевіряє кожен документ.
- Має опції — наприклад, "i" для ігнорування регістру.
- studentsQuery.where({
  name: { $regex: search, $options: "i" },
  });

Тут:

- search — це текст із параметра запиту (?search=ann);
- $regex означає «знайди підрядок у полі name»;
- $options: "i" робить пошук нечутливим до великих/малих літер (Ann, ann, ANN знайдуться).

На практиці колекції даних часто містять тисячі або мільйони документів, тому пошук через $regex виконується відчутно повільніше, адже база даних змушена повністю перебирати колекцію без використання індексу. Для повнотекстового пошуку доцільніше застосовувати індекси та оператор $text.

</details>
</li>

<li>
<details>
<summary>Сортування</summary>

# Сортування

Сортування даних — одна з базових операцій у будь-якому застосунку. Воно дозволяє впорядкувати записи в певному порядку: наприклад, показати студентів від наймолодших до найстарших, або відсортувати за середнім балом.

## Основні принципи сортування

Поле сортування — визначає, за яким атрибутом (полем) проводиться сортування. У нашому випадку це можуть бути name, age, avgMark.
Порядок сортування — напрямок:

- зростання (ASC / ascending / 1) — від меншого до більшого;
- спадання (DESC / descending / -1) — від більшого до меншого.

Сортування краще виконувати безпосередньо у базі даних, а не в коді фронтенда. Mongoose (і MongoDB під капотом) має оптимізовані методи для цього, тому результат буде швидший і ефективніший.

## Синтаксис у Mongoose

Метод <strong>sort()</strong> у Mongoose дозволяє вказати кілька полів і напрямків сортування.

<em style="background: #383737ff; border-radius: 8px; padding-left: 10px;">Model.find().sort({ field1: direction1, field2: direction2 });</em>

- field1, field2 — назви полів, за якими проводиться сортування;
- direction1, direction2 — напрямок сортування.

Варіанти напрямків:

- 1, "asc", "ascending" → сортування за зростанням (від меншого до більшого);
- 1, "desc", "descending" → сортування за спаданням (від більшого до меншого).

Приклади:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
  <em>
    // За віком зростанням </br>
    Student.find().sort({ age: 1 }); </br>
     </br>
    // За середнім балом спаданням </br>
    Student.find().sort({ avgMark: "desc" }); </br>
     </br>
    // Комбіноване сортування: спочатку за gender зростанням, потім за age спаданням </br>
    Student.find().sort({ gender: "asc", age: -1 }); </br>
  </em>
</div>

## Додаємо сортування у нашому застосунку

Ми реалізуємо сортування для маршруту GET /students. Клієнт може передати параметри sortBy (поле для сортування) і sortOrder (порядок). Якщо параметри не передані — застосовується сортування за замовчуванням по \_id.

Валідація параметрів:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/validations/studentsValidation.js </br>
       </br>
      import { Joi, Segments } from "celebrate"; </br>
       </br>
      export const getStudentsSchema = { </br>
   </summary>
    [Segments.QUERY]: Joi.object({ </br>
    page: Joi.number().integer().min(1).default(1), </br>
    perPage: Joi.number().integer().min(5).max(20).default(10), </br>
    gender: Joi.string().valid("male", "female", "other"), </br>
    minAvgMark: Joi.number().positive(), </br>
    sortBy: Joi.string().valid("\_id", "name", "age", "avgMark").default("\_id"), </br>
    sortOrder: Joi.string().valid("asc", "desc").default("asc"), </br>
    }), </br>
    }; </br>
</details>
</em>
 </br>
- sortBy → поле для сортування (\_id, name, age, avgMark);
- sortOrder → напрямок (asc або desc), за замовчуванням "asc".

Контролер з урахуванням сортування.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      export const getStudents = async (req, res) => { </br>
      const { </br>
      page = 1, </br>
      perPage = 10, </br>
   </summary>
    gender, </br>
    minAvgMark, </br>
    // Отримуємо значення параметрів сортування </br>
    // дефолтне сортування по \_id </br>
    sortBy = "\_id", </br>
    sortOrder = "asc", </br>
    } = req.query; </br>
     </br>
    const skip = (page - 1) \* perPage; </br>
     </br>
    const studentsQuery = Student.find(); </br>
     </br>
    // Фільтрація </br>
    if (gender) { </br>
    studentsQuery.where("gender").equals(gender); </br>
    } </br>
    if (minAvgMark) { </br>
    studentsQuery.where("avgMark").gte(minAvgMark); </br>
    } </br>
     </br>
    // Пагінація + сортування </br>
    const [totalItems, students] = await Promise.all([ </br>
    studentsQuery.clone().countDocuments(), </br>
    studentsQuery </br>
    .skip(skip) </br>
    .limit(perPage) </br>
    // Додамєдо сортування в ланцюжок методів квері </br>
    .sort({ [sortBy]: sortOrder }), </br>
    ]); </br>
     </br>
    const totalPages = Math.ceil(totalItems / perPage); </br>
     </br>
    res.status(200).json({ </br>
    page, </br>
    perPage, </br>
    totalItems, </br>
    totalPages, </br>
    students, </br>
    }); </br>
    }; </br>
 </details>
</em>
 </br>
Якщо клієнт не передає параметри → студенти повертаються відсортованими по \_id у зростаючому порядку.
Якщо клієнт вкаже ?sortBy=age&sortOrder=desc → дані будуть відсортовані за віком у зворотному порядку.

Таким чином ми отримуємо гнучке API, яке дозволяє одночасно поєднувати фільтрацію, пагінацію та сортування.

</details>
</li>
</ul>
</details>

<details>
<summary>Module 4</summary>
<ul>
<li>
<details>
<summary>Реєстрація користувачів</summary>

# Реєстрація користувачів

Будь-яка робота з аутентифікацією та авторизацією починається з реєстрації користувачів. Користувач — це окрема сутність у нашому додатку, тому спочатку потрібно створити для нього модель.

## Модель користувача

Ми використовуємо email як унікальний ідентифікатор користувача. Тому додаємо до цього поля <strong>unique: true</strong>.
<em>

<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/models/user.js </br>
       </br>
      import { model, Schema } from 'mongoose'; </br>
       </br>
      const userSchema = new Schema( </br>
      { </br>
   </summary>
    username: { </br>
    type: String, </br>
    trim: true, </br>
    }, </br>
    email: { </br>
    type: String, </br>
    unique: true, </br>
    required: true, </br>
    trim: true, </br>
    }, </br>
    password: { </br>
    type: String, </br>
    required: true, </br>
    }, </br>
    }, </br>
    { timestamps: true, versionKey: false } </br>
    ); </br>
     </br>
    userSchema.pre('save', function (next) { </br>
    if (!this.username) { </br>
    this.username = this.email; </br>
    } </br>
    next(); </br>
    }); </br>
     </br>
    export const User = model('User', userSchema); </br>
</details>
</em>
 </br>
<srtong>username</srtong> — необов’язкове поле. За замовчуванням воно дорівнює email користувача. У майбутньому користувач зможе змінити ім’я у профілі.
Для цього ми використовуємо pre-hook <strong>Schema.pre("save")</strong>, який виконується перед збереженням користувача.
Оскільки ми використовуємо this (посилання на поточний документ), функція не може бути стрілковою.

## Видалення паролю з відповіді

Пароль зберігається в базі, але повертати його клієнту небезпечно. Ми можемо видаляти його автоматично з будь-якої відповіді, перевизначивши метод <strong>toJSON()</strong>.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/models/user.js </br>
       </br>
      import { model, Schema } from 'mongoose'; </br>
       </br>
      const userSchema = new Schema( </br>
      { </br>
   </summary>
    username: { </br>
    type: String, </br>
    trim: true, </br>
    }, </br>
    email: { </br>
    type: String, </br>
    unique: true, </br>
    required: true, </br>
    trim: true, </br>
    }, </br>
    password: { </br>
    type: String, </br>
    required: true, </br>
    }, </br>
    }, </br>
    { timestamps: true, versionKey: false } </br>
    ); </br>
     </br>
    userSchema.pre('save', function (next) { </br>
    if (!this.username) { </br>
    this.username = this.email; </br>
    } </br>
    next(); </br>
    }); </br>
     </br>
    // Перевизначаємо метод toJSON </br>
    userSchema.methods.toJSON = function () { </br>
    const obj = this.toObject(); </br>
    delete obj.password; </br>
    return obj; </br>
    }; </br>
     </br>
    export const User = model('User', userSchema); </br>
 </details>
</em>
 </br>
Тепер, коли ми відправляємо користувача через res.json(), поле password автоматично видаляється.

## Схема валідації

Реєстрація відбувається через POST /auth/register. Дані приходять у тілі запиту, тому створимо схему для валідації.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/validations/authValidation.js </br>
       </br>
      import { Joi, Segments } from 'celebrate'; </br>
       </br>
      export const registerUserSchema = { </br>
   </summary>
    [Segments.BODY]: Joi.object({ </br>
    email: Joi.string().email().required(), </br>
    password: Joi.string().min(8).required(), </br>
    }), </br>
    }; </br>
 </details>
</em>
 </br>

- email — повинен бути валідним email і обов’язковим;
- password — мінімум 8 символів.

## Контролер та маршрут

Контролер для реєстрації:

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      import createHttpError from 'http-errors'; </br>
      import { User } from '../models/user.js'; </br>
   </summary>
     </br>
    export const registerUser = async (req, res, next) => { </br>
    const { email, password } = req.body; </br>
     </br>
    const existingUser = await User.findOne({ email }); </br>
    if (existingUser) { </br>
    return next(createHttpError(400, 'Email in use')); </br>
    } </br>
     </br>
    // Тут далі будемо додавати логіку створення користувача </br>
    // Поки що відповідаємо порожнім об'єктом </br>
    res.status(201).json({}); </br>
    }; </br>
  </details>
</em>
 </br>

- Спочатку шукаємо користувача з таким email.
- Якщо він існує → повертаємо помилку 400 Bad Request з повідомленням Email in use.
- Якщо ні → готуємося створювати користувача (логіку додамо пізніше).

Маршрут для реєстрації:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/routes/authRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { celebrate } from 'celebrate'; </br>
   </summary>
    import { registerUser } from '../controllers/authController.js'; </br>
    import { registerUserSchema } from '../validations/authValidation.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.post('/auth/register', celebrate(registerUserSchema), registerUser); </br>
     </br>
    export default router; </br>
</details>
</em>
 </br>
І підключаємо новий роут у сервері:</br>
</br>
<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/server.js </br>
       </br>
      /_ Інший код з файлу _/ </br>
       </br>
      import authRoutes from './routes/authRoutes.js'; </br>
   </summary>
    import studentsRoutes from './routes/studentsRoutes.js'; </br>
     </br>
    app.use(authRoutes); </br>
    app.use(studentsRoutes); </br>
 </details>
</em>
 </br>
Таким чином, ми створили модель користувача, налаштували валідацію для реєстрації та підключили маршрут POST /auth/register. Наступний крок — реалізація логіки створення користувача та хешування паролю.

</details>
</li>

<li>
<details>
<summary>Хешування паролів</summary>

# Хешування паролів

На цьому етапі наш додаток зберігав би паролі у відкритому вигляді (plain text). Це небезпечна практика, адже більшість людей використовують одні й ті ж паролі у різних сервісах. Якщо дані з нашої бази потраплять у руки зловмисників, вони зможуть отримати доступ і до інших акаунтів користувача.

Щоб цього уникнути, застосовують хешування.

Що таке хешування?

<strong>Хешування</strong> — це процес перетворення даних довільної довжини у рядок фіксованої довжини, який називається хешем.

Головні властивості хеш-функцій:

- Фіксована довжина виходу: незалежно від розміру паролю, хеш завжди матиме однакову довжину.
- Унікальність: для різних вхідних даних повинні утворюватися різні хеш-значення.
- Односторонність: неможливо (або надзвичайно складно) відновити початковий пароль із хешу.
- Чутливість до змін: найменша зміна у паролі повинна призводити до абсолютно іншого хешу.
- Зручність для зберігання: хеш набагато легше зберігати, ніж сам пароль, оскільки це коротший і стандартизований рядок.

У бекенд-розробці хешування застосовують, щоб зберігати не сам пароль, а його хеш. При вході користувача пароль знову хешується, і система порівнює хеші. Якщо вони співпадають — пароль правильний.

## Використання bcrypt

У Node.js найчастіше застосовують бібліотеку bcrypt, яка спеціально створена для безпечного хешування паролів. Вона додає до паролю сіль (salt) — випадковий рядок, що робить хеш унікальним навіть для однакових паролів.

Встановлюємо пакет:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">npm i bcrypt</em>

## Реалізація в контролері

Додаємо хешування у функцію реєстрації користувачів:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      import bcrypt from "bcrypt"; </br>
      import createHttpError from "http-errors"; </br>
      import { User } from "../models/user.js"; </br>
   </summary>
     </br>
    export const registerUser = async (req, res, next) => { </br>
    const { email, password } = req.body; </br>
     </br>
    const existingUser = await User.findOne({ email }); </br>
    if (existingUser) { </br>
    return next(createHttpError(400, 'Email in use')); </br>
    } </br>
     </br>
    // Хешуємо пароль </br>
    const hashedPassword = await bcrypt.hash(password, 10); </br>
     </br>
    // Створюємо користувача </br>
    const newUser = await User.create({ </br>
    email, </br>
    password: hashedPassword, </br>
    }); </br>
     </br>
    // Відправляємо дані користувача (без пароля) у відповіді </br>
    res.status(201).json(newUser); </br>
    }; </br>
 </details>
</em>
 </br>
Що тут відбувається:

- Перевірка на унікальність email: якщо такий користувач уже існує — повертаємо помилку.
- Хешування паролю: <srtong>bcrypt.hash(password, 10)</srtong> — другий аргумент 10 означає кількість раундів "соління". - Чим більше число, тим безпечніше, але тим довше триває обчислення.
- Створення користувача: у базу записуємо email і вже хешований пароль.
- Відповідь клієнту: завдяки перевизначенню toJSON() у моделі, пароль не потрапляє у відповідь.

Таким чином ми зробили зберігання паролів у базі даних безпечним. Наступний крок — навчитися перевіряти паролі під час логіну, використовуючи метод <strong>bcrypt.compare()</strong>.

</details>
</li>
<li>
<details>
<summary>Логін користувачів</summary>

# Логін користувачів

Переходимо до логіну. Логін дуже схожий на реєстрацію, але замість створення нового користувача ми:

- шукаємо існуючого користувача за email
- порівнюємо введений пароль із хешем у базі
- повертаємо відповідь у разі успіху або помилку — у разі невдачі

## Схема валідації

Спочатку описуємо валідацію тіла запиту: потрібні валідний email і пароль.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/validations/authValidation.js </br>
       </br>
      import { Joi, Segments } from 'celebrate'; </br>
       </br>
      // Решта коду файла </br>
   </summary>
     </br>
    export const loginUserSchema = { </br>
    [Segments.BODY]: Joi.object({ </br>
    email: Joi.string().email().required(), </br>
    password: Joi.string().required(), </br>
    }), </br>
    }; </br>
 </details>
</em>

## Контролер логіну

У контролері перевіряємо наявність користувача та звіряємо пароль через bcrypt.compare. Якщо щось не так — віддаємо 401 Unauthorized.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      export const loginUser = async (req, res, next) => { </br>
      const { email, password } = req.body; </br>
   </summary>
     </br>
    // Перевіряємо чи користувач з такою поштою існує </br>
    const user = await User.findOne({ email }); </br>
    if (!user) { </br>
    return next(createHttpError(401, 'Invalid credentials')); </br>
    } </br>
     </br>
    // Порівнюємо хеші паролів </br>
    const isValidPassword = await bcrypt.compare(password, user.password); </br>
    if (!isValidPassword) { </br>
    return next(createHttpError(401, 'Invalid credentials')); </br>
    } </br>
     </br>
    res.status(200).json(user); </br>
    }; </br>
 </details>
</em>
 </br>
Ключові моменти:

- <strong>bcrypt.compare(password, user.password)</strong> безпечно порівнює введений пароль із хешем у базі.
- Статус 401 означає, що облікові дані недійсні (немає користувача або пароль хибний).

## Маршрут логіну

Підключаємо валідатор і контролер до маршруту.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
  <summary>
      // src/routes/authRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { celebrate } from 'celebrate'; </br>
      import { loginUser, registerUser } from '../controllers/authController.js'; </br>
  </summary>
    import { loginUserSchema, registerUserSchema } from '../validations/authValidation.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.post('/auth/register', celebrate(registerUserSchema), registerUser); </br>
    router.post('/auth/login', celebrate(loginUserSchema), loginUser); </br>
     </br>
    export default router; </br>
</details>
</em>
 </br>
Підсумок:

- Валідатор відсікає некоректні запити ще до контролера.
- Контролер перевіряє існування користувача і правильність пароля.
- Успішний логін повертає користувача (без поля password, завдяки перевизначенню toJSON() у моделі).

</details>
</li>
<li>
<details>
<summary>Cесії</summary>

# Сесії

Аутентифікація в нашому застосунку базується на сесіях.

<strong>Сесія</strong> — це спосіб «пам’ятати» стан між запитами браузера і сервера. Завдяки сесіям ми можемо зберігати інформацію про авторизованого користувача і не змушувати його вводити пароль на кожній сторінці.

Ключові ідеї сесій:

- Ідентифікатор сесії (Session ID): унікальний ключ, що пов’язує клієнта з даними сесії. Зазвичай передається у cookies або, рідше, у URL.
- Дані сесії: зберігаються на сервері. У нашому випадку — це насамперед токени для доступу. У сесію не варто класти те, втрата чого критична.
- Термін дії: у сесій є час життя. Після нього дані стають недійсними.
- Безпека: важливо захищати ідентифікатор сесії (cookie-налаштування, HTTPS тощо).
- Ролі клієнт/сервер: клієнт зберігає лише ідентифікатор, сервер — самі дані.

## Модель сесії

Ми зберігаємо сесію в колекції sessions. Вона містить токени та їх строки дії, а також посилання на користувача.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>
      // src/models/session.js </br>
       </br>
      import { model, Schema } from 'mongoose'; </br>
       </br>
      const sessionSchema = new Schema( </br>
    </summary>
    { </br>
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, </br>
    accessToken: { type: String, required: true }, </br>
    refreshToken: { type: String, required: true }, </br>
    accessTokenValidUntil: { type: Date, required: true }, </br>
    refreshTokenValidUntil: { type: Date, required: true }, </br>
    }, </br>
    { timestamps: true, versionKey: false }, </br>
    ); </br>
     </br>
    export const Session = model('Session', sessionSchema); </br>
 </details>
</em>
 </br>
Що зберігаємо:

- accessToken — короткоживучий токен (у нас 15 хвилин).
- accessTokenValidUntil — коли accessToken спливає.
- refreshToken — довшоживучий токен (у нас 1 день), щоб оновити пару токенів.
- refreshTokenValidUntil — коли refreshToken спливає.
- userId — власник сесії.

## Константи часу

Щоб не дублювати «магічні числа», винесемо тривалість у константи.

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
  <em >
    // src/constants/time.js </br>
     </br>
    export const FIFTEEN_MINUTES = 15 _ 60 _ 1000; </br>
    export const ONE_DAY = 24 _ 60 _ 60 \* 1000; </br>
  </em>
</div>

## Створення сесії

Генеруємо пару токенів і строки їх дії в окремому сервісі. Це зручно перевикористовувати в реєстрації, логіні та оновленні сесії.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
  <summary>
      // src/services/auth.js </br>
       </br>
      import crypto from 'crypto'; </br>
      import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js'; </br>
      import { Session } from '../models/session.js'; </br>
  </summary>
     </br>
    export const createSession = async (userId) => { </br>
    const accessToken = crypto.randomBytes(30).toString('base64'); </br>
    const refreshToken = crypto.randomBytes(30).toString('base64'); </br>
     </br>
    return Session.create({ </br>
    userId, </br>
    accessToken, </br>
    refreshToken, </br>
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES), </br>
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY), </br>
    }); </br>
    }; </br>
</details>
</em>
 </br>
Пояснення:

- crypto.randomBytes(30) генерує криптографічно стійку випадкову послідовність, яку ми кодуємо в base64.
- accessToken живе недовго — це зменшує ризики у випадку витоку.
- refreshToken живе довше та використовується для отримання нової пари токенів.

## Використання в контролерах

Після реєстрації створюємо нову сесію. Після логіну — видаляємо стару (якщо була) і створюємо нову, щоб уникнути конфліктів.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
  <summary>
      // src/controllers/authController.js </br>
       </br>
      // Новий імпорт </br>
      import { createSession } from '../services/auth.js'; </br>
      import { Session } from "../models/session.js"; </br>
  </summary>
     </br>
    export const registerUser = async (req, res, next) => { </br>
    const { email, password } = req.body; </br>
     </br>
    const existingUser = await User.findOne({ email }); </br>
    if (existingUser) { </br>
    return next(createHttpError(400, 'Email in use')); </br>
    } </br>
     </br>
    const hashedPassword = await bcrypt.hash(password, 10); </br>
     </br>
    const newUser = await User.create({ </br>
    email, </br>
    password: hashedPassword, </br>
    }); </br>
     </br>
    // Створюємо нову сесію </br>
    const newSession = await createSession(newUser.\_id); </br>
     </br>
    res.status(201).json(newUser); </br>
    }; </br>
     </br>
    export const loginUser = async (req, res, next) => { </br>
    const { email, password } = req.body; </br>
     </br>
    const user = await User.findOne({ email }); </br>
    if (!user) { </br>
    return next(createHttpError(401, 'Invalid credentials')); </br>
    } </br>
     </br>
    const isValidPassword = await bcrypt.compare(password, user.password); </br>
    if (!isValidPassword) { </br>
    return next(createHttpError(401, 'Invalid credentials')); </br>
    } </br>
     </br>
    // Видаляємо стару сесію користувача </br>
    await Session.deleteOne({ userId: user.\_id }); </br>
     </br>
    // Створюємо нову сесію </br>
    const newSession = await createSession(user.\_id); </br>
     </br>
    res.status(200).json(user); </br>
    }; </br>
 </details>
</em>
 </br>
Що відбувається:

- Реєстрація: створюємо користувача, генеруємо пару токенів і зберігаємо сесію.
- Логін: перевіряємо облікові дані, прибираємо попередню сесію користувача (якщо була), створюємо нову пару токенів і сесію.

</details>
</li>

<li>
<details>
<summary>Cookies</summary>

# Cookies

Cookies (кукі) — це невеликі фрагменти даних, які сайт зберігає у браузері користувача. Вони допомагають «пам’ятати» стан між запитами: хто залогінений, які налаштування обрано, що лежить у кошику тощо. Для аутентифікації це ключовий механізм: ми зберігатимемо у куках токени доступу та ідентифікатор сесії.

Основні властивості cookies:

- Ідентифікація користувача — дозволяють відрізняти одного користувача від іншого.
- Збереження стану сесії — не доводиться логінитися на кожному запиті.
- Термін дії — можуть бути «сеансовими» (до закриття вкладки/браузера) або «персистентними» (живуть заданий час).
- Безпека — важливо правильно налаштовувати прапори, щоб ускладнити крадіжку куки.
- Доменність — браузер відправляє куки на той домен, який їх видав. Для запитів між різними доменами може знадобитися withCredentials: true (Axios) або credentials: 'include' (fetch).

Щоб заборонити доступ до наших аутентифікаційних кук із клієнтського JavaScript (і таким чином знизити ризик XSS-крадіжки), ми ставимо прапор <strong>httpOnly: true</strong>.

## Налаштовуємо парсер кук

Встановлюємо пакет і підключаємо його як middleware:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">npm i cookie-parser</em>

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/server.js </br>
       </br>
      import cookieParser from "cookie-parser"; </br>
       </br>
      // Решта коду файла </br>
   </summary>
     </br>
    app.use(express.json()); </br>
    app.use(cors()); </br>
    app.use(cookieParser()); </br>
</details>
</em>

## Які куки ми ставимо

Після створення сесії відповідаємо трьома куками:

- accessToken — короткоживучий токен доступу (у нас ~15 хв);
- refreshToken — токен для оновлення пари токенів (у нас ~1 день);
- sessionId — ідентифікатор поточної сесії (у нас ~1 день).

Щоб не дублювати логіку, винесемо встановлення кукі у сервіс:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/services/auth.js </br>
       </br>
      // Решта коду файла </br>
       </br>
      export const setSessionCookies = (res, session) => { </br>
      res.cookie('accessToken', session.accessToken, { </br>
   </summary>
    httpOnly: true, </br>
    secure: true, </br>
    sameSite: 'none', </br>
    maxAge: FIFTEEN_MINUTES, </br>
    }); </br>
     </br>
    res.cookie('refreshToken', session.refreshToken, { </br>
    httpOnly: true, </br>
    secure: true, </br>
    sameSite: 'none', </br>
    maxAge: ONE_DAY, </br>
    }); </br>
     </br>
    res.cookie('sessionId', session.\_id, { </br>
    httpOnly: true, </br>
    secure: true, </br>
    sameSite: 'none', </br>
    maxAge: ONE_DAY, </br>
    }); </br>
    }; </br>
</details>
</em>
 </br>
Пояснення ключових прапорів:

- httpOnly: true — браузер не дає доступу до куки з JS (через document.cookie). Зменшує ризик витоку токенів через XSS.
- secure: true — браузер надсилає таку куку лише через HTTPS. У продакшні це must-have; у дев-режимі без HTTPS такі куки не приліпнуть.
- sameSite: 'none' — дозволяє надсилати куку у крос-доменних запитах (коли фронтенд і бекенд на різних доменах/порталах). Важливо: SameSite=None вимагає secure: true.
  Для довідки: lax частково дозволяє крос-сайт (наприклад, при навігації за посиланням), strict — найжорсткіший варіант (тільки свій сайт).
- maxAge — час життя у мілісекундах. Після спливу браузер перестає надсилати куку.

## Додаємо встановлення cookie у контролери

Контролери створюють/перевіряють користувача і сесію, після чого встановлюють куки:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      // 1. Імпортуємо функцію setSessionCookies </br>
      import { createSession, setSessionCookies } from '../services/auth.js'; </br>
       </br>
      export const registerUser = async (req, res, next) => { </br>
   </summary>
    const { email, password } = req.body; </br>
     </br>
    const existingUser = await User.findOne({ email }); </br>
    if (existingUser) { </br>
    return next(createHttpError(400, 'Email in use')); </br>
    } </br>
     </br>
    const hashedPassword = await bcrypt.hash(password, 10); </br>
     </br>
    const newUser = await User.create({ </br>
    email, </br>
    password: hashedPassword, </br>
    }); </br>
     </br>
    const newSession = await createSession(newUser.\_id); </br>
     </br>
    // 2. Викликаємо, передаємо об'єкт відповіді та сесію </br>
    setSessionCookies(res, newSession); </br>
     </br>
    res.status(201).json(newUser); </br>
    }; </br>
     </br>
    export const loginUser = async (req, res, next) => { </br>
    const { email, password } = req.body; </br>
     </br>
    const user = await User.findOne({ email }); </br>
    if (!user) { </br>
    return next(createHttpError(401, 'Invalid credentials')); </br>
    } </br>
     </br>
    const isValidPassword = await bcrypt.compare(password, user.password); </br>
    if (!isValidPassword) { </br>
    return next(createHttpError(401, 'Invalid credentials')); </br>
    } </br>
     </br>
    await Session.deleteOne({ userId: user.\_id }); </br>
     </br>
    const newSession = await createSession(user.\_id); </br>
     </br>
    // 3. Викликаємо, передаємо об'єкт відповіді та сесію </br>
    setSessionCookies(res, newSession); </br>
     </br>
    res.status(200).json(user); </br>
    }; </br>
 </details>
</em>
 </br>
Підсумок

Після успішної реєстрації або логіну ми створюємо сесію та встановлюємо три куки:

- accessToken (живе 15 хвилин); </br>
- refreshToken (живе 1 день); </br>
- sessionId (живе 1 день). </br>
  Куки налаштовані безпечно: </br>
- httpOnly — недоступні з клієнтського JS; </br>
- secure — передаються лише через HTTPS; </br>
- sameSite: 'none' — дозволяє роботу в крос-доменних сценаріях; </br>
- maxAge — задає термін дії для кожного cookie. </br>
  Контролери при цьому: </br>
- перевіряють валідність даних; </br>
- створюють або знаходять користувача; </br>
- генерують нову сесію; </br>
- додають куки до відповіді; </br>
- відправляють дані користувача клієнту. </br>

Таким чином ми отримали повноцінний цикл: користувач вводить дані → бекенд перевіряє їх → створюється сесія → браузер отримує куки → подальші запити вже автентифіковані.

</details>
</li>
<li>
<details>
<summary>Логаут користувачів</summary>

# Логаут користувачів

Наступним кроком у розбудові нашої системи авторизації є вихід користувача з системи (logout).

При виході нам потрібно виконати дві ключові дії:

- Очистити cookies — зробити це може лише сервер, адже наші куки мають прапор httpOnly.
- Видалити сесію з бази даних — щоб токени більше не були дійсними.

## Контролер

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      // Решта коду файла </br>
       </br>
      export const logoutUser = async (req, res) => { </br>
      const { sessionId } = req.cookies; </br>
   </summary>
     </br>
    if (sessionId) { </br>
    await Session.deleteOne({ \_id: sessionId }); </br>
    } </br>
     </br>
    res.clearCookie('sessionId'); </br>
    res.clearCookie('accessToken'); </br>
    res.clearCookie('refreshToken'); </br>
     </br>
    res.status(204).send(); </br>
    }; </br>
 </details>
</em>
 </br>
Пояснення кроків:

- Перевірка sessionId:Ми отримуємо sessionId з cookies.
- Якщо він є, видаляємо відповідну сесію з бази даних (Session.deleteOne).
- Очищення cookies:Використовуємо метод res.clearCookie для видалення всіх куків: sessionId, accessToken і refreshToken.
- Це означає, що клієнт більше не зможе надсилати авторизовані запити.
- Відповідь клієнту:Повертаємо статус 204 No Content.
- Це стандартний код для успішного виконання запиту без тіла відповіді.

## Роут

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/routes/authRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { celebrate } from 'celebrate'; </br>
      import { </br>
   </summary>
    loginUser, </br>
    logoutUser, </br>
    registerUser, </br>
    } from '../controllers/authController.js'; </br>
    import { </br>
    loginUserSchema, </br>
    registerUserSchema, </br>
    } from '../validations/authValidation.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.post('/auth/register', celebrate(registerUserSchema), registerUser); </br>
    router.post('/auth/login', celebrate(loginUserSchema), loginUser); </br>
    // Новий роут </br>
    router.post('/auth/logout', logoutUser); </br>
     </br>
    export default router; </br>
 </details>
</em>
 </br>
Тепер користувач може вийти з системи: сервер видалить його сесію та куки, а всі подальші запити більше не будуть вважатися авторизованими.

</details>
</li>
<li>
<details>
<summary>Аутентифікація</summary>

# Оновлення сесії

Ми вже майже завершили створення системи авторизації та аутентифікації. Залишився важливий крок — реалізувати ротацію токенів за допомогою refresh-токена. Це дозволить користувачу залишатися авторизованим навіть після завершення терміну дії короткоживучого access-токена.

Контролер refreshUserSession

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      // Решта коду файла </br>
       </br>
      export const refreshUserSession = async (req, res, next) => { </br>
      // 1. Знаходимо поточну сесію за id сесії та рефреш токеном </br>
   </summary>
    const session = await Session.findOne({ </br>
    \_id: req.cookies.sessionId, </br>
    refreshToken: req.cookies.refreshToken, </br>
    }); </br>
     </br>
    // 2. Якщо такої сесії нема, повертаємо помилку </br>
    if (!session) { </br>
    return next(createHttpError(401, 'Session not found')); </br>
    } </br>
     </br>
    // 3. Якщо сесія існує, перевіряємо валідність рефреш токена </br>
    const isSessionTokenExpired = </br>
    new Date() > new Date(session.refreshTokenValidUntil); </br>
     </br>
    // Якщо термін дії рефреш токена вийшов, повертаємо помилку </br>
    if (isSessionTokenExpired) { </br>
    return next(createHttpError(401, 'Session token expired')); </br>
    } </br>
     </br>
    // 4. Якщо всі перевірки пройшли добре, видаляємо поточну сесію </br>
    await Session.deleteOne({ </br>
    \_id: req.cookies.sessionId, </br>
    refreshToken: req.cookies.refreshToken, </br>
    }); </br>
     </br>
    // 5. Створюємо нову сесію та додаємо кукі </br>
    const newSession = await createSession(session.userId); </br>
    setSessionCookies(res, newSession); </br>
     </br>
    res.status(200).json({ </br>
    message: 'Session refreshed', </br>
    }); </br>
    }; </br>
  </details>
</em>
 </br>
Що тут відбувається:

<strong>Пошук сесії</strong>
Перевіряємо наявність у базі сесії з переданими у cookies sessionId та refreshToken.

Якщо такої сесії немає — повертаємо 401 Unauthorized.

<strong>Перевірка строку дії refresh-токена</strong>
Якщо термін життя refreshToken минув (refreshTokenValidUntil), повертаємо помилку 401 Unauthorized.

<strong>Видалення старої сесії</strong>
Поточну сесію видаляємо з бази, щоб уникнути накопичення прострочених токенів.

<strong>Створення нової сесії</strong>
Викликаємо функцію createSession(session.userId), яка генерує нові accessToken і refreshToken.

<strong>Встановлення куків</strong>
Використовуємо setSessionCookies, щоб записати у відповідь нові cookies:

- accessToken (15 хвилин),
- refreshToken (1 день),
- sessionId (1 день).

<strong>Відповідь клієнту</strong>
Відправляємо повідомлення "Session refreshed" зі статусом 200.

## Роут

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/routes/authRoutes.js </br>
       </br>
      import { Router } from 'express'; </br>
      import { celebrate } from 'celebrate'; </br>
      import { </br>
   </summary>
    loginUser, </br>
    logoutUser, </br>
    refreshUserSession, </br>
    registerUser, </br>
    } from '../controllers/authController.js'; </br>
    import { </br>
    loginUserSchema, </br>
    registerUserSchema, </br>
    } from '../validations/authValidation.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.post('/auth/register', celebrate(registerUserSchema), registerUser); </br>
    router.post('/auth/login', celebrate(loginUserSchema), loginUser); </br>
    router.post('/auth/logout', logoutUser); </br>
    router.post('/auth/refresh', refreshUserSession); </br>
     </br>
    export default router; </br>
  </details>
</em>
 </br>
Таким чином, ми отримали повний цикл роботи сесій:

- логін або реєстрація → створюється сесія;
- у cookies зберігаються accessToken, refreshToken, sessionId;
- після закінчення терміну дії accessToken користувач може звернутися на /auth/refresh;
- сервер перевіряє refresh-токен, видаляє стару сесію та створює нову.

Це дозволяє залишати користувача в системі без необхідності повторного логіну кожні 15 хвилин.

</details>
</li>
<li>
<details>

<summary>Middleware аутентифікації</summary>

# Middleware аутентифікації

Ми вже створили механізм сесій, токенів і cookies. Наступним кроком є контроль доступу до наших даних. У реальних застосунках є приватні дані — ті, що не повинні бути доступні будь-кому. Наприклад:

- список студентів бачать лише авторизовані користувачі;
- профіль користувача доступний тільки йому самому;
- адмін-панель відкривається тільки для користувачів із роллю адміністратора.

Щоб обмежити доступ до приватних колекцій, ми створимо middleware authenticate, який перевірятиме токени у cookies і визначатиме, чи користувач може виконати запит.

## Middleware authenticate

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/middleware/authenticate.js </br>
       </br>
      import createHttpError from 'http-errors'; </br>
      import { Session } from '../models/session.js'; </br>
      import { User } from '../models/user.js'; </br>
   </summary>
     </br>
    export const authenticate = async (req, res, next) => { </br>
    // 1. Перевіряємо наявність accessToken </br>
    if (!req.cookies.accessToken) { </br>
    next(createHttpError(401, 'Missing access token')); </br>
    return; </br>
    } </br>
     </br>
    // 2. Якщо access токен існує, шукаємо сесію </br>
    const session = await Session.findOne({ </br>
    accessToken: req.cookies.accessToken, </br>
    }); </br>
     </br>
    // 3. Якщо такої сесії нема, повертаємо помилку </br>
    if (!session) { </br>
    next(createHttpError(401, 'Session not found')); </br>
    return; </br>
    } </br>
     </br>
    // 4. Перевіряємо термін дії access токена </br>
    const isAccessTokenExpired = </br>
    new Date() > new Date(session.accessTokenValidUntil); </br>
     </br>
    if (isAccessTokenExpired) { </br>
    return next(createHttpError(401, 'Access token expired')); </br>
    } </br>
     </br>
    // 5. Якщо з токеном все добре і сесія існує, шукаємо користувача </br>
    const user = await User.findById(session.userId); </br>
     </br>
    // 6. Якщо користувача не знайдено </br>
    if (!user) { </br>
    next(createHttpError(401)); </br>
    return; </br>
    } </br>
     </br>
    // 7. Якщо користувач існує, додаємо його до запиту </br>
    req.user = user; </br>
     </br>
    // 8. Передаємо управління далі </br>
    next(); </br>
    }; </br>
  </details>
</em>
 </br>
Що робить цей middleware

- Перевіряє cookies: чи є там accessToken. Якщо немає — відмовляємо у доступі.
- Шукає сесію: чи існує в базі сесія з таким токеном.
- Перевіряє строк дії токена: якщо він прострочений — користувач має оновити сесію.
- Шукає користувача: якщо сесія дійсна, але користувач у базі видалений — доступ також забороняється.
- Додає користувача у req: після цього контролери зможуть отримати інформацію про нього (req.user).
- Таким чином кожен запит до приватних ресурсів проходить перевірку перед тим, як дійти до контролера.

## Використання у маршрутах

Тепер ми можемо скористатись нашим middleware authenticate в роутері для запитів до колекції студентів:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/routes/studentsRoutes.js </br>
       </br>
      import { Router } from "express"; </br>
      import { celebrate } from "celebrate"; </br>
      import { </br>
      getStudents, </br>
   </summary>
    getStudentById, </br>
    createStudent, </br>
    deleteStudent, </br>
    updateStudent, </br>
    } from "../controllers/studentsController.js"; </br>
    import { </br>
    createStudentSchema, </br>
    getStudentsSchema, </br>
    studentIdParamSchema, </br>
    updateStudentSchema, </br>
    } from "../validations/studentsValidation.js"; </br>
     </br>
    // 1. Імпортуємо middleware </br>
    import { authenticate } from "../middleware/authenticate.js"; </br>
     </br>
    const router = Router(); </br>
     </br>
    // 2. Додаємо middleware до всіх шляхів, що починаються з /students </br>
    router.use("/students", authenticate); </br>
     </br>
    router.get("/students", celebrate(getStudentsSchema), getStudents); </br>
    router.get("/students/:studentId", celebrate(studentIdParamSchema), getStudentById); </br>
    router.post("/students", celebrate(createStudentSchema), createStudent); </br>
    router.delete("/students/:studentId", celebrate(studentIdParamSchema), deleteStudent); </br>
    router.patch("/students/:studentId", celebrate(updateStudentSchema), updateStudent); </br>
     </br>
    export default router; </br>
 </details>
</em>
 </br>
Коли ми приміняємо middleware таким чином router.use(path, middleware), вона будет примінятися до всіх роутів цього роутера. Тобто, вона відпрацює на всіх роутах, що починаються зі /students.

Висновок

- Middleware authenticate виконує роль «охоронця» приватних даних.
- Він перевіряє токени, сесію та користувача.
- Якщо перевірка успішна — доступ до колекції студентів відкривається.
- Якщо ні — користувач отримує відповідь з 401 Unauthorized.

Таким чином ми забезпечуємо безпечний доступ до наших даних: працювати з колекцією студентів можуть тільки ті користувачі, що пройшли аутентифікацію.

</details>
</li>
<li>
<details>
<summary>Зв’язок між моделями</summary>

# Зв’язок між моделями

Основна ідея авторизації полягає у тому, щоб обмежувати доступ до ресурсів на основі певних умов. У нашому випадку ми можемо уявити сценарій: користувачі — це викладачі, а студенти — це школяи, з якими вони працюють.

Щоб кожен викладач бачив тільки своїх студентів, нам потрібно встановити зв’язок між моделями users та students.

## Додаємо зв’язок у модель студента

Ми розширимо схему студента, додавши поле userId. Це дозволить зрозуміти, кому саме належить конкретний студент:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/models/student.js </br>
       </br>
      import { Schema, model } from "mongoose"; </br>
       </br>
      const studentSchema = new Schema( </br>
      { </br>
   </summary>
    name: { type: String, required: true }, </br>
    age: { type: Number, required: true }, </br>
    gender: { type: String, required: true, enum: ["male", "female", "other"] }, </br>
    avgMark: { type: Number, required: true }, </br>
    onDuty: { type: Boolean, default: false }, </br>
    // Нова властивість </br>
    userId: { </br>
    type: Schema.Types.ObjectId, </br>
    ref: "User", </br>
    required: true, </br>
    }, </br>
    }, </br>
    { </br>
    timestamps: true, </br>
    versionKey: false, </br>
    } </br>
    ); </br>
     </br>
    export const Student = model("Student", studentSchema); </br>
 </details>
</em>
 </br>
<strong>Що таке ref?</strong>

ref: "User" означає, що поле userId посилається на інший документ у колекції users.
Таким чином ми встановлюємо зв’язок між колекціями: кожен студент належить певному користувачу.
Це дозволяє виконувати запити з використанням методу populate (наприклад, отримати студента разом з інформацією про користувача, якому він належить).

## Оновлюємо контролер створення студента

Коли ми створюємо нового студента, потрібно вказати, якому користувачу він належить. Для цього використаємо властивість req.user, яку ми отримуємо завдяки middleware authenticate.

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>
      // src/controllers/studentsController.js </br>
       </br>
      import createHttpError from "http-errors"; </br>
      import { Student } from "../models/student.js"; </br>
    </summary>
     </br>
    // Решта коду файла </br>
     </br>
    export const createStudent = async (req, res) => { </br>
    const student = await Student.create({ </br>
    ...req.body, </br>
    // Додаємо властивість userId </br>
    userId: req.user.\_id, </br>
    }); </br>
     </br>
    res.status(201).json(student); </br>
    }; </br>
  </details>
</em>
 </br>
Висновок

Тепер у нашій базі кожен студент «прив’язаний» до конкретного користувача. Це відкриває можливість:

- обмежувати доступ до студентів лише їхнім власникам;
- робити більш складні запити з використанням зв’язків;
- розширювати функціонал системи (наприклад, додати ролі викладачів, які бачать тільки своїх учнів).

</details>
</li>
<li>
<details>
<summary>Приватні дані</summary>

# Приватні дані

Ми вже підключили middleware аутентифікації до всіх маршрутів студентів і додали в модель студента поле userId, що зв’язує студента з власником (користувачем). Настав час оновити контролери так, щоб:

- повертати тільки студентів поточного користувача;
- дозволяти читання/оновлення/видалення студента лише його власнику.

## Отримання всіх студентів: GET /students

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      export const getStudents = async (req, res) => { </br>
      // Решта коду функції </br>
   </summary>
     </br>
    // Додаємо критерій пошуку тільки студентів поточного користувача </br>
    const studentsQuery = Student.find({ userId: req.user.\_id }); </br>
     </br>
    // Решта коду функції </br>
    }; </br>
</details>
</em>
 </br>
Що змінилось і чому так:

- Використовуємо <strong>Student.find({ userId: req.user.\_id })</strong>, щоб одразу обмежити вибірку студентами, які належать автентифікованому користувачу.
- Далі до цього запиту, як і раніше, можна послідовно додавати фільтри (where), пагінацію (skip, limit) і сортування (sort) — усе застосовується вже в межах «своїх» даних користувача.

## Отримання одного студента: GET /students/:studentId

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      export const getStudentById = async (req, res, next) => { </br>
      const { studentId } = req.params; </br>
   </summary>
     </br>
    const student = await Student.findOne({ </br>
    \_id: studentId, </br>
    userId: req.user.\_id, </br>
    }); </br>
     </br>
    if (!student) { </br>
    return next(createHttpError(404, "Student not found")); </br>
    } </br>
     </br>
    res.status(200).json(student); </br>
    }; </br>
 </details>
</em>
 </br>
Чому саме <strong>findOne</strong>:

- Нам потрібно знайти конкретний документ за двома умовами: \_id студента і userId власника.
- Якщо хоча б одна з умов не виконується (нема такого студента або він належить іншому користувачу) — отримаємо null і повернемо 404. Це захищає приватні дані.

## Видалення студента: DELETE /students/:studentId

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>
      // src/controllers/studentsController.js </br>
       </br>
      export const deleteStudent = async (req, res, next) => { </br>
      const { studentId } = req.params; </br>
      const student = await Student.findOneAndDelete({ </br>
    </summary>
    \_id: studentId, </br>
    // Критерій пошуку по userId </br>
    userId: req.user.\_id, </br>
    }); </br>
     </br>
    if (!student) { </br>
    next(createHttpError(404, "Student not found")); </br>
    return; </br>
    } </br>
     </br>
    res.status(200).send(student); </br>
    }; </br>
 </details>
</em>
 </br>
Що тут важливо:

- Використовуємо <strong>findOneAndDelete</strong> з подвійною умовою (\_id + userId).
- Якщо документ не знайдений, повертаємо 404.
- Таким чином користувач не може видалити чужого студента навіть якщо знає його id.

## Оновлення студента: PATCH /students/:studentId

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/studentsController.js </br>
       </br>
      export const updateStudent = async (req, res, next) => { </br>
      const { studentId } = req.params; </br>
   </summary>
     </br>
    const student = await Student.findOneAndUpdate( </br>
    // Критерій пошуку по userId </br>
    { \_id: studentId, userId: req.user.\_id }, </br>
    req.body, </br>
    { new: true } </br>
    ); </br>
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
Логіка така сама:

- Оновлюємо лише той документ, який одночасно відповідає studentId і належить поточному користувачу (userId).
- Якщо такого документа немає — повертаємо 404.

Підсумок

- Додавши userId до схеми студента та використовуючи його в критеріях пошуку (find, findOne, findOneAndUpdate, findOneAndDelete), ми забезпечили приватність колекції.
- Усі операції тепер виконуються в межах даних поточного користувача.
- Навіть якщо зловмисник дізнається studentId, він не зможе отримати доступ до документа, що йому не належить.

</details>
</li>
</ul>
</details>
<details>
<summary>Module 5</summary>
<ul>
<li>
<details>
<summary>Скидання паролю</summary>

# Скидання паролю

Реалізуємо ендпоінт POST /auth/request-reset-email, який надсилатиме лист із посиланням для скидання пароля.

## Валідація тіла запиту

Ми очікуємо лише email, тож схема максимально проста:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>
      // src/validations/authValidation.js </br>
       </br>
      // Решта коду файла </br>
       </br>
      export const requestResetEmailSchema = { </br>
    </summary>
    [Segments.BODY]: Joi.object({ </br>
    email: Joi.string().email().required(), </br>
    }), </br>
    }; </br>
</details>
</em>
 </br>
Перевіряємо, що в тілі є коректний email. Це мінімізує зайві звернення до бази й дає користувачу чітке повідомлення про помилку ще до виконання бізнес-логіки.

## Контролер для надсилання листа

Створимо контролер, який оброблятиме запит на зміну пароля:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      // Решта коду файла </br>
       </br>
      export const requestResetEmail = async (req, res) => { </br>
   </summary>
    const { email } = req.body; </br>
     </br>
    const user = await User.findOne({ email }); </br>
     </br>
        res.status(200).json({ </br>
        	message: 'Password reset email sent successfully' </br>
        }); </br>
     </br>
    }; </br>
 </details>
</em>
 </br>
Що тут відбувається:

- Знаходимо користувача за email.
- Формуємо «успішну» відповідь (далі додамо фактичне надсилання листа).
- Поки що не перевіряємо існування користувача.

## Маршрут

Підключаємо валідацію і контролер у роут:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/routers/auth.js </br>
       </br>
      import { </br>
      loginUserSchema, </br>
      registerUserSchema, </br>
   </summary>
    requestResetEmailSchema </br>
    } from '../validations/authValidation.js'; </br>
    import { </br>
    loginUser, </br>
    logoutUser, </br>
    refreshUserSession, </br>
    registerUser, </br>
    requestResetEmail </br>
    } from '../controllers/authController.js'; </br>
     </br>
    // Решта коду файла </br>
     </br>
    router.post( </br>
    '/auth/request-reset-email', </br>
    celebrate(requestResetEmailSchema), </br>
    requestResetEmail, </br>
    ); </br>
 </details>
</em>
 </br>
<strong>celebrate(requestResetEmailSchema)</strong> запустить перевірку тіла запиту до виконання контролера. Якщо email некоректний — клієнт одразу отримає 400 Bad Request.

## Підготовка SMTP і утиліти надсилання

Перш ніж реалізовувати сервісну функцію надсилання листа про відновлення пароля, створимо власне функціонал відправлення листів. Для цього скористаємося максимально «нативним» рішенням (без сторонніх сервісів-обгорток) — бібліотекою <strong>nodemailer</strong>.

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">npm install nodemailer</em>

Створимо додаткові змінні оточення (значення у вас будуть свої):

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>
      .env</br>
      </br>
      \\ Решта коду файла</br>
      </br>
      SMTP_HOST=smtp-relay.brevo.com</br>
    </summary>
    SMTP_PORT=587</br>
    SMTP_USER=75c8r8001@smtp-brevo.com</br>
    SMTP_PASSWORD=xsmtpswe-2c4be41c740592e4f94c29m6793dea86778280700157e4e9aeee41e94591368e-9cfna8EPjdAbGWU6</br>
    SMTP_FROM=boris.meshkov.98@gmail.com</br>
 </details>
</em>
</br>
У прикладі використано Brevo. Це надійний SMTP-провайдер із зручним дашбордом і тестовими тарифами. Облікові дані (host, порт, логін, пароль, відправник) беруться з їхнього інтерфейсу.

Подивімося, де саме взяти значення змінних оточення:

Функціонал відправлення листів виносимо в окрему утиліту <strong>sendEmail</strong>:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/utils/sendEmail.js </br>
       </br>
      import nodemailer from 'nodemailer'; </br>
       </br>
      const transporter = nodemailer.createTransport({ </br>
      host: process.env.SMTP_HOST, </br>
   </summary>
    port: process.env.SMTP_PORT, </br>
    auth: { </br>
    user: process.env.SMTP_USER, </br>
    pass: process.env.SMTP_PASSWORD, </br>
    }, </br>
    }); </br>
     </br>
    export const sendEmail = async (options) => { </br>
    return await transporter.sendMail(options); </br>
    }; </br>
 </details>
</em>
 </br>
- <strong>transporter</strong> створює з’єднання зі SMTP-сервером.
- <strong>nodemailer</strong> автоматично підбере безпечні налаштування відповідно до порту та відповіді сервера.

## Генеруємо токен (JWT) для лінка

Встановлюємо бібліотеку <strong>jsonwebtoken</strong> для роботи з JWT.

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">npm i jsonwebtoken</em>

Для створення токена потрібен випадковий секретний рядок. Додаємо його як змінну оточення JWT_SECRET, що використовуватиметься для підпису токена. Значення може бути довільним, напр., wKYqbcFlT0AOdZPkyTH6URf0gG або будь-яке інше.

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
  <em>
    // .env</br>
    </br>
    // Решта коду файла</br>
    </br>
    JWT_SECRET=wKYqbcFlT0AOdZPkyTH6URf0gG</br>
  </em>
</div>
</br>
Оновлюємо контролер — додаємо генерацію токена та надсилання листа:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>
      // src/controllers/authController.js </br>
       </br>
      import jwt from 'jsonwebtoken'; </br>
      import { sendEmail } from '../utils/sendEmail.js'; </br>
       </br>
      // Решта коду файла </br>
    </summary>
     </br>
    export const requestResetEmail = async (req, res, next) => { </br>
    const { email } = req.body; </br>
     </br>
    const user = await User.findOne({ email }); </br>
    // Якщо користувача нема — навмисно повертаємо ту саму "успішну" </br>
    // відповідь без відправлення листа (anti user enumeration). </br>
    if (!user) { </br>
    return res.status(200).json({ </br>
    message: 'If this email exists, a reset link has been sent', </br>
    }); </br>
    } </br>
     </br>
        // Користувач є — генеруємо короткоживучий JWT і відправляємо лист </br>
     </br>
    const resetToken = jwt.sign( </br>
    { sub: user.\_id, email }, </br>
    process.env.JWT_SECRET, </br>
    { expiresIn: '15m' }, </br>
    ); </br>
     </br>
    try { </br>
    await sendEmail({ </br>
    from: process.env.SMTP_FROM, </br>
    to: email, </br>
    subject: 'Reset your password', </br>
    html: `<p>Click <a href="${resetToken}">here</a> to reset your password!</p>`, </br>
    }); </br>
    } catch { </br>
    next(createHttpError(500, 'Failed to send the email, please try again later.')); </br>
    return; </br>
    } </br>
     </br>
        // Та сама "нейтральна" відповідь </br>
     </br>
    res.status(200).json({ </br>
    message: 'If this email exists, a reset link has been sent', </br>
    }); </br>
    }; </br>
 </details>
</em>
 </br>

- Термін дії токена — 15 хвилин. Цього достатньо, щоб перейти за лінком, і це знижує ризики компрометації.
- Що класти в payload — мінімум потрібної інформації (sub, email). Пам’ятай: payload не шифрується, а лише підписується.
- Обгортання sendEmail у try/catch дає коректну відповідь 500 у випадку збою поштового сервісу.

Однакові відповіді із статусом 200 це техніка щоб унеможливити «вичитування» наявності облікового запису. Тобто ми повертаємо однакову відповідь і для існуючої, і для неіснуючої пошти.

</details>
</li>
<li>
<details>
<summary>Шаблонізатор Handlebars</summary>

# Шаблонізатор Handlebars

У попередньому прикладі для поля html ми використали шаблонний рядок:

<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
  <em>
    await sendEmail({ </br>
    from: process.env.SMTP_FROM, </br>
    to: email, </br>
    subject: 'Reset your password', </br>
    html:

    `<p>Click <a href="${resetToken}">here</a> to reset your password!</p>`,
    });

  </em>
</div>
 </br>
Але так незручно: реальний лист зазвичай більший, може містити умовну логіку, цикли, повторювані блоки тощо. Для таких випадків зручно використовувати шаблонізатори.

<strong>Шаблонізатори</strong> — це інструменти, що генерують HTML на основі даних. Вони дозволяють підставляти значення змінних у розмітку, описувати умови та цикли, а також розділяють бізнес-логіку й подання. Ми скористаємося <strong>Handlebars</strong> — популярним шаблонізатором для JavaScript.

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">npm i handlebars</em>

Основні риси шаблонізаторів і Handlebars:

- Зручний синтаксис. Просте вставляння змінних, умов (if/else) і циклів (each) без «спагеті-рядків».
- Розділення відповідальностей. HTML живе у шаблонах, а логіка — в коді; підтримувати й оновлювати простіше.
- Повторне використання. Можна мати окремі шаблони/частини й підключати їх у різних місцях.
- Умови та цикли. Динамічні блоки формуються безпосередньо в шаблоні.
- Безпека. Handlebars за замовчуванням екранує вставки, зменшуючи ризик XSS (не використовуй {{{triple}}}, якщо не впевнений у вхідних даних).
- Зрілість екосистеми. Добра документація, багато прикладів і гайдлайнів.

## Створюємо шаблон листа

Додай файл src/templates/reset-password-email.html:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>// src/templates/reset-password-email.html</summary>

      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reset password email</title>
      </head>

      <body>
        <h1 style="color: blue">Hello, {{name}}!</h1>
        <p>Click <a href="{{link}}">here</a> to reset your password!</p>
      </body>
    </html>

</details>
</em>
 </br>
У синтаксисі <strong>{{ ... }}</strong> ми вказуємо, які поля з об’єкта даних слід підставити в HTML.

## Підключаємо Handlebars у контролері

Знову доповнюємо код контролера надсилання пошти:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      import handlebars from 'handlebars'; </br>
      import path from 'node:path'; </br>
      import fs from 'node:fs/promises'; </br>
   </summary>
     </br>
    export const requestResetEmail = async (req, res, next) => { </br>
    const { email } = req.body; </br>
     </br>
    const user = await User.findOne({ email }); </br>
    if (!user) { </br>
    return res.status(200).json({ </br>
    message: 'If this email exists, a reset link has been sent', </br>
    }); </br>
    } </br>
     </br>
    const resetToken = jwt.sign( </br>
    { sub: user.\_id, email }, </br>
    process.env.JWT_SECRET, </br>
    { expiresIn: '15m' }, </br>
    ); </br>
     </br>
        // 1. Формуємо шлях до шаблона </br>
     </br>
    const templatePath = path.resolve('src/templates/reset-password-email.html'); </br>
    // 2. Читаємо шаблон </br>
    const templateSource = await fs.readFile(templatePath, 'utf-8'); </br>
    // 3. Готуємо шаблон до заповнення </br>
    const template = handlebars.compile(templateSource); </br>
    // 4. Формуємо із шаблона HTML документ з динамічними даними </br>
    const html = template({ </br>
    name: user.username, </br>
    link: `${process.env.FRONTEND_DOMAIN}/reset-password?token=${resetToken}`, </br>
    }); </br>
     </br>
    try { </br>
    await sendEmail({ </br>
    from: process.env.SMTP_FROM, </br>
    to: email, </br>
    subject: 'Reset your password', </br>
    // 5. Передаємо HTML у функцію надписання пошти </br>
    html, </br>
    }); </br>
    } catch { </br>
    next( </br>
    createHttpError(500, 'Failed to send the email, please try again later.'), </br>
    ); </br>
    return; </br>
    } </br>
     </br>
    res.status(200).json({ </br>
    message: 'If this email exists, a reset link has been sent', </br>
    }); </br>
    }; </br>
 </details>
</em>
 </br>
Пояснення до кроків:

- <strong>(1)–(2)</strong> Отримуємо шлях до HTML-шаблона та читаємо його як текст.
- <strong>(3)</strong> handlebars.compile() перетворює сирий шаблон на функцію, яку можна викликати з даними.
- <strong>(4)</strong> Передаємо у шаблон об’єкт { name, link } — на виході маємо готовий HTML з підставленими значеннями.
- <strong>(5)</strong> Надсилаємо згенерований HTML листом через нашу утиліту sendEmail.

У змінній оточення <strong>FRONTEND_DOMAIN</strong> поки що збережи http://localhost:3000. Згодом тут буде URL сторінки фронтенда, на якій користувач встановлюватиме новий пароль після переходу за посиланням із листа.

</details>
</li>
<li>
<details>
<summary>Зміна паролю</summary>

# Зміна паролю

Тепер додамо частину функціоналу, що дозволяє встановити новий пароль за токеном із листа. Маршрут — POST /auth/reset-password.

## Валідація тіла запиту

Ми очікуємо два поля: сам токен і новий пароль. Схема мінімальна — перевіряємо наявність і базовий формат:

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/validations/authValidation.js</br>
      </br>
      // Решта коду файла</br>
      </br>
      export const resetPasswordSchema = {</br>
   </summary>
    [Segments.BODY]: Joi.object({</br>
    password: Joi.string().min(8).required(),</br>
    token: Joi.string().required(),</br>
    }),</br>
    };</br>
</details>
</em>
</br>
- token — підписаний JWT, який ми надіслали в листі (дійсний упродовж 15 хв).
- password — новий пароль, який користувач хоче встановити.

## Контролер

Контролер виконує чотири ключові кроки: перевіряє токен, знаходить користувача, хешує новий пароль і оновлює запис.

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/authController.js </br>
       </br>
      import bcrypt from 'bcrypt'; </br>
      import jwt from 'jsonwebtoken'; </br>
       </br>
      // Решта коду файла </br>
   </summary>
     </br>
    export const resetPassword = async (req, res, next) => { </br>
    const { token, password } = req.body; </br>
     </br>
        // 1. Перевіряємо/декодуємо токен </br>
     </br>
    let payload; </br>
    try { </br>
    payload = jwt.verify(token, process.env.JWT_SECRET); </br>
    } catch { </br>
    // Повертаємо помилку якщо проблема при декодуванні </br>
    next(createHttpError(401, 'Invalid or expired token')); </br>
    return; </br>
    } </br>
     </br>
    // 2. Шукаємо користувача </br>
    const user = await User.findOne({ \_id: payload.sub, email: payload.email }); </br>
     if (!user) { </br>
    next(createHttpError(404, 'User not found')); </br>
    return; </br>
    } </br>
     </br>
    // 3. Якщо користувач існує </br>
    // створюємо новий пароль і оновлюємо користувача </br>
    const hashedPassword = await bcrypt.hash(password, 10); </br>
    await User.updateOne( </br>
    { \_id: user.\_id }, </br>
    { password: hashedPassword } </br>
    ); </br>
     </br>
    // 4. Інвалідовуємо всі можливі попередні сесії користувача </br>
    await Session.deleteMany({ userId: user.\_id }); </br>
     </br>
        // 5. Повертаємо успішну відповідь </br>
     </br>
    res.status(200).json({ </br>
    message: 'Password reset successfully. Please log in again.', </br>
    }); </br>
    }; </br>
 </details>
</em>
 </br>
Що тут відбувається:

- Перевірка токена. jwt.verify() гарантує дійсність і непідробність токена, а також перевіряє строк дії (expiresIn).
- Пошук користувача. Для надійності використовуємо і sub (id), і email із payload.
- Оновлення пароля. Пароль ніколи не зберігаємо у відкритому вигляді — тільки у вигляді хешу (bcrypt.hash).
- Видаляємо всі сесії які можуть існувати для цього користувача.
- Відповідь клієнту. Повертаємо 200 та повідомлення про успіх.

## Маршрут

Додаємо валідацію та контролер до маршруту:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/routeі/authRoutes.js </br>
       </br>
      import { resetPassword } from '../controllers/authController.js'; </br>
      import { resetPasswordSchema } from '../validations/authValidation.js'; </br>
   </summary>
     </br>
    // Решта коду файла </br>
     </br>
    router.post( </br>
    '/auth/reset-password', </br>
    celebrate(resetPasswordSchema), </br>
    resetPassword </br>
    ); </br>
 </details>
</em>
 </br>
Із цим ендпоінтом користувач переходить за посиланням із листа, надсилає токен і новий пароль — і після перевірок пароль надійно оновлюється.

</details>
</li>
<li>
<details>
<summary>Аватар користувача</summary>

# Аватар користувача

Ми реалізуємо можливість користувачеві змінювати аватар. Тому до моделі користувача додаємо необов’язкову властивість avatar зі значенням за замовчуванням.

<em>
<details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    <summary>
      // src/models/user.js </br>
       </br>
      import { model, Schema } from "mongoose"; </br>
       </br>
      const userSchema = new Schema( </br>
    </summary>
    { </br>
    username: { type: String, required: false }, </br>
    email: { type: String, unique: true, required: true }, </br>
    password: { type: String, required: true }, </br>
    // Нова властивість </br>
    avatar: { </br>
    type: String, </br>
    required: false, </br>
    default: "<https://ac.goit.global/fullstack/react/default-avatar.jpg>", </br>
    }, </br>
    }, </br>
    { timestamps: true, versionKey: false } </br>
    ); </br>
     </br>
    // Решта коду файла </br>
</details>
</em>
 </br>
Маршрут, за яким ми дозволимо змінювати аватар, буде PATCH /users/me/avatar, тому створюємо новий контролер (поки що порожній):

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/userController.js </br>
       </br>
      export const updateUserAvatar = async (req, res, next) => { </br>
      res.status(200).json({ url: "" }); </br>
      }; </br>
   </summary>
     </br>
    Та роутер для ресурсу /users: </br>
     </br>
    // src/routes/userRoutes.js </br>
     </br>
    import { Router } from 'express'; </br>
    import { authenticate } from '../middleware/authenticate.js'; </br>
    import { updateUserAvatar } from '../controllers/userController.js'; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.patch( </br>
    '/users/me/avatar', </br>
    authenticate, </br>
    updateUserAvatar, </br>
    ); </br>
     </br>
    export default router; </br>
 </details>
</em>
 </br>
Middleware authenticate гарантує, що змінювати аватар може лише автентифікований користувач від свого імені.

І у файлі src/server.js імпортуємо нові раути та додаємо їх через app.use:

<em>
<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    // src/server.js </br>
     </br>
    import userRoutes from './routes/userRoutes.js'; </br>
     </br>
    app.use(studentsRoutes); </br>
    app.use(authRoutes); </br>
    // Додаємо раути користувача </br>
    app.use(userRoutes); </br>
</div>
</em>
 </br>
Тепер ми готові реалізувати саме завантаження зображень.

</details>
</li>
<li>
<details>
<summary>Налаштування Multer</summary>

# Налаштування Multer

Спочатку встановимо і налаштуємо middleware multer для завантаження зображень:

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">npm i multer</em>

Для сховища використаємо метод <strong>memoryStorage</strong>, який зберігає файли безпосередньо в оперативній памʼяті. Це зручно — ми одразу маємо доступ до вмісту файлу у коді й нам не потрібно спершу зберігати його на диск, а потім читати назад. Недолік такого підходу — підвищене навантаження на RAM. Частково вирішити це можна, обмеживши максимальний розмір завантажуваного файлу.

<em>
  <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/middleware/multer.js </br>
       </br>
      import multer from 'multer'; </br>
       </br>
      export const upload = multer({ </br>
      storage: multer.memoryStorage(), </br>
   </summary>
    limits: { </br>
    fileSize: 2 _ 1024 _ 1024, </br>
    }, </br>
    fileFilter: (req, file, cb) => { </br>
    if (!file.mimetype || !file.mimetype.startsWith('image/')) { </br>
    return cb(new Error('Only images allowed')); </br>
    } </br>
    cb(null, true); </br>
    }, </br>
    }); </br>
  </details>
</em>
 </br>
Що тут відбувається?

- <strong>storage: multer.memoryStorage()</strong> — зберігає файл у пам’яті сервера (не на диску).
- <strong>limits.fileSize</strong> — обмежує розмір завантаження до 2 МБ.
- <strong>fileFilter</strong> — визначає, які файли дозволено приймати. У цьому випадку — лише ті, чий mimetype починається з "image/".

<strong>fileFilter</strong> — це функція, яку multer викликає для кожного завантаженого файлу. Вона отримує три аргументи:

- <strong>req</strong> — HTTP-запит, як у звичайному Express;
- <strong>file</strong> — інформація про файл (назва, MIME-тип, розмір тощо);
- <strong>cb</strong> — callback, який повідомляє multer, що робити з файлом.

Варіанти виклику cb:

- <strong>cb(null, true)</strong> — файл дозволено (приймаємо);
- <strong>cb(null, false)</strong> — файл відхилено без помилки;
- <strong>cb(new Error('...'))</strong> — файл відхилено з помилкою, обробка переривається.

Отже, у цьому коді:

- якщо mimetype не починається з 'image/', викликається cb(new Error('Only images allowed'));
- інакше — cb(null, true), тобто файл приймається.

Цей middleware підключається не глобально, а безпосередньо до потрібного маршруту. Додаємо його у PATCH /users/me/avatar:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/routes/userRoutes.js </br>
       </br>
      import { Router } from "express"; </br>
      import { authenticate } from "../middleware/authenticate.js"; </br>
      import { updateUserAvatar } from "../controllers/userController.js"; </br>
   </summary>
    // Імпортуємо middleware </br>
    import { upload } from "../middleware/multer.js"; </br>
     </br>
    const router = Router(); </br>
     </br>
    router.patch( </br>
    "/users/me/avatar", </br>
    authenticate, </br>
    // Додаємо після авторизації, але до контролера </br>
    upload.single("avatar"), </br>
    updateUserAvatar </br>
    ); </br>
     </br>
    export default router; </br>
 </details>
</em>
 </br>
Метод <strong>single(fieldname)</strong> обробляє рівно один файл. У запиті очікується поле з іменем, яке ви вказали ("avatar"), і Multer прикріплює цей файл до req.file.

## Робота з файлом у контролері

У контролері тепер треба перевіряти, чи є файл, інакше повернути помилку:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/userController.js </br>
       </br>
      import createHttpError from "http-errors"; </br>
      import { User } from "../models/user.js"; </br>
   </summary>
     </br>
    export const updateUserAvatar = async (req, res, next) => { </br>
    if (!req.file) { </br>
    next(createHttpError(400, "No file")); </br>
    return; </br>
    } </br>
     </br>
    res.status(200).json({ url: "" }); </br>
    }; </br>
 </details>
</em>
 </br>
У req.file зберігається такий об’єкт (для multer.memoryStorage()):

<em>
 <div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    { </br>
    fieldname: 'avatar', // назва поля у формі </br>
    originalname: 'download.jpeg', // оригінальне ім’я файлу на клієнті </br>
    encoding: '7bit', // тип кодування передавання </br>
    mimetype: 'image/jpeg', // MIME-тип файлу </br>
    size: 12345, // розмір у байтах </br>
    buffer: <Buffer ff d8 ff ...> // вміст файлу (Buffer) </br>
    } </br>
 </div>
</em>

- fieldname — ключ поля у формі (multipart/form-data), яке містить файл.
- originalname — початкове ім’я файла, яке надіслав клієнт.
- encoding — спосіб кодування під час передавання (зазвичай 7bit).
- mimetype — визначений тип вмісту (наприклад, image/png, image/jpeg).
- size — фактичний розмір отриманого файлу.
- buffer — повний вміст файлу у вигляді Buffer (саме його передаватимемо далі у хмарне сховище).

## Інші методи Multer

<strong>array(fieldname, maxCount)</strong> — дозволяє завантажувати кілька файлів під одним ім’ям поля:

<em>
<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    app.post('/students', upload.array('photos', 10), (req, res, next) => { </br>
    // req.files — масив файлів </br>
    }); </br>
</div>
</em>

- <strong>fields(fields)</strong> — дозволяє завантажувати файли з кількох різних полів:

<em>
<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    app.post('/students', upload.fields([ </br>
    { name: 'avatar', maxCount: 1 }, </br>
    { name: 'gallery', maxCount: 8 } </br>
    ]), (req, res, next) => { </br>
    // req.files.avatar, req.files.gallery </br>
    }); </br>
</div>
</em>
 </br>
</details>
</li>
<li>
<details>
<summary>Хмарне сховище Cloudinary</summary>

# Хмарне сховище Cloudinary

<strong>Cloudinary</strong> — це хмарний сервіс для керування зображеннями та відео. Він дозволяє зберігати, обробляти, оптимізувати та доставляти медіафайли. Cloudinary забезпечує можливості завантаження, масштабування, перетворення формату, покращення якості та інтеграцію з іншими вебсервісами для ефективного використання медіаконтенту у веб- та мобільних додатках.

Ми будемо використовувати Cloudinary для завантаження, зберігання та отримання безпечних URL-адрес для медіафайлів.

## Реєстрація

Для початку потрібно зареєструватися у Cloudinary.

Додамо cloudinary у залежності нашого додатка

- <em style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">npm install cloudinary</em>

## Змінні оточення

Збережемо ключі доступу у файлі .env:

<em>
<div style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
    # .env </br>
     </br>
    # Решта змінних </br>
     </br>
    # Cloudinary </br>
     </br>
    CLOUDINARY*CLOUD_NAME=ваше*значення </br>
    CLOUDINARY*API_KEY=ваше*значення </br>
    CLOUDINARY*API_SECRET=ваше*значення </br>
</div>
</em>

## Утиліта для завантаження файлів

Створимо функцію saveFileToCloudinary, яка отримає файл і завантажить його у Cloudinary:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/utils/saveFileToCloudinary.js </br>
       </br>
      import { Readable } from 'node:stream'; </br>
      import { v2 as cloudinary } from 'cloudinary'; </br>
   </summary>
     </br>
    cloudinary.config({ </br>
    secure: true, </br>
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, </br>
    api_key: process.env.CLOUDINARY_API_KEY, </br>
    api_secret: process.env.CLOUDINARY_API_SECRET, </br>
    }); </br>
     </br>
    export async function saveFileToCloudinary(buffer) { </br>
    return new Promise((resolve, reject) => { </br>
    const uploadStream = cloudinary.uploader.upload_stream( </br>
    { </br>
    folder: 'students-app/avatars', </br>
    resource_type: 'image', </br>
    overwrite: true, </br>
    unique_filename: true, </br>
    use_filename: false, </br>
    }, </br>
    (err, result) => (err ? reject(err) : resolve(result)), </br>
    ); </br>
     </br>
        Readable.from(buffer).pipe(uploadStream); </br>
     </br>
    }); </br>
    } </br>
 </details>
</em>
 </br>
Як працює ця функція:

- Конфігурація Cloudinary: виконується через cloudinary.config(), де ми вказуємо ключі з .env.
- upload_stream: створюється стрім для завантаження, куди можна передати вміст файлу.
- Readable.from(buffer): перетворює Buffer з пам’яті у потік, який відправляється у Cloudinary.
- Promise: функція обгорнута у проміс, щоб можна було зручно використовувати await. Якщо завантаження успішне — повертається результат з усією інформацією про файл (наприклад, secure_url), якщо помилка — вона передається у reject.

Пояснення щодо нових концепцій

1. Виклик <strong>Readable.from(buffer)</strong> створює читальний потік (Readable stream) із буфера пам’яті — тобто робить із buffer джерело даних, яке можна “читати” поступово.

Файл у buffer зберігається як суцільний масив байтів, але Cloudinary очікує отримати дані через потік, а не одним великим шматком.

Readable потік у Node.js — це абстракція над джерелом даних, яке віддає дані порціями (чанками).

У цьому випадку він:

- бере ваш буфер;
- ділить його на чанки;
- “штовхає” ці чанки далі по трубі (pipe).
  Отже, Readable.from(buffer) перетворює статичний вміст у потік, який можна передавати іншим системам, що працюють зі стрімами.

2. Метод <strong>cloudinary.uploader.upload_stream(...)</strong> створює записувальний потік (Writable stream).

Writable потік — це приймач, який:

- отримує дані (байти зображення);
- відправляє їх у Cloudinary API;
- сигналізує, коли прийом завершено або сталася помилка.
  Тобто upload_stream — це такий “вхідний порт” у Cloudinary, який чекає, що ви в нього “наллєте” байти зображення.

3. Оператор <strong>.pipe()</strong> з’єднує читальний потік (Readable) із записувальним (Writable).

Відтепер дані автоматично передаються:

Readable (з buffer) → Writable (у Cloudinary)

Це аналог «трубки», через яку інформація перетікає з одного потоку в інший.

Давайте підсумуємо. Cloudinary не може напряму прийняти buffer, бо він очікує стрім байтів, а не готовий файл.

Потоки (Readable → Writable) дають змогу:

- передавати дані без створення тимчасових файлів на диску;
- обробляти великі файли поступово;
- відправляти зображення прямо з пам’яті у хмару.

## Оновлення контролера

Оновлюємо метод updateUserAvatar, щоб зберігати новий аватар у Cloudinary і записувати його URL у базу даних:

<em>
 <details style="background: #383737ff; border-radius: 8px; padding-left: 10px;  padding-right: 10px;">
   <summary>
      // src/controllers/userController.js </br>
       </br>
      import createHttpError from 'http-errors'; </br>
      import { User } from '../models/user.js'; </br>
      import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js'; </br>
   </summary>
     </br>
    export const updateUserAvatar = async (req, res, next) => { </br>
    if (!req.file) { </br>
    next(createHttpError(400, 'No file')); </br>
    return; </br>
    } </br>
     </br>
    const result = await saveFileToCloudinary(req.file.buffer); </br>
     </br>
    const user = await User.findByIdAndUpdate( </br>
    req.user.\_id, </br>
    { avatar: result.secure_url }, </br>
    { new: true }, </br>
    ); </br>
     </br>
    res.status(200).json({ url: user.avatar }); </br>
    }; </br>
 </details>
</em>
 </br>
У цьому контролері ми робимо кілька кроків:

- Перевірка наявності файлу. Якщо користувач не передав файл — повертаємо помилку 400 Bad Request.
- Виклик saveFileToCloudinary. Функція завантажує зображення у Cloudinary і повертає об’єкт із даними про файл. У ньому є, зокрема:
- secure_url — безпечне посилання на зображення, яке можна використовувати на фронтенді.
- public_id — унікальний ідентифікатор файлу у Cloudinary.
- format, resource_type, bytes та інші службові поля.
- Оновлення користувача. Ми шукаємо користувача за його \_id (береться з req.user.\_id, встановленого в процесі аутентифікації). Далі виконуємо findByIdAndUpdate, щоб записати нову адресу аватара у властивість avatar.
- Опція { new: true }. Вона гарантує, що у змінну user потрапить уже оновлений об’єкт користувача.
- Фінальна відповідь. У відповідь клієнт отримує JSON з ключем url, де лежить новий аватар користувача.

Таким чином, після завантаження зображення у Cloudinary, користувач одразу бачить оновлений аватар у своєму профілі.

</details>
</li>
</ul>
</details>
