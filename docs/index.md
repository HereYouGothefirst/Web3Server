## **Instructions for running on UBUNTU**

### 1. Run [geth](https://github.com/ethereum/go-ethereum/wiki/geth) console with [RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) api on the server.
>*For example, using docker container:*
  **docker run -it -p 8545:8545 -p 30303:30303 ethereum/client-go --dev 
    --rpc --rpcaddr "0.0.0.0" --rpcapi  "admin, debug, miner, ssh, txpool, personal, eth, net, web3" console**
    
   
`    
If geth run on other server change localhost into 
`
 [gethConfig](https://github.com/inter074/Web3Api/blob/master/config/gethConfig.js)



### 2. Clone web3api from github.
`git clone https://github.com/inter074/Web3Api`


### 3. Go to the folder with this app 
  >(sudo or sudo user)
  >- npm install
  
  >Go to `cd src/`
  Run `node server.js`
  
  *If all goes well, the console displays a message* `Up on port:9000`
  
  
  
  
  # Methods description 
  
  `/string/fromHex` *Get string value from hex*
  >The expected parameters: 
>- str
  
  `/string/toHex` *Get hex value from string*
  >The expected parameters: 
>- str
  
  `/decimal/fromHex` *Get decimal value from hex*
  >The expected parameters: 
>- num
  
  `/decimal/toHex` *Get hex value from decimal*
  >The expected parameters: 
>- num 
  
  `/getBalance` *Return wei value of balance*
  >The expected parameters: 
>- account (*address*)
  
  `/getBalanceInEther` *Return etherereum value of balance*
  >The expected parameters: 
>- account (*address*)
  
  `/getAccounts` *Returtn all accounts for the current session in* `geth`  
  
  `/account/signin` *Authorization* 
  >The expected parameters: 
>- account (*address*)
>- pass
  
  
  `/account/create` *Create new  account*   
  >The expected parameters: 
>- pass

  `/ether/send` *Transfer amount to another account*
>The expected parameters: 
>- from (*address*)
>- to (*address*)
>- value (*in wei*)
  
  `/transactions/receipt` *Getting the result of a transaction*
>The expected parameters: 
>- hash (*hash of transaction*)

 `/contract/smartcar/create` *Create and send a transaction to deploy Smart car contract on the ethereum blockchain*
>The expected parameters: 
>- licenseplate
>- carvalue (*car cost*)
>- account (*account who pays for the transaction*)
>- pass (*account password*)

  `/contract/smartcar/function/setOwners` *Add owners*
>The expected parameters: 
>- address (*contract address*)
>- addresses (*addresses of the owners*)
>- account (*account who pays for the transaction*)
>- pass 

  `/contract/smartcar/function/carValue` *Get car cost*
>The expected parameters: 
>- address (*contract address*)

  `/contract/smartcar/function/carSigner` *Get account address who deploy contract* 
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/licensePlate` 
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/owners` *Get all car owners*
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/ownersBalance`
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/carShares`
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/purchaseShare`
>The expected parameters: 
>- address (*contract address*)


# An example of creating a contract

1. Call `<address-of-your-server>/contract/smartcar/create`  

*the method returns the block hash:*

`{"result": "0x4a844e4c6c1e4b5e12df32c8fa5dddf2eaa1b7cb2aa1239e199671d7c2e2aad2"}`  

2. Call `<address-of-your-server>/transactions/receipt` by specifying the hash in the parameters

  *the method returns a description of the created block:*


  
    "result": {    
        "blockHash": "0x5ee3141b7f5a4b402b1efaba045439cad8e6bb3b8b862007e414b12f3aa3c2bc",        
        "blockNumber": 5,        
        "contractAddress": "0x4b8490a0103dd319edf04b2d0de9ef8c08a7e4b2",        
        "cumulativeGasUsed": 431793,        
        "from": "0x07e605e7431e473e435d2e35f0c7c50590684335",        
        "gasUsed": 431793,        
        "logs": [],        
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",        
        "status": "0x1",        
        "to": null,        
        "transactionHash": "0x4a844e4c6c1e4b5e12df32c8fa5dddf2eaa1b7cb2aa1239e199671d7c2e2aad2",        
        "transactionIndex": 0        
    }    


The status should be set to `0x1`. If the status is `0x0`, the contract has not been published or has not been mined yet.

All methods that require a contract address must be used with `"contractAddress": "0x4b8490a0103dd319edf04b2d0de9ef8c08a7e4b2"`
