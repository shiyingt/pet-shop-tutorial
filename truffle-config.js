const HDWalletProvider = require('truffle-hdwallet-provider')
const mnemonic = "12f9154ed0ca5f352b6974616c7522ad0dc89b29d5832aa7119a8b3dae0e0349"
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
  	rinkeby: {
  		provider: function() {
  			return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/0183dc6ec2d8480b82eb79dd37865624")
  		},
  		network_id: '4',
  	},
  	
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    


  }
};
