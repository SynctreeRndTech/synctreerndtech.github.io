# Helper

## ● Comment

        특정 block에 대한 주석을 기록할 때 사용

![](../img/assets/image%20%28221%29.png)

## ● Comment statements

        특정block을 주석 처리 시 사용

![](../img/assets/image%20%28230%29.png)

## ● Code Section

        코드 섹션화. 코드 정리 및 N개 코드블럭 한번에 복사 등 다양하게 활용

![](../img/assets/image%20%28299%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/helper/helper_comments"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../img/assets/image%20%28459%29.png" alt="" /></p>
    <p><img src="../img/assets/image%20%28382%29.png" alt="" /></p>
</div>

### ● 결과

```text
{
  "result": {
    "message": "Welcome to Synctree!"
  }
}
```

## ● Injection Origin

        Request의 Header/Body Parameter 값 덮어쓰기

![](../img/assets/image%20%28304%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/helper/helper_injection_origin"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />

### ● 결과

```text
{
  "result": {
    "request": {
      "header": {
        "X-SYNCTREE-PLAN-ENVIRONMENT": "dev",
        "X-SYNCTREE-REVISION-ID": "d64fcdaa95927264a331a2fe4bb856ec9380cb103e5b4f86bd7f5f796c9c5d55",
        "X-SYNCTREE-BIZUNIT-VERSION": "1.0",
        "X-SYNCTREE-PLAN-ID": "983b3200f0fb97bd8856235fb5a26dea7fb75bd8154314aa8758f4f2777a0a35",
        "X-SYNCTREE-PLAN-TEST-MODE": "bizunit",
        "CLIENTID": "Ntuple",
        "CONTENT-TYPE": "application/json",
        "USER-AGENT": "GuzzleHttp/6.3.1 curl/7.58.0 PHP/7.3.19-1+ubuntu18.04.1+deb.sury.org+1",
        "X-AMZN-TRACE-ID": "Root=1-61419738-3559f9b372168fe32c401880",
        "HOST": "seoul.synctreengine.com:8443",
        "X-FORWARDED-PORT": "8443",
        "X-FORWARDED-PROTO": "https",
        "X-FORWARDED-FOR": "13.209.187.36",
        "CONTENT-LENGTH": "2",
        "INJECTED-VALUE": "Synctree"
      },
      "body": {
        "injection": "Ntuple"
      }
    }
  }
}
```

## ● Dictionary

        사전등록 후, 값 호출

![](../img/assets/image%20%28293%29.png)

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/helper/helper_dictionary"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />

### ● 결과

```text
{
  "result": {
    "currentEnvironment": "dev"
  }
}
```
