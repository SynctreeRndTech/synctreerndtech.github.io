## JWT

### ● Jwt Token Generate

        Issue JSON Web Token

### ● Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_create"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../../img/assets/jwt_create_example_1.png" alt="" /></p>
    <p><img src="../../../../img/assets/jwt_create_example_2.png" alt="" /></p>    
</div>

### ● Result

```text
{
  "result": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzIzNjQ1MzAsImlzcyI6Im50dXBsZSIsInN1YiI6InRlc3Qtand0IiwiYXVkIjpbIm50dXBsZS1jbGllbnQiXSwianRpIjoiand0aWQtbnR1cGxlMDkiLCJrZXktMSI6ImFkZC1jbGFpbS0xIn0.aGlcudp4LttAv6MZIx3NTdum1aDFtl_FOJPfDcOrF58"
}
```

##### \* Create Secret Key

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_secret_key"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../../img/assets/jwt_secret_key_example.png" alt="" /></p>
</div>

##### \* Create Secret Key Result

```text
{
  "result": {
    "hexEncode": "43bdc3c9a506b44fadefd1ae93c3c6e8"
  }
}
```

### ● Jwt Token Verify

        JSON Web Token Authentication

#### ● Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_verify"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../../img/assets/jwt_verify_example_1.png" alt="" /></p>
    <p><img src="../../../../img/assets/jwt_verify_example_2.png" alt="" /></p>
</div>

### ● Result

```text
{
  "result": {
    "header": {
      "typ": "JWT",
      "alg": "HS256"
    },
    "payload": {
      "iat": 1632364530,
      "iss": "ntuple",
      "sub": "test-jwt",
      "aud": [
        "ntuple-client"
      ],
      "jti": "jwtid-ntuple09",
      "key-1": "add-claim-1"
    }
  }
}
```

#### ● JWT Client Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_client"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../../img/assets/jwt_client_example_1.png" alt="" /></p>
    <p><img src="../../../../img/assets/jwt_client_example_2.png" alt="" /></p>
    <p><img src="../../../../img/assets/jwt_client_example_3.png" alt="" /></p>
</div>

### ● Result

```text
{
  "result": {
    "request": {
      "header": {
        "Content-Type": "application/json",
        "X-Synctree-Plan-ID": "042a44afeff6ca7f518204c2084781334c07664123a4c26dd619b3c1ee251837",
        "X-Synctree-Plan-Environment": "dev",
        "X-Synctree-Bizunit-Version": "1.0",
        "X-Synctree-Revision-ID": "04633386856fbee8eeb8a646b9fe5fd0d756113dab713c85e2cebbe5fda1e80f",
        "AUTHORIZATION": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzIzNjQ1MzAsImlzcyI6Im50dXBsZSIsInN1YiI6InRlc3Qtand0IiwiYXVkIjpbIm50dXBsZS1jbGllbnQiXSwianRpIjoiand0aWQtbnR1cGxlMDkiLCJrZXktMSI6ImFkZC1jbGFpbS0xIn0.aGlcudp4LttAv6MZIx3NTdum1aDFtl_FOJPfDcOrF58"
      },
      "body": []
    },
    "response": {
      "status_code": 200,
      "header": {
        "Date": [
          "Thu, 23 Sep 2021 03:45:14 GMT"
        ],
        "Content-Type": [
          "application/json; charset=UTF-8"
        ],
        "Transfer-Encoding": [
          "chunked"
        ],
        "Connection": [
          "keep-alive"
        ],
        "Server": [
          "nginx"
        ],
        "Set-Cookie": [
          "PHPSESSID=af75ced373f00cd85470bb1ef9d265ac; path=/"
        ],
        "Expires": [
          "Thu, 19 Nov 1981 08:52:00 GMT"
        ],
        "Cache-Control": [
          "no-store, no-cache, must-revalidate"
        ],
        "Pragma": [
          "no-cache"
        ],
        "X-Synctree-Bizunit-Transaction-Key": [
          "0873846fe0ed04270d42df182aec2631"
        ]
      },
      "body": {
        "result": {
          "header": {
            "typ": "JWT",
            "alg": "HS256"
          },
          "payload": {
            "iat": 1632364530,
            "iss": "ntuple",
            "sub": "test-jwt",
            "aud": [
              "ntuple-client"
            ],
            "jti": "jwtid-ntuple09",
            "key-1": "add-claim-1"
          }
        }
      }
    }
  }
}
```
