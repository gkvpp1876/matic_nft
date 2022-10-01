#Dependencies:
1. Node.js - to install the libraries
2. Visual Studio Code or any code editor
3. Truffle Suite - provide commands to compile features migration and deploy on to networks

Commands & Steps:
    1. npm i truffle -> this installs as a dependency on the current project.
    2. npm audit fix -> automatically install compatible updates to vulnerable dependencies.
    3. npx truffle init  -> it helps in generating a scaffold of contracts and tests, npx helps in checking if the package is avaiable in node_modules, if not installs the dependencies.
    4. update the port in truffle-config.js based on which blockchain your using, here Ganache uses 7545 as port.
    5. npm i @openzeppelin/contracts -> now as we're dealing with NFT which require smart contracts to be developed, to avoid the rework we use openzeppelin contracts.
    6. Adding ArtCollectable.sol contract from https://github.com/neha01/nft-demo/blob/deploy-polygon/contracts/ArtCollectible.sol
        a. licence in the 1st line, solidity version in the 2nd line
        b. import the dependencies like NTF contracts from openzeppelin
        c. inherit Ownable, ERC721 to the current contract
            i. Ownable is used when we need access control related functinality
            ii. ERC721 is NFT contract from openzeppelin
        d. function which has onlyOwner can be only accessed by the ower of the contract
        e. ERC721 constructor takes two parameters Name of the NFT, and Symbol of the NFT, all the NFT that we're creating will have the same details
        f. 
