## Datetime

### ● Datetime

        현재 시간 또는 특정 일자를 생성할 때 사용

![String 입력 : now, 9999-99-99](../../../img/assets/image%20%28142%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28349%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28331%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "datetime": "2021-09-14 15:39:11:505087"
  }
}
```

### ● Datetime Timestamp

        날짜를 초로 환산하여 반환할 때 사용

![](../../../img/assets/image%20%28198%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime_timestamp"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin"/>
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28355%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28332%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "DateTimeTimeStamp": 1631602316
  }
}
```

### ● Datetime Add

        현재 일자에서 값을 증가시킬 때 사용

![](../../../img/assets/image%20%28125%29.png)

         설정 버튼을 클릭하여 item을 추가 또는 삭제 가능

![](../../../img/assets/image%20%28191%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime_add"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin"/>
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28348%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28361%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28358%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "DateTimeAdd": "2024-09-14"
  }
}
```

### ● Datetime Subtract

        현재 일자에서 값을 감소시킬 때 사용

![](../../../img/assets/image%20%28174%29.png)

         설정 버튼을 클릭하여 item을 추가 또는 삭제 가능

![](../../../img/assets/image%20%28132%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime_subtract"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin"/>
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28359%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28345%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28326%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "DateTimeSub": "2018-09-14"
  }
}
```

### ● Datetime Format

        날짜의 표현 형식을 지정할 때 사용 (PHP기반)

![](../../../img/assets/image%20%28141%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime_format"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin"/>
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28325%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28360%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "datetimeFormat": "2021-09-14 16:15:02:155035"
  }
}
```

### ● Datetime Diff

        datetime1에서 datetime2까지의 증가 또는 감소된 값을 연산할 때 사용

![](../../../img/assets/image%20%28213%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime_diff"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin"/>
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28341%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28365%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28351%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "datetimeDiff": "-13 days 10 Hours 2 Minute 18 Seconds"
  }
}
```

### ● Datetime Format-Diff

        Datetime 객체에 Diff Block의 값의 표현 형식을 지정할 때 사용

![](../../../img/assets/image%20%28214%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime_format_diff"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin"/>
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28374%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28354%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28350%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "datetimeDiffFormat": "+13 days 10 Hours 2 Minute 18 Seconds"
  }
}
```

### ● Datetime Offset

        DateTime 객체의 현재 시간을 다른 시간으로 설정할 때 사용

![](../../../img/assets/image%20%28161%29.png)

#### ● 예문

<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/datetime/datetime_offset"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin"/>
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28344%29.png" alt="" /></p>
    <p><img src="../../../img/assets/image%20%28322%29.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "DateTimeOffset": 32400
  }
}
```
