After finishing the ICO Smart contract. We need deploy and test it.

Truffle support we define the scenario of the deployment in `.js` file in `migrations` directory.

Before writing the deploy script, we need to install some node packages that we will use in the script.
```
# init packages.json file
npm init

# install config package
npm install --save config

# install web3 package
npm install --save web3
```

Now, we start writing the delopy script. Open your IDE, create/update `2_deploy.contracts.js` in `migrations` directory and copy source code form [this link](https://github.com/thanhson1085/DemoCoin/blob/master/migrations/2_deploy_contracts.js) to the file.

After that, we create the config file that contains the parameters of the contracts.

```
# create config directory
mkdir config && cd config
```

In `config` directory, we create `default.json` file, and paste the content from [this link](https://github.com/thanhson1085/DemoCoin/blob/master/config/default.json)

To understand about `node-config`, you can read their document in github [https://github.com/lorenwest/node-config](https://github.com/lorenwest/node-config)

Now, we run the deploy command from the terminal
```
truffle deploy --reset
```

If success, the output should be:
```
$ truffle deploy --reset
Compiling ./contracts/IcoContract.sol...
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x44d825e495bf8c04d3db3f16a22b4e1dfb56e6c49c2f95b2aa3d8530d5240d80
  Migrations: 0x28a6660495f22b433c96f094ed5f1e9808465825
Saving successful migration to network...  ... 0x76ade4b3a674d2373dcf5fd2609d560a5ec416ec8eea9d68ca7959060468e71d
Saving artifacts...
Running migration: 2_deploy_contracts.js  Replacing IcoToken...
  ... 0x5d025b60a177496c63c64a9ef01cc8d05f33e5794fb807368c31253038845072
  IcoToken: 0xb598a4a58dc9ae01e75b215f7028db2a926d21e4
  Replacing IcoContract...
  ... 0xa8e5e2ab2721242dfd0f7cce7110cc383163f724059b9ea765de1e17f7b65902
  IcoContract: 0x781f0faf06b17ea69cb2aa2bbc9c4942ae4ab398
  ... 0xb0a8106a6aaa07438b6219ff4f3bdb721c541e7f1e6cb28f77f5d011138a9497
Saving successful migration to network...
  ... 0x8d78b9d8b30a9cfe7c7ecc31e26517e015a944dff35d0688aedf83fabe1bdea6
Saving artifacts...

```
