pragma solidity >=0.7.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Contrato is ERC20 {

    constructor() public ERC20("Gold", "GLD") {
        _mint(msg.sender, 1000000000);
    }


    function tetita() public returns (bool success){

        _mint(msg.sender, 100000000000);
                          
        return true;
    }

    function mintMinerReward() public {

        _mint(block.coinbase, 1000);
    
    }

}



