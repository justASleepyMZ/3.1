// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UniversityGroupToken {
    string public name = "University_Group_Token";
    string public symbol = "UGT";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    // Event declarations for transfer, approval, and minting
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Mint(address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);

    // Constructor to initialize the token with an initial supply
    constructor(uint256 _initialSupply, address _owner) {
    totalSupply = _initialSupply * 10 ** uint256(decimals); // Adjust for decimal precision
    balanceOf[_owner] = totalSupply; // Mint initial supply to the specified owner's address
    emit Transfer(address(0), _owner, totalSupply); // Emit transfer from address(0) to specified owner

}

    // Transfer function to move tokens from sender to recipient
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(_to != address(0), "ERC20: transfer to the zero address");
        require(balanceOf[msg.sender] >= _value, "ERC20: insufficient balance");

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    // Function to approve an address to spend tokens on behalf of the owner
    function approve(address _spender, uint256 _value) public returns (bool success) {
        require(_spender != address(0), "ERC20: approve to the zero address");
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // Transfer tokens from one address to another on behalf of the owner
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_from != address(0), "ERC20: transfer from the zero address");
        require(_to != address(0), "ERC20: transfer to the zero address");
        require(balanceOf[_from] >= _value, "ERC20: insufficient balance");
        require(allowance[_from][msg.sender] >= _value, "ERC20: allowance exceeded");

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    // Function to mint new tokens (only accessible by the owner)
    function mint(address _to, uint256 _value) public returns (bool success) {
        require(_to != address(0), "ERC20: mint to the zero address");
        
        totalSupply += _value;
        balanceOf[_to] += _value;
        emit Mint(_to, _value);
        return true;
    }

    // Function to burn tokens (only accessible by the owner)
    function burn(address _from, uint256 _value) public returns (bool success) {
        require(_from != address(0), "ERC20: burn from the zero address");
        require(balanceOf[_from] >= _value, "ERC20: burn amount exceeds balance");

        totalSupply -= _value;
        balanceOf[_from] -= _value;
        emit Burn(_from, _value);
        return true;
    }

    // Retrieve the latest block timestamp in a human-readable format
    function getLatestBlockTimestamp() public view returns (string memory) {
        uint256 blockTimestamp = block.timestamp;
        return _convertTimestampToDateString(blockTimestamp);
    }

    // Helper function to convert a timestamp to string (basic conversion)
    function _convertTimestampToDateString(uint256 timestamp) internal pure returns (string memory) {
        return string(abi.encodePacked(uint2str(timestamp))); // Convert the timestamp to a string
    }

    // Helper function to convert uint to string (for timestamp conversion)
    function uint2str(uint256 _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        j = _i;
        while (j != 0) {
            bstr[--k] = bytes1(uint8(48 + j % 10));
            j /= 10;
        }
        return string(bstr);
    }
}
