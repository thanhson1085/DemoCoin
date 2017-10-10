const IcoToken = artifacts.require('IcoToken');
const Web3 = require('web3');

module.exports = function() {
  IcoToken.deployed().then(function(instance) {
    instance.owner.call().then(d => console.log(d.toString()));
    const allEvents = instance.allEvents({
      fromBlock: 0,
      toBlock: 'latest'
    });
    allEvents.watch((err, res) => {
      console.log(err, res);
    });

  });
};
