module.exports = {
   networks: {
     development: {
       host: "127.0.0.1",     // Localhost (default: ganache-cli)
       port: 7545,            // Port number (default: 8545)
       network_id: "*",       // Match any network ID (default: *)
     },
     // Add other network configurations here (e.g., ropsten, mainnet, etc.)
   },
   compilers: {
     solc: {
       version: "0.8.0",     // Specify the Solidity compiler version
       optimizer: {
         enabled: true,
         runs: 200,           // Number of runs for the optimizer
       },
     },
   },
 };