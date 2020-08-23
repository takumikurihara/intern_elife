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
            このコンポーネントでは以下のdejima画像APIを利用した機能を使えます。
          </div>
          <div class="d-flex justify-center">
            <ul class="text-left">
              <li>画像URLなどの画像メタデータの取得</li>
              <li>画像ファイルの取得</li>
            </ul>
          </div>
          <div>
            画像APIの詳細については
            <a
              href="https://proxy-api-property-swagger.s3-ap-northeast-1.amazonaws.com/gpool.html"
              target="_blank"
            >
              こちら
              <v-icon small color="primary">mdi-open-in-new</v-icon>
            </a>
          </div>
        </v-alert>
      </v-col>
    </v-row>
    <!-- 検索 -->
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="12" md="6">
        <v-text-field v-model="query" />
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-btn color="primary" @click="search">検索</v-btn>
      </v-col>
    </v-row>
    <!--検索結果-->
    <div v-if="rentPropertyQuery">
      <v-card
        v-for="buildingItem in buildingDataList"
        :key="buildingItem.buildingData.building_guid"
        class="mx-auto"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">
              {{ buildingItem.buildingData.building_name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ buildingItem.buildingData.address_text }}
              {{ buildingItem.buildingData.branch_number_text }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar tile size="80" color="grey">
            <v-img v-if="buildingItem.imageURL" :src="buildingItem.imageURL" />
          </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn text>詳細</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import { ApiClient } from "../../dejima/dejima-client/src";
import RentPropertyQueryAPIApi from "../../dejima/dejima-client/src/api/RentPropertyQueryAPIApi";
import ImageApiClient from "../../dejima/dejima-image-client/src/ApiClient";
import ImageQueryAPIApi from "../../dejima/dejima-image-client/src/api/ImageQueryAPIApi";

export default {
  data: () => ({
    query: "",
    rentPropertyQuery: null,
    indexImageURLMap: null,
    buildingDataList: null,
  }),
  props: {},
  methods: {
    search: async function(event) {
      this.rentPropertyQuery = await this.getBuildings();
      console.log("---rentPropertyQuery---");
      console.log(this.rentPropertyQuery);

      // インデックスと物件のproperty_full_keyのMapを生成
      const buildingDataList = [];
      this.rentPropertyQuery.results.forEach((result, index) => {
        if (result.property === undefined) return;
        if (result.property.length === 0) return;
        buildingDataList.push({
          buildingData: result,
          imageURL: null,
        });
      });

      const hoge = await this.getImageURL(buildingDataList);
      const indexImageURLMap = await this.getImageURL(buildingDataList);
      indexImageURLMap.forEach((imageURL, index) => {
        buildingDataList[Number(index)].imageURL = imageURL;
      });
      this.buildingDataList = buildingDataList;
    },
    // キーワードに一致する物件の内先頭10件を取得
    getBuildings: async function() {
      const rentPropertyQueryAPIApi = new RentPropertyQueryAPIApi(
        this.$store.state.apiServices.dejimaApiClient
      );

      return await rentPropertyQueryAPIApi.searchRentPropertyByBuilding({
        buildingName: this.query,
        itemsPerPage: 10,
      });
    },
    // 画像APIにより、検索結果の物件に対応する外観画像のURLを取得する。
    getImageURL: async function(buildingDataList) {
      const imageQueryAPIApi = new ImageQueryAPIApi(
        this.$store.state.apiServices.dejimaImageApiClient
      );

      const propertyFullKeyList = buildingDataList.map(
        it => it.buildingData.property[0].property_full_key
      );
      const result = await imageQueryAPIApi.bulkGetMetadataRentRentListGet(
        propertyFullKeyList.join(","),
        {
          baitaiCode: 105, // 媒体コードは105の指定を推奨
          kindCode: 10, // 画像種別：外観（https://proxy-api-property-swagger.s3-ap-northeast-1.amazonaws.com/gpool.html を参照）
        }
      );
      if (result === null) return;
      const IdImageURLMap = new Map();
      result.forEach(it => {
        if (IdImageURLMap.has(it.property_key)) return;
        IdImageURLMap.set(it.property_key, it.url);
      });
      const indexImageURLMap = new Map();
      IdImageURLMap.forEach((imageURL, propertyKey) => {
        const matchedIndex = propertyFullKeyList.indexOf(propertyKey);
        if (matchedIndex === undefined) return;
        indexImageURLMap.set(matchedIndex, imageURL);
      });
      return indexImageURLMap;
    },
  },
};
</script>
