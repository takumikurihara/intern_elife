<template>
<v-col v-if="imageURL!=''">
    <div>
        <p class="kind-text">{{kindText}}</p>
        <v-img v-if="imageFlag" :src="imageURL"/>
    </div>
</v-col>
</template>


<script>
import { ApiClient } from "../dejima/dejima-client/src";
import ImageApiClient from "../dejima/dejima-image-client/src/ApiClient";
import ImageQueryAPIApi from "../dejima/dejima-image-client/src/api/ImageQueryAPIApi";

export default {
  name: 'BuildingImage',
 
  data: () => ({imageFlag: false, imageURL: ""}),
  
//   props: [
//    'variable'
//   ],

props:{
    variable : Object,
    kindcodeFlag : Number,
    kindText: String
},
  
  methods: {
      getImageURL: async function(property_full_key) {
        // console.log(property_full_key);
        const imageQueryAPIApi = new ImageQueryAPIApi(
            this.$store.state.apiServices.dejimaImageApiClient
        );
        const result = await imageQueryAPIApi.bulkGetMetadataRentRentListGet(
            property_full_key,
            {
                baitaiCode: 105, // 媒体コードは105の指定を推奨
                kindCode: this.kindcodeFlag, // 画像種別：外観（https://proxy-api-property-swagger.s3-ap-northeast-1.amazonaws.com/gpool.html を参照）
                // kind: this.kindImg
            }
        );
        this.imageFlag = true;
        this.imageURL = result[0].url;
      },
  },

  created : function() {
    this.getImageURL(this.variable.property[0].property_full_key);
  },
}

</script>

<style scoped>


.kind-text{
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
    background-color:rgb(62, 185, 201);
}
</style>