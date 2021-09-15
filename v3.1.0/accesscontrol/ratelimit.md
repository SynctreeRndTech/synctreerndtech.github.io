# RateLimit

## ● RateLimit

        요청 한도 제어

![](../../img/assets/image%20%28220%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/accesscontrol/access_control"
    name="프레임 이름"
    width="100%"
    height="800px"
    allow=""
    style="border:0 none"
    sandbox="allow-scripts allow-same-origin">
  iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공 
  ![](../../img/assets/image%20%28416%29.png)

  ![](../../img/assets/image%20%28418%29.png)

  ![](../../img/assets/image%20%28411%29.png)
</iframe>




### ● 결과

```text
{{
  "errMsg": {
    "name": "LimitExceededException",
    "message": "Rate limit exceeded",
    "data": {
      "limit": 2,
      "remaining": 0,
      "reset": 4
    }
  }
}
```
