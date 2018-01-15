pragma solidity ^0.4.18;

contract PropertyRegistry{

    struct Owner{
        string name;
        string propaddress;
        string price;
        uint timestamp;
    }

    mapping (address => Owner) owners;
    address[] public ownerAccts;
    string[] public propaddress;

    function setOwner( address _address, string _name, string _propaddress, string _price) public {
        var owner = owners[_address];

        owner.name = _name;
        owner.propaddress = _propaddress;
        owner.price = _price;
        owner.timestamp = block.timestamp;
        ownerAccts.push(_address) -1;
    }

    function getOwners() view public returns (address[]){
        return ownerAccts;
    }

    function getOwneratProperty(string prop) view public returns (string){
        for (uint lvl = 0; lvl < ownerAccts.length; lvl++){
            if (keccak256(owners[ownerAccts[lvl]].propaddress) == keccak256(prop)){
                return owners[ownerAccts[lvl]].name;}
            

        }
 }
 
    function transferDeed(address _address, string _propaddress, string _name, string _price) public returns (string){
         if (keccak256(owners[msg.sender].propaddress) == keccak256(_propaddress)){
             setOwner(_address, _name, _propaddress, _price);
             delete owners[msg.sender];
        }
    }

    function getOwner(address ins) view public returns (string, string, string){
        return (owners[ins].name, owners[ins].propaddress, owners[ins].price);
    }
    



}
