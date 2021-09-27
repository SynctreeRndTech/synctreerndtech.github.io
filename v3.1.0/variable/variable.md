## Variable

### ● **Create**

        **** 변수를 선언할 때 사용

![](../../img/assets/image%20%2873%29.png)

### ● **Set to**

        **** 선언된 변수에 값을 셋팅할 때 사용

![](../../img/assets/image%20%2875%29.png)

### ● **Get**

        **** 선언된 변수의 값을 가져올 때 사용

![](../../img/assets/image%20%28157%29.png)

### ● **Fetch**

        Transfer에 대한 ID 값을 가져와서 header와 body의 값을 컨트롤할 때 사용

![](../../img/assets/image%20%28162%29.png)

### ● \***\*Variable **예문\*\*
<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/variable/variable_example"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/image%20%28176%29.png" alt="" /></p>
    <p><img src="../../img/assets/image%20%2866%29.png" alt="" /></p>
    <p><img src="../../img/assets/image%20%2882%29.png" alt="" /></p>
</div>

### ● \***\*Variable **결과\*\*

```text
{
  "result": {
    "reqVal": "Hello SyncTree!",
    "responseOperator": {
      "_id": "2e120f5b4d34c678833c354541a74e10",
      "_rev": 3,
      "name": "helloworld",
      "data": "{\"Commodity_Id\":7,\"Commodity_Code\":\"com-code1\",\"Commodity_Name\":\"com-name1\",\"Commodity_Group_1_Id\":123,\"Commodity_Group_2_Id\":456,\"Commodity_Description\":\"com-desc1\",\"External_Ref\":\"com-extref\",\"Status_Enum\":true,\"Created_By\":999,\"Created_Datetime\":\"2020-11-03T00:00:00\",\"Modified_By\":null,\"Modified_Datetime\":\"1900-01-01T00:00:00\",\"Lock_Id\":888}",
      "updated": "2020-11-03T14:38:39.753Z"
    }
  }
}

// Console
[21.09.16 16:01:14] [INFO] {"request":{"header":{"Content-Type":"application\/json"},"body":{"reqVal":"Hello SyncTree!"}}}
[21.09.16 16:01:14] [INFO] {"request":{"header":[],"body":[]},"response":{"status_code":200,"header":{"Server":["Cowboy"],"Connection":["keep-alive"],"X-Powered-By":["Express"],"Access-Control-Allow-Origin":["*"],"Access-Control-Allow-Headers":["Content-Type, X-Requested-With"],"Access-Control-Allow-Methods":["GET, PUT, DELETE, OPTIONS"],"Content-Type":["application\/json; charset=utf-8"],"Content-Length":["502"],"Etag":["W\/\"1f6-l3Diy2a2dp9GEFi4Bx5Z1jCsll8\""],"Vary":["Accept-Encoding"],"Date":["Thu, 16 Sep 2021 07:01:14 GMT"],"Via":["1.1 vegur"]},"body":{"_id":"2e120f5b4d34c678833c354541a74e10","_rev":3,"name":"helloworld","data":"{\"Commodity_Id\":7,\"Commodity_Code\":\"com-code1\",\"Commodity_Name\":\"com-name1\",\"Commodity_Group_1_Id\":123,\"Commodity_Group_2_Id\":456,\"Commodity_Description\":\"com-desc1\",\"External_Ref\":\"com-extref\",\"Status_Enum\":true,\"Created_By\":999,\"Created_Datetime\":\"2020-11-03T00:00:00\",\"Modified_By\":null,\"Modified_Datetime\":\"1900-01-01T00:00:00\",\"Lock_Id\":888}","updated":"2020-11-03T14:38:39.753Z"}}}
```
