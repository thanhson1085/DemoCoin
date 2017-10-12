## Setup the project
As you know, Ethereum Smart Contract use Solidity programing language. So we have to intall the compiler called `Solc`.

Open your terminal, and install Solc via NPM:
```
npm install -g solc
```

We need a Ethereum Node for the deployment and test. So we can use TestRPC to emulate Ethereum. 
```
npm install -g ethereumjs-testrpc
```

We use `truffle` to build/deploy the project. So we Install Truffle via NPM:
```
npm install -g truffle
```

### Start a Ethereum Node
Open a terminal and run the command to start a Ethereum node using TestRPC:
```
testrpc
```

The output:
```
EthereumJS TestRPC v4.1.3 (ganache-core: 1.1.3)

Available Accounts
==================
(0) 0x3adf9233e248e3bedee82f500a219b34df52efab
(1) 0x636955e24318504d421b9585bcc6f75a149beca9
(2) 0x1a472862fc272c428e8dfae9e02a11506e2359d1
(3) 0x59690e5e5bad0972a28bd6b6a6d7fe3bed049d79
(4) 0xf167bbf85895c4ef1cb9913a2232aef6d3d31076
(5) 0x9006ef9cd4b48711dbe0d1adf30a7525bb7630b5
(6) 0xf800c5b6616413d97afbd74e5afdd451ac1f159b
(7) 0x29b88092c76d675f41853247feaf902ba4a4063c
(8) 0x11cc28dd913b08c4a0799402c0862c2ca9a4c7b2
(9) 0xf87a66e94f54a0081c90b796359784b83c836185

Private Keys
==================
(0) 61d6a2f9f324e49166605207812a913ee218692d8a8091a04c67ce4b40fc4c0b
(1) 2d27cb1117912b171e7add216ce02c5143251cafcd28a80ab39413b618c81f4e
(2) fbc91f77872bb86b58d7a3b16fb4929e4786ae11325cf4dc45960b0b54c7de9e
(3) 4f3fce0a969f4f2b89db3b797175eb57102c0bd0fcc5b265c7a65efe7d0a79ba
(4) 83cde3d87aae0fd790722f3745b14aa920a07c3e19ed433ceb8f321560be00f9
(5) 168d408483b31b367dc49acf573f0f47ec7c9da4c88a9c15b0252890023afd54
(6) c2b625246e1a7fec8d3c61fd6157a5544f8855abd07f670b5ad9fb679c0279dc
(7) 800075844e30d052f96e0f3abd3d54c5b5463233254eb31b82da5120a6e40b4a
(8) 9e4452e0e2d7b49af1ab5df90155b6e8b00905b6f82e2bd89753fa0f557a5a24
(9) f799a3b06db770a270d7cdba9f046defa8c16cbbfae4fbdc8b0472ab2b003a05

HD Wallet
==================
Mnemonic:      night theme swap thunder fiction equal danger provide vessel hazard design kid
Base HD Path:  m/44'/60'/0'/0/{account_index}

Listening on localhost:8545

```

We should store the addresses and private keys above to use for testing later
