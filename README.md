# intern-2020-boilerplate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to Firebase Hosting+Functions

#### Preparation

##### Install dependencies

```
npm install --no-save firebase-tools
npm --prefix functions install
```

レポジトリのルートディレクトリで作業してください。

##### Login to Firebase

```
npx firebase login
```

エラーレポートの送信について尋ねられますが、 Y/n どちらでもよいです。
回答すると、ブラウザが開いて認証を求められるので許可してください。

##### Set Firebase project ID

```
npx firebase use --add intern-2020-summer-YOUR-SUMMER-ID
```

`intern-2020-summer-YOUR-SUMMER-ID` にはチームの Firebase プロジェクトの ID を指定してください。
ID の確認は以下の手順で行えます。

1. [Firebase コンソール](https://console.firebase.google.com/) でプロジェクトを開く
1. 歯車アイコンをクリックし、「プロジェクトを設定」に進む
1. 「全般」タブにプロジェクト ID が表示される

#### Deploy
```
npx firebase deploy
```

**注意: `functions/public/` の下にファイルやフォルダを置いて `deploy` コマンドを実行しないでください。必要なアクセス制御が実施されません。**

#### Disable published release
```
npx firebase hosting:disable
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
