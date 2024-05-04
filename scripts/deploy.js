// sleep function using Promise and setTimeout
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    let token_address;
    let Token;
    
    Token = await ethers.getContractFactory("MyUSDCToken");
    const token = await Token.deploy();
    await token.deployed();
    token_address = token.address;
    console.log("Token address:", token_address);
    
    await sleep(12000);
    await hre.run("verify:verify", {
      address: token_address,
      constructorArguments: [],
    });
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });