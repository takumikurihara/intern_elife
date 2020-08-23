# Api.ImageQueryAPIApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkGetMetadataRentRentListGet**](ImageQueryAPIApi.md#bulkGetMetadataRentRentListGet) | **GET** /rent/list/ | Bulk Get Metadata Rent
[**bulkGetMetadataSaleSaleListGet**](ImageQueryAPIApi.md#bulkGetMetadataSaleSaleListGet) | **GET** /sale/list/ | Bulk Get Metadata Sale
[**getImageRentRentImgPropertyKeyFilenameGet**](ImageQueryAPIApi.md#getImageRentRentImgPropertyKeyFilenameGet) | **GET** /rent/img/{property_key}/{filename} | Get Image Rent
[**getImageSaleSaleImgPropertyKeyFilenameGet**](ImageQueryAPIApi.md#getImageSaleSaleImgPropertyKeyFilenameGet) | **GET** /sale/img/{property_key}/{filename} | Get Image Sale
[**getMetadataRentRentPropertyKeyGet**](ImageQueryAPIApi.md#getMetadataRentRentPropertyKeyGet) | **GET** /rent/{property_key}/ | Get Metadata Rent
[**getMetadataSaleSalePropertyKeyGet**](ImageQueryAPIApi.md#getMetadataSaleSalePropertyKeyGet) | **GET** /sale/{property_key}/ | Get Metadata Sale



## bulkGetMetadataRentRentListGet

> [MetadataResponse] bulkGetMetadataRentRentListGet(propertyKey, opts)

Bulk Get Metadata Rent

賃貸物件の画像メタデータをバルクで取得する

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.ImageQueryAPIApi();
let propertyKey = 2113026781900000000002,2113026781900000000003,2113026781900000000004; // String | いい生活番号のリスト（カンマ区切り）  いい生活番号をカンマ区切りで複数指定できる。 指定できるの個数の上限は50。 
let opts = {
  'baitaiCode': 101, // Number | 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる 
  'kindCode': 1,2,3 // String | 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない 
};
apiInstance.bulkGetMetadataRentRentListGet(propertyKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKey** | **String**| いい生活番号のリスト（カンマ区切り）  いい生活番号をカンマ区切りで複数指定できる。 指定できるの個数の上限は50。  | 
 **baitaiCode** | **Number**| 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる  | [optional] 
 **kindCode** | **String**| 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない  | [optional] 

### Return type

[**[MetadataResponse]**](MetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bulkGetMetadataSaleSaleListGet

> [MetadataResponse] bulkGetMetadataSaleSaleListGet(propertyKey, opts)

Bulk Get Metadata Sale

売買物件の画像メタデータをバルクで取得する

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.ImageQueryAPIApi();
let propertyKey = 2113026781900000000002,2113026781900000000003,2113026781900000000004; // String | いい生活番号のリスト（カンマ区切り）  いい生活番号をカンマ区切りで複数指定できる。 指定できるの個数の上限は50。 
let opts = {
  'baitaiCode': 101, // Number | 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる 
  'kindCode': 1,2,3 // String | 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない 
};
apiInstance.bulkGetMetadataSaleSaleListGet(propertyKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKey** | **String**| いい生活番号のリスト（カンマ区切り）  いい生活番号をカンマ区切りで複数指定できる。 指定できるの個数の上限は50。  | 
 **baitaiCode** | **Number**| 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる  | [optional] 
 **kindCode** | **String**| 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない  | [optional] 

### Return type

[**[MetadataResponse]**](MetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getImageRentRentImgPropertyKeyFilenameGet

> AnyType getImageRentRentImgPropertyKeyFilenameGet(propertyKey, filename, opts)

Get Image Rent

賃貸物件の画像データを取得する  URL構成は変わる可能性がある。 必ず画像メタデータに含まれる &#x60;url&#x60; を使って画像を取得するべき。

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.ImageQueryAPIApi();
let propertyKey = "propertyKey_example"; // String | 
let filename = "filename_example"; // String | 
let opts = {
  'size': 60x40 // String | 画像サイズ  横×縦をpixel単位で指定する。 正規表現では \\d+x\\d+ にマッチする。
};
apiInstance.getImageRentRentImgPropertyKeyFilenameGet(propertyKey, filename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKey** | **String**|  | 
 **filename** | **String**|  | 
 **size** | **String**| 画像サイズ  横×縦をpixel単位で指定する。 正規表現では \\d+x\\d+ にマッチする。 | [optional] 

### Return type

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getImageSaleSaleImgPropertyKeyFilenameGet

> AnyType getImageSaleSaleImgPropertyKeyFilenameGet(propertyKey, filename, opts)

Get Image Sale

売買物件の画像データを取得する  URL構成は変わる可能性がある。 必ず画像メタデータに含まれる &#x60;url&#x60; を使って画像を取得するべき。

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.ImageQueryAPIApi();
let propertyKey = "propertyKey_example"; // String | 
let filename = "filename_example"; // String | 
let opts = {
  'size': 60x40 // String | 画像サイズ  横×縦をpixel単位で指定する。 正規表現では \\d+x\\d+ にマッチする。
};
apiInstance.getImageSaleSaleImgPropertyKeyFilenameGet(propertyKey, filename, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKey** | **String**|  | 
 **filename** | **String**|  | 
 **size** | **String**| 画像サイズ  横×縦をpixel単位で指定する。 正規表現では \\d+x\\d+ にマッチする。 | [optional] 

### Return type

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetadataRentRentPropertyKeyGet

> [MetadataResponse] getMetadataRentRentPropertyKeyGet(propertyKey, opts)

Get Metadata Rent

賃貸物件の画像メタデータを取得する

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.ImageQueryAPIApi();
let propertyKey = 1113026781900000000002; // String | いい生活番号
let opts = {
  'baitaiCode': 101, // Number | 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる 
  'kindCode': 1,2,3 // String | 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない 
};
apiInstance.getMetadataRentRentPropertyKeyGet(propertyKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKey** | **String**| いい生活番号 | 
 **baitaiCode** | **Number**| 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる  | [optional] 
 **kindCode** | **String**| 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない  | [optional] 

### Return type

[**[MetadataResponse]**](MetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetadataSaleSalePropertyKeyGet

> [MetadataResponse] getMetadataSaleSalePropertyKeyGet(propertyKey, opts)

Get Metadata Sale

売買物件の画像メタデータを取得する

### Example

```javascript
import Api from 'api';

let apiInstance = new Api.ImageQueryAPIApi();
let propertyKey = 1113026781900000000002; // String | いい生活番号
let opts = {
  'baitaiCode': 101, // Number | 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる 
  'kindCode': 1,2,3 // String | 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない 
};
apiInstance.getMetadataSaleSalePropertyKeyGet(propertyKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyKey** | **String**| いい生活番号 | 
 **baitaiCode** | **Number**| 媒体コード  いい物件One上の出稿設定でフィルターする  * 専用の媒体コードを指定する。コードの詳細は「媒体コード（baitai_code）について」参照 * 指定しなかった場合、いい物件Oneで画像の出稿先媒体を「すべて」にしている画像メタデータのみ取得する * 特にパノラマ画像はデフォルトでの出稿先媒体が「すべて」ではないので注意 * いい物件Oneで出稿先媒体を限定している場合、このパラメータで媒体を指定する必要がある * 存在しないコードが指定されてもエラーにはせず、指定されなかったときと同じ挙動になる  | [optional] 
 **kindCode** | **String**| 画像種別コード  画像種別でフィルターする  * kind_code をカンマ区切りで１つ以上指定することができる * 指定された場合、指定された画像種別のみを取得する * 指定されなかった場合、すべての画像を取得する * 存在しないコードが指定されてもエラーにならない  | [optional] 

### Return type

[**[MetadataResponse]**](MetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

