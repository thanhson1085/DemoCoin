This project will show you step by step to develop a ICO Smart Contract.

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
node --version
npm --version
git --version
geth --version
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
> personal.unlockAccount(eth.accounts[0], '123456', 0)



```
geth --dev --datadir ~/ethnode --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --etherbase 0x525f77b36333c42d02498e856cf8fdf9c05eec04 --unlock 0x525f77b36333c42d02498e856cf8fdf9c05eec04 --password <(echo -n 123456) --mine
```

### Init the project
```
truffle init
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
