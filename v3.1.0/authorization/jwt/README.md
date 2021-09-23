## JWT

### ● Jwt Token Generate

        JSON Web Token 발급

### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_create"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28266%29.png" alt="" /></p>
</div>

### ● 결과

```text
{
  "result": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzIzNjQ1MzAsImlzcyI6Im50dXBsZSIsInN1YiI6InRlc3Qtand0IiwiYXVkIjpbIm50dXBsZS1jbGllbnQiXSwianRpIjoiand0aWQtbnR1cGxlMDkiLCJrZXktMSI6ImFkZC1jbGFpbS0xIn0.aGlcudp4LttAv6MZIx3NTdum1aDFtl_FOJPfDcOrF58"
}
```

##### * Secret Key 생성

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_secret_key"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
</div>

##### * Secret Key 생성 결과

```text
{
  "result": {
    "hexEncode": "43bdc3c9a506b44fadefd1ae93c3c6e8"
  }
}
```

### ● Jwt Token Verify

        JSON Web Token 인증      

#### ● 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_verify"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/image%20%28314%29.png" alt="" /></p>
</div>

### ● 결과

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

#### ● JWT Client 예문

<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/authorization/jwt_client"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
</div>

### ● 결과

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


