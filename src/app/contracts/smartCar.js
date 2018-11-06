module.exports = {
abi:[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owners",
				"type": "address[]"
			}
		],
		"name": "setOwners",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_licensePlate",
				"type": "bytes32"
			},
			{
				"name": "_carValue",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceToDistribute",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "carShares",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "carSigner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "carValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "licensePlate",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "owners",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "ownersBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],
bin:string = "0x"+"60806040526008805460ff1916905534801561001a57600080fd5b506040516040806104b28339810160405280516020909101516000811161004057600080fd5b60008054600160a060020a03191633178155600191909155600291909155308152600660205260409020606490556104358061007d6000396000f3006080604052600436106100985763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663025e7c27811461009d5780630749afec146100d157806327e235e3146100f857806333597869146101195780633dcdcc731461012e5780637c7077a61461014f5780638001d45514610164578063a4fcc57a14610179578063fa4d36981461019a575b600080fd5b3480156100a957600080fd5b506100b56004356101f1565b60408051600160a060020a039092168252519081900360200190f35b3480156100dd57600080fd5b506100e6610219565b60408051918252519081900360200190f35b34801561010457600080fd5b506100e6600160a060020a036004351661021f565b34801561012557600080fd5b506100b5610231565b34801561013a57600080fd5b506100e6600160a060020a0360043516610240565b34801561015b57600080fd5b506100e6610252565b34801561017057600080fd5b506100e6610258565b34801561018557600080fd5b506100e6600160a060020a036004351661025e565b3480156101a657600080fd5b50604080516020600480358082013583810280860185019096528085526101ef953695939460249493850192918291850190849080828437509497506102709650505050505050565b005b60038054829081106101ff57fe5b600091825260209091200154600160a060020a0316905081565b60015481565b60076020526000908152604090205481565b600054600160a060020a031681565b60066020526000908152604090205481565b60025481565b60055481565b60046020526000908152604090205481565b600080548190600160a060020a0316331461028a57600080fd5b6000835111801561029d57506005835111155b15156102a857600080fd5b600354156102b557600080fd5b82516102c8906003906020860190610363565b50600354306000908152600660205260409020548115156102e557fe5b0491505b60035460ff8216101561035157816006600060038460ff1681548110151561030d57fe5b6000918252602080832090910154600160a060020a0316835282810193909352604091820181209390935530835260069091529020805483900390556001016102e9565b50506008805460ff1916600117905550565b8280548282559060005260206000209081019282156103c5579160200282015b828111156103c5578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610383565b506103d19291506103d5565b5090565b61040691905b808211156103d157805473ffffffffffffffffffffffffffffffffffffffff191681556001016103db565b905600a165627a7a72305820d2365fd4ae42efaa0d46ceaa3065d9e686c98c085bb8a7207e0fd298197012480029"
  };

