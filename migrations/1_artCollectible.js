const artCollectible = artifacts.require('artCollectible');

export default function (deployer) {
  deployer.deploy(artCollectible);
};