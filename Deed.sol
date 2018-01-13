pragma solidity ^0.4.18;

contract PropertyRegistry{

    struct Owner{
        string name;
        string propaddress;
        string price;
    }

    mapping (address => Owner) owners;
    address[] public ownerAccts;
    string[] public properties;

    function setOwner( address _address, string _name, string _propaddress, string _price) public {
        var owner = owners[_address];

        owner.name = _name;
        owner.propaddress = _propaddress;
        owner.price = _price;
        properties.push(_propaddress) -1;
        ownerAccts.push(_address) -1;
    }
    function getProperties() view public returns (string[]){
      return properties;
    }
    function getOwners() view public returns (address[]){
        return ownerAccts;
    }

    function getOwner(address ins) view public returns (string, string, string){
        return (owners[ins].name, owners[ins].propaddress, owners[ins].price);
    }

    function countOwners() view public returns (uint){
        return ownerAccts.length;
    }
}