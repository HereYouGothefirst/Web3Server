const Web3 = require('web3');
const smartcarabi = require('./../contracts/smartCar.js').abi;
const bin = require('./../contracts/smartCar.js').bin;
var web3 = new Web3(new Web3.providers.HttpProvider(require('./../../../config/gethConfig').url));

module.exports = function (app, db) {

  app.post('/string/fromHex', (req, res) => {
    var str = web3.toAscii(req.body.str);
    res.send(str);
  });

  app.post('/string/toHex', (req, res) => {
    var str = web3.fromAscii(req.body.str, 32);
    res.send(str)
  });

  app.post('/decimal/fromHex', (req, res) => {
    var number = web3.toDecimal(req.body.num);
    res.send({ result: number })
  });

  app.post('/decimal/toHex', (req, res) => {
    var number = web3.fromDecimal(req.body.num);
    res.send(number)
  });

  app.post('/getBalance', (req, res) => {
    var balance = web3.eth.getBalance(req.body.account);
    res.send({ result: balance })
  });

  app.post('/getBalanceInEther', (req, res) => {
    var balance = web3.fromWei(web3.eth.getBalance(req.body.account));
    res.send({ result: balance })
  });

  app.post('/getAccounts', (req, res) => {
    var accounts = web3.eth.accounts;
    res.send({ result: accounts })
  });

  app.post('/account/signin', (req, res) => {
    var result = web3.personal.unlockAccount(req.body.account, req.body.pass, 600);
    res.send({ result: result })
  });

  app.post('/account/create', (req, res) => {
    var result = web3.personal.newAccount(req.body.pass, function (err, res) { console.log("error" + err); console.log("res" + res); });
    res.send({ result: result })
  });
  
  app.post('/ether/send', (req, res) => {
    var result = web3.eth.sendTransaction({
      from: req.body.from,
      to: req.body.to,
      value: req.body.value
    });
    res.send({ result: result })
  });

  app.post('/transactions/receipt', (req, res) => {
    var result = web3.eth.getTransactionReceipt(req.body.hash);
    res.send({ result: result })
  }); 

  app.post('/contract/smartcar/function/carValue', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    var result = stringHolder.carValue();
    res.send({ result: result })
  });

  app.post('/contract/smartcar/function/carSigner', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    var result = stringHolder.carSigner();
    res.send({ result: result })
  });

  app.post('/contract/smartcar/function/licensePlate', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    var result = stringHolder.licensePlate();
    res.send({ result: result })
  });

  app.post('/contract/smartcar/function/owners', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    var result = stringHolder.owners();
    res.send({ result: result })
  });

  app.post('/contract/smartcar/function/ownersBalance', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    var result = stringHolder.ownersBalance(req.body.account);
    res.send({ result: result })
  });

  app.post('/contract/smartcar/function/balanceToDistribute', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    var result = stringHolder.balanceToDistribute();
    res.send({ result: result })
  });

  app.post('/contract/smartcar/function/carShares', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    var result = stringHolder.carShares(stringHolder.owners());
    res.send({ result: result })
  });

  app.post('/contract/smartcar/function/setOwners', (req, res) => {    
    var contract = web3.eth.contract(smartcarabi);
    var stringHolder = contract.at(req.body.address);
    web3.personal.unlockAccount(req.body.account, req.body.pass, 600);   
    var arr = req.body.addresses.split(',');     
    var result = stringHolder.setOwners(arr, {from: req.body.account, gas: 1000000});
    res.send({ result: result });
  });

  // app.post('/contract/smartcar/function/estimateGas', (req, res) => {      
  //   var methodSignature = web3.eth.abi.encodeFunctionSignature("setOwners(address[] _owners)");
  //   var messageHex = web3.fromAscii(message, 32);
  //   var encodedParameter = web3.eth.abi.encodeParameter("address[]", messageHex);
  //   var data = methodSignature  + encodedParameter.substring(2); 
  //   web3.eth.estimateGas({
  //     from: req.body.account, 
  //     data: data,
  //     to: req.body.address
  // }, function(err, estimatedGas) {
  //   if (err) console.log(err);
  //   console.log(estimatedGas);
  //   res.send({ result: estimatedGas })
  //   cb(estimatedGas, err);
  // });
  // });

  app.post('/contract/smartcar/create', (req, res) => {        
    var binWithParams = bin+castToHexParamsForString(stringToHex(req.body.licenseplate))+castToHexParamsForDecimal(decimalToHex(req.body.carvalue));
    var contract = web3.eth.contract(smartcarabi);
    web3.personal.unlockAccount(req.body.account, req.body.pass, 600);
    var uselessWorker = contract.new({ from: req.body.account, data: binWithParams, gas: 1000000 });
    res.send({ result: uselessWorker.transactionHash, contract: contract.options });    
  });

  //64
  function castToHexParamsForString(hexParam){
    var hex = hexParam+'';
    hex = hex.substring(2);//remove 0x
    var missing = 64 - hex.length;
    if (missing <= 0)
      return hex;
      
    for (let index = 0; index < missing; index++){
      hex = hex+'0';
    }         
    return hex;
  }

  function castToHexParamsForDecimal(hexParam){
    var hex = hexParam+'';
    hex = hex.substring(2);
    var missing = 64 - hex.length;
    if (missing <= 0)
      return hex;

    for (let index = 0; index < missing; index++){
      hex = '0'+hex;
    }         
    return hex;
  }

  function stringToHex(str){
    return web3.fromAscii(str, 32);
  }
  
  function decimalToHex(dec){
    return web3.fromDecimal(dec, 32);
  }
}
