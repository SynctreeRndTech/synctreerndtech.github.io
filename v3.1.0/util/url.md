# Url

## ● Url Encode

       문자열을 encoding 하여 반환할 때 사용

![](../../img/assets/image%20%28175%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/url/url_encode"
    name="프레임 이름"
    width="100%"
    height="800px"
    allow=""
    style="border:0 none"
    sandbox="allow-scripts allow-same-origin">
  iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공 
  ![](../../img/assets/image%20%28460%29.png)

  ![](../../img/assets/image%20%28433%29.png)
</iframe>

### ● 결과

```text
{
  "result": {
    "urlEncode": "https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnews%26sm%3Dtab_jum%26query%3D%25EC%2597%2594%25ED%2584%25B0%25ED%2594%258C"
  }
}
```

## ● Url Decode

        encoding된 문자열을 원래 문자열로 원복할 때 사용

![](../../img/assets/image%20%28117%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/url/url_decode"
    name="프레임 이름"
    width="100%"
    height="800px"
    allow=""
    style="border:0 none"
    sandbox="allow-scripts allow-same-origin">
  iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공 
  ![](../../img/assets/image%20%28414%29.png)

  ![](../../img/assets/image%20%28413%29.png)
</iframe>

### ● 결과

```text
{
  "result": {
    "urlEncode": "https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnews%26sm%3Dtab_jum%26query%3D%25EC%2597%2594%25ED%2584%25B0%25ED%2594%258C",
    "urlDecode": "https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%97%94%ED%84%B0%ED%94%8C"
  }
}
```
