const IcoToken = artifacts.require('IcoToken');
const IcoContract = artifacts.require('IcoContract');
const config = require('config');
const Web3 = require('web3');

module.exports = function(deployer) {
  deployer.deploy(
    IcoToken,
    config.get('tokens.name'),
    config.get('tokens.symbol'),
    config.get('tokens.decimals'),
    config.get('tokens.version')
  ).then(() => {
    return deployer.deploy(
      IcoContract,
      config.get('contracts.ethFundDeposit'),
      IcoToken.address,
      config.get('contracts.fundingStartTime'),
      config.get('contracts.fundingEndTime'),
      Web3.utils.toWei(config.get('contracts.minContribution'), 'ether'),
      config.get('contracts.maxGasPrice'),
      config.get('contracts.maxTokens')
    ).then(() => {
      IcoToken.deployed().then(function(instance) {
        instance.setIcoContract(IcoContract.address);
      });
    });
  });
};
