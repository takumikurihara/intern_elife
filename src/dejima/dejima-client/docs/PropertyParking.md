# EsApi.PropertyParking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parkingAvailability** | **String** |  | [optional] [readonly] 
**parkingAvailabilityCode** | **Number** | 1: 無&lt;br/&gt;2: 有(敷地内)&lt;br/&gt;3: 付&lt;br/&gt;4: 近隣駐車場&lt;br/&gt;5: 空無&lt;br/&gt;6: 要問合せ | [optional] 
**neighborhoodParkingDistance** | **Number** |  | [optional] 
**parkingType** | **String** |  | [optional] [readonly] 
**parkingTypeCode** | **Number** | 1: 舗装&lt;br/&gt;2: 未舗装&lt;br/&gt;3: 機械式&lt;br/&gt;4: タワー式&lt;br/&gt;5: 時間貸し&lt;br/&gt;6: その他&lt;br/&gt;7: 自走式&lt;br/&gt;8: 平置 | [optional] 
**parkingRoof** | **String** |  | [optional] [readonly] 
**parkingRoofCode** | **Number** | 1: 無&lt;br/&gt;2: 有&lt;br/&gt;3: 地下&lt;br/&gt;4: 屋内 | [optional] 
**parkingShutter** | **String** |  | [optional] 
**parkingShutterCode** | **Number** | 1: 無&lt;br/&gt;2: 付き&lt;br/&gt;3: リモコンシャッタ | [optional] 
**parkingPriceRange** | [**IntRange**](IntRange.md) |  | [optional] 
**parkableNum** | **Number** |  | [optional] 
**parkingKeyMoney** | [**PriceWithUnit**](PriceWithUnit.md) |  | [optional] 
**parkingDeposit** | [**PriceWithUnit**](PriceWithUnit.md) |  | [optional] 
**hasBikeParking** | **Boolean** |  | [optional] 
**hasMotorbikeParking** | **Boolean** |  | [optional] 


