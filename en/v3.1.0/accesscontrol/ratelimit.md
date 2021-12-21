## RateLimit

### ● RateLimit

        Limiting request traffic

![](../../../img/assets/image%20%28220%29.png)

#### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/accesscontrol/access_control"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/image%20%28416%29.png" alt="" /></p>
    <p><img src="../../img/assets/image%20%28418%29.png" alt="" /></p>
    <p><img src="../../img/assets/image%20%28411%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
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
