# EsApi.BuildingQueryAPIApi

All URIs are relative to *https://api.es-e-bukken.jp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBuilding**](BuildingQueryAPIApi.md#getBuilding) | **GET** /building/building/{building_guid}/ | Get Building
[**searchBuilding**](BuildingQueryAPIApi.md#searchBuilding) | **GET** /building/building/search/ | Search Building



## getBuilding

> Building getBuilding(buildingGuid)

Get Building

building_guidで建物情報を取得する

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.BuildingQueryAPIApi();
let buildingGuid = "buildingGuid_example"; // String | 
apiInstance.getBuilding(buildingGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingGuid** | **String**|  | 

### Return type

[**Building**](Building.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchBuilding

> BuildingList searchBuilding(opts)

Search Building

建物一覧を取得する

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.BuildingQueryAPIApi();
let opts = {
  'startIndex': 1, // Number | 検索の開始インデックス
  'itemsPerPage': 10, // Number | ページあたりの最大表示数
  'buildingGuid': ["null"], // [String] | 建物スペックGUID
  'buildingTypeCode': [null], // [Number] | 建物形式区分<br/>1: マンション<br/>2: リゾートマンション<br/>3: アパート<br/>4: テラスハウス<br/>5: タウンハウス<br/>6: 戸建<br/>7: 土地<br/>8: 店舗<br/>9: 事務所<br/>10: ビル<br/>11: 倉庫<br/>12: 工場<br/>13: トランクルーム<br/>14: 駐車場<br/>15: バイク置き場<br/>16: その他
  'structureCode': [null], // [Number] | 構造区分<br/>1: 木造<br/>2: 軽量鉄骨<br/>3: 鉄筋コンクリート<br/>4: 鉄骨鉄筋コンクリート<br/>5: ALC<br/>6: プレキャストコンクリート<br/>7: 鉄筋ブロック<br/>8: 鉄骨プレ<br/>9: 鉄骨<br/>10: その他
  'siteAreaFrom': 3.4, // Number | 土地面積検索区間
  'siteAreaTo': 3.4, // Number | 土地面積検索区間
  'siteAreaOrder': new EsApi.Order(), // Order | 土地面積ソート順
  'buildingName': "buildingName_example", // String | 建物名
  'buildingFurigana': "buildingFurigana_example", // String | 建物名フリガナ
  'prefecture': "prefecture_example", // String | 都道府県
  'prefectureCode': [null], // [Number] | 都道府県コード
  'city': ["null"], // [String] | 市区郡
  'cityCode': [null], // [Number] | 市区郡コード
  'town': ["null"], // [String] | 町村
  'jisCode': [null], // [Number] | JISコード
  'address': ["null"], // [String] | 住所
  'customerKey': [null], // [Number] | カスタマーキー
  'tatemonoGuid': ["null"] // [String] | One建物GUID
};
apiInstance.searchBuilding(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startIndex** | **Number**| 検索の開始インデックス | [optional] [default to 1]
 **itemsPerPage** | **Number**| ページあたりの最大表示数 | [optional] [default to 10]
 **buildingGuid** | [**[String]**](String.md)| 建物スペックGUID | [optional] 
 **buildingTypeCode** | [**[Number]**](Number.md)| 建物形式区分&lt;br/&gt;1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | [optional] 
 **structureCode** | [**[Number]**](Number.md)| 構造区分&lt;br/&gt;1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
 **siteAreaFrom** | **Number**| 土地面積検索区間 | [optional] 
 **siteAreaTo** | **Number**| 土地面積検索区間 | [optional] 
 **siteAreaOrder** | [**Order**](.md)| 土地面積ソート順 | [optional] 
 **buildingName** | **String**| 建物名 | [optional] 
 **buildingFurigana** | **String**| 建物名フリガナ | [optional] 
 **prefecture** | **String**| 都道府県 | [optional] 
 **prefectureCode** | [**[Number]**](Number.md)| 都道府県コード | [optional] 
 **city** | [**[String]**](String.md)| 市区郡 | [optional] 
 **cityCode** | [**[Number]**](Number.md)| 市区郡コード | [optional] 
 **town** | [**[String]**](String.md)| 町村 | [optional] 
 **jisCode** | [**[Number]**](Number.md)| JISコード | [optional] 
 **address** | [**[String]**](String.md)| 住所 | [optional] 
 **customerKey** | [**[Number]**](Number.md)| カスタマーキー | [optional] 
 **tatemonoGuid** | [**[String]**](String.md)| One建物GUID | [optional] 

### Return type

[**BuildingList**](BuildingList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

