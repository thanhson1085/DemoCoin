After finishing the smart contract in the local development environment, we should deploy it to the Testnet (Ropsten, Kovan, Rinkeby)

There are many tools to deploy the smart contract to the testnets (you can do it with Truffle). In this tutorial, we will use two tools [Remix](https://github.com/ethereum/browser-solidity) and Metamask Wallet

## Build Smart Contract with Remix
Open your Chrome browswer and go to site [https://remix.ethereum.org](https://remix.ethereum.org)

And create a new file by clicking the button on the top-left corner

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/20.JPG)

Rename it to `IcoContract.sol`

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/21.JPG)


Copy your Smart Contract source code to the file

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/22.JPG)

Open **Settings** tab, select the Solidity compiler version

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/23.JPG)

## Give me Ether
To deploy Smart Contract, we have to have Ether to pay for Gas, that is fees for the deployment. So we go to site [Faucet Rinkeby](https://faucet.rinkeby.io/) to get 18 ETH. Now, following the steps below

Click **Metamask** on Chrome, select Testnet - Rinkeby

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/24.JPG)

Click **Metamask** on Chrome, select Testnet - Rinkeby

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/24.JPG)

Create a new account on Rinkeby Network, copy the address

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/27.JPG)

Create [Gist file](https://gist.github.com/) that contains your Ethereum Address

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/25.JPG)

Copy-Paste the gists URL into the textbox in Faucet Rinkeby site (https://faucet.rinkeby.io/), click **Give me 18 ETH**

![](https://raw.githubusercontent.com/thanhson1085/DemoCoin/master/images/26.JPG)

And then, we have to wait at least 30 minutes to have 18 Ether
