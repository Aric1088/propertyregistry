//get ABI from online contract

// const ABI = [
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "propaddress",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ownerAccts",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "getOwners",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "address[]"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "prop",
// 				"type": "string"
// 			}
// 		],
// 		"name": "getOwneratProperty",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "ins",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getOwner",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_address",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_propaddress",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_price",
// 				"type": "string"
// 			}
// 		],
// 		"name": "setOwner",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_address",
// 				"type": "address"
// 			},
// 			{
// 				"name": "_propaddress",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_price",
// 				"type": "string"
// 			}
// 		],
// 		"name": "transferDeed",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ];


// (0) 0x9f9a02ffb21f47c47b792f16779757a456213dfb
// (1) 0x209aad53ec2a0a8bca6e144571b99e08811e0b93
// (2) 0xc23cb079d1bb0ddd1a3b45842046a4960fc5c93f
// (3) 0xd63eda7e84c14e6c41c5f0f22fe5e33484057969
// (4) 0xde33bb5293d4ce17d04aa71f7e5878df628d9dae
// (5) 0xc11dd31a2e1f32774961e1921cb737316ca548c1
// (6) 0x56b8d3a1f74264b189c896cc62b24a97d3734316
// (7) 0x5085117025320218ed37fba4c77584971e879342
// (8) 0x74e7c36599311347cccec92849535cb081fcdf2a
// (9) 0xad84dd13a02aab68d5b51115ccd7f3a28575a1bd

//contract address from Remix


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
    // Property.setOwner(
    //     $("#address").val(),
    //     $("#name").val(),
    //     $("#propaddress").val(),
    //     $("#price").val()
    // );

    // $("#instructor").html(Property.getOwner($("#address").val()));

    console.log($("#address").val() + " " +
        $("#name").val() + " " +
        $("#propaddress").val() + " " +
        $("#price").val());

    // document.getElementById("fooker").append(' <li>
    //             <h2> Name: Joe</h2>
    //             <h2> Ethereum Address:0d0c00e8</h2>
    //             <h2> Property Address: 1044 Manhattan</h2>
    //             <h2> Price: 893789389</h2>
    //         </li> ');
    var li = document.createElement("li");
    var nameh2 = document.createElement("h2");
    nameh2.appendChild(document.createTextNode("Name: " + $("#name").val()));
    var ethh2 = document.createElement("h2");
    ethh2.appendChild(document.createTextNode("Ethereum Address: " + $("#address").val()));
    var proph2 = document.createElement("h2");
    proph2.appendChild(document.createTextNode("Property Address: " + $("#propaddress").val()));
    var priceh2 = document.createElement("h2");
    priceh2.appendChild(document.createTextNode("Price: " + $("#price").val()));


    li.appendChild(nameh2);
    li.appendChild(ethh2);
    li.appendChild(proph2);
    li.appendChild(priceh2);

    //li.appendChild(document.createTextNode("Four"));
    li.setAttribute("id", "element4"); // added line
    document.getElementById("fooker").appendChild(li);


    //Property.setInstructor($("#name").val(), $("#age").val());
});

// (0) 0x6d0bfdd495b64589a7ecdbbd5934c4657bd16525
// (1) 0x7b4134b2ecf4f62b86605ecb2b035b5304bb2b77
// (2) 0x63bac5c8f313cd8aa0b83391fdb830041ce849a4
