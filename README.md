# Lidemy express.js demo - blog
---

[demo site](http://express-blog.cwc329.tw)
## 內容
本專案以 express.js 創建一個有基本功能的 blog。

### 使用技術與套件
1. express.js  
  後端框架
2. sequelize  
  ORM 套件，與資料庫溝通。
3. bcrypt  
  密碼雜湊套件，將密碼雜湊後在儲存以增加安全性。
4. express-session  
  實作會員登入功能。
5. connect-flash  
  用來一次性儲存、顯示錯誤訊息。
6. ejs  
  樣版引擎，產生前端畫面。
7. bootstrap  
  css 框架，提供 RED 功能。
8. ckEditor  
  功能多且可以自訂的輕量編輯器。

### 功能
1. 預設有一個管理員，管理員可以發表、編輯、刪除文章。
2. 訪客可以註冊成為會員。
3. 訪客可以瀏覽所有文章。
4. 文章有標籤分類功能。
5. 首頁顯示最新五篇文章，文章列表有分頁功能，每頁五篇文章。

## 部署
**1. 下載與前往**
```
$ git clone https://github.com/cwc329/express-blog.git path/to/where/you/want/to/save
$ cd path/to/where/you/want/to/save
```

**2. 初始化資料庫**
```
$ npm install
$ npx sequelize init:config
```
此專案以 sequelize ORM 套件與資料庫溝通，首先要先創建資料庫設定檔。
接著編輯 `config/config.json` 檔案，設定要使用的資料庫以及使用者，可以參考[官方文件](https://sequelize.org/master/manual/migrations.html)。
設定好之後再輸入以下指令
```
$ npx sequelize db:create
$ npx sequelize db:migrate
$ npx sequelize db:seed:all
```
這樣就資料庫初始化就完成了。

**3. 部署在 local**
執行之前需要設定兩項環境變數，`secret` 與 `portBlog`。
`secret` 是 express-session 需要的 secret key，必須先設定。
`portBlog` 為想要這個服務跑在哪個 port，預設為 3001。
```
$ secret="yourchoice" portBlog=3001 node app.js
```

接著就可以在 `http://localhost:3001` 看到 blog。
