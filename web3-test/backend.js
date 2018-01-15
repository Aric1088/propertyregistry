//get ABI from online contract

ABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "propaddress",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
		"name": "ownerAccts",
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
		"name": "getOwners",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
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
				"name": "prop",
				"type": "string"
			}
		],
		"name": "getOwneratProperty",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "ins",
				"type": "address"
			}
		],
		"name": "getOwner",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_propaddress",
				"type": "string"
			},
			{
				"name": "_price",
				"type": "string"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_propaddress",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_price",
				"type": "string"
			}
		],
		"name": "transferDeed",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

//contract address from Remix
contract_address = '0xc387e279052382b956bc524df4018014f025bb0b'

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var PropertyContract = web3.eth.contract(ABI);
}

var Property = PropertyContract.at(contract_address)
console.log(Property);

//need to create property event in contract?
// var propertyEvent = Property.OwnerEvent();

// propertyEvent.watch(function(error, result){
//     if (!error)
//         {
//             $("#loader").hide();
//             $("#instructor").html(result.args.name + ' with property address ' + result.args.propaddress + ')');
//         } else {
//             $("#loader").hide();
//             console.log(error);
//         }
// });

$("#button").click(function() {
    Property.setOwner(
        $("#address").val(),
        $("#name").val(),
        $("#propaddress").val(),
        $("#price").val()
    );

    console.log($("#address").val() + " " + 
        $("#name").val() + " " + 
        $("#propaddress").val() + " " + 
        $("#price").val());

    //Property.setInstructor($("#name").val(), $("#age").val());

    
});

// (0) 0x6d0bfdd495b64589a7ecdbbd5934c4657bd16525
// (1) 0x7b4134b2ecf4f62b86605ecb2b035b5304bb2b77
// (2) 0x63bac5c8f313cd8aa0b83391fdb830041ce849a4