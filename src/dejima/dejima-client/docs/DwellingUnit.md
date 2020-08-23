# EsApi.DwellingUnit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildingGuid** | **String** |  | [optional] [readonly] 
**roomCount** | **Number** |  | [optional] 
**layoutType** | **String** |  | [optional] [readonly] 
**layoutTypeCode** | **Number** | 1: R&lt;br/&gt;2: K&lt;br/&gt;3: DK&lt;br/&gt;4: SDK&lt;br/&gt;5: LDK&lt;br/&gt;6: SLDK&lt;br/&gt;7: LK&lt;br/&gt;8: SK&lt;br/&gt;9: SLK | [optional] 
**layoutText** | **String** | &#x60;room_count&#x60; と &#x60;layout_type&#x60; を組み合わせて、一般的な間取りの文字列表現を返す。         ex) 1DK, 2LDK | [optional] [readonly] 
**floorNumber** | **String** |  | [optional] 
**exclusiveArea** | [**AreaWithMeasurementMethod**](AreaWithMeasurementMethod.md) | 専有面積 単位: 平方メートル 計測方法: 壁芯 内法 登記簿 | [optional] 
**roomNumberText** | **String** |  | [optional] 
**orientation** | **String** |  | [optional] [readonly] 
**orientationCode** | **Number** | 1: 東&lt;br/&gt;2: 西&lt;br/&gt;3: 南&lt;br/&gt;4: 北&lt;br/&gt;5: 北東&lt;br/&gt;6: 北西&lt;br/&gt;7: 南東&lt;br/&gt;8: 南西 | [optional] 
**dwellingUnitFeature** | [**[DwellingUnitFeature]**](DwellingUnitFeature.md) |  | [optional] 
**dwellingUnitOuterFacility** | [**[DwellingUnitOuterFacility]**](DwellingUnitOuterFacility.md) |  | [optional] 
**room** | [**[Room]**](Room.md) |  | [optional] 


