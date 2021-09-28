## Hash

### ● Hash

       입력된 데이터를 XML 형태로 변환할 때 사용

![](../../img/assets/image%20%2854%29.png)

#### ● 예문
<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/hash/hash"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/hash_example.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "hashResult": "6fb0522f54422c3b6bc31ca7e9c1d469f19e2a50d50c9e30a1eee2fd397f5761"
  }
}
```

### ● Hash HMAC

        HMAC 값 생성 후 입력한 알고리즘으로 해쉬값을 출력할 때 사용

![](../../img/assets/image%20%2870%29.png)

#### ● 예문
<p class='comment'>Studio Copy&Paste 가능</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/hash/hash_hmac"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/hash_hmac_example.png" alt="" /></p>
</div>

#### ● 결과

```text
{
  "result": {
    "hmacResult": "53626b23aacbc1891e56d5b83cd6977b0881679c3b0295c50aeca339c0d104cc"
  }
}
```

### ● 사용가능 알고리즘

|               |                |                 |                |                |
| :------------ | :------------- | :-------------- | :------------- | :------------- |
| **md2**       | **ripemd256**  | **snefru256**   | **joaat**      | **haval256,5** |
| **md4**       | **ripemd320**  | **gost**        | **haval128,3** | \*\*\*\*       |
| **md5**       | **whirpool**   | **gost-crypto** | **haval160,3** | \*\*\*\*       |
| **sha1**      | **tiger128,3** | **adler32**     | **haval192,3** | \*\*\*\*       |
| **sha224**    | **tiger160,3** | **crc32**       | **haval224,3** | \*\*\*\*       |
| **sha256**    | **tiger192,3** | **crc32b**      | **haval256,3** | \*\*\*\*       |
| **sha384**    | **tiger128,4** | **fnv132**      | **haval128,4** | \*\*\*\*       |
| **sha512**    | **tiger160,4** | **fnv1a32**     | **haval160,4** | \*\*\*\*       |
| **ripemd128** | **tiger192,4** | **fnv164**      | **haval192,4** | \*\*\*\*       |
| **ripemd160** | **snefru**     | **fnv1a64**     | **haval224,4** | \*\*\*\*       |
