## Helper

### ● Comment

        Used to record comments on a specific block

![](../../../img/assets/image%20%28221%29.png)

### ● Comment statements

        Used when commenting on a specific block

![](../../../img/assets/image%20%28230%29.png)

### ● Code Section

        Used to section code (can be used in various ways, such as organizing code or copying n code blocks at once)

![](../../../img/assets/image%20%28299%29.png)

#### ● Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/helper/helper_comments"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/helper_example.png" alt="" /></p>
</div>

#### ● Result

```text
{
  "result": {
    "message": "Welcome to Synctree!"
  }
}
```

### ● Injection Origin

        Used to overwrite the Header/Body Parameter values ​​of the Request

![](../../../img/assets/image%20%28304%29.png)

#### ● Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/helper/helper_injection_origin"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/helper_injection_origin_example.png" alt="" /></p>
</div>

#### ● Result

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

### ● Dictionary

        After registering the value for each service environment in the dictionary, the value set in the BizUnit logic is called.

![](../../../img/assets/image%20%28293%29.png)

#### ● Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/helper/helper_dictionary"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/helper_dictionary_example.png" alt="" /></p>
</div>

#### ● Result

```text
{
  "result": {
    "currentEnvironment": "dev"
  }
}
```
