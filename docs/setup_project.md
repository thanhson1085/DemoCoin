## Setup the project
As you know, Ethereum Smart Contract use Solidity programing language. So we have to intall the compiler called `Solc`.

Open your terminal, and install Solc via NPM:
```
npm install -g solc
```

We use `truffle` to build/deploy the project. So we Install Truffle via NPM:
```
npm install -g truffle
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


