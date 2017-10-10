const IcoContract = artifacts.require('IcoContract');

module.exports = function() {
  IcoContract.deployed().then(function(instance) {
    console.log(instance.address);
    instance.owner.call().then(d => console.log(d.toString()));
    const allEvents = instance.allEvents({
      fromBlock: 0,
      toBlock: 'latest'
    });
    allEvents.watch((err, res) => {
      console.log(err, res);
    });
  }).catch(e => console.log(e));
};
