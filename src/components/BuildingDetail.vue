<template>
<v-col>
<div>
    <div class="building-name-box">
  <h1 class="building-name">{{ variable.building_name }} {{ variable.property[0].room_number_text }}号室</h1>
  
  </div>

  <div class="building-name-address">
  <h2 class="address">{{variable.address_text}}{{variable.branch_number_text}}</h2>
  </div>
  <div class="point-box"><p class="point-text">Point!!</p> </div>
  <div class="sales-point-box"> <p class="sales-point-text">{{variable.property[0].sales_point}}</p></div>
    <!-- <div class = "building-name-address">
  <h2 class="address">所在地 : {{variable.address_text}}{{variable.branch_number_text}}</h2>
  </div>
    <div> -->
 <table class="info1-table">
    <tr>
      <th>家賃</th>
      <th>管理費/共益費</th>
      <th>敷金/礼金</th>
      <th>間取り</th>
      <th>階数</th>
      <!-- <th>専有面積</th> -->
      <th>築年数(竣工年月)</th>
    </tr>
    
        <th class="price">{{variable.property[0].price.amount | addComma}} 円</th>
        <th>{{variable.property[0].manage_cost.amount | addComma}} {{variable.property[0].manage_cost.unit}}/{{variable.property[0].service_fee.amount | addComma}} {{variable.property[0].service_fee.unit}}</th>
        <th>{{variable.property[0].deposit.amount| addComma}} {{variable.property[0].deposit.unit}} / {{variable.property[0].key_money.amount| addComma}} {{variable.property[0].key_money.unit}}</th>
        <th>{{variable.property[0].room_count}}{{variable.property[0].layout_type}}</th>
        <th>{{variable.property[0].floor_number}} 階</th>
        <!-- <th>{{variable.property[0].exclusive_area.area}}m<sup>2</sup></th> -->
        <th>築{{2020 - variable.completion_datejun.year}}年({{variable.completion_datejun.text}})</th>
    
  </table>
</div>

 <table class="info1-table">
    <tr>
        <th>建築区分</th>
        <th>専有面積</th>
      <th>保証金/償却金/権利金</th>
      <th>最寄駅</th>
      <th>向き</th>
      <th>駐車場</th>

    </tr>
    <th>{{variable.building_type}}</th>
    <th>{{variable.property[0].exclusive_area.area}}m<sup>2</sup></th>
        <th>{{variable.property[0].guarantee_price.amount | addComma}} {{variable.property[0].guarantee_price.unit}}/ {{variable.property[0].amortization_expense.amount | addComma}} {{variable.property[0].amortization_expense.unit}} / {{variable.property[0].premium.amount | addComma}} {{variable.property[0].premium.unit}}</th>
        <th>{{variable.property[0].transportation[0].station.line_name}} {{variable.property[0].transportation[0].station.station_name}}駅</th>
        <th>{{variable.property[0].orientation}}</th>
        <th>{{variable.property[0].parking_availability}}</th>

    
  </table>




  </v-col>
</template>

<script>
 export default {
  name: 'BuildingDetai',
  data: () => ({

    queryResults: "",
  }),

  filters: {
      addComma: function (value) {
          if(!value){
              return '-';
              }
              return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
              },
      },


  props: [
   'variable'
  ]

}

</script>


<style scoped>

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.building-name-box{
  padding-top: 10px; 
  margin-bottom: 20px;
  text-align: center;
  width: auto; 
  height: 70px; 
}

.building-name-address{
    /* text-align: center; */
    text-align: center;
    width: auto; 
    height: 30px; 
    background-color:white; 
}
.building-name {
  margin-top: 20px;
  margin-bottom: 20px;
}
.address {
  margin-top: 10px;
  margin-bottom: 10px;
}

.no-newline{
    display:inline;
}

.sales-point-box{
    font-family: sans-serif;
}

.point-box{
    border: 1px;
    width: 100px;
    background-color:orange;
    text-align: center;
    margin-top: 40px;
    border-radius: 5px;
}

.point-text{
    font-size: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
}

.sales-point-text{
    font-size: 20px;
    font-weight: bolder;
}

.info1-table{
  width: 100%;
  /* border-collapse: collapse; */
  /* border-spacing: 0; */
  background-color:whitesmoke;
  margin-top: 20px;
  margin-bottom: 20px;
}

.info1-table th,.info1-table td{
  padding: 10px 0;
  text-align: center;
}

.info1-table tr:nth-child(odd){
  background-color: #eee
}

.price{
    font-size:25px;
}

</style>

