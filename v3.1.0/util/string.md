# String

## ● String Concat

        여러개의 String 문자열을 하나로 통합할 때 사용

![](../../.gitbook/assets/image%20%2863%29.png)

        설정버튼을 클릭하여 item을 추가 또는 삭제 가능

![](../../.gitbook/assets/image%20%28190%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28376%29.png)

![](../../.gitbook/assets/image%20%28353%29.png)

![](../../.gitbook/assets/image%20%28338%29.png)

### ● 결과

```text
{
  "result": {
    "concat": "Synctreegood"
  }
}
```

## ● String Index

         문자열에서 찾고자 하는 문자의 위치를 찾을 때 사용

![](../../.gitbook/assets/image%20%28205%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28357%29.png)

![](../../.gitbook/assets/image%20%28369%29.png)

### ● 결과

```text
{
  "result": {
    "index": 9
  }
}
```

## ● String Format

        문자열 포맷팅

![](../../.gitbook/assets/image%20%28210%29.png)

        설정버튼을 클릭하여 item을 추가 또는 삭제 가능

![](../../.gitbook/assets/image%20%2899%29.png)

## ● String Charset Encode

        문자열 인코딩

![](../../.gitbook/assets/image%20%28146%29.png)

## ● String Length

        문자열의 길이를 확인할 때 사용

![](../../.gitbook/assets/image%20%28148%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28347%29.png)

![](../../.gitbook/assets/image%20%28371%29.png)

### ● 결과

```text
{
  "result": {
    "length": 13
  }
}
```

## ● String ToArray

        문자열을 배열로 반환 시 사용

![](../../.gitbook/assets/image%20%28183%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28367%29.png)

![](../../.gitbook/assets/image%20%28375%29.png)

### ● 결과

```text
{
  "result": {
    "string-to-array": [
      "s",
      "y",
      "n",
      "c",
      "t",
      "r",
      "e",
      "e",
      " ",
      "g",
      "o",
      "o",
      "d"
    ]
  }
}
```

## ● String Substring

        문자열의 일부분을 추출할 때 사용

![](../../.gitbook/assets/image%20%28108%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28342%29.png)

![](../../.gitbook/assets/image%20%28328%29.png)

![](../../.gitbook/assets/image%20%28337%29.png)

### ● 결과

```text
{
  "result": {
    "substring": "synctree good!!!"
  }
}
```

## ● String Replace

        문자열에서 특정문자를 다른문자로 변경할 때 사용

![](../../.gitbook/assets/image%20%2879%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28395%29.png)

![](../../.gitbook/assets/image%20%28428%29.png)

![](../../.gitbook/assets/image%20%28406%29.png)

### ● 결과

```text
{
  "result": {
    "replace": "synctree good !!!"
  }
}
```

## ● String Repleace-Regex

        문자열에 정규식 패턴과 일치 하는 문자를 변환할 때 사용

![](../../.gitbook/assets/image%20%28107%29.png)

## ● String Split

        문자열의 특정 문자를 구분으로 문자열을 분할하여 배열로 출력할 때 사용

![](../../.gitbook/assets/image%20%28144%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28352%29.png)

![](../../.gitbook/assets/image%20%28378%29.png)

### ● 결과

```text
{
  "result": {
    "split": [
      "synctree ",
      " good !"
    ]
  }
}
```

## ● String Split-Regex

        문자열 분할\(정규표현식\) 시 사용

![](../../.gitbook/assets/image%20%28218%29.png)

## ● String LTrim

         문자열의 왼쪽  공백을 삭제할 때 사용

![](../../.gitbook/assets/image%20%28158%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28323%29.png)

![](../../.gitbook/assets/image%20%28324%29.png)

### ● 결과

```text
{
  "result": {
    "ltrim": "sd  dssads adsdsa"
  }
}
```

## ● String RTrim

         문자열의 오쪽  공백을 삭제할 때 사용

![](../../.gitbook/assets/image%20%2860%29.png)

### ● 예문

![](../../.gitbook/assets/image%20%28372%29.png)

![](../../.gitbook/assets/image%20%28334%29.png)

### ● 결과

```text
{
  "result": {
    "rtrim": "sa  dasd ssd"
  }
}
```

