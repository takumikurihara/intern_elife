# EsApi.AgentQueryAPIApi

All URIs are relative to *https://api.es-e-bukken.jp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAgentByCustomerKey**](AgentQueryAPIApi.md#getAgentByCustomerKey) | **GET** /agent/agent/{agent_identifier}/ | Get Agent By Customer Key
[**getStaff**](AgentQueryAPIApi.md#getStaff) | **GET** /agent/staff/{staff_guid}/ | Get Staff
[**listAgent**](AgentQueryAPIApi.md#listAgent) | **GET** /agent/agent/list/ | List Agent



## getAgentByCustomerKey

> Agent getAgentByCustomerKey(agentIdentifier)

Get Agent By Customer Key

customer_key または agent_guidで問い合わせ先情報を取得する agent_guidは非推奨

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.AgentQueryAPIApi();
let agentIdentifier = "agentIdentifier_example"; // String | 組織情報識別子 (customer_key or agent_guid(非推奨))
apiInstance.getAgentByCustomerKey(agentIdentifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentIdentifier** | **String**| 組織情報識別子 (customer_key or agent_guid(非推奨)) | 

### Return type

[**Agent**](Agent.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStaff

> Staff getStaff(staffGuid)

Get Staff

staff_guidでスタッフ情報を取得する

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.AgentQueryAPIApi();
let staffGuid = "staffGuid_example"; // String | 
apiInstance.getStaff(staffGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staffGuid** | **String**|  | 

### Return type

[**Staff**](Staff.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAgent

> AgentList listAgent(opts)

List Agent

API_KEYに紐づくカスタマーキーと一致する問い合わせ先組織情報一覧を取得する  クエリで customer_key を指定すれば対象を絞り込める

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.AgentQueryAPIApi();
let opts = {
  'customerKey': [null], // [Number] | カスタマーキー
  'startIndex': 1, // Number | 検索の開始インデックス
  'itemsPerPage': 10 // Number | ページあたりの最大表示数
};
apiInstance.listAgent(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerKey** | [**[Number]**](Number.md)| カスタマーキー | [optional] 
 **startIndex** | **Number**| 検索の開始インデックス | [optional] [default to 1]
 **itemsPerPage** | **Number**| ページあたりの最大表示数 | [optional] [default to 10]

### Return type

[**AgentList**](AgentList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

