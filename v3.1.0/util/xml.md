# Xml

## ● Xml Encode

       입력된 데이터를 XML 형태로 변환할 때 사용

![](../../img/assets/image%20%28204%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/xml/xml_encode"
    name="프레임 이름"
    width="100%"
    height="800px"
    allow=""
    style="border:0 none"
    sandbox="allow-scripts allow-same-origin">
  iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공 
  ![](../../img/assets/image%20%28397%29.png)

  ![](../../img/assets/image%20%28450%29.png)

  ![](../../img/assets/image%20%28390%29.png)
</iframe>

### ● 결과

```text
{
  "result": {
    "xmlEncode": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root><val1>val1</val1><val2>val2</val2></root>\n"
  }
}
```

## ● Xml Decode

        XML형태의 데이터를 decode된 데이터로 변환할 때 사용

![](../../img/assets/image%20%28101%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/xml/xml_decode"
    name="프레임 이름"
    width="100%"
    height="800px"
    allow=""
    style="border:0 none"
    sandbox="allow-scripts allow-same-origin">
  iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공 
  ![](../../img/assets/image%20%28435%29.png)

  ![](../../img/assets/image%20%28439%29.png)

  ![](../../img/assets/image%20%28451%29.png)
</iframe>

### ● 결과

```text
{
  "result": {
    "xmlEncode": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root><val1>val1</val1><val2>val2</val2></root>\n",
    "xmlDecode": {
      "root": {
        "val1": "val1",
        "val2": "val2"
      }
    }
  }
}
```
