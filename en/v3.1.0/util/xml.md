## Xml

### ● Xml Encode

        Used to convert input data into XML format

![](../../img/assets/image%20%28204%29.png)

#### ● Example
<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/xml/xml_encode"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/xml_encode_example.png" alt="" /></p>
</div>

#### ● Result

```text
{
  "result": {
    "xmlEncode": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root><val1>val1</val1><val2>val2</val2></root>\n"
  }
}
```

### ● Xml Decode

        Used to convert XML data into decoded data.

![](../../img/assets/image%20%28101%29.png)

#### ● Example
<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/xml/xml_decode"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../img/assets/xml_decode_example.png" alt="" /></p>
</div>

#### ● Result

```text
{
  "result": {
    "xmlEncode": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root><val1>val1</val1><val2>val2</val2></root>\n",
    "xmlDecode": {
      "root": {
        "val1": "val1",
        "val2": "val2"
      }
    }
  }
}
```
