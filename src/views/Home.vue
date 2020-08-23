<template>
  <v-col>
    <h1>アクセスのいい生活</h1>

    <div class="about">
      <h2>このサイトについて</h2>
      このサイトは、アクセスのいい生活を送るための全く新しい物件検索ができるサイトです。<br>
      お探しになる物件の町村情報を入力し、さらによく利用される場所（例：勤務先、学校、ジム）の住所を<br>いくつか入力することで、それら全てとアクセスのいい物件をご紹介いたします。<br>
      ＋ボタン、−ボタンでよく利用される場所の追加、削除ができます。
    </div>

    <div class="searchTown">
      <h3>お探しになる物件の町村を入力してください</h3>
      <v-text-field v-model="town" placeholder="ここに町村を入力してください　例)八王子市越野3丁目 → 越野"/>
    </div>

    <address-search-box v-for="searchBox in searchBoxes" 
      v-bind:key="searchBox.id" 
      v-on:address-input="searchBox.address=$event"
      v-on:weight-changed="searchBox.weight=$event"
    />

    <!-- <div class="address">
      <h3>よくご利用される場所の住所</h3>
      <v-text-field v-model="addressFirst" placeholder="ここに住所を入力してください"/>
      <h4>その場所の、他の場所と比較した重要度を5段階で評価して下さい</h4>
      <input type="range" min=1 max=5 v-model="weight[0]">  {{weightFirst}}
    </div>
    <div class="address">
      <h3>よくご利用される場所の住所</h3>
      <v-text-field v-model="addressSecond" placeholder="ここに住所を入力してください"/>
      <h4>その場所の、他の場所と比較した重要度を5段階で評価して下さい</h4>
      <input type="range" min=1 max=5 v-model="weight[1]">  {{weight[1]}}
    </div> -->
    <!-- <v-text-field v-model="text" placeholder="" />
    <v-text-field v-model="text" placeholder="edit me" /> -->
    <!-- <v-text-field v-bind:value="text" readonly /> -->
    <!-- <v-btn v-on:click="onClickedReset()">Reset</v-btn> -->

    <div class="pButtonBox" clearfix>
      <v-btn class="pButton" v-on:click="pushSearchBox()"> + </v-btn>
      <v-btn class="pButton" v-if="searchBoxes.length > 1" v-on:click="popSearchBox()"> - </v-btn>
    </div>

    <v-btn v-on:click="onSearch()">Search</v-btn>
    <div class="container" v-if="final.length !== 0">
      <bukken-property-card v-for="result in final" 
                            :key="result.buildingGuid" :value="result">
      </bukken-property-card>
    </div>
    <div class="container" v-else-if="beforeQueryResults.length !== 0">
      <bukken-property-card v-for="result in beforeQueryResults.results" 
                            :key="result.buildingGuid" :value="result">
      </bukken-property-card>
    </div>
    <div v-else class="noHitText">検索結果はありません</div>


  </v-col>
</template>


<script lang="js">

import HopButton from '../components/HopButton.vue';
import Counter from '../components/Counter.vue';
import { RentPropertyQueryAPIApi } from "../dejima/dejima-client/src/index";
import BukkenPropertyCard from '../components/BukkenPropertyCard.vue';
import AddressSearchBox from '../components/AddressSearchBox.vue'
import axios from "axios";
import { getDistance } from 'geolib';
import { toast } from "../function/toastr.js";


export default {
  name: "Home",

  components: {
    "bukken-property-card": BukkenPropertyCard,
    "address-search-box": AddressSearchBox,
  },

  data: () => ({
    text: "",
    searchBoxes: [
      {id: 1, address:"", weight: 3},
      {id: 2, address:"", weight: 3},
      // {id: 3, address:"", weight: 3},
    ],
    queryResults: "",
    final: [],
    allBuillding: null,
    town: null,
    query: [],
    latlng: {},
    beforeQueryResults: ""
  }),

  methods: {
    // onSearch: async function() {
    //   const apiClient = this.$store.state.apiServices.dejimaApiClient;
    //   const rentPropertyQueryAPIApi = new RentPropertyQueryAPIApi(apiClient);
    //   const res = await rentPropertyQueryAPIApi.searchRentPropertyByBuilding({
    //     town: [this.town],
    //     itemsPerPage: 50,
    //   });
    //   this.queryResults = res;

    //   this.$router.push({ path: '', query: { town: this.town } });
    // },

    onSearch: async function() {
      if (this.searchBoxes.some((item)=>item.address == "") || this.town == null) {
        toast('入力に不備があります。', "error");
      } else {
        const apiClient = this.$store.state.apiServices.dejimaApiClient;
        const rentPropertyQueryAPIApi = new RentPropertyQueryAPIApi(apiClient);
        const res = await rentPropertyQueryAPIApi.searchRentPropertyByBuilding({
          town: [this.town],
          itemsPerPage: 50,
        });
        this.queryResults = res;

        // 並び替えアルゴリズム
        let evals = [];
        await Promise.all(this.queryResults.results.map((item, index) => {
          return new Promise(async (resolve, reject)=>{
              // 物件の緯度/経度取得
            const bukkenLatitude = item.latitude / 3600000;
            const bukkenLongitude = item.longitude / 3600000;
            // 住所→緯度経度
            // this.searchBoxes.map((item)=>{
            //   getLatLng(item.address, this.associateAddressLatLng(item.address));
            // });
            const result = await Promise.all(this.searchBoxes.map((item) => this.getLatLngPromise(item.address)));
            // 距離取得
            let distance = [];

            result.map((item)=>{
              console.log(this.getLtoDistance(bukkenLatitude, bukkenLongitude, parseInt(item["lat"]), parseInt(item["lng"])));
              distance.push(this.getLtoDistance(bukkenLatitude, bukkenLongitude, parseInt(item["lat"]), parseInt(item["lng"])));
            });

            // 評価
            let evaluation = 0;
            for(let i = 0; i < distance.length; i++){
              evaluation += distance[i] * this.searchBoxes[i].weight
            }
            evals.push({index: index, val: evaluation});
            console.log(evaluation);
            resolve("ok");
          });
        }));
        // 昇順ソート
        evals.sort(function(a, b) {
          return (a.val < b.val) ? -1 : 1;
        });
        console.log(evals);
        // コンポーネントに渡す
        for(let i=0; i < evals.length; i++){
          this.final.push(this.queryResults.results[evals[i].index]);
        }
        let query =[];
        this.final.map((item)=>{
          query.push(item.building_guid);
        });
        this.$router.push({ path: '', query: { q: query } });
      }
    },

    saveSearchQuery: async function() {
      // databaseのusers/usernameにtextを登録をする
      await this.$store.state.apiServices.firebaseService.database
        .ref("users/username")
        .set({ query: this.text });
    },

    loadSearchQuery: async function() {
      // databaseのusers/search_queryに登録してあるものを取り出す
      const firebaseService = this.$store.state.apiServices.firebaseService;
      const result = await firebaseService.database
        .ref(`users/username`)
        .once("value");
      return result.val() ? result.val().query : "";
    },

    // // 2箇所の緯度経度から直線距離を取得(API)
    // getDistance: async function(latitude1, longitude1, latitude2, longitude2) {
    //   return await axios.post("/api/getDistance", {
    //     latitude1: latitude1,
    //     longitude1: longitude1,
    //     latitude2: latitude2,
    //     longitude2: longitude2,
    //   }).then(response => response.data.OutputData["geoLength"]);
    // },

    // 2箇所の緯度経度から直線距離を取得(ライブラリ)
    getLtoDistance: function(latitude1, longitude1, latitude2, longitude2){
      return getDistance(
        {latitude: latitude1, longitude: longitude1},
        {latitude: latitude2, longitude: longitude2}
      )
    },

    // updateLatitudeLongitudeTemp: function(latlng) {
    //     this.latitudeLongitudeTemp["latitude"] = latlng.lat;
    //     this.latitudeLongitudeTemp["longitude"] = latlng.lng;
    // },
    
    associateAddressLatLng(address) {
      const callback = (latlng) => {
        this.latlng[address] = {
          latitude: latlng.lat,
          longitude: latlng.lng
        }
      }
      return callback;
    },

    getLatLngPromise: function (str) {
      return new Promise((res, rej) => getLatLng(str, res, rej));
    },

    // onGio(addr) {
    //   getLatLng(addr, this.associateAddressLatLng(addr))
    //   console.log(this.latlng);
    //   // templateに<v-btn v-on:click="onGio(searchBoxes[0].address)">Geo</v-btn>と入れると試せます。
    // },
    
    pushSearchBox: function () {
      this.searchBoxes.push({id: this.searchBoxes.length+1, address: "", weight: 3})
    },

    popSearchBox: function () {
      this.searchBoxes.pop()
    },
  },

  created : async function() {
    this.$store.commit("apiServices/initialize");

    // // 全物件データ(建物)の取得
    // const apiClient = this.$store.state.apiServices.dejimaApiClient;
    // const rentPropertyQueryAPIApi = new RentPropertyQueryAPIApi(apiClient);
    // let results = []; //全物件データを入れる
    // let i = 1;

    // while(i <= 501){
    //   if(i == 501){
    //     await rentPropertyQueryAPIApi.searchRentPropertyByBuilding({
    //       startIndex: 501,
    //       itemsPerPage: 38,
    //     }).then((res)=>{
    //       results.push(res);
    //     });
    //   }else {
    //     // console.log("ok")
    //     await rentPropertyQueryAPIApi.searchRentPropertyByBuilding({
    //       startIndex: [i],
    //       itemsPerPage: 50,
    //     }).then((res)=>{
    //       results.push(res);
    //     });
    //   }
    //   i += 50;
    // };
    // this.allBuillding = results;
    // console.log(results);
  },

  beforeMount: async function(){
    //クエリに値が入っていたらguidでAPIを叩く
    if(this.$route.query.q != null){
      const apiClient = this.$store.state.apiServices.dejimaApiClient;
      const rentPropertyQueryAPIApi = new RentPropertyQueryAPIApi(apiClient);
      console.log(this.$route.query.q);
      this.beforeQueryResults
       = await rentPropertyQueryAPIApi.searchRentPropertyByBuilding({
        buildingGuid: this.$route.query.q,
        itemsPerPage: 50,
      });
      console.log(this.beforeQueryResults);
    }
  }

  // mounted: async function(){
  //   this.text = await this.loadSearchQuery();
  // },

};
</script>

<style scoped>
h1 {
  color: #6594e0;
  margin-top: 5px;
}

h2 {
  padding-left: 10px;
  margin-bottom: 10px;
  border-left: solid 4px #7db4e6;
}

.about {
  margin-top: 30px;
  margin-bottom: 40px;
}

.pButtonBox {
  text-align: right;
  margin-top: 0px;
  margin-bottom: 20px;
}

.pButton {
  margin-right: 20px;
  font-size: 15pt;
}

.noHitText {
  margin-top: 30px;
}

.searchTown {
  margin-top: 20px;
  margin-bottom: 20px;
  border:  10px #ffffff00 solid;
  outline: 1px #000000 solid;
}
/* .address {
  margin-top: 20px;
  margin-bottom: 20px;
  border:  10px #ffffff00 solid;
  outline: 1px #000000 solid;
} */
</style>>
