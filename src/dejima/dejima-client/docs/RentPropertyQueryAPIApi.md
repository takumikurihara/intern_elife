# EsApi.RentPropertyQueryAPIApi

All URIs are relative to *https://api.es-e-bukken.jp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregateRentPropertyByArea**](RentPropertyQueryAPIApi.md#aggregateRentPropertyByArea) | **GET** /property/rent/area/count/ | Aggregate By Area
[**aggregateRentPropertyByLine**](RentPropertyQueryAPIApi.md#aggregateRentPropertyByLine) | **GET** /property/rent/line/count/ | Aggregate By Line
[**choiceRentProperty**](RentPropertyQueryAPIApi.md#choiceRentProperty) | **GET** /property/rent/dwelling_unit/choice/ | Choice Rent Property Dwelling Unit
[**getRentProperty**](RentPropertyQueryAPIApi.md#getRentProperty) | **GET** /property/rent/{property_full_key}/ | Get Property
[**searchRentPropertyByBuilding**](RentPropertyQueryAPIApi.md#searchRentPropertyByBuilding) | **GET** /property/rent/search/ | Search Rent Property
[**searchRentPropertyByDwellingUnit**](RentPropertyQueryAPIApi.md#searchRentPropertyByDwellingUnit) | **GET** /property/rent/dwelling_unit/search/ | Search Rent Property Dwelling Unit



## aggregateRentPropertyByArea

> AreaAggregateResult aggregateRentPropertyByArea(level, opts)

Aggregate By Area

エリア別の物件数の集計結果を取得する（賃貸）  市区郡/町村のレベル別に物件数を集計し、その結果を返す。 クエリパラメータで検索条件を付加することもできる。

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.RentPropertyQueryAPIApi();
let level = new EsApi.AreaLevel(); // AreaLevel | 集計のレベル
let opts = {
  'baitaiCode': new EsApi.RentBaitaiCode(), // RentBaitaiCode | 掲載先<br/>103: EsB2B<br/>105: ウェブサイト
  'propertyFullKey': ["null"], // [String] | 物件完全ID
  'propertyUseCode': [null], // [Number] | 募集用途区分<br/>1: 居住用<br/>2: 事業用<br/>3: 投資用
  'propertyTypeCode': [null], // [Number] | 募集種別区分<br/>101: マンション<br/>102: リゾートマンション<br/>103: アパート<br/>104: コーポ<br/>105: テラスハウス<br/>106: タウンハウス<br/>107: 戸建<br/>108: 土地<br/>109: 借地権譲渡<br/>110: 底地権譲渡<br/>111: 店舗<br/>112: 店舗事務所<br/>113: 住宅付店舗<br/>114: 事務所<br/>115: ビル<br/>116: 倉庫<br/>117: 工場<br/>118: トランクルーム<br/>119: 駐車場<br/>120: バイク置き場<br/>121: その他<br/>122: 間借り
  'newUsedCode': 56, // Number | 新築・中古区分<br/>1: 新築<br/>2: 中古
  'residenceRentPeriodCode': 56, // Number | 居住用契約区分<br/>1: 普通借家契約<br/>2: 定期借家契約
  'layoutText': ["null"], // [String] | 間取りテキスト
  'layoutTypeCode': [null], // [Number] | 間取りタイプ<br/>1: R<br/>2: K<br/>3: DK<br/>4: SDK<br/>5: LDK<br/>6: SLDK<br/>7: LK<br/>8: SK<br/>9: SLK
  'isLargerThan5k': true, // Boolean | 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。
  'layoutCode': [null], // [Number] | 間取り区分<br/>1: 1R<br/>2: 1K<br/>3: 1DK<br/>4: 1LDK<br/>5: 2K<br/>6: 2DK<br/>7: 2LDK<br/>8: 3K<br/>9: 3DK<br/>10: 3LDK<br/>11: 4K<br/>12: 4DK<br/>13: 4LDK<br/>14: 5K以上
  'isNowAvailable': true, // Boolean | 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日)
  'availableCode': [null], // [Number] | 入居可能区分<br/>1: 即時<br/>2: 相談<br/>3: 期日指定<br/>4: 予定
  'rentTransactionFormCode': [null], // [Number] | 賃貸取引態様区分<br/>1: 貸主<br/>2: 代理<br/>3: 仲介元付(専任)<br/>4: 仲介元付(一般)<br/>5: 仲介先物<br/>6: 仲介元付<br/>7: 仲介
  'studentRestrictionCode': [null], // [Number] | 学生専用区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'genderRestrictionCode': [null], // [Number] | 性別入居条件区分<br/>1: 不問<br/>2: 女性限定<br/>3: 男性限定<br/>4: 女性希望<br/>5: 男性希望
  'kidsRestrictionCode': [null], // [Number] | 子供可入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'onePersonRestrictionCode': [null], // [Number] | 単身可入居条件<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'twoPersonsRestrictionCode': [null], // [Number] | 二人入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'elderRestrictionCode': [null], // [Number] | 高齢者入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'manageCostFreeCode': [null], // [Number] | 管理費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'serviceFeeFreeCode': [null], // [Number] | 共益費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'miscExpenseFreeCode': [null], // [Number] | 雑費なし区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'otherInitialCostFreeFlag': true, // Boolean | その他初期費用無しフラグ
  'petRestrictionCode': [null], // [Number] | ペット可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'officeUsageRestrictionCode': [null], // [Number] | 事務所利用条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'corporateContractRestrictionCode': [null], // [Number] | 法人可条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'musicalInstrumentRestrictionCode': [null], // [Number] | 楽器等の使用区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'restaurantUsageRestrictionCode': [null], // [Number] | 飲食店可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'roomSharingRestrictionCode': [null], // [Number] | ルームシェア区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignerRestrictionCode': [null], // [Number] | 外国人入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'friendsRestrictionCode': [null], // [Number] | 友人同士入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignStudentRestrictionCode': [null], // [Number] | 留学生入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'parkingAvailabilityCode': [null], // [Number] | 駐車場の状況区分<br/>1: 無<br/>2: 有(敷地内)<br/>3: 付<br/>4: 近隣駐車場<br/>5: 空無<br/>6: 要問合せ
  'gasCode': [null], // [Number] | ガス区分<br/>1: 都市ガス<br/>2: プロパン<br/>3: 共同<br/>4: その他
  'initialCostCode': [null], // [Number] | 初期費用区分<br/>1: 五万円以下<br/>2: 十万円以下<br/>3: 十五万円以下<br/>4: 二十万円以下<br/>5: 三十万円以下<br/>99: その他
  'guarantorRequirementsCode': [null], // [Number] | 保証人要否区分<br/>1: 要<br/>2: 不要<br/>3: 未入力
  'hasInsurance': true, // Boolean | 損保 有無フラグ
  'depositForStudentCode': [null], // [Number] | 学生敷金区分<br/>1: 不要<br/>2: 一ヶ月<br/>3: 二ヶ月
  'itJusetsuFlag': true, // Boolean | IT重説可フラグ
  'noGuarantorFlag': true, // Boolean | 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。
  'isTokuyuchin': true, // Boolean | 特優賃フラグ
  'freeRentFlag': true, // Boolean | フリーレントフラグ
  'managerFlag': true, // Boolean | 管理人有り
  'hasMotorbikeParking': true, // Boolean | バイク置場有フラグ
  'hasBikeParking': true, // Boolean | 駐輪場有フラグ
  'panoramaFlag': true, // Boolean | パノラマ画像付きフラグ
  'floorPlanFlag': true, // Boolean | 間取り図付きフラグ
  'hasExteriorImage': true, // Boolean | 外観画像付きフラグ
  'b2bCustomFlag': true, // Boolean | 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ）
  'isFurnished': true, // Boolean | 家具付きフラグ
  'hasAppliances': true, // Boolean | 家電付きフラグ
  'isNetFree': true, // Boolean | インターネット無料フラグ
  'isOver2f': true, // Boolean | 2階以上フラグ
  'isBathToiletSeparate': true, // Boolean | 風呂トイレ別フラグ
  'hasAircon': true, // Boolean | エアコン付きフラグ
  'hasAutoLock': true, // Boolean | オートロック付きフラグ
  'hasDeliveryBox': true, // Boolean | 宅配ボックス付きフラグ
  'hasElevator': true, // Boolean | エレベーター付きフラグ
  'hasLandryRoom': true, // Boolean | 室内洗濯機置き場フラグ
  'isFlooring': true, // Boolean | フローリングフラグ
  'isDesignersApartment': true, // Boolean | デザイナーズマンションフラグ
  'isBarrierFree': true, // Boolean | バリアフリーフラグ
  'isSouthFacing': true, // Boolean | 南向きフラグ
  'isHighestFloor': true, // Boolean | 最上階フラグ
  'isCornerRoom': true, // Boolean | 角部屋フラグ
  'hasSystemKitchen': true, // Boolean | システムキッチンフラグ
  'hasIhStove': true, // Boolean | IHコンロフラグ
  'hasGasStove': true, // Boolean | ガスコンロフラグ
  'hasMultipleGasStove': true, // Boolean | ガスコンロ２口以上フラグ
  'hasReboilBath': true, // Boolean | 追い焚き機能付きフラグ
  'hasWashlet': true, // Boolean | 温水洗浄便座フラグ
  'hasBathDryer': true, // Boolean | 浴室乾燥機付きフラグ
  'hasFloorHeating': true, // Boolean | 床暖房フラグ
  'hasCloset': true, // Boolean | クローゼットフラグ
  'hasWalkInCloset': true, // Boolean | ウォークインクローゼットフラグ
  'hasCatv': true, // Boolean | CATVフラグ
  'hasCs': true, // Boolean | CSアンテナフラグ
  'hasBs': true, // Boolean | BSアンテナフラグ
  'hasOpticalFiber': true, // Boolean | 光ファイバーフラグ
  'isAllElectric': true, // Boolean | オール電化フラグ
  'hasVerandaBalcony': true, // Boolean | ベランダ・バルコニー付きフラグ
  'isMaisonette': true, // Boolean | メゾネット
  'hasLoft': true, // Boolean | ロフト付き
  'hasSoundproof': true, // Boolean | 防音設備付き
  'hasCounterKitchen': true, // Boolean | カウンターキッチン付き
  'hasGarbageCollectionSite': true, // Boolean | 敷地内ゴミ置場有り
  'hasOwnYard': true, // Boolean | 専用庭付き
  'isQuakeResistantStructure': true, // Boolean | 耐震構造
  'isQuakeAbsorbingStructure': true, // Boolean | 免震構造
  'isDampingStructure': true, // Boolean | 制震構造
  'hasTvIntercom': true, // Boolean | TVインターホン付き
  'hasSecurityCamera': true, // Boolean | 防犯カメラ付き
  'isInternetAvailable': true, // Boolean | インターネット使用可
  'hasTrunkRoom': true, // Boolean | トランクルーム付き
  'isCondominium': true, // Boolean | 分譲賃貸
  'isTowerApartment': true, // Boolean | タワーマンション
  'isRenovated': true, // Boolean | リノベーション
  'hasWashroom': true, // Boolean | 洗面所独立
  'buildingAgeFrom': 56, // Number | 建築年数検索区間
  'buildingAgeTo': 56, // Number | 建築年数検索区間
  'priceFrom': 56, // Number | 現賃貸料検索区間
  'priceTo': 56, // Number | 現賃貸料検索区間
  'manageCostYenFrom': 56, // Number | 管理費（円）検索区間
  'manageCostYenTo': 56, // Number | 管理費（円）検索区間
  'depositYenFrom': 56, // Number | 敷金/保証金（円）検索区間
  'depositYenTo': 56, // Number | 敷金/保証金（円）検索区間
  'depositMonthFrom': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'depositMonthTo': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'keyMoneyYenFrom': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyYenTo': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyMonthFrom': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'keyMoneyMonthTo': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'repairCostYenFrom': 56, // Number | 敷引/償却（円）検索区間
  'repairCostYenTo': 56, // Number | 敷引/償却（円）検索区間
  'repairCostMonthFrom': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'repairCostMonthTo': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'initialCostFrom': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'initialCostTo': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'monthlyCostSummaryFrom': 56, // Number | 管理費など込み賃料検索区間
  'monthlyCostSummaryTo': 56, // Number | 管理費など込み賃料検索区間
  'advertisingFeePercentTo': 3.4, // Number | 広告料（パーセント）検索区間
  'advertisingFeePercentFrom': 3.4, // Number | 広告料（パーセント）検索区間
  'areaFrom': 3.4, // Number | 専有面積検索区間
  'areaTo': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaFrom': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaTo': 3.4, // Number | 専有面積検索区間
  'walkFromStationMinutesFrom': 56, // Number | 駅からの徒歩時間
  'walkFromStationMinutesTo': 56, // Number | 駅からの徒歩時間
  'lastUpdateDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'lastUpdateDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'originalPropertyCodeText': "originalPropertyCodeText_example", // String | 自社管理番号
  'buildingGuid': ["null"], // [String] | 建物スペックGUID
  'buildingTypeCode': [null], // [Number] | 建物形式区分<br/>1: マンション<br/>2: リゾートマンション<br/>3: アパート<br/>4: テラスハウス<br/>5: タウンハウス<br/>6: 戸建<br/>7: 土地<br/>8: 店舗<br/>9: 事務所<br/>10: ビル<br/>11: 倉庫<br/>12: 工場<br/>13: トランクルーム<br/>14: 駐車場<br/>15: バイク置き場<br/>16: その他
  'structureCode': [null], // [Number] | 構造区分<br/>1: 木造<br/>2: 軽量鉄骨<br/>3: 鉄筋コンクリート<br/>4: 鉄骨鉄筋コンクリート<br/>5: ALC<br/>6: プレキャストコンクリート<br/>7: 鉄筋ブロック<br/>8: 鉄骨プレ<br/>9: 鉄骨<br/>10: その他
  'siteAreaFrom': 3.4, // Number | 土地面積検索区間
  'siteAreaTo': 3.4, // Number | 土地面積検索区間
  'buildingName': "buildingName_example", // String | 建物名
  'buildingFurigana': "buildingFurigana_example", // String | 建物名フリガナ
  'tagGuid': ["null"], // [String] | タグGUID
  'prefecture': "prefecture_example", // String | 都道府県
  'prefectureCode': [null], // [Number] | 都道府県コード
  'city': ["null"], // [String] | 市区郡
  'cityCode': [null], // [Number] | 市区郡コード
  'town': ["null"], // [String] | 町村
  'jisCode': [null], // [Number] | JISコード
  'address': ["null"], // [String] | 住所
  'lineCode': [null], // [Number] | 沿線コード
  'stationCode': [null], // [Number] | 駅コード
  'customerKey': [null], // [Number] | カスタマーキー
  'ignorePublishStatus': false, // Boolean | 掲載状態を無視するフラグ
  'nameOrCodeText': "nameOrCodeText_example", // String | 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる
  'ignoreNameDisplay': true, // Boolean | 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる
  'query': "query_example" // String | 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) '[{\"building_name\": \"いい生活アパート\", \"price.to\": 700000}, {\"buildinig_name\": \"いい生活ハイツ\", \"walk_from_station_minutes.to\": 10}]'     -> ?query=%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \"%いい生活アパート%\" AND price <= 700000) OR (building_name like \"%いい生活ハイツ%\" AND walk_from_station_minutes <= 10)     
};
apiInstance.aggregateRentPropertyByArea(level, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **level** | [**AreaLevel**](.md)| 集計のレベル | 
 **baitaiCode** | [**RentBaitaiCode**](.md)| 掲載先&lt;br/&gt;103: EsB2B&lt;br/&gt;105: ウェブサイト | [optional] 
 **propertyFullKey** | [**[String]**](String.md)| 物件完全ID | [optional] 
 **propertyUseCode** | [**[Number]**](Number.md)| 募集用途区分&lt;br/&gt;1: 居住用&lt;br/&gt;2: 事業用&lt;br/&gt;3: 投資用 | [optional] 
 **propertyTypeCode** | [**[Number]**](Number.md)| 募集種別区分&lt;br/&gt;101: マンション&lt;br/&gt;102: リゾートマンション&lt;br/&gt;103: アパート&lt;br/&gt;104: コーポ&lt;br/&gt;105: テラスハウス&lt;br/&gt;106: タウンハウス&lt;br/&gt;107: 戸建&lt;br/&gt;108: 土地&lt;br/&gt;109: 借地権譲渡&lt;br/&gt;110: 底地権譲渡&lt;br/&gt;111: 店舗&lt;br/&gt;112: 店舗事務所&lt;br/&gt;113: 住宅付店舗&lt;br/&gt;114: 事務所&lt;br/&gt;115: ビル&lt;br/&gt;116: 倉庫&lt;br/&gt;117: 工場&lt;br/&gt;118: トランクルーム&lt;br/&gt;119: 駐車場&lt;br/&gt;120: バイク置き場&lt;br/&gt;121: その他&lt;br/&gt;122: 間借り | [optional] 
 **newUsedCode** | **Number**| 新築・中古区分&lt;br/&gt;1: 新築&lt;br/&gt;2: 中古 | [optional] 
 **residenceRentPeriodCode** | **Number**| 居住用契約区分&lt;br/&gt;1: 普通借家契約&lt;br/&gt;2: 定期借家契約 | [optional] 
 **layoutText** | [**[String]**](String.md)| 間取りテキスト | [optional] 
 **layoutTypeCode** | [**[Number]**](Number.md)| 間取りタイプ&lt;br/&gt;1: R&lt;br/&gt;2: K&lt;br/&gt;3: DK&lt;br/&gt;4: SDK&lt;br/&gt;5: LDK&lt;br/&gt;6: SLDK&lt;br/&gt;7: LK&lt;br/&gt;8: SK&lt;br/&gt;9: SLK | [optional] 
 **isLargerThan5k** | **Boolean**| 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。 | [optional] 
 **layoutCode** | [**[Number]**](Number.md)| 間取り区分&lt;br/&gt;1: 1R&lt;br/&gt;2: 1K&lt;br/&gt;3: 1DK&lt;br/&gt;4: 1LDK&lt;br/&gt;5: 2K&lt;br/&gt;6: 2DK&lt;br/&gt;7: 2LDK&lt;br/&gt;8: 3K&lt;br/&gt;9: 3DK&lt;br/&gt;10: 3LDK&lt;br/&gt;11: 4K&lt;br/&gt;12: 4DK&lt;br/&gt;13: 4LDK&lt;br/&gt;14: 5K以上 | [optional] 
 **isNowAvailable** | **Boolean**| 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日) | [optional] 
 **availableCode** | [**[Number]**](Number.md)| 入居可能区分&lt;br/&gt;1: 即時&lt;br/&gt;2: 相談&lt;br/&gt;3: 期日指定&lt;br/&gt;4: 予定 | [optional] 
 **rentTransactionFormCode** | [**[Number]**](Number.md)| 賃貸取引態様区分&lt;br/&gt;1: 貸主&lt;br/&gt;2: 代理&lt;br/&gt;3: 仲介元付(専任)&lt;br/&gt;4: 仲介元付(一般)&lt;br/&gt;5: 仲介先物&lt;br/&gt;6: 仲介元付&lt;br/&gt;7: 仲介 | [optional] 
 **studentRestrictionCode** | [**[Number]**](Number.md)| 学生専用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **genderRestrictionCode** | [**[Number]**](Number.md)| 性別入居条件区分&lt;br/&gt;1: 不問&lt;br/&gt;2: 女性限定&lt;br/&gt;3: 男性限定&lt;br/&gt;4: 女性希望&lt;br/&gt;5: 男性希望 | [optional] 
 **kidsRestrictionCode** | [**[Number]**](Number.md)| 子供可入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **onePersonRestrictionCode** | [**[Number]**](Number.md)| 単身可入居条件&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **twoPersonsRestrictionCode** | [**[Number]**](Number.md)| 二人入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **elderRestrictionCode** | [**[Number]**](Number.md)| 高齢者入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **manageCostFreeCode** | [**[Number]**](Number.md)| 管理費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **serviceFeeFreeCode** | [**[Number]**](Number.md)| 共益費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **miscExpenseFreeCode** | [**[Number]**](Number.md)| 雑費なし区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **otherInitialCostFreeFlag** | **Boolean**| その他初期費用無しフラグ | [optional] 
 **petRestrictionCode** | [**[Number]**](Number.md)| ペット可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **officeUsageRestrictionCode** | [**[Number]**](Number.md)| 事務所利用条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **corporateContractRestrictionCode** | [**[Number]**](Number.md)| 法人可条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **musicalInstrumentRestrictionCode** | [**[Number]**](Number.md)| 楽器等の使用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **restaurantUsageRestrictionCode** | [**[Number]**](Number.md)| 飲食店可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **roomSharingRestrictionCode** | [**[Number]**](Number.md)| ルームシェア区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignerRestrictionCode** | [**[Number]**](Number.md)| 外国人入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **friendsRestrictionCode** | [**[Number]**](Number.md)| 友人同士入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignStudentRestrictionCode** | [**[Number]**](Number.md)| 留学生入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **parkingAvailabilityCode** | [**[Number]**](Number.md)| 駐車場の状況区分&lt;br/&gt;1: 無&lt;br/&gt;2: 有(敷地内)&lt;br/&gt;3: 付&lt;br/&gt;4: 近隣駐車場&lt;br/&gt;5: 空無&lt;br/&gt;6: 要問合せ | [optional] 
 **gasCode** | [**[Number]**](Number.md)| ガス区分&lt;br/&gt;1: 都市ガス&lt;br/&gt;2: プロパン&lt;br/&gt;3: 共同&lt;br/&gt;4: その他 | [optional] 
 **initialCostCode** | [**[Number]**](Number.md)| 初期費用区分&lt;br/&gt;1: 五万円以下&lt;br/&gt;2: 十万円以下&lt;br/&gt;3: 十五万円以下&lt;br/&gt;4: 二十万円以下&lt;br/&gt;5: 三十万円以下&lt;br/&gt;99: その他 | [optional] 
 **guarantorRequirementsCode** | [**[Number]**](Number.md)| 保証人要否区分&lt;br/&gt;1: 要&lt;br/&gt;2: 不要&lt;br/&gt;3: 未入力 | [optional] 
 **hasInsurance** | **Boolean**| 損保 有無フラグ | [optional] 
 **depositForStudentCode** | [**[Number]**](Number.md)| 学生敷金区分&lt;br/&gt;1: 不要&lt;br/&gt;2: 一ヶ月&lt;br/&gt;3: 二ヶ月 | [optional] 
 **itJusetsuFlag** | **Boolean**| IT重説可フラグ | [optional] 
 **noGuarantorFlag** | **Boolean**| 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。 | [optional] 
 **isTokuyuchin** | **Boolean**| 特優賃フラグ | [optional] 
 **freeRentFlag** | **Boolean**| フリーレントフラグ | [optional] 
 **managerFlag** | **Boolean**| 管理人有り | [optional] 
 **hasMotorbikeParking** | **Boolean**| バイク置場有フラグ | [optional] 
 **hasBikeParking** | **Boolean**| 駐輪場有フラグ | [optional] 
 **panoramaFlag** | **Boolean**| パノラマ画像付きフラグ | [optional] 
 **floorPlanFlag** | **Boolean**| 間取り図付きフラグ | [optional] 
 **hasExteriorImage** | **Boolean**| 外観画像付きフラグ | [optional] 
 **b2bCustomFlag** | **Boolean**| 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ） | [optional] 
 **isFurnished** | **Boolean**| 家具付きフラグ | [optional] 
 **hasAppliances** | **Boolean**| 家電付きフラグ | [optional] 
 **isNetFree** | **Boolean**| インターネット無料フラグ | [optional] 
 **isOver2f** | **Boolean**| 2階以上フラグ | [optional] 
 **isBathToiletSeparate** | **Boolean**| 風呂トイレ別フラグ | [optional] 
 **hasAircon** | **Boolean**| エアコン付きフラグ | [optional] 
 **hasAutoLock** | **Boolean**| オートロック付きフラグ | [optional] 
 **hasDeliveryBox** | **Boolean**| 宅配ボックス付きフラグ | [optional] 
 **hasElevator** | **Boolean**| エレベーター付きフラグ | [optional] 
 **hasLandryRoom** | **Boolean**| 室内洗濯機置き場フラグ | [optional] 
 **isFlooring** | **Boolean**| フローリングフラグ | [optional] 
 **isDesignersApartment** | **Boolean**| デザイナーズマンションフラグ | [optional] 
 **isBarrierFree** | **Boolean**| バリアフリーフラグ | [optional] 
 **isSouthFacing** | **Boolean**| 南向きフラグ | [optional] 
 **isHighestFloor** | **Boolean**| 最上階フラグ | [optional] 
 **isCornerRoom** | **Boolean**| 角部屋フラグ | [optional] 
 **hasSystemKitchen** | **Boolean**| システムキッチンフラグ | [optional] 
 **hasIhStove** | **Boolean**| IHコンロフラグ | [optional] 
 **hasGasStove** | **Boolean**| ガスコンロフラグ | [optional] 
 **hasMultipleGasStove** | **Boolean**| ガスコンロ２口以上フラグ | [optional] 
 **hasReboilBath** | **Boolean**| 追い焚き機能付きフラグ | [optional] 
 **hasWashlet** | **Boolean**| 温水洗浄便座フラグ | [optional] 
 **hasBathDryer** | **Boolean**| 浴室乾燥機付きフラグ | [optional] 
 **hasFloorHeating** | **Boolean**| 床暖房フラグ | [optional] 
 **hasCloset** | **Boolean**| クローゼットフラグ | [optional] 
 **hasWalkInCloset** | **Boolean**| ウォークインクローゼットフラグ | [optional] 
 **hasCatv** | **Boolean**| CATVフラグ | [optional] 
 **hasCs** | **Boolean**| CSアンテナフラグ | [optional] 
 **hasBs** | **Boolean**| BSアンテナフラグ | [optional] 
 **hasOpticalFiber** | **Boolean**| 光ファイバーフラグ | [optional] 
 **isAllElectric** | **Boolean**| オール電化フラグ | [optional] 
 **hasVerandaBalcony** | **Boolean**| ベランダ・バルコニー付きフラグ | [optional] 
 **isMaisonette** | **Boolean**| メゾネット | [optional] 
 **hasLoft** | **Boolean**| ロフト付き | [optional] 
 **hasSoundproof** | **Boolean**| 防音設備付き | [optional] 
 **hasCounterKitchen** | **Boolean**| カウンターキッチン付き | [optional] 
 **hasGarbageCollectionSite** | **Boolean**| 敷地内ゴミ置場有り | [optional] 
 **hasOwnYard** | **Boolean**| 専用庭付き | [optional] 
 **isQuakeResistantStructure** | **Boolean**| 耐震構造 | [optional] 
 **isQuakeAbsorbingStructure** | **Boolean**| 免震構造 | [optional] 
 **isDampingStructure** | **Boolean**| 制震構造 | [optional] 
 **hasTvIntercom** | **Boolean**| TVインターホン付き | [optional] 
 **hasSecurityCamera** | **Boolean**| 防犯カメラ付き | [optional] 
 **isInternetAvailable** | **Boolean**| インターネット使用可 | [optional] 
 **hasTrunkRoom** | **Boolean**| トランクルーム付き | [optional] 
 **isCondominium** | **Boolean**| 分譲賃貸 | [optional] 
 **isTowerApartment** | **Boolean**| タワーマンション | [optional] 
 **isRenovated** | **Boolean**| リノベーション | [optional] 
 **hasWashroom** | **Boolean**| 洗面所独立 | [optional] 
 **buildingAgeFrom** | **Number**| 建築年数検索区間 | [optional] 
 **buildingAgeTo** | **Number**| 建築年数検索区間 | [optional] 
 **priceFrom** | **Number**| 現賃貸料検索区間 | [optional] 
 **priceTo** | **Number**| 現賃貸料検索区間 | [optional] 
 **manageCostYenFrom** | **Number**| 管理費（円）検索区間 | [optional] 
 **manageCostYenTo** | **Number**| 管理費（円）検索区間 | [optional] 
 **depositYenFrom** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositYenTo** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositMonthFrom** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **depositMonthTo** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **keyMoneyYenFrom** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyYenTo** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyMonthFrom** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **keyMoneyMonthTo** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **repairCostYenFrom** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostYenTo** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostMonthFrom** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **repairCostMonthTo** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **initialCostFrom** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **initialCostTo** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **monthlyCostSummaryFrom** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **monthlyCostSummaryTo** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **advertisingFeePercentTo** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **advertisingFeePercentFrom** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **areaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **areaTo** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaTo** | **Number**| 専有面積検索区間 | [optional] 
 **walkFromStationMinutesFrom** | **Number**| 駅からの徒歩時間 | [optional] 
 **walkFromStationMinutesTo** | **Number**| 駅からの徒歩時間 | [optional] 
 **lastUpdateDatetimeFrom** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **lastUpdateDatetimeTo** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeFrom** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeTo** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateFrom** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateTo** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateFrom** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateTo** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **originalPropertyCodeText** | **String**| 自社管理番号 | [optional] 
 **buildingGuid** | [**[String]**](String.md)| 建物スペックGUID | [optional] 
 **buildingTypeCode** | [**[Number]**](Number.md)| 建物形式区分&lt;br/&gt;1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | [optional] 
 **structureCode** | [**[Number]**](Number.md)| 構造区分&lt;br/&gt;1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
 **siteAreaFrom** | **Number**| 土地面積検索区間 | [optional] 
 **siteAreaTo** | **Number**| 土地面積検索区間 | [optional] 
 **buildingName** | **String**| 建物名 | [optional] 
 **buildingFurigana** | **String**| 建物名フリガナ | [optional] 
 **tagGuid** | [**[String]**](String.md)| タグGUID | [optional] 
 **prefecture** | **String**| 都道府県 | [optional] 
 **prefectureCode** | [**[Number]**](Number.md)| 都道府県コード | [optional] 
 **city** | [**[String]**](String.md)| 市区郡 | [optional] 
 **cityCode** | [**[Number]**](Number.md)| 市区郡コード | [optional] 
 **town** | [**[String]**](String.md)| 町村 | [optional] 
 **jisCode** | [**[Number]**](Number.md)| JISコード | [optional] 
 **address** | [**[String]**](String.md)| 住所 | [optional] 
 **lineCode** | [**[Number]**](Number.md)| 沿線コード | [optional] 
 **stationCode** | [**[Number]**](Number.md)| 駅コード | [optional] 
 **customerKey** | [**[Number]**](Number.md)| カスタマーキー | [optional] 
 **ignorePublishStatus** | **Boolean**| 掲載状態を無視するフラグ | [optional] [default to false]
 **nameOrCodeText** | **String**| 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる | [optional] 
 **ignoreNameDisplay** | **Boolean**| 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる | [optional] 
 **query** | **String**| 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) &#39;[{\&quot;building_name\&quot;: \&quot;いい生活アパート\&quot;, \&quot;price.to\&quot;: 700000}, {\&quot;buildinig_name\&quot;: \&quot;いい生活ハイツ\&quot;, \&quot;walk_from_station_minutes.to\&quot;: 10}]&#39;     -&gt; ?query&#x3D;%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \&quot;%いい生活アパート%\&quot; AND price &lt;&#x3D; 700000) OR (building_name like \&quot;%いい生活ハイツ%\&quot; AND walk_from_station_minutes &lt;&#x3D; 10)      | [optional] 

### Return type

[**AreaAggregateResult**](AreaAggregateResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## aggregateRentPropertyByLine

> LineAggregateResult aggregateRentPropertyByLine(level, opts)

Aggregate By Line

鉄道会社・駅・沿線別の物件数の集計結果を取得する（賃貸）  鉄道会社・駅・沿線のレベルごとに物件数を集計し、その結果を返す。 クエリパラメータで検索条件を付加することもできる。

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.RentPropertyQueryAPIApi();
let level = new EsApi.LineLevel(); // LineLevel | 集計のレベル
let opts = {
  'companyCode': [null], // [Number] | 会社コード
  'baitaiCode': new EsApi.RentBaitaiCode(), // RentBaitaiCode | 掲載先<br/>103: EsB2B<br/>105: ウェブサイト
  'propertyFullKey': ["null"], // [String] | 物件完全ID
  'propertyUseCode': [null], // [Number] | 募集用途区分<br/>1: 居住用<br/>2: 事業用<br/>3: 投資用
  'propertyTypeCode': [null], // [Number] | 募集種別区分<br/>101: マンション<br/>102: リゾートマンション<br/>103: アパート<br/>104: コーポ<br/>105: テラスハウス<br/>106: タウンハウス<br/>107: 戸建<br/>108: 土地<br/>109: 借地権譲渡<br/>110: 底地権譲渡<br/>111: 店舗<br/>112: 店舗事務所<br/>113: 住宅付店舗<br/>114: 事務所<br/>115: ビル<br/>116: 倉庫<br/>117: 工場<br/>118: トランクルーム<br/>119: 駐車場<br/>120: バイク置き場<br/>121: その他<br/>122: 間借り
  'newUsedCode': 56, // Number | 新築・中古区分<br/>1: 新築<br/>2: 中古
  'residenceRentPeriodCode': 56, // Number | 居住用契約区分<br/>1: 普通借家契約<br/>2: 定期借家契約
  'layoutText': ["null"], // [String] | 間取りテキスト
  'layoutTypeCode': [null], // [Number] | 間取りタイプ<br/>1: R<br/>2: K<br/>3: DK<br/>4: SDK<br/>5: LDK<br/>6: SLDK<br/>7: LK<br/>8: SK<br/>9: SLK
  'isLargerThan5k': true, // Boolean | 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。
  'layoutCode': [null], // [Number] | 間取り区分<br/>1: 1R<br/>2: 1K<br/>3: 1DK<br/>4: 1LDK<br/>5: 2K<br/>6: 2DK<br/>7: 2LDK<br/>8: 3K<br/>9: 3DK<br/>10: 3LDK<br/>11: 4K<br/>12: 4DK<br/>13: 4LDK<br/>14: 5K以上
  'isNowAvailable': true, // Boolean | 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日)
  'availableCode': [null], // [Number] | 入居可能区分<br/>1: 即時<br/>2: 相談<br/>3: 期日指定<br/>4: 予定
  'rentTransactionFormCode': [null], // [Number] | 賃貸取引態様区分<br/>1: 貸主<br/>2: 代理<br/>3: 仲介元付(専任)<br/>4: 仲介元付(一般)<br/>5: 仲介先物<br/>6: 仲介元付<br/>7: 仲介
  'studentRestrictionCode': [null], // [Number] | 学生専用区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'genderRestrictionCode': [null], // [Number] | 性別入居条件区分<br/>1: 不問<br/>2: 女性限定<br/>3: 男性限定<br/>4: 女性希望<br/>5: 男性希望
  'kidsRestrictionCode': [null], // [Number] | 子供可入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'onePersonRestrictionCode': [null], // [Number] | 単身可入居条件<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'twoPersonsRestrictionCode': [null], // [Number] | 二人入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'elderRestrictionCode': [null], // [Number] | 高齢者入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'manageCostFreeCode': [null], // [Number] | 管理費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'serviceFeeFreeCode': [null], // [Number] | 共益費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'miscExpenseFreeCode': [null], // [Number] | 雑費なし区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'otherInitialCostFreeFlag': true, // Boolean | その他初期費用無しフラグ
  'petRestrictionCode': [null], // [Number] | ペット可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'officeUsageRestrictionCode': [null], // [Number] | 事務所利用条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'corporateContractRestrictionCode': [null], // [Number] | 法人可条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'musicalInstrumentRestrictionCode': [null], // [Number] | 楽器等の使用区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'restaurantUsageRestrictionCode': [null], // [Number] | 飲食店可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'roomSharingRestrictionCode': [null], // [Number] | ルームシェア区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignerRestrictionCode': [null], // [Number] | 外国人入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'friendsRestrictionCode': [null], // [Number] | 友人同士入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignStudentRestrictionCode': [null], // [Number] | 留学生入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'parkingAvailabilityCode': [null], // [Number] | 駐車場の状況区分<br/>1: 無<br/>2: 有(敷地内)<br/>3: 付<br/>4: 近隣駐車場<br/>5: 空無<br/>6: 要問合せ
  'gasCode': [null], // [Number] | ガス区分<br/>1: 都市ガス<br/>2: プロパン<br/>3: 共同<br/>4: その他
  'initialCostCode': [null], // [Number] | 初期費用区分<br/>1: 五万円以下<br/>2: 十万円以下<br/>3: 十五万円以下<br/>4: 二十万円以下<br/>5: 三十万円以下<br/>99: その他
  'guarantorRequirementsCode': [null], // [Number] | 保証人要否区分<br/>1: 要<br/>2: 不要<br/>3: 未入力
  'hasInsurance': true, // Boolean | 損保 有無フラグ
  'depositForStudentCode': [null], // [Number] | 学生敷金区分<br/>1: 不要<br/>2: 一ヶ月<br/>3: 二ヶ月
  'itJusetsuFlag': true, // Boolean | IT重説可フラグ
  'noGuarantorFlag': true, // Boolean | 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。
  'isTokuyuchin': true, // Boolean | 特優賃フラグ
  'freeRentFlag': true, // Boolean | フリーレントフラグ
  'managerFlag': true, // Boolean | 管理人有り
  'hasMotorbikeParking': true, // Boolean | バイク置場有フラグ
  'hasBikeParking': true, // Boolean | 駐輪場有フラグ
  'panoramaFlag': true, // Boolean | パノラマ画像付きフラグ
  'floorPlanFlag': true, // Boolean | 間取り図付きフラグ
  'hasExteriorImage': true, // Boolean | 外観画像付きフラグ
  'b2bCustomFlag': true, // Boolean | 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ）
  'isFurnished': true, // Boolean | 家具付きフラグ
  'hasAppliances': true, // Boolean | 家電付きフラグ
  'isNetFree': true, // Boolean | インターネット無料フラグ
  'isOver2f': true, // Boolean | 2階以上フラグ
  'isBathToiletSeparate': true, // Boolean | 風呂トイレ別フラグ
  'hasAircon': true, // Boolean | エアコン付きフラグ
  'hasAutoLock': true, // Boolean | オートロック付きフラグ
  'hasDeliveryBox': true, // Boolean | 宅配ボックス付きフラグ
  'hasElevator': true, // Boolean | エレベーター付きフラグ
  'hasLandryRoom': true, // Boolean | 室内洗濯機置き場フラグ
  'isFlooring': true, // Boolean | フローリングフラグ
  'isDesignersApartment': true, // Boolean | デザイナーズマンションフラグ
  'isBarrierFree': true, // Boolean | バリアフリーフラグ
  'isSouthFacing': true, // Boolean | 南向きフラグ
  'isHighestFloor': true, // Boolean | 最上階フラグ
  'isCornerRoom': true, // Boolean | 角部屋フラグ
  'hasSystemKitchen': true, // Boolean | システムキッチンフラグ
  'hasIhStove': true, // Boolean | IHコンロフラグ
  'hasGasStove': true, // Boolean | ガスコンロフラグ
  'hasMultipleGasStove': true, // Boolean | ガスコンロ２口以上フラグ
  'hasReboilBath': true, // Boolean | 追い焚き機能付きフラグ
  'hasWashlet': true, // Boolean | 温水洗浄便座フラグ
  'hasBathDryer': true, // Boolean | 浴室乾燥機付きフラグ
  'hasFloorHeating': true, // Boolean | 床暖房フラグ
  'hasCloset': true, // Boolean | クローゼットフラグ
  'hasWalkInCloset': true, // Boolean | ウォークインクローゼットフラグ
  'hasCatv': true, // Boolean | CATVフラグ
  'hasCs': true, // Boolean | CSアンテナフラグ
  'hasBs': true, // Boolean | BSアンテナフラグ
  'hasOpticalFiber': true, // Boolean | 光ファイバーフラグ
  'isAllElectric': true, // Boolean | オール電化フラグ
  'hasVerandaBalcony': true, // Boolean | ベランダ・バルコニー付きフラグ
  'isMaisonette': true, // Boolean | メゾネット
  'hasLoft': true, // Boolean | ロフト付き
  'hasSoundproof': true, // Boolean | 防音設備付き
  'hasCounterKitchen': true, // Boolean | カウンターキッチン付き
  'hasGarbageCollectionSite': true, // Boolean | 敷地内ゴミ置場有り
  'hasOwnYard': true, // Boolean | 専用庭付き
  'isQuakeResistantStructure': true, // Boolean | 耐震構造
  'isQuakeAbsorbingStructure': true, // Boolean | 免震構造
  'isDampingStructure': true, // Boolean | 制震構造
  'hasTvIntercom': true, // Boolean | TVインターホン付き
  'hasSecurityCamera': true, // Boolean | 防犯カメラ付き
  'isInternetAvailable': true, // Boolean | インターネット使用可
  'hasTrunkRoom': true, // Boolean | トランクルーム付き
  'isCondominium': true, // Boolean | 分譲賃貸
  'isTowerApartment': true, // Boolean | タワーマンション
  'isRenovated': true, // Boolean | リノベーション
  'hasWashroom': true, // Boolean | 洗面所独立
  'buildingAgeFrom': 56, // Number | 建築年数検索区間
  'buildingAgeTo': 56, // Number | 建築年数検索区間
  'priceFrom': 56, // Number | 現賃貸料検索区間
  'priceTo': 56, // Number | 現賃貸料検索区間
  'manageCostYenFrom': 56, // Number | 管理費（円）検索区間
  'manageCostYenTo': 56, // Number | 管理費（円）検索区間
  'depositYenFrom': 56, // Number | 敷金/保証金（円）検索区間
  'depositYenTo': 56, // Number | 敷金/保証金（円）検索区間
  'depositMonthFrom': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'depositMonthTo': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'keyMoneyYenFrom': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyYenTo': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyMonthFrom': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'keyMoneyMonthTo': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'repairCostYenFrom': 56, // Number | 敷引/償却（円）検索区間
  'repairCostYenTo': 56, // Number | 敷引/償却（円）検索区間
  'repairCostMonthFrom': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'repairCostMonthTo': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'initialCostFrom': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'initialCostTo': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'monthlyCostSummaryFrom': 56, // Number | 管理費など込み賃料検索区間
  'monthlyCostSummaryTo': 56, // Number | 管理費など込み賃料検索区間
  'advertisingFeePercentTo': 3.4, // Number | 広告料（パーセント）検索区間
  'advertisingFeePercentFrom': 3.4, // Number | 広告料（パーセント）検索区間
  'areaFrom': 3.4, // Number | 専有面積検索区間
  'areaTo': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaFrom': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaTo': 3.4, // Number | 専有面積検索区間
  'walkFromStationMinutesFrom': 56, // Number | 駅からの徒歩時間
  'walkFromStationMinutesTo': 56, // Number | 駅からの徒歩時間
  'lastUpdateDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'lastUpdateDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'originalPropertyCodeText': "originalPropertyCodeText_example", // String | 自社管理番号
  'buildingGuid': ["null"], // [String] | 建物スペックGUID
  'buildingTypeCode': [null], // [Number] | 建物形式区分<br/>1: マンション<br/>2: リゾートマンション<br/>3: アパート<br/>4: テラスハウス<br/>5: タウンハウス<br/>6: 戸建<br/>7: 土地<br/>8: 店舗<br/>9: 事務所<br/>10: ビル<br/>11: 倉庫<br/>12: 工場<br/>13: トランクルーム<br/>14: 駐車場<br/>15: バイク置き場<br/>16: その他
  'structureCode': [null], // [Number] | 構造区分<br/>1: 木造<br/>2: 軽量鉄骨<br/>3: 鉄筋コンクリート<br/>4: 鉄骨鉄筋コンクリート<br/>5: ALC<br/>6: プレキャストコンクリート<br/>7: 鉄筋ブロック<br/>8: 鉄骨プレ<br/>9: 鉄骨<br/>10: その他
  'siteAreaFrom': 3.4, // Number | 土地面積検索区間
  'siteAreaTo': 3.4, // Number | 土地面積検索区間
  'buildingName': "buildingName_example", // String | 建物名
  'buildingFurigana': "buildingFurigana_example", // String | 建物名フリガナ
  'tagGuid': ["null"], // [String] | タグGUID
  'prefecture': "prefecture_example", // String | 都道府県
  'prefectureCode': [null], // [Number] | 都道府県コード
  'city': ["null"], // [String] | 市区郡
  'cityCode': [null], // [Number] | 市区郡コード
  'town': ["null"], // [String] | 町村
  'jisCode': [null], // [Number] | JISコード
  'address': ["null"], // [String] | 住所
  'lineCode': [null], // [Number] | 沿線コード
  'stationCode': [null], // [Number] | 駅コード
  'customerKey': [null], // [Number] | カスタマーキー
  'ignorePublishStatus': false, // Boolean | 掲載状態を無視するフラグ
  'nameOrCodeText': "nameOrCodeText_example", // String | 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる
  'ignoreNameDisplay': true, // Boolean | 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる
  'query': "query_example" // String | 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) '[{\"building_name\": \"いい生活アパート\", \"price.to\": 700000}, {\"buildinig_name\": \"いい生活ハイツ\", \"walk_from_station_minutes.to\": 10}]'     -> ?query=%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \"%いい生活アパート%\" AND price <= 700000) OR (building_name like \"%いい生活ハイツ%\" AND walk_from_station_minutes <= 10)     
};
apiInstance.aggregateRentPropertyByLine(level, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **level** | [**LineLevel**](.md)| 集計のレベル | 
 **companyCode** | [**[Number]**](Number.md)| 会社コード | [optional] 
 **baitaiCode** | [**RentBaitaiCode**](.md)| 掲載先&lt;br/&gt;103: EsB2B&lt;br/&gt;105: ウェブサイト | [optional] 
 **propertyFullKey** | [**[String]**](String.md)| 物件完全ID | [optional] 
 **propertyUseCode** | [**[Number]**](Number.md)| 募集用途区分&lt;br/&gt;1: 居住用&lt;br/&gt;2: 事業用&lt;br/&gt;3: 投資用 | [optional] 
 **propertyTypeCode** | [**[Number]**](Number.md)| 募集種別区分&lt;br/&gt;101: マンション&lt;br/&gt;102: リゾートマンション&lt;br/&gt;103: アパート&lt;br/&gt;104: コーポ&lt;br/&gt;105: テラスハウス&lt;br/&gt;106: タウンハウス&lt;br/&gt;107: 戸建&lt;br/&gt;108: 土地&lt;br/&gt;109: 借地権譲渡&lt;br/&gt;110: 底地権譲渡&lt;br/&gt;111: 店舗&lt;br/&gt;112: 店舗事務所&lt;br/&gt;113: 住宅付店舗&lt;br/&gt;114: 事務所&lt;br/&gt;115: ビル&lt;br/&gt;116: 倉庫&lt;br/&gt;117: 工場&lt;br/&gt;118: トランクルーム&lt;br/&gt;119: 駐車場&lt;br/&gt;120: バイク置き場&lt;br/&gt;121: その他&lt;br/&gt;122: 間借り | [optional] 
 **newUsedCode** | **Number**| 新築・中古区分&lt;br/&gt;1: 新築&lt;br/&gt;2: 中古 | [optional] 
 **residenceRentPeriodCode** | **Number**| 居住用契約区分&lt;br/&gt;1: 普通借家契約&lt;br/&gt;2: 定期借家契約 | [optional] 
 **layoutText** | [**[String]**](String.md)| 間取りテキスト | [optional] 
 **layoutTypeCode** | [**[Number]**](Number.md)| 間取りタイプ&lt;br/&gt;1: R&lt;br/&gt;2: K&lt;br/&gt;3: DK&lt;br/&gt;4: SDK&lt;br/&gt;5: LDK&lt;br/&gt;6: SLDK&lt;br/&gt;7: LK&lt;br/&gt;8: SK&lt;br/&gt;9: SLK | [optional] 
 **isLargerThan5k** | **Boolean**| 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。 | [optional] 
 **layoutCode** | [**[Number]**](Number.md)| 間取り区分&lt;br/&gt;1: 1R&lt;br/&gt;2: 1K&lt;br/&gt;3: 1DK&lt;br/&gt;4: 1LDK&lt;br/&gt;5: 2K&lt;br/&gt;6: 2DK&lt;br/&gt;7: 2LDK&lt;br/&gt;8: 3K&lt;br/&gt;9: 3DK&lt;br/&gt;10: 3LDK&lt;br/&gt;11: 4K&lt;br/&gt;12: 4DK&lt;br/&gt;13: 4LDK&lt;br/&gt;14: 5K以上 | [optional] 
 **isNowAvailable** | **Boolean**| 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日) | [optional] 
 **availableCode** | [**[Number]**](Number.md)| 入居可能区分&lt;br/&gt;1: 即時&lt;br/&gt;2: 相談&lt;br/&gt;3: 期日指定&lt;br/&gt;4: 予定 | [optional] 
 **rentTransactionFormCode** | [**[Number]**](Number.md)| 賃貸取引態様区分&lt;br/&gt;1: 貸主&lt;br/&gt;2: 代理&lt;br/&gt;3: 仲介元付(専任)&lt;br/&gt;4: 仲介元付(一般)&lt;br/&gt;5: 仲介先物&lt;br/&gt;6: 仲介元付&lt;br/&gt;7: 仲介 | [optional] 
 **studentRestrictionCode** | [**[Number]**](Number.md)| 学生専用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **genderRestrictionCode** | [**[Number]**](Number.md)| 性別入居条件区分&lt;br/&gt;1: 不問&lt;br/&gt;2: 女性限定&lt;br/&gt;3: 男性限定&lt;br/&gt;4: 女性希望&lt;br/&gt;5: 男性希望 | [optional] 
 **kidsRestrictionCode** | [**[Number]**](Number.md)| 子供可入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **onePersonRestrictionCode** | [**[Number]**](Number.md)| 単身可入居条件&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **twoPersonsRestrictionCode** | [**[Number]**](Number.md)| 二人入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **elderRestrictionCode** | [**[Number]**](Number.md)| 高齢者入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **manageCostFreeCode** | [**[Number]**](Number.md)| 管理費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **serviceFeeFreeCode** | [**[Number]**](Number.md)| 共益費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **miscExpenseFreeCode** | [**[Number]**](Number.md)| 雑費なし区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **otherInitialCostFreeFlag** | **Boolean**| その他初期費用無しフラグ | [optional] 
 **petRestrictionCode** | [**[Number]**](Number.md)| ペット可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **officeUsageRestrictionCode** | [**[Number]**](Number.md)| 事務所利用条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **corporateContractRestrictionCode** | [**[Number]**](Number.md)| 法人可条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **musicalInstrumentRestrictionCode** | [**[Number]**](Number.md)| 楽器等の使用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **restaurantUsageRestrictionCode** | [**[Number]**](Number.md)| 飲食店可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **roomSharingRestrictionCode** | [**[Number]**](Number.md)| ルームシェア区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignerRestrictionCode** | [**[Number]**](Number.md)| 外国人入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **friendsRestrictionCode** | [**[Number]**](Number.md)| 友人同士入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignStudentRestrictionCode** | [**[Number]**](Number.md)| 留学生入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **parkingAvailabilityCode** | [**[Number]**](Number.md)| 駐車場の状況区分&lt;br/&gt;1: 無&lt;br/&gt;2: 有(敷地内)&lt;br/&gt;3: 付&lt;br/&gt;4: 近隣駐車場&lt;br/&gt;5: 空無&lt;br/&gt;6: 要問合せ | [optional] 
 **gasCode** | [**[Number]**](Number.md)| ガス区分&lt;br/&gt;1: 都市ガス&lt;br/&gt;2: プロパン&lt;br/&gt;3: 共同&lt;br/&gt;4: その他 | [optional] 
 **initialCostCode** | [**[Number]**](Number.md)| 初期費用区分&lt;br/&gt;1: 五万円以下&lt;br/&gt;2: 十万円以下&lt;br/&gt;3: 十五万円以下&lt;br/&gt;4: 二十万円以下&lt;br/&gt;5: 三十万円以下&lt;br/&gt;99: その他 | [optional] 
 **guarantorRequirementsCode** | [**[Number]**](Number.md)| 保証人要否区分&lt;br/&gt;1: 要&lt;br/&gt;2: 不要&lt;br/&gt;3: 未入力 | [optional] 
 **hasInsurance** | **Boolean**| 損保 有無フラグ | [optional] 
 **depositForStudentCode** | [**[Number]**](Number.md)| 学生敷金区分&lt;br/&gt;1: 不要&lt;br/&gt;2: 一ヶ月&lt;br/&gt;3: 二ヶ月 | [optional] 
 **itJusetsuFlag** | **Boolean**| IT重説可フラグ | [optional] 
 **noGuarantorFlag** | **Boolean**| 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。 | [optional] 
 **isTokuyuchin** | **Boolean**| 特優賃フラグ | [optional] 
 **freeRentFlag** | **Boolean**| フリーレントフラグ | [optional] 
 **managerFlag** | **Boolean**| 管理人有り | [optional] 
 **hasMotorbikeParking** | **Boolean**| バイク置場有フラグ | [optional] 
 **hasBikeParking** | **Boolean**| 駐輪場有フラグ | [optional] 
 **panoramaFlag** | **Boolean**| パノラマ画像付きフラグ | [optional] 
 **floorPlanFlag** | **Boolean**| 間取り図付きフラグ | [optional] 
 **hasExteriorImage** | **Boolean**| 外観画像付きフラグ | [optional] 
 **b2bCustomFlag** | **Boolean**| 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ） | [optional] 
 **isFurnished** | **Boolean**| 家具付きフラグ | [optional] 
 **hasAppliances** | **Boolean**| 家電付きフラグ | [optional] 
 **isNetFree** | **Boolean**| インターネット無料フラグ | [optional] 
 **isOver2f** | **Boolean**| 2階以上フラグ | [optional] 
 **isBathToiletSeparate** | **Boolean**| 風呂トイレ別フラグ | [optional] 
 **hasAircon** | **Boolean**| エアコン付きフラグ | [optional] 
 **hasAutoLock** | **Boolean**| オートロック付きフラグ | [optional] 
 **hasDeliveryBox** | **Boolean**| 宅配ボックス付きフラグ | [optional] 
 **hasElevator** | **Boolean**| エレベーター付きフラグ | [optional] 
 **hasLandryRoom** | **Boolean**| 室内洗濯機置き場フラグ | [optional] 
 **isFlooring** | **Boolean**| フローリングフラグ | [optional] 
 **isDesignersApartment** | **Boolean**| デザイナーズマンションフラグ | [optional] 
 **isBarrierFree** | **Boolean**| バリアフリーフラグ | [optional] 
 **isSouthFacing** | **Boolean**| 南向きフラグ | [optional] 
 **isHighestFloor** | **Boolean**| 最上階フラグ | [optional] 
 **isCornerRoom** | **Boolean**| 角部屋フラグ | [optional] 
 **hasSystemKitchen** | **Boolean**| システムキッチンフラグ | [optional] 
 **hasIhStove** | **Boolean**| IHコンロフラグ | [optional] 
 **hasGasStove** | **Boolean**| ガスコンロフラグ | [optional] 
 **hasMultipleGasStove** | **Boolean**| ガスコンロ２口以上フラグ | [optional] 
 **hasReboilBath** | **Boolean**| 追い焚き機能付きフラグ | [optional] 
 **hasWashlet** | **Boolean**| 温水洗浄便座フラグ | [optional] 
 **hasBathDryer** | **Boolean**| 浴室乾燥機付きフラグ | [optional] 
 **hasFloorHeating** | **Boolean**| 床暖房フラグ | [optional] 
 **hasCloset** | **Boolean**| クローゼットフラグ | [optional] 
 **hasWalkInCloset** | **Boolean**| ウォークインクローゼットフラグ | [optional] 
 **hasCatv** | **Boolean**| CATVフラグ | [optional] 
 **hasCs** | **Boolean**| CSアンテナフラグ | [optional] 
 **hasBs** | **Boolean**| BSアンテナフラグ | [optional] 
 **hasOpticalFiber** | **Boolean**| 光ファイバーフラグ | [optional] 
 **isAllElectric** | **Boolean**| オール電化フラグ | [optional] 
 **hasVerandaBalcony** | **Boolean**| ベランダ・バルコニー付きフラグ | [optional] 
 **isMaisonette** | **Boolean**| メゾネット | [optional] 
 **hasLoft** | **Boolean**| ロフト付き | [optional] 
 **hasSoundproof** | **Boolean**| 防音設備付き | [optional] 
 **hasCounterKitchen** | **Boolean**| カウンターキッチン付き | [optional] 
 **hasGarbageCollectionSite** | **Boolean**| 敷地内ゴミ置場有り | [optional] 
 **hasOwnYard** | **Boolean**| 専用庭付き | [optional] 
 **isQuakeResistantStructure** | **Boolean**| 耐震構造 | [optional] 
 **isQuakeAbsorbingStructure** | **Boolean**| 免震構造 | [optional] 
 **isDampingStructure** | **Boolean**| 制震構造 | [optional] 
 **hasTvIntercom** | **Boolean**| TVインターホン付き | [optional] 
 **hasSecurityCamera** | **Boolean**| 防犯カメラ付き | [optional] 
 **isInternetAvailable** | **Boolean**| インターネット使用可 | [optional] 
 **hasTrunkRoom** | **Boolean**| トランクルーム付き | [optional] 
 **isCondominium** | **Boolean**| 分譲賃貸 | [optional] 
 **isTowerApartment** | **Boolean**| タワーマンション | [optional] 
 **isRenovated** | **Boolean**| リノベーション | [optional] 
 **hasWashroom** | **Boolean**| 洗面所独立 | [optional] 
 **buildingAgeFrom** | **Number**| 建築年数検索区間 | [optional] 
 **buildingAgeTo** | **Number**| 建築年数検索区間 | [optional] 
 **priceFrom** | **Number**| 現賃貸料検索区間 | [optional] 
 **priceTo** | **Number**| 現賃貸料検索区間 | [optional] 
 **manageCostYenFrom** | **Number**| 管理費（円）検索区間 | [optional] 
 **manageCostYenTo** | **Number**| 管理費（円）検索区間 | [optional] 
 **depositYenFrom** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositYenTo** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositMonthFrom** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **depositMonthTo** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **keyMoneyYenFrom** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyYenTo** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyMonthFrom** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **keyMoneyMonthTo** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **repairCostYenFrom** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostYenTo** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostMonthFrom** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **repairCostMonthTo** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **initialCostFrom** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **initialCostTo** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **monthlyCostSummaryFrom** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **monthlyCostSummaryTo** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **advertisingFeePercentTo** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **advertisingFeePercentFrom** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **areaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **areaTo** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaTo** | **Number**| 専有面積検索区間 | [optional] 
 **walkFromStationMinutesFrom** | **Number**| 駅からの徒歩時間 | [optional] 
 **walkFromStationMinutesTo** | **Number**| 駅からの徒歩時間 | [optional] 
 **lastUpdateDatetimeFrom** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **lastUpdateDatetimeTo** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeFrom** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeTo** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateFrom** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateTo** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateFrom** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateTo** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **originalPropertyCodeText** | **String**| 自社管理番号 | [optional] 
 **buildingGuid** | [**[String]**](String.md)| 建物スペックGUID | [optional] 
 **buildingTypeCode** | [**[Number]**](Number.md)| 建物形式区分&lt;br/&gt;1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | [optional] 
 **structureCode** | [**[Number]**](Number.md)| 構造区分&lt;br/&gt;1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
 **siteAreaFrom** | **Number**| 土地面積検索区間 | [optional] 
 **siteAreaTo** | **Number**| 土地面積検索区間 | [optional] 
 **buildingName** | **String**| 建物名 | [optional] 
 **buildingFurigana** | **String**| 建物名フリガナ | [optional] 
 **tagGuid** | [**[String]**](String.md)| タグGUID | [optional] 
 **prefecture** | **String**| 都道府県 | [optional] 
 **prefectureCode** | [**[Number]**](Number.md)| 都道府県コード | [optional] 
 **city** | [**[String]**](String.md)| 市区郡 | [optional] 
 **cityCode** | [**[Number]**](Number.md)| 市区郡コード | [optional] 
 **town** | [**[String]**](String.md)| 町村 | [optional] 
 **jisCode** | [**[Number]**](Number.md)| JISコード | [optional] 
 **address** | [**[String]**](String.md)| 住所 | [optional] 
 **lineCode** | [**[Number]**](Number.md)| 沿線コード | [optional] 
 **stationCode** | [**[Number]**](Number.md)| 駅コード | [optional] 
 **customerKey** | [**[Number]**](Number.md)| カスタマーキー | [optional] 
 **ignorePublishStatus** | **Boolean**| 掲載状態を無視するフラグ | [optional] [default to false]
 **nameOrCodeText** | **String**| 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる | [optional] 
 **ignoreNameDisplay** | **Boolean**| 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる | [optional] 
 **query** | **String**| 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) &#39;[{\&quot;building_name\&quot;: \&quot;いい生活アパート\&quot;, \&quot;price.to\&quot;: 700000}, {\&quot;buildinig_name\&quot;: \&quot;いい生活ハイツ\&quot;, \&quot;walk_from_station_minutes.to\&quot;: 10}]&#39;     -&gt; ?query&#x3D;%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \&quot;%いい生活アパート%\&quot; AND price &lt;&#x3D; 700000) OR (building_name like \&quot;%いい生活ハイツ%\&quot; AND walk_from_station_minutes &lt;&#x3D; 10)      | [optional] 

### Return type

[**LineAggregateResult**](LineAggregateResult.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## choiceRentProperty

> PropertyList choiceRentProperty(opts)

Choice Rent Property Dwelling Unit

区画単位での物件をランダムに返す(賃貸)  区画ごとに検索条件に合致する部屋区画から items_per_page 個だけランダムに 選んで一覧情報を返す。 レスポンス形式のイメージは以下のようになる。   &#x60;&#x60;&#x60; 区画a -- 建物A 区画b -- 建物A 区画c -- 建物A 区画d -- 建物B 区画e -- 建物B &#x60;&#x60;&#x60;

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.RentPropertyQueryAPIApi();
let opts = {
  'startIndex': 1, // Number | 検索の開始インデックス
  'itemsPerPage': 10, // Number | ページあたりの最大表示数
  'baitaiCode': new EsApi.RentBaitaiCode(), // RentBaitaiCode | 掲載先<br/>103: EsB2B<br/>105: ウェブサイト
  'propertyFullKey': ["null"], // [String] | 物件完全ID
  'propertyUseCode': [null], // [Number] | 募集用途区分<br/>1: 居住用<br/>2: 事業用<br/>3: 投資用
  'propertyTypeCode': [null], // [Number] | 募集種別区分<br/>101: マンション<br/>102: リゾートマンション<br/>103: アパート<br/>104: コーポ<br/>105: テラスハウス<br/>106: タウンハウス<br/>107: 戸建<br/>108: 土地<br/>109: 借地権譲渡<br/>110: 底地権譲渡<br/>111: 店舗<br/>112: 店舗事務所<br/>113: 住宅付店舗<br/>114: 事務所<br/>115: ビル<br/>116: 倉庫<br/>117: 工場<br/>118: トランクルーム<br/>119: 駐車場<br/>120: バイク置き場<br/>121: その他<br/>122: 間借り
  'newUsedCode': 56, // Number | 新築・中古区分<br/>1: 新築<br/>2: 中古
  'residenceRentPeriodCode': 56, // Number | 居住用契約区分<br/>1: 普通借家契約<br/>2: 定期借家契約
  'layoutText': ["null"], // [String] | 間取りテキスト
  'layoutTypeCode': [null], // [Number] | 間取りタイプ<br/>1: R<br/>2: K<br/>3: DK<br/>4: SDK<br/>5: LDK<br/>6: SLDK<br/>7: LK<br/>8: SK<br/>9: SLK
  'isLargerThan5k': true, // Boolean | 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。
  'layoutCode': [null], // [Number] | 間取り区分<br/>1: 1R<br/>2: 1K<br/>3: 1DK<br/>4: 1LDK<br/>5: 2K<br/>6: 2DK<br/>7: 2LDK<br/>8: 3K<br/>9: 3DK<br/>10: 3LDK<br/>11: 4K<br/>12: 4DK<br/>13: 4LDK<br/>14: 5K以上
  'isNowAvailable': true, // Boolean | 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日)
  'availableCode': [null], // [Number] | 入居可能区分<br/>1: 即時<br/>2: 相談<br/>3: 期日指定<br/>4: 予定
  'rentTransactionFormCode': [null], // [Number] | 賃貸取引態様区分<br/>1: 貸主<br/>2: 代理<br/>3: 仲介元付(専任)<br/>4: 仲介元付(一般)<br/>5: 仲介先物<br/>6: 仲介元付<br/>7: 仲介
  'studentRestrictionCode': [null], // [Number] | 学生専用区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'genderRestrictionCode': [null], // [Number] | 性別入居条件区分<br/>1: 不問<br/>2: 女性限定<br/>3: 男性限定<br/>4: 女性希望<br/>5: 男性希望
  'kidsRestrictionCode': [null], // [Number] | 子供可入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'onePersonRestrictionCode': [null], // [Number] | 単身可入居条件<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'twoPersonsRestrictionCode': [null], // [Number] | 二人入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'elderRestrictionCode': [null], // [Number] | 高齢者入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'manageCostFreeCode': [null], // [Number] | 管理費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'serviceFeeFreeCode': [null], // [Number] | 共益費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'miscExpenseFreeCode': [null], // [Number] | 雑費なし区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'otherInitialCostFreeFlag': true, // Boolean | その他初期費用無しフラグ
  'petRestrictionCode': [null], // [Number] | ペット可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'officeUsageRestrictionCode': [null], // [Number] | 事務所利用条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'corporateContractRestrictionCode': [null], // [Number] | 法人可条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'musicalInstrumentRestrictionCode': [null], // [Number] | 楽器等の使用区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'restaurantUsageRestrictionCode': [null], // [Number] | 飲食店可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'roomSharingRestrictionCode': [null], // [Number] | ルームシェア区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignerRestrictionCode': [null], // [Number] | 外国人入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'friendsRestrictionCode': [null], // [Number] | 友人同士入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignStudentRestrictionCode': [null], // [Number] | 留学生入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'parkingAvailabilityCode': [null], // [Number] | 駐車場の状況区分<br/>1: 無<br/>2: 有(敷地内)<br/>3: 付<br/>4: 近隣駐車場<br/>5: 空無<br/>6: 要問合せ
  'gasCode': [null], // [Number] | ガス区分<br/>1: 都市ガス<br/>2: プロパン<br/>3: 共同<br/>4: その他
  'initialCostCode': [null], // [Number] | 初期費用区分<br/>1: 五万円以下<br/>2: 十万円以下<br/>3: 十五万円以下<br/>4: 二十万円以下<br/>5: 三十万円以下<br/>99: その他
  'guarantorRequirementsCode': [null], // [Number] | 保証人要否区分<br/>1: 要<br/>2: 不要<br/>3: 未入力
  'hasInsurance': true, // Boolean | 損保 有無フラグ
  'depositForStudentCode': [null], // [Number] | 学生敷金区分<br/>1: 不要<br/>2: 一ヶ月<br/>3: 二ヶ月
  'itJusetsuFlag': true, // Boolean | IT重説可フラグ
  'noGuarantorFlag': true, // Boolean | 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。
  'isTokuyuchin': true, // Boolean | 特優賃フラグ
  'freeRentFlag': true, // Boolean | フリーレントフラグ
  'managerFlag': true, // Boolean | 管理人有り
  'hasMotorbikeParking': true, // Boolean | バイク置場有フラグ
  'hasBikeParking': true, // Boolean | 駐輪場有フラグ
  'panoramaFlag': true, // Boolean | パノラマ画像付きフラグ
  'floorPlanFlag': true, // Boolean | 間取り図付きフラグ
  'hasExteriorImage': true, // Boolean | 外観画像付きフラグ
  'b2bCustomFlag': true, // Boolean | 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ）
  'isFurnished': true, // Boolean | 家具付きフラグ
  'hasAppliances': true, // Boolean | 家電付きフラグ
  'isNetFree': true, // Boolean | インターネット無料フラグ
  'isOver2f': true, // Boolean | 2階以上フラグ
  'isBathToiletSeparate': true, // Boolean | 風呂トイレ別フラグ
  'hasAircon': true, // Boolean | エアコン付きフラグ
  'hasAutoLock': true, // Boolean | オートロック付きフラグ
  'hasDeliveryBox': true, // Boolean | 宅配ボックス付きフラグ
  'hasElevator': true, // Boolean | エレベーター付きフラグ
  'hasLandryRoom': true, // Boolean | 室内洗濯機置き場フラグ
  'isFlooring': true, // Boolean | フローリングフラグ
  'isDesignersApartment': true, // Boolean | デザイナーズマンションフラグ
  'isBarrierFree': true, // Boolean | バリアフリーフラグ
  'isSouthFacing': true, // Boolean | 南向きフラグ
  'isHighestFloor': true, // Boolean | 最上階フラグ
  'isCornerRoom': true, // Boolean | 角部屋フラグ
  'hasSystemKitchen': true, // Boolean | システムキッチンフラグ
  'hasIhStove': true, // Boolean | IHコンロフラグ
  'hasGasStove': true, // Boolean | ガスコンロフラグ
  'hasMultipleGasStove': true, // Boolean | ガスコンロ２口以上フラグ
  'hasReboilBath': true, // Boolean | 追い焚き機能付きフラグ
  'hasWashlet': true, // Boolean | 温水洗浄便座フラグ
  'hasBathDryer': true, // Boolean | 浴室乾燥機付きフラグ
  'hasFloorHeating': true, // Boolean | 床暖房フラグ
  'hasCloset': true, // Boolean | クローゼットフラグ
  'hasWalkInCloset': true, // Boolean | ウォークインクローゼットフラグ
  'hasCatv': true, // Boolean | CATVフラグ
  'hasCs': true, // Boolean | CSアンテナフラグ
  'hasBs': true, // Boolean | BSアンテナフラグ
  'hasOpticalFiber': true, // Boolean | 光ファイバーフラグ
  'isAllElectric': true, // Boolean | オール電化フラグ
  'hasVerandaBalcony': true, // Boolean | ベランダ・バルコニー付きフラグ
  'isMaisonette': true, // Boolean | メゾネット
  'hasLoft': true, // Boolean | ロフト付き
  'hasSoundproof': true, // Boolean | 防音設備付き
  'hasCounterKitchen': true, // Boolean | カウンターキッチン付き
  'hasGarbageCollectionSite': true, // Boolean | 敷地内ゴミ置場有り
  'hasOwnYard': true, // Boolean | 専用庭付き
  'isQuakeResistantStructure': true, // Boolean | 耐震構造
  'isQuakeAbsorbingStructure': true, // Boolean | 免震構造
  'isDampingStructure': true, // Boolean | 制震構造
  'hasTvIntercom': true, // Boolean | TVインターホン付き
  'hasSecurityCamera': true, // Boolean | 防犯カメラ付き
  'isInternetAvailable': true, // Boolean | インターネット使用可
  'hasTrunkRoom': true, // Boolean | トランクルーム付き
  'isCondominium': true, // Boolean | 分譲賃貸
  'isTowerApartment': true, // Boolean | タワーマンション
  'isRenovated': true, // Boolean | リノベーション
  'hasWashroom': true, // Boolean | 洗面所独立
  'buildingAgeFrom': 56, // Number | 建築年数検索区間
  'buildingAgeTo': 56, // Number | 建築年数検索区間
  'priceFrom': 56, // Number | 現賃貸料検索区間
  'priceTo': 56, // Number | 現賃貸料検索区間
  'manageCostYenFrom': 56, // Number | 管理費（円）検索区間
  'manageCostYenTo': 56, // Number | 管理費（円）検索区間
  'depositYenFrom': 56, // Number | 敷金/保証金（円）検索区間
  'depositYenTo': 56, // Number | 敷金/保証金（円）検索区間
  'depositMonthFrom': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'depositMonthTo': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'keyMoneyYenFrom': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyYenTo': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyMonthFrom': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'keyMoneyMonthTo': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'repairCostYenFrom': 56, // Number | 敷引/償却（円）検索区間
  'repairCostYenTo': 56, // Number | 敷引/償却（円）検索区間
  'repairCostMonthFrom': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'repairCostMonthTo': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'initialCostFrom': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'initialCostTo': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'monthlyCostSummaryFrom': 56, // Number | 管理費など込み賃料検索区間
  'monthlyCostSummaryTo': 56, // Number | 管理費など込み賃料検索区間
  'advertisingFeePercentTo': 3.4, // Number | 広告料（パーセント）検索区間
  'advertisingFeePercentFrom': 3.4, // Number | 広告料（パーセント）検索区間
  'areaFrom': 3.4, // Number | 専有面積検索区間
  'areaTo': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaFrom': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaTo': 3.4, // Number | 専有面積検索区間
  'walkFromStationMinutesFrom': 56, // Number | 駅からの徒歩時間
  'walkFromStationMinutesTo': 56, // Number | 駅からの徒歩時間
  'lastUpdateDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'lastUpdateDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'originalPropertyCodeText': "originalPropertyCodeText_example", // String | 自社管理番号
  'buildingGuid': ["null"], // [String] | 建物スペックGUID
  'buildingTypeCode': [null], // [Number] | 建物形式区分<br/>1: マンション<br/>2: リゾートマンション<br/>3: アパート<br/>4: テラスハウス<br/>5: タウンハウス<br/>6: 戸建<br/>7: 土地<br/>8: 店舗<br/>9: 事務所<br/>10: ビル<br/>11: 倉庫<br/>12: 工場<br/>13: トランクルーム<br/>14: 駐車場<br/>15: バイク置き場<br/>16: その他
  'structureCode': [null], // [Number] | 構造区分<br/>1: 木造<br/>2: 軽量鉄骨<br/>3: 鉄筋コンクリート<br/>4: 鉄骨鉄筋コンクリート<br/>5: ALC<br/>6: プレキャストコンクリート<br/>7: 鉄筋ブロック<br/>8: 鉄骨プレ<br/>9: 鉄骨<br/>10: その他
  'siteAreaFrom': 3.4, // Number | 土地面積検索区間
  'siteAreaTo': 3.4, // Number | 土地面積検索区間
  'buildingName': "buildingName_example", // String | 建物名
  'buildingFurigana': "buildingFurigana_example", // String | 建物名フリガナ
  'tagGuid': ["null"], // [String] | タグGUID
  'prefecture': "prefecture_example", // String | 都道府県
  'prefectureCode': [null], // [Number] | 都道府県コード
  'city': ["null"], // [String] | 市区郡
  'cityCode': [null], // [Number] | 市区郡コード
  'town': ["null"], // [String] | 町村
  'jisCode': [null], // [Number] | JISコード
  'address': ["null"], // [String] | 住所
  'lineCode': [null], // [Number] | 沿線コード
  'stationCode': [null], // [Number] | 駅コード
  'customerKey': [null], // [Number] | カスタマーキー
  'ignorePublishStatus': false, // Boolean | 掲載状態を無視するフラグ
  'nameOrCodeText': "nameOrCodeText_example", // String | 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる
  'ignoreNameDisplay': true, // Boolean | 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる
  'query': "query_example", // String | 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) '[{\"building_name\": \"いい生活アパート\", \"price.to\": 700000}, {\"buildinig_name\": \"いい生活ハイツ\", \"walk_from_station_minutes.to\": 10}]'     -> ?query=%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \"%いい生活アパート%\" AND price <= 700000) OR (building_name like \"%いい生活ハイツ%\" AND walk_from_station_minutes <= 10)     
  'order': "order_example", // String | 複数のソート条件を指定したい場合の特殊パラメータ。{.orderを除いたソートパラメータ名}.{asc か desc}を , 区切りで並べて指定すると、その先頭から順にソートが適用される。例: order=property_full_key.desc,layout.asc は、property_full_keyの降順、layoutの昇順でソートされる。このパラメータを個別のソート条件と同時に指定した場合、このパラメータのソート順が先に適用され、その後に個別のソート条件が適用される。
  'propertyFullKeyOrder': new EsApi.Order(), // Order | 物件完全IDソート順
  'propertyClassCodeOrder': new EsApi.Order(), // Order | 募集種別区分コードソート順
  'propertyUseCodeOrder': new EsApi.Order(), // Order | 募集用途区分ソート順
  'propertyTypeCodeOrder': new EsApi.Order(), // Order | 募集種別区分ソート順
  'modifiedOrder': new EsApi.Order(), // Order | 新着ソート順。非推奨のため代わりにlast_update_datetime.orderを使うこと。
  'lastUpdateDatetimeOrder': new EsApi.Order(), // Order | 新着ソート順
  'layoutOrder': new EsApi.Order(), // Order | 間取りソート順
  'buildingAgeOrder': new EsApi.Order(), // Order | 築年月ソート順
  'stationOrder': new EsApi.Order(), // Order | 駅ソート順
  'stationNameOrder': new EsApi.Order(), // Order | 駅名ソート順
  'lineOrder': new EsApi.Order(), // Order | 沿線ソート順
  'lineNameOrder': new EsApi.Order(), // Order | 沿線名ソート順
  'walkFromStationMinutesOrder': new EsApi.Order(), // Order | 駅徒歩時間ソート順
  'addressOrder': new EsApi.Order(), // Order | 住所コードソート順
  'searchAreaOrder': new EsApi.Order(), // Order | 面積ソート順
  'exclusiveAreaOrder': new EsApi.Order(), // Order | 専有面積ソート順
  'buildingNameOrder': new EsApi.Order(), // Order | 建物名ソート順
  'buildingFuriganaOrder': new EsApi.Order(), // Order | 建物名フリガナソート順
  'depositPriceOrder': new EsApi.Order(), // Order | 敷金/保証金（円）ソート順
  'keyMoneyPriceOrder': new EsApi.Order(), // Order | 礼金/権利金（円）ソート順
  'manageCostPriceOrder': new EsApi.Order(), // Order | 管理費/共益費/雑費（円）ソート順
  'advertisingFeePercentOrder': new EsApi.Order(), // Order | 広告料（パーセント）ソート順
  'advertiseFlagOrder': new EsApi.Order(), // Order | 広告可フラグソート順
  'floorNumberOrder': new EsApi.Order(), // Order | 所在階ソート順
  'availableDateOrder': new EsApi.Order(), // Order | 入居可能日ソート順
  'priceOrder': new EsApi.Order(), // Order | 賃料ソート順
  'initialCostOrder': new EsApi.Order(), // Order | 初期費用ソート順
  'monthlyCostSummaryOrder': new EsApi.Order() // Order | 管理費など込み賃料
};
apiInstance.choiceRentProperty(opts).then((data) => {
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
 **baitaiCode** | [**RentBaitaiCode**](.md)| 掲載先&lt;br/&gt;103: EsB2B&lt;br/&gt;105: ウェブサイト | [optional] 
 **propertyFullKey** | [**[String]**](String.md)| 物件完全ID | [optional] 
 **propertyUseCode** | [**[Number]**](Number.md)| 募集用途区分&lt;br/&gt;1: 居住用&lt;br/&gt;2: 事業用&lt;br/&gt;3: 投資用 | [optional] 
 **propertyTypeCode** | [**[Number]**](Number.md)| 募集種別区分&lt;br/&gt;101: マンション&lt;br/&gt;102: リゾートマンション&lt;br/&gt;103: アパート&lt;br/&gt;104: コーポ&lt;br/&gt;105: テラスハウス&lt;br/&gt;106: タウンハウス&lt;br/&gt;107: 戸建&lt;br/&gt;108: 土地&lt;br/&gt;109: 借地権譲渡&lt;br/&gt;110: 底地権譲渡&lt;br/&gt;111: 店舗&lt;br/&gt;112: 店舗事務所&lt;br/&gt;113: 住宅付店舗&lt;br/&gt;114: 事務所&lt;br/&gt;115: ビル&lt;br/&gt;116: 倉庫&lt;br/&gt;117: 工場&lt;br/&gt;118: トランクルーム&lt;br/&gt;119: 駐車場&lt;br/&gt;120: バイク置き場&lt;br/&gt;121: その他&lt;br/&gt;122: 間借り | [optional] 
 **newUsedCode** | **Number**| 新築・中古区分&lt;br/&gt;1: 新築&lt;br/&gt;2: 中古 | [optional] 
 **residenceRentPeriodCode** | **Number**| 居住用契約区分&lt;br/&gt;1: 普通借家契約&lt;br/&gt;2: 定期借家契約 | [optional] 
 **layoutText** | [**[String]**](String.md)| 間取りテキスト | [optional] 
 **layoutTypeCode** | [**[Number]**](Number.md)| 間取りタイプ&lt;br/&gt;1: R&lt;br/&gt;2: K&lt;br/&gt;3: DK&lt;br/&gt;4: SDK&lt;br/&gt;5: LDK&lt;br/&gt;6: SLDK&lt;br/&gt;7: LK&lt;br/&gt;8: SK&lt;br/&gt;9: SLK | [optional] 
 **isLargerThan5k** | **Boolean**| 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。 | [optional] 
 **layoutCode** | [**[Number]**](Number.md)| 間取り区分&lt;br/&gt;1: 1R&lt;br/&gt;2: 1K&lt;br/&gt;3: 1DK&lt;br/&gt;4: 1LDK&lt;br/&gt;5: 2K&lt;br/&gt;6: 2DK&lt;br/&gt;7: 2LDK&lt;br/&gt;8: 3K&lt;br/&gt;9: 3DK&lt;br/&gt;10: 3LDK&lt;br/&gt;11: 4K&lt;br/&gt;12: 4DK&lt;br/&gt;13: 4LDK&lt;br/&gt;14: 5K以上 | [optional] 
 **isNowAvailable** | **Boolean**| 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日) | [optional] 
 **availableCode** | [**[Number]**](Number.md)| 入居可能区分&lt;br/&gt;1: 即時&lt;br/&gt;2: 相談&lt;br/&gt;3: 期日指定&lt;br/&gt;4: 予定 | [optional] 
 **rentTransactionFormCode** | [**[Number]**](Number.md)| 賃貸取引態様区分&lt;br/&gt;1: 貸主&lt;br/&gt;2: 代理&lt;br/&gt;3: 仲介元付(専任)&lt;br/&gt;4: 仲介元付(一般)&lt;br/&gt;5: 仲介先物&lt;br/&gt;6: 仲介元付&lt;br/&gt;7: 仲介 | [optional] 
 **studentRestrictionCode** | [**[Number]**](Number.md)| 学生専用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **genderRestrictionCode** | [**[Number]**](Number.md)| 性別入居条件区分&lt;br/&gt;1: 不問&lt;br/&gt;2: 女性限定&lt;br/&gt;3: 男性限定&lt;br/&gt;4: 女性希望&lt;br/&gt;5: 男性希望 | [optional] 
 **kidsRestrictionCode** | [**[Number]**](Number.md)| 子供可入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **onePersonRestrictionCode** | [**[Number]**](Number.md)| 単身可入居条件&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **twoPersonsRestrictionCode** | [**[Number]**](Number.md)| 二人入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **elderRestrictionCode** | [**[Number]**](Number.md)| 高齢者入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **manageCostFreeCode** | [**[Number]**](Number.md)| 管理費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **serviceFeeFreeCode** | [**[Number]**](Number.md)| 共益費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **miscExpenseFreeCode** | [**[Number]**](Number.md)| 雑費なし区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **otherInitialCostFreeFlag** | **Boolean**| その他初期費用無しフラグ | [optional] 
 **petRestrictionCode** | [**[Number]**](Number.md)| ペット可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **officeUsageRestrictionCode** | [**[Number]**](Number.md)| 事務所利用条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **corporateContractRestrictionCode** | [**[Number]**](Number.md)| 法人可条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **musicalInstrumentRestrictionCode** | [**[Number]**](Number.md)| 楽器等の使用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **restaurantUsageRestrictionCode** | [**[Number]**](Number.md)| 飲食店可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **roomSharingRestrictionCode** | [**[Number]**](Number.md)| ルームシェア区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignerRestrictionCode** | [**[Number]**](Number.md)| 外国人入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **friendsRestrictionCode** | [**[Number]**](Number.md)| 友人同士入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignStudentRestrictionCode** | [**[Number]**](Number.md)| 留学生入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **parkingAvailabilityCode** | [**[Number]**](Number.md)| 駐車場の状況区分&lt;br/&gt;1: 無&lt;br/&gt;2: 有(敷地内)&lt;br/&gt;3: 付&lt;br/&gt;4: 近隣駐車場&lt;br/&gt;5: 空無&lt;br/&gt;6: 要問合せ | [optional] 
 **gasCode** | [**[Number]**](Number.md)| ガス区分&lt;br/&gt;1: 都市ガス&lt;br/&gt;2: プロパン&lt;br/&gt;3: 共同&lt;br/&gt;4: その他 | [optional] 
 **initialCostCode** | [**[Number]**](Number.md)| 初期費用区分&lt;br/&gt;1: 五万円以下&lt;br/&gt;2: 十万円以下&lt;br/&gt;3: 十五万円以下&lt;br/&gt;4: 二十万円以下&lt;br/&gt;5: 三十万円以下&lt;br/&gt;99: その他 | [optional] 
 **guarantorRequirementsCode** | [**[Number]**](Number.md)| 保証人要否区分&lt;br/&gt;1: 要&lt;br/&gt;2: 不要&lt;br/&gt;3: 未入力 | [optional] 
 **hasInsurance** | **Boolean**| 損保 有無フラグ | [optional] 
 **depositForStudentCode** | [**[Number]**](Number.md)| 学生敷金区分&lt;br/&gt;1: 不要&lt;br/&gt;2: 一ヶ月&lt;br/&gt;3: 二ヶ月 | [optional] 
 **itJusetsuFlag** | **Boolean**| IT重説可フラグ | [optional] 
 **noGuarantorFlag** | **Boolean**| 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。 | [optional] 
 **isTokuyuchin** | **Boolean**| 特優賃フラグ | [optional] 
 **freeRentFlag** | **Boolean**| フリーレントフラグ | [optional] 
 **managerFlag** | **Boolean**| 管理人有り | [optional] 
 **hasMotorbikeParking** | **Boolean**| バイク置場有フラグ | [optional] 
 **hasBikeParking** | **Boolean**| 駐輪場有フラグ | [optional] 
 **panoramaFlag** | **Boolean**| パノラマ画像付きフラグ | [optional] 
 **floorPlanFlag** | **Boolean**| 間取り図付きフラグ | [optional] 
 **hasExteriorImage** | **Boolean**| 外観画像付きフラグ | [optional] 
 **b2bCustomFlag** | **Boolean**| 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ） | [optional] 
 **isFurnished** | **Boolean**| 家具付きフラグ | [optional] 
 **hasAppliances** | **Boolean**| 家電付きフラグ | [optional] 
 **isNetFree** | **Boolean**| インターネット無料フラグ | [optional] 
 **isOver2f** | **Boolean**| 2階以上フラグ | [optional] 
 **isBathToiletSeparate** | **Boolean**| 風呂トイレ別フラグ | [optional] 
 **hasAircon** | **Boolean**| エアコン付きフラグ | [optional] 
 **hasAutoLock** | **Boolean**| オートロック付きフラグ | [optional] 
 **hasDeliveryBox** | **Boolean**| 宅配ボックス付きフラグ | [optional] 
 **hasElevator** | **Boolean**| エレベーター付きフラグ | [optional] 
 **hasLandryRoom** | **Boolean**| 室内洗濯機置き場フラグ | [optional] 
 **isFlooring** | **Boolean**| フローリングフラグ | [optional] 
 **isDesignersApartment** | **Boolean**| デザイナーズマンションフラグ | [optional] 
 **isBarrierFree** | **Boolean**| バリアフリーフラグ | [optional] 
 **isSouthFacing** | **Boolean**| 南向きフラグ | [optional] 
 **isHighestFloor** | **Boolean**| 最上階フラグ | [optional] 
 **isCornerRoom** | **Boolean**| 角部屋フラグ | [optional] 
 **hasSystemKitchen** | **Boolean**| システムキッチンフラグ | [optional] 
 **hasIhStove** | **Boolean**| IHコンロフラグ | [optional] 
 **hasGasStove** | **Boolean**| ガスコンロフラグ | [optional] 
 **hasMultipleGasStove** | **Boolean**| ガスコンロ２口以上フラグ | [optional] 
 **hasReboilBath** | **Boolean**| 追い焚き機能付きフラグ | [optional] 
 **hasWashlet** | **Boolean**| 温水洗浄便座フラグ | [optional] 
 **hasBathDryer** | **Boolean**| 浴室乾燥機付きフラグ | [optional] 
 **hasFloorHeating** | **Boolean**| 床暖房フラグ | [optional] 
 **hasCloset** | **Boolean**| クローゼットフラグ | [optional] 
 **hasWalkInCloset** | **Boolean**| ウォークインクローゼットフラグ | [optional] 
 **hasCatv** | **Boolean**| CATVフラグ | [optional] 
 **hasCs** | **Boolean**| CSアンテナフラグ | [optional] 
 **hasBs** | **Boolean**| BSアンテナフラグ | [optional] 
 **hasOpticalFiber** | **Boolean**| 光ファイバーフラグ | [optional] 
 **isAllElectric** | **Boolean**| オール電化フラグ | [optional] 
 **hasVerandaBalcony** | **Boolean**| ベランダ・バルコニー付きフラグ | [optional] 
 **isMaisonette** | **Boolean**| メゾネット | [optional] 
 **hasLoft** | **Boolean**| ロフト付き | [optional] 
 **hasSoundproof** | **Boolean**| 防音設備付き | [optional] 
 **hasCounterKitchen** | **Boolean**| カウンターキッチン付き | [optional] 
 **hasGarbageCollectionSite** | **Boolean**| 敷地内ゴミ置場有り | [optional] 
 **hasOwnYard** | **Boolean**| 専用庭付き | [optional] 
 **isQuakeResistantStructure** | **Boolean**| 耐震構造 | [optional] 
 **isQuakeAbsorbingStructure** | **Boolean**| 免震構造 | [optional] 
 **isDampingStructure** | **Boolean**| 制震構造 | [optional] 
 **hasTvIntercom** | **Boolean**| TVインターホン付き | [optional] 
 **hasSecurityCamera** | **Boolean**| 防犯カメラ付き | [optional] 
 **isInternetAvailable** | **Boolean**| インターネット使用可 | [optional] 
 **hasTrunkRoom** | **Boolean**| トランクルーム付き | [optional] 
 **isCondominium** | **Boolean**| 分譲賃貸 | [optional] 
 **isTowerApartment** | **Boolean**| タワーマンション | [optional] 
 **isRenovated** | **Boolean**| リノベーション | [optional] 
 **hasWashroom** | **Boolean**| 洗面所独立 | [optional] 
 **buildingAgeFrom** | **Number**| 建築年数検索区間 | [optional] 
 **buildingAgeTo** | **Number**| 建築年数検索区間 | [optional] 
 **priceFrom** | **Number**| 現賃貸料検索区間 | [optional] 
 **priceTo** | **Number**| 現賃貸料検索区間 | [optional] 
 **manageCostYenFrom** | **Number**| 管理費（円）検索区間 | [optional] 
 **manageCostYenTo** | **Number**| 管理費（円）検索区間 | [optional] 
 **depositYenFrom** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositYenTo** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositMonthFrom** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **depositMonthTo** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **keyMoneyYenFrom** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyYenTo** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyMonthFrom** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **keyMoneyMonthTo** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **repairCostYenFrom** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostYenTo** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostMonthFrom** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **repairCostMonthTo** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **initialCostFrom** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **initialCostTo** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **monthlyCostSummaryFrom** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **monthlyCostSummaryTo** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **advertisingFeePercentTo** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **advertisingFeePercentFrom** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **areaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **areaTo** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaTo** | **Number**| 専有面積検索区間 | [optional] 
 **walkFromStationMinutesFrom** | **Number**| 駅からの徒歩時間 | [optional] 
 **walkFromStationMinutesTo** | **Number**| 駅からの徒歩時間 | [optional] 
 **lastUpdateDatetimeFrom** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **lastUpdateDatetimeTo** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeFrom** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeTo** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateFrom** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateTo** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateFrom** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateTo** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **originalPropertyCodeText** | **String**| 自社管理番号 | [optional] 
 **buildingGuid** | [**[String]**](String.md)| 建物スペックGUID | [optional] 
 **buildingTypeCode** | [**[Number]**](Number.md)| 建物形式区分&lt;br/&gt;1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | [optional] 
 **structureCode** | [**[Number]**](Number.md)| 構造区分&lt;br/&gt;1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
 **siteAreaFrom** | **Number**| 土地面積検索区間 | [optional] 
 **siteAreaTo** | **Number**| 土地面積検索区間 | [optional] 
 **buildingName** | **String**| 建物名 | [optional] 
 **buildingFurigana** | **String**| 建物名フリガナ | [optional] 
 **tagGuid** | [**[String]**](String.md)| タグGUID | [optional] 
 **prefecture** | **String**| 都道府県 | [optional] 
 **prefectureCode** | [**[Number]**](Number.md)| 都道府県コード | [optional] 
 **city** | [**[String]**](String.md)| 市区郡 | [optional] 
 **cityCode** | [**[Number]**](Number.md)| 市区郡コード | [optional] 
 **town** | [**[String]**](String.md)| 町村 | [optional] 
 **jisCode** | [**[Number]**](Number.md)| JISコード | [optional] 
 **address** | [**[String]**](String.md)| 住所 | [optional] 
 **lineCode** | [**[Number]**](Number.md)| 沿線コード | [optional] 
 **stationCode** | [**[Number]**](Number.md)| 駅コード | [optional] 
 **customerKey** | [**[Number]**](Number.md)| カスタマーキー | [optional] 
 **ignorePublishStatus** | **Boolean**| 掲載状態を無視するフラグ | [optional] [default to false]
 **nameOrCodeText** | **String**| 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる | [optional] 
 **ignoreNameDisplay** | **Boolean**| 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる | [optional] 
 **query** | **String**| 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) &#39;[{\&quot;building_name\&quot;: \&quot;いい生活アパート\&quot;, \&quot;price.to\&quot;: 700000}, {\&quot;buildinig_name\&quot;: \&quot;いい生活ハイツ\&quot;, \&quot;walk_from_station_minutes.to\&quot;: 10}]&#39;     -&gt; ?query&#x3D;%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \&quot;%いい生活アパート%\&quot; AND price &lt;&#x3D; 700000) OR (building_name like \&quot;%いい生活ハイツ%\&quot; AND walk_from_station_minutes &lt;&#x3D; 10)      | [optional] 
 **order** | **String**| 複数のソート条件を指定したい場合の特殊パラメータ。{.orderを除いたソートパラメータ名}.{asc か desc}を , 区切りで並べて指定すると、その先頭から順にソートが適用される。例: order&#x3D;property_full_key.desc,layout.asc は、property_full_keyの降順、layoutの昇順でソートされる。このパラメータを個別のソート条件と同時に指定した場合、このパラメータのソート順が先に適用され、その後に個別のソート条件が適用される。 | [optional] 
 **propertyFullKeyOrder** | [**Order**](.md)| 物件完全IDソート順 | [optional] 
 **propertyClassCodeOrder** | [**Order**](.md)| 募集種別区分コードソート順 | [optional] 
 **propertyUseCodeOrder** | [**Order**](.md)| 募集用途区分ソート順 | [optional] 
 **propertyTypeCodeOrder** | [**Order**](.md)| 募集種別区分ソート順 | [optional] 
 **modifiedOrder** | [**Order**](.md)| 新着ソート順。非推奨のため代わりにlast_update_datetime.orderを使うこと。 | [optional] 
 **lastUpdateDatetimeOrder** | [**Order**](.md)| 新着ソート順 | [optional] 
 **layoutOrder** | [**Order**](.md)| 間取りソート順 | [optional] 
 **buildingAgeOrder** | [**Order**](.md)| 築年月ソート順 | [optional] 
 **stationOrder** | [**Order**](.md)| 駅ソート順 | [optional] 
 **stationNameOrder** | [**Order**](.md)| 駅名ソート順 | [optional] 
 **lineOrder** | [**Order**](.md)| 沿線ソート順 | [optional] 
 **lineNameOrder** | [**Order**](.md)| 沿線名ソート順 | [optional] 
 **walkFromStationMinutesOrder** | [**Order**](.md)| 駅徒歩時間ソート順 | [optional] 
 **addressOrder** | [**Order**](.md)| 住所コードソート順 | [optional] 
 **searchAreaOrder** | [**Order**](.md)| 面積ソート順 | [optional] 
 **exclusiveAreaOrder** | [**Order**](.md)| 専有面積ソート順 | [optional] 
 **buildingNameOrder** | [**Order**](.md)| 建物名ソート順 | [optional] 
 **buildingFuriganaOrder** | [**Order**](.md)| 建物名フリガナソート順 | [optional] 
 **depositPriceOrder** | [**Order**](.md)| 敷金/保証金（円）ソート順 | [optional] 
 **keyMoneyPriceOrder** | [**Order**](.md)| 礼金/権利金（円）ソート順 | [optional] 
 **manageCostPriceOrder** | [**Order**](.md)| 管理費/共益費/雑費（円）ソート順 | [optional] 
 **advertisingFeePercentOrder** | [**Order**](.md)| 広告料（パーセント）ソート順 | [optional] 
 **advertiseFlagOrder** | [**Order**](.md)| 広告可フラグソート順 | [optional] 
 **floorNumberOrder** | [**Order**](.md)| 所在階ソート順 | [optional] 
 **availableDateOrder** | [**Order**](.md)| 入居可能日ソート順 | [optional] 
 **priceOrder** | [**Order**](.md)| 賃料ソート順 | [optional] 
 **initialCostOrder** | [**Order**](.md)| 初期費用ソート順 | [optional] 
 **monthlyCostSummaryOrder** | [**Order**](.md)| 管理費など込み賃料 | [optional] 

### Return type

[**PropertyList**](PropertyList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRentProperty

> RentProperty getRentProperty(propertyFullKey, opts)

Get Property

property_full_keyで物件情報を取得する（賃貸）  物件の詳細情報を返す。

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.RentPropertyQueryAPIApi();
let propertyFullKey = "propertyFullKey_example"; // String | 
let opts = {
  'baitaiCode': new EsApi.RentBaitaiCode() // RentBaitaiCode | 掲載先(デフォルトはウェブサイト)
};
apiInstance.getRentProperty(propertyFullKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyFullKey** | **String**|  | 
 **baitaiCode** | [**RentBaitaiCode**](.md)| 掲載先(デフォルトはウェブサイト) | [optional] 

### Return type

[**RentProperty**](RentProperty.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchRentPropertyByBuilding

> BuildingPropertyList searchRentPropertyByBuilding(opts)

Search Rent Property

建物とそれに紐づく物件の一覧を取得する（賃貸）  建物ごとにグルーピングした形式で、検索条件に合致する部屋区画の一覧情報を返す。 レスポンス形式のイメージは以下のようになる。  &#x60;&#x60;&#x60; 建物A -- 区画a       |- 区画b       |- 区画c 建物B -- 区画d       |- 区画e &#x60;&#x60;&#x60;

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.RentPropertyQueryAPIApi();
let opts = {
  'startIndex': 1, // Number | 検索の開始インデックス
  'itemsPerPage': 10, // Number | ページあたりの最大表示数
  'baitaiCode': new EsApi.RentBaitaiCode(), // RentBaitaiCode | 掲載先<br/>103: EsB2B<br/>105: ウェブサイト
  'propertyFullKey': ["null"], // [String] | 物件完全ID
  'propertyUseCode': [null], // [Number] | 募集用途区分<br/>1: 居住用<br/>2: 事業用<br/>3: 投資用
  'propertyTypeCode': [null], // [Number] | 募集種別区分<br/>101: マンション<br/>102: リゾートマンション<br/>103: アパート<br/>104: コーポ<br/>105: テラスハウス<br/>106: タウンハウス<br/>107: 戸建<br/>108: 土地<br/>109: 借地権譲渡<br/>110: 底地権譲渡<br/>111: 店舗<br/>112: 店舗事務所<br/>113: 住宅付店舗<br/>114: 事務所<br/>115: ビル<br/>116: 倉庫<br/>117: 工場<br/>118: トランクルーム<br/>119: 駐車場<br/>120: バイク置き場<br/>121: その他<br/>122: 間借り
  'newUsedCode': 56, // Number | 新築・中古区分<br/>1: 新築<br/>2: 中古
  'residenceRentPeriodCode': 56, // Number | 居住用契約区分<br/>1: 普通借家契約<br/>2: 定期借家契約
  'layoutText': ["null"], // [String] | 間取りテキスト
  'layoutTypeCode': [null], // [Number] | 間取りタイプ<br/>1: R<br/>2: K<br/>3: DK<br/>4: SDK<br/>5: LDK<br/>6: SLDK<br/>7: LK<br/>8: SK<br/>9: SLK
  'isLargerThan5k': true, // Boolean | 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。
  'layoutCode': [null], // [Number] | 間取り区分<br/>1: 1R<br/>2: 1K<br/>3: 1DK<br/>4: 1LDK<br/>5: 2K<br/>6: 2DK<br/>7: 2LDK<br/>8: 3K<br/>9: 3DK<br/>10: 3LDK<br/>11: 4K<br/>12: 4DK<br/>13: 4LDK<br/>14: 5K以上
  'isNowAvailable': true, // Boolean | 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日)
  'availableCode': [null], // [Number] | 入居可能区分<br/>1: 即時<br/>2: 相談<br/>3: 期日指定<br/>4: 予定
  'rentTransactionFormCode': [null], // [Number] | 賃貸取引態様区分<br/>1: 貸主<br/>2: 代理<br/>3: 仲介元付(専任)<br/>4: 仲介元付(一般)<br/>5: 仲介先物<br/>6: 仲介元付<br/>7: 仲介
  'studentRestrictionCode': [null], // [Number] | 学生専用区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'genderRestrictionCode': [null], // [Number] | 性別入居条件区分<br/>1: 不問<br/>2: 女性限定<br/>3: 男性限定<br/>4: 女性希望<br/>5: 男性希望
  'kidsRestrictionCode': [null], // [Number] | 子供可入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'onePersonRestrictionCode': [null], // [Number] | 単身可入居条件<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'twoPersonsRestrictionCode': [null], // [Number] | 二人入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'elderRestrictionCode': [null], // [Number] | 高齢者入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'manageCostFreeCode': [null], // [Number] | 管理費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'serviceFeeFreeCode': [null], // [Number] | 共益費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'miscExpenseFreeCode': [null], // [Number] | 雑費なし区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'otherInitialCostFreeFlag': true, // Boolean | その他初期費用無しフラグ
  'petRestrictionCode': [null], // [Number] | ペット可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'officeUsageRestrictionCode': [null], // [Number] | 事務所利用条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'corporateContractRestrictionCode': [null], // [Number] | 法人可条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'musicalInstrumentRestrictionCode': [null], // [Number] | 楽器等の使用区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'restaurantUsageRestrictionCode': [null], // [Number] | 飲食店可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'roomSharingRestrictionCode': [null], // [Number] | ルームシェア区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignerRestrictionCode': [null], // [Number] | 外国人入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'friendsRestrictionCode': [null], // [Number] | 友人同士入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignStudentRestrictionCode': [null], // [Number] | 留学生入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'parkingAvailabilityCode': [null], // [Number] | 駐車場の状況区分<br/>1: 無<br/>2: 有(敷地内)<br/>3: 付<br/>4: 近隣駐車場<br/>5: 空無<br/>6: 要問合せ
  'gasCode': [null], // [Number] | ガス区分<br/>1: 都市ガス<br/>2: プロパン<br/>3: 共同<br/>4: その他
  'initialCostCode': [null], // [Number] | 初期費用区分<br/>1: 五万円以下<br/>2: 十万円以下<br/>3: 十五万円以下<br/>4: 二十万円以下<br/>5: 三十万円以下<br/>99: その他
  'guarantorRequirementsCode': [null], // [Number] | 保証人要否区分<br/>1: 要<br/>2: 不要<br/>3: 未入力
  'hasInsurance': true, // Boolean | 損保 有無フラグ
  'depositForStudentCode': [null], // [Number] | 学生敷金区分<br/>1: 不要<br/>2: 一ヶ月<br/>3: 二ヶ月
  'itJusetsuFlag': true, // Boolean | IT重説可フラグ
  'noGuarantorFlag': true, // Boolean | 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。
  'isTokuyuchin': true, // Boolean | 特優賃フラグ
  'freeRentFlag': true, // Boolean | フリーレントフラグ
  'managerFlag': true, // Boolean | 管理人有り
  'hasMotorbikeParking': true, // Boolean | バイク置場有フラグ
  'hasBikeParking': true, // Boolean | 駐輪場有フラグ
  'panoramaFlag': true, // Boolean | パノラマ画像付きフラグ
  'floorPlanFlag': true, // Boolean | 間取り図付きフラグ
  'hasExteriorImage': true, // Boolean | 外観画像付きフラグ
  'b2bCustomFlag': true, // Boolean | 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ）
  'isFurnished': true, // Boolean | 家具付きフラグ
  'hasAppliances': true, // Boolean | 家電付きフラグ
  'isNetFree': true, // Boolean | インターネット無料フラグ
  'isOver2f': true, // Boolean | 2階以上フラグ
  'isBathToiletSeparate': true, // Boolean | 風呂トイレ別フラグ
  'hasAircon': true, // Boolean | エアコン付きフラグ
  'hasAutoLock': true, // Boolean | オートロック付きフラグ
  'hasDeliveryBox': true, // Boolean | 宅配ボックス付きフラグ
  'hasElevator': true, // Boolean | エレベーター付きフラグ
  'hasLandryRoom': true, // Boolean | 室内洗濯機置き場フラグ
  'isFlooring': true, // Boolean | フローリングフラグ
  'isDesignersApartment': true, // Boolean | デザイナーズマンションフラグ
  'isBarrierFree': true, // Boolean | バリアフリーフラグ
  'isSouthFacing': true, // Boolean | 南向きフラグ
  'isHighestFloor': true, // Boolean | 最上階フラグ
  'isCornerRoom': true, // Boolean | 角部屋フラグ
  'hasSystemKitchen': true, // Boolean | システムキッチンフラグ
  'hasIhStove': true, // Boolean | IHコンロフラグ
  'hasGasStove': true, // Boolean | ガスコンロフラグ
  'hasMultipleGasStove': true, // Boolean | ガスコンロ２口以上フラグ
  'hasReboilBath': true, // Boolean | 追い焚き機能付きフラグ
  'hasWashlet': true, // Boolean | 温水洗浄便座フラグ
  'hasBathDryer': true, // Boolean | 浴室乾燥機付きフラグ
  'hasFloorHeating': true, // Boolean | 床暖房フラグ
  'hasCloset': true, // Boolean | クローゼットフラグ
  'hasWalkInCloset': true, // Boolean | ウォークインクローゼットフラグ
  'hasCatv': true, // Boolean | CATVフラグ
  'hasCs': true, // Boolean | CSアンテナフラグ
  'hasBs': true, // Boolean | BSアンテナフラグ
  'hasOpticalFiber': true, // Boolean | 光ファイバーフラグ
  'isAllElectric': true, // Boolean | オール電化フラグ
  'hasVerandaBalcony': true, // Boolean | ベランダ・バルコニー付きフラグ
  'isMaisonette': true, // Boolean | メゾネット
  'hasLoft': true, // Boolean | ロフト付き
  'hasSoundproof': true, // Boolean | 防音設備付き
  'hasCounterKitchen': true, // Boolean | カウンターキッチン付き
  'hasGarbageCollectionSite': true, // Boolean | 敷地内ゴミ置場有り
  'hasOwnYard': true, // Boolean | 専用庭付き
  'isQuakeResistantStructure': true, // Boolean | 耐震構造
  'isQuakeAbsorbingStructure': true, // Boolean | 免震構造
  'isDampingStructure': true, // Boolean | 制震構造
  'hasTvIntercom': true, // Boolean | TVインターホン付き
  'hasSecurityCamera': true, // Boolean | 防犯カメラ付き
  'isInternetAvailable': true, // Boolean | インターネット使用可
  'hasTrunkRoom': true, // Boolean | トランクルーム付き
  'isCondominium': true, // Boolean | 分譲賃貸
  'isTowerApartment': true, // Boolean | タワーマンション
  'isRenovated': true, // Boolean | リノベーション
  'hasWashroom': true, // Boolean | 洗面所独立
  'buildingAgeFrom': 56, // Number | 建築年数検索区間
  'buildingAgeTo': 56, // Number | 建築年数検索区間
  'priceFrom': 56, // Number | 現賃貸料検索区間
  'priceTo': 56, // Number | 現賃貸料検索区間
  'manageCostYenFrom': 56, // Number | 管理費（円）検索区間
  'manageCostYenTo': 56, // Number | 管理費（円）検索区間
  'depositYenFrom': 56, // Number | 敷金/保証金（円）検索区間
  'depositYenTo': 56, // Number | 敷金/保証金（円）検索区間
  'depositMonthFrom': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'depositMonthTo': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'keyMoneyYenFrom': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyYenTo': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyMonthFrom': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'keyMoneyMonthTo': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'repairCostYenFrom': 56, // Number | 敷引/償却（円）検索区間
  'repairCostYenTo': 56, // Number | 敷引/償却（円）検索区間
  'repairCostMonthFrom': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'repairCostMonthTo': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'initialCostFrom': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'initialCostTo': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'monthlyCostSummaryFrom': 56, // Number | 管理費など込み賃料検索区間
  'monthlyCostSummaryTo': 56, // Number | 管理費など込み賃料検索区間
  'advertisingFeePercentTo': 3.4, // Number | 広告料（パーセント）検索区間
  'advertisingFeePercentFrom': 3.4, // Number | 広告料（パーセント）検索区間
  'areaFrom': 3.4, // Number | 専有面積検索区間
  'areaTo': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaFrom': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaTo': 3.4, // Number | 専有面積検索区間
  'walkFromStationMinutesFrom': 56, // Number | 駅からの徒歩時間
  'walkFromStationMinutesTo': 56, // Number | 駅からの徒歩時間
  'lastUpdateDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'lastUpdateDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'originalPropertyCodeText': "originalPropertyCodeText_example", // String | 自社管理番号
  'buildingGuid': ["null"], // [String] | 建物スペックGUID
  'buildingTypeCode': [null], // [Number] | 建物形式区分<br/>1: マンション<br/>2: リゾートマンション<br/>3: アパート<br/>4: テラスハウス<br/>5: タウンハウス<br/>6: 戸建<br/>7: 土地<br/>8: 店舗<br/>9: 事務所<br/>10: ビル<br/>11: 倉庫<br/>12: 工場<br/>13: トランクルーム<br/>14: 駐車場<br/>15: バイク置き場<br/>16: その他
  'structureCode': [null], // [Number] | 構造区分<br/>1: 木造<br/>2: 軽量鉄骨<br/>3: 鉄筋コンクリート<br/>4: 鉄骨鉄筋コンクリート<br/>5: ALC<br/>6: プレキャストコンクリート<br/>7: 鉄筋ブロック<br/>8: 鉄骨プレ<br/>9: 鉄骨<br/>10: その他
  'siteAreaFrom': 3.4, // Number | 土地面積検索区間
  'siteAreaTo': 3.4, // Number | 土地面積検索区間
  'buildingName': "buildingName_example", // String | 建物名
  'buildingFurigana': "buildingFurigana_example", // String | 建物名フリガナ
  'tagGuid': ["null"], // [String] | タグGUID
  'prefecture': "prefecture_example", // String | 都道府県
  'prefectureCode': [null], // [Number] | 都道府県コード
  'city': ["null"], // [String] | 市区郡
  'cityCode': [null], // [Number] | 市区郡コード
  'town': ["null"], // [String] | 町村
  'jisCode': [null], // [Number] | JISコード
  'address': ["null"], // [String] | 住所
  'lineCode': [null], // [Number] | 沿線コード
  'stationCode': [null], // [Number] | 駅コード
  'customerKey': [null], // [Number] | カスタマーキー
  'ignorePublishStatus': false, // Boolean | 掲載状態を無視するフラグ
  'nameOrCodeText': "nameOrCodeText_example", // String | 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる
  'ignoreNameDisplay': true, // Boolean | 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる
  'query': "query_example", // String | 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) '[{\"building_name\": \"いい生活アパート\", \"price.to\": 700000}, {\"buildinig_name\": \"いい生活ハイツ\", \"walk_from_station_minutes.to\": 10}]'     -> ?query=%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \"%いい生活アパート%\" AND price <= 700000) OR (building_name like \"%いい生活ハイツ%\" AND walk_from_station_minutes <= 10)     
  'order': "order_example", // String | 複数のソート条件を指定したい場合の特殊パラメータ。{.orderを除いたソートパラメータ名}.{asc か desc}を , 区切りで並べて指定すると、その先頭から順にソートが適用される。例: order=property_full_key.desc,layout.asc は、property_full_keyの降順、layoutの昇順でソートされる。このパラメータを個別のソート条件と同時に指定した場合、このパラメータのソート順が先に適用され、その後に個別のソート条件が適用される。
  'propertyFullKeyOrder': new EsApi.Order(), // Order | 物件完全IDソート順
  'propertyClassCodeOrder': new EsApi.Order(), // Order | 募集種別区分コードソート順
  'propertyUseCodeOrder': new EsApi.Order(), // Order | 募集用途区分ソート順
  'propertyTypeCodeOrder': new EsApi.Order(), // Order | 募集種別区分ソート順
  'modifiedOrder': new EsApi.Order(), // Order | 新着ソート順。非推奨のため代わりにlast_update_datetime.orderを使うこと。
  'lastUpdateDatetimeOrder': new EsApi.Order(), // Order | 新着ソート順
  'layoutOrder': new EsApi.Order(), // Order | 間取りソート順
  'buildingAgeOrder': new EsApi.Order(), // Order | 築年月ソート順
  'stationOrder': new EsApi.Order(), // Order | 駅ソート順
  'stationNameOrder': new EsApi.Order(), // Order | 駅名ソート順
  'lineOrder': new EsApi.Order(), // Order | 沿線ソート順
  'lineNameOrder': new EsApi.Order(), // Order | 沿線名ソート順
  'walkFromStationMinutesOrder': new EsApi.Order(), // Order | 駅徒歩時間ソート順
  'addressOrder': new EsApi.Order(), // Order | 住所コードソート順
  'searchAreaOrder': new EsApi.Order(), // Order | 面積ソート順
  'exclusiveAreaOrder': new EsApi.Order(), // Order | 専有面積ソート順
  'buildingNameOrder': new EsApi.Order(), // Order | 建物名ソート順
  'buildingFuriganaOrder': new EsApi.Order(), // Order | 建物名フリガナソート順
  'depositPriceOrder': new EsApi.Order(), // Order | 敷金/保証金（円）ソート順
  'keyMoneyPriceOrder': new EsApi.Order(), // Order | 礼金/権利金（円）ソート順
  'manageCostPriceOrder': new EsApi.Order(), // Order | 管理費/共益費/雑費（円）ソート順
  'advertisingFeePercentOrder': new EsApi.Order(), // Order | 広告料（パーセント）ソート順
  'advertiseFlagOrder': new EsApi.Order(), // Order | 広告可フラグソート順
  'floorNumberOrder': new EsApi.Order(), // Order | 所在階ソート順
  'availableDateOrder': new EsApi.Order(), // Order | 入居可能日ソート順
  'priceOrder': new EsApi.Order(), // Order | 賃料ソート順
  'initialCostOrder': new EsApi.Order(), // Order | 初期費用ソート順
  'monthlyCostSummaryOrder': new EsApi.Order() // Order | 管理費など込み賃料
};
apiInstance.searchRentPropertyByBuilding(opts).then((data) => {
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
 **baitaiCode** | [**RentBaitaiCode**](.md)| 掲載先&lt;br/&gt;103: EsB2B&lt;br/&gt;105: ウェブサイト | [optional] 
 **propertyFullKey** | [**[String]**](String.md)| 物件完全ID | [optional] 
 **propertyUseCode** | [**[Number]**](Number.md)| 募集用途区分&lt;br/&gt;1: 居住用&lt;br/&gt;2: 事業用&lt;br/&gt;3: 投資用 | [optional] 
 **propertyTypeCode** | [**[Number]**](Number.md)| 募集種別区分&lt;br/&gt;101: マンション&lt;br/&gt;102: リゾートマンション&lt;br/&gt;103: アパート&lt;br/&gt;104: コーポ&lt;br/&gt;105: テラスハウス&lt;br/&gt;106: タウンハウス&lt;br/&gt;107: 戸建&lt;br/&gt;108: 土地&lt;br/&gt;109: 借地権譲渡&lt;br/&gt;110: 底地権譲渡&lt;br/&gt;111: 店舗&lt;br/&gt;112: 店舗事務所&lt;br/&gt;113: 住宅付店舗&lt;br/&gt;114: 事務所&lt;br/&gt;115: ビル&lt;br/&gt;116: 倉庫&lt;br/&gt;117: 工場&lt;br/&gt;118: トランクルーム&lt;br/&gt;119: 駐車場&lt;br/&gt;120: バイク置き場&lt;br/&gt;121: その他&lt;br/&gt;122: 間借り | [optional] 
 **newUsedCode** | **Number**| 新築・中古区分&lt;br/&gt;1: 新築&lt;br/&gt;2: 中古 | [optional] 
 **residenceRentPeriodCode** | **Number**| 居住用契約区分&lt;br/&gt;1: 普通借家契約&lt;br/&gt;2: 定期借家契約 | [optional] 
 **layoutText** | [**[String]**](String.md)| 間取りテキスト | [optional] 
 **layoutTypeCode** | [**[Number]**](Number.md)| 間取りタイプ&lt;br/&gt;1: R&lt;br/&gt;2: K&lt;br/&gt;3: DK&lt;br/&gt;4: SDK&lt;br/&gt;5: LDK&lt;br/&gt;6: SLDK&lt;br/&gt;7: LK&lt;br/&gt;8: SK&lt;br/&gt;9: SLK | [optional] 
 **isLargerThan5k** | **Boolean**| 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。 | [optional] 
 **layoutCode** | [**[Number]**](Number.md)| 間取り区分&lt;br/&gt;1: 1R&lt;br/&gt;2: 1K&lt;br/&gt;3: 1DK&lt;br/&gt;4: 1LDK&lt;br/&gt;5: 2K&lt;br/&gt;6: 2DK&lt;br/&gt;7: 2LDK&lt;br/&gt;8: 3K&lt;br/&gt;9: 3DK&lt;br/&gt;10: 3LDK&lt;br/&gt;11: 4K&lt;br/&gt;12: 4DK&lt;br/&gt;13: 4LDK&lt;br/&gt;14: 5K以上 | [optional] 
 **isNowAvailable** | **Boolean**| 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日) | [optional] 
 **availableCode** | [**[Number]**](Number.md)| 入居可能区分&lt;br/&gt;1: 即時&lt;br/&gt;2: 相談&lt;br/&gt;3: 期日指定&lt;br/&gt;4: 予定 | [optional] 
 **rentTransactionFormCode** | [**[Number]**](Number.md)| 賃貸取引態様区分&lt;br/&gt;1: 貸主&lt;br/&gt;2: 代理&lt;br/&gt;3: 仲介元付(専任)&lt;br/&gt;4: 仲介元付(一般)&lt;br/&gt;5: 仲介先物&lt;br/&gt;6: 仲介元付&lt;br/&gt;7: 仲介 | [optional] 
 **studentRestrictionCode** | [**[Number]**](Number.md)| 学生専用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **genderRestrictionCode** | [**[Number]**](Number.md)| 性別入居条件区分&lt;br/&gt;1: 不問&lt;br/&gt;2: 女性限定&lt;br/&gt;3: 男性限定&lt;br/&gt;4: 女性希望&lt;br/&gt;5: 男性希望 | [optional] 
 **kidsRestrictionCode** | [**[Number]**](Number.md)| 子供可入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **onePersonRestrictionCode** | [**[Number]**](Number.md)| 単身可入居条件&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **twoPersonsRestrictionCode** | [**[Number]**](Number.md)| 二人入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **elderRestrictionCode** | [**[Number]**](Number.md)| 高齢者入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **manageCostFreeCode** | [**[Number]**](Number.md)| 管理費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **serviceFeeFreeCode** | [**[Number]**](Number.md)| 共益費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **miscExpenseFreeCode** | [**[Number]**](Number.md)| 雑費なし区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **otherInitialCostFreeFlag** | **Boolean**| その他初期費用無しフラグ | [optional] 
 **petRestrictionCode** | [**[Number]**](Number.md)| ペット可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **officeUsageRestrictionCode** | [**[Number]**](Number.md)| 事務所利用条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **corporateContractRestrictionCode** | [**[Number]**](Number.md)| 法人可条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **musicalInstrumentRestrictionCode** | [**[Number]**](Number.md)| 楽器等の使用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **restaurantUsageRestrictionCode** | [**[Number]**](Number.md)| 飲食店可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **roomSharingRestrictionCode** | [**[Number]**](Number.md)| ルームシェア区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignerRestrictionCode** | [**[Number]**](Number.md)| 外国人入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **friendsRestrictionCode** | [**[Number]**](Number.md)| 友人同士入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignStudentRestrictionCode** | [**[Number]**](Number.md)| 留学生入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **parkingAvailabilityCode** | [**[Number]**](Number.md)| 駐車場の状況区分&lt;br/&gt;1: 無&lt;br/&gt;2: 有(敷地内)&lt;br/&gt;3: 付&lt;br/&gt;4: 近隣駐車場&lt;br/&gt;5: 空無&lt;br/&gt;6: 要問合せ | [optional] 
 **gasCode** | [**[Number]**](Number.md)| ガス区分&lt;br/&gt;1: 都市ガス&lt;br/&gt;2: プロパン&lt;br/&gt;3: 共同&lt;br/&gt;4: その他 | [optional] 
 **initialCostCode** | [**[Number]**](Number.md)| 初期費用区分&lt;br/&gt;1: 五万円以下&lt;br/&gt;2: 十万円以下&lt;br/&gt;3: 十五万円以下&lt;br/&gt;4: 二十万円以下&lt;br/&gt;5: 三十万円以下&lt;br/&gt;99: その他 | [optional] 
 **guarantorRequirementsCode** | [**[Number]**](Number.md)| 保証人要否区分&lt;br/&gt;1: 要&lt;br/&gt;2: 不要&lt;br/&gt;3: 未入力 | [optional] 
 **hasInsurance** | **Boolean**| 損保 有無フラグ | [optional] 
 **depositForStudentCode** | [**[Number]**](Number.md)| 学生敷金区分&lt;br/&gt;1: 不要&lt;br/&gt;2: 一ヶ月&lt;br/&gt;3: 二ヶ月 | [optional] 
 **itJusetsuFlag** | **Boolean**| IT重説可フラグ | [optional] 
 **noGuarantorFlag** | **Boolean**| 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。 | [optional] 
 **isTokuyuchin** | **Boolean**| 特優賃フラグ | [optional] 
 **freeRentFlag** | **Boolean**| フリーレントフラグ | [optional] 
 **managerFlag** | **Boolean**| 管理人有り | [optional] 
 **hasMotorbikeParking** | **Boolean**| バイク置場有フラグ | [optional] 
 **hasBikeParking** | **Boolean**| 駐輪場有フラグ | [optional] 
 **panoramaFlag** | **Boolean**| パノラマ画像付きフラグ | [optional] 
 **floorPlanFlag** | **Boolean**| 間取り図付きフラグ | [optional] 
 **hasExteriorImage** | **Boolean**| 外観画像付きフラグ | [optional] 
 **b2bCustomFlag** | **Boolean**| 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ） | [optional] 
 **isFurnished** | **Boolean**| 家具付きフラグ | [optional] 
 **hasAppliances** | **Boolean**| 家電付きフラグ | [optional] 
 **isNetFree** | **Boolean**| インターネット無料フラグ | [optional] 
 **isOver2f** | **Boolean**| 2階以上フラグ | [optional] 
 **isBathToiletSeparate** | **Boolean**| 風呂トイレ別フラグ | [optional] 
 **hasAircon** | **Boolean**| エアコン付きフラグ | [optional] 
 **hasAutoLock** | **Boolean**| オートロック付きフラグ | [optional] 
 **hasDeliveryBox** | **Boolean**| 宅配ボックス付きフラグ | [optional] 
 **hasElevator** | **Boolean**| エレベーター付きフラグ | [optional] 
 **hasLandryRoom** | **Boolean**| 室内洗濯機置き場フラグ | [optional] 
 **isFlooring** | **Boolean**| フローリングフラグ | [optional] 
 **isDesignersApartment** | **Boolean**| デザイナーズマンションフラグ | [optional] 
 **isBarrierFree** | **Boolean**| バリアフリーフラグ | [optional] 
 **isSouthFacing** | **Boolean**| 南向きフラグ | [optional] 
 **isHighestFloor** | **Boolean**| 最上階フラグ | [optional] 
 **isCornerRoom** | **Boolean**| 角部屋フラグ | [optional] 
 **hasSystemKitchen** | **Boolean**| システムキッチンフラグ | [optional] 
 **hasIhStove** | **Boolean**| IHコンロフラグ | [optional] 
 **hasGasStove** | **Boolean**| ガスコンロフラグ | [optional] 
 **hasMultipleGasStove** | **Boolean**| ガスコンロ２口以上フラグ | [optional] 
 **hasReboilBath** | **Boolean**| 追い焚き機能付きフラグ | [optional] 
 **hasWashlet** | **Boolean**| 温水洗浄便座フラグ | [optional] 
 **hasBathDryer** | **Boolean**| 浴室乾燥機付きフラグ | [optional] 
 **hasFloorHeating** | **Boolean**| 床暖房フラグ | [optional] 
 **hasCloset** | **Boolean**| クローゼットフラグ | [optional] 
 **hasWalkInCloset** | **Boolean**| ウォークインクローゼットフラグ | [optional] 
 **hasCatv** | **Boolean**| CATVフラグ | [optional] 
 **hasCs** | **Boolean**| CSアンテナフラグ | [optional] 
 **hasBs** | **Boolean**| BSアンテナフラグ | [optional] 
 **hasOpticalFiber** | **Boolean**| 光ファイバーフラグ | [optional] 
 **isAllElectric** | **Boolean**| オール電化フラグ | [optional] 
 **hasVerandaBalcony** | **Boolean**| ベランダ・バルコニー付きフラグ | [optional] 
 **isMaisonette** | **Boolean**| メゾネット | [optional] 
 **hasLoft** | **Boolean**| ロフト付き | [optional] 
 **hasSoundproof** | **Boolean**| 防音設備付き | [optional] 
 **hasCounterKitchen** | **Boolean**| カウンターキッチン付き | [optional] 
 **hasGarbageCollectionSite** | **Boolean**| 敷地内ゴミ置場有り | [optional] 
 **hasOwnYard** | **Boolean**| 専用庭付き | [optional] 
 **isQuakeResistantStructure** | **Boolean**| 耐震構造 | [optional] 
 **isQuakeAbsorbingStructure** | **Boolean**| 免震構造 | [optional] 
 **isDampingStructure** | **Boolean**| 制震構造 | [optional] 
 **hasTvIntercom** | **Boolean**| TVインターホン付き | [optional] 
 **hasSecurityCamera** | **Boolean**| 防犯カメラ付き | [optional] 
 **isInternetAvailable** | **Boolean**| インターネット使用可 | [optional] 
 **hasTrunkRoom** | **Boolean**| トランクルーム付き | [optional] 
 **isCondominium** | **Boolean**| 分譲賃貸 | [optional] 
 **isTowerApartment** | **Boolean**| タワーマンション | [optional] 
 **isRenovated** | **Boolean**| リノベーション | [optional] 
 **hasWashroom** | **Boolean**| 洗面所独立 | [optional] 
 **buildingAgeFrom** | **Number**| 建築年数検索区間 | [optional] 
 **buildingAgeTo** | **Number**| 建築年数検索区間 | [optional] 
 **priceFrom** | **Number**| 現賃貸料検索区間 | [optional] 
 **priceTo** | **Number**| 現賃貸料検索区間 | [optional] 
 **manageCostYenFrom** | **Number**| 管理費（円）検索区間 | [optional] 
 **manageCostYenTo** | **Number**| 管理費（円）検索区間 | [optional] 
 **depositYenFrom** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositYenTo** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositMonthFrom** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **depositMonthTo** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **keyMoneyYenFrom** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyYenTo** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyMonthFrom** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **keyMoneyMonthTo** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **repairCostYenFrom** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostYenTo** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostMonthFrom** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **repairCostMonthTo** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **initialCostFrom** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **initialCostTo** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **monthlyCostSummaryFrom** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **monthlyCostSummaryTo** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **advertisingFeePercentTo** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **advertisingFeePercentFrom** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **areaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **areaTo** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaTo** | **Number**| 専有面積検索区間 | [optional] 
 **walkFromStationMinutesFrom** | **Number**| 駅からの徒歩時間 | [optional] 
 **walkFromStationMinutesTo** | **Number**| 駅からの徒歩時間 | [optional] 
 **lastUpdateDatetimeFrom** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **lastUpdateDatetimeTo** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeFrom** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeTo** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateFrom** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateTo** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateFrom** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateTo** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **originalPropertyCodeText** | **String**| 自社管理番号 | [optional] 
 **buildingGuid** | [**[String]**](String.md)| 建物スペックGUID | [optional] 
 **buildingTypeCode** | [**[Number]**](Number.md)| 建物形式区分&lt;br/&gt;1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | [optional] 
 **structureCode** | [**[Number]**](Number.md)| 構造区分&lt;br/&gt;1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
 **siteAreaFrom** | **Number**| 土地面積検索区間 | [optional] 
 **siteAreaTo** | **Number**| 土地面積検索区間 | [optional] 
 **buildingName** | **String**| 建物名 | [optional] 
 **buildingFurigana** | **String**| 建物名フリガナ | [optional] 
 **tagGuid** | [**[String]**](String.md)| タグGUID | [optional] 
 **prefecture** | **String**| 都道府県 | [optional] 
 **prefectureCode** | [**[Number]**](Number.md)| 都道府県コード | [optional] 
 **city** | [**[String]**](String.md)| 市区郡 | [optional] 
 **cityCode** | [**[Number]**](Number.md)| 市区郡コード | [optional] 
 **town** | [**[String]**](String.md)| 町村 | [optional] 
 **jisCode** | [**[Number]**](Number.md)| JISコード | [optional] 
 **address** | [**[String]**](String.md)| 住所 | [optional] 
 **lineCode** | [**[Number]**](Number.md)| 沿線コード | [optional] 
 **stationCode** | [**[Number]**](Number.md)| 駅コード | [optional] 
 **customerKey** | [**[Number]**](Number.md)| カスタマーキー | [optional] 
 **ignorePublishStatus** | **Boolean**| 掲載状態を無視するフラグ | [optional] [default to false]
 **nameOrCodeText** | **String**| 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる | [optional] 
 **ignoreNameDisplay** | **Boolean**| 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる | [optional] 
 **query** | **String**| 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) &#39;[{\&quot;building_name\&quot;: \&quot;いい生活アパート\&quot;, \&quot;price.to\&quot;: 700000}, {\&quot;buildinig_name\&quot;: \&quot;いい生活ハイツ\&quot;, \&quot;walk_from_station_minutes.to\&quot;: 10}]&#39;     -&gt; ?query&#x3D;%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \&quot;%いい生活アパート%\&quot; AND price &lt;&#x3D; 700000) OR (building_name like \&quot;%いい生活ハイツ%\&quot; AND walk_from_station_minutes &lt;&#x3D; 10)      | [optional] 
 **order** | **String**| 複数のソート条件を指定したい場合の特殊パラメータ。{.orderを除いたソートパラメータ名}.{asc か desc}を , 区切りで並べて指定すると、その先頭から順にソートが適用される。例: order&#x3D;property_full_key.desc,layout.asc は、property_full_keyの降順、layoutの昇順でソートされる。このパラメータを個別のソート条件と同時に指定した場合、このパラメータのソート順が先に適用され、その後に個別のソート条件が適用される。 | [optional] 
 **propertyFullKeyOrder** | [**Order**](.md)| 物件完全IDソート順 | [optional] 
 **propertyClassCodeOrder** | [**Order**](.md)| 募集種別区分コードソート順 | [optional] 
 **propertyUseCodeOrder** | [**Order**](.md)| 募集用途区分ソート順 | [optional] 
 **propertyTypeCodeOrder** | [**Order**](.md)| 募集種別区分ソート順 | [optional] 
 **modifiedOrder** | [**Order**](.md)| 新着ソート順。非推奨のため代わりにlast_update_datetime.orderを使うこと。 | [optional] 
 **lastUpdateDatetimeOrder** | [**Order**](.md)| 新着ソート順 | [optional] 
 **layoutOrder** | [**Order**](.md)| 間取りソート順 | [optional] 
 **buildingAgeOrder** | [**Order**](.md)| 築年月ソート順 | [optional] 
 **stationOrder** | [**Order**](.md)| 駅ソート順 | [optional] 
 **stationNameOrder** | [**Order**](.md)| 駅名ソート順 | [optional] 
 **lineOrder** | [**Order**](.md)| 沿線ソート順 | [optional] 
 **lineNameOrder** | [**Order**](.md)| 沿線名ソート順 | [optional] 
 **walkFromStationMinutesOrder** | [**Order**](.md)| 駅徒歩時間ソート順 | [optional] 
 **addressOrder** | [**Order**](.md)| 住所コードソート順 | [optional] 
 **searchAreaOrder** | [**Order**](.md)| 面積ソート順 | [optional] 
 **exclusiveAreaOrder** | [**Order**](.md)| 専有面積ソート順 | [optional] 
 **buildingNameOrder** | [**Order**](.md)| 建物名ソート順 | [optional] 
 **buildingFuriganaOrder** | [**Order**](.md)| 建物名フリガナソート順 | [optional] 
 **depositPriceOrder** | [**Order**](.md)| 敷金/保証金（円）ソート順 | [optional] 
 **keyMoneyPriceOrder** | [**Order**](.md)| 礼金/権利金（円）ソート順 | [optional] 
 **manageCostPriceOrder** | [**Order**](.md)| 管理費/共益費/雑費（円）ソート順 | [optional] 
 **advertisingFeePercentOrder** | [**Order**](.md)| 広告料（パーセント）ソート順 | [optional] 
 **advertiseFlagOrder** | [**Order**](.md)| 広告可フラグソート順 | [optional] 
 **floorNumberOrder** | [**Order**](.md)| 所在階ソート順 | [optional] 
 **availableDateOrder** | [**Order**](.md)| 入居可能日ソート順 | [optional] 
 **priceOrder** | [**Order**](.md)| 賃料ソート順 | [optional] 
 **initialCostOrder** | [**Order**](.md)| 初期費用ソート順 | [optional] 
 **monthlyCostSummaryOrder** | [**Order**](.md)| 管理費など込み賃料 | [optional] 

### Return type

[**BuildingPropertyList**](BuildingPropertyList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchRentPropertyByDwellingUnit

> PropertyList searchRentPropertyByDwellingUnit(opts)

Search Rent Property Dwelling Unit

区画単位での物件一覧を取得する(賃貸)  区画ごとに検索条件に合致する部屋区画の一覧情報を返す。 レスポンス形式のイメージは以下のようになる。   &#x60;&#x60;&#x60; 区画a -- 建物A 区画b -- 建物A 区画c -- 建物A 区画d -- 建物B 区画e -- 建物B &#x60;&#x60;&#x60;

### Example

```javascript
import EsApi from 'es_api';
let defaultClient = EsApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new EsApi.RentPropertyQueryAPIApi();
let opts = {
  'startIndex': 1, // Number | 検索の開始インデックス
  'itemsPerPage': 10, // Number | ページあたりの最大表示数
  'baitaiCode': new EsApi.RentBaitaiCode(), // RentBaitaiCode | 掲載先<br/>103: EsB2B<br/>105: ウェブサイト
  'propertyFullKey': ["null"], // [String] | 物件完全ID
  'propertyUseCode': [null], // [Number] | 募集用途区分<br/>1: 居住用<br/>2: 事業用<br/>3: 投資用
  'propertyTypeCode': [null], // [Number] | 募集種別区分<br/>101: マンション<br/>102: リゾートマンション<br/>103: アパート<br/>104: コーポ<br/>105: テラスハウス<br/>106: タウンハウス<br/>107: 戸建<br/>108: 土地<br/>109: 借地権譲渡<br/>110: 底地権譲渡<br/>111: 店舗<br/>112: 店舗事務所<br/>113: 住宅付店舗<br/>114: 事務所<br/>115: ビル<br/>116: 倉庫<br/>117: 工場<br/>118: トランクルーム<br/>119: 駐車場<br/>120: バイク置き場<br/>121: その他<br/>122: 間借り
  'newUsedCode': 56, // Number | 新築・中古区分<br/>1: 新築<br/>2: 中古
  'residenceRentPeriodCode': 56, // Number | 居住用契約区分<br/>1: 普通借家契約<br/>2: 定期借家契約
  'layoutText': ["null"], // [String] | 間取りテキスト
  'layoutTypeCode': [null], // [Number] | 間取りタイプ<br/>1: R<br/>2: K<br/>3: DK<br/>4: SDK<br/>5: LDK<br/>6: SLDK<br/>7: LK<br/>8: SK<br/>9: SLK
  'isLargerThan5k': true, // Boolean | 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。
  'layoutCode': [null], // [Number] | 間取り区分<br/>1: 1R<br/>2: 1K<br/>3: 1DK<br/>4: 1LDK<br/>5: 2K<br/>6: 2DK<br/>7: 2LDK<br/>8: 3K<br/>9: 3DK<br/>10: 3LDK<br/>11: 4K<br/>12: 4DK<br/>13: 4LDK<br/>14: 5K以上
  'isNowAvailable': true, // Boolean | 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日)
  'availableCode': [null], // [Number] | 入居可能区分<br/>1: 即時<br/>2: 相談<br/>3: 期日指定<br/>4: 予定
  'rentTransactionFormCode': [null], // [Number] | 賃貸取引態様区分<br/>1: 貸主<br/>2: 代理<br/>3: 仲介元付(専任)<br/>4: 仲介元付(一般)<br/>5: 仲介先物<br/>6: 仲介元付<br/>7: 仲介
  'studentRestrictionCode': [null], // [Number] | 学生専用区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'genderRestrictionCode': [null], // [Number] | 性別入居条件区分<br/>1: 不問<br/>2: 女性限定<br/>3: 男性限定<br/>4: 女性希望<br/>5: 男性希望
  'kidsRestrictionCode': [null], // [Number] | 子供可入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'onePersonRestrictionCode': [null], // [Number] | 単身可入居条件<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'twoPersonsRestrictionCode': [null], // [Number] | 二人入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'elderRestrictionCode': [null], // [Number] | 高齢者入居条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望<br/>6: 歓迎
  'manageCostFreeCode': [null], // [Number] | 管理費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'serviceFeeFreeCode': [null], // [Number] | 共益費無し区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'miscExpenseFreeCode': [null], // [Number] | 雑費なし区分<br/>0: 未入力<br/>1: 有<br/>2: 無<br/>3: 実費
  'otherInitialCostFreeFlag': true, // Boolean | その他初期費用無しフラグ
  'petRestrictionCode': [null], // [Number] | ペット可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'officeUsageRestrictionCode': [null], // [Number] | 事務所利用条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'corporateContractRestrictionCode': [null], // [Number] | 法人可条件区分<br/>1: 不可<br/>2: 可<br/>3: 相談<br/>4: 限定<br/>5: 希望
  'musicalInstrumentRestrictionCode': [null], // [Number] | 楽器等の使用区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'restaurantUsageRestrictionCode': [null], // [Number] | 飲食店可区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'roomSharingRestrictionCode': [null], // [Number] | ルームシェア区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignerRestrictionCode': [null], // [Number] | 外国人入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'friendsRestrictionCode': [null], // [Number] | 友人同士入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'foreignStudentRestrictionCode': [null], // [Number] | 留学生入居区分<br/>1: 不可<br/>2: 可<br/>3: 相談
  'parkingAvailabilityCode': [null], // [Number] | 駐車場の状況区分<br/>1: 無<br/>2: 有(敷地内)<br/>3: 付<br/>4: 近隣駐車場<br/>5: 空無<br/>6: 要問合せ
  'gasCode': [null], // [Number] | ガス区分<br/>1: 都市ガス<br/>2: プロパン<br/>3: 共同<br/>4: その他
  'initialCostCode': [null], // [Number] | 初期費用区分<br/>1: 五万円以下<br/>2: 十万円以下<br/>3: 十五万円以下<br/>4: 二十万円以下<br/>5: 三十万円以下<br/>99: その他
  'guarantorRequirementsCode': [null], // [Number] | 保証人要否区分<br/>1: 要<br/>2: 不要<br/>3: 未入力
  'hasInsurance': true, // Boolean | 損保 有無フラグ
  'depositForStudentCode': [null], // [Number] | 学生敷金区分<br/>1: 不要<br/>2: 一ヶ月<br/>3: 二ヶ月
  'itJusetsuFlag': true, // Boolean | IT重説可フラグ
  'noGuarantorFlag': true, // Boolean | 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。
  'isTokuyuchin': true, // Boolean | 特優賃フラグ
  'freeRentFlag': true, // Boolean | フリーレントフラグ
  'managerFlag': true, // Boolean | 管理人有り
  'hasMotorbikeParking': true, // Boolean | バイク置場有フラグ
  'hasBikeParking': true, // Boolean | 駐輪場有フラグ
  'panoramaFlag': true, // Boolean | パノラマ画像付きフラグ
  'floorPlanFlag': true, // Boolean | 間取り図付きフラグ
  'hasExteriorImage': true, // Boolean | 外観画像付きフラグ
  'b2bCustomFlag': true, // Boolean | 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ）
  'isFurnished': true, // Boolean | 家具付きフラグ
  'hasAppliances': true, // Boolean | 家電付きフラグ
  'isNetFree': true, // Boolean | インターネット無料フラグ
  'isOver2f': true, // Boolean | 2階以上フラグ
  'isBathToiletSeparate': true, // Boolean | 風呂トイレ別フラグ
  'hasAircon': true, // Boolean | エアコン付きフラグ
  'hasAutoLock': true, // Boolean | オートロック付きフラグ
  'hasDeliveryBox': true, // Boolean | 宅配ボックス付きフラグ
  'hasElevator': true, // Boolean | エレベーター付きフラグ
  'hasLandryRoom': true, // Boolean | 室内洗濯機置き場フラグ
  'isFlooring': true, // Boolean | フローリングフラグ
  'isDesignersApartment': true, // Boolean | デザイナーズマンションフラグ
  'isBarrierFree': true, // Boolean | バリアフリーフラグ
  'isSouthFacing': true, // Boolean | 南向きフラグ
  'isHighestFloor': true, // Boolean | 最上階フラグ
  'isCornerRoom': true, // Boolean | 角部屋フラグ
  'hasSystemKitchen': true, // Boolean | システムキッチンフラグ
  'hasIhStove': true, // Boolean | IHコンロフラグ
  'hasGasStove': true, // Boolean | ガスコンロフラグ
  'hasMultipleGasStove': true, // Boolean | ガスコンロ２口以上フラグ
  'hasReboilBath': true, // Boolean | 追い焚き機能付きフラグ
  'hasWashlet': true, // Boolean | 温水洗浄便座フラグ
  'hasBathDryer': true, // Boolean | 浴室乾燥機付きフラグ
  'hasFloorHeating': true, // Boolean | 床暖房フラグ
  'hasCloset': true, // Boolean | クローゼットフラグ
  'hasWalkInCloset': true, // Boolean | ウォークインクローゼットフラグ
  'hasCatv': true, // Boolean | CATVフラグ
  'hasCs': true, // Boolean | CSアンテナフラグ
  'hasBs': true, // Boolean | BSアンテナフラグ
  'hasOpticalFiber': true, // Boolean | 光ファイバーフラグ
  'isAllElectric': true, // Boolean | オール電化フラグ
  'hasVerandaBalcony': true, // Boolean | ベランダ・バルコニー付きフラグ
  'isMaisonette': true, // Boolean | メゾネット
  'hasLoft': true, // Boolean | ロフト付き
  'hasSoundproof': true, // Boolean | 防音設備付き
  'hasCounterKitchen': true, // Boolean | カウンターキッチン付き
  'hasGarbageCollectionSite': true, // Boolean | 敷地内ゴミ置場有り
  'hasOwnYard': true, // Boolean | 専用庭付き
  'isQuakeResistantStructure': true, // Boolean | 耐震構造
  'isQuakeAbsorbingStructure': true, // Boolean | 免震構造
  'isDampingStructure': true, // Boolean | 制震構造
  'hasTvIntercom': true, // Boolean | TVインターホン付き
  'hasSecurityCamera': true, // Boolean | 防犯カメラ付き
  'isInternetAvailable': true, // Boolean | インターネット使用可
  'hasTrunkRoom': true, // Boolean | トランクルーム付き
  'isCondominium': true, // Boolean | 分譲賃貸
  'isTowerApartment': true, // Boolean | タワーマンション
  'isRenovated': true, // Boolean | リノベーション
  'hasWashroom': true, // Boolean | 洗面所独立
  'buildingAgeFrom': 56, // Number | 建築年数検索区間
  'buildingAgeTo': 56, // Number | 建築年数検索区間
  'priceFrom': 56, // Number | 現賃貸料検索区間
  'priceTo': 56, // Number | 現賃貸料検索区間
  'manageCostYenFrom': 56, // Number | 管理費（円）検索区間
  'manageCostYenTo': 56, // Number | 管理費（円）検索区間
  'depositYenFrom': 56, // Number | 敷金/保証金（円）検索区間
  'depositYenTo': 56, // Number | 敷金/保証金（円）検索区間
  'depositMonthFrom': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'depositMonthTo': 3.4, // Number | 敷金/保証金（ヶ月）検索区間
  'keyMoneyYenFrom': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyYenTo': 56, // Number | 礼金/権利金（円）検索区間
  'keyMoneyMonthFrom': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'keyMoneyMonthTo': 3.4, // Number | 礼金/権利金（ヶ月）検索区間
  'repairCostYenFrom': 56, // Number | 敷引/償却（円）検索区間
  'repairCostYenTo': 56, // Number | 敷引/償却（円）検索区間
  'repairCostMonthFrom': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'repairCostMonthTo': 3.4, // Number | 敷引/償却（ヶ月）検索区間
  'initialCostFrom': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'initialCostTo': 56, // Number | 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。
  'monthlyCostSummaryFrom': 56, // Number | 管理費など込み賃料検索区間
  'monthlyCostSummaryTo': 56, // Number | 管理費など込み賃料検索区間
  'advertisingFeePercentTo': 3.4, // Number | 広告料（パーセント）検索区間
  'advertisingFeePercentFrom': 3.4, // Number | 広告料（パーセント）検索区間
  'areaFrom': 3.4, // Number | 専有面積検索区間
  'areaTo': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaFrom': 3.4, // Number | 専有面積検索区間
  'exclusiveAreaTo': 3.4, // Number | 専有面積検索区間
  'walkFromStationMinutesFrom': 56, // Number | 駅からの徒歩時間
  'walkFromStationMinutesTo': 56, // Number | 駅からの徒歩時間
  'lastUpdateDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'lastUpdateDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'publishedDatetimeTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'priceUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'advertisingFeeUpdateDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される
  'originalPropertyCodeText': "originalPropertyCodeText_example", // String | 自社管理番号
  'buildingGuid': ["null"], // [String] | 建物スペックGUID
  'buildingTypeCode': [null], // [Number] | 建物形式区分<br/>1: マンション<br/>2: リゾートマンション<br/>3: アパート<br/>4: テラスハウス<br/>5: タウンハウス<br/>6: 戸建<br/>7: 土地<br/>8: 店舗<br/>9: 事務所<br/>10: ビル<br/>11: 倉庫<br/>12: 工場<br/>13: トランクルーム<br/>14: 駐車場<br/>15: バイク置き場<br/>16: その他
  'structureCode': [null], // [Number] | 構造区分<br/>1: 木造<br/>2: 軽量鉄骨<br/>3: 鉄筋コンクリート<br/>4: 鉄骨鉄筋コンクリート<br/>5: ALC<br/>6: プレキャストコンクリート<br/>7: 鉄筋ブロック<br/>8: 鉄骨プレ<br/>9: 鉄骨<br/>10: その他
  'siteAreaFrom': 3.4, // Number | 土地面積検索区間
  'siteAreaTo': 3.4, // Number | 土地面積検索区間
  'buildingName': "buildingName_example", // String | 建物名
  'buildingFurigana': "buildingFurigana_example", // String | 建物名フリガナ
  'tagGuid': ["null"], // [String] | タグGUID
  'prefecture': "prefecture_example", // String | 都道府県
  'prefectureCode': [null], // [Number] | 都道府県コード
  'city': ["null"], // [String] | 市区郡
  'cityCode': [null], // [Number] | 市区郡コード
  'town': ["null"], // [String] | 町村
  'jisCode': [null], // [Number] | JISコード
  'address': ["null"], // [String] | 住所
  'lineCode': [null], // [Number] | 沿線コード
  'stationCode': [null], // [Number] | 駅コード
  'customerKey': [null], // [Number] | カスタマーキー
  'ignorePublishStatus': false, // Boolean | 掲載状態を無視するフラグ
  'nameOrCodeText': "nameOrCodeText_example", // String | 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる
  'ignoreNameDisplay': true, // Boolean | 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる
  'query': "query_example", // String | 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) '[{\"building_name\": \"いい生活アパート\", \"price.to\": 700000}, {\"buildinig_name\": \"いい生活ハイツ\", \"walk_from_station_minutes.to\": 10}]'     -> ?query=%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \"%いい生活アパート%\" AND price <= 700000) OR (building_name like \"%いい生活ハイツ%\" AND walk_from_station_minutes <= 10)     
  'order': "order_example", // String | 複数のソート条件を指定したい場合の特殊パラメータ。{.orderを除いたソートパラメータ名}.{asc か desc}を , 区切りで並べて指定すると、その先頭から順にソートが適用される。例: order=property_full_key.desc,layout.asc は、property_full_keyの降順、layoutの昇順でソートされる。このパラメータを個別のソート条件と同時に指定した場合、このパラメータのソート順が先に適用され、その後に個別のソート条件が適用される。
  'propertyFullKeyOrder': new EsApi.Order(), // Order | 物件完全IDソート順
  'propertyClassCodeOrder': new EsApi.Order(), // Order | 募集種別区分コードソート順
  'propertyUseCodeOrder': new EsApi.Order(), // Order | 募集用途区分ソート順
  'propertyTypeCodeOrder': new EsApi.Order(), // Order | 募集種別区分ソート順
  'modifiedOrder': new EsApi.Order(), // Order | 新着ソート順。非推奨のため代わりにlast_update_datetime.orderを使うこと。
  'lastUpdateDatetimeOrder': new EsApi.Order(), // Order | 新着ソート順
  'layoutOrder': new EsApi.Order(), // Order | 間取りソート順
  'buildingAgeOrder': new EsApi.Order(), // Order | 築年月ソート順
  'stationOrder': new EsApi.Order(), // Order | 駅ソート順
  'stationNameOrder': new EsApi.Order(), // Order | 駅名ソート順
  'lineOrder': new EsApi.Order(), // Order | 沿線ソート順
  'lineNameOrder': new EsApi.Order(), // Order | 沿線名ソート順
  'walkFromStationMinutesOrder': new EsApi.Order(), // Order | 駅徒歩時間ソート順
  'addressOrder': new EsApi.Order(), // Order | 住所コードソート順
  'searchAreaOrder': new EsApi.Order(), // Order | 面積ソート順
  'exclusiveAreaOrder': new EsApi.Order(), // Order | 専有面積ソート順
  'buildingNameOrder': new EsApi.Order(), // Order | 建物名ソート順
  'buildingFuriganaOrder': new EsApi.Order(), // Order | 建物名フリガナソート順
  'depositPriceOrder': new EsApi.Order(), // Order | 敷金/保証金（円）ソート順
  'keyMoneyPriceOrder': new EsApi.Order(), // Order | 礼金/権利金（円）ソート順
  'manageCostPriceOrder': new EsApi.Order(), // Order | 管理費/共益費/雑費（円）ソート順
  'advertisingFeePercentOrder': new EsApi.Order(), // Order | 広告料（パーセント）ソート順
  'advertiseFlagOrder': new EsApi.Order(), // Order | 広告可フラグソート順
  'floorNumberOrder': new EsApi.Order(), // Order | 所在階ソート順
  'availableDateOrder': new EsApi.Order(), // Order | 入居可能日ソート順
  'priceOrder': new EsApi.Order(), // Order | 賃料ソート順
  'initialCostOrder': new EsApi.Order(), // Order | 初期費用ソート順
  'monthlyCostSummaryOrder': new EsApi.Order() // Order | 管理費など込み賃料
};
apiInstance.searchRentPropertyByDwellingUnit(opts).then((data) => {
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
 **baitaiCode** | [**RentBaitaiCode**](.md)| 掲載先&lt;br/&gt;103: EsB2B&lt;br/&gt;105: ウェブサイト | [optional] 
 **propertyFullKey** | [**[String]**](String.md)| 物件完全ID | [optional] 
 **propertyUseCode** | [**[Number]**](Number.md)| 募集用途区分&lt;br/&gt;1: 居住用&lt;br/&gt;2: 事業用&lt;br/&gt;3: 投資用 | [optional] 
 **propertyTypeCode** | [**[Number]**](Number.md)| 募集種別区分&lt;br/&gt;101: マンション&lt;br/&gt;102: リゾートマンション&lt;br/&gt;103: アパート&lt;br/&gt;104: コーポ&lt;br/&gt;105: テラスハウス&lt;br/&gt;106: タウンハウス&lt;br/&gt;107: 戸建&lt;br/&gt;108: 土地&lt;br/&gt;109: 借地権譲渡&lt;br/&gt;110: 底地権譲渡&lt;br/&gt;111: 店舗&lt;br/&gt;112: 店舗事務所&lt;br/&gt;113: 住宅付店舗&lt;br/&gt;114: 事務所&lt;br/&gt;115: ビル&lt;br/&gt;116: 倉庫&lt;br/&gt;117: 工場&lt;br/&gt;118: トランクルーム&lt;br/&gt;119: 駐車場&lt;br/&gt;120: バイク置き場&lt;br/&gt;121: その他&lt;br/&gt;122: 間借り | [optional] 
 **newUsedCode** | **Number**| 新築・中古区分&lt;br/&gt;1: 新築&lt;br/&gt;2: 中古 | [optional] 
 **residenceRentPeriodCode** | **Number**| 居住用契約区分&lt;br/&gt;1: 普通借家契約&lt;br/&gt;2: 定期借家契約 | [optional] 
 **layoutText** | [**[String]**](String.md)| 間取りテキスト | [optional] 
 **layoutTypeCode** | [**[Number]**](Number.md)| 間取りタイプ&lt;br/&gt;1: R&lt;br/&gt;2: K&lt;br/&gt;3: DK&lt;br/&gt;4: SDK&lt;br/&gt;5: LDK&lt;br/&gt;6: SLDK&lt;br/&gt;7: LK&lt;br/&gt;8: SK&lt;br/&gt;9: SLK | [optional] 
 **isLargerThan5k** | **Boolean**| 間取り5K以上。非推奨のため代わりにlayout_codeを使うこと。 | [optional] 
 **layoutCode** | [**[Number]**](Number.md)| 間取り区分&lt;br/&gt;1: 1R&lt;br/&gt;2: 1K&lt;br/&gt;3: 1DK&lt;br/&gt;4: 1LDK&lt;br/&gt;5: 2K&lt;br/&gt;6: 2DK&lt;br/&gt;7: 2LDK&lt;br/&gt;8: 3K&lt;br/&gt;9: 3DK&lt;br/&gt;10: 3LDK&lt;br/&gt;11: 4K&lt;br/&gt;12: 4DK&lt;br/&gt;13: 4LDK&lt;br/&gt;14: 5K以上 | [optional] 
 **isNowAvailable** | **Boolean**| 即入居可フラグ (入居可能区分が即時 or 入居可能日が過去日) | [optional] 
 **availableCode** | [**[Number]**](Number.md)| 入居可能区分&lt;br/&gt;1: 即時&lt;br/&gt;2: 相談&lt;br/&gt;3: 期日指定&lt;br/&gt;4: 予定 | [optional] 
 **rentTransactionFormCode** | [**[Number]**](Number.md)| 賃貸取引態様区分&lt;br/&gt;1: 貸主&lt;br/&gt;2: 代理&lt;br/&gt;3: 仲介元付(専任)&lt;br/&gt;4: 仲介元付(一般)&lt;br/&gt;5: 仲介先物&lt;br/&gt;6: 仲介元付&lt;br/&gt;7: 仲介 | [optional] 
 **studentRestrictionCode** | [**[Number]**](Number.md)| 学生専用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **genderRestrictionCode** | [**[Number]**](Number.md)| 性別入居条件区分&lt;br/&gt;1: 不問&lt;br/&gt;2: 女性限定&lt;br/&gt;3: 男性限定&lt;br/&gt;4: 女性希望&lt;br/&gt;5: 男性希望 | [optional] 
 **kidsRestrictionCode** | [**[Number]**](Number.md)| 子供可入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **onePersonRestrictionCode** | [**[Number]**](Number.md)| 単身可入居条件&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **twoPersonsRestrictionCode** | [**[Number]**](Number.md)| 二人入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **elderRestrictionCode** | [**[Number]**](Number.md)| 高齢者入居条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望&lt;br/&gt;6: 歓迎 | [optional] 
 **manageCostFreeCode** | [**[Number]**](Number.md)| 管理費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **serviceFeeFreeCode** | [**[Number]**](Number.md)| 共益費無し区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **miscExpenseFreeCode** | [**[Number]**](Number.md)| 雑費なし区分&lt;br/&gt;0: 未入力&lt;br/&gt;1: 有&lt;br/&gt;2: 無&lt;br/&gt;3: 実費 | [optional] 
 **otherInitialCostFreeFlag** | **Boolean**| その他初期費用無しフラグ | [optional] 
 **petRestrictionCode** | [**[Number]**](Number.md)| ペット可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **officeUsageRestrictionCode** | [**[Number]**](Number.md)| 事務所利用条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **corporateContractRestrictionCode** | [**[Number]**](Number.md)| 法人可条件区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談&lt;br/&gt;4: 限定&lt;br/&gt;5: 希望 | [optional] 
 **musicalInstrumentRestrictionCode** | [**[Number]**](Number.md)| 楽器等の使用区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **restaurantUsageRestrictionCode** | [**[Number]**](Number.md)| 飲食店可区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **roomSharingRestrictionCode** | [**[Number]**](Number.md)| ルームシェア区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignerRestrictionCode** | [**[Number]**](Number.md)| 外国人入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **friendsRestrictionCode** | [**[Number]**](Number.md)| 友人同士入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **foreignStudentRestrictionCode** | [**[Number]**](Number.md)| 留学生入居区分&lt;br/&gt;1: 不可&lt;br/&gt;2: 可&lt;br/&gt;3: 相談 | [optional] 
 **parkingAvailabilityCode** | [**[Number]**](Number.md)| 駐車場の状況区分&lt;br/&gt;1: 無&lt;br/&gt;2: 有(敷地内)&lt;br/&gt;3: 付&lt;br/&gt;4: 近隣駐車場&lt;br/&gt;5: 空無&lt;br/&gt;6: 要問合せ | [optional] 
 **gasCode** | [**[Number]**](Number.md)| ガス区分&lt;br/&gt;1: 都市ガス&lt;br/&gt;2: プロパン&lt;br/&gt;3: 共同&lt;br/&gt;4: その他 | [optional] 
 **initialCostCode** | [**[Number]**](Number.md)| 初期費用区分&lt;br/&gt;1: 五万円以下&lt;br/&gt;2: 十万円以下&lt;br/&gt;3: 十五万円以下&lt;br/&gt;4: 二十万円以下&lt;br/&gt;5: 三十万円以下&lt;br/&gt;99: その他 | [optional] 
 **guarantorRequirementsCode** | [**[Number]**](Number.md)| 保証人要否区分&lt;br/&gt;1: 要&lt;br/&gt;2: 不要&lt;br/&gt;3: 未入力 | [optional] 
 **hasInsurance** | **Boolean**| 損保 有無フラグ | [optional] 
 **depositForStudentCode** | [**[Number]**](Number.md)| 学生敷金区分&lt;br/&gt;1: 不要&lt;br/&gt;2: 一ヶ月&lt;br/&gt;3: 二ヶ月 | [optional] 
 **itJusetsuFlag** | **Boolean**| IT重説可フラグ | [optional] 
 **noGuarantorFlag** | **Boolean**| 保証人の有無フラグ。非推奨のため代わりにguarantor_requirements_codeを使うこと。 | [optional] 
 **isTokuyuchin** | **Boolean**| 特優賃フラグ | [optional] 
 **freeRentFlag** | **Boolean**| フリーレントフラグ | [optional] 
 **managerFlag** | **Boolean**| 管理人有り | [optional] 
 **hasMotorbikeParking** | **Boolean**| バイク置場有フラグ | [optional] 
 **hasBikeParking** | **Boolean**| 駐輪場有フラグ | [optional] 
 **panoramaFlag** | **Boolean**| パノラマ画像付きフラグ | [optional] 
 **floorPlanFlag** | **Boolean**| 間取り図付きフラグ | [optional] 
 **hasExteriorImage** | **Boolean**| 外観画像付きフラグ | [optional] 
 **b2bCustomFlag** | **Boolean**| 業者間用カスタムフラグ（ES-B2B賃貸クローズアップ物件掲載フラグ） | [optional] 
 **isFurnished** | **Boolean**| 家具付きフラグ | [optional] 
 **hasAppliances** | **Boolean**| 家電付きフラグ | [optional] 
 **isNetFree** | **Boolean**| インターネット無料フラグ | [optional] 
 **isOver2f** | **Boolean**| 2階以上フラグ | [optional] 
 **isBathToiletSeparate** | **Boolean**| 風呂トイレ別フラグ | [optional] 
 **hasAircon** | **Boolean**| エアコン付きフラグ | [optional] 
 **hasAutoLock** | **Boolean**| オートロック付きフラグ | [optional] 
 **hasDeliveryBox** | **Boolean**| 宅配ボックス付きフラグ | [optional] 
 **hasElevator** | **Boolean**| エレベーター付きフラグ | [optional] 
 **hasLandryRoom** | **Boolean**| 室内洗濯機置き場フラグ | [optional] 
 **isFlooring** | **Boolean**| フローリングフラグ | [optional] 
 **isDesignersApartment** | **Boolean**| デザイナーズマンションフラグ | [optional] 
 **isBarrierFree** | **Boolean**| バリアフリーフラグ | [optional] 
 **isSouthFacing** | **Boolean**| 南向きフラグ | [optional] 
 **isHighestFloor** | **Boolean**| 最上階フラグ | [optional] 
 **isCornerRoom** | **Boolean**| 角部屋フラグ | [optional] 
 **hasSystemKitchen** | **Boolean**| システムキッチンフラグ | [optional] 
 **hasIhStove** | **Boolean**| IHコンロフラグ | [optional] 
 **hasGasStove** | **Boolean**| ガスコンロフラグ | [optional] 
 **hasMultipleGasStove** | **Boolean**| ガスコンロ２口以上フラグ | [optional] 
 **hasReboilBath** | **Boolean**| 追い焚き機能付きフラグ | [optional] 
 **hasWashlet** | **Boolean**| 温水洗浄便座フラグ | [optional] 
 **hasBathDryer** | **Boolean**| 浴室乾燥機付きフラグ | [optional] 
 **hasFloorHeating** | **Boolean**| 床暖房フラグ | [optional] 
 **hasCloset** | **Boolean**| クローゼットフラグ | [optional] 
 **hasWalkInCloset** | **Boolean**| ウォークインクローゼットフラグ | [optional] 
 **hasCatv** | **Boolean**| CATVフラグ | [optional] 
 **hasCs** | **Boolean**| CSアンテナフラグ | [optional] 
 **hasBs** | **Boolean**| BSアンテナフラグ | [optional] 
 **hasOpticalFiber** | **Boolean**| 光ファイバーフラグ | [optional] 
 **isAllElectric** | **Boolean**| オール電化フラグ | [optional] 
 **hasVerandaBalcony** | **Boolean**| ベランダ・バルコニー付きフラグ | [optional] 
 **isMaisonette** | **Boolean**| メゾネット | [optional] 
 **hasLoft** | **Boolean**| ロフト付き | [optional] 
 **hasSoundproof** | **Boolean**| 防音設備付き | [optional] 
 **hasCounterKitchen** | **Boolean**| カウンターキッチン付き | [optional] 
 **hasGarbageCollectionSite** | **Boolean**| 敷地内ゴミ置場有り | [optional] 
 **hasOwnYard** | **Boolean**| 専用庭付き | [optional] 
 **isQuakeResistantStructure** | **Boolean**| 耐震構造 | [optional] 
 **isQuakeAbsorbingStructure** | **Boolean**| 免震構造 | [optional] 
 **isDampingStructure** | **Boolean**| 制震構造 | [optional] 
 **hasTvIntercom** | **Boolean**| TVインターホン付き | [optional] 
 **hasSecurityCamera** | **Boolean**| 防犯カメラ付き | [optional] 
 **isInternetAvailable** | **Boolean**| インターネット使用可 | [optional] 
 **hasTrunkRoom** | **Boolean**| トランクルーム付き | [optional] 
 **isCondominium** | **Boolean**| 分譲賃貸 | [optional] 
 **isTowerApartment** | **Boolean**| タワーマンション | [optional] 
 **isRenovated** | **Boolean**| リノベーション | [optional] 
 **hasWashroom** | **Boolean**| 洗面所独立 | [optional] 
 **buildingAgeFrom** | **Number**| 建築年数検索区間 | [optional] 
 **buildingAgeTo** | **Number**| 建築年数検索区間 | [optional] 
 **priceFrom** | **Number**| 現賃貸料検索区間 | [optional] 
 **priceTo** | **Number**| 現賃貸料検索区間 | [optional] 
 **manageCostYenFrom** | **Number**| 管理費（円）検索区間 | [optional] 
 **manageCostYenTo** | **Number**| 管理費（円）検索区間 | [optional] 
 **depositYenFrom** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositYenTo** | **Number**| 敷金/保証金（円）検索区間 | [optional] 
 **depositMonthFrom** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **depositMonthTo** | **Number**| 敷金/保証金（ヶ月）検索区間 | [optional] 
 **keyMoneyYenFrom** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyYenTo** | **Number**| 礼金/権利金（円）検索区間 | [optional] 
 **keyMoneyMonthFrom** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **keyMoneyMonthTo** | **Number**| 礼金/権利金（ヶ月）検索区間 | [optional] 
 **repairCostYenFrom** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostYenTo** | **Number**| 敷引/償却（円）検索区間 | [optional] 
 **repairCostMonthFrom** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **repairCostMonthTo** | **Number**| 敷引/償却（ヶ月）検索区間 | [optional] 
 **initialCostFrom** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **initialCostTo** | **Number**| 初期費用検索区間。非推奨のため代わりにinitial_cost_codeを使うこと。 | [optional] 
 **monthlyCostSummaryFrom** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **monthlyCostSummaryTo** | **Number**| 管理費など込み賃料検索区間 | [optional] 
 **advertisingFeePercentTo** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **advertisingFeePercentFrom** | **Number**| 広告料（パーセント）検索区間 | [optional] 
 **areaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **areaTo** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaFrom** | **Number**| 専有面積検索区間 | [optional] 
 **exclusiveAreaTo** | **Number**| 専有面積検索区間 | [optional] 
 **walkFromStationMinutesFrom** | **Number**| 駅からの徒歩時間 | [optional] 
 **walkFromStationMinutesTo** | **Number**| 駅からの徒歩時間 | [optional] 
 **lastUpdateDatetimeFrom** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **lastUpdateDatetimeTo** | **Date**| 情報更新日検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeFrom** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **publishedDatetimeTo** | **Date**| 公開日時検索区間。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateFrom** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **priceUpdateDateTo** | **Date**| 現賃料更新日検索区間。検索対象は賃料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateFrom** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **advertisingFeeUpdateDateTo** | **Date**| 広告料更新日検索区間。検索対象は広告料更新日が公開日時以降のものに限られる。timezoneを明示しない場合はUTCとして解釈される | [optional] 
 **originalPropertyCodeText** | **String**| 自社管理番号 | [optional] 
 **buildingGuid** | [**[String]**](String.md)| 建物スペックGUID | [optional] 
 **buildingTypeCode** | [**[Number]**](Number.md)| 建物形式区分&lt;br/&gt;1: マンション&lt;br/&gt;2: リゾートマンション&lt;br/&gt;3: アパート&lt;br/&gt;4: テラスハウス&lt;br/&gt;5: タウンハウス&lt;br/&gt;6: 戸建&lt;br/&gt;7: 土地&lt;br/&gt;8: 店舗&lt;br/&gt;9: 事務所&lt;br/&gt;10: ビル&lt;br/&gt;11: 倉庫&lt;br/&gt;12: 工場&lt;br/&gt;13: トランクルーム&lt;br/&gt;14: 駐車場&lt;br/&gt;15: バイク置き場&lt;br/&gt;16: その他 | [optional] 
 **structureCode** | [**[Number]**](Number.md)| 構造区分&lt;br/&gt;1: 木造&lt;br/&gt;2: 軽量鉄骨&lt;br/&gt;3: 鉄筋コンクリート&lt;br/&gt;4: 鉄骨鉄筋コンクリート&lt;br/&gt;5: ALC&lt;br/&gt;6: プレキャストコンクリート&lt;br/&gt;7: 鉄筋ブロック&lt;br/&gt;8: 鉄骨プレ&lt;br/&gt;9: 鉄骨&lt;br/&gt;10: その他 | [optional] 
 **siteAreaFrom** | **Number**| 土地面積検索区間 | [optional] 
 **siteAreaTo** | **Number**| 土地面積検索区間 | [optional] 
 **buildingName** | **String**| 建物名 | [optional] 
 **buildingFurigana** | **String**| 建物名フリガナ | [optional] 
 **tagGuid** | [**[String]**](String.md)| タグGUID | [optional] 
 **prefecture** | **String**| 都道府県 | [optional] 
 **prefectureCode** | [**[Number]**](Number.md)| 都道府県コード | [optional] 
 **city** | [**[String]**](String.md)| 市区郡 | [optional] 
 **cityCode** | [**[Number]**](Number.md)| 市区郡コード | [optional] 
 **town** | [**[String]**](String.md)| 町村 | [optional] 
 **jisCode** | [**[Number]**](Number.md)| JISコード | [optional] 
 **address** | [**[String]**](String.md)| 住所 | [optional] 
 **lineCode** | [**[Number]**](Number.md)| 沿線コード | [optional] 
 **stationCode** | [**[Number]**](Number.md)| 駅コード | [optional] 
 **customerKey** | [**[Number]**](Number.md)| カスタマーキー | [optional] 
 **ignorePublishStatus** | **Boolean**| 掲載状態を無視するフラグ | [optional] [default to false]
 **nameOrCodeText** | **String**| 建物名/物件名フリガナ/自社管理番号のいずれかにマッチするものを対象とする。建物名表示フラグがfalseの物件は自社管理番号のみがマッチング対象となる | [optional] 
 **ignoreNameDisplay** | **Boolean**| 建物名/物件名フリガナでの検索時はデフォルトでは建物名表示フラグがfalseの物件は対象にしない。このフラグを有効化すると表示フラグに関わらず検索対象になる | [optional] 
 **query** | **String**| 詳細検索用特殊パラメータ。検索条件を JSON で記載し、エンコードしたものを     バリューに渡す。          ex) &#39;[{\&quot;building_name\&quot;: \&quot;いい生活アパート\&quot;, \&quot;price.to\&quot;: 700000}, {\&quot;buildinig_name\&quot;: \&quot;いい生活ハイツ\&quot;, \&quot;walk_from_station_minutes.to\&quot;: 10}]&#39;     -&gt; ?query&#x3D;%5B%7B%22building_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%82%A2%E3%83%91%E3%83%BC%E3%83%88%22%2C%20%22price.to%22%3A%20700000%7D%2C%20%7B%22buildinig_name%22%3A%20%22%E3%81%84%E3%81%84%E7%94%9F%E6%B4%BB%E3%83%8F%E3%82%A4%E3%83%84%22%2C%20%22walk_from_station_minutes.to%22%3A%2010%7D%5D          上記の例の場合の絞り込み条件は、抽象的に書き下すと次のようになる。          (building_name like \&quot;%いい生活アパート%\&quot; AND price &lt;&#x3D; 700000) OR (building_name like \&quot;%いい生活ハイツ%\&quot; AND walk_from_station_minutes &lt;&#x3D; 10)      | [optional] 
 **order** | **String**| 複数のソート条件を指定したい場合の特殊パラメータ。{.orderを除いたソートパラメータ名}.{asc か desc}を , 区切りで並べて指定すると、その先頭から順にソートが適用される。例: order&#x3D;property_full_key.desc,layout.asc は、property_full_keyの降順、layoutの昇順でソートされる。このパラメータを個別のソート条件と同時に指定した場合、このパラメータのソート順が先に適用され、その後に個別のソート条件が適用される。 | [optional] 
 **propertyFullKeyOrder** | [**Order**](.md)| 物件完全IDソート順 | [optional] 
 **propertyClassCodeOrder** | [**Order**](.md)| 募集種別区分コードソート順 | [optional] 
 **propertyUseCodeOrder** | [**Order**](.md)| 募集用途区分ソート順 | [optional] 
 **propertyTypeCodeOrder** | [**Order**](.md)| 募集種別区分ソート順 | [optional] 
 **modifiedOrder** | [**Order**](.md)| 新着ソート順。非推奨のため代わりにlast_update_datetime.orderを使うこと。 | [optional] 
 **lastUpdateDatetimeOrder** | [**Order**](.md)| 新着ソート順 | [optional] 
 **layoutOrder** | [**Order**](.md)| 間取りソート順 | [optional] 
 **buildingAgeOrder** | [**Order**](.md)| 築年月ソート順 | [optional] 
 **stationOrder** | [**Order**](.md)| 駅ソート順 | [optional] 
 **stationNameOrder** | [**Order**](.md)| 駅名ソート順 | [optional] 
 **lineOrder** | [**Order**](.md)| 沿線ソート順 | [optional] 
 **lineNameOrder** | [**Order**](.md)| 沿線名ソート順 | [optional] 
 **walkFromStationMinutesOrder** | [**Order**](.md)| 駅徒歩時間ソート順 | [optional] 
 **addressOrder** | [**Order**](.md)| 住所コードソート順 | [optional] 
 **searchAreaOrder** | [**Order**](.md)| 面積ソート順 | [optional] 
 **exclusiveAreaOrder** | [**Order**](.md)| 専有面積ソート順 | [optional] 
 **buildingNameOrder** | [**Order**](.md)| 建物名ソート順 | [optional] 
 **buildingFuriganaOrder** | [**Order**](.md)| 建物名フリガナソート順 | [optional] 
 **depositPriceOrder** | [**Order**](.md)| 敷金/保証金（円）ソート順 | [optional] 
 **keyMoneyPriceOrder** | [**Order**](.md)| 礼金/権利金（円）ソート順 | [optional] 
 **manageCostPriceOrder** | [**Order**](.md)| 管理費/共益費/雑費（円）ソート順 | [optional] 
 **advertisingFeePercentOrder** | [**Order**](.md)| 広告料（パーセント）ソート順 | [optional] 
 **advertiseFlagOrder** | [**Order**](.md)| 広告可フラグソート順 | [optional] 
 **floorNumberOrder** | [**Order**](.md)| 所在階ソート順 | [optional] 
 **availableDateOrder** | [**Order**](.md)| 入居可能日ソート順 | [optional] 
 **priceOrder** | [**Order**](.md)| 賃料ソート順 | [optional] 
 **initialCostOrder** | [**Order**](.md)| 初期費用ソート順 | [optional] 
 **monthlyCostSummaryOrder** | [**Order**](.md)| 管理費など込み賃料 | [optional] 

### Return type

[**PropertyList**](PropertyList.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

