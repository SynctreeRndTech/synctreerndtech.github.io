# Crypto

## ● Encrypt

       문자열을 encoding 하여 반환할 때 사용

![](../../img/assets/image%20%2896%29.png)

### ● 예문

![](../../img/assets/image%20%28402%29.png)

![](../../img/assets/image%20%28425%29.png)

![](../../img/assets/image%20%28432%29.png)

### ● 결과

```text
{
  "result": {
    "Encrypt": "TcwbYa3Qq+uHYAgxFrrcPQ=="
  }
}
```

## ● Decrypt

       문자열을 encoding 하여 반환할 때 사용

![](../../img/assets/image%20%28154%29.png)

### ● 예문

![](../../img/assets/image%20%28389%29.png)

![](../../img/assets/image%20%28420%29.png)

![](../../img/assets/image%20%28443%29.png)

### ● 결과

```text
{
  "result": {
    "Decrypt": "synctree"
  }
}
```

## ● 사용가능 method

|                  |                  |                  |               |              |
| :--------------- | :--------------- | :--------------- | :------------ | :----------- |
| **AES-128-CBC**  | **AES-256-CFB8** | **aes-128-cfb1** | **bf-cbc**    | **CAST**     |
| **AES-128-CFB**  | **AES-256-OFB**  | **aes-128-cfb8** | **bf-cfb**    | **CAST-cbc** |
| **AES-128-CFB1** | **BF-CBC**       | **aes-128-ofb**  | **bf-ofb**    | **IDEA**     |
| **AES-128-CFB8** | **BF-CFB**       | **aes-192-cbc**  | **cast5-cbc** | **aes128**   |
| **AES-128-OFB**  | **BF-OFB**       | **aes-192-cfb**  | **cast5-cfb** | **aes192**   |
| **AES-192-CBC**  | **CAST5-CBC**    | **aes-192-cfb1** | **cast5-ofb** | **aes256**   |
| **AES-192-CFB**  | **CAST5-CFB**    | **aes-192-cfb8** | **idea-cbc**  | **bf**       |
| **AES-192-CFB1** | **CAST5-OFB**    | **aes-192-ofb**  | **idea-cfb**  | **blowfish** |
| **AES-192-CFB8** | **IDEA-CBC**     | **aes-256-cbc**  | **idea-ofb**  | **cast**     |
| **AES-192-OFB**  | **IDEA-CFB**     | **aes-256-cfb**  | **AES128**    | **cast-cbc** |
| **AES-256-CBC**  | **IDEA-OFB**     | **aes-256-cfb1** | **AES192**    |              |
| **AES-256-CFB**  | **aes-128-cbc**  | **aes-256-cfb8** | **AES256**    |              |
| **AES-256-CFB1** | **aes-128-cfb**  | **aes-256-ofb**  | **BF**        |              |
