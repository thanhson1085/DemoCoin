const IcoToken = artifacts.require('IcoToken');
const IcoContract = artifacts.require('IcoContract');

module.exports = function(deployer) {
  deployer.deploy(
    IcoToken,
    'Test Token',
    'TST',
    '18',
    '1.0'
  ).then(() => {
    return deployer.deploy(
      IcoContract,
      '0xc3d2a1629d3990d8b9d9799c8675ec18c6f00247', // Your ETH Address
      IcoToken.address,
      '100000000000000000000000000', // 100000000 Token
      '1000', // 1 ETH = 1000 Token
      '1504051200', // 30/08/2017
      '1514592000', // 30/12/2017
      '100000000000000000' // 0.1 ETH
    ).then(() => {
      return IcoToken.deployed().then(function(instance) {
        return instance.setIcoContract(IcoContract.address);
      });
    });
  });
};
