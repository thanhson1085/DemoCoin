This project will show you step by step to develop a ICO Smart Contract.
[![Join the chat at https://gitter.im/DemoIcoToken/Lobby](https://badges.gitter.im/DemoIcoToken/Lobby.svg)](https://gitter.im/DemoIcoToken/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Prerequisites
- NodeJS 8+
- Geth
- Git
- IDE (Sublime, Visual Studio, Vim ...)

## Setup Development Enviroment
### Windows
We use Chocolaty to install NodeJS and Geth. For installing Choco, please see: [https://chocolatey.org/install#install-with-cmdexe](https://chocolatey.org/install#install-with-cmdexe)

Install NodeJs:
```
choco install nodejs
```
Install Geth
```
choco install geth-stable
```
Install Git
```
choco install git
```

### OSX
Install NodeJs:
```
brew install node
```
Install Geth:
```
brew tap ethereum/ethereum
brew install ethereum
```
Install Git:
```
brew install git
```

### Linux (Debian/Ubuntu)

Install NodeJs:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs
npm install -g npm@latest
```
Install Geth:
```
apt-get install software-properties-common
add-apt-repository -y ppa:ethereum/ethereum
apt-get update
apt-get install -y ethereum
```
Install Git:
```
apt-get install git
```


To confirm all installation is OK, we use command:
```
# Node
node --version
# NPM
npm --version
# Git
git --version
# Geth
geth version
```

## Setup the project
Install Solc:
```
npm install -g solc
```
Install Truffle
```
npm install -g truffle
```
Clone source code:
```
git clone git@github.com:thanhson1085/DemoCoin.git
```
Install Node Modules:
```
cd DemoCoin
npm install
```

### Start a Ethereum Node
Open a terminal and run the command to start a Ethereum node:
```
geth --dev --datadir ~/ethnode --rpc --rpcaddr 0.0.0.0 --rpcport 8545
```

Open another terminal and run the command to attach a console to the node:
```
geth attach ~/ethnode/geth.ipc
```

In Geth Console, we create an account (password 123456) with command:
```
> personal.newAccount('123456')
```

Start mining blocks:
```
> miner.start()
```
Check hashrate
```
> eth.hashrate
```

Check account balance
```
> web3.fromWei(eth.getBalance(eth.accounts[0]), 'ether')
```

Unlock an account:
```
> personal.unlockAccount(eth.accounts[0], '123456', 0)
```


## Explaining ERC20 ICO Smart Contract
To start writing Smart Contract, we have to init the project with Truffle:
```
truffle init
```
Truffle will create some files and directories as the below:
```
.
├── contracts
│   ├── Metacoin.sol
│   └── Migrations.sol
├── migrations
│   ├── 1_initial_migration.js
│   └── 2_deploy_contracts.js
├── package.json
├── README.md
├── run.sh
├── test
│   ├── metacoin.js
│   └── TestMetacoin.sol
└── truffle.js

```

Now, it is ready to write your own smart contract. We can remove the sample file `Metacoin.sol` and create a new `.sol` file in `contracts` directory.
For ICO, we should create a ERC20 Token. The below is an example for Standard ERC20 Token:
```
// ================= ERC20 Token Contract start =========================
/*
 * ERC20 interface
 * see https://github.com/ethereum/EIPs/issues/20
 */
contract ERC20 {
  uint public totalSupply;
  function balanceOf(address who) constant returns (uint);
  function allowance(address owner, address spender) constant returns (uint);

  function transfer(address to, uint value) returns (bool ok);
  function transferFrom(address from, address to, uint value) returns (bool ok);
  function approve(address spender, uint value) returns (bool ok);
  event Transfer(address indexed from, address indexed to, uint value);
  event Approval(address indexed owner, address indexed spender, uint value);
}
// ================= ERC20 Token Contract end ===========================

// ================= Standard Token Contract start ======================
contract StandardToken is ERC20, SafeMath {

  /**
  * @dev Fix for the ERC20 short address attack.
   */
  modifier onlyPayloadSize(uint size) {
    require(msg.data.length >= size + 4) ;
    _;
  }

  mapping(address => uint) balances;
  mapping (address => mapping (address => uint)) allowed;

  function transfer(address _to, uint _value) onlyPayloadSize(2 * 32)  returns (bool success){
    balances[msg.sender] = safeSubtract(balances[msg.sender], _value);
    balances[_to] = safeAdd(balances[_to], _value);
    Transfer(msg.sender, _to, _value);
    return true;
  }

  function transferFrom(address _from, address _to, uint _value) onlyPayloadSize(3 * 32) returns (bool success) {
    var _allowance = allowed[_from][msg.sender];

    balances[_to] = safeAdd(balances[_to], _value);
    balances[_from] = safeSubtract(balances[_from], _value);
    allowed[_from][msg.sender] = safeSubtract(_allowance, _value);
    Transfer(_from, _to, _value);
    return true;
  }

  function balanceOf(address _owner) constant returns (uint balance) {
    return balances[_owner];
  }

  function approve(address _spender, uint _value) returns (bool success) {
    allowed[msg.sender][_spender] = _value;
    Approval(msg.sender, _spender, _value);
    return true;
  }

  function allowance(address _owner, address _spender) constant returns (uint remaining) {
    return allowed[_owner][_spender];
  }
}
// ================= Standard Token Contract end ========================

```

To understand the source code above, please refer to [https://theethereum.wiki/w/index.php/ERC20_Token_Standard](https://theethereum.wiki/w/index.php/ERC20_Token_Standard)

After that, you create your own token base on the standard token above:

```
// ================= IcoToken  start =======================
contract IcoToken is SafeMath, StandardToken, Pausable {
  string public name;
  string public symbol;
  uint256 public decimals;
  string public version;
  address public icoSaleDeposit;
  address public icoContract;

  function IcoToken(
    string _name,
    string _symbol,
    uint256 _decimals,
    string _version
  )
  {
    name = _name;
    symbol = _symbol;
    decimals = _decimals;
    version = _version;
  }

  function transfer(address _to, uint _value) whenNotPaused returns (bool success) {
    return super.transfer(_to,_value);
  }

  function approve(address _spender, uint _value) whenNotPaused returns (bool success) {
    return super.approve(_spender,_value);
  }

  function balanceOf(address _owner) constant returns (uint balance) {
    return super.balanceOf(_owner);
  }

  function setIcoContract(address _icoContract) onlyOwner {
    if (_icoContract != address(0)) {
      icoContract = _icoContract;
    }
  }

  function sell(address _recipient, uint256 _value) whenNotPaused returns (bool success) {
      assert(_value > 0);
      require(msg.sender == icoContract);

      balances[_recipient] += _value;
      totalSupply += _value;

      Transfer(0x0, owner, _value);
      Transfer(owner, _recipient, _value);
      return true;
  }

}
// ================= Ico Token Contract end =======================

```

Finally, create your Token Sale Contract.

```
contract IcoContract is SafeMath, Pausable {
  IcoToken public ico;

  uint256 public tokenCreationCap;
  uint256 public totalSupply;

  address public ethFundDeposit;
  address public icoAddress;

  uint256 public fundingStartTime;
  uint256 public fundingEndTime;
  uint256 public minContribution;

  bool public isFinalized;
  uint256 public tokenExchangeRate;

  event LogCreateICO(address from, address to, uint256 val);

  function CreateICO(address to, uint256 val) internal returns (bool success) {
    LogCreateICO(0x0, to, val);
    return ico.sell(to, val);
  }

  function IcoContract(
    address _ethFundDeposit,
    address _icoAddress,
    uint256 _tokenCreationCap,
    uint256 _tokenExchangeRate,
    uint256 _fundingStartTime,
    uint256 _fundingEndTime,
    uint256 _minContribution
  )
  {
    ethFundDeposit = _ethFundDeposit;
    icoAddress = _icoAddress;
    tokenCreationCap = _tokenCreationCap;
    tokenExchangeRate = _tokenExchangeRate;
    fundingStartTime = _fundingStartTime;
    minContribution = _minContribution;
    fundingEndTime = _fundingEndTime;
    ico = IcoToken(icoAddress);
    isFinalized = false;
  }

  function () payable {    
    createTokens(msg.sender, msg.value);
  }

  /// @dev Accepts ether and creates new ICO tokens.
  function createTokens(address _beneficiary, uint256 _value) internal whenNotPaused {
    require (tokenCreationCap > totalSupply);
    require (now >= fundingStartTime);
    require (now <= fundingEndTime);
    require (_value >= minContribution);
    require (!isFinalized);

    uint256 tokens = safeMult(_value, tokenExchangeRate);
    uint256 checkedSupply = safeAdd(totalSupply, tokens);

    if (tokenCreationCap < checkedSupply) {        
      uint256 tokensToAllocate = safeSubtract(tokenCreationCap, totalSupply);
      uint256 tokensToRefund   = safeSubtract(tokens, tokensToAllocate);
      totalSupply = tokenCreationCap;
      uint256 etherToRefund = tokensToRefund / tokenExchangeRate;

      require(CreateICO(_beneficiary, tokensToAllocate));
      msg.sender.transfer(etherToRefund);
      ethFundDeposit.transfer(this.balance);
      return;
    }

    totalSupply = checkedSupply;

    require(CreateICO(_beneficiary, tokens)); 
    ethFundDeposit.transfer(this.balance);
  }

  /// @dev Ends the funding period and sends the ETH home
  function finalize() external onlyOwner {
    require (!isFinalized);
    // move to operational
    isFinalized = true;
    ethFundDeposit.transfer(this.balance);
  }
}

```


## Run the project

### Compiling the source code
```
truffle compile
```

### Test
```
truffle test
```

### Deploy
```
truffle deploy --reset
```

**TO BE UPDATED**
