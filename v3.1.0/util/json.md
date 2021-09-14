# Json

## ● Json Encode

         입력된 데이터를 JSON 형태로 변환할 때 사용

![](../../img/assets/image%20%2869%29.png)

### ● 예문

![](../../img/assets/image%20%28394%29.png)

![](../../img/assets/image%20%28436%29.png)

![](../../img/assets/image%20%28388%29.png)

### ● 결과

```text
{
  "result": {
    "jsonEncode": "{\"test1\":\"test1\",\"test2\":\"test2\"}"
  }
}
```

## ● Json Decode

        JSON형태의 데이터를 decode된 데이터로 변환할 때 사용

![](../../img/assets/image%20%28182%29.png)

### ● 예문

![](../../img/assets/image%20%28386%29.png)

![](../../img/assets/image%20%28461%29.png)

![](../../img/assets/image%20%28391%29.png)

### ● 결과

```text
{
  "result": {
    "jsonDecode": {
      "test1": "test1",
      "test2": "test2"
    }
  }
}
```

## ● Encode Option

        인코딩 옵션 \(PHP 기반\)

![type : UNESCAPED_UNICOE, UNESCAPED_SALSHES, FORCE_OBJECT, MUMERIC_CHECK, PRESERVE_ZERO_FRACTION](../../img/assets/image%20%28153%29.png)

## ● Decode Option

        디코딩 옵션 \(PHP 기반\)

![type : OBJECT_AS_ARRY, BIGINT_AS_STRING](../../img/assets/image%20%2864%29.png)
