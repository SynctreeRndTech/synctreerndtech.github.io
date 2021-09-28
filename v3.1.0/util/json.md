## Json

### ● Json Encode

         입력된 데이터를 JSON 형태로 변환할 때 사용

![](../../img/assets/image%20%2869%29.png)

#### ● 예문
<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/json/json_encode"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/json_encode_example.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "jsonEncode": "{\"val1\":\"val1\",\"val2\":\"val2\"}"
  }
}
```

### ● Json Decode

        JSON 형태의 데이터를 Decode된 데이터로 변환할 때 사용

![](../../img/assets/image%20%28182%29.png)

#### ● 예문
<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/json/json_decode"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/json_decode_example.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "jsonEncode": "{\"val1\":\"val1\",\"val2\":\"val2\"}",
    "jsonDecode": {
      "val1": "val1",
      "val2": "val2"
    }
  }
}
```

### ● Encode Option

        인코딩 옵션 (PHP 기반)

![type : UNESCAPED_UNICOE, UNESCAPED_SALSHES, FORCE_OBJECT, MUMERIC_CHECK, PRESERVE_ZERO_FRACTION](../../img/assets/image%20%28153%29.png)

### ● Decode Option

        디코딩 옵션 (PHP 기반)

![type : OBJECT_AS_ARRY, BIGINT_AS_STRING](../../img/assets/image%20%2864%29.png)
