# EsApi.TagQueryAPIApi

All URIs are relative to *https://api.es-e-bukken.jp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTag**](TagQueryAPIApi.md#listTag) | **GET** /tag/tag/list/ | List Tag



## listTag

> TagListResult listTag(category, opts)

List Tag

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.TagQueryAPIApi();
let category = "category_example"; // String | タグのカテゴリ: property, building
let opts = {
  'startIndex': 1, // Number | 検索の開始インデックス
  'itemsPerPage': 50 // Number | ページあたりの最大表示数
};
apiInstance.listTag(category, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| タグのカテゴリ: property, building | 
 **startIndex** | **Number**| 検索の開始インデックス | [optional] [default to 1]
 **itemsPerPage** | **Number**| ページあたりの最大表示数 | [optional] [default to 50]

### Return type

[**TagListResult**](TagListResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

