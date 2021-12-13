## Json

### ● Json Encode

        Used to convert input data into JSON format

![](../../../img/assets/image%20%2869%29.png)

#### ● Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/json/json_encode"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/json_encode_example.png" alt="" /></p>
</div>

#### ● Result

```text
{
  "result": {
    "jsonEncode": "{\"val1\":\"val1\",\"val2\":\"val2\"}"
  }
}
```

### ● Json Decode

        Used to convert JSON-formatted data into decoded data.

![](../../../img/assets/image%20%28182%29.png)

#### ● Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/json/json_decode"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/json_decode_example.png" alt="" /></p>
</div>

#### ● Result

```text
{
  "result": {
    "jsonEncode": "{\"val1\":\"val1\",\"val2\":\"val2\"}",
    "jsonDecode": {
      "val1": "val1",
      "val2": "val2"
    }
  }
}
```

### ● Encode Option

        Encoding options (based on PHP)

![type : UNESCAPED_UNICOE, UNESCAPED_SALSHES, FORCE_OBJECT, MUMERIC_CHECK, PRESERVE_ZERO_FRACTION](../../../img/assets/image%20%28153%29.png)

### ● Decode Option

        Decoding options (based on PHP)

![type : OBJECT_AS_ARRY, BIGINT_AS_STRING](../../../img/assets/image%20%2864%29.png)
