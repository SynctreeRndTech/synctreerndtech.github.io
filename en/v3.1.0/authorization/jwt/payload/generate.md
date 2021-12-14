## Generate

### ● Jwt Payload

        This block is used for generating registered claims.
        Registered Claims are not information required by the service.
        These are claims that have already been named to contain information about the token.
        All of these are optional, but strongly recommended, and the list of claim names included is below.

![](../../../../../img/assets/image%20%28273%29.png)

### ● Registered Claims Names

|                                                                                                                                 |
| :-------------- | :------------------------------------------------------------------------------------------------------------ | 
| **issuer**      | **Token issuer**                                                                                              | 
| **expiration**  | **Token expiration time**                                                                                     | 
| **subject**     | **token subject**                                                                                             | 
| **audience**    | **token audience**                                                                                            |
| **not before**  | **The point at which tokens should not be processed until this point**                                        |
| **jtiid**       | **A unique identifier for JWT, mainly used to prevent duplicate processing. Useful for single use tokens.**   |


