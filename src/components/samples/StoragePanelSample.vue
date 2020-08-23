<template>
  <v-container fluid>
    <!-- 機能紹介・お知らせ -->
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="12" md="6">
        <v-alert
          border="left"
          colored-border
          type="info"
          elevation="2"
          dismissible
        >
          <div>
            このコンポーネントでは以下のFirebase Cloud
            Storageを利用した機能を使えます。
          </div>
          <div class="d-flex justify-center">
            <ul class="text-left">
              <li>アップロード</li>
              <li>ダウンロード</li>
              <li>Storage上のファイルのリスト表示</li>
            </ul>
          </div>
          <div>
            サンプルコード以外の機能については
            <a
              href="https://firebase.google.com/docs/storage/web/start"
              target="_blank"
            >
              こちら
              <v-icon small color="primary">mdi-open-in-new</v-icon>
            </a>
          </div>
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="12" md="6">
        <v-alert
          border="left"
          colored-border
          type="warning"
          elevation="2"
          dismissible
        >
          <div class="d-flex justify-center">
            <ol class="text-left">
              <li>
                アップロードは
                <strong>2万回/日</strong>
                まで行えます。
              </li>
              <li>
                ダウンロードは
                <strong>5万回/日</strong>
                まで行えます。
              </li>
              <li>
                ダウンロードは
                <strong>1GB/日</strong>
                まで行えます。
              </li>
              <li>
                全体で合わせて
                <strong>5GB</strong>
                まで保存できます。
              </li>
            </ol>
          </div>
          <div>
            制限についての詳細は
            <a
              href="https://firebase.google.com/pricing/#storage"
              target="_blank"
            >
              こちら
              <v-icon small color="primary">mdi-open-in-new</v-icon>
            </a>
          </div>
        </v-alert>
      </v-col>
    </v-row>
    <!-- 機能紹介・お知らせここまで -->

    <!-- アップロード（ローカルのファイルを指定 -> Storage上のパスに保存） -->
    <v-row>
      <v-col cols="12" sm="12" md="5">
        <v-file-input
          v-model="uploadFrom"
          :error="uploadError"
          label="アップロード元"
        />
      </v-col>
      <v-col cols="12" sm="12" md="5">
        <v-text-field
          v-model="uploadTo"
          label="アップロード先"
          :error="uploadError"
          placeholder="path/to/your/images/file.jpg"
        />
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-btn color="primary" @click="upload">upload</v-btn>
      </v-col>
    </v-row>
    <!-- アップロードここまで -->

    <!-- ダウンロード（Storage上のパスを指定 -> ブラウザ標準機能でローカルに保存） -->
    <v-row>
      <v-col cols="12" sm="12" md="10">
        <v-text-field
          v-model="downloadFrom"
          label="ダウンロード元"
          :error="downloadError"
          placeholder="path/to/your/images/file.jpg"
        />
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-btn color="primary" @click="download">download</v-btn>
      </v-col>
    </v-row>
    <!-- ダウンロードここまで -->

    <!-- リスト表示（Storage上のパスを指定 -> prefixes=フォルダとitems=ファイルを表示） -->
    <v-row>
      <v-col cols="12" sm="12" md="10">
        <v-text-field
          v-if="listPrefixes === null && listItems === null"
          v-model="listRoot"
          label="検索の起点"
          :error="listError"
          placeholder="path/to/your/directory"
        />
        <v-card v-else>
          <v-list dense>
            <v-list-item class="text-left">
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-avatar>
                    <v-icon>mdi-folder</v-icon>
                  </v-list-item-avatar>
                  <span>..</span>
                  <v-btn
                    icon
                    @click="
                      listRoot = listRoot.substring(
                        0,
                        listRoot.lastIndexOf('/')
                      );
                      listAll();
                    "
                  >
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="item in listPrefixes"
              :key="item"
              class="text-left"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-avatar>
                    <v-icon>mdi-folder</v-icon>
                  </v-list-item-avatar>
                  <span>{{ item }}/</span>
                  <v-btn
                    icon
                    @click="
                      listRoot = item;
                      listAll();
                    "
                  >
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="item in listItems"
              :key="item"
              class="text-left"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-avatar>
                    <v-icon>mdi-file</v-icon>
                  </v-list-item-avatar>
                  <span>{{ item }}</span>
                  <v-btn
                    icon
                    @click="
                      downloadFrom = item;
                      download();
                    "
                  >
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-btn
          v-if="listPrefixes === null && listItems === null"
          color="primary"
          @click="listAll"
          >list</v-btn
        >
        <v-btn
          v-else
          color="secondary"
          @click="
            listPrefixes = null;
            listItems = null;
          "
          >edit</v-btn
        >
      </v-col>
    </v-row>
    <!-- リスト表示ここまで -->
  </v-container>
</template>

<script lang="js">

export default {
  name: "SampleStoragePanal",

  components: {},

  data: () => ({
    // upload 用の変数
    uploadFrom: null,
    uploadTo: "",
    uploadError: false,

    // download 用の変数
    downloadFrom: "",
    downloadError: false,

    // listAll 用の変数
    listRoot: "",
    listItems: null,
    listPrefixes: null,
    listError: false,
  }),

  props: {
  },

  methods: {
    // アップロード（ローカルのファイルを指定 -> Storage上のパスに保存）
    upload: async function(event) {
      // ref の生成
      var uploadRef = this.$store.state.apiServices.firebaseService.storage.ref().child(this.uploadTo);

      try {
        // put でアップロード
        var uploaded = await uploadRef.put(this.uploadFrom);
        console.log(uploaded);
      } catch (ex) {
        this.uploadError = true;
        console.error(ex);
        return;
      }
      this.uploadError = false;
    },

    // ダウンロード（Storage上のパスを指定 -> ブラウザ標準機能でローカルに保存）
    download: async function(event) {
      // ref の生成
      var downloadRef = this.$store.state.apiServices.firebaseService.storage.ref().child(this.downloadFrom);

      try {
        // getDownloadURL でダウンロード用の URL を取得
        var url = await downloadRef.getDownloadURL();
        console.log("download url:", url);

        // バックグラウンドでダウンロードして Blob の URL を取得
        // img タグで直接画像を表示したいのであれば、前段の URL をそのまま src に指定すれば見られるはずです
        // 今回のダウンロード手法ではポップアップブロッカーに引っかかる場合があるため、 Blob を経由しています
        var content = await fetch(url);
        var blob = await content.blob()
        var blobUrl = URL.createObjectURL(blob);
        console.log("blob url of content:", blobUrl);

        // getMetadata でファイルの情報を取得
        // ダウンロード時のデフォルトのファイル名を設定するのに使っています
        // メタデータはこちらから書き換えることもできます
        // https://firebase.google.com/docs/storage/web/file-metadata
        var metadata = await downloadRef.getMetadata();
        var downloadTo = metadata.name;
        console.log("content metadata:", metadata);
      } catch (ex) {
        this.downloadError = true;
        console.error(ex);
        return;
      }
      this.downloadError = false;

      // a タグをクリックした *ことにして* ダウンロード
      // ページ遷移が発生して Console のログが飛ぶと思いますので、必要に応じて Preserve log にチェックを入れてください
      var link = document.createElement("a");
      link.href = blobUrl;
      link.target = "_blank";
      link.download = downloadTo;
      link.click();
    },


    // リスト表示（Storage上のパスを指定 -> prefixes=フォルダとitems=ファイルに分けて表示）
    listAll: async function(event) {
      // ref の生成
      var listAllRef = this.$store.state.apiServices.firebaseService.storage.ref().child(this.listRoot);

      try {
        // listAll で当該パス内のフォルダとファイルを取得
        // すべてのファイルをリストアップしたい場合は、取得したフォルダについて再帰的にリストアップしていってください
        // あまりに多くのリストを取得したい場合は、 listAll の代わりに list を使ってページネーションしたほうがおそらく親切です
        // https://firebase.google.com/docs/storage/web/list-files
        var list = await listAllRef.listAll();
        console.log("list of prefixed and items:", list);

        // prefixes（フォルダ）のパスのみを配列として抽出
        this.listPrefixes = list.prefixes.map(x => x.location.path_);
        // items（ファイル）のパスのみを配列として抽出
        this.listItems = list.items.map(x => x.location.path_);
      } catch (ex) {
        this.listError = true;
        console.error(ex);
        return;
      }
      this.listError = false;
    }
  }
}
</script>
