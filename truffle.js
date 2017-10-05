var HDWalletProvider = require("truffle-hdwallet-provider");
var config = require('config');

var mnemonic = config.get('networks.ropsten.mnemonic');
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      network_id: 3,
      provider: new HDWalletProvider(mnemonic, config.get('networks.ropsten.infuraUrl'))
    }
  }
};
