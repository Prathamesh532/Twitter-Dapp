// migrations/2_deploy_contract.js
const Twitter = artifacts.require("Twitter");

module.exports = function (deployer) {
  deployer.deploy(Twitter);
};