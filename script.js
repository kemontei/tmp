const ethers = require("ethers");

async function main() {
    const response = await fetch('https://api.etherscan.io/api?module=contract&action=getabi&address=0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7&apikey=YourApiKeyToken');
    const data = await response.json();

    let abi = data.result;
    console.log(abi);

    const node = "https://eth.llamarpc.com";
    const provider = new ethers.providers.JsonRpcProvider(node);

    let privatekey = "fdfb72ce9754e3cbc1e79e44a8e20804cebd3c4a347605c6a3462a8de05b8784";
    let wallet = new ethers.Wallet(privatekey, provider);

    console.log("Using wallet address " + wallet.address);

    let contractaddress = "0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7";
    let contract = new ethers.Contract(contractaddress, abi, wallet);

    // calling the "retrieve" function to read the stored value
    let read = await contract.totalSupply();
    console.log("Value stored in contract is " + read.toString());
}

main();
