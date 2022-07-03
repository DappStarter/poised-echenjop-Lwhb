require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift razor misery arrow hover fat swing gauge'; 
let testAccounts = [
"0x285c4229c6f905a76ef0cc05bab2c5339bbf2defa03c0cba2258c9e44e1f465a",
"0x1c1aa51b41bb56a0e0c03ba9014687d7424dc4b4b498117a7c775cdcbcfd0f14",
"0xd91069bec99671f0f32009fba9d30de499bcef554975f840ed932f8656cc3252",
"0x093cc00e24bf7556148cc653d56b4ff9e828708e9a72dc878a894f1c2a924d72",
"0xbd7c5312690008a91f362027f8921b16b4f30d7aa7753324a4162abf3fe3073a",
"0x230df506b0cce25df00ed1afa149786ad3430cad0f2e527d7ead8ea0740649ec",
"0xaf33eddabe3aad992f0f48ba5a56c63402c53baf06235ad6bbe4de13c207a1ef",
"0x102c8c27c0b2e2476198a0cff7ffd51bfbd803741119f2b91fbc0e34b7e0682b",
"0x1c573d4901d0d9156b3e9c8fddb4855ec6fe8e8b1282496cfa821100ca476332",
"0x96dc1eb0f074ea8b548c0ab7be26fd1f3a1908f9d8d7e5b13ecd4fc4e4c27b5e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

