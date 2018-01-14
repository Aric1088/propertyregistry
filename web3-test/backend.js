//get ABI from online contract

ABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_fName",
                "type": "string"
            },
            {
                "name": "_age",
                "type": "uint256"
            }
        ],
        "name": "setInstructor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getInstructor",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
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
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "age",
                "type": "uint256"
            }
        ],
        "name": "Instructor",
        "type": "event"
    }
]

//contract address from Remix
contract_address = '0x2820477cf8798eeb22e40ebb5da4fe28eec93084'

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var CoursetroContract = web3.eth.contract(ABI);
}

var Coursetro = CoursetroContract.at(contract_address)
console.log(Coursetro);

var instructorEvent = Coursetro.Instructor();

instructorEvent.watch(function(error, result){
    if (!error)
        {
            $("#loader").hide();
            $("#instructor").html(result.args.name + ' (' + result.args.age + ' years old)');
        } else {
            $("#loader").hide();
            console.log(error);
        }
});

$("#button").click(function() {
    Coursetro.setInstructor($("#name").val(), $("#age").val());
});