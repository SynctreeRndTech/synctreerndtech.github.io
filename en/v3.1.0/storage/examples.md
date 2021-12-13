## Deep Into Storage Block

### ● Disable Auto Commit Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/storage/storage_example1"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/storage_example_1_1.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_1_2.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_1_3.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_1_4.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_1_5.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_1_6.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_1_7.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_1_8.png" alt="" /></p>
</div>

### ● Result

```text
{
  "result": {
    "Inserted_Column": 1,
    "Modified_Column": 1,
    "Deleted_Column": 1,
    "Selected_Column": [
      {
        "customer_id": "4635787532",
        "customer_nm": "이파랑",
        "product_id": "ZDF565W4AS",
        "product_nm": "SyncTree",
        "create_dt": "2021-09-17 15:37:19",
        "modify_dt": "2021-09-17 15:39:58"
      },
      {
        "customer_id": "8412631762",
        "customer_nm": "홍길동",
        "product_id": "ZDF565W4AS",
        "product_nm": "SyncTree",
        "create_dt": "2021-09-17 16:30:46",
        "modify_dt": "2021-09-17 16:30:46"
      }
    ]
  }
}
```

### ● save log table Example

<p class='comment'>Studio Copy&Paste Available</p>
<iframe
    src="https://d1sxhpvag16wqc.cloudfront.net/v3.1.0/storage/storage_example2"
    width="100%"
    height="800px"
    allow=""
    sandbox="allow-scripts allow-same-origin" />
<div class="display-pdf">
    <p><img src="../../../img/assets/storage_example_2_1.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_2.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_3.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_4.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_5.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_6.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_7.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_8.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_9.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_10.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_11.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_12.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_13.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_14.png" alt="" /></p>
    <p><img src="../../../img/assets/storage_example_2_15.png" alt="" /></p>
</div>

```text
CREATE TABLE trans_hist (
    api_tran_id varchar(20) NOT NULL, # 거래고유번호
    tran_reg_date varchar(8) NOT NULL, # 등록일자
    group_cd varchar(3) NOT NULL, # 그룹코드
    tran_org_id varchar(3), # 거래기관코드
    tran_type_cd varchar(5), # 거래종류코드
    tran_ip_acct_nb varchar(20), # 입금계좌번호
    tran_status varchar(2), # 상태구분코드
    tran_reg_time varchar(6), # 등록시간
    tran_mod_date varchar(8), # 수정일자
    tran_mod_time varchar(6), # 수정시간
    tran_result_cd varchar(10), # 거래Result코드- 보안키 불일치 시 ex.DEP12658(보안키 불일치)
    tran_result_msg varchar(255), # 상세내용(ex. 보안키 불일치입니다)
    PRIMARY KEY (api_tran_id, tran_reg_date, group_cd) # 거래고유번호 PK
);
```

```text
{
  "result": {
    "insertResult": 1,
    "updateResult": 1
  }
}
```

<div div class='img-wrap'>
  <a href="../../img/assets/storage_example_2_result_select.png" target = "_blank"><img src="../../../img/assets/storage_example_2_result_select.png" /></a>
</div>
