# EsApi.RentProperty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**propertyFullKey** | **String** |  | 
**originalPropertyCodeText** | **String** |  | [optional] 
**propertyClass** | **String** |  | [optional] [readonly] 
**propertyClassCode** | **Number** | 1: 土地&lt;br/&gt;2: 建物&lt;br/&gt;3: 区画&lt;br/&gt;4: 建物付帯設備 | [optional] 
**propertyUse** | **String** |  | [optional] [readonly] 
**propertyUseCode** | **Number** | 1: 居住用&lt;br/&gt;2: 事業用&lt;br/&gt;3: 投資用 | 
**propertyType** | **String** |  | [optional] [readonly] 
**propertyTypeCode** | **Number** | 101: マンション&lt;br/&gt;102: リゾートマンション&lt;br/&gt;103: アパート&lt;br/&gt;104: コーポ&lt;br/&gt;105: テラスハウス&lt;br/&gt;106: タウンハウス&lt;br/&gt;107: 戸建&lt;br/&gt;108: 土地&lt;br/&gt;109: 借地権譲渡&lt;br/&gt;110: 底地権譲渡&lt;br/&gt;111: 店舗&lt;br/&gt;112: 店舗事務所&lt;br/&gt;113: 住宅付店舗&lt;br/&gt;114: 事務所&lt;br/&gt;115: ビル&lt;br/&gt;116: 倉庫&lt;br/&gt;117: 工場&lt;br/&gt;118: トランクルーム&lt;br/&gt;119: 駐車場&lt;br/&gt;120: バイク置き場&lt;br/&gt;121: その他&lt;br/&gt;122: 間借り | 
**hasEntries** | **Boolean** |  | [optional] 
**currentStatus** | **String** |  | [optional] [readonly] 
**currentStatusCode** | **Number** | 1: 居住中&lt;br/&gt;2: 空室&lt;br/&gt;3: 建築中&lt;br/&gt;4: 退去予定&lt;br/&gt;5: 改装中&lt;br/&gt;6: 完成済 | [optional] 
**departureDate** | **Date** |  | [optional] 
**nameDisplayFlag** | **Boolean** |  | 
**branchNumberDisplayFlag** | **Boolean** |  | 
**roomNumberDisplayFlag** | **Boolean** |  | 
**mapMarkerDisplayFlag** | **Boolean** |  | 
**gas** | **String** |  | [optional] [readonly] 
**gasCode** | **Number** | 1: 都市ガス&lt;br/&gt;2: プロパン&lt;br/&gt;3: 共同&lt;br/&gt;4: その他 | [optional] 
**waterSupply** | **String** |  | [optional] [readonly] 
**waterSupplyCode** | **Number** | 1: 無&lt;br/&gt;2: メーター&lt;br/&gt;3: 専用メーター&lt;br/&gt;4: 小メーター&lt;br/&gt;5: 割当&lt;br/&gt;6: 本管より直結&lt;br/&gt;7: 受水槽&lt;br/&gt;8: 公営&lt;br/&gt;9: 私営&lt;br/&gt;10: 井戸&lt;br/&gt;11: 共同&lt;br/&gt;12: 簡易&lt;br/&gt;13: 公営水道引込可&lt;br/&gt;14: 公営水道引込済&lt;br/&gt;15: その他 | [optional] 
**sewerage** | **String** |  | [optional] [readonly] 
**sewerageCode** | **Number** | 1: 公共下水&lt;br/&gt;2: 浄化槽_個別&lt;br/&gt;3: 浄化槽_集中&lt;br/&gt;4: 汲取り&lt;br/&gt;5: 側溝_個別&lt;br/&gt;6: 側溝_集中&lt;br/&gt;7: その他 | [optional] 
**hasElectricity** | **Boolean** |  | [optional] 
**itJusetsuFlag** | **Boolean** |  | [optional] 
**isNewlyBuilt** | **Boolean** |  | [optional] 
**newUsed** | **String** |  | [optional] [readonly] 
**newUsedCode** | **Number** |  | [optional] 
**panoramaFlag** | **Boolean** |  | 
**websiteComment** | **String** |  | [optional] 
**pdfComment** | **String** |  | [optional] 
**tantoshaComment** | **String** |  | [optional] 
**salesPoint** | **String** |  | [optional] 
**specialityComment** | **String** |  | [optional] 
**specialityPdfComment** | **String** |  | [optional] 
**equipmentComment** | **String** |  | [optional] 
**equipmentPdfComment** | **String** |  | [optional] 
**customerKey** | **Number** |  | 
**agentGuid** | **String** |  | 
**staffGuid** | **String** |  | [optional] 
**contractCondition** | [**RentContractCondition**](RentContractCondition.md) |  | 
**propertyParking** | [**PropertyParking**](PropertyParking.md) |  | 
**propertyTag** | [**[Tag]**](Tag.md) |  | 
**buildingGuid** | **String** |  | [optional] [readonly] 
**dwellingUnit** | [**DwellingUnit**](DwellingUnit.md) |  | [optional] 
**transportation** | [**[Transportation]**](Transportation.md) |  | 
**otherTransportation** | **String** |  | [optional] 
**institution** | [**[Institution]**](Institution.md) |  | 
**reform** | [**RentReform**](RentReform.md) |  | [optional] 
**companyRemark** | **String** |  | [optional] 
**isPublished** | **Boolean** |  | [optional] [readonly] 
**publishedDatetime** | **Date** |  | [optional] [readonly] 
**lastUpdateDatetime** | **Date** |  | [optional] [readonly] 
**nextRenewalDatetime** | **Date** |  | [optional] [readonly] 
**rentPickupFeature** | [**RentPickupFeature**](RentPickupFeature.md) |  | [optional] 


