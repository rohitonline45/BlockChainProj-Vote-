const Voting = artifacts.require("Voting");
module.exports = function (deployer) {
    deployer.deploy(Voting, ["Mark", "Mike", "Henry", "Rock"], 90);
};
Voting.deployed().then(function (instance) {
    console.log("Contract address:", instance.address);
  });