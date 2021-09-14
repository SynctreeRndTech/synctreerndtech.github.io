# RateLimit

## ● RateLimit

        요청 한도 제어

![](../../.gitbook/assets/image%20%28220%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28416%29.png)

![](../../.gitbook/assets/image%20%28418%29.png)

![](../../.gitbook/assets/image%20%28411%29.png)

### ● 결과

```text
{
  "ex": {
    "name": "LimitExceededException",
    "message": "Rate limit exceeded",
    "data": {
      "limit": 20,
      "remaining": 0,
      "reset": 3595
    }
  }
}
```

