# pet-shop-tutorial
integrate Torus login with Ethereum's pet-shop-tutorial
See Ethereum’s pet-shop-tutorial at https://truffleframework.com/tutorials/pet-shop

## Instructions:
if you have not installed truffle, run the following line on your console.
```
npm install -g truffle
```

gitclone repository.
In Chrome browser, download extension Tampermonkey.
1.create a new user script 
2.add the script from ‘app.tor.us/embed.user.js’ and paste it in the new user script you created in step 1. Rename script to TORUS USER SCRIPT.
3.check for userscript updates and remember to enable TORUS USER SCRIPT in TamperMonkey.
cd into repository and run npm run dev.

## FAQ:
1.	Torus is unable to function properly due to two web3 injections. 
Check to make sure Metamask is disabled. Refresh the webpage.
2.	I get an error when trying to process a transaction.
Check if your account has ETH and if your account is on the correct network. You can change the network by selecting the drop down menu in the GUI. For testing out the dapp, I used rinkeby ETH. You can get rinkeby ETH by following in the instructions at https://faucet.rinkeby.io/ .
3.	I cannot find the account details by clicking on the torus extension beside the browser search bar.
Access account details by selecting the torus icon on the left bottom of the browser screen.
4.	How do I know if my transaction is successful?
You can access history tab in the GUI to see past transactions. Another way would be to access etherscan of your choice of network. As I choose rinkeby for my network, I use https://rinkeby.etherscan.io/ to check if my transactions have gone through .
5.	My transaction does not show up on etherscan. 
It takes time to include the transactions into a block. Keep calm and try again after 30 seconds.


