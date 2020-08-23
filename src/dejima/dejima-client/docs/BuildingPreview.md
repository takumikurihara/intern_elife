# EsApi.BuildingPreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildingGuid** | **String** |  | [optional] [readonly] 
**buildingFurigana** | **String** |  | [optional] 
**buildingName** | **String** |  | 
**buildingClass** | **String** |  | [optional] 
**buildingClassCode** | **Number** | 1: 戸建&lt;br/&gt;2: 集合住宅&lt;br/&gt;3: 事務所・商業施設&lt;br/&gt;4: 土地&lt;br/&gt;5: 駐車場 | [optional] 
**buildingType** | **String** |  | [readonly] 
**buildingTypeCode** | **Number** | 1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | 
**structure** | **String** |  | [optional] [readonly] 
**structureCode** | **Number** | 1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
**totalUnits** | **Number** |  | [optional] 
**totalFloors** | **Number** |  | [optional] 
**groundFloors** | **Number** |  | [optional] 
**basementFloors** | **Number** |  | [optional] 
**completionDatejun** | [**DateJun**](DateJun.md) | 竣工年月 | [optional] 
**landReclamationDatejun** | [**DateJun**](DateJun.md) | 土地造成完了年月 | [optional] 
**coverage** | **Number** |  | [optional] 
**floorAreaRatio** | **Number** |  | [optional] 
**siteArea** | [**AreaWithMeasurementMethod**](AreaWithMeasurementMethod.md) | 土地面積 単位: 平方メートル 計測方法: 公簿 実測 | [optional] 
**totalFloorArea** | [**AreaWithMeasurementMethod**](AreaWithMeasurementMethod.md) | 延床面積 単位: 平方メートル 計測方法: 壁芯 内法 登記簿 | [optional] 
**zipcodeText** | **String** |  | [optional] 
**jisCodeValue** | **Number** |  | [optional] 
**prefecture** | **String** |  | 
**prefectureCode** | **Number** |  | 
**city** | **String** |  | 
**cityCode** | **Number** |  | 
**town** | **String** |  | 
**tyoume** | **String** |  | 
**addressText** | **String** |  | [optional] 
**branchNumberText** | **String** |  | [optional] 
**latitude** | **Number** |  | [optional] 
**longitude** | **Number** |  | [optional] 
**parallel2ParkingFlag** | **Boolean** |  | 
**parallel3ParkingFlag** | **Boolean** |  | 
**hasLargeGarage** | **Boolean** |  | 
**hasVisitorsParking** | **Boolean** |  | 
**hasGarage** | **Boolean** |  | 
**hasDeliveryBox** | **Boolean** |  | 


