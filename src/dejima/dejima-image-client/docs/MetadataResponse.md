# Api.MetadataResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | 画像カテゴリー  賃貸物件と売買物件で異なる。 | [optional] 
**comment** | **String** | 画像コメント | [optional] 
**description** | **String** | 画像説明 | [optional] 
**hashType** | **String** | 画像データのハッシュを計算するハッシュ関数名  通常はCRC32 | 
**hashValue** | **String** | 画像データのハッシュ値 | 
**height** | **Number** | 画像高さのピクセル数 | 
**kind** | **String** | 画像種別  物件内でユニーク。rentとsaleで共通 | 
**kindCode** | **String** | 画像種別コード  物件内でユニーク。rentとsaleで共通 | 
**modified** | **String** | 画像の最終更新日時  RFC1123形式 | 
**propertyKey** | **String** | いい生活番号  スマートOneコンバートでは物件識別コード(PROPERTY_KEY_TEXT)と呼ばれている | 
**url** | **String** | 画像URL  このURLを利用して画像データを取得する。 | 
**width** | **Number** | 画像横幅のピクセル数 | 


