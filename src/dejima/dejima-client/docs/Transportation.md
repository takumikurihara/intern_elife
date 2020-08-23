# EsApi.Transportation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transportationKind** | **String** |  | [optional] [readonly] 
**transportationKindCode** | **Number** | 1: 鉄道を利用&lt;br/&gt;2: バスのみ利用 | 
**wayTo** | **String** |  | [optional] [readonly] 
**wayToCode** | **Number** | 1: 徒歩&lt;br/&gt;2: バス&lt;br/&gt;3: 距離・車 | [optional] 
**station** | [**Station**](Station.md) |  | [optional] 
**stationAccess** | [**ValueWithUnit**](ValueWithUnit.md) | 駅からのアクセス  単位はm（徒歩距離の場合）か分（徒歩時間の場合） | [optional] 
**busStopAccess** | [**BusStopAccess**](BusStopAccess.md) |  | [optional] 
**carAccess** | [**CarAccess**](CarAccess.md) |  | [optional] 


