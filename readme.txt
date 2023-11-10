Install Ganache and metamask wallet 
after that update the .env file with your private key and API URL from ganache(use quickstart)
Also connect your ganache network to the meatmask wallet

 
clone this project
install node js and then


After you cloned the repository, you want to install the packages using

npm install


install truffle

First, you must compile and upload the contract to the blockchain network. Run the following commands to compile and upload the contract.

truffle compile
truffle migrate

after these commands, you will get the contract address in the terminal

Once you have pasted your private key and contract address in the .env file, simply run the command

npm start
