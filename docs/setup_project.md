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


