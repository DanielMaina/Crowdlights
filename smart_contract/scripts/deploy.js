const main = async () => {
  const Crowdlights = await hre.ethers.getContractFactory("Crowdlights");
  const crowdlights = await Crowdlights.deploy();

  await crowdlights.deployed();

  console.log("NFT contract deployed to: ", crowdlights.address);
}

const runMain = async () => {
  try { 
    await main();
    process.exit(0);
    } catch (error) {
      main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
    }

}

runMain();


