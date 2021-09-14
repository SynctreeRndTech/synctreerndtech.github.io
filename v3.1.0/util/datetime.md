# Datetime

## ● Datetime

        현재시간 또는 특정일자를 생성할 때 사용.

![String &#xC785;&#xB825; : now, 9999-99-99](../../.gitbook/assets/image%20%28142%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28349%29.png)

![](../../.gitbook/assets/image%20%28331%29.png)

### ● 결과

```text
{
  "result": {
    "datetime": "2021-02-02 13:00:36"
  }
}
```

## ● Datetime Timestamp

        날짜를 초로 환산하여 반환할 때 사용

![](../../.gitbook/assets/image%20%28198%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28355%29.png)

![](../../.gitbook/assets/image%20%28332%29.png)

### ● 결과

```text
{
  "result": {
    "DateTimeTimeStamp": 1612238141
  }
}
```

## ● Datetime Add

        현재 일자에서 값을 증가 실킬 때 사용

![](../../.gitbook/assets/image%20%28125%29.png)

         설정버튼을 클릭하여 item을 추가 또는 삭제 가능

![](../../.gitbook/assets/image%20%28191%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28348%29.png)

![](../../.gitbook/assets/image%20%28361%29.png)

![](../../.gitbook/assets/image%20%28358%29.png)

### ● 결과

```text
{
  "result": {
    "DateTimeAdd": "2024-02-02"
  }
}
```

## ● Datetime Subtract

        현재 일자에서 값을 감소 실킬 때 사용

![](../../.gitbook/assets/image%20%28174%29.png)

         설정버튼을 클릭하여 item을 추가 또는 삭제 가능

![](../../.gitbook/assets/image%20%28132%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28359%29.png)

![](../../.gitbook/assets/image%20%28345%29.png)

![](../../.gitbook/assets/image%20%28326%29.png)

### ● 결과

```text
{
  "result": {
    "DateTimeSub": "2018-02-02"
  }
}
```

## ● Datetime Format

        날짜의 표현 형식을 지정할 때 사용\(PHP기반\)

![](../../.gitbook/assets/image%20%28141%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28325%29.png)

![](../../.gitbook/assets/image%20%28360%29.png)

### ● 결과

```text
{
  "result": {
    "datetimeFormat": "2021-02-02"
  }
}
```

## ● Datetime Diff

        time1에서 time2까지의 증가 또는 감소된 값을 출력할 때 사용

![](../../.gitbook/assets/image%20%28213%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28341%29.png)

![](../../.gitbook/assets/image%20%28365%29.png)

![](../../.gitbook/assets/image%20%28351%29.png)

### ● 결과

```text
{
  "result": {
    "dateTimeDiff": "-1 days"
  }
}
```

## ● Datetime Format-Diff

        Datetime 객체에 diff Block의 값의 표현 형식을 지정할 때 사용

![](../../.gitbook/assets/image%20%28214%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28374%29.png)

![](../../.gitbook/assets/image%20%28354%29.png)

![](../../.gitbook/assets/image%20%28350%29.png)

### ● 결과

```text
{
  "result": {
    "dateTimeDiffForamt": "-1 days"
  }
}
```

## ● Datetime Offset

        DateTime 객체의 현재 시간을 다른 시간으로 설정할 때 사용  


![](../../.gitbook/assets/image%20%28161%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28344%29.png)

![](../../.gitbook/assets/image%20%28322%29.png)

### ● 결과

```text
{
  "result": {
    "DateTimeOffset": 32400
  }
}\
```

