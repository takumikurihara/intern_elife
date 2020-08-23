<template>
<div>
        <div class="container" v-if="queryResults !== null">
            <building-detail v-bind:variable="queryResults.results[0]">
            </building-detail>
            <ul class="top-banner">
            <li><building-image   :variable="queryResults.results[0]" :kindcodeFlag="kindObject[1].id" :kindText="kindObject[1].kind"/></li>
            <li><building-image   :variable="queryResults.results[0]" :kindcodeFlag="kindObject[0].id" :kindText="kindObject[0].kind"/></li>
            <!-- <li><building-image   :variable="queryResults.results[0]" :kindcodeFlag="kindObject[2].id" :kindText="kindObject[2].kind"/></li>
            <li><building-image   :variable="queryResults.results[0]" :kindcodeFlag="kindObject[3].id" :kindText="kindObject[3].kind"/></li>
            <li><building-image   :variable="queryResults.results[0]" :kindcodeFlag="kindObject[4].id" :kindText="kindObject[4].kind"/></li> -->
            </ul>

            </div>
  <div>
  </div>
</div>

</template>

<script>
import BuildingDetail from '../components/BuildingDetail.vue';
import BuildingImage from '../components/BuildingImage.vue';
import { RentPropertyQueryAPIApi } from "../dejima/dejima-client/src/index";

export default {
      name: "Detail",

  components: {
    "building-detail": BuildingDetail,
    "building-image": BuildingImage,
  },
    data: () => ({
    queryResults: "",
    kindObject: [
      {id: 1, kind:"間取り"},
      {id: 10, kind:"外観"},
    //   {id: 11, kind:"地図"},
    //   {id: 4, kind:"キッチン"},
    //   {id: 3, kind:"リビング"},
    ],
  }),

computed:{
},
  
  methods:{
    onSearch: async function(){
      const apiClient = this.$store.state.apiServices.dejimaApiClient;
      const rentPropertyQueryAPIApi = new RentPropertyQueryAPIApi(apiClient);
      this.queryResults = await rentPropertyQueryAPIApi.searchRentPropertyByBuilding({
        // buildingName: this.$route.params.building_name,
        buildingGuid: [this.$route.params.building_guid],
      });
      console.log(this.queryResults)
    }, 

  },

  created : function() {
    this.$store.commit("apiServices/initialize");
    this.onSearch();
  }
};
</script>
<style scoped>
.top-banner{
	display: flex;
	flex-wrap:wrap;
}
.top-banner li {
	width: calc(100%/2);
	padding:0 5px;
	box-sizing:border-box;
    list-style: none;
}
.top-banner li img {
	max-width:100%; 
	height: auto;
	border:solid 1px #ccc;
}
</style>